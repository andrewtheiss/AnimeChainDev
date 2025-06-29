# AnimeChain Testnet Faucet

Get free **tANIME** tokens to test and develop on AnimeChain Testnet. Our faucet provides test tokens so you can experiment without spending real money.

## 🚰 How to Get Test Tokens

### Option 1: Interactive Faucet Tool

Use our built-in faucet interface for the easiest experience:

[Use Interactive Faucet →](../../app/index.html){ .md-button .md-button--primary }

### Option 2: Manual Process

If you prefer to interact directly with the faucet contract:

1. **Connect your wallet** to AnimeChain Testnet
2. **Visit the faucet contract** on the block explorer
3. **Call the withdraw function** with the required signature

---

## 💧 Faucet Details

### Token Distribution

| Property | Value |
|----------|--------|
| **Token** | tANIME (Test ANIME) |
| **Amount per request** | Varies based on availability |
| **Cooldown period** | Time-limited withdrawals |
| **Network** | AnimeChain Testnet (Chain ID: 6900) |

### Faucet Contract

The faucet is a smart contract that requires a signed message to prevent abuse:

```solidity
// Faucet contract address on testnet
address constant FAUCET_ADDRESS = 0x...; // To be deployed

function withdraw(
    uint8 _v,
    bytes32 _r, 
    bytes32 _s,
    string memory _message
) external;
```

---

## 🎭 Withdrawal Messages

When withdrawing from the faucet, you'll need to sign one of these commitment messages (we take our ANIME seriously! 😄):

!!! quote "Choose Your Commitment"

    === "Builder's Pledge"
        > "Ill use this ANIME coin to build something on ANIME chain and not sell it like a degen."

    === "Developer's Promise"
        > "Gonna build more with this ANIME coin, and not ape into a meme coin."

    === "Last Hope Declaration"
        > "Gonna use this ANIME as my last hope for creating something worthwhile. God help me."

These messages are required to help ensure testnet tokens are used for their intended purpose - building and testing on AnimeChain! 🏗️

---

## 🔧 Technical Integration

### Faucet ABI

```javascript
const FAUCET_ABI = [
  {
    "type": "event",
    "name": "Withdrawal",
    "inputs": [
      {"name": "recipient", "type": "address", "indexed": true},
      {"name": "amount", "type": "uint256", "indexed": false},
      {"name": "timestamp", "type": "uint256", "indexed": false},
      {"name": "withdrawal_count", "type": "uint256", "indexed": false}
    ],
    "anonymous": false
  },
  {
    "type": "function",
    "name": "withdraw",
    "stateMutability": "nonpayable",
    "inputs": [
      {"name": "_v", "type": "uint8"},
      {"name": "_r", "type": "bytes32"},
      {"name": "_s", "type": "bytes32"},
      {"name": "_message", "type": "string"}
    ],
    "outputs": []
  },
  {
    "type": "function",
    "name": "time_until_next_withdrawal",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [{"name": "", "type": "uint256"}]
  },
  {
    "type": "function",
    "name": "get_withdrawal_count",
    "stateMutability": "view",
    "inputs": [{"name": "_user", "type": "address"}],
    "outputs": [{"name": "", "type": "uint256"}]
  }
];
```

### JavaScript Integration

```javascript
// Using ethers.js
const faucetContract = new ethers.Contract(
  FAUCET_ADDRESS,
  FAUCET_ABI,
  signer
);

// Check if you can withdraw
const timeUntilNext = await faucetContract.time_until_next_withdrawal();
if (timeUntilNext.eq(0)) {
  console.log("Ready to withdraw!");
} else {
  console.log(`Wait ${timeUntilNext.toString()} seconds`);
}

// Get your withdrawal count
const count = await faucetContract.get_withdrawal_count(address);
console.log(`Previous withdrawals: ${count.toString()}`);
```

### Signing Messages

```javascript
// Example message signing for faucet
const messages = [
  "Ill use this ANIME coin to build something on ANIME chain and not sell it like a degen.",
  "Gonna build more with this ANIME coin, and not ape into a meme coin.",
  "Gonna use this ANIME as my last hope for creating something worthwhile. God help me."
];

// Pick a message (or let user choose)
const message = messages[0];

// Sign the message
const signature = await signer.signMessage(message);
const { v, r, s } = ethers.utils.splitSignature(signature);

// Call the faucet
await faucetContract.withdraw(v, r, s, message);
```

---

## ⏰ Rate Limiting

### Withdrawal Cooldowns

- **Global cooldown:** Prevents too frequent withdrawals across all users
- **Per-user cooldown:** Individual rate limiting per address
- **Smart throttling:** Adjusts based on faucet balance and usage

### Check Your Status

```javascript
// Check when you can withdraw again
const timeLeft = await faucetContract.time_until_next_withdrawal();

if (timeLeft.gt(0)) {
  const hours = Math.floor(timeLeft.toNumber() / 3600);
  const minutes = Math.floor((timeLeft.toNumber() % 3600) / 60);
  console.log(`Wait ${hours}h ${minutes}m before next withdrawal`);
}
```

---

## 🚨 Troubleshooting

### Common Issues

??? question "Transaction Failed"
    - **Check cooldown period:** You may need to wait before withdrawing again
    - **Verify network:** Make sure you're connected to AnimeChain Testnet
    - **Check message:** Ensure you're using one of the exact required messages
    - **Signature format:** Verify the signature is properly formatted

??? question "No Tokens Received"
    - **Transaction confirmed?** Check the block explorer for your transaction
    - **Correct address?** Verify the recipient address is correct  
    - **Wallet refresh:** Sometimes wallets need a refresh to show new tokens

??? question "Faucet Empty"
    - **Try later:** The faucet may be temporarily out of funds
    - **Community help:** Ask in Discord for assistance
    - **Report issue:** Let us know if the faucet is consistently empty

### Getting Help

- 💬 **Discord:** [#testnet-faucet channel](https://discord.gg/animechain)
- 🔧 **Interactive Tool:** [Use our faucet interface](../../app/index.html)
- 📊 **Block Explorer:** [Check transactions](https://explorer-conduit-orbit-deployer-d4pqjb0rle.t.conduit.xyz/)

---

## 🎯 Best Practices

### Responsible Usage

!!! tip "Faucet Etiquette"
    - **Only request what you need** for testing
    - **Don't abuse the system** - rate limits are there for a reason
    - **Share the resources** - help keep the faucet available for everyone
    - **Report issues** if you encounter problems

### Development Tips

- **Plan your testing** to minimize faucet requests
- **Use small amounts** for initial testing
- **Keep some tokens** in reserve for continued testing
- **Test transaction patterns** efficiently

---

!!! success "Ready to Build!"
    With your free tANIME tokens, you're ready to start building and testing on AnimeChain Testnet. Remember to choose your commitment message wisely - we're all here to build something amazing! 🚀 