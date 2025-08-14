# Troubleshooting Guide

Common issues and solutions when using AnimeChain.

---

## 🔌 Connection Issues

### Can't Connect to AnimeChain

**Problem:** Wallet won't connect to AnimeChain network.

**Solutions:**

1. **Check Network Configuration**
   ```javascript
   // Ensure correct network details
   const ANIMECHAIN_MAINNET = {
     chainId: '0x10D88', // 69000 in hex
     chainName: 'AnimeChain',
     nativeCurrency: {
       name: 'ANIME',
       symbol: 'ANIME',
       decimals: 18
     },
     rpcUrls: ['https://rpc-animechain-39xf6m45e3.t.conduit.xyz/'],
     blockExplorerUrls: ['https://explorer-animechain-39xf6m45e3.t.conduit.xyz/']
   };
   ```

2. **Add Network Manually**
   - Open MetaMask → Settings → Networks → Add Network
   - Use the configuration above
   - Save and switch to AnimeChain

3. **Check RPC Status**
   ```bash
   # Test RPC connectivity
   curl -X POST \
     -H "Content-Type: application/json" \
     -d '{"jsonrpc":"2.0","method":"eth_chainId","params":[],"id":1}' \
     https://rpc-animechain-39xf6m45e3.t.conduit.xyz/
   ```

### RPC Errors

**Problem:** Getting RPC connection errors.

**Common Error Messages:**

=== "Network Error"
    ```
    Error: Network Error - fetch failed
    ```
    
    **Solutions:**
    - Check internet connection
    - Try different RPC endpoint
    - Check firewall/proxy settings
    - Use VPN if geo-blocked

=== "Invalid Chain ID"
    ```
    Error: Chain ID mismatch
    ```
    
    **Solutions:**
    - Verify chain ID is 69000 (mainnet) or 6900 (testnet)
    - Clear browser cache
    - Re-add network to wallet

=== "Rate Limited"
    ```
    Error: Too Many Requests
    ```
    
    **Solutions:**
    - Reduce request frequency  
    - Implement exponential backoff
    - Use your own RPC node
    - Batch requests when possible

---

## 💸 Transaction Issues

### Transaction Failures

**Problem:** Transactions fail or get stuck.

**Common Scenarios:**

=== "Insufficient Funds"
    ```
    Error: insufficient funds for intrinsic transaction cost
    ```
    
    **Solutions:**
    - Check ANIME balance for gas fees
    - Get test ANIME from [faucet](../networks/testnet/faucet.md)
    - Reduce transaction amount

=== "Gas Estimation Failed"
    ```
    Error: execution reverted
    ```
    
    **Solutions:**
    ```javascript
    // Manual gas limit
    const tx = await contract.myFunction({
      gasLimit: 100000, // Set manually
      gasPrice: ethers.parseUnits('1', 'gwei')
    });
    
    // Or estimate with buffer
    const gasEstimate = await contract.myFunction.estimateGas();
    const gasLimit = gasEstimate * 120n / 100n; // 20% buffer
    ```

=== "Nonce Issues"
    ```
    Error: nonce too low / nonce too high
    ```
    
    **Solutions:**
    ```javascript
    // Get correct nonce
    const nonce = await provider.getTransactionCount(wallet.address, 'pending');
    
    const tx = await wallet.sendTransaction({
      to: recipientAddress,
      value: ethers.parseEther('1.0'),
      nonce: nonce
    });
    ```

### Stuck Transactions

**Problem:** Transaction pending for too long.

**Solutions:**

1. **Speed Up Transaction**
   ```javascript
   // Increase gas price for same nonce
   const originalTx = await provider.getTransaction(txHash);
   
   const speedUpTx = await wallet.sendTransaction({
     to: originalTx.to,
     value: originalTx.value,
     data: originalTx.data,
     nonce: originalTx.nonce,
     gasPrice: originalTx.gasPrice * 110n / 100n // 10% higher
   });
   ```

2. **Cancel Transaction**
   ```javascript
   // Send 0 ETH to yourself with same nonce and higher gas
   const cancelTx = await wallet.sendTransaction({
     to: wallet.address,
     value: 0,
     nonce: originalTx.nonce,
     gasPrice: originalTx.gasPrice * 120n / 100n // 20% higher
   });
   ```

---

## 🪙 Token Issues

### Token Not Showing in Wallet

**Problem:** Tokens don't appear after transaction.

**Solutions:**

1. **Import Token Manually**
   - Add token contract address to wallet
   - Check correct network is selected
   - Verify token decimals

2. **Check Transaction Status**
   ```javascript
   const receipt = await provider.getTransactionReceipt(txHash);
   if (receipt.status === 1) {
     console.log('Transaction successful');
     // Check token balance
     const balance = await tokenContract.balanceOf(walletAddress);
     console.log('Token balance:', ethers.formatUnits(balance, decimals));
   }
   ```

### ERC-20 Approve Issues

**Problem:** Token approvals failing or insufficient allowance.

**Solutions:**

1. **Check Current Allowance**
   ```javascript
   const allowance = await tokenContract.allowance(ownerAddress, spenderAddress);
   console.log('Current allowance:', ethers.formatUnits(allowance, decimals));
   ```

2. **Approve with Buffer**
   ```javascript
   // Approve max amount or specific amount
   const maxApproval = ethers.MaxUint256;
   const tx = await tokenContract.approve(spenderAddress, maxApproval);
   await tx.wait();
   ```

3. **Reset Allowance First (for some tokens)**
   ```javascript
   // Some tokens require allowance to be 0 first
   await tokenContract.approve(spenderAddress, 0);
   await tokenContract.approve(spenderAddress, newAmount);
   ```

---

## 🎌 NFT Issues

### NFT Not Displaying

**Problem:** NFT metadata not loading correctly.

**Solutions:**

1. **Check Token URI**
   ```javascript
   const tokenURI = await nftContract.tokenURI(tokenId);
   console.log('Token URI:', tokenURI);
   
   // Fetch metadata
   if (tokenURI.startsWith('http')) {
     const response = await fetch(tokenURI);
     const metadata = await response.json();
     console.log('Metadata:', metadata);
   }
   ```

2. **IPFS Issues**
   - If using IPFS, try different gateways:
     - `https://gateway.pinata.cloud/ipfs/`
     - `https://cloudflare-ipfs.com/ipfs/`
     - `https://gateway.ipfs.io/ipfs/`

3. **Refresh Metadata**
   - Most wallets have "Refresh" option
   - May take time to update
   - Check on block explorer

### Minting Failures

**Problem:** NFT minting transactions fail.

**Solutions:**

1. **Check Mint Requirements**
   ```javascript
   // Verify mint conditions
   const mintPrice = await nftContract.mintPrice();
   const maxSupply = await nftContract.maxSupply();
   const currentSupply = await nftContract.totalSupply();
   
   console.log(`Price: ${ethers.formatEther(mintPrice)} ANIME`);
   console.log(`Supply: ${currentSupply}/${maxSupply}`);
   ```

2. **Pay Correct Amount**
   ```javascript
   const mintPrice = await nftContract.mintPrice();
   const tx = await nftContract.mint(recipientAddress, {
     value: mintPrice, // Ensure correct payment
     gasLimit: 200000 // Higher gas limit for minting
   });
   ```

---

## 🌉 Bridge Issues

### Bridge Transaction Stuck

**Problem:** Bridge transactions not completing.

**Solutions:**

1. **Check Bridge Status**
   - Verify transaction on source chain
   - Allow time for L2 → L3 bridging (usually < 1 minute)
   - L3 → L2 withdrawals take 7 days (challenge period)

2. **Monitor Bridge Events**
   ```javascript
   // Listen for bridge events
   bridgeContract.on('DepositToL3', (from, to, amount, event) => {
     console.log(`Bridge deposit confirmed: ${amount} from ${from} to ${to}`);
   });
   ```

3. **Verify Destination Balance**
   ```javascript
   // Check if tokens arrived on destination chain
   const l3Provider = new ethers.JsonRpcProvider('L3_RPC_URL');
   const balance = await l3Provider.getBalance(recipientAddress);
   console.log('L3 Balance:', ethers.formatEther(balance));
   ```

### Withdrawal Issues

**Problem:** Can't withdraw from L3 to L2.

**Solutions:**

1. **Check Challenge Period**
   - L3 → L2 withdrawals have 7-day delay
   - Cannot be accelerated
   - Check withdrawal initiation time

2. **Claim After Delay**
   ```javascript
   // After 7 days, claim withdrawal
   const tx = await bridgeContract.claimWithdrawal(withdrawalId);
   await tx.wait();
   ```

---

## 🔧 Development Issues

### Smart Contract Deployment

**Problem:** Contract deployment fails.

**Solutions:**

1. **Check Compilation**
   ```bash
   # Compile contracts
   npx hardhat compile
   
   # Check for warnings/errors
   npx hardhat compile --force
   ```

2. **Verify Network Configuration**
   ```javascript
   // hardhat.config.js
   networks: {
     animechain: {
       url: 'https://rpc-animechain-39xf6m45e3.t.conduit.xyz/',
       chainId: 69000, // Correct chain ID
       accounts: [process.env.PRIVATE_KEY],
       gasPrice: 'auto'
     }
   }
   ```

3. **Increase Gas Limit**
   ```javascript
   // In deployment script
   const contract = await factory.deploy({
     gasLimit: 5000000 // Higher gas limit
   });
   ```

### Verification Issues

**Problem:** Contract verification fails on explorer.

**Solutions:**

1. **Match Compiler Settings**
   - Use exact Solidity version
   - Match optimization settings
   - Include all imported contracts

2. **Flatten Contract (if needed)**
   ```bash
   npx hardhat flatten contracts/MyContract.sol > flattened.sol
   ```

3. **Use Hardhat Verification**
   ```bash
   npx hardhat verify --network animechain CONTRACT_ADDRESS "Constructor Args"
   ```

---

## 📱 Frontend Issues

### Web3 Provider Issues

**Problem:** Web3 provider not detected.

**Solutions:**

1. **Check MetaMask Installation**
   ```javascript
   if (typeof window.ethereum !== 'undefined') {
     console.log('MetaMask is installed!');
   } else {
     console.log('Please install MetaMask');
     // Redirect to MetaMask installation
   }
   ```

2. **Handle Different Wallets**
   ```javascript
   // Support multiple wallets
   const getProvider = () => {
     if (window.ethereum?.isMetaMask) return window.ethereum;
     if (window.ethereum?.isWalletConnect) return window.ethereum;
     if (window.ethereum?.isCoinbaseWallet) return window.ethereum;
     return window.ethereum; // Default
   };
   ```

3. **Request Account Access**
   ```javascript
   try {
     await window.ethereum.request({ method: 'eth_requestAccounts' });
   } catch (error) {
     if (error.code === 4001) {
       console.log('User rejected connection');
     } else {
       console.error('Error connecting wallet:', error);
     }
   }
   ```

### Event Listening Issues

**Problem:** Contract events not triggering.

**Solutions:**

1. **Check Event Filters**
   ```javascript
   // Correct event signature
   const transferTopic = ethers.id('Transfer(address,address,uint256)');
   
   const filter = {
     address: contractAddress,
     topics: [transferTopic],
     fromBlock: 'latest'
   };
   
   provider.on(filter, (log) => {
     console.log('Transfer event:', log);
   });
   ```

2. **Handle Provider Reconnection**
   ```javascript
   // Reconnect on provider disconnect
   provider.on('disconnect', () => {
     console.log('Provider disconnected, attempting reconnect...');
     setTimeout(() => {
       // Reinitialize provider
       setupProvider();
     }, 1000);
   });
   ```

---

## 🆘 Getting Help

### Check Status Pages

1. **Network Status**
   - [AnimeChain Explorer](https://explorer-animechain-39xf6m45e3.t.conduit.xyz/)
   - Check for network outages or maintenance

2. **RPC Health**
   ```bash
   curl -s https://rpc-animechain-39xf6m45e3.t.conduit.xyz/ \
     -X POST \
     -H "Content-Type: application/json" \
     -d '{"method":"eth_blockNumber","params":[],"id":1,"jsonrpc":"2.0"}'
   ```

### Community Support

1. **Discord Community**
   - [Join AnimeChain Discord](https://discord.gg/animechain)
   - Developer support channels
   - Community troubleshooting

2. **GitHub Issues**
   - [Report bugs](https://github.com/AnimeChain/AnimeChainDev/issues)
   - Feature requests
   - Documentation improvements

### Debug Tools

1. **Transaction Debugger**
   ```javascript
   // Debug failed transaction
   async function debugTransaction(txHash) {
     const tx = await provider.getTransaction(txHash);
     const receipt = await provider.getTransactionReceipt(txHash);
     
     console.log('Transaction:', tx);
     console.log('Receipt:', receipt);
     
     if (receipt.status === 0) {
       console.log('Transaction failed');
       // Try to get revert reason
       try {
         await provider.call(tx, tx.blockNumber);
       } catch (error) {
         console.log('Revert reason:', error.message);
       }
     }
   }
   ```

2. **Network Diagnostics**
   ```javascript
   // Check network health
   async function networkDiagnostics() {
     const [
       blockNumber,
       gasPrice,
       chainId
     ] = await Promise.all([
       provider.getBlockNumber(),
       provider.getFeeData(),
       provider.getNetwork()
     ]);
     
     console.log('Network Diagnostics:');
     console.log(`- Block Number: ${blockNumber}`);
     console.log(`- Gas Price: ${ethers.formatUnits(gasPrice.gasPrice, 'gwei')} gwei`);
     console.log(`- Chain ID: ${chainId.chainId}`);
   }
   ```

---

## 📚 Additional Resources

- [FAQ](faq.md) - Frequently asked questions
- [Network Details](../networks/mainnet/network-details.md) - Technical specifications  
- [RPC API](../developers/rpc-api.md) - Complete API reference
- [Examples](../developers/examples.md) - Code examples
- [Development Guide](../developers/development-guide.md) - Setup instructions

---

!!! tip "Still Stuck?"
    If you can't find a solution here, join our [Discord community](https://discord.gg/animechain) for real-time help from developers and community members.

!!! warning "Security Notice"
    Never share your private keys or seed phrases when asking for help. Legitimate support will never ask for this information.
