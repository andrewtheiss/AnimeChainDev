# Architecture Overview

AnimeChain is a **Layer 3 blockchain** built on Arbitrum Orbital technology.

## 📊 Layer Stack

**L1 (Ethereum)** → **L2 (Arbitrum)** → **L3 (AnimeChain)**

| Layer | Purpose | Security | Currency |
|-------|---------|----------|----------|
| **L1** | Settlement & data availability | Ethereum PoS | ETH |
| **L2** | Optimistic rollup scaling | Ethereum | ETH/ARB |
| **L3** | Anime & gaming apps | Arbitrum One | ANIME |

## ⚙️ Components

- **Sequencer**: Orders transactions (~2s confirmations)
- **Bridges**: Token/data movement between layers  
- **Fraud Proofs**: 7-day challenge window for security
- **Data Availability**: Compressed calldata posted to L2

---

## 🚅 Performance

- **Block Time**: ~2s (responsive gaming UX)
- **TPS**: 1,000+ (NFT mints, in-game transactions)  
- **Gas**: 0.1-1 gwei (affordable micro-transactions)

## 🗺️ Data Flow

Transactions → AnimeChain → Arbitrum One → Ethereum (for censorship resistance)

**Links**: [Network Details](../networks/mainnet/network-details.md) • [ANIME Token](../animecoin/index.md) • [Start Building](../developers/index.md) 