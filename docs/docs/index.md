<div align="center">
  <h1>🎌 AnimeChain Documentation</h1>
  <p><strong>Layer 3 Blockchain Built on Arbitrum Orbital</strong></p>
  <p>Your gateway to the anime-powered decentralized ecosystem</p>
</div>

<div class="faucet-button-container">
  <a href="networks/testnet/faucet" class="faucet-btn">
    <span class="btn-icon">🚰</span>
    Testnet Faucet
  </a>
</div>

---

<div class="main-actions">
  <button class="main-action-btn" onclick="showDevelopSection()">
    <span class="btn-icon">🛠️</span>
    <span class="btn-text">Develop on AnimeChain</span>
    <span class="btn-subtitle">Build applications and smart contracts</span>
  </button>
  
  <a href="use-animechain" class="main-action-btn">
    <span class="btn-icon">🎌</span>
    <span class="btn-text">Use AnimeChain</span>
    <span class="btn-subtitle">Add network, check balances, and manage tokens</span>
  </a>
</div>

<div id="develop-section" class="develop-section hidden">
  <h2>🛠️ Development Environment</h2>
  <p>Choose your preferred development network:</p>
  
  <div class="develop-options">
    <a href="networks/testnet/getting-started" class="develop-btn">
      <div class="btn-icon">🧪</div>
      <div class="btn-text">Testnet</div>
      <div class="btn-subtitle">Safe testing environment with free tokens</div>
    </a>
    
    <a href="networks/mainnet/getting-started" class="develop-btn">
      <div class="btn-icon">🟢</div>
      <div class="btn-text">Mainnet</div>
      <div class="btn-subtitle">Production-ready network for live applications</div>
    </a>
  </div>
</div>

<script>
function showDevelopSection() {
  const developSection = document.getElementById('develop-section');
  developSection.classList.remove('hidden');
  developSection.classList.add('visible');
  
  // Smooth scroll to the develop section
  setTimeout(() => {
    developSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
}
</script>

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
