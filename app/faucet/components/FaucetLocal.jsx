import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { DEV_FAUCET_ABI, NETWORKS, DEV_FAUCET_MESSAGES } from '../constants/contracts';
import './styles/Faucet.css';
import AdminPanel from './AdminPanel';

const COOLDOWN_PERIOD = 450; // seconds
const DEV_GAS_RESERVE_WEI = (() => {
  try { return ethers.parseEther('0.01'); } catch { return 10_000_000_000_000_000n; }
})();

export default function Faucet({ contractAddress, network = 'animechain_testnet', onConnectionUpdate }) {
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);
  const [balance, setBalance] = useState('0');
  const [userBalance, setUserBalance] = useState('0');
  const [withdrawalCount, setWithdrawalCount] = useState(0);
  const [expectedMessage, setExpectedMessage] = useState('');
  const [expectedWithdrawalAmount, setExpectedWithdrawalAmount] = useState('0');
  const [expectedWithdrawalAmountWei, setExpectedWithdrawalAmountWei] = useState(0n);
  const [cooldown, setCooldown] = useState('0');
  const [cooldownPeriodSeconds, setCooldownPeriodSeconds] = useState(COOLDOWN_PERIOD);
  const [lastWithdrawal, setLastWithdrawal] = useState('0');
  const [isInitializing, setIsInitializing] = useState(true);
  const [loading, setLoading] = useState(false);
  const [serverLoading, setServerLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [nonce, setNonce] = useState('0');
  const [chainImgSrc, setChainImgSrc] = useState('/animechain.webp');

  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [adminLoading, setAdminLoading] = useState(false);
  const [adminError, setAdminError] = useState('');
  const [adminSuccess, setAdminSuccess] = useState('');

  const [powMining, setPowMining] = useState(false);
  const [powComplete, setPowComplete] = useState(false);
  const [powProgress, setPowProgress] = useState(0);
  const [powData, setPowData] = useState(null);
  const [uiCooldownUntil, setUiCooldownUntil] = useState(0);

  const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  const networkConfig = NETWORKS[network] || NETWORKS.animechain;
  const isDevFaucet = network === 'animechain' || network === 'animechain_testnet';
  const explorerUrl = `${networkConfig.blockExplorerUrls[0]}address/${account}`;

  useEffect(() => {
    const init = async () => {
      if (!window.ethereum) return setIsInitializing(false);
      const p = new ethers.BrowserProvider(window.ethereum);
      setProvider(p);
      const c = new ethers.Contract(contractAddress, DEV_FAUCET_ABI, p);
      setContract(c);
      try {
        const accounts = await p.listAccounts();
        if (accounts && accounts.length > 0) setAccount(accounts[0].address);
      } catch {}
      window.ethereum.on('accountsChanged', (accounts) => setAccount(accounts[0] || null));
      window.ethereum.on('chainChanged', () => window.location.reload());
      setIsInitializing(false);
    };
    init();
    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', () => {});
        window.ethereum.removeListener('chainChanged', () => {});
      }
    };
  }, [contractAddress]);

  useEffect(() => { onConnectionUpdate?.(!!account); }, [account]);

  const connectWallet = async () => {
    try {
      if (!window.ethereum) throw new Error('Please install MetaMask');
      setLoading(true); setError('');
      try { await window.ethereum.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: networkConfig.chainId }] }); }
      catch (e) { if (e.code === 4902) await window.ethereum.request({ method: 'wallet_addEthereumChain', params: [networkConfig] }); else throw e; }
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0]);
    } catch (err) { setError(err.message); } finally { setLoading(false); }
  };

  const uiCooldownRemaining = () => Math.max(0, uiCooldownUntil - Math.floor(Date.now() / 1000));
  const formatUiCooldown = () => { const s = uiCooldownRemaining(); return s ? `${s}s` : ''; };
  const formatCooldown = () => { const s = Number(cooldown); if (s <= 0) return 'Available now'; const m = Math.floor(s/60); const r = s%60; return m?`${m}m ${r}s`:`${r}s`; };
  const calculateCooldown = () => { if (lastWithdrawal==='0') return '0'; const next=Number(lastWithdrawal)+(cooldownPeriodSeconds||COOLDOWN_PERIOD); const now=Math.floor(Date.now()/1000); return now>=next?'0':String(next-now); };

  const updateBalancesAndState = async () => {
    if (!provider || !contract) return;
    try {
      const contractBal = await provider.getBalance(contractAddress); setBalance(ethers.formatEther(contractBal));
      if (account) {
        const userBal = await provider.getBalance(account); setUserBalance(ethers.formatEther(userBal));
        const count = await contract.withdrawal_count(account);
        let eff = Number(count);
        try { const firstTs = await contract.first_request_time(account); const latest=await provider.getBlock('latest'); const ts=BigInt(latest?.timestamp ?? Math.floor(Date.now()/1000)); if (firstTs && ts>=BigInt(firstTs)+86400n) eff=0; } catch {}
        setWithdrawalCount(eff);
        try { const idx=eff+1; const amt=await contract.get_withdrawal_amount(idx); setExpectedWithdrawalAmountWei(amt); setExpectedWithdrawalAmount(ethers.formatEther(amt)); } catch {}
        try { const idx=eff+1; const msg=await contract.get_expected_message(idx); setExpectedMessage(msg); } catch { setExpectedMessage(DEV_FAUCET_MESSAGES[eff]||''); }
      }
      try { const last=await contract.last_global_withdrawal(); setLastWithdrawal(last.toString()); } catch {}
      try { const onCd=await contract.cooldown_period(); setCooldownPeriodSeconds(Number(onCd)); } catch {}
      setCooldown(calculateCooldown());
    } catch {}
  };

  useEffect(() => { if (contract) updateBalancesAndState(); }, [contract]);
  useEffect(() => { if (account && contract) updateBalancesAndState(); }, [account]);
  useEffect(() => {
    if (!contract) return;
    const h = () => updateBalancesAndState();
    try { contract.on('Deposit', h); contract.on('Withdrawal', h); } catch {}
    const intv = setInterval(h, 20000);
    return () => { try { contract.off('Deposit', h); contract.off('Withdrawal', h); } catch {}; clearInterval(intv); };
  }, [contract]);

  // PoW helpers
  const getIpAddressHash = async () => { const fp = navigator.userAgent + navigator.language + screen.width + screen.height; return ethers.keccak256(ethers.toUtf8Bytes((account||'') + fp)); };
  const getDifficultyTarget = async (idx) => { try { const v = await contract.get_difficulty_target(idx); return Number(v); } catch { return [8000,8000,8000,8000,16000,32000,64000,128000][idx-1]||8000; } };
  const calculatePowHash = (user, blockHash, ipHash, nonce) => ethers.keccak256(ethers.concat([ethers.getBytes(blockHash), ethers.getBytes(user), ethers.getBytes(ipHash), ethers.zeroPadValue(ethers.toBeHex(nonce),32)]));
  const getFreshBlockHash = async () => { try { const latest=await provider.getBlock('latest'); return latest.hash; } catch { return ethers.ZeroHash; } };

  const startPowMining = async () => {
    if (!contract || !account) return setError('Contract or account not available');
    try {
      setPowMining(true); setPowComplete(false); setPowProgress(0); setError('');
      const live = await contract.withdrawal_count(account); const idx = Number(live)+1; const diff = await getDifficultyTarget(idx); const blk = await getFreshBlockHash(); const ip = await getIpAddressHash();
      setPowData({ chosenBlockHash: blk, withdrawalIndex: idx, ipAddressHash: ip, nonce: 0 });
      let n=0; while (true) { const h=calculatePowHash(account, blk, ip, n); if (BigInt(h)%BigInt(diff)===0n) { setPowData({ chosenBlockHash: blk, withdrawalIndex: idx, ipAddressHash: ip, nonce: n }); setPowComplete(true); setPowProgress(100); break; } n++; if (n%1000===0) { setPowProgress(Math.min((n/diff)*100,99)); await new Promise(r=>setTimeout(r,1)); } if (n>diff*10) throw new Error('Mining took too long'); }
    } catch (e) { setError(e.message||'Mining failed'); setPowMining(false); setPowComplete(false); }
  };

  const handleWithdraw = async () => {
    try {
      setLoading(true); setError(''); setSuccessMessage('');
      const faucetBalWei = await provider.getBalance(contractAddress);
      const next = withdrawalCount + 1; let amt = 0n; try { amt = await contract.get_withdrawal_amount(next); } catch { amt = expectedWithdrawalAmountWei; }
      if (faucetBalWei < amt + DEV_GAS_RESERVE_WEI) throw new Error('Faucet has insufficient funds');
      if (isDevFaucet && (!powComplete || !powData)) throw new Error('Please complete proof-of-work mining first');
      const signer = await provider.getSigner(); const c = contract.connect(signer); const msg = expectedMessage || DEV_FAUCET_MESSAGES[withdrawalCount];
      let useServer = withdrawalCount === 0; if (useServer) { try { const ub = await provider.getBalance(account); if (ub >= ethers.parseEther('0.001')) useServer = false; } catch {} }
      if (useServer) {
        const domain = { name: 'DevFaucet', version: '1', chainId: parseInt(networkConfig.chainId, 16), verifyingContract: contractAddress };
        const types = { WithdrawalRequest: [ {name:'recipient',type:'address'},{name:'chosenBlockHash',type:'bytes32'},{name:'withdrawalIndex',type:'uint256'},{name:'ipAddress',type:'bytes32'},{name:'nonce',type:'uint256'},{name:'message',type:'string'} ] };
        const value = { recipient: await signer.getAddress(), chosenBlockHash: powData.chosenBlockHash, withdrawalIndex: powData.withdrawalIndex, ipAddress: powData.ipAddressHash, nonce: Number(await contract.nonce(account)), message: msg };
        const sig = ethers.Signature.from(await signer.signTypedData(domain, types, value));
        const serverUrl = isLocalhost ? 'http://localhost:5000' : 'https://faucet.animechain.dev';
        const resp = await fetch(`${serverUrl}/request-withdrawal`, { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ network: network==='animechain_testnet'?'testnet':network, user_address:value.recipient, chosen_block_hash:value.chosenBlockHash, withdrawal_index:value.withdrawalIndex, ip_address:value.ipAddress, nonce:value.nonce, pow_nonce:powData.nonce, message:value.message, v:sig.v, r:sig.r, s:sig.s }) });
        if (!resp.ok) throw new Error((await resp.json()).error || `Server error ${resp.status}`);
        const result = await resp.json(); setSuccessMessage(`Server processed your request! Tx: ${String(result.tx_hash).slice(0,10)}...`);
      } else {
        await c.withdraw.estimateGas(powData.chosenBlockHash, next, powData.ipAddressHash, powData.nonce, msg);
        const tx = await c.withdraw(powData.chosenBlockHash, next, powData.ipAddressHash, powData.nonce, msg); await tx.wait(); setSuccessMessage(`Withdrawal tx sent: ${tx.hash.slice(0,10)}...`);
      }
      try { const last=await contract.last_global_withdrawal(); setLastWithdrawal(last.toString()); } catch {}
      try { const onCd=await contract.cooldown_period(); setCooldownPeriodSeconds(Number(onCd)); } catch {}
      setCooldown(String(cooldownPeriodSeconds)); setUiCooldownUntil(Math.floor(Date.now()/1000)+60); await updateBalancesAndState(); setPowComplete(false); setPowData(null); setPowProgress(0);
    } catch (e) { setError(e.message||'Withdrawal failed'); } finally { setLoading(false); }
  };

  const renderProgressSteps = () => { const steps=[]; for(let i=1;i<=8;i++){ const done=withdrawalCount>=i, cur=withdrawalCount===i-1; steps.push(<div key={i} className={`progress-step ${done?'completed':cur?'current':''}`}>{i}</div>); if(i<8) steps.push(<div key={`line-${i}`} className={`progress-line ${isDevFaucet?'dev':''}`}></div>);} return steps; };

  return (
    <div className="faucet-container dark-theme">
      {network==='animechain_testnet' && <div className="dev-banner">Testnet Mode - {networkConfig.chainName}</div>}
      <div className="logo-container">
        <img
          src={chainImgSrc}
          alt="AnimeChain Logo"
          className="chain-logo"
          onError={() => {
            if (chainImgSrc === '/animechain.webp') setChainImgSrc('/assets/images/animechain.webp');
            else if (chainImgSrc === '/assets/images/animechain.webp') setChainImgSrc('/public/animechain.webp');
          }}
        />
        <img src="/animecoin.png" alt="Animecoin Logo" className="coin-logo" />
      </div>
      {isInitializing ? (
        <div className="loading-overlay"><div className="spinner" /><p>Loading your faucet status…</p></div>
      ) : !account ? (
        <button onClick={connectWallet} disabled={loading} className="connect-button">{loading ? 'Connecting...' : `Connect to ${networkConfig.chainName}`}</button>
      ) : (
        <div>
          <div className="info-container">
            <p className="account-info">Connected Account: {account}</p>
            <p className="user-balance">Your Balance: {userBalance} {networkConfig.nativeCurrency.symbol}</p>
            <p className="balance-info">Faucet Balance: {balance} {networkConfig.nativeCurrency.symbol}</p>
            <p className="withdrawal-count">Withdrawals completed: <span className="count">{withdrawalCount}</span> / 8</p>
            <div className="explorer-link-container"><a href={explorerUrl} target="_blank" rel="noopener noreferrer" className="explorer-button">View on {networkConfig.chainName} Explorer</a></div>
          </div>
          {withdrawalCount < 8 && (
            <div className="phases-container">
              {isDevFaucet && (
                <div className="phase-line">
                  <span className="phase-label">Phase 1: Mine PoW</span>
                  <span className="phase-difficulty">diff: {powData?.difficultyTarget?.toLocaleString() || '...'}</span>
                  <div className="phase-status">
                    {!powComplete ? (
                      !powMining ? (
                        <button onClick={startPowMining} disabled={loading || uiCooldownRemaining()>0} className="phase-button">{uiCooldownRemaining()>0?`Wait ${formatUiCooldown()}`:'⛏️ Mine'}</button>
                      ) : (
                        <div className="phase-mining"><span>⛏️ {powProgress.toFixed(0)}%</span><div className="mini-progress"><div className="mini-fill" style={{ width: `${powProgress}%` }}></div></div></div>
                      )
                    ) : (
                      <span className="phase-complete">✅ Ready</span>
                    )}
                  </div>
                </div>
              )}
              <div className="phase-line">
                <span className="phase-label">{isDevFaucet ? 'Phase 2: Sign Message' : 'Sign Message'}</span>
                <span className="phase-tokens">{isDevFaucet ? (expectedWithdrawalAmount ? `${Number(expectedWithdrawalAmount).toLocaleString()} ANIME` : '...') : ''}</span>
                <button className={`phase-button ${isDevFaucet && powComplete ? 'pow-ready' : ''}`} onClick={handleWithdraw} disabled={loading || serverLoading || uiCooldownRemaining()>0 || (isDevFaucet ? (!powComplete) : false)}>
                  {loading ? 'Processing...' : serverLoading ? 'Sending to Server...' : isDevFaucet ? (powComplete ? 'Sign & Claim' : 'PoW Required') : 'Sign'}
                </button>
              </div>
              <div className="message-progress">{renderProgressSteps()}</div>
            </div>
          )}
          {isAdmin && isDevFaucet && (
            <div className="admin-panel">
              <div className="admin-header">
                <h3>🔧 Admin Controls</h3>
                <button onClick={() => setShowAdminPanel(!showAdminPanel)} className="admin-toggle-button">{showAdminPanel ? 'Hide' : 'Show'} Admin Panel</button>
              </div>
              {showAdminPanel && (
                <div className="admin-content">
                  <AdminPanel 
                    onUpdateWithdrawalAmount={() => {}}
                    onUpdatePowDifficulty={() => {}}
                    onUpdateCooldownPeriod={() => {}}
                    onUpdateBaseAmountMultiplier={() => {}}
                    onUpdateBaseDifficultyMultiplier={() => {}}
                    onDirectWithdrawal={() => {}}
                    onDebugBlockInfo={() => {}}
                    onWithdrawAllFunds={() => {}}
                    loading={adminLoading}
                    contract={contract}
                    isDevFaucet={isDevFaucet}
                    powComplete={powComplete}
                  />
                  {adminError && <p className="admin-error">{adminError}</p>}
                  {adminSuccess && <p className="admin-success">{adminSuccess}</p>}
                </div>
              )}
            </div>
          )}
          {error && <p className="error">{error}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
      )}
    </div>
  );
}

