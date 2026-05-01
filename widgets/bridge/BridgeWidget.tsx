import { useEffect, useMemo, useState } from "react";

const NATIVE = "0x0000000000000000000000000000000000000000";
const OPENSEA_SWAP = "https://opensea.io/swap";

type ChainSlug = "ethereum" | "arbitrum" | "animechain";

type Token = {
  id: string;
  chain: ChainSlug;
  chainLabel: string;
  address: string;
  symbol: string;
  description: string;
};

const TOKENS: readonly Token[] = [
  {
    id: "eth-usdc",
    chain: "ethereum",
    chainLabel: "Ethereum",
    address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    symbol: "USDC",
    description: "Circle USDC on Ethereum L1",
  },
  {
    id: "eth-eth",
    chain: "ethereum",
    chainLabel: "Ethereum",
    address: NATIVE,
    symbol: "ETH",
    description: "native ETH on Ethereum L1",
  },
  {
    id: "arb-usdc",
    chain: "arbitrum",
    chainLabel: "Arbitrum",
    address: "0xaf88d065e77c8cc2239327c5edb3a432268e5831",
    symbol: "USDC",
    description: "Circle USDC on Arbitrum L2",
  },
  {
    id: "arb-eth",
    chain: "arbitrum",
    chainLabel: "Arbitrum",
    address: NATIVE,
    symbol: "ETH",
    description: "native ETH on Arbitrum L2",
  },
  {
    id: "anime-native",
    chain: "animechain",
    chainLabel: "Animechain",
    address: NATIVE,
    symbol: "ANIME",
    description: "native ANIME on Animechain L3 (chain 69000)",
  },
] as const;

const DEFAULT_FROM_ID = "eth-usdc";
const DEFAULT_TO_ID = "anime-native";

function findToken(id: string): Token {
  const t = TOKENS.find((x) => x.id === id);
  if (!t) throw new Error(`Unknown token id: ${id}`);
  return t;
}

function buildSwapUrl(from: Token, to: Token): string {
  const params = new URLSearchParams({
    fromChain: from.chain,
    fromAddress: from.address,
    toChain: to.chain,
    toAddress: to.address,
  });
  return `${OPENSEA_SWAP}?${params.toString()}`;
}

export default function BridgeWidget() {
  const [fromId, setFromId] = useState<string>(DEFAULT_FROM_ID);
  const [toId, setToId] = useState<string>(DEFAULT_TO_ID);
  const [account, setAccount] = useState<string | null>(null);

  useEffect(() => {
    const eth = window.ethereum;
    if (!eth) return;
    let cancelled = false;
    eth
      .request({ method: "eth_accounts" })
      .then((res: unknown) => {
        if (cancelled) return;
        const accounts = Array.isArray(res) ? (res as string[]) : [];
        setAccount(accounts[0] ?? null);
      })
      .catch(() => {
        /* read-only check; ignore */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const from = findToken(fromId);
  const to = findToken(toId);
  const sameChain = from.chain === to.chain;
  const url = useMemo(() => buildSwapUrl(from, to), [from, to]);

  const reverse = () => {
    setFromId(toId);
    setToId(fromId);
  };

  return (
    <div className="bridge-widget">
      <div className="bridge-card">
        <div className="bridge-row">
          <label className="bridge-field">
            <span className="bridge-field__label">From</span>
            <select
              className="bridge-select"
              value={fromId}
              onChange={(e) => setFromId(e.target.value)}
            >
              {TOKENS.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.symbol} ({t.chainLabel})
                </option>
              ))}
            </select>
          </label>

          <button
            type="button"
            className="bridge-reverse"
            onClick={reverse}
            aria-label="Reverse direction"
            title="Reverse direction"
          >
            ⇅
          </button>

          <label className="bridge-field">
            <span className="bridge-field__label">To</span>
            <select
              className="bridge-select"
              value={toId}
              onChange={(e) => setToId(e.target.value)}
            >
              {TOKENS.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.symbol} ({t.chainLabel})
                </option>
              ))}
            </select>
          </label>
        </div>

        <p className="bridge-summary">
          Sending {from.description} → {to.description}.
        </p>

        {sameChain ? (
          <div role="alert" className="bridge-status bridge-status--error">
            Pick two different chains. Same-chain trades belong on a DEX, not a bridge.
          </div>
        ) : null}

        <a
          href={sameChain ? undefined : url}
          target="_blank"
          rel="noopener noreferrer"
          className={`bridge-cta${sameChain ? " bridge-cta--disabled" : ""}`}
          aria-disabled={sameChain || undefined}
          onClick={(e) => {
            if (sameChain) e.preventDefault();
          }}
        >
          Open in OpenSea Swap →
        </a>

        <details className="bridge-details">
          <summary>Show generated URL</summary>
          <code className="bridge-url">{url}</code>
        </details>
      </div>

      <div className="bridge-notes">
        <h4 className="bridge-notes__heading">What happens when you click</h4>
        <ol className="bridge-notes__list">
          <li>OpenSea Swap opens in a new tab with your selected source and destination prefilled.</li>
          <li>
            Connect your wallet on OpenSea
            {account ? (
              <>
                {" "}— note this is a separate connect from this docs session
                (<code className="bridge-account">{account.slice(0, 6)}…{account.slice(-4)}</code>).
              </>
            ) : (
              "."
            )}
          </li>
          <li>Approve the source token (if required) and sign the swap.</li>
          <li>OpenSea routes via Relay / LI.FI / Jupiter / 0x and delivers native ANIME on chain 69000.</li>
        </ol>

        <p className="bridge-notes__hint">
          Need test ANIME instead of bridging real value? See the <a href="/faucet/">Faucet</a>.
        </p>
      </div>
    </div>
  );
}
