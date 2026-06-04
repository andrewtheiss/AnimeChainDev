import { useEffect, useState, type FormEvent } from "react";
import type { User } from "firebase/auth";
import { isFirebaseConfigured } from "./config";
import {
  watchAuth,
  signInWithGoogle,
  completeRedirect,
  isInAppBrowser,
  sendMagicLink,
  completeMagicLink,
  signOutUser,
  provisionAccount,
} from "./firebase";
import { connectAndSign, loadLink, clearLink, type SiweLink } from "./siwe";
import "./Onboarding.css";

type Status = { kind: "info" | "error" | "success"; message: string } | null;

// Per-email record so returning web2 users land on the "ready" screen.
const ACCOUNT_READY_KEY = "animechain.onboarding.accountReady";

type ReadyAccount = { email: string; address: string };

function loadReadyAccount(email: string | null | undefined): ReadyAccount | null {
  try {
    const raw = localStorage.getItem(ACCOUNT_READY_KEY);
    if (!raw || !email) return null;
    const parsed = JSON.parse(raw) as ReadyAccount;
    return parsed.email === email.toLowerCase() ? parsed : null;
  } catch {
    return null;
  }
}

/** First 8 hex chars of an address, e.g. `0xb9aFB9Ab…` */
function shortAddress(address: string): string {
  return `${address.slice(0, 10)}…`;
}

export default function OnboardingWidget() {
  const [authReady, setAuthReady] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState("");
  const [linkSent, setLinkSent] = useState(false);
  const [busy, setBusy] = useState<"google" | "email" | "siwe" | "web2" | null>(null);
  const [status, setStatus] = useState<Status>(null);
  const [siweLink, setSiweLink] = useState<SiweLink | null>(() => loadLink());
  const [readyAccount, setReadyAccount] = useState<ReadyAccount | null>(null);

  useEffect(() => {
    if (!isFirebaseConfigured()) return;
    // Finish a magic-link landing or a mobile Google-redirect round-trip
    // (both no-ops for normal visits), then track auth.
    completeMagicLink().catch((e: Error) =>
      setStatus({ kind: "error", message: `Email link sign-in failed: ${e.message}` })
    );
    completeRedirect().catch((e: Error) =>
      setStatus({ kind: "error", message: `Google sign-in failed: ${e.message}` })
    );
    const unsub = watchAuth((u) => {
      setUser(u);
      setAuthReady(true);
      setReadyAccount(loadReadyAccount(u?.email));
    });
    return unsub;
  }, []);

  if (!isFirebaseConfigured()) {
    return (
      <div className="onboarding-card">
        <p className="onboarding-status onboarding-status--info">
          Onboarding is not live yet — the Firebase project config in{" "}
          <code>widgets/onboarding/config.ts</code> is still a placeholder.
        </p>
      </div>
    );
  }

  const run = async (which: NonNullable<typeof busy>, fn: () => Promise<void>) => {
    setBusy(which);
    setStatus(null);
    try {
      await fn();
    } catch (e) {
      const message = e instanceof Error ? e.message : "Something went wrong. Please try again.";
      // Popup closed by user is a cancel, not an error worth alarming over.
      const cancelled = /popup-closed-by-user|cancelled/i.test(message);
      setStatus({ kind: cancelled ? "info" : "error", message: cancelled ? "Sign-in cancelled." : message });
    } finally {
      setBusy(null);
    }
  };

  const handleMagicLink = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    run("email", async () => {
      await sendMagicLink(email.trim());
      setLinkSent(true);
    });
  };

  const handleSiwe = () =>
    run("siwe", async () => {
      const link = await connectAndSign(user!.email!);
      setSiweLink(link);
      setStatus({ kind: "success", message: "Wallet linked to your email." });
    });

  const handleWeb2 = () =>
    run("web2", async () => {
      const address = await provisionAccount();
      const account: ReadyAccount = { email: user!.email!.toLowerCase(), address };
      localStorage.setItem(ACCOUNT_READY_KEY, JSON.stringify(account));
      setReadyAccount(account);
    });

  const handleSignOut = () =>
    run("email", async () => {
      await signOutUser();
      setLinkSent(false);
      setReadyAccount(null);
      setStatus(null);
    });

  const statusEl = status && (
    <div role="status" aria-live="polite" className={`onboarding-status onboarding-status--${status.kind}`}>
      {status.message}
    </div>
  );

  // ---- Step 1: sign in with email -------------------------------------
  if (!user) {
    return (
      <div className="onboarding-card">
        <h3 className="onboarding-title">Create your AnimeChain account</h3>
        <p className="onboarding-subtitle">Sign in with your email to get started.</p>
        {!authReady ? (
          <p className="onboarding-status onboarding-status--info">Loading…</p>
        ) : (
          <>
            {isInAppBrowser() ? (
              <p className="onboarding-status onboarding-status--info">
                Google sign-in isn't available inside in-app browsers (like the
                MetaMask browser) — use the email link below, or open this page
                in Safari/Chrome.
              </p>
            ) : (
              <>
                <div className="onboarding-providers">
                  <button className="onboarding-button" disabled={!!busy} onClick={() => run("google", async () => void (await signInWithGoogle()))}>
                    {busy === "google" ? "Opening Google…" : "Continue with Google"}
                  </button>
                </div>
                <div className="onboarding-divider"><span>or</span></div>
              </>
            )}
            {linkSent ? (
              <p className="onboarding-status onboarding-status--success">
                Check your inbox — we sent a sign-in link to <strong>{email}</strong>.
              </p>
            ) : (
              <form className="onboarding-email-form" onSubmit={handleMagicLink}>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="onboarding-input"
                  disabled={!!busy}
                />
                <button type="submit" className="onboarding-button" disabled={!!busy}>
                  {busy === "email" ? "Sending…" : "Email me a sign-in link"}
                </button>
              </form>
            )}
          </>
        )}
        {statusEl}
      </div>
    );
  }

  // ---- Done states ------------------------------------------------------
  if (siweLink && siweLink.email === user.email) {
    return (
      <div className="onboarding-card">
        <h3 className="onboarding-title">✅ Wallet linked</h3>
        <p className="onboarding-subtitle">
          Wallet <code>{shortAddress(siweLink.address)}</code> is linked to{" "}
          <strong>{siweLink.email}</strong>.
        </p>
        <details className="onboarding-transparency">
          <summary>What was signed &amp; where it lives</summary>
          <p>
            You signed a Sign-In with Ethereum (EIP-4361) message containing your wallet
            address and email. The record below is stored <strong>only in this browser's
            localStorage</strong> — it has not been sent to any server.
          </p>
          <pre className="onboarding-pre">{siweLink.message}</pre>
        </details>
        <div className="onboarding-actions">
          <button className="onboarding-button onboarding-button--ghost" onClick={() => { clearLink(); setSiweLink(null); }}>
            Unlink wallet
          </button>
          <button className="onboarding-button onboarding-button--ghost" disabled={!!busy} onClick={handleSignOut}>
            Sign out
          </button>
        </div>
        {statusEl}
      </div>
    );
  }

  if (readyAccount) {
    return (
      <div className="onboarding-card">
        <h3 className="onboarding-title">🎉 You're all set</h3>
        <p className="onboarding-subtitle">
          Your AnimeChain account for <strong>{user.email}</strong> is ready — your
          wallet is <code>{shortAddress(readyAccount.address)}</code>.
        </p>
        <div className="onboarding-actions">
          <button className="onboarding-button onboarding-button--ghost" disabled={!!busy} onClick={handleSignOut}>
            Sign out
          </button>
        </div>
        {statusEl}
      </div>
    );
  }

  // ---- Step 2: choose a path -------------------------------------------
  return (
    <div className="onboarding-card">
      <h3 className="onboarding-title">Welcome, {user.email}</h3>
      <p className="onboarding-subtitle">How do you want to use AnimeChain?</p>
      <div className="onboarding-fork">
        {(() => {
          // MetaMask injects window.ethereum whenever the extension (or its
          // in-app browser) is present — even locked — so wallet users see
          // the SIWE option first; everyone else sees email first.
          const hasWallet = typeof window !== "undefined" && !!window.ethereum;
          const walletOption = (
            <div className="onboarding-option" key="wallet">
              <h4>Sign In Once with Wallet</h4>
              <p>
                Link your wallet to your email with Sign-In with Ethereum. You'll sign one
                message — it stays in your browser and costs no gas.
              </p>
              <button className="onboarding-button" disabled={!!busy} onClick={handleSiwe}>
                {busy === "siwe" ? "Check your wallet…" : "Sign in with Ethereum"}
              </button>
            </div>
          );
          const emailOption = (
            <div className="onboarding-option" key="email">
              <h4>Continue with Email</h4>
              <p>No wallet needed — continue with the account you just signed in with.</p>
              <button className="onboarding-button" disabled={!!busy} onClick={handleWeb2}>
                {busy === "web2" ? "Setting up…" : "Continue with email"}
              </button>
            </div>
          );
          return hasWallet ? [walletOption, emailOption] : [emailOption, walletOption];
        })()}
      </div>
      <div className="onboarding-actions">
        <button className="onboarding-button onboarding-button--ghost" disabled={!!busy} onClick={handleSignOut}>
          Use a different email
        </button>
      </div>
      {statusEl}
    </div>
  );
}
