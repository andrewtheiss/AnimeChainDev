# Code Examples

Practical examples for building on AnimeChain.

---

## 🚀 Quick Start Examples

### Connect to AnimeChain

=== "ethers.js v6"

```javascript
import { ethers } from 'ethers';

// AnimeChain network configuration
const ANIMECHAIN_MAINNET = {
  chainId: '0x10D88', // 69000
  chainName: 'AnimeChain',
  nativeCurrency: {
    name: 'ANIME',
    symbol: 'ANIME', 
    decimals: 18
  },
  rpcUrls: ['https://rpc-animechain-39xf6m45e3.t.conduit.xyz/'],
  blockExplorerUrls: ['https://explorer-animechain-39xf6m45e3.t.conduit.xyz/']
};

// Connect to provider
const provider = new ethers.JsonRpcProvider(ANIMECHAIN_MAINNET.rpcUrls[0]);

// Check connection
const network = await provider.getNetwork();
console.log(`Connected to chain ID: ${network.chainId}`);

// Create wallet from private key
const wallet = new ethers.Wallet('YOUR_PRIVATE_KEY', provider);
console.log(`Wallet address: ${wallet.address}`);

// Get balance
const balance = await provider.getBalance(wallet.address);
console.log(`Balance: ${ethers.formatEther(balance)} ANIME`);
```

=== "web3.js"

```javascript
import Web3 from 'web3';

// Connect to AnimeChain
const web3 = new Web3('https://rpc-animechain-39xf6m45e3.t.conduit.xyz/');

// Check connection
const chainId = await web3.eth.getChainId();
console.log(`Connected to chain ID: ${chainId}`);

// Create account from private key
const account = web3.eth.accounts.privateKeyToAccount('YOUR_PRIVATE_KEY');
web3.eth.accounts.wallet.add(account);

// Get balance
const balance = await web3.eth.getBalance(account.address);
console.log(`Balance: ${web3.utils.fromWei(balance, 'ether')} ANIME`);
```

=== "viem"

```typescript
import { createPublicClient, createWalletClient, http } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';

// Define AnimeChain
const animeChain = {
  id: 69000,
  name: 'AnimeChain',
  network: 'animechain',
  nativeCurrency: { name: 'ANIME', symbol: 'ANIME', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://rpc-animechain-39xf6m45e3.t.conduit.xyz/'] }
  }
};

// Create clients
const publicClient = createPublicClient({
  chain: animeChain,
  transport: http()
});

const account = privateKeyToAccount('0xYOUR_PRIVATE_KEY');
const walletClient = createWalletClient({
  account,
  chain: animeChain,
  transport: http()
});

// Get balance
const balance = await publicClient.getBalance({ address: account.address });
console.log(`Balance: ${formatEther(balance)} ANIME`);
```

### Add to MetaMask

```javascript
// Add AnimeChain to MetaMask
async function addAnimeChainToMetaMask() {
  if (typeof window.ethereum !== 'undefined') {
    try {
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [{
          chainId: '0x10D88', // 69000
          chainName: 'AnimeChain',
          nativeCurrency: {
            name: 'ANIME',
            symbol: 'ANIME',
            decimals: 18
          },
          rpcUrls: ['https://rpc-animechain-39xf6m45e3.t.conduit.xyz/'],
          blockExplorerUrls: ['https://explorer-animechain-39xf6m45e3.t.conduit.xyz/']
        }]
      });
      console.log('AnimeChain added to MetaMask!');
    } catch (error) {
      console.error('Error adding AnimeChain to MetaMask:', error);
    }
  } else {
    console.error('MetaMask is not installed');
  }
}

// Switch to AnimeChain
async function switchToAnimeChain() {
  try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0x10D88' }]
    });
  } catch (error) {
    if (error.code === 4902) {
      // Chain not added, add it first
      await addAnimeChainToMetaMask();
    } else {
      console.error('Error switching to AnimeChain:', error);
    }
  }
}
```

---

## 💰 Token Operations

### ERC-20 Token Interactions

```javascript
import { ethers } from 'ethers';

// ERC-20 ABI (minimal)
const ERC20_ABI = [
  'function name() view returns (string)',
  'function symbol() view returns (string)',
  'function decimals() view returns (uint8)',
  'function totalSupply() view returns (uint256)',
  'function balanceOf(address) view returns (uint256)',
  'function transfer(address to, uint256 amount) returns (bool)',
  'function approve(address spender, uint256 amount) returns (bool)',
  'function allowance(address owner, address spender) view returns (uint256)',
  'event Transfer(address indexed from, address indexed to, uint256 value)'
];

const provider = new ethers.JsonRpcProvider('https://rpc-animechain-39xf6m45e3.t.conduit.xyz/');
const wallet = new ethers.Wallet('YOUR_PRIVATE_KEY', provider);

// Connect to token contract
const tokenAddress = '0xYOUR_TOKEN_ADDRESS';
const tokenContract = new ethers.Contract(tokenAddress, ERC20_ABI, wallet);

// Get token info
async function getTokenInfo() {
  const [name, symbol, decimals, totalSupply] = await Promise.all([
    tokenContract.name(),
    tokenContract.symbol(),
    tokenContract.decimals(),
    tokenContract.totalSupply()
  ]);

  console.log(`Token: ${name} (${symbol})`);
  console.log(`Decimals: ${decimals}`);
  console.log(`Total Supply: ${ethers.formatUnits(totalSupply, decimals)}`);
}

// Get balance
async function getBalance(address) {
  const balance = await tokenContract.balanceOf(address);
  const decimals = await tokenContract.decimals();
  return ethers.formatUnits(balance, decimals);
}

// Transfer tokens
async function transferTokens(to, amount) {
  const decimals = await tokenContract.decimals();
  const tx = await tokenContract.transfer(to, ethers.parseUnits(amount, decimals));
  
  console.log(`Transaction sent: ${tx.hash}`);
  const receipt = await tx.wait();
  console.log(`Transaction confirmed in block ${receipt.blockNumber}`);
  
  return receipt;
}

// Approve spending
async function approveSpending(spender, amount) {
  const decimals = await tokenContract.decimals();
  const tx = await tokenContract.approve(spender, ethers.parseUnits(amount, decimals));
  
  await tx.wait();
  console.log(`Approved ${amount} tokens for ${spender}`);
}

// Listen for Transfer events
tokenContract.on('Transfer', (from, to, value, event) => {
  const decimals = tokenContract.decimals();
  console.log(`Transfer: ${ethers.formatUnits(value, decimals)} tokens from ${from} to ${to}`);
});
```

### Native ANIME Transfers

```javascript
// Send ANIME tokens
async function sendANIME(to, amount) {
  const tx = await wallet.sendTransaction({
    to: to,
    value: ethers.parseEther(amount),
    gasLimit: 21000
  });

  console.log(`Sent ${amount} ANIME to ${to}`);
  console.log(`Transaction: ${tx.hash}`);
  
  const receipt = await tx.wait();
  return receipt;
}

// Check transaction status
async function checkTransaction(txHash) {
  const tx = await provider.getTransaction(txHash);
  const receipt = await provider.getTransactionReceipt(txHash);
  
  console.log(`Transaction ${txHash}:`);
  console.log(`- Status: ${receipt.status === 1 ? 'Success' : 'Failed'}`);
  console.log(`- Block: ${receipt.blockNumber}`);
  console.log(`- Gas Used: ${receipt.gasUsed.toString()}`);
  console.log(`- Gas Price: ${ethers.formatUnits(tx.gasPrice, 'gwei')} gwei`);
}
```

---

## NFT Operations

### Deploy NFT Contract

```javascript
// NFT contract deployment
async function deployNFT() {
  const NFT_BYTECODE = '0x608060405234801561001057600080fd5b5...'; // Your compiled bytecode
  const NFT_ABI = [/* Your NFT ABI */];
  
  // Deploy contract
  const factory = new ethers.ContractFactory(NFT_ABI, NFT_BYTECODE, wallet);
  const contract = await factory.deploy('AnimeNFT', 'ANIME');
  
  await contract.waitForDeployment();
  console.log(`NFT deployed to: ${await contract.getAddress()}`);
  
  return contract;
}
```

### Interact with NFT

```javascript
const NFT_ABI = [
  'function name() view returns (string)',
  'function symbol() view returns (string)',
  'function tokenURI(uint256) view returns (string)',
  'function ownerOf(uint256) view returns (address)',
  'function balanceOf(address) view returns (uint256)',
  'function mint(address to) payable returns (uint256)',
  'function approve(address to, uint256 tokenId)',
  'function transferFrom(address from, address to, uint256 tokenId)',
  'event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)'
];

const nftContract = new ethers.Contract(nftAddress, NFT_ABI, wallet);

// Mint NFT
async function mintNFT(to) {
  const mintPrice = ethers.parseEther('0.001'); // 0.001 ANIME
  const tx = await nftContract.mint(to, { value: mintPrice });
  
  const receipt = await tx.wait();
  
  // Get tokenId from Transfer event
  const transferEvent = receipt.logs.find(log => log.topics[0] === ethers.id('Transfer(address,address,uint256)'));
  const tokenId = ethers.getBigInt(transferEvent.topics[3]);
  
  console.log(`Minted NFT #${tokenId} to ${to}`);
  return tokenId;
}

// Get NFT metadata
async function getNFTMetadata(tokenId) {
  const [owner, tokenURI] = await Promise.all([
    nftContract.ownerOf(tokenId),
    nftContract.tokenURI(tokenId)
  ]);
  
  console.log(`NFT #${tokenId}:`);
  console.log(`- Owner: ${owner}`);
  console.log(`- URI: ${tokenURI}`);
  
  // Fetch metadata JSON
  if (tokenURI.startsWith('http')) {
    const response = await fetch(tokenURI);
    const metadata = await response.json();
    console.log(`- Name: ${metadata.name}`);
    console.log(`- Description: ${metadata.description}`);
  }
}

// Transfer NFT
async function transferNFT(from, to, tokenId) {
  const tx = await nftContract.transferFrom(from, to, tokenId);
  await tx.wait();
  console.log(`Transferred NFT #${tokenId} from ${from} to ${to}`);
}
```

---

## 🏦 DeFi Examples

### Simple DEX Swap

```javascript
// Simplified DEX interaction
const DEX_ABI = [
  'function swapExactTokensForTokens(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)',
  'function getAmountsOut(uint amountIn, address[] calldata path) external view returns (uint[] memory amounts)'
];

const dexContract = new ethers.Contract(dexAddress, DEX_ABI, wallet);

async function swapTokens(tokenA, tokenB, amountIn, slippage = 0.05) {
  const path = [tokenA, tokenB];
  const deadline = Math.floor(Date.now() / 1000) + 60 * 20; // 20 minutes
  
  // Get expected output
  const amounts = await dexContract.getAmountsOut(amountIn, path);
  const expectedOut = amounts[1];
  const minOut = expectedOut * BigInt(Math.floor((1 - slippage) * 1000)) / 1000n;
  
  // Approve token A for spending
  const tokenAContract = new ethers.Contract(tokenA, ERC20_ABI, wallet);
  await tokenAContract.approve(dexAddress, amountIn);
  
  // Execute swap
  const tx = await dexContract.swapExactTokensForTokens(
    amountIn,
    minOut,
    path,
    wallet.address,
    deadline
  );
  
  const receipt = await tx.wait();
  console.log(`Swap completed: ${tx.hash}`);
  
  return receipt;
}
```

### Staking Contract

```javascript
const STAKING_ABI = [
  'function stake(uint256 amount) external',
  'function withdraw(uint256 amount) external',
  'function getReward() external',
  'function earned(address account) external view returns (uint256)',
  'function balanceOf(address account) external view returns (uint256)'
];

const stakingContract = new ethers.Contract(stakingAddress, STAKING_ABI, wallet);

async function stakeTokens(amount) {
  // First approve the staking contract
  const tokenContract = new ethers.Contract(stakingTokenAddress, ERC20_ABI, wallet);
  await tokenContract.approve(stakingAddress, amount);
  
  // Stake tokens
  const tx = await stakingContract.stake(amount);
  await tx.wait();
  console.log(`Staked ${ethers.formatEther(amount)} tokens`);
}

async function withdrawStake(amount) {
  const tx = await stakingContract.withdraw(amount);
  await tx.wait();
  console.log(`Withdrawn ${ethers.formatEther(amount)} tokens`);
}

async function claimRewards() {
  const earned = await stakingContract.earned(wallet.address);
  
  if (earned > 0) {
    const tx = await stakingContract.getReward();
    await tx.wait();
    console.log(`Claimed ${ethers.formatEther(earned)} reward tokens`);
  } else {
    console.log('No rewards to claim');
  }
}

async function getStakingInfo() {
  const [staked, earned] = await Promise.all([
    stakingContract.balanceOf(wallet.address),
    stakingContract.earned(wallet.address)
  ]);
  
  console.log(`Staked: ${ethers.formatEther(staked)} tokens`);
  console.log(`Earned: ${ethers.formatEther(earned)} reward tokens`);
}
```

---

## 🎮 Gaming Examples

### Simple Game State Management

```javascript
// Game contract interaction
const GAME_ABI = [
  'function startGame() external returns (uint256 gameId)',
  'function makeMove(uint256 gameId, uint256 move) external',
  'function endGame(uint256 gameId) external',
  'function getGameState(uint256 gameId) external view returns (tuple(address player, uint256 score, bool ended))',
  'event GameStarted(uint256 indexed gameId, address indexed player)',
  'event MoveMade(uint256 indexed gameId, address indexed player, uint256 move)',
  'event GameEnded(uint256 indexed gameId, address indexed player, uint256 finalScore)'
];

const gameContract = new ethers.Contract(gameAddress, GAME_ABI, wallet);

class AnimeGame {
  constructor() {
    this.gameId = null;
    this.setupEventListeners();
  }

  async startNewGame() {
    const tx = await gameContract.startGame();
    const receipt = await tx.wait();
    
    // Get gameId from event
    const event = receipt.logs.find(log => log.topics[0] === ethers.id('GameStarted(uint256,address)'));
    this.gameId = ethers.getBigInt(event.topics[1]);
    
    console.log(`Game ${this.gameId} started!`);
    return this.gameId;
  }

  async makeMove(move) {
    if (!this.gameId) throw new Error('No active game');
    
    const tx = await gameContract.makeMove(this.gameId, move);
    await tx.wait();
    console.log(`Move ${move} made in game ${this.gameId}`);
  }

  async getGameState() {
    if (!this.gameId) throw new Error('No active game');
    
    const state = await gameContract.getGameState(this.gameId);
    return {
      player: state[0],
      score: state[1].toString(),
      ended: state[2]
    };
  }

  async endGame() {
    if (!this.gameId) throw new Error('No active game');
    
    const tx = await gameContract.endGame(this.gameId);
    await tx.wait();
    
    const state = await this.getGameState();
    console.log(`Game ${this.gameId} ended! Final score: ${state.score}`);
    
    this.gameId = null;
    return state.score;
  }

  setupEventListeners() {
    gameContract.on('MoveMade', (gameId, player, move) => {
      if (gameId === this.gameId) {
        console.log(`Player ${player} made move: ${move}`);
      }
    });

    gameContract.on('GameEnded', (gameId, player, finalScore) => {
      if (gameId === this.gameId) {
        console.log(`Game ${gameId} ended! Player: ${player}, Score: ${finalScore}`);
      }
    });
  }
}

// Usage
const game = new AnimeGame();
await game.startNewGame();
await game.makeMove(1);
await game.makeMove(2);
const finalScore = await game.endGame();
```

---

## 🌉 Bridge Examples

### L2 to L3 Bridge

```javascript
// Bridge ANIME from Arbitrum to AnimeChain
const BRIDGE_ABI = [
  'function depositToL3(address recipient, uint256 amount) external payable',
  'function withdraw(uint256 amount) external',
  'event DepositToL3(address indexed from, address indexed to, uint256 amount)',
  'event WithdrawFromL3(address indexed from, uint256 amount)'
];

const bridgeContract = new ethers.Contract(bridgeAddress, BRIDGE_ABI, wallet);

async function bridgeToL3(recipient, amount) {
  // Bridge fee (small amount)
  const bridgeFee = ethers.parseEther('0.0001');
  
  const tx = await bridgeContract.depositToL3(recipient, amount, {
    value: bridgeFee
  });
  
  console.log(`Bridging ${ethers.formatEther(amount)} ANIME to L3...`);
  console.log(`Transaction: ${tx.hash}`);
  
  const receipt = await tx.wait();
  console.log('Bridge transaction confirmed!');
  
  return receipt;
}

async function withdrawFromL3(amount) {
  const tx = await bridgeContract.withdraw(amount);
  
  console.log(`Withdrawing ${ethers.formatEther(amount)} ANIME from L3...`);
  console.log(`Transaction: ${tx.hash}`);
  console.log('Note: Withdrawal will be available after 7-day challenge period');
  
  const receipt = await tx.wait();
  return receipt;
}

// Listen for bridge events
bridgeContract.on('DepositToL3', (from, to, amount) => {
  console.log(`Bridge deposit: ${ethers.formatEther(amount)} ANIME from ${from} to ${to}`);
});
```

---

## 🛠️ Utility Functions

### Gas Estimation and Optimization

```javascript
// Gas estimation utilities
class GasUtils {
  constructor(provider) {
    this.provider = provider;
  }

  async estimateGas(tx) {
    try {
      const gasEstimate = await this.provider.estimateGas(tx);
      const gasPrice = await this.provider.getFeeData();
      
      return {
        gasLimit: gasEstimate,
        gasPrice: gasPrice.gasPrice,
        maxFeePerGas: gasPrice.maxFeePerGas,
        maxPriorityFeePerGas: gasPrice.maxPriorityFeePerGas,
        cost: gasEstimate * gasPrice.gasPrice
      };
    } catch (error) {
      console.error('Gas estimation failed:', error);
      throw error;
    }
  }

  async optimizeGasPrice() {
    const feeData = await this.provider.getFeeData();
    
    // Use EIP-1559 if supported
    if (feeData.maxFeePerGas) {
      return {
        maxFeePerGas: feeData.maxFeePerGas,
        maxPriorityFeePerGas: feeData.maxPriorityFeePerGas
      };
    } else {
      return {
        gasPrice: feeData.gasPrice
      };
    }
  }
}

const gasUtils = new GasUtils(provider);

// Example usage
const tx = {
  to: '0xRecipientAddress',
  value: ethers.parseEther('1.0'),
  data: '0x'
};

const gasInfo = await gasUtils.estimateGas(tx);
console.log(`Estimated gas: ${gasInfo.gasLimit}`);
console.log(`Gas cost: ${ethers.formatEther(gasInfo.cost)} ANIME`);
```

### Event Monitoring

```javascript
// Event monitoring utility
class EventMonitor {
  constructor(provider) {
    this.provider = provider;
    this.listeners = new Map();
  }

  async monitorContract(contractAddress, abi, eventName, callback) {
    const contract = new ethers.Contract(contractAddress, abi, this.provider);
    
    // Listen for new events
    contract.on(eventName, callback);
    
    // Store listener for cleanup
    this.listeners.set(`${contractAddress}-${eventName}`, contract);
    
    console.log(`Monitoring ${eventName} events for contract ${contractAddress}`);
  }

  async getHistoricalEvents(contractAddress, abi, eventName, fromBlock = 'earliest') {
    const contract = new ethers.Contract(contractAddress, abi, this.provider);
    
    const filter = contract.filters[eventName]();
    const events = await contract.queryFilter(filter, fromBlock);
    
    return events.map(event => ({
      blockNumber: event.blockNumber,
      transactionHash: event.transactionHash,
      args: event.args
    }));
  }

  stopMonitoring(contractAddress, eventName) {
    const key = `${contractAddress}-${eventName}`;
    const contract = this.listeners.get(key);
    
    if (contract) {
      contract.removeAllListeners(eventName);
      this.listeners.delete(key);
      console.log(`Stopped monitoring ${eventName} for ${contractAddress}`);
    }
  }

  stopAll() {
    for (const [key, contract] of this.listeners) {
      contract.removeAllListeners();
    }
    this.listeners.clear();
    console.log('Stopped all event monitoring');
  }
}

// Usage
const monitor = new EventMonitor(provider);

// Monitor Transfer events
await monitor.monitorContract(
  tokenAddress, 
  ERC20_ABI, 
  'Transfer', 
  (from, to, amount) => {
    console.log(`Transfer: ${ethers.formatEther(amount)} tokens from ${from} to ${to}`);
  }
);

// Get historical events
const historicalTransfers = await monitor.getHistoricalEvents(
  tokenAddress,
  ERC20_ABI,
  'Transfer',
  'latest-1000' // Last 1000 blocks
);

console.log(`Found ${historicalTransfers.length} historical transfers`);
```

---

## 🔗 Additional Resources

- [AnimeChain Network Details](../networks/mainnet/network-details.md)
- [Smart Contract Documentation](contracts.md)
- [RPC API Reference](rpc-api.md)
- [Hardhat Configuration Guide](../networks/testnet/getting-started.md)

---

!!! tip "Production Ready"
    These examples are production-ready but always test on testnet first. Remember to handle errors appropriately and never expose private keys in client-side code.

!!! note "Gas Optimization"
    AnimeChain has much lower gas costs than Ethereum mainnet, but it's still good practice to optimize gas usage in your contracts and transactions.
