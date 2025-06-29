# AnimeChain Architecture Overview

High-level technical look at how AnimeChain fits into the Ethereum → Arbitrum → Orbit ecosystem.

---

## 📊 Layer Stack

```mermaid
graph TD
    eth[Ethereum Mainnet (L1)] --> arb[Arbitrum One (L2)]
    arb --> orbit[AnimeChain (L3)]

    classDef layer fill:#FFF5F8,stroke:#e38baf,stroke-width:2px;
    class eth,arb,orbit layer;
```

| Layer | Purpose | Security Source | Fees Paid In |
|-------|---------|-----------------|--------------|
| **L1** | Settlement, data availability | 🟢 Ethereum PoS | ETH |
| **L2** | Scaling via optimistic rollup | 🟢 Ethereum | ETH / ARB |
| **L3** | App-specific chain for anime & games | 🟢 Arbitrum One | ANIME |

---

## ⚙️ Technical Components

1. **Sequencer** – Orders transactions, provides rapid confirmations (<2s).
2. **Inbox / Outbox** – Message passing contracts between layers.
3. **Batch Poster** – Posts compressed calldata to L2 for DA.
4. **Fraud Proofs** – Inherited from Arbitrum: challenge invalid batches over 7 days.
5. **Bridge Contracts** – Orbit Bridge for token/data movement.

---

## 🔐 Security Model Inheritance

AnimeChain gains Ethereum-level security *indirectly*:

```
Ethereum Mainnet
   ↑  (settles)
Arbitrum One (L2)
   ↑  (settles)
AnimeChain (L3)
```

A malicious L3 sequencer can be challenged at L2 → escalates to L1 if necessary.

---

## 🚅 Performance Targets

| Metric | Goal | Rationale |
|--------|------|-----------|
| **Block Time** | ~2 s | Responsive UX for games |
| **TPS** | 1,000+ | Handle NFT mints & in-game txs |
| **Gas Price** | 0.1–1 gwei | Affordable micro-transactions |

---

## 🗺️ Data Availability Flow

1. Transactions executed on AnimeChain, state diff produced.
2. Diff batched and posted to Arbitrum One as calldata.
3. Arbitrum batches further roll up to Ethereum.

This hierarchy ensures data is eventually stored on Ethereum for censorship resistance.

---

## 🔧 Dev & Ops Considerations

- **Reset Policy (testnet):** Can wipe state to roll out upgrades quickly.
- **Upgrades (mainnet):** Use Timelock & transparent proxies, 48-hour delay.
- **Monitoring:** Grafana dashboards, on-chain health pings every block.

---

## ➡️ Continue Building

- **Network Details:** [Mainnet](../networks/mainnet/network-details.md) / [Testnet](../networks/testnet/network-details.md)
- **Token Economics:** [ANIME Overview](../animecoin/index.md)
- **Developer Quick-Start:** [Start coding](../developers/index.md) 