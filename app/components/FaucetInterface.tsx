import { useState, useEffect } from 'react';

interface FaucetInterfaceProps {
  account: string;
  isCorrectNetwork: boolean;
}

const WITHDRAWAL_MESSAGES = [
  "Ill use this ANIME coin to build something on ANIME chain and not sell it like a degen.",
  "Gonna build more with this ANIME coin, and not ape into a meme coin.",
  "Gonna use this ANIME as my last hope for creating something worthwhile. God help me."
];

const MESSAGE_DESCRIPTIONS = [
  "Builder's Pledge",
  "Developer's Promise", 
  "Last Hope Declaration"
];

export function FaucetInterface({ account, isCorrectNetwork }: FaucetInterfaceProps) {
  const [selectedMessage, setSelectedMessage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [lastWithdrawal, setLastWithdrawal] = useState<string>('');
  const [withdrawalCount, setWithdrawalCount] = useState(0);
  const [timeUntilNext, setTimeUntilNext] = useState(0);
  const [balance, setBalance] = useState<string>('0');

  useEffect(() => {
    if (isCorrectNetwork && account) {
      checkBalance();
      // In a real implementation, you'd check the faucet contract state
      // For now, we'll simulate some data
      setLastWithdrawal('Never');
      setWithdrawalCount(0);
      setTimeUntilNext(0);
    }
  }, [account, isCorrectNetwork]);

  const checkBalance = async () => {
    if (window.ethereum && isCorrectNetwork) {
      try {
        const balance = await window.ethereum.request({
          method: 'eth_getBalance',
          params: [account, 'latest']
        });
        const balanceInEth = parseInt(balance, 16) / Math.pow(10, 18);
        setBalance(balanceInEth.toFixed(4));
      } catch (error) {
        console.error('Error checking balance:', error);
      }
    }
  };

  const handleWithdrawal = async () => {
    if (!isCorrectNetwork) {
      alert('Please switch to AnimeChain Testnet first');
      return;
    }

    setIsLoading(true);
    
    try {
      const message = WITHDRAWAL_MESSAGES[selectedMessage];
      
      // Sign the message
      const signature = await window.ethereum.request({
        method: 'personal_sign',
        params: [message, account]
      });

      // In a real implementation, you'd call the faucet contract here
      // For demo purposes, we'll simulate the transaction
      console.log('Withdrawal request:', {
        account,
        message,
        signature
      });

      // Simulate transaction delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      alert('🎉 Withdrawal successful! Check your wallet for tANIME tokens.');
      setLastWithdrawal(new Date().toLocaleString());
      setWithdrawalCount(prev => prev + 1);
      setTimeUntilNext(24 * 60 * 60); // 24 hours in seconds
      
      // Refresh balance
      setTimeout(checkBalance, 3000);
      
    } catch (error: any) {
      console.error('Withdrawal error:', error);
      if (error.code === 4001) {
        alert('Transaction cancelled by user');
      } else {
        alert('Withdrawal failed. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const formatTime = (seconds: number) => {
    if (seconds <= 0) return 'Ready to withdraw!';
    
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    
    if (hours > 0) {
      return `${hours}h ${minutes}m remaining`;
    }
    return `${minutes}m remaining`;
  };

  if (!isCorrectNetwork) {
    return (
      <div className="faucet-card p-8 text-center">
        <div className="text-6xl mb-4">⚠️</div>
        <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-400 mb-2">
          Wrong Network Detected
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Please switch to AnimeChain Testnet to use the faucet
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Account Info */}
      <div className="faucet-card p-6">
        <h3 className="text-xl font-semibold text-primary-700 dark:text-primary-300 mb-4">
          💰 Account Information
        </h3>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center p-4 rounded-lg"
               style={{ backgroundColor: 'color-mix(in oklab, var(--color-primary-50) 60%, transparent)' }}>
            <p className="text-sm text-gray-600 dark:text-gray-400">Current Balance</p>
            <p className="text-2xl font-bold text-primary-700 dark:text-primary-300">
              {balance} tANIME
            </p>
          </div>
          
          <div className="text-center p-4 rounded-lg"
               style={{ backgroundColor: 'color-mix(in oklab, var(--color-primary-50) 60%, transparent)' }}>
            <p className="text-sm text-gray-600 dark:text-gray-400">Total Withdrawals</p>
            <p className="text-2xl font-bold text-primary-700 dark:text-primary-300">
              {withdrawalCount}
            </p>
          </div>
          
          <div className="text-center p-4 rounded-lg"
               style={{ backgroundColor: 'color-mix(in oklab, var(--color-primary-50) 60%, transparent)' }}>
            <p className="text-sm text-gray-600 dark:text-gray-400">Last Withdrawal</p>
            <p className="text-sm font-medium text-primary-700 dark:text-primary-300">
              {lastWithdrawal}
            </p>
          </div>
        </div>
      </div>

      {/* Withdrawal Interface */}
      <div className="faucet-card p-8">
        <h3 className="text-2xl font-semibold text-primary-700 dark:text-primary-300 mb-6 text-center">
          🚰 Request Test Tokens
        </h3>

        {/* Cooldown Status */}
        {timeUntilNext > 0 ? (
          <div className="text-center p-6 rounded-lg mb-6"
               style={{ backgroundColor: 'color-mix(in oklab, #ffedd5 65%, transparent)' }}>
            <div className="text-4xl mb-2">⏰</div>
            <p className="text-lg font-semibold text-orange-700 dark:text-orange-300">
              {formatTime(timeUntilNext)}
            </p>
            <p className="text-sm text-orange-600 dark:text-orange-400">
              Please wait before requesting more tokens
            </p>
          </div>
        ) : (
          <>
            {/* Message Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Choose your commitment message (we take our ANIME seriously! 😄):
              </label>
              
              <div className="space-y-3">
                {WITHDRAWAL_MESSAGES.map((message, index) => (
                  <label
                    key={index}
                    className="flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition-all"
                    style={{
                      borderColor: selectedMessage === index ? 'var(--color-primary-500)' : 'var(--color-primary-200)',
                      backgroundColor: selectedMessage === index ? 'color-mix(in oklab, var(--color-primary-50) 60%, transparent)' : 'transparent'
                    }}
                  >
                    <input
                      type="radio"
                      name="message"
                      value={index}
                      checked={selectedMessage === index}
                      onChange={(e) => setSelectedMessage(Number(e.target.value))}
                      className="mt-1"
                    />
                    <div>
                      <p className="font-medium text-primary-700 dark:text-primary-300">
                        {MESSAGE_DESCRIPTIONS[index]}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                        "{message}"
                      </p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Withdrawal Button */}
            <div className="text-center">
              <button
                onClick={handleWithdrawal}
                disabled={isLoading || timeUntilNext > 0}
                className={`btn-primary ${isLoading || timeUntilNext > 0 ? 'opacity-60 cursor-not-allowed' : 'pulse-glow'}`}
              >
                {isLoading ? (
                  <span className="flex items-center space-x-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Processing...</span>
                  </span>
                ) : (
                  '🚰 Request tANIME Tokens'
                )}
              </button>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                You'll receive test tokens after signing your commitment message
              </p>
            </div>
          </>
        )}
      </div>

      {/* Instructions */}
      <div className="faucet-card p-6">
        <h4 className="text-lg font-semibold text-primary-700 dark:text-primary-300 mb-3">
          📋 How It Works
        </h4>
        <ol className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
          <li className="flex items-start space-x-2">
            <span className="text-primary-600 font-bold">1.</span>
            <span>Choose one of the commitment messages above</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-primary-600 font-bold">2.</span>
            <span>Click "Request tANIME Tokens" and sign the message in your wallet</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-primary-600 font-bold">3.</span>
            <span>Receive free tANIME tokens for testing and development</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-primary-600 font-bold">4.</span>
            <span>Build something amazing on AnimeChain! 🚀</span>
          </li>
        </ol>
      </div>
    </div>
  );
}