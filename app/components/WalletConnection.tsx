interface WalletConnectionProps {
  isConnected: boolean;
  account: string;
  isCorrectNetwork: boolean;
  onConnect: () => void;
  onSwitchNetwork: () => void;
}

export function WalletConnection({ 
  isConnected, 
  account, 
  isCorrectNetwork, 
  onConnect, 
  onSwitchNetwork 
}: WalletConnectionProps) {
  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  if (!isConnected) {
    return (
      <div className="faucet-card p-8 text-center">
        <div className="float-animation mb-6">
          <div className="w-24 h-24 mx-auto bg-gradient-to-r from-primary-500 to-accent-pink rounded-full flex items-center justify-center text-4xl">
            👛
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          Connect Your Wallet
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
          Connect your wallet to get free tANIME tokens for testing on AnimeChain Testnet
        </p>
        
        {window.ethereum ? (
          <button
            onClick={onConnect}
            className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 pulse-glow"
          >
            🦊 Connect MetaMask
          </button>
        ) : (
          <div className="space-y-4">
            <p className="text-orange-600 dark:text-orange-400 font-medium">
              MetaMask not detected
            </p>
            <a
              href="https://metamask.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-xl transition-colors"
            >
              Install MetaMask
            </a>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="faucet-card p-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-xl">
            ✅
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Connected Account</p>
            <p className="font-mono text-lg font-semibold text-gray-800 dark:text-white">
              {formatAddress(account)}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {!isCorrectNetwork ? (
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 text-orange-600 dark:text-orange-400">
                <span className="text-xl">⚠️</span>
                <span className="font-medium">Wrong Network</span>
              </div>
              <button
                onClick={onSwitchNetwork}
                className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition-colors"
              >
                Switch to Testnet
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-2 text-green-600 dark:text-green-400">
              <span className="text-xl">🟢</span>
              <span className="font-medium">AnimeChain Testnet</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}