# Add AnimeChain Mainnet to Your Wallet

Complete step-by-step guide to add AnimeChain Mainnet to popular wallets. Choose your wallet below for detailed instructions.

!!! warning "Mainnet Network"
    You're adding the **production** AnimeChain network. Transactions use real ANIME tokens with real value. 
    
    🧪 **New to AnimeChain?** Consider starting with [testnet](../testnet/add-to-wallet.md) first.

---

## 🦊 MetaMask

### Quick Add (Recommended)

Use our one-click network addition tool:

[Add AnimeChain to MetaMask →](../../app/index.html){ .md-button .md-button--primary }

### Manual Setup

=== "Desktop Extension"

    1. **Open MetaMask** in your browser
    2. **Click the network dropdown** (usually shows "Ethereum Mainnet")
    3. **Select "Add Network"** at the bottom of the dropdown
    4. **Choose "Add a network manually"**
    5. **Fill in the network details:**

    | Field | Value |
    |-------|-------|
    | **Network name** | `AnimeChain` |
    | **New RPC URL** | `https://rpc-animechain-39xf6m45e3.t.conduit.xyz/` |
    | **Chain ID** | `69000` |
    | **Currency symbol** | `ANIME` |
    | **Block explorer URL** | `https://explorer-animechain-39xf6m45e3.t.conduit.xyz/` |

    6. **Click "Save"** to add the network
    7. **Switch to AnimeChain** by selecting it from the network dropdown

=== "Mobile App"

    1. **Open MetaMask mobile app**
    2. **Tap the hamburger menu** (≡) in the top left
    3. **Go to Settings → Networks**
    4. **Tap "Add Network"**
    5. **Tap "Add Custom Network"**
    6. **Enter the network details:**

    ```
    Network Name: AnimeChain
    RPC URL: https://rpc-animechain-39xf6m45e3.t.conduit.xyz/
    Chain ID: 69000
    Symbol: ANIME
    Block Explorer: https://explorer-animechain-39xf6m45e3.t.conduit.xyz/
    ```

    7. **Tap "Add"** to save the network
    8. **Switch to AnimeChain** in the network selector

### Verify Connection

After adding the network:

1. **Check network name** shows "AnimeChain" in the dropdown
2. **Verify chain ID** is 69000 (0x10D88)
3. **Test connection** by viewing your address on the [block explorer](https://explorer-animechain-39xf6m45e3.t.conduit.xyz/)

---

## 🌈 Rainbow Wallet

### Mobile App Setup

1. **Open Rainbow wallet**
2. **Tap Settings** (gear icon)
3. **Go to Networks**
4. **Tap the "+" button** to add a network
5. **Choose "Custom"**
6. **Fill in the details:**

```
Name: AnimeChain
RPC Endpoint: https://rpc-animechain-39xf6m45e3.t.conduit.xyz/
Chain ID: 69000
Symbol: ANIME
Explorer: https://explorer-animechain-39xf6m45e3.t.conduit.xyz/
```

7. **Save the network**
8. **Switch to AnimeChain** from the network selector

---

## 💰 Coinbase Wallet

### Setup Instructions

1. **Open Coinbase Wallet**
2. **Go to Settings**
3. **Tap "Active Networks"**
4. **Tap the "+" to add a network**
5. **Enter network information:**

| Field | Value |
|-------|-------|
| **Network Name** | AnimeChain |
| **RPC URL** | https://rpc-animechain-39xf6m45e3.t.conduit.xyz/ |
| **Chain ID** | 69000 |
| **Currency Symbol** | ANIME |
| **Block Explorer** | https://explorer-animechain-39xf6m45e3.t.conduit.xyz/ |

6. **Save and switch** to the new network

---

## 🔗 WalletConnect Compatible Wallets

Most wallets supporting WalletConnect can add custom networks. General steps:

### Generic Instructions

1. **Find Network/RPC settings** in your wallet
2. **Add Custom Network** or "Add RPC"
3. **Use these details:**

```json
{
  "chainId": 69000,
  "chainName": "AnimeChain",
  "nativeCurrency": {
    "name": "ANIME",
    "symbol": "ANIME",
    "decimals": 18
  },
  "rpcUrls": ["https://rpc-animechain-39xf6m45e3.t.conduit.xyz/"],
  "blockExplorerUrls": ["https://explorer-animechain-39xf6m45e3.t.conduit.xyz/"]
}
```

### Popular WalletConnect Wallets

=== "Trust Wallet"

    1. Open Trust Wallet
    2. Go to Settings → Preferences → Networks
    3. Add Custom Network with AnimeChain details
    4. Enable the network and switch to it

=== "Argent"

    1. Open Argent wallet
    2. Go to Settings → Network
    3. Add Custom Network
    4. Enter AnimeChain details

=== "1inch Wallet"

    1. Open 1inch Wallet
    2. Tap profile → Settings → Networks
    3. Add Custom Network
    4. Input AnimeChain configuration

---

## 🛠️ Advanced Configuration

### Custom Gas Settings

For optimal performance on AnimeChain:

| Setting | Recommended Value |
|---------|------------------|
| **Gas Price** | 0.1 - 1 gwei |
| **Gas Limit** | Leave as estimated |
| **Max Priority Fee** | 0 gwei |
| **Max Fee** | 1 gwei |

### RPC Endpoint Options

Primary endpoint (recommended):
```
https://rpc-animechain-39xf6m45e3.t.conduit.xyz/
```

WebSocket endpoint for real-time data:
```
wss://rpc-animechain-39xf6m45e3.t.conduit.xyz/
```

---

## 🚨 Troubleshooting

### Common Issues

??? question "Network not appearing in dropdown"
    **Solution:** 
    - Refresh/restart your wallet
    - Clear browser cache for browser extensions
    - Double-check all network details are correct
    - Try adding the network again

??? question "RPC Error or Connection Failed"
    **Solution:**
    - Verify the RPC URL is exactly: `https://rpc-animechain-39xf6m45e3.t.conduit.xyz/`
    - Check your internet connection
    - Try switching networks and back to AnimeChain
    - Update your wallet to the latest version

??? question "Wrong Chain ID Error"
    **Solution:**
    - Ensure Chain ID is set to `69000` (not 6900 - that's testnet)
    - Clear wallet cache and re-add the network
    - Verify you're adding mainnet, not testnet

??? question "Transactions Failing"
    **Solution:**
    - Ensure you have ANIME tokens for gas fees
    - Check if the network is properly selected
    - Verify gas settings are appropriate
    - [Get ANIME tokens](../../animecoin/bridging.md) if needed

??? question "Token not showing correct balance"
    **Solution:**
    - Wait a few minutes for wallet to sync
    - Manually refresh the wallet
    - Add token contract address manually if needed
    - Check transaction on [block explorer](https://explorer-animechain-39xf6m45e3.t.conduit.xyz/)

### Verification Checklist

After adding the network, verify everything is working:

- [ ] **Network name** shows "AnimeChain"
- [ ] **Chain ID** is 69000 (0x10D88)
- [ ] **Currency** shows "ANIME"
- [ ] **RPC connection** is successful
- [ ] **Block explorer** link works
- [ ] **Address** is visible on explorer

---

## 💡 What's Next?

### Get ANIME Tokens

AnimeChain uses ANIME as the native gas token. You'll need ANIME to:

- **Pay transaction fees**
- **Deploy smart contracts**  
- **Interact with dApps**

[Learn how to bridge ANIME tokens →](../../animecoin/bridging.md)

### Start Using AnimeChain

With your wallet configured:

1. **[Bridge ANIME tokens](../../animecoin/bridging.md)** from Ethereum or Arbitrum
2. **[Explore dApps](../../resources/faq.md)** in the AnimeChain ecosystem
3. **[Build applications](../../developers/index.md)** on the network
4. **[Join the community](https://discord.gg/animechain)** for support and updates

### Security Best Practices

!!! tip "Keep Your Wallet Safe"
    - **Never share** your private keys or seed phrase
    - **Use hardware wallets** for large amounts
    - **Verify URLs** before entering sensitive information
    - **Start small** when trying new networks
    - **Keep backups** of your wallet recovery information

---

## 📞 Need Help?

If you're having trouble adding AnimeChain to your wallet:

- 💬 **Discord:** [Get community support](https://discord.gg/animechain)
- 🛠️ **Interactive Tool:** [Try our network setup tool](../../app/index.html)
- 📚 **Documentation:** [Network technical details](network-details.md)
- 🐛 **Issues:** [Report problems on GitHub](https://github.com/AnimeChain/AnimeChainDev/issues)

---

!!! success "You're Ready!"
    With AnimeChain added to your wallet, you're ready to explore the anime-focused Layer 3 ecosystem. Remember to get some ANIME tokens for transaction fees and start small as you learn the network! 🎌 