import { useState, useEffect } from 'react';
import { WalletConnection } from './WalletConnection';
import { FaucetInterface } from './FaucetInterface';
import { NetworkInfo } from './NetworkInfo';

export function FaucetApp() {
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState<string>('');
  const [isCorrectNetwork, setIsCorrectNetwork] = useState(false);

  useEffect(() => {
    checkConnection();
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
      window.ethereum.on('chainChanged', handleChainChanged);
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
        window.ethereum.removeListener('chainChanged', handleChainChanged);
      }
    };
  }, []);

  const checkConnection = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          setIsConnected(true);
          await checkNetwork();
        }
      } catch (error) {
        console.error('Error checking connection:', error);
      }
    }
  };

  const checkNetwork = async () => {
    if (window.ethereum) {
      try {
        const chainId = await window.ethereum.request({ method: 'eth_chainId' });
        // AnimeChain Testnet chainId is 6900 (0x1AF4)
        setIsCorrectNetwork(chainId === '0x1af4' || chainId === '0x1AF4');
      } catch (error) {
        console.error('Error checking network:', error);
      }
    }
  };

  const handleAccountsChanged = (accounts: string[]) => {
    if (accounts.length > 0) {
      setAccount(accounts[0]);
      setIsConnected(true);
    } else {
      setAccount('');
      setIsConnected(false);
    }
  };

  const handleChainChanged = () => {
    checkNetwork();
    // Reload the page to reset state
    window.location.reload();
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ 
          method: 'eth_requestAccounts' 
        });
        setAccount(accounts[0]);
        setIsConnected(true);
        await checkNetwork();
      } catch (error) {
        console.error('Error connecting wallet:', error);
      }
    }
  };

  const switchToTestnet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x1af4' }], // 6900 in hex
        });
      } catch (switchError: any) {
        // If the chain hasn't been added to the user's wallet
        if (switchError.code === 4902) {
          try {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [{
                chainId: '0x1af4',
                chainName: 'AnimeChain Testnet',
                nativeCurrency: {
                  name: 'ANIME',
                  symbol: 'ANIME',
                  decimals: 18
                },
                rpcUrls: ['https://explorer-animechain-testnet-i8yja6a1a0.t.conduit.xyz/'],
                blockExplorerUrls: ['https://explorer-conduit-orbit-deployer-d4pqjb0rle.t.conduit.xyz/']
              }]
            });
          } catch (addError) {
            console.error('Error adding network:', addError);
          }
        }
      }
    }
  };

  return (
    <div className="page">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="anime-gradient bg-clip-text text-transparent">
              AnimeChain
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-primary-700 dark:text-primary-300 mb-2">
            Testnet Faucet
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get free <strong>ANIME</strong> tokens to test and develop on AnimeChain Testnet. 
            Build something amazing in the anime-powered decentralized ecosystem! 🚀
          </p>
        </div>

        {/* Network Information */}
        <NetworkInfo />

        {/* Main Content */}
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
          <div className="space-y-8">
            {/* Wallet Connection */}
            <WalletConnection 
              isConnected={isConnected}
              account={account}
              isCorrectNetwork={isCorrectNetwork}
              onConnect={connectWallet}
              onSwitchNetwork={switchToTestnet}
            />

            {/* Faucet Interface */}
            {isConnected && (
              <FaucetInterface 
                account={account}
                isCorrectNetwork={isCorrectNetwork}
              />
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="faucet-card p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-primary-700 dark:text-primary-300 mb-4">
              🛠️ Need Help Building?
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="../"
                className="btn-primary"
              >
                📚 Documentation
              </a>
              <a
                href="https://t.co/4xlpVFIfDx"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                💬 DevZuki Community
              </a>
              <a
                href="https://explorer-conduit-orbit-deployer-d4pqjb0rle.t.conduit.xyz/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                🔍 Block Explorer
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}