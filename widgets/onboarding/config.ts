/// <reference types="vite/client" />
/**
 * Onboarding widget configuration.
 *
 * The Firebase web config is read from `.env` at the repo root (gitignored;
 * see `.env.example`) and baked into the widget bundle at build time by Vite.
 * Note this config is identifiers, not secrets — Firebase security comes from
 * Auth rules and the authorized-domains list, not from hiding these values.
 *
 * The Crossmint server key is NOT here and must never be: it lives in
 * Firebase Secrets and is only read by the `createWallet` Cloud Function
 * (see functions/index.js).
 */
const env = import.meta.env;

export const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY ?? "",
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN ?? "",
  projectId: env.VITE_FIREBASE_PROJECT_ID ?? "",
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET ?? "",
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID ?? "",
  appId: env.VITE_FIREBASE_APP_ID ?? "",
};

/** Region the Cloud Functions are deployed to. */
export const FUNCTIONS_REGION = "us-central1";

export function isFirebaseConfigured(): boolean {
  return Object.values(firebaseConfig).every(Boolean);
}
