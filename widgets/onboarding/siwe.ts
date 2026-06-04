/**
 * Sign-In with Ethereum (EIP-4361) for the web3 onboarding path.
 *
 * The signed message embeds the user's verified email, cryptographically
 * attesting the wallet ↔ email link. For now the resulting record lives
 * ONLY in the browser's localStorage — nothing is sent to any server.
 */
import { BrowserProvider, verifyMessage } from "ethers";

const STORAGE_KEY = "animechain.onboarding.siwe-link";
const ANIMECHAIN_CHAIN_ID = 69000;

export type SiweLink = {
  address: string;
  email: string;
  message: string;
  signature: string;
  issuedAt: string;
};

function randomNonce(): string {
  const bytes = new Uint8Array(12);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
}

/** Build a spec-compliant EIP-4361 message linking `address` to `email`. */
export function buildSiweMessage(address: string, email: string, issuedAt: string, nonce: string): string {
  const domain = window.location.host;
  const uri = window.location.origin + window.location.pathname;
  return (
    `${domain} wants you to sign in with your Ethereum account:\n` +
    `${address}\n\n` +
    `Link this wallet to ${email} for AnimeChain onboarding. ` +
    `This signature is stored only in your browser.\n\n` +
    `URI: ${uri}\n` +
    `Version: 1\n` +
    `Chain ID: ${ANIMECHAIN_CHAIN_ID}\n` +
    `Nonce: ${nonce}\n` +
    `Issued At: ${issuedAt}`
  );
}

/**
 * Connect the injected wallet, sign the link message, verify the signature
 * locally, and persist the record to localStorage. Throws with a
 * user-presentable message on any failure.
 */
export async function connectAndSign(email: string): Promise<SiweLink> {
  if (!window.ethereum) {
    throw new Error("No wallet detected. Install MetaMask (or another wallet) and reload.");
  }
  const provider = new BrowserProvider(window.ethereum as never);
  const accounts = (await provider.send("eth_requestAccounts", [])) as string[];
  if (!accounts?.length) throw new Error("Wallet connection was cancelled.");
  const signer = await provider.getSigner();
  const address = await signer.getAddress();

  const issuedAt = new Date().toISOString();
  const message = buildSiweMessage(address, email, issuedAt, randomNonce());
  const signature = await signer.signMessage(message);

  // Local verification — the same check any future backend would run.
  if (verifyMessage(message, signature).toLowerCase() !== address.toLowerCase()) {
    throw new Error("Signature verification failed. Please try again.");
  }

  const link: SiweLink = { address, email, message, signature, issuedAt };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(link));
  return link;
}

export function loadLink(): SiweLink | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as SiweLink) : null;
  } catch {
    return null;
  }
}

export function clearLink(): void {
  localStorage.removeItem(STORAGE_KEY);
}
