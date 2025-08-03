# AnimeChain Testnet Faucet

Get free **tANIME** tokens for testing and development on AnimeChain Testnet.

## 🚰 Get Test Tokens

**Recommended**: [Use Interactive Faucet →](../../app.md){ .md-button .md-button--primary }

**Manual**: Connect wallet → Sign commitment message → Receive tokens

## 💧 Details

- **Token**: tANIME (no real value)
- **Network**: AnimeChain Testnet (Chain ID: 6900)  
- **Rate Limited**: Cooldown periods prevent abuse
- **Authentication**: Signature-based using commitment messages

---

## 🎭 Commitment Messages

Choose your dedication level (we take our ANIME seriously! 😄):

- **Builder's Pledge**: "Ill use this ANIME coin to build something on ANIME chain and not sell it like a degen."
- **Developer's Promise**: "Gonna build more with this ANIME coin, and not ape into a meme coin."  
- **Last Hope**: "Gonna use this ANIME as my last hope for creating something worthwhile. God help me."

---

## 🔧 Developer Integration

**Contract Functions:**
- `withdraw(v, r, s, message)` - Withdraw with signed commitment  
- `time_until_next_withdrawal()` - Check cooldown status
- `get_withdrawal_count(address)` - Check withdrawal history

**Usage:**
```javascript
// Sign commitment message
const signature = await signer.signMessage(commitmentMessage);
const { v, r, s } = ethers.utils.splitSignature(signature);

// Call faucet contract
await faucetContract.withdraw(v, r, s, commitmentMessage);
```

## 🚨 Troubleshooting

| Issue | Solution |
|-------|----------|
| Transaction failed | Check cooldown period, verify network connection |
| No tokens received | Confirm transaction on explorer, refresh wallet |
| Faucet empty | Try later or ask in Discord |

**Help**: [Discord](https://discord.gg/animechain) • [Faucet Tool](../../app.md) • [Explorer](https://explorer-conduit-orbit-deployer-d4pqjb0rle.t.conduit.xyz/)

!!! tip "Best Practices"
    Only request what you need • Don't abuse rate limits • Plan your testing efficiently 