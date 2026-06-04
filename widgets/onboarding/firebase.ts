/**
 * Thin wrapper around Firebase Auth + Functions for the onboarding widget.
 *
 * All of firebase lands in its own vite chunk (see manualChunks in
 * vite.config.ts) so it only downloads on pages that mount this widget.
 */
import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  onAuthStateChanged,
  signOut,
  type User,
} from "firebase/auth";
import { getFunctions, httpsCallable } from "firebase/functions";
import { firebaseConfig, FUNCTIONS_REGION } from "./config";

// localStorage key holding the email while a magic link is in flight.
const PENDING_EMAIL_KEY = "animechain.onboarding.pendingEmail";

function app(): FirebaseApp {
  return getApps()[0] ?? initializeApp(firebaseConfig);
}

export function watchAuth(cb: (user: User | null) => void): () => void {
  return onAuthStateChanged(getAuth(app()), cb);
}

/**
 * Google blocks OAuth inside embedded in-app browsers (MetaMask, wallet
 * and social-app webviews) with `disallowed_useragent` — no flow works
 * there, so callers should steer those users to the email link instead.
 */
export function isInAppBrowser(): boolean {
  return /MetaMaskMobile|WebView|wv\)|FBAN|FBAV|Instagram|Line\//i.test(navigator.userAgent);
}

function isMobile(): boolean {
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

/**
 * Desktop uses a popup; mobile browsers use a full-page redirect (popups
 * are unreliable there). On the redirect path this navigates away and
 * resolves to null — the result lands via completeRedirect()/watchAuth
 * after the round-trip.
 */
export async function signInWithGoogle(): Promise<User | null> {
  const auth = getAuth(app());
  const provider = new GoogleAuthProvider();
  if (isMobile()) {
    await signInWithRedirect(auth, provider);
    return null;
  }
  const res = await signInWithPopup(auth, provider);
  return res.user;
}

/** Surface errors from a Google redirect round-trip (no-op otherwise). */
export async function completeRedirect(): Promise<void> {
  await getRedirectResult(getAuth(app()));
}

/** Email a one-time sign-in link that lands back on the current page. */
export async function sendMagicLink(email: string): Promise<void> {
  await sendSignInLinkToEmail(getAuth(app()), email, {
    url: window.location.href,
    handleCodeInApp: true,
  });
  localStorage.setItem(PENDING_EMAIL_KEY, email);
}

/**
 * If the current URL is a magic-link landing, finish the sign-in.
 * Returns the user on success, null when the URL is not a sign-in link.
 */
export async function completeMagicLink(): Promise<User | null> {
  const auth = getAuth(app());
  if (!isSignInWithEmailLink(auth, window.location.href)) return null;
  let email = localStorage.getItem(PENDING_EMAIL_KEY);
  if (!email) {
    // Link was opened on a different device/browser than it was requested on.
    email = window.prompt("Confirm the email you used to sign in:") || "";
  }
  if (!email) return null;
  const res = await signInWithEmailLink(auth, email, window.location.href);
  localStorage.removeItem(PENDING_EMAIL_KEY);
  // Drop the one-time-code params so refreshes don't retry a consumed link.
  window.history.replaceState(null, "", window.location.pathname);
  return res.user;
}

export async function signOutUser(): Promise<void> {
  await signOut(getAuth(app()));
}

/**
 * Web2 path: ask the backend to provision the account. The Cloud Function
 * reads the caller's verified email from their Firebase ID token — nothing
 * else is sent from the browser. Returns the account's wallet address.
 */
export async function provisionAccount(): Promise<string> {
  const fns = getFunctions(app(), FUNCTIONS_REGION);
  const res = await httpsCallable<void, { address: string }>(fns, "createWallet")();
  return res.data.address;
}
