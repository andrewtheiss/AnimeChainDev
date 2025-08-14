export function NetworkInfo() {
  return (
    <div className="faucet-card p-6 mb-8">
      <h3 className="text-xl font-semibold text-primary-700 dark:text-primary-300 mb-4 text-center">
        🧪 AnimeChain Testnet Details
      </h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Network Name:</span>
            <span className="font-mono text-sm font-medium">AnimeChain Testnet</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Chain ID:</span>
            <span className="font-mono text-sm font-medium">6900 (0x1AF4)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Currency:</span>
            <span className="font-mono text-sm font-medium">tANIME</span>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">RPC URL:</span>
            <span className="font-mono text-xs font-medium text-right max-w-[200px] truncate">
              rpc-conduit-orbit-deployer...
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Explorer:</span>
            <a 
              href="https://explorer-conduit-orbit-deployer-d4pqjb0rle.t.conduit.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-700 hover:opacity-80 text-sm underline"
            >
              View Explorer
            </a>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Parent Chain:</span>
            <span className="font-mono text-sm font-medium">Arbitrum Sepolia</span>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 rounded-lg"
           style={{ backgroundColor: 'color-mix(in oklab, var(--color-primary-50) 60%, transparent)' }}>
        <p className="text-sm text-primary-800 dark:text-primary-300 text-center">
          🎌 This is a <strong>test network</strong> - tokens have no real value. 
          Perfect for development and experimentation!
        </p>
      </div>
    </div>
  );
}