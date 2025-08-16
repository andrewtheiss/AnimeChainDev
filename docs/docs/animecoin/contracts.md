# Contract Addresses

Smart contract addresses for Animecoin (symbol: ANIME) across different layers.

---

## 📍 Mainnet Addresses

### Ethereum (L1)
| Contract | Address | Type |
|----------|---------|------|
| Animecoin | `TBA` | ERC-20 |
| Bridge Contract | `TBA` | Bridge |

### Arbitrum One (L2) 
| Contract | Address | Type |
|----------|---------|------|
| Wrapped ANIME | `TBA` | ERC-20 |
| Orbit Bridge | `TBA` | Bridge |

### AnimeChain (L3)
| Contract | Address | Type |
|----------|---------|------|
| Animecoin (native) | Native gas token | Native |
| Bridge Contract | `TBA` | Bridge |

---

## 🧪 Testnet Addresses

### Ethereum Goerli (L1)
| Contract | Address | Type |
|----------|---------|------|
| Animecoin | `TBA` | ERC-20 |
| Bridge Contract | `TBA` | Bridge |

### Arbitrum Goerli (L2)
| Contract | Address | Type |
|----------|---------|------|
| Wrapped ANIME | `TBA` | ERC-20 |
| Orbit Bridge | `TBA` | Bridge |

### AnimeChain Testnet (L3)
| Contract | Address | Type |
|----------|---------|------|
| Animecoin (native) | Native gas token | Native |
| Bridge Contract | `TBA` | Bridge |

---

## 📋 Contract ABIs

### Animecoin ABI (L1/L2)

```json
[
  {
    "inputs": [],
    "name": "name",
    "outputs": [{"name": "", "type": "string"}],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol", 
    "outputs": [{"name": "", "type": "string"}],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [{"name": "", "type": "uint8"}],
    "stateMutability": "view", 
    "type": "function"
  },
  {
    "inputs": [{"name": "account", "type": "address"}],
    "name": "balanceOf",
    "outputs": [{"name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {"name": "to", "type": "address"},
      {"name": "amount", "type": "uint256"}
    ],
    "name": "transfer",
    "outputs": [{"name": "", "type": "bool"}],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
```

### Bridge Contract ABI

```json
[
  {
    "inputs": [
      {"name": "recipient", "type": "address"},
      {"name": "amount", "type": "uint256"}
    ],
    "name": "deposit",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [{"name": "amount", "type": "uint256"}],
    "name": "withdraw", 
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
```

---

## 🔗 Verification Links

### Mainnet Explorers
- **Ethereum:** [Etherscan](https://etherscan.io)
- **Arbitrum:** [Arbiscan](https://arbiscan.io) 
- **AnimeChain:** [AnimeChain Explorer](https://explorer-animechain-39xf6m45e3.t.conduit.xyz/)

### Testnet Explorers  
- **Ethereum Goerli:** [Goerli Etherscan](https://goerli.etherscan.io)
- **Arbitrum Goerli:** [Goerli Arbiscan](https://goerli.arbiscan.io)
- **AnimeChain Testnet:** [Testnet Explorer](https://explorer-conduit-orbit-deployer-d4pqjb0rle.t.conduit.xyz/)

---

!!! warning "Placeholder Content"
    These contract addresses are placeholders. Actual addresses will be updated after deployment and audit completion.

!!! tip "Always Verify"
    Always verify contract addresses through official channels before interacting with them.
