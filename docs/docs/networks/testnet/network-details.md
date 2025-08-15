# AnimeChain Testnet Network Details

Complete technical reference for AnimeChain **Testnet** – the sandbox network for developers to experiment safely before moving to mainnet.

## ⚠️ Testnet Disclaimer

!!! warning "Ephemeral Environment"
    The testnet is **experimental** and **may reset** without notice. **DO NOT** store real value here. Always deploy production contracts on mainnet.

---

## 🌐 Network Configuration

### Core Network Information

| Property            | Value         | Hex       |
|---------------------|---------------|-----------|
| **Network Name**    | AnimeChain Testnet | -         |
| **Chain ID**        | 6900          | 0x1AF4    |
| **Native Currency** | tANIME (test) | -         |
| **Currency Decimals** | 18          | -         |
| **Block Time**      | ~2 seconds    | -         |
| **Reset Frequency** | As-needed     | -         |

### Network URLs

| Service                | URL                                                                                             | Status |
|------------------------|---------------------------------------------------------------------------------------------------|--------|
| **RPC HTTP**           | `https://explorer-animechain-testnet-i8yja6a1a0.t.conduit.xyz/`                                   | ✅ Active |
| **RPC WebSocket**      | `wss://explorer-animechain-testnet-i8yja6a1a0.t.conduit.xyz/`                                    | ✅ Active |
| **Block Explorer**     | `https://explorer-conduit-orbit-deployer-d4pqjb0rle.t.conduit.xyz/`                              | ✅ Active |
| **Faucet (Web)**       | [/networks/testnet/faucet/](faucet.md)                                                           | ✅ Active |

---

## 🏗️ Layer Architecture

"""mermaid
graph TB
    L1[Ethereum Sepolia<br/>Layer 1 Testnet] --> L2[Arbitrum Sepolia<br/>Layer 2]
    L2 --> L3[AnimeChain Testnet<br/>Layer 3]

    L1 ---|Security| L2
    L2 ---|Scaling| L3
"""

---

## 📜 System & Token Contracts

| Contract                        | Address        | Purpose |
|---------------------------------|----------------|---------|
| **Rollup (Parent)**             | _TBA_          | Test rollup contract on Arbitrum Sepolia |
| **tANIME ERC-20 (L2 Wrapper)**  | _TBA_          | Wrapped ANIME on Arbitrum testnet |
| **Faucet Contract (L3)**        | `0xFauc3...`   | Dispenses tANIME to devs |

> Addresses may change after a testnet reset – always verify in the faucet docs or explorer.

---

## 🔧 RPC API Reference (Quick Examples)

=== "ethers.js"
    ```javascript
    import { ethers } from 'ethers';
    const provider = new ethers.JsonRpcProvider(
      'https://explorer-animechain-testnet-i8yja6a1a0.t.conduit.xyz/'
    );
    const { chainId } = await provider.getNetwork();
    console.log(chainId); // 6900
    ```

=== "Hardhat"
    ```javascript
    // hardhat.config.js
    module.exports = {
      networks: {
        anime_testnet: {
          url: 'https://explorer-animechain-testnet-i8yja6a1a0.t.conduit.xyz/',
          chainId: 6900,
          gasPrice: 0,
          accounts: [process.env.PRIVATE_KEY]
        }
      },
      solidity: '0.8.20'
    };
    ```

---

## 🛠️ Development Workflow

1. **Add the network** to your wallet – follow the [Add-to-Wallet guide](add-to-wallet.md).
2. **Get test tokens** from the [faucet](faucet.md).
3. **Deploy contracts** using your favourite framework.
4. **Test thoroughly**, remembering the network may reset.

---

## 🚀 Next Steps

- [ ] Add to Wallet Guide – see next page →
- [ ] Faucet Instructions – already available
- [ ] Contract Examples – coming soon 