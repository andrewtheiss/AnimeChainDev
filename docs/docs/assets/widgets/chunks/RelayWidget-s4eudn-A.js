import { r as s, j as e } from "./react-CISCX5s2.js";
import { m as a, a as o, b as t, o as c, p as r, d as x, W as y, c as b, Q as j, e as v, R as w, f as A, i as E, h as n, u as I, S as T } from "./wallet-stack-C4tIBImc.js";
const d = x({
  id: 69e3,
  name: "AnimeChain",
  nativeCurrency: { name: "Anime", symbol: "ANIME", decimals: 18 },
  rpcUrls: { default: { http: ["https://public-rpc.anime.xyz"] } },
  blockExplorers: {
    default: { name: "AnimeChain Explorer", url: "https://explorer.anime.xyz" }
  }
}), N = b({
  chains: [a, o, t, c, r, d],
  transports: {
    [a.id]: n(),
    [o.id]: n(),
    [t.id]: n(),
    [c.id]: n(),
    [r.id]: n(),
    [d.id]: n()
  },
  connectors: [E()]
}), R = new v(), S = [a, o, t, c, r, d].map(
  A
), k = "0x0000000000000000000000000000000000000000", U = {
  chainId: 69e3,
  address: k,
  name: "Animecoin",
  symbol: "ANIME",
  decimals: 18,
  logoURI: typeof window < "u" ? `${window.location.origin}/assets/images/animecoin.webp` : "/assets/images/animecoin.webp",
  verified: !0
}, W = {
  chainId: 1,
  address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
  name: "USD Coin",
  symbol: "USDC",
  decimals: 6,
  logoURI: "https://assets.coingecko.com/coins/images/6319/large/usdc.png",
  verified: !0
};
function M() {
  const [i, p] = s.useState(W), [u, h] = s.useState(U), { connectors: m, connect: C } = I(), f = () => {
    const l = m.find((g) => g.id === "injected") ?? m[0];
    l && C({ connector: l });
  };
  return /* @__PURE__ */ e.jsx(
    T,
    {
      fromToken: i,
      setFromToken: p,
      toToken: u,
      setToToken: h,
      supportedWalletVMs: ["evm"],
      onConnectWallet: f
    }
  );
}
function Q() {
  const i = s.useMemo(
    () => ({ chains: S, appName: "AnimeChain Bridge" }),
    []
  );
  return /* @__PURE__ */ e.jsx("div", { className: "relay-widget", children: /* @__PURE__ */ e.jsx("div", { className: "relay-card", children: /* @__PURE__ */ e.jsx(y, { config: N, children: /* @__PURE__ */ e.jsx(j, { client: R, children: /* @__PURE__ */ e.jsx(w, { options: i, children: /* @__PURE__ */ e.jsx(M, {}) }) }) }) }) });
}
export {
  Q as default
};
