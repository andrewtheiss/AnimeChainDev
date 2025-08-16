# Developer Quick-Start

Build and deploy smart contracts on **AnimeChain**.

Animechain is like most Ethereum based chains.  If you can learn to deploy code on Ethereum or an Eth testnet, you only need to change a few parameters to deploy all that code on Animechain (and of course... some funds).

## Development and Deployment via a UI (Remix)

<div class="dev-quickstart-ui">
  <p>Developing via the Remix UI (remix.ethereum.org) is the simplest way to test</p>
  <ol>
    <li>Add AnimeChain (or AnimeChain Testnet) to your browser wallet provider.</li>
    <li>Select the wallet/network so it's active and ensure you have funds. If you need funds on testnet, use the <a href="/app/">Testnet Faucet</a>.</li>
    <li>In Remix, verify the selected network is AnimeChain and your account shows a non‑zero balance.</li>
    <li>Deploy your contract from the Deploy tab.</li>
  </ol>

  <div class="shot-cards">
    <div class="shot-card">
      <div class="shot-header"><span class="shot-dot"></span><span>Remix Deploy tab targeting AnimeChain</span></div>
      <img alt="Remix Deploy tab targeting AnimeChain" src="/assets/images/network.png" />
    </div>
    <div class="shot-card">
      <div class="shot-header"><span class="shot-dot"></span><span>AnimeChain selected with compiled contract and balance visible</span></div>
      <img alt="Remix with AnimeChain selected, compiled contract, and balance visible" src="/assets/images/network2.png" />
    </div>
  </div>

  <div>
    Reference: <a href="https://explorer-animechain-39xf6m45e3.t.conduit.xyz/tx/0x20c108140ba88af35cfc8afdfa9e80bf0004752251b17fde9c4d401a19ad139f">Successful contract creation on AnimeChain explorer</a>
  </div>
</div>

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
      url: 'https://explorer-animechain-testnet-i8yja6a1a0.t.conduit.xyz/',
      chainId: 6900,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
```

Deploy: `npx hardhat run scripts/deploy.js --network testnet`

---

## Example Contract

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

  <div class="gas-warning" style="margin-top: 1.5rem; padding: 1rem; border: 1px solid rgba(239,68,68,.25); background: rgba(239,68,68,.06); border-radius: 12px;">
    <h3 style="margin: 0 0 .5rem; color:#b91c1c;">Warning: Elevated Gas Price on AnimeChain</h3>
    <p style="margin: 0 0 .5rem;">
      AnimeChain currently uses a manually increased gas price of <strong>435.5 Gwei</strong> (ANIME). When estimating or setting gas, be sure to account for this higher value, or your transactions may fail or underprice.
    </p>
    <div style="display:flex; align-items:flex-start; gap: 1rem; flex-wrap: wrap;">
      <img src="/assets/images/gastracker.webp" alt="AnimeChain Gas Tracker" style="max-width: 520px; width: 100%; border-radius: 10px; border: 1px solid rgba(0,0,0,0.08);" />
      <div style="min-width:280px; flex:1;">
        <div style="font-weight:700; margin-bottom:.35rem;">Example (ethers v6):</div>
        <pre style="margin:0; overflow:auto;"><code>// Legacy-style gasPrice
const gasPrice = ethers.parseUnits('435.5', 'gwei');
const tx = await wallet.sendTransaction({ to, value, gasPrice });

// Or EIP-1559 style
const maxFeePerGas = ethers.parseUnits('435.5', 'gwei');
const maxPriorityFeePerGas = ethers.parseUnits('0.5', 'gwei');
const tx1559 = await wallet.sendTransaction({ to, value, maxFeePerGas, maxPriorityFeePerGas });
</code></pre>
      </div>
    </div>
  </div>
---

## Verify on Explorer

What is 'Verification'?  Since code is just 1's and 0's, verification PROVES to the internet that your deployed code matches the code in your repository.  This allows anyone on the internet to check that your code matches the code you deployed and you're not doing anything fishy.

AnimeChain Explorer supports the same source verification (similar to Etherscan). After deployment:

1. Copy contract address.
2. Open Explorer → Contracts → Verify.
3. Paste address, set compiler version 0.8.20, licence MIT.
4. Submit verification.

---

## Useful Links

- **RPC API Reference:** [Full list](rpc-api.md)
- **Contract Addresses & ABIs:** [Contracts](contracts.md)
- **Code Examples:** [Examples](examples.md)
- Network parameters: see [Use AnimeChain](../use-animechain.md)
- **DevZuki Community:** <https://t.co/4xlpVFIfDx> — community-led developer support (docs maintained by a DevZuki member)


---

**Note**:  All basic Solidity contracts work just the same on Animechain!  