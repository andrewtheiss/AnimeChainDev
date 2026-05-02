import { useMemo, useState } from "react";
import { WagmiProvider, createConfig, http, useConnect } from "wagmi";
import { mainnet, arbitrum, base, optimism, polygon } from "wagmi/chains";
import { injected } from "wagmi/connectors";
import { defineChain } from "viem";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RelayKitProvider, SwapWidget } from "@reservoir0x/relay-kit-ui";
import { convertViemChainToRelayChain } from "@reservoir0x/relay-sdk";
import type { Token } from "@reservoir0x/relay-kit-ui";
import "@reservoir0x/relay-kit-ui/styles.css";

const animechain = defineChain({
  id: 69000,
  name: "AnimeChain",
  nativeCurrency: { name: "Anime", symbol: "ANIME", decimals: 18 },
  rpcUrls: { default: { http: ["https://public-rpc.anime.xyz"] } },
  blockExplorers: {
    default: { name: "AnimeChain Explorer", url: "https://explorer.anime.xyz" },
  },
});

const wagmiConfig = createConfig({
  chains: [mainnet, arbitrum, base, optimism, polygon, animechain],
  transports: {
    [mainnet.id]: http(),
    [arbitrum.id]: http(),
    [base.id]: http(),
    [optimism.id]: http(),
    [polygon.id]: http(),
    [animechain.id]: http(),
  },
  connectors: [injected()],
});

const queryClient = new QueryClient();

const relayChains = [mainnet, arbitrum, base, optimism, polygon, animechain].map(
  convertViemChainToRelayChain,
);

const NATIVE = "0x0000000000000000000000000000000000000000";

const ANIME_L3: Token = {
  chainId: 69000,
  address: NATIVE,
  name: "Animecoin",
  symbol: "ANIME",
  decimals: 18,
  logoURI:
    typeof window !== "undefined"
      ? `${window.location.origin}/assets/images/animecoin.webp`
      : "/assets/images/animecoin.webp",
  verified: true,
};

const USDC_ETH: Token = {
  chainId: 1,
  address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
  name: "USD Coin",
  symbol: "USDC",
  decimals: 6,
  logoURI:
    "https://assets.coingecko.com/coins/images/6319/large/usdc.png",
  verified: true,
};

function Inner() {
  const [fromToken, setFromToken] = useState<Token | undefined>(USDC_ETH);
  const [toToken, setToToken] = useState<Token | undefined>(ANIME_L3);
  const { connectors, connect } = useConnect();

  const handleConnect = () => {
    const injectedConnector =
      connectors.find((c) => c.id === "injected") ?? connectors[0];
    if (injectedConnector) connect({ connector: injectedConnector });
  };

  return (
    <SwapWidget
      fromToken={fromToken}
      setFromToken={setFromToken}
      toToken={toToken}
      setToToken={setToToken}
      supportedWalletVMs={["evm"]}
      onConnectWallet={handleConnect}
    />
  );
}

export default function RelayWidget() {
  const providerOptions = useMemo(
    () => ({ chains: relayChains, appName: "AnimeChain Bridge" }),
    [],
  );

  return (
    <div className="relay-widget">
      <div className="relay-card">
        <WagmiProvider config={wagmiConfig}>
          <QueryClientProvider client={queryClient}>
            <RelayKitProvider options={providerOptions}>
              <Inner />
            </RelayKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
      </div>
    </div>
  );
}
