import { useState } from 'react';
import Faucet from './Faucet';
import RefillFooter from './RefillFooter';
import { NETWORKS } from './contracts';
import './App.css';
import './Faucet.css';

// Contract addresses for different networks - DevFaucet
const CONTRACTS = {
  animechain: '0xa335F64c4d45da5DdF5931405E79E4Cc17644177',
  animechain_testnet: '0xC960563D5aF77EBB142F25504960723cCD3D4598',
};

export default function FaucetWidget() {
  const [network, setNetwork] = useState(() => {
    const saved = (typeof localStorage !== 'undefined' && localStorage.getItem('selectedNetwork')) || '';
    if (saved && ['animechain', 'animechain_testnet'].includes(saved)) return saved;
    return 'animechain_testnet';
  });

  const [isConnected, setIsConnected] = useState(false);
  const [addStatus, setAddStatus] = useState(null);

  const contractAddress = CONTRACTS[network];

  const handleNetworkChange = async (newNetwork) => {
    try {
      setNetwork(newNetwork);
      localStorage.setItem('selectedNetwork', newNetwork);
      if (window.ethereum && isConnected) {
        const cfg = NETWORKS[newNetwork];
        if (cfg) {
          try {
            await window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: cfg.chainId }],
            });
          } catch (e) {
            if (e && e.code === 4902) {
              await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [cfg],
              });
            } else {
              window.location.reload();
              return;
            }
          }
        }
      }
      window.location.reload();
    } catch {
      window.location.reload();
    }
  };

  const updateConnectionStatus = (connected) => setIsConnected(connected);

  const getNetworkDisplayName = () => {
    switch (network) {
      case 'animechain': return 'Animechain Mainnet';
      case 'animechain_testnet': return 'AnimeChain Testnet';
      default: return 'Animechain';
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
    // iconUrls intentionally omitted: MetaMask ignores it, and a missing icon URL
    // makes some stricter wallets reject the entire add request.
    const addParams = {
      chainId: cfg.chainId,
      chainName: cfg.chainName,
      nativeCurrency: cfg.nativeCurrency,
      rpcUrls: cfg.rpcUrls,
      blockExplorerUrls: cfg.blockExplorerUrls,
    };
    // wallet_addEthereumChain doubles as add-or-update in MetaMask 11+: when
    // the chainId is already saved but chainName/rpcUrls/explorer differ,
    // MetaMask shows an "Update network" prompt with the new params. Older
    // wallets silently no-op for an existing chainId, so we run the chainId
    // sanity check below to flag stale configs.
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
    <div className="faucet-app faucet-widget">
      <div className="network-selector">
        <label htmlFor="network-select">Select Network:</label>
        <select
          id="network-select"
          value={network}
          onChange={(e) => handleNetworkChange(e.target.value)}
          className="network-dropdown"
        >
          <option value="animechain">🎬 Animechain Mainnet</option>
          <option value="animechain_testnet">🧪 AnimeChain Testnet (Proof of Work)</option>
        </select>
      </div>
      <h2 className="page-title">{getNetworkDisplayName()} Faucet</h2>
      <p className="page-subtitle">Request small amounts of {getTokenSymbol()} for testing</p>
      <div className="pow-note">
        This is a PoW Faucet which refreshes every 24 hours. You have 8 withdrawals every 24 hours. The first transaction is gasless and so a proxy server at faucet.animechain.dev will take your PoW signature to trigger a faucet deposit on your behalf.
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
    </div>
  );
}
