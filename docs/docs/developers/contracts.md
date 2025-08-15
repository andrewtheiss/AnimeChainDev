# Smart Contracts

Deploy and interact with smart contracts on AnimeChain.

---

## 🏗️ Development Environment

### Prerequisites

```bash
# Install required tools
npm install --save-dev hardhat
npm install --save-dev @nomicfoundation/hardhat-toolbox
npm install --save-dev dotenv
```

### Project Structure

```
my-anime-project/
├── contracts/          # Solidity contracts
├── scripts/            # Deployment scripts  
├── test/              # Contract tests
├── hardhat.config.js  # Hardhat configuration
└── .env               # Environment variables
```

---

## ⚙️ Hardhat Configuration

Create `hardhat.config.js` with AnimeChain networks:

```javascript
require('dotenv').config();
require('@nomicfoundation/hardhat-toolbox');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.20',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    animechain: {
      url: 'https://rpc-animechain-39xf6m45e3.t.conduit.xyz/',
      chainId: 69000,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      gasPrice: 'auto',
    },
    testnet: {
      url: 'https://explorer-animechain-testnet-i8yja6a1a0.t.conduit.xyz/',
      chainId: 6900, 
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      gasPrice: 'auto',
    },
    hardhat: {
      chainId: 31337,
    },
  },
  etherscan: {
    apiKey: {
      animechain: 'placeholder',
      testnet: 'placeholder'
    },
    customChains: [
      {
        network: 'animechain',
        chainId: 69000,
        urls: {
          apiURL: 'https://explorer-animechain-39xf6m45e3.t.conduit.xyz/api',
          browserURL: 'https://explorer-animechain-39xf6m45e3.t.conduit.xyz/'
        }
      },
      {
        network: 'testnet',
        chainId: 6900,
        urls: {
          apiURL: 'https://explorer-conduit-orbit-deployer-d4pqjb0rle.t.conduit.xyz/api',
          browserURL: 'https://explorer-conduit-orbit-deployer-d4pqjb0rle.t.conduit.xyz/'
        }
      }
    ]
  }
};
```

---

## 📝 Sample Contracts

### Basic ERC-20 Token

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AnimeToken extends ERC20, Ownable {
    constructor(
        string memory name,
        string memory symbol,
        uint256 initialSupply,
        address initialOwner
    ) ERC20(name, symbol) Ownable(initialOwner) {
        _mint(initialOwner, initialSupply * 10**decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function burn(uint256 amount) public {
        _burn(_msgSender(), amount);
    }
}
```

### NFT Collection

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract AnimeNFT extends ERC721, Ownable {
    using Strings for uint256;

    uint256 private _nextTokenId;
    string private _baseTokenURI;
    uint256 public maxSupply = 10000;
    uint256 public mintPrice = 0.001 ether; // 0.001 ANIME

    constructor(address initialOwner) 
        ERC721("AnimeNFT", "ANIME") 
        Ownable(initialOwner) 
    {}

    function mint(address to) public payable {
        require(_nextTokenId < maxSupply, "Max supply reached");
        require(msg.value >= mintPrice, "Insufficient payment");

        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
    }

    function setBaseURI(string memory baseURI) public onlyOwner {
        _baseTokenURI = baseURI;
    }

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(_exists(tokenId), "Token does not exist");
        
        return bytes(_baseTokenURI).length > 0 
            ? string(abi.encodePacked(_baseTokenURI, tokenId.toString(), ".json"))
            : "";
    }

    function withdraw() public onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No funds to withdraw");
        
        (bool success, ) = payable(owner()).call{value: balance}("");
        require(success, "Withdrawal failed");
    }
}
```

### Simple DeFi Staking

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract AnimeStaking is Ownable, ReentrancyGuard {
    IERC20 public stakingToken;
    IERC20 public rewardToken;
    
    uint256 public rewardRate = 100; // 100 reward tokens per second
    uint256 public lastUpdateTime;
    uint256 public rewardPerTokenStored;

    mapping(address => uint256) public userRewardPerTokenPaid;
    mapping(address => uint256) public rewards;
    mapping(address => uint256) public balances;
    
    uint256 private _totalSupply;

    constructor(
        address _stakingToken,
        address _rewardToken,
        address initialOwner
    ) Ownable(initialOwner) {
        stakingToken = IERC20(_stakingToken);
        rewardToken = IERC20(_rewardToken);
    }

    function rewardPerToken() public view returns (uint256) {
        if (_totalSupply == 0) {
            return rewardPerTokenStored;
        }
        return rewardPerTokenStored + 
            (((block.timestamp - lastUpdateTime) * rewardRate * 1e18) / _totalSupply);
    }

    function earned(address account) public view returns (uint256) {
        return ((balances[account] * 
            (rewardPerToken() - userRewardPerTokenPaid[account])) / 1e18) + 
            rewards[account];
    }

    modifier updateReward(address account) {
        rewardPerTokenStored = rewardPerToken();
        lastUpdateTime = block.timestamp;
        if (account != address(0)) {
            rewards[account] = earned(account);
            userRewardPerTokenPaid[account] = rewardPerTokenStored;
        }
        _;
    }

    function stake(uint256 amount) external nonReentrant updateReward(msg.sender) {
        require(amount > 0, "Cannot stake 0");
        _totalSupply += amount;
        balances[msg.sender] += amount;
        stakingToken.transferFrom(msg.sender, address(this), amount);
    }

    function withdraw(uint256 amount) public nonReentrant updateReward(msg.sender) {
        require(amount > 0, "Cannot withdraw 0");
        _totalSupply -= amount;
        balances[msg.sender] -= amount;
        stakingToken.transfer(msg.sender, amount);
    }

    function getReward() public nonReentrant updateReward(msg.sender) {
        uint256 reward = rewards[msg.sender];
        if (reward > 0) {
            rewards[msg.sender] = 0;
            rewardToken.transfer(msg.sender, reward);
        }
    }

    function exit() external {
        withdraw(balances[msg.sender]);
        getReward();
    }
}
```

---

## 🚀 Deployment

### Deploy Script

Create `scripts/deploy.js`:

```javascript
const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  
  console.log("Deploying contracts with account:", deployer.address);
  console.log("Account balance:", (await deployer.provider.getBalance(deployer.address)).toString());

  // Deploy AnimeToken
  const AnimeToken = await hre.ethers.getContractFactory("AnimeToken");
  const animeToken = await AnimeToken.deploy(
    "Anime Community Token",
    "ACT", 
    1000000, // 1M tokens
    deployer.address
  );

  await animeToken.waitForDeployment();
  console.log("AnimeToken deployed to:", await animeToken.getAddress());

  // Deploy AnimeNFT
  const AnimeNFT = await hre.ethers.getContractFactory("AnimeNFT");
  const animeNFT = await AnimeNFT.deploy(deployer.address);

  await animeNFT.waitForDeployment();
  console.log("AnimeNFT deployed to:", await animeNFT.getAddress());

  // Deploy Staking Contract
  const AnimeStaking = await hre.ethers.getContractFactory("AnimeStaking");
  const animeStaking = await AnimeStaking.deploy(
    await animeToken.getAddress(), // Staking token
    await animeToken.getAddress(), // Reward token (same for simplicity)
    deployer.address
  );

  await animeStaking.waitForDeployment();
  console.log("AnimeStaking deployed to:", await animeStaking.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

### Deploy to Testnet

```bash
# Deploy to AnimeChain testnet
npx hardhat run scripts/deploy.js --network testnet

# Deploy to mainnet
npx hardhat run scripts/deploy.js --network animechain
```

---

## ✅ Verification

### Verify on Explorer

```bash
# Verify contract (after deployment)
npx hardhat verify --network testnet DEPLOYED_CONTRACT_ADDRESS "Constructor" "Arguments"
```

### Manual Verification

1. Go to the [AnimeChain Explorer](https://explorer-animechain-39xf6m45e3.t.conduit.xyz/)
2. Search for your contract address
3. Click "Verify & Publish" 
4. Select compiler version and optimization settings
5. Paste your contract source code
6. Submit verification

---

## 🧪 Testing

### Test File Example

Create `test/AnimeToken.js`:

```javascript
const { expect } = require("chai");

describe("AnimeToken", function () {
  let animeToken;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();
    
    const AnimeToken = await ethers.getContractFactory("AnimeToken");
    animeToken = await AnimeToken.deploy(
      "Test Token",
      "TEST",
      1000000,
      owner.address
    );
  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await animeToken.owner()).to.equal(owner.address);
    });

    it("Should assign the total supply to the owner", async function () {
      const ownerBalance = await animeToken.balanceOf(owner.address);
      expect(await animeToken.totalSupply()).to.equal(ownerBalance);
    });
  });

  describe("Transactions", function () {
    it("Should transfer tokens between accounts", async function () {
      await animeToken.transfer(addr1.address, 50);
      const addr1Balance = await animeToken.balanceOf(addr1.address);
      expect(addr1Balance).to.equal(50);

      await animeToken.connect(addr1).transfer(addr2.address, 50);
      const addr2Balance = await animeToken.balanceOf(addr2.address);
      expect(addr2Balance).to.equal(50);
    });
  });
});
```

### Run Tests

```bash
# Run tests
npx hardhat test

# Run tests with gas reporting
npx hardhat test --gas-reporter

# Run specific test file
npx hardhat test test/AnimeToken.js
```

---

## 📚 Best Practices

### Security Checklist

- ✅ Use latest OpenZeppelin contracts
- ✅ Enable compiler optimizations
- ✅ Implement proper access controls
- ✅ Add reentrancy guards where needed
- ✅ Validate all inputs
- ✅ Handle edge cases
- ✅ Comprehensive test coverage
- ✅ Professional audit for mainnet

### Gas Optimization

- Use `uint256` instead of smaller uints when possible
- Pack struct variables efficiently
- Use events for cheaper storage
- Consider proxy patterns for upgradeable contracts
- Batch operations when possible

---

## 🔗 Resources

- [OpenZeppelin Contracts](https://openzeppelin.com/contracts/)
- [Hardhat Documentation](https://hardhat.org/docs)
- [Solidity Documentation](https://docs.soliditylang.org/)
- [AnimeChain RPC API](rpc-api.md)
- [Code Examples](examples.md)

---

!!! tip "Need Help?"
    Join the [DevZuki community](https://t.co/4xlpVFIfDx) for developer support and discussions. This documentation is provided by a DevZuki member and it's the best place to get help for now.
