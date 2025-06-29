# Getting Started with AnimeChain Testnet

Welcome to **AnimeChain Testnet** - the perfect environment for developing and testing your anime-focused applications safely.

## 🧪 Why Use Testnet?

- **Free tokens** from our faucet - no real money needed
- **Same functionality** as mainnet without the risk
- **Perfect for testing** smart contracts and dApps
- **Safe environment** to learn and experiment

---

## 🚀 Quick Start

### Step 1: Add AnimeChain Testnet to Your Wallet

=== "MetaMask"

    1. **Open MetaMask** and click the network dropdown
    2. **Select "Add Network"** or "Add a network manually"
    3. **Enter the testnet details:**
    
    ```
    Network Name: AnimeChain Testnet
    RPC URL: https://rpc-conduit-orbit-deployer-d4pqjb0rle.t.conduit.xyz/
    Chain ID: 6900
    Currency Symbol: tANIME
    Block Explorer: https://explorer-conduit-orbit-deployer-d4pqjb0rle.t.conduit.xyz/
    ```
    
    4. **Click "Save"** and switch to AnimeChain Testnet

=== "One-Click Add"

    Use our interactive tool to add the network automatically:
    
    [Add Testnet to Wallet →](../../app/index.html){ .md-button .md-button--primary }

=== "Manual Configuration"

    For any EVM-compatible wallet:
    
    | Field | Value |
    |-------|-------|
    | **Network Name** | AnimeChain Testnet |
    | **RPC URL** | `https://rpc-conduit-orbit-deployer-d4pqjb0rle.t.conduit.xyz/` |
    | **Chain ID** | `6900` |
    | **Currency Symbol** | `tANIME` |
    | **Block Explorer** | `https://explorer-conduit-orbit-deployer-d4pqjb0rle.t.conduit.xyz/` |

### Step 2: Get Free Test Tokens

Get free tANIME tokens from our faucet to pay for gas fees:

[Get Test Tokens →](faucet.md){ .md-button .md-button--primary }

### Step 3: Start Building & Testing

With testnet configured and test tokens in your wallet:

- **Deploy and test smart contracts** risk-free
- **Test your dApp integrations** before mainnet
- **Experiment with transactions** at no cost
- **Learn AnimeChain features** safely

---

## 🔧 Developer Setup

### RPC Configuration

Add AnimeChain Testnet to your development environment:

```javascript
// hardhat.config.js
module.exports = {
  networks: {
    animechain_testnet: {
      url: "https://rpc-conduit-orbit-deployer-d4pqjb0rle.t.conduit.xyz/",
      chainId: 6900,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
```

```javascript
// ethers.js
const provider = new ethers.JsonRpcProvider(
  "https://rpc-conduit-orbit-deployer-d4pqjb0rle.t.conduit.xyz/"
);
```

```javascript
// viem
import { createPublicClient, http } from 'viem';

const testnetClient = createPublicClient({
  chain: {
    id: 6900,
    name: 'AnimeChain Testnet',
    nativeCurrency: { name: 'Test ANIME', symbol: 'tANIME', decimals: 18 },
    rpcUrls: {
      default: { http: ['https://rpc-conduit-orbit-deployer-d4pqjb0rle.t.conduit.xyz/'] }
    }
  },
  transport: http()
});
```

### Contract Deployment

Deploy contracts to AnimeChain testnet:

```bash
# Using Hardhat
npx hardhat run scripts/deploy.js --network animechain_testnet

# Using Foundry
forge create --rpc-url https://rpc-conduit-orbit-deployer-d4pqjb0rle.t.conduit.xyz/ \
  --private-key $PRIVATE_KEY \
  src/MyContract.sol:MyContract
```

---

## 🔍 Testnet Information

### Basic Network Details

| Property | Value |
|----------|--------|
| **Network Name** | AnimeChain Testnet |
| **Chain ID** | 6900 (0x1AF4) |
| **Native Token** | tANIME (Test ANIME) |
| **Block Time** | ~2 seconds |
| **Confirmation Time** | 1-3 blocks |
| **Parent Chain** | Arbitrum Sepolia (Chain ID: 421614) |

### Network URLs

| Service | URL |
|---------|-----|
| **RPC Endpoint** | `https://rpc-conduit-orbit-deployer-d4pqjb0rle.t.conduit.xyz/` |
| **WebSocket** | `wss://rpc-conduit-orbit-deployer-d4pqjb0rle.t.conduit.xyz/` |
| **Block Explorer** | [Testnet Explorer](https://explorer-conduit-orbit-deployer-d4pqjb0rle.t.conduit.xyz/) |
| **Faucet** | [Get Test Tokens](faucet.md) |

### Core Contracts

| Contract | Address |
|----------|---------|
| **Rollup** | `0xb31ae2dA8AF1227D3533DBE11a5E9B0bCfc738B4` |
| **Inbox** | `0x0590A4DEDCE7145e81BF59DB39029a27A6783141` |
| **Outbox** | `0xb1C0EbEADFf5f277727ABf8aCdC1031AA119A26d` |
| **Bridge** | `0x554105BbC8eB136933B210Eb60b5d7C9c592d6D8` |
| **Sequencer Inbox** | `0x742FFc80b224C815E8faeE34DC0d612c722d5Bd0` |

---

## 🧪 Testing Best Practices

### Development Workflow

1. **Write your contracts** in your local environment
2. **Deploy to testnet** using test tokens
3. **Test all functionality** thoroughly
4. **Verify on block explorer** that everything works
5. **Deploy to mainnet** when ready

### Testing Checklist

- [ ] **Contract deployment** works correctly
- [ ] **All functions** behave as expected
- [ ] **Gas usage** is reasonable
- [ ] **Error handling** works properly
- [ ] **Frontend integration** is functional
- [ ] **Edge cases** are covered

### Common Testing Scenarios

```javascript
// Test contract deployment
const contract = await MyContract.deploy();
await contract.deployed();

// Test function calls
const tx = await contract.myFunction(params);
await tx.wait();

// Test events
const events = await contract.queryFilter('MyEvent');
console.log(events);
```

---

## 🚨 Testnet Limitations

!!! warning "Testnet Considerations"
    
    - **Network resets:** Testnet may be reset during development
    - **No real value:** Test tokens have no monetary value
    - **Performance:** May be slower than mainnet during peak usage
    - **Data persistence:** Historical data may not be permanent

!!! info "Moving to Mainnet"
    When you're ready to go live:
    
    1. **Audit your contracts** with professionals
    2. **Test with small amounts** on mainnet first
    3. **Monitor gas usage** and optimize if needed
    4. **Set up monitoring** for your production deployment

---

## 📞 Support & Resources

### Getting Help

- 💬 **Discord:** [Join our testnet channel](https://discord.gg/animechain)
- 🐛 **Issues:** [Report testnet bugs](https://github.com/AnimeChain/AnimeChainDev/issues)
- 📚 **Documentation:** [Full Developer Guide](../../developers/index.md)
- 🔧 **Tools:** [Interactive Testing Tools](../../app/index.html)

### Next Steps

1. **[Get Test Tokens](faucet.md)** - Free tANIME from our faucet
2. **[Network Details](network-details.md)** - Complete testnet configuration
3. **[Add to Wallet](add-to-wallet.md)** - Detailed wallet setup
4. **[Move to Mainnet](../mainnet/getting-started.md)** - When ready for production

---

!!! success "Happy Testing!"
    You're now ready to build and test on AnimeChain Testnet. Remember - this is your safe space to experiment, learn, and perfect your applications before going live! 