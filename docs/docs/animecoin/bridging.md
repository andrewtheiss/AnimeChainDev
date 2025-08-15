# Bridging ANIME Across Layers – The Hard Way

All ANIME originates on Ethereum L1. The versions on L2 and L3 are wrapped representations of the mainnet token.

- ANIME tokens can be wrapped from L1 to L2 to be used on Arbitrum.
- ANIME tokens MUST be wrapped from L1 to L3 or from L2 to L3 to use AnimeChain natively.

This guide covers the manual paths and contract-based flows between Ethereum (L1), Arbitrum One (L2), and AnimeChain (L3).

---

## 🔄 Overview of Paths

| From | To | Bridge / UI | Challenge Period | Typical Time |
|------|----|-------------|------------------|--------------|
| L1 Ethereum | L2 Arbitrum | [Arbitrum Bridge](https://bridge.arbitrum.io/) | No | 5–15 min |
| L2 Arbitrum | L3 AnimeChain | Orbit Bridge (custom) | No | <1 min |
| L3 AnimeChain | L2 Arbitrum | Orbit Bridge (withdraw) | 7 days (optimistic) | 7 days |
| L2 Arbitrum | L1 Ethereum | Arbitrum Bridge (withdraw) | 7 days | 7 days + L1 tx |

---

## 🚀 L1 → L2 (Ethereum → Arbitrum One)

1. Visit the official **Arbitrum Bridge**.
2. Connect your wallet on Ethereum.
3. Select **ANIME** token.
4. Enter the amount and click **Deposit**.
5. Confirm the L1 transaction → wait ~12 block confirmations.
6. Once complete, ANIME appears as **Wrapped ANIME** in Arbitrum One.

!!! info "Gas Fees"
    You pay L1 gas fees (can be high). Consider batching deposits.

---

## 🚀 L2 → L3 (Arbitrum One → AnimeChain)

> This uses the **Orbit Bridge** contract.

1. Switch wallet to **Arbitrum One**.
2. Open the upcoming dApp at **bridge.animechain.xyz** *(placeholder)*.
3. Select **Destination: AnimeChain**.
4. Bridge **Wrapped ANIME** → input amount.
5. Sign transaction (minimal gas cost on L2).
6. Wait <1 minute → ANIME appears natively on AnimeChain.

---

## ⏮ L3 → L2 (AnimeChain Withdraw)

1. Switch wallet to **AnimeChain**.
2. In the bridge, choose **Withdraw to Arbitrum One**.
3. Specify amount → submit.
4. **Challenge Period:** Funds are locked ~7 days for fraud proofs.
5. After the period, claim on Arbitrum One.

---

## ↩ L2 → L1 (Arbitrum Withdraw)

Follow standard Arbitrum withdraw flow — identical concept; 7-day challenge → claim on Ethereum.

---

## 🛠️ CLI / Script Examples

=== "ethers.js (L2 → L3)"

```javascript
import { ethers } from 'ethers';
import OrbitBridgeABI from './abi/OrbitBridge.json' assert { type: 'json' };

const l2Provider = new ethers.JsonRpcProvider(process.env.ARB_RPC);
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, l2Provider);

const orbitBridge = new ethers.Contract(
  '0xOrbitBridge...', // Address TBD
  OrbitBridgeABI,
  signer
);

const tx = await orbitBridge.depositToL3(
  '0xRecipient',
  ethers.parseUnits('1000', 18)
);
console.log('Bridge tx:', tx.hash);
await tx.wait();
console.log('Deposited!');
```

=== "Hardhat Task (L3 → L2)"

```javascript
task('withdraw', 'Withdraw ANIME to L2')
  .addParam('amount', 'Amount in ANIME')
  .setAction(async (taskArgs, hre) => {
    const bridge = await hre.ethers.getContractAt('OrbitBridge', '0xOrbitBridge...');
    const tx = await bridge.withdraw(
      hre.ethers.parseUnits(taskArgs.amount, 18)
    );
    console.log('Submitted:', tx.hash);
  });
```

---

## 🏷️ Contract Addresses (testnet)

| Contract | L2 Address | L3 Address |
|----------|------------|------------|
| Orbit Bridge | `0xBr1dgE...` | `0x0rb1t...` |
| tANIME (ERC20) | `0xWr4pp...` | Native ANIME |

> **Mainnet addresses will be published post-audit.**

---

## ❓ FAQ

*Why 7 days?*  Optimistic rollups rely on fraud proofs — the window lets anyone challenge invalid withdrawals.

*Can I speed it up?*  Third-party fast-withdraw services may appear; use at your own risk.

---

## 🔗 See Also

- [ANIME Token Overview](index.md)
- [Faucet Guide](../networks/testnet/faucet.md)
- [Developer Examples](../developers/examples.md) 