# Use AnimeChain

## Networks Table of Contents

### Mainnet
- [Getting Started](#getting-started-mainnet)
- [Network Details](#network-information-mainnet)
- [Add to Wallet](#add-to-wallet-mainnet)

### Testnet
- [Getting Started](#getting-started-testnet)
- [Network Details](#network-information-testnet)
- [Faucet](#faucet)
- [Add to Wallet](#add-to-wallet-testnet)

## How to use AnimeChain

In order to use AnimeChain, you must have **Animecoin (ANIME) on AnimeChain** as the native token for gas and transactions.

- Bridge ANIME to AnimeChain: see the [Bridging guide](animecoin/bridging.md).
- Add the AnimeChain network to your wallet (and optionally L1/L2): use the “Add ANIME Token to Wallet” section below or follow the Network guides.
- Add token contracts to your wallet to track balances (L1 ERC‑20, L2 Wrapped ANIME). Once done, you’re ready to develop or use dApps on AnimeChain.

---

## Mainnet

### Getting Started (Mainnet)

1) Add AnimeChain to your wallet

```text
Network Name: AnimeChain
RPC URL: https://rpc-animechain-39xf6m45e3.t.conduit.xyz/
Chain ID: 69000
Currency Symbol: ANIME
Block Explorer: https://explorer-animechain-39xf6m45e3.t.conduit.xyz/
```

2) Get ANIME tokens (for gas)

- ANIME originates on Ethereum L1. Bridge L1 → L2 → L3 using the Relay interface below or see the Bridging guide.

3) Start building

- Deploy with Hardhat/Foundry, interact with dApps, and monitor on the explorer.

### Developer Setup (Mainnet)

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
import { ethers } from 'ethers';
const provider = new ethers.JsonRpcProvider(
  "https://rpc-animechain-39xf6m45e3.t.conduit.xyz/"
);
```

```typescript
// viem
import { createPublicClient, http } from 'viem';
const client = createPublicClient({
  chain: {
    id: 69000,
    name: 'AnimeChain',
    nativeCurrency: { name: 'ANIME', symbol: 'ANIME', decimals: 18 },
    rpcUrls: { default: { http: ['https://rpc-animechain-39xf6m45e3.t.conduit.xyz/'] } }
  },
  transport: http()
});
```

### Network Information (Mainnet) {#add-to-wallet-mainnet}

| Property | Value |
|----------|-------|
| Network Name | AnimeChain |
| Chain ID | 69000 (0x10D88) |
| Native Token | ANIME |
| Block Time | ~2s |

| Service | URL |
|---------|-----|
| RPC HTTP | `https://rpc-animechain-39xf6m45e3.t.conduit.xyz/` |
| WebSocket | `wss://rpc-animechain-39xf6m45e3.t.conduit.xyz/` |
| Explorer | `https://explorer-animechain-39xf6m45e3.t.conduit.xyz/` |
| Bridge Interface | [Relay Bridge](https://relay.link/bridge/ethereum?includeChainIds=6167f9a0-84dc-4296-8a26-2bb3cc56dc2c&fromChainId=69000&toCurrency=0x4dc26fc5854e7648a064a4abd590bbe71724c277) |

### Gas Note (Mainnet)

- Current manual gas price: 435.5 Gwei (ANIME). Ensure your gas settings reflect this, or transactions may fail.

```javascript
// Legacy gasPrice
const gasPrice = ethers.parseUnits('435.5', 'gwei');
await wallet.sendTransaction({ to, value, gasPrice });

// EIP-1559
const maxFeePerGas = ethers.parseUnits('435.5', 'gwei');
const maxPriorityFeePerGas = ethers.parseUnits('0.5', 'gwei');
await wallet.sendTransaction({ to, value, maxFeePerGas, maxPriorityFeePerGas });
```

---

## Testnet

### Getting Started (Testnet)

```text
Network Name: AnimeChain Testnet
RPC URL: https://explorer-animechain-testnet-i8yja6a1a0.t.conduit.xyz/
Chain ID: 6900
Currency Symbol: tANIME
Block Explorer: https://explorer-conduit-orbit-deployer-d4pqjb0rle.t.conduit.xyz/
```

### Developer Setup (Testnet)

```javascript
// hardhat.config.js
module.exports = {
  networks: {
    animechain_testnet: {
      url: "https://explorer-animechain-testnet-i8yja6a1a0.t.conduit.xyz/",
      chainId: 6900,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
```

```javascript
// ethers.js
import { ethers } from 'ethers';
const provider = new ethers.JsonRpcProvider(
  "https://explorer-animechain-testnet-i8yja6a1a0.t.conduit.xyz/"
);
```

```typescript
// viem
import { createPublicClient, http } from 'viem';
const testnetClient = createPublicClient({
  chain: {
    id: 6900,
    name: 'AnimeChain Testnet',
    nativeCurrency: { name: 'Test ANIME', symbol: 'tANIME', decimals: 18 },
    rpcUrls: { default: { http: ['https://explorer-animechain-testnet-i8yja6a1a0.t.conduit.xyz/'] } }
  },
  transport: http()
});
```

### Network Information (Testnet) {#add-to-wallet-testnet}

| Property | Value |
|----------|-------|
| Network Name | AnimeChain Testnet |
| Chain ID | 6900 (0x1AF4) |
| Native Token | tANIME |
| Parent Chain | Arbitrum Sepolia (421614) |

| Service | URL |
|---------|-----|
| RPC HTTP | `https://explorer-animechain-testnet-i8yja6a1a0.t.conduit.xyz/` |
| WebSocket | `wss://explorer-animechain-testnet-i8yja6a1a0.t.conduit.xyz/` |
| Block Explorer | [Testnet Explorer](https://explorer-conduit-orbit-deployer-d4pqjb0rle.t.conduit.xyz/) |
| Faucet | [Get Test Tokens](#faucet) |

### Core Contracts (Testnet)

| Contract | Address |
|----------|---------|
| Rollup | `0xb31ae2dA8AF1227D3533DBE11a5E9B0bCfc738B4` |
| Inbox | `0x0590A4DEDCE7145e81BF59DB39029a27A6783141` |
| Outbox | `0xb1C0EbEADFf5f277727ABf8aCdC1031AA119A26d` |
| Bridge | `0x554105BbC8eB136933B210Eb60b5d7C9c592d6D8` |
| Sequencer Inbox | `0x742FFc80b224C815E8faeE34DC0d612c722d5Bd0` |

### Faucet

- Recommended: [Use Interactive Faucet](/app/)
- Manual flow: Connect wallet → Sign commitment message → Receive tokens.


<div class="use-animechain-container">
  <div class="network-params-section">
    <h2>🔗 Network Parameters</h2>
    <div class="network-cards">
      <div class="network-card">
        <h3>🟢 Mainnet</h3>
        <div class="param-item">
          <strong>Chain ID:</strong> 69000 (0x10D88)
        </div>
        <div class="param-item">
          <strong>RPC URL:</strong> https://rpc-animechain-39xf6m45e3.t.conduit.xyz/
        </div>
        <div class="param-item">
          <strong>Native Token:</strong> ANIME
        </div>
        <div class="param-item">
          <strong>Explorer:</strong> <a href="https://explorer-animechain-39xf6m45e3.t.conduit.xyz/" target="_blank">AnimeChain Explorer</a>
        </div>
      </div>
      
      <div class="network-card">
        <h3>🧪 Testnet</h3>
        <div class="param-item">
          <strong>Chain ID:</strong> 6900 (0x1AF4)
        </div>
        <div class="param-item">
          <strong>RPC URL:</strong> https://explorer-animechain-testnet-i8yja6a1a0.t.conduit.xyz/
        </div>
        <div class="param-item">
          <strong>Native Token:</strong> tANIME (Test tokens)
        </div>
        <div class="param-item">
          <strong>Explorer:</strong> <a href="https://explorer-conduit-orbit-deployer-d4pqjb0rle.t.conduit.xyz/" target="_blank">Testnet Explorer</a>
        </div>
      </div>
    </div>

    <div class="network-card" style="margin-top:1rem;">
      <h3>📜 Token Contracts</h3>
      <div class="param-item"><strong>L1 ANIME (ERC-20):</strong> <code id="l1TokenAddress">0x4dc26fc5854e7648a064a4abd590bbe71724c277</code></div>
      <div class="param-item"><strong>L2 Wrapped ANIME (Arbitrum):</strong> <code id="l2TokenAddress">0x37a645648df29205c6261289983fb04ecd70b4b3</code></div>
    </div>

    <div class="add-token-section">
      <div style="display:flex; align-items:center; justify-content:center; gap:.5rem; flex-wrap:wrap;">
        <button class="add-token-btn" onclick="addAnimeToken()">
          <span class="btn-icon"><img src="/assets/images/animecoin.webp" alt="ANIME" style="height: 1.1em; vertical-align: -0.15em;" /></span>
          Add ANIME Token to Wallet
        </button>
      </div>
      <div style="margin-top:.5rem; display:flex; align-items:center; justify-content:center;">
        <select id="tokenNetworkSelect" class="add-token-select" aria-label="Select token network" style="min-width:320px;">
          <option value="l3" selected>AnimeChain (L3) — add network</option>
          <option value="l2">Wrapped ANIME on Arbitrum (L2)</option>
          <option value="l1">ANIME on Ethereum (L1)</option>
        </select>
      </div>
      <div id="add-token-status" style="margin-top:.5rem; font-size:.95rem;"></div>
    </div>
  </div>

  <div class="balance-section">
    <h2>💰 Check Your Balance</h2>
    <div class="balance-input-row">
      <input id="walletAddressInput" class="address-input" type="text" placeholder="Enter wallet address (0x...)" />
    </div>
    <div class="balance-buttons">
      <button class="balance-btn flat l1-btn" onclick="checkL1Balance()">
        <img class="btn-icon-img" src="/assets/images/eth.webp" alt="Ethereum" />
        <span>Check L1 Balance (Ethereum)</span>
      </button>
      <button class="balance-btn flat l2-btn" onclick="checkL2Balance()">
        <img class="btn-icon-img" src="/assets/images/arbitrum.webp" alt="Arbitrum" />
        <span>Check L2 Balance (Arbitrum)</span>
      </button>
      <button class="balance-btn flat l3-btn" onclick="checkL3Balance()">
        <img class="btn-icon-img" src="/assets/images/animecoin.webp" alt="AnimeChain" />
        <span>Check L3 on AnimeChain Explorer</span>
      </button>
    </div>
    <div id="balance-output" class="balance-output"></div>
  </div>
</div>

<script>
const L1_TOKEN_ADDRESS = '0x4dc26fc5854e7648a064a4abd590bbe71724c277';
const L2_TOKEN_ADDRESS = '0x37a645648df29205c6261289983fb04ecd70b4b3';
const L1_RPC = 'https://node1.web3api.com/';
const L2_RPC = 'https://arb1.arbitrum.io/rpc';
const L3_EXPLORER_BASE = 'https://explorer-animechain-39xf6m45e3.t.conduit.xyz/address/';

function sanitizeAddress(addr) {
  if (!addr) return null;
  let a = String(addr).trim();
  if (!a.startsWith('0x')) a = '0x' + a;
  if (a.length !== 42) return null;
  return a;
}

function padLeftToBytes32(hexWithout0x) {
  return hexWithout0x.padStart(64, '0');
}

function buildBalanceOfData(address) {
  const method = '70a08231'; // balanceOf(address)
  const addr = address.replace(/^0x/, '').toLowerCase();
  return '0x' + method + padLeftToBytes32(addr);
}

function formatUnits(valueBigInt, decimals) {
  const negative = valueBigInt < 0n;
  let value = negative ? -valueBigInt : valueBigInt;
  const base = 10n ** BigInt(decimals);
  const whole = value / base;
  const fraction = value % base;
  const fractionStr = fraction.toString().padStart(decimals, '0').replace(/0+$/, '');
  return (negative ? '-' : '') + whole.toString() + (fractionStr ? '.' + fractionStr : '');
}

async function addAnimeToken() {
  const select = document.getElementById('tokenNetworkSelect');
  const which = select ? select.value : 'l2';
  const statusEl = document.getElementById('add-token-status');

  if (!window.ethereum || !window.ethereum.request) {
    if (statusEl) statusEl.textContent = 'No injected wallet detected (e.g., MetaMask).';
    return;
  }

  try {
    if (which === 'l3') {
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [{
          chainId: '0x10D88',
          chainName: 'AnimeChain',
          nativeCurrency: { name: 'Animecoin', symbol: 'ANIME', decimals: 18 },
          rpcUrls: ['https://rpc-animechain-39xf6m45e3.t.conduit.xyz/'],
          blockExplorerUrls: ['https://explorer-animechain-39xf6m45e3.t.conduit.xyz/']
        }]
      });
      if (statusEl) statusEl.textContent = 'AnimeChain network added to wallet.';
    } else {
      const address = which === 'l1' ? L1_TOKEN_ADDRESS : L2_TOKEN_ADDRESS;
      const wasAdded = await window.ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address,
            symbol: 'ANIME',
            decimals: 18,
            image: window.location.origin + '/assets/images/animecoin.webp'
          },
        },
      });
      if (statusEl) statusEl.textContent = wasAdded ? 'Token added to wallet.' : 'Token add canceled.';
    }
  } catch (err) {
    if (statusEl) statusEl.textContent = 'Failed to add token: ' + (err && err.message ? err.message : String(err));
  }
}

function setOutput(message) {
  const el = document.getElementById('balance-output');
  if (el) el.textContent = message;
}

function getAddressFromInput() {
  const input = document.getElementById('walletAddressInput');
  return sanitizeAddress(input && input.value);
}

async function rpcEthCall(rpcUrl, to, data) {
  const payload = {
    jsonrpc: '2.0',
    id: Date.now(),
    method: 'eth_call',
    params: [{ from: '0x0000000000000000000000000000000000000000', to, data }, 'latest']
  };
  const res = await fetch(rpcUrl, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error('RPC HTTP error ' + res.status);
  const json = await res.json();
  if (json.error) throw new Error(json.error.message || 'RPC error');
  return json.result;
}

async function checkL1Balance() {
  const address = getAddressFromInput();
  if (!address) { setOutput('Enter a valid address.'); return; }
  setOutput('Fetching L1 balance...');
  try {
    const data = buildBalanceOfData(address);
    const result = await rpcEthCall(L1_RPC, L1_TOKEN_ADDRESS, data);
    const value = BigInt(result);
    setOutput('L1 ANIME (ERC-20) balance: ' + formatUnits(value, 18));
  } catch (err) {
    setOutput('Failed to fetch L1 balance: ' + (err && err.message ? err.message : String(err)) + '. The RPC may block browser requests due to CORS.');
  }
}

async function checkL2Balance() {
  const address = getAddressFromInput();
  if (!address) { setOutput('Enter a valid address.'); return; }
  setOutput('Fetching L2 balance...');
  try {
    const data = buildBalanceOfData(address);
    const result = await rpcEthCall(L2_RPC, L2_TOKEN_ADDRESS, data);
    const value = BigInt(result);
    setOutput('L2 Wrapped ANIME balance: ' + formatUnits(value, 18));
  } catch (err) {
    setOutput('Failed to fetch L2 balance: ' + (err && err.message ? err.message : String(err)) + '. The RPC may block browser requests due to CORS.');
  }
}

function checkL3Balance() {
  const address = getAddressFromInput();
  if (!address) { setOutput('Enter a valid address.'); return; }
  const url = L3_EXPLORER_BASE + address;
  window.open(url, '_blank');
}

// removed prefillAndOpenL3 button per request
</script>