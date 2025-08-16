import { useState, useEffect } from 'react'
import './App.css'
import DocsHeader from './components/DocsHeader'
import Faucet from './components/Faucet'
import RefillFooter from './components/RefillFooter'
import { NETWORKS } from './constants/contracts'

// Contract addresses for different networks - updated for devFaucet
const CONTRACTS = {
  animechain: "0xa335F64c4d45da5DdF5931405E79E4Cc17644177",
  animechain_testnet: "0xC960563D5aF77EBB142F25504960723cCD3D4598",
};

function App() {
  const [network, setNetwork] = useState(() => {
    const savedNetwork = localStorage.getItem('selectedNetwork');
    if (savedNetwork && ['animechain', 'animechain_testnet'].includes(savedNetwork)) {
      return savedNetwork;
    }
    return import.meta.env.VITE_NETWORK || 'animechain_testnet';
  });
  
  const [isConnected, setIsConnected] = useState(false);

  const contractAddress = CONTRACTS[network];

  // Sync faucet theme with docs palette choice (Material for MkDocs) and persist for both apps
  useEffect(() => {
    try {
      const getCookie = (name) => {
        const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
        return match ? decodeURIComponent(match[1]) : null;
      };
      const cookieTheme = getCookie('animechain_theme');
      const paletteRaw = localStorage.getItem('__palette');
      const palette = paletteRaw ? JSON.parse(paletteRaw) : null;
      let scheme = 'default';
      if (cookieTheme) scheme = cookieTheme === 'dark' ? 'slate' : 'default';
      else if (palette && palette.scheme) scheme = palette.scheme;
      document.documentElement.setAttribute('data-md-color-scheme', scheme);
      const lc = scheme === 'slate' ? 'dark' : 'light';
      localStorage.setItem('animechain_theme', lc);
      document.cookie = `animechain_theme=${lc};path=/;max-age=31536000;samesite=lax`;
    } catch {}
    const onStorage = (e) => {
      if (e.key === '__palette' || e.key === 'animechain_theme') {
        try {
          let scheme = 'default';
          if (e.key === '__palette') {
            const palette = e.newValue ? JSON.parse(e.newValue) : null;
            scheme = palette && palette.scheme ? palette.scheme : 'default';
          } else if (e.key === 'animechain_theme') {
            const v = e.newValue || 'light';
            scheme = v === 'dark' ? 'slate' : 'default';
          }
          document.documentElement.setAttribute('data-md-color-scheme', scheme);
          localStorage.setItem('animechain_theme', scheme === 'slate' ? 'dark' : 'light');
          document.cookie = `animechain_theme=${scheme === 'slate' ? 'dark' : 'light'};path=/;max-age=31536000;samesite=lax`;
        } catch {}
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const handleNetworkChange = async (newNetwork) => {
    try {
      setNetwork(newNetwork);
      localStorage.setItem('selectedNetwork', newNetwork);
      if (window.ethereum && isConnected) {
        const networkConfig = NETWORKS[newNetwork];
        if (networkConfig) {
          try {
            await window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: networkConfig.chainId }],
            });
          } catch (switchError) {
            if (switchError.code === 4902) {
              await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [networkConfig],
              });
            } else {
              console.error('Network switch error:', switchError);
              window.location.reload();
              return;
            }
          }
        }
      }
      window.location.reload();
    } catch (error) {
      console.error('Error switching network:', error);
      window.location.reload();
    }
  };
  
  const updateConnectionStatus = (connected) => {
    setIsConnected(connected);
  };

  const getNetworkDisplayName = () => {
    switch (network) {
      case 'animechain': return 'AnimeChain';
      case 'animechain_testnet': return 'AnimeChain Testnet';
      default: return 'AnimeChain';
    }
  };

  const getTokenSymbol = () => {
    switch (network) {
      case 'animechain': return 'ANIME';
      case 'animechain_testnet': return 'ANIME';
      default: return 'ANIME';
    }
  };

  return (
    <div className="faucet-app">
      <DocsHeader />
      <main className="docs-content">
        <div className="network-selector">
          <label htmlFor="network-select">Select Network:</label>
          <select 
            id="network-select"
            value={network} 
            onChange={(e) => handleNetworkChange(e.target.value)}
            className="network-dropdown"
          >
            <option value="animechain">🎬 AnimeChain Mainnet</option>
            <option value="animechain_testnet">🧪 AnimeChain Testnet (Proof of Work)</option>
          </select>
        </div>
        <h1 className="page-title">{getNetworkDisplayName()} Faucet</h1>
        <p className="page-subtitle">Request small amounts of {getTokenSymbol()} for testing</p>
        <div className="pow-note">
          This is a PoW Faucet which refreshes every 24 hours. You have 8 withdrawls every 24 hours. The first transaction is gasless and so a proxy server at faucet.animechain.dev will take your PoW signature to trigger a faucet deposit on your behalf.
        </div>
        <Faucet 
          contractAddress={contractAddress} 
          network={network}
          onConnectionUpdate={updateConnectionStatus}
        />
        {!isConnected ? (
          <p className="read-the-docs">Connect your wallet to request {getTokenSymbol()} tokens</p>
        ) : (
          <RefillFooter contractAddress={contractAddress} network={network} />
        )}
      </main>
    </div>
  )
}

export default App

