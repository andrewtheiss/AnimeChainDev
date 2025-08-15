# 🎌 Use AnimeChain

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
    
    <div class="add-token-section">
      <button class="add-token-btn" onclick="addAnimeToken()">
        <span class="btn-icon"><img src="../assets/images/animecoin.webp" alt="ANIME" style="height: 1em; vertical-align: -0.15em;" /></span>
        Add ANIME Token to Wallet
      </button>
    </div>
  </div>

  <div class="balance-section">
    <h2>💰 Check Your Balance</h2>
    <div class="balance-buttons">
      <button class="balance-btn l1-btn" onclick="checkL1Balance()">
        <div class="btn-content">
          <span class="btn-icon">🏦</span>
          <span class="btn-text">Check L1 Balance</span>
          <span class="btn-subtitle">Ethereum Mainnet</span>
        </div>
      </button>
      
      <button class="balance-btn l2-btn" onclick="checkL2Balance()">
        <div class="btn-content">
          <span class="btn-icon">🌉</span>
          <span class="btn-text">Check L2 Balance</span>
          <span class="btn-subtitle">Arbitrum Network</span>
        </div>
      </button>
      
      <button class="balance-btn l3-btn" onclick="checkL3Balance()">
        <div class="btn-content">
          <span class="btn-icon">🎌</span>
          <span class="btn-text">Check L3 Balance</span>
          <span class="btn-subtitle">AnimeChain Network</span>
        </div>
      </button>
    </div>
  </div>
</div>

<script>
function addAnimeToken() {
  // This will be implemented later to add the token to MetaMask
  console.log('Adding ANIME token to wallet...');
  alert('Token addition functionality will be implemented soon!');
}

function checkL1Balance() {
  console.log('Checking L1 balance...');
  alert('L1 balance checking functionality will be implemented soon!');
}

function checkL2Balance() {
  console.log('Checking L2 balance...');
  alert('L2 balance checking functionality will be implemented soon!');
}

function checkL3Balance() {
  console.log('Checking L3 balance...');
  alert('L3 balance checking functionality will be implemented soon!');
}
</script> 