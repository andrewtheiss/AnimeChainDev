# RPC API Reference

Complete JSON-RPC API documentation for AnimeChain.

---

## 📡 Network Endpoints

### Mainnet
- **RPC URL:** `https://rpc-animechain-39xf6m45e3.t.conduit.xyz/`  
- **Chain ID:** `69000` (0x10D88)
- **Explorer:** [https://explorer-animechain-39xf6m45e3.t.conduit.xyz/](https://explorer-animechain-39xf6m45e3.t.conduit.xyz/)

### Testnet
- **RPC URL:** `https://explorer-animechain-testnet-i8yja6a1a0.t.conduit.xyz/`
- **Chain ID:** `6900` (0x1AF4)  
- **Explorer:** [https://explorer-conduit-orbit-deployer-d4pqjb0rle.t.conduit.xyz/](https://explorer-conduit-orbit-deployer-d4pqjb0rle.t.conduit.xyz/)

---

## 🔧 Standard JSON-RPC Methods

AnimeChain supports all standard Ethereum JSON-RPC methods. Below are the most commonly used:

### Network Information

#### `eth_chainId`
Returns the chain ID of the current network.

```json
{
  "jsonrpc": "2.0",
  "method": "eth_chainId",
  "params": [],
  "id": 1
}
```

**Response:**
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x10D88"
}
```

#### `net_version`
Returns the network ID.

```json
{
  "jsonrpc": "2.0", 
  "method": "net_version",
  "params": [],
  "id": 1
}
```

**Response:**
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "69000"
}
```

---

### Block Information

#### `eth_blockNumber`
Returns the latest block number.

```json
{
  "jsonrpc": "2.0",
  "method": "eth_blockNumber",
  "params": [],
  "id": 1
}
```

**Response:**
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x12345"
}
```

#### `eth_getBlockByNumber`
Returns block information by number.

```json
{
  "jsonrpc": "2.0",
  "method": "eth_getBlockByNumber",
  "params": ["latest", true],
  "id": 1
}
```

#### `eth_getBlockByHash`
Returns block information by hash.

```json
{
  "jsonrpc": "2.0",
  "method": "eth_getBlockByHash", 
  "params": ["0x1234567890abcdef...", true],
  "id": 1
}
```

---

### Account Information

#### `eth_getBalance`
Returns the balance of an account.

```json
{
  "jsonrpc": "2.0",
  "method": "eth_getBalance",
  "params": ["0x742d35Cc6466Fc48F2c5C25dC99c7E4e1d4E3d7b", "latest"],
  "id": 1
}
```

**Response:**
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x1bc16d674ec80000"
}
```

#### `eth_getTransactionCount`
Returns the transaction count (nonce) of an account.

```json
{
  "jsonrpc": "2.0",
  "method": "eth_getTransactionCount",
  "params": ["0x742d35Cc6466Fc48F2c5C25dC99c7E4e1d4E3d7b", "latest"],
  "id": 1
}
```

---

### Transaction Operations

#### `eth_sendTransaction`
Sends a transaction.

```json
{
  "jsonrpc": "2.0",
  "method": "eth_sendTransaction",
  "params": [{
    "from": "0x742d35Cc6466Fc48F2c5C25dC99c7E4e1d4E3d7b",
    "to": "0x8ba1f109551bD432803012645Hac136c6eee119E",
    "value": "0x1bc16d674ec80000",
    "gas": "0x5208",
    "gasPrice": "0x09184e72a000"
  }],
  "id": 1
}
```

#### `eth_sendRawTransaction`
Sends a signed raw transaction.

```json
{
  "jsonrpc": "2.0",
  "method": "eth_sendRawTransaction",
  "params": ["0xf86c808509184e72a0008252089440ba1f109551bD432803012645Hac136c6eee119E01bc16d674ec800008026a0..."],
  "id": 1
}
```

#### `eth_getTransactionByHash`
Returns transaction information by hash.

```json
{
  "jsonrpc": "2.0",
  "method": "eth_getTransactionByHash",
  "params": ["0x1234567890abcdef..."],
  "id": 1
}
```

#### `eth_getTransactionReceipt`
Returns the receipt of a transaction.

```json
{
  "jsonrpc": "2.0",
  "method": "eth_getTransactionReceipt", 
  "params": ["0x1234567890abcdef..."],
  "id": 1
}
```

---

### Contract Interaction

#### `eth_call`
Calls a contract method without creating a transaction.

```json
{
  "jsonrpc": "2.0",
  "method": "eth_call",
  "params": [{
    "to": "0x8ba1f109551bD432803012645Hac136c6eee119E",
    "data": "0x70a08231000000000000000000000000742d35Cc6466Fc48F2c5C25dC99c7E4e1d4E3d7b"
  }, "latest"],
  "id": 1
}
```

#### `eth_estimateGas`
Estimates gas for a transaction.

```json
{
  "jsonrpc": "2.0",
  "method": "eth_estimateGas",
  "params": [{
    "from": "0x742d35Cc6466Fc48F2c5C25dC99c7E4e1d4E3d7b",
    "to": "0x8ba1f109551bD432803012645Hac136c6eee119E", 
    "data": "0xa9059cbb000000000000000000000000..."
  }],
  "id": 1
}
```

#### `eth_getLogs`
Returns logs matching a filter.

```json
{
  "jsonrpc": "2.0",
  "method": "eth_getLogs",
  "params": [{
    "fromBlock": "0x1",
    "toBlock": "latest",
    "address": "0x8ba1f109551bD432803012645Hac136c6eee119E",
    "topics": ["0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"]
  }],
  "id": 1
}
```

---

## 📋 JavaScript/TypeScript Examples

### Using ethers.js

```javascript
import { ethers } from 'ethers';

// Connect to AnimeChain
const provider = new ethers.JsonRpcProvider('https://rpc-animechain-39xf6m45e3.t.conduit.xyz/');

// Get chain ID
const chainId = await provider.getNetwork();
console.log('Chain ID:', chainId.chainId); // 69000

// Get latest block
const block = await provider.getBlock('latest');
console.log('Latest block:', block.number);

// Get balance
const balance = await provider.getBalance('0x742d35Cc6466Fc48F2c5C25dC99c7E4e1d4E3d7b');
console.log('Balance:', ethers.formatEther(balance), 'ANIME');

// Send transaction
const signer = new ethers.Wallet('0xPrivateKey...', provider);
const tx = await signer.sendTransaction({
  to: '0x8ba1f109551bD432803012645Hac136c6eee119E',
  value: ethers.parseEther('1.0'),
  gasLimit: 21000
});

await tx.wait();
console.log('Transaction:', tx.hash);
```

### Using web3.js

```javascript
import Web3 from 'web3';

// Connect to AnimeChain
const web3 = new Web3('https://rpc-animechain-39xf6m45e3.t.conduit.xyz/');

// Get chain ID
const chainId = await web3.eth.getChainId();
console.log('Chain ID:', chainId); // 69000

// Get latest block
const block = await web3.eth.getBlock('latest');
console.log('Latest block:', block.number);

// Get balance  
const balance = await web3.eth.getBalance('0x742d35Cc6466Fc48F2c5C25dC99c7E4e1d4E3d7b');
console.log('Balance:', web3.utils.fromWei(balance, 'ether'), 'ANIME');

// Send transaction
const account = web3.eth.accounts.privateKeyToAccount('0xPrivateKey...');
const tx = await web3.eth.sendTransaction({
  from: account.address,
  to: '0x8ba1f109551bD432803012645Hac136c6eee119E',
  value: web3.utils.toWei('1', 'ether'),
  gas: 21000
});

console.log('Transaction:', tx.transactionHash);
```

### Using Viem

```typescript
import { createPublicClient, createWalletClient, http, parseEther } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';

// Define AnimeChain
const animeChain = {
  id: 69000,
  name: 'AnimeChain',
  network: 'animechain',
  nativeCurrency: { name: 'ANIME', symbol: 'ANIME', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://rpc-animechain-39xf6m45e3.t.conduit.xyz/'] },
    public: { http: ['https://rpc-animechain-39xf6m45e3.t.conduit.xyz/'] },
  },
  blockExplorers: {
    default: { 
      name: 'AnimeChain Explorer',
      url: 'https://explorer-animechain-39xf6m45e3.t.conduit.xyz/'
    },
  },
};

// Create clients
const publicClient = createPublicClient({
  chain: animeChain,
  transport: http()
});

const account = privateKeyToAccount('0xPrivateKey...');
const walletClient = createWalletClient({
  account,
  chain: animeChain,
  transport: http()
});

// Get balance
const balance = await publicClient.getBalance({ 
  address: '0x742d35Cc6466Fc48F2c5C25dC99c7E4e1d4E3d7b'
});

// Send transaction
const hash = await walletClient.sendTransaction({
  to: '0x8ba1f109551bD432803012645Hac136c6eee119E',
  value: parseEther('1')
});
```

---

## 🔍 Advanced Features

### Event Filtering

```javascript
// Listen for all Transfer events from a token contract
const filter = {
  address: '0x8ba1f109551bD432803012645Hac136c6eee119E',
  topics: [
    '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef' // Transfer event signature
  ],
  fromBlock: 'latest'
};

// Using ethers.js
provider.on(filter, (log) => {
  console.log('Transfer event:', log);
});

// Using web3.js
const subscription = web3.eth.subscribe('logs', filter)
  .on('data', (log) => {
    console.log('Transfer event:', log);
  });
```

### Batch Requests

```javascript
// Multiple RPC calls in a single request
const batch = [
  { method: 'eth_blockNumber', params: [] },
  { method: 'eth_getBalance', params: ['0x742d35Cc...', 'latest'] },
  { method: 'eth_gasPrice', params: [] }
];

const responses = await Promise.all(
  batch.map(request => 
    fetch('https://rpc-animechain-39xf6m45e3.t.conduit.xyz/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: Math.random(),
        ...request
      })
    }).then(res => res.json())
  )
);
```

---

## 🚦 Rate Limits

### Public Endpoints
- **Rate limit:** 1000 requests/minute per IP
- **Burst limit:** 100 requests/10 seconds  
- **WebSocket connections:** 10 concurrent per IP

### Best Practices
- Implement exponential backoff for retries
- Use batch requests when possible
- Cache responses when appropriate
- Consider running your own node for high-volume applications

---

## 🐛 Error Codes

Common JSON-RPC error codes:

| Code | Message | Description |
|------|---------|-------------|
| `-32700` | Parse error | Invalid JSON |
| `-32600` | Invalid request | Missing required fields |
| `-32601` | Method not found | RPC method doesn't exist |
| `-32602` | Invalid params | Invalid method parameters |
| `-32603` | Internal error | Server error |
| `-32000` | Server error | Generic server error |
| `-32001` | Unauthorized | API key required |
| `-32002` | Rate limited | Too many requests |
| `-32003` | Transaction failed | Transaction simulation failed |

### Error Response Example

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "error": {
    "code": -32602,
    "message": "Invalid params",
    "data": "Expected address parameter to be 20 bytes"
  }
}
```

---

## 🔗 Resources

- [Ethereum JSON-RPC Specification](https://ethereum.github.io/execution-apis/)
- [ethers.js Documentation](https://docs.ethers.org/)
- [web3.js Documentation](https://web3js.readthedocs.io/)
- [Viem Documentation](https://viem.sh/)
- [AnimeChain Smart Contracts](contracts.md)
- [Code Examples](examples.md)

---

!!! tip "WebSocket Support"
    WebSocket connections are available at `wss://rpc-animechain-39xf6m45e3.t.conduit.xyz/` for real-time event subscriptions.

!!! warning "Testnet vs Mainnet"
    Always double-check you're using the correct RPC endpoint. Testnet transactions use test Animecoin (ANIME) with no real value.
