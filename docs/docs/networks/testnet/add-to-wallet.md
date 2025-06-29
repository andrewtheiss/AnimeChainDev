# Add AnimeChain Testnet to Your Wallet

Step-by-step instructions to connect to **AnimeChain Testnet (Chain ID 6900)** in popular wallets.

!!! note "Free & Resettable"
    Testnet ANIME (tANIME) has **no real value**. The chain may reset, wiping balances. Use it for development only.

---

## 🦊 MetaMask

### Quick Add (Recommended)

```javascript
// Paste into browser console when MetaMask is unlocked
await window.ethereum.request({
  method: 'wallet_addEthereumChain',
  params: [{
    chainId: '0x1AF4',           // 6900 in hex
    chainName: 'AnimeChain Testnet',
    nativeCurrency: { name: 'tANIME', symbol: 'tANIME', decimals: 18 },
    rpcUrls: ['https://rpc-conduit-orbit-deployer-d4pqjb0rle.t.conduit.xyz/'],
    blockExplorerUrls: ['https://explorer-conduit-orbit-deployer-d4pqjb0rle.t.conduit.xyz/']
  }]
});
```

### Manual Setup

=== "Desktop Extension"

    1. **Open MetaMask**
    2. **Click network dropdown** → **Add Network**
    3. **Add a network manually**
    4. **Enter the details:**

    | Field | Value |
    |-------|-------|
    | **Network name** | `AnimeChain Testnet` |
    | **New RPC URL**  | `https://rpc-conduit-orbit-deployer-d4pqjb0rle.t.conduit.xyz/` |
    | **Chain ID**     | `6900` |
    | **Currency symbol** | `tANIME` |
    | **Block explorer URL** | `https://explorer-conduit-orbit-deployer-d4pqjb0rle.t.conduit.xyz/` |

    5. **Save** → switch to the new network

=== "Mobile App"

    1. Open MetaMask mobile
    2. Tap ≡ → **Settings → Networks**
    3. Tap **Add Network** → **Add Custom Network**
    4. Fill in the same values above
    5. Tap **Add** → select *AnimeChain Testnet*

---

## 🌈 Rainbow Wallet

1. Open Rainbow → **Settings** (gear) → **Networks**
2. Tap **+** → **Custom**
3. Fill in:

```
Name: AnimeChain Testnet
RPC:  https://rpc-conduit-orbit-deployer-d4pqjb0rle.t.conduit.xyz/
Chain ID: 6900
Symbol: tANIME
Explorer: https://explorer-conduit-orbit-deployer-d4pqjb0rle.t.conduit.xyz/
```

4. Save and switch.

---

## 💰 Coinbase Wallet

1. Open Coinbase Wallet → **Settings** → **Active Networks**
2. Tap **+** to add → **Custom Network**
3. Enter identical details (Network Name, RPC, ChainID 6900, Symbol tANIME, Explorer)
4. Save and select.

---

## 🔗 WalletConnect-Compatible Wallets

Most WalletConnect wallets let you add a custom chain. Use this JSON:

```json
{
  "chainId": 6900,
  "chainName": "AnimeChain Testnet",
  "nativeCurrency": {
    "name": "tANIME",
    "symbol": "tANIME",
    "decimals": 18
  },
  "rpcUrls": ["https://rpc-conduit-orbit-deployer-d4pqjb0rle.t.conduit.xyz/"],
  "blockExplorerUrls": ["https://explorer-conduit-orbit-deployer-d4pqjb0rle.t.conduit.xyz/"]
}
```

---

## ✅ Verification Checklist

- [ ] Network name shows **AnimeChain Testnet**
- [ ] Chain ID is **6900 (0x1AF4)**
- [ ] Currency symbol is **tANIME**
- [ ] Explorer link opens correctly
- [ ] You have received **tANIME** from faucet

If something fails, revisit values above or consult the [Troubleshooting Guide](../../resources/troubleshooting.md). 