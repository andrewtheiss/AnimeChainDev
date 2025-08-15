# Getting Started with AnimeChain Mainnet

Welcome to **AnimeChain Mainnet** - the production-ready Layer 3 blockchain for anime and gaming applications.

## 🚀 Quick Start

### Step 1: Add AnimeChain to Your Wallet

=== "MetaMask"

    1. **Open MetaMask** and click the network dropdown
    2. **Select "Add Network"** or "Add a network manually"
    3. **Enter the network details:**
    
    ```
    Network Name: AnimeChain
    RPC URL: https://rpc-animechain-39xf6m45e3.t.conduit.xyz/
    Chain ID: 69000
    Currency Symbol: ANIME
    Block Explorer: https://explorer-animechain-39xf6m45e3.t.conduit.xyz/
    ```
    
    4. **Click "Save"** and switch to AnimeChain

=== "Other Wallets"

    Use these network details for any EVM-compatible wallet:
    
    | Field | Value |
    |-------|-------|
    | **Network Name** | AnimeChain |
    | **RPC URL** | `https://rpc-animechain-39xf6m45e3.t.conduit.xyz/` |
    | **Chain ID** | `69000` |
    | **Currency Symbol** | `ANIME` |
    | **Block Explorer** | `https://explorer-animechain-39xf6m45e3.t.conduit.xyz/` |

### Step 2: Get ANIME Tokens

Since AnimeChain uses ANIME as the native gas token, you'll need ANIME to pay for transactions.

!!! info "Getting ANIME Tokens"
    ANIME tokens originate on Ethereum L1 and can be bridged to AnimeChain:
    
    1. **L1 → L2:** Bridge ANIME from Ethereum to Arbitrum
    2. **L2 → L3:** Bridge ANIME from Arbitrum to AnimeChain
    
    [Learn more about bridging →](../../animecoin/bridging.md)

### Step 3: Start Building

Once you have ANIME tokens and your wallet is connected:

- **Deploy smart contracts** using familiar tools like Hardhat or Foundry
- **Interact with dApps** in the AnimeChain ecosystem
- **Explore the block explorer** to monitor transactions

---

## 🔧 Developer Setup

### RPC Configuration

Add AnimeChain to your development environment:

```javascript
// hardhat.config.js
module.exports = {
  networks: {
    animechain: {
      url: "https://rpc-animechain-39xf6m45e3.t.conduit.xyz/",
      chainId: 69000,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
```

```javascript
// ethers.js
const provider = new ethers.JsonRpcProvider(
  "https://rpc-animechain-39xf6m45e3.t.conduit.xyz/"
);
```

```javascript
// viem
import { createPublicClient, http } from 'viem';

const client = createPublicClient({
  chain: {
    id: 69000,
    name: 'AnimeChain',
    nativeCurrency: { name: 'ANIME', symbol: 'ANIME', decimals: 18 },
    rpcUrls: {
      default: { http: ['https://rpc-animechain-39xf6m45e3.t.conduit.xyz/'] }
    }
  },
  transport: http()
});
```

### Contract Deployment

Deploy contracts to AnimeChain mainnet:

```bash
# Using Hardhat
npx hardhat run scripts/deploy.js --network animechain

# Using Foundry
forge create --rpc-url https://rpc-animechain-39xf6m45e3.t.conduit.xyz/ \
  --private-key $PRIVATE_KEY \
  src/MyContract.sol:MyContract
```

---

## 🔍 Network Information

### Basic Network Details

| Property | Value |
|----------|--------|
| **Network Name** | AnimeChain |
| **Chain ID** | 69000 (0x10D88) |
| **Native Token** | ANIME |
| **Block Time** | ~2 seconds |
| **Confirmation Time** | 1-3 blocks |

### Network URLs

| Service | URL |
|---------|-----|
| **RPC Endpoint** | `https://rpc-animechain-39xf6m45e3.t.conduit.xyz/` |
| **WebSocket** | `wss://rpc-animechain-39xf6m45e3.t.conduit.xyz/` |
| **Block Explorer** | [https://explorer-animechain-39xf6m45e3.t.conduit.xyz/](https://explorer-animechain-39xf6m45e3.t.conduit.xyz/) |

### Key Features

- ✅ **EVM Compatible** - Full Ethereum compatibility
- ✅ **Low Gas Fees** - Significantly cheaper than L1 and L2
- ✅ **Fast Finality** - Quick transaction confirmation
- ✅ **Arbitrum Security** - Inherits security from Arbitrum
- ✅ **Native ANIME** - ANIME token as gas currency

---

## 🛡️ Security Considerations

### Mainnet Best Practices

!!! warning "Real Value Network"
    AnimeChain Mainnet handles real value. Always:
    
    - **Test thoroughly on testnet first**
    - **Use proper key management**
    - **Audit smart contracts before deployment**
    - **Start with small amounts**

### Smart Contract Security

- **Audit your contracts** before mainnet deployment
- **Use well-tested libraries** like OpenZeppelin
- **Test edge cases** and error conditions
- **Implement proper access controls**

---

## 📞 Support & Resources

### Getting Help

- 💬 **DevZuki Community:** [Join here](https://t.co/4xlpVFIfDx) — community-led developer support; docs maintained by a DevZuki member
- 🐛 **Issues:** [GitHub Issues](https://github.com/AnimeChain/AnimeChainDev/issues)
- 📚 **Documentation:** [Full API Reference](../../developers/rpc-api.md)
- 🔧 **Tools:** [Interactive Developer Tools](../../app.md)

### Next Steps

1. **[Network Details](network-details.md)** - Complete network configuration
2. **[Add to Wallet Guide](add-to-wallet.md)** - Detailed wallet setup
3. **[Bridge ANIME](../../animecoin/bridging.md)** - Get tokens for gas
4. **[Developer Guide](../../developers/index.md)** - Start building dApps

---

!!! success "Ready to Build!"
    You're now ready to build on AnimeChain Mainnet. Remember to test everything on testnet first, then deploy with confidence to mainnet. 