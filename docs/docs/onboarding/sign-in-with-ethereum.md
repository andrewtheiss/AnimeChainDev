# Sign-In with Ethereum

The wallet path on the [Get Started](index.md) page uses **Sign-In with Ethereum** ([EIP-4361](https://eips.ethereum.org/EIPS/eip-4361)) to link your wallet address to your verified email.

## What you sign

After you sign in with your email and connect your wallet, you're asked to sign a plain-text message like this:

```text
animechain.dev wants you to sign in with your Ethereum account:
0xYourAddress...

Link this wallet to you@example.com for AnimeChain onboarding. This signature is stored only in your browser.

URI: https://animechain.dev/onboarding/
Version: 1
Chain ID: 69000
Nonce: 4f3c2a1b9d8e7f60aabb
Issued At: 2026-06-03T12:00:00.000Z
```

Signing this message:

- **Costs no gas** — it's an off-chain signature, not a transaction.
- **Grants no permissions** — it cannot move funds or approve tokens.
- **Proves ownership** — only the holder of the wallet's private key can produce a valid signature, so the wallet ↔ email link is cryptographically attested.

## What we store, and where

The record — your address, email, the message, and the signature — is currently stored **only in your browser's localStorage**. It is not sent to any server. You can inspect it under the *"What was signed & where it lives"* panel in the widget, and remove it any time with **Unlink wallet** (or by clearing site data).

## Verifying the signature yourself

Anyone can verify the link without trusting us:

```javascript
import { verifyMessage } from "ethers";

const { address, message, signature } =
  JSON.parse(localStorage.getItem("animechain.onboarding.siwe-link"));

console.log(verifyMessage(message, signature) === address); // true
```
