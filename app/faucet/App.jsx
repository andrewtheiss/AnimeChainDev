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
  const [addStatus, setAddStatus] = useState(null);

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
      let scheme = 'slate';
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
          let scheme = 'slate';
          if (e.key === '__palette') {
            const palette = e.newValue ? JSON.parse(e.newValue) : null;
            scheme = palette && palette.scheme ? palette.scheme : 'slate';
          } else if (e.key === 'animechain_theme') {
            const v = e.newValue || 'dark';
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

  const handleAddToMetaMask = async () => {
    setAddStatus(null);
    if (!window.ethereum) {
      setAddStatus({ kind: 'error', message: 'No wallet detected. Please install MetaMask.' });
      return;
    }
    const cfg = NETWORKS[network];
    if (!cfg) {
      setAddStatus({ kind: 'error', message: `Unknown network: ${network}` });
      return;
    }
    // iconUrls intentionally omitted: MetaMask ignores it, and the path the
    // NETWORKS config advertises 404s on the faucet domain (docs-only asset).
    // Some stricter wallets reject configs whose icon URL doesn't resolve.
    const addParams = {
      chainId: cfg.chainId,
      chainName: cfg.chainName,
      nativeCurrency: cfg.nativeCurrency,
      rpcUrls: cfg.rpcUrls,
      blockExplorerUrls: cfg.blockExplorerUrls,
    };
    // wallet_addEthereumChain doubles as add-or-update in MetaMask 11+:
    // when the chainId is already saved but chainName/rpcUrls/explorer differ,
    // MetaMask shows an "Update network" prompt with the new params. Older
    // wallets silently no-op for an existing chainId, so we still attempt the
    // chainId sanity check below to flag stale configs.
    try {
      await window.ethereum.request({ method: 'wallet_addEthereumChain', params: [addParams] });
    } catch (e) {
      if (e && e.code === 4001) {
        setAddStatus({ kind: 'info', message: 'Network update cancelled.' });
        return;
      }
      console.error('wallet_addEthereumChain failed', e);
      setAddStatus({ kind: 'error', message: `Could not add network: ${e?.message || 'unknown error'}` });
      return;
    }
    try {
      await window.ethereum.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: cfg.chainId }] });
    } catch (e) {
      if (e && e.code === 4001) {
        setAddStatus({ kind: 'info', message: `${cfg.chainName} is added. Switch was cancelled.` });
        return;
      }
      console.error('wallet_switchEthereumChain failed', e);
      setAddStatus({ kind: 'error', message: `Could not switch network: ${e?.message || 'unknown error'}` });
      return;
    }
    // Sanity check: confirm the wallet is now on the expected chain. If
    // chainId mismatches, the wallet is probably still pointed at a stale
    // entry that wasn't replaced by the add-or-update flow.
    try {
      const active = await window.ethereum.request({ method: 'eth_chainId' });
      const expected = cfg.chainId.toLowerCase();
      if (typeof active === 'string' && active.toLowerCase() !== expected) {
        setAddStatus({
          kind: 'error',
          message: `Wallet is on ${active}, expected ${cfg.chainId}. Remove the network in MetaMask and click "Add to MetaMask" again.`,
        });
        return;
      }
    } catch {
      // best-effort; fall through to success
    }
    setAddStatus({ kind: 'success', message: `Connected to ${cfg.chainName}.` });
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
        <div className="pre-faucet-actions">
          <span className="pre-faucet-text">First, make sure you:</span>
          <button onClick={handleAddToMetaMask} className="footer-refill-button">🦊 Add to MetaMask</button>
        </div>
        {addStatus && (
          <div role="status" aria-live="polite" className={`add-status add-status--${addStatus.kind}`}>
            {addStatus.message}
          </div>
        )}
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

