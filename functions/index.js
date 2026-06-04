/**
 * Onboarding backend.
 *
 * `createWallet` provisions a Crossmint EVM smart wallet for the signed-in
 * user's verified email, gated by a Firestore-configured signup cap:
 *
 *   onboarding/config            { maxEmails, registeredCount }
 *   onboardingEmails/<email>     { email, walletAddress, createdAt }
 *
 * Flow: if the email is already registered, return its wallet without
 * touching Crossmint. Otherwise atomically reserve a slot (rejecting when
 * registeredCount >= maxEmails), then create the wallet. Crossmint's
 * create endpoint is idempotent per owner, so retries are safe.
 *
 * Edit `maxEmails` any time in the Firebase console → Firestore →
 * onboarding → config. The Firestore rules deny all client access; only
 * this function (admin SDK) reads or writes these collections.
 *
 * The Crossmint server key lives in Firebase Secrets — set it once with:
 *   firebase functions:secrets:set CROSSMINT_SERVER_KEY
 * It is never sent to, or readable from, the browser.
 */
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");
const { initializeApp } = require("firebase-admin/app");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");

initializeApp();
const db = getFirestore();

const CROSSMINT_SERVER_KEY = defineSecret("CROSSMINT_SERVER_KEY");

const CROSSMINT_WALLETS_URL = "https://www.crossmint.com/api/2025-06-09/wallets";

// Used to self-initialize onboarding/config on first call if an admin
// hasn't created it yet; after that the Firestore value is authoritative.
const DEFAULT_MAX_EMAILS = 100;

// Origins allowed to call this function from a browser. localhost is for
// `npm run dev` against the live backend.
const ALLOWED_ORIGINS = [
  "https://animechain.dev",
  "https://www.animechain.dev",
  "http://localhost:8000",
  "http://127.0.0.1:8000",
];

exports.createWallet = onCall(
  // invoker:public opens the HTTP layer (required for browser CORS
  // preflights); real auth is the Firebase ID token checked below.
  {
    region: "us-central1",
    secrets: [CROSSMINT_SERVER_KEY],
    invoker: "public",
    cors: ALLOWED_ORIGINS,
    maxInstances: 10,
  },
  async (request) => {
    const rawEmail = request.auth?.token?.email;
    if (!rawEmail) {
      throw new HttpsError("unauthenticated", "Sign in before creating an account.");
    }
    // Google emails are verified by the provider; magic-link emails are
    // verified by possession of the link. Reject anything else.
    if (request.auth.token.email_verified === false) {
      throw new HttpsError("failed-precondition", "Verify your email first.");
    }
    const email = rawEmail.toLowerCase();

    const configRef = db.doc("onboarding/config");
    const emailRef = db.collection("onboardingEmails").doc(email);

    // Atomically: return the existing registration, or reserve a slot.
    const reservation = await db.runTransaction(async (tx) => {
      const [configSnap, emailSnap] = await Promise.all([tx.get(configRef), tx.get(emailRef)]);

      const existingAddress = emailSnap.exists ? emailSnap.get("walletAddress") : undefined;
      if (existingAddress) return { existingAddress };
      // Reserved by a previous call that died before finishing — the
      // Crossmint call below is idempotent, so just complete it.
      if (emailSnap.exists) return { resuming: true };

      const maxEmails = configSnap.exists ? configSnap.get("maxEmails") ?? 0 : DEFAULT_MAX_EMAILS;
      const registeredCount = configSnap.exists ? configSnap.get("registeredCount") ?? 0 : 0;
      if (registeredCount >= maxEmails) {
        throw new HttpsError("resource-exhausted", "Sign-ups are currently full. Please check back soon.");
      }

      tx.set(configRef, { maxEmails, registeredCount: registeredCount + 1 }, { merge: true });
      tx.set(emailRef, { email, createdAt: FieldValue.serverTimestamp() });
      return { reserved: true };
    });

    if (reservation.existingAddress) {
      return { address: reservation.existingAddress };
    }

    let address;
    try {
      const resp = await fetch(CROSSMINT_WALLETS_URL, {
        method: "POST",
        headers: {
          "X-API-KEY": CROSSMINT_SERVER_KEY.value(),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chainType: "evm",
          type: "smart",
          // The user's own email is the wallet's admin signer (Crossmint
          // verifies via email OTP when a signature is needed). The "api-key"
          // signer type would make the platform the custodian, but it
          // requires Crossmint support to enable per-project.
          config: { adminSigner: { type: "email", email } },
          owner: `email:${email}`,
        }),
      });
      if (!resp.ok) {
        const body = await resp.text().catch(() => "");
        throw new Error(`Crossmint responded ${resp.status}: ${body}`);
      }
      ({ address } = await resp.json());
    } catch (err) {
      console.error("Crossmint wallet creation failed", err);
      // Release the slot we reserved so a failed attempt doesn't eat capacity.
      if (reservation.reserved) {
        await db
          .runTransaction(async (tx) => {
            tx.delete(emailRef);
            tx.update(configRef, { registeredCount: FieldValue.increment(-1) });
          })
          .catch((rollbackErr) => console.error("Slot rollback failed", rollbackErr));
      }
      throw new HttpsError("internal", "Account setup failed. Please try again.");
    }

    await emailRef.set({ walletAddress: address }, { merge: true });
    return { address };
  }
);
