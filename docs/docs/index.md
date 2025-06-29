# Welcome to AnimeChain

<div align="center">
  <h1>🎌 AnimeChain Documentation</h1>
  <p><strong>Layer 3 Blockchain Built on Arbitrum Orbital</strong></p>
  <p>Your gateway to the anime-powered decentralized ecosystem</p>
</div>

---

## Choose Your Network

=== "🟢 **Mainnet**"

    **Ready for Production**
    
    - **Chain ID:** 69000 (0x10D88)
    - **Native Token:** ANIME
    - **Full Security:** Production-ready with complete security model
    - **RPC:** `https://rpc-animechain-39xf6m45e3.t.conduit.xyz/`
    - **Explorer:** [AnimeChain Explorer](https://explorer-animechain-39xf6m45e3.t.conduit.xyz/)
    
    Perfect for deploying your production applications and handling real value transactions.
    
    [Get Started →](networks/mainnet/getting-started.md){ .md-button .md-button--primary }
    [Network Details →](networks/mainnet/network-details.md){ .md-button }

=== "🧪 **Testnet**"

    **Perfect for Development**
    
    - **Chain ID:** 6900 (0x1AF4)
    - **Native Token:** tANIME (Test tokens)
    - **Free Tokens:** Get test tokens from our faucet
    - **RPC:** `https://rpc-conduit-orbit-deployer-d4pqjb0rle.t.conduit.xyz/`
    - **Explorer:** [Testnet Explorer](https://explorer-conduit-orbit-deployer-d4pqjb0rle.t.conduit.xyz/)
    
    Safe environment for testing your dApps with free test tokens.
    
    [Get Started →](networks/testnet/getting-started.md){ .md-button }
    [Get Test Tokens →](networks/testnet/faucet.md){ .md-button .md-button--primary }

---

## 🏗️ Architecture Overview

AnimeChain is built as a **Layer 3 blockchain** using Arbitrum Orbital technology:

```mermaid
graph TB
    L1[Ethereum L1<br/>🏦 Animecoin Origin]
    L2[Arbitrum L2<br/>🌉 Wrapped ANIME]
    L3[AnimeChain L3<br/>🎌 Native ANIME]
    
    L1 -->|Bridge| L2
    L2 -->|Bridge| L3
    
    L1_DESC[Original ANIME token<br/>Ethereum mainnet]
    L2_DESC[Wrapped ANIME<br/>Lower fees, faster tx]
    L3_DESC[Native gas token<br/>Anime-focused ecosystem]
    
    L1 --- L1_DESC
    L2 --- L2_DESC
    L3 --- L3_DESC
    
    style L3 fill:#ff6b9d,stroke:#333,stroke-width:3px
    style L2 fill:#4ecdc4,stroke:#333,stroke-width:2px
    style L1 fill:#45b7d1,stroke:#333,stroke-width:2px
```

### Key Benefits

- **⚡ Ultra-low fees** - Significantly cheaper than L1 and L2
- **🚀 High throughput** - Fast transaction processing
- **🎌 Anime-focused** - Built specifically for anime and gaming dApps
- **🔒 Arbitrum security** - Inherits security from Arbitrum and Ethereum
- **🌉 Seamless bridging** - Easy asset movement between layers

---

## 🚀 Quick Start

### For Users
1. [Add AnimeChain to your wallet](networks/mainnet/add-to-wallet.md)
2. [Bridge ANIME tokens](animecoin/bridging.md) from L1/L2
3. Start using anime dApps on L3!

### For Developers
1. [Set up your development environment](developers/index.md)
2. [Deploy smart contracts](developers/contracts.md)
3. [Integrate with our RPC](developers/rpc-api.md)
4. [Explore code examples](developers/examples.md)

### For Testers
1. [Connect to testnet](networks/testnet/getting-started.md)
2. [Get free test tokens](networks/testnet/faucet.md)
3. [Try our interactive tools](app/index.html)

---

## 🛠️ Developer Resources

<div class="grid cards" markdown>

-   :material-rocket-launch: **Quick Start**

    ---

    Get up and running with AnimeChain in minutes

    [:octicons-arrow-right-24: Get Started](developers/index.md)

-   :material-code-braces: **Smart Contracts**

    ---

    Core contracts, ABIs, and deployment guides

    [:octicons-arrow-right-24: View Contracts](developers/contracts.md)

-   :material-api: **RPC API**

    ---

    Complete API reference and examples

    [:octicons-arrow-right-24: API Docs](developers/rpc-api.md)

-   :material-tools: **Interactive Tools**

    ---

    Test contracts and transactions in your browser

    [:octicons-arrow-right-24: Try Tools](app/index.html)

</div>

---

## 🪙 Animecoin (ANIME)

**ANIME** is the native token powering the AnimeChain ecosystem:

| Layer | Token Type | Use Case |
|-------|------------|----------|
| **L1 (Ethereum)** | ERC-20 ANIME | Original token, governance |
| **L2 (Arbitrum)** | Wrapped ANIME | Lower fees, DeFi |
| **L3 (AnimeChain)** | Native ANIME | Gas fees, native ecosystem |

[Learn more about ANIME →](animecoin/index.md){ .md-button }

---

## 🤝 Community & Support

<div class="grid cards" markdown>

-   :fontawesome-brands-github: **GitHub**

    ---

    View source code and contribute

    [:octicons-arrow-right-24: AnimeChain GitHub](https://github.com/AnimeChain)

-   :fontawesome-brands-discord: **Discord**

    ---

    Join our developer community

    [:octicons-arrow-right-24: Join Discord](https://discord.gg/animechain)

-   :material-help-circle: **Support**

    ---

    Get help and troubleshooting

    [:octicons-arrow-right-24: Get Help](resources/troubleshooting.md)

-   :material-frequently-asked-questions: **FAQ**

    ---

    Common questions and answers

    [:octicons-arrow-right-24: View FAQ](resources/faq.md)

</div>

---

!!! tip "Need Help?"
    New to AnimeChain? Start with our [Getting Started Guide](networks/mainnet/getting-started.md) or try our [Interactive Tools](app/index.html) to explore the network safely.
