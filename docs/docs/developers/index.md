# Developer Quick-Start

Build and deploy smart contracts on **AnimeChain**.

## 🚀 Setup

```bash
# Install tools
npm install --save-dev hardhat @nomicfoundation/hardhat-viem dotenv

# Add network to wallet
await window.ethereum.request({
  method: 'wallet_addEthereumChain',
  params: [{
    chainId: '0x10D88', // Mainnet: 69000, Testnet: 0x1AF4 (6900)
    chainName: 'AnimeChain',
    nativeCurrency: { name: 'ANIME', symbol: 'ANIME', decimals: 18 },
    rpcUrls: ['https://rpc-animechain-39xf6m45e3.t.conduit.xyz/'], // Mainnet
    blockExplorerUrls: ['https://explorer-animechain-39xf6m45e3.t.conduit.xyz/']
  }]
});
```

## ⚙️ Hardhat Config

```javascript
require('dotenv').config();
require('@nomicfoundation/hardhat-viem');

module.exports = {
  solidity: '0.8.20',
  networks: {
    animechain: { // Mainnet
      url: 'https://rpc-animechain-39xf6m45e3.t.conduit.xyz/',
      chainId: 69000,
      accounts: [process.env.PRIVATE_KEY]
    },
    testnet: { 
      url: 'https://rpc-conduit-orbit-deployer-d4pqjb0rle.t.conduit.xyz/',
      chainId: 6900,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
```

Deploy: `npx hardhat run scripts/deploy.js --network testnet`

---

## 4️⃣ Example Contract

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract WaifuRegistry {
    event Registered(address indexed owner, string name);

    mapping(address => string) public waifuOf;

    function register(string calldata name) external {
        waifuOf[msg.sender] = name;
        emit Registered(msg.sender, name);
    }
}
```

---

## 5️⃣ Verify on Explorer

AnimeChain Explorer supports source verification similar to Etherscan. After deployment:

1. Copy contract address.
2. Open Explorer → Contracts → Verify.
3. Paste address, set compiler version 0.8.20, licence MIT.
4. Submit verification.

---

## 6️⃣ Useful Links

- **RPC API Reference:** [Full list](rpc-api.md)
- **Contract Addresses & ABIs:** [Contracts](contracts.md)
- **Code Examples:** [Examples](examples.md)
- **Network Details:** [Mainnet](../networks/mainnet/network-details.md) / [Testnet](../networks/testnet/network-details.md)
- **Community Discord:** <https://discord.gg/animechain>

---

🚀 Happy building – tag your projects with **#AnimeChain**! 