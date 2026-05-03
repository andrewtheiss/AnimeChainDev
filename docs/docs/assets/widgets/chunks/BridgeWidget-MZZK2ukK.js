import { r as t, j as e } from "./react-CISCX5s2.js";
const o = "0x0000000000000000000000000000000000000000", v = "https://opensea.io/swap", h = [
  {
    id: "eth-usdc",
    chain: "ethereum",
    chainLabel: "Ethereum",
    address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    symbol: "USDC",
    description: "Circle USDC on Ethereum L1"
  },
  {
    id: "eth-eth",
    chain: "ethereum",
    chainLabel: "Ethereum",
    address: o,
    symbol: "ETH",
    description: "native ETH on Ethereum L1"
  },
  {
    id: "arb-usdc",
    chain: "arbitrum",
    chainLabel: "Arbitrum",
    address: "0xaf88d065e77c8cc2239327c5edb3a432268e5831",
    symbol: "USDC",
    description: "Circle USDC on Arbitrum L2"
  },
  {
    id: "arb-eth",
    chain: "arbitrum",
    chainLabel: "Arbitrum",
    address: o,
    symbol: "ETH",
    description: "native ETH on Arbitrum L2"
  },
  {
    id: "anime-native",
    chain: "animechain",
    chainLabel: "Animechain",
    address: o,
    symbol: "ANIME",
    description: "native ANIME on Animechain L3 (chain 69000)"
  }
], N = "eth-usdc", E = "anime-native";
function g(i) {
  const a = h.find((n) => n.id === i);
  if (!a) throw new Error(`Unknown token id: ${i}`);
  return a;
}
function S(i, a) {
  const n = new URLSearchParams({
    fromChain: i.chain,
    fromAddress: i.address,
    toChain: a.chain,
    toAddress: a.address
  });
  return `${v}?${n.toString()}`;
}
function w() {
  const [i, a] = t.useState(N), [n, u] = t.useState(E), [l, x] = t.useState(null);
  t.useEffect(() => {
    const s = window.ethereum;
    if (!s) return;
    let b = !1;
    return s.request({ method: "eth_accounts" }).then((p) => {
      if (b) return;
      const j = Array.isArray(p) ? p : [];
      x(j[0] ?? null);
    }).catch(() => {
    }), () => {
      b = !0;
    };
  }, []);
  const c = g(i), d = g(n), r = c.chain === d.chain, m = t.useMemo(() => S(c, d), [c, d]), f = () => {
    a(n), u(i);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "bridge-widget", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "bridge-card", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "bridge-row", children: [
        /* @__PURE__ */ e.jsxs("label", { className: "bridge-field", children: [
          /* @__PURE__ */ e.jsx("span", { className: "bridge-field__label", children: "From" }),
          /* @__PURE__ */ e.jsx(
            "select",
            {
              className: "bridge-select",
              value: i,
              onChange: (s) => a(s.target.value),
              children: h.map((s) => /* @__PURE__ */ e.jsxs("option", { value: s.id, children: [
                s.symbol,
                " (",
                s.chainLabel,
                ")"
              ] }, s.id))
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            className: "bridge-reverse",
            onClick: f,
            "aria-label": "Reverse direction",
            title: "Reverse direction",
            children: "⇅"
          }
        ),
        /* @__PURE__ */ e.jsxs("label", { className: "bridge-field", children: [
          /* @__PURE__ */ e.jsx("span", { className: "bridge-field__label", children: "To" }),
          /* @__PURE__ */ e.jsx(
            "select",
            {
              className: "bridge-select",
              value: n,
              onChange: (s) => u(s.target.value),
              children: h.map((s) => /* @__PURE__ */ e.jsxs("option", { value: s.id, children: [
                s.symbol,
                " (",
                s.chainLabel,
                ")"
              ] }, s.id))
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("p", { className: "bridge-summary", children: [
        "Sending ",
        c.description,
        " → ",
        d.description,
        "."
      ] }),
      r ? /* @__PURE__ */ e.jsx("div", { role: "alert", className: "bridge-status bridge-status--error", children: "Pick two different chains. Same-chain trades belong on a DEX, not a bridge." }) : null,
      /* @__PURE__ */ e.jsx(
        "a",
        {
          href: r ? void 0 : m,
          target: "_blank",
          rel: "noopener noreferrer",
          className: `bridge-cta${r ? " bridge-cta--disabled" : ""}`,
          "aria-disabled": r || void 0,
          onClick: (s) => {
            r && s.preventDefault();
          },
          children: "Open in OpenSea Swap →"
        }
      ),
      /* @__PURE__ */ e.jsxs("details", { className: "bridge-details", children: [
        /* @__PURE__ */ e.jsx("summary", { children: "Show generated URL" }),
        /* @__PURE__ */ e.jsx("code", { className: "bridge-url", children: m })
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "bridge-notes", children: [
      /* @__PURE__ */ e.jsx("h4", { className: "bridge-notes__heading", children: "What happens when you click" }),
      /* @__PURE__ */ e.jsxs("ol", { className: "bridge-notes__list", children: [
        /* @__PURE__ */ e.jsx("li", { children: "OpenSea Swap opens in a new tab with your selected source and destination prefilled." }),
        /* @__PURE__ */ e.jsxs("li", { children: [
          "Connect your wallet on OpenSea",
          l ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            " ",
            "— note this is a separate connect from this docs session (",
            /* @__PURE__ */ e.jsxs("code", { className: "bridge-account", children: [
              l.slice(0, 6),
              "…",
              l.slice(-4)
            ] }),
            ")."
          ] }) : "."
        ] }),
        /* @__PURE__ */ e.jsx("li", { children: "Approve the source token (if required) and sign the swap." }),
        /* @__PURE__ */ e.jsx("li", { children: "OpenSea routes via Relay / LI.FI / Jupiter / 0x and delivers native ANIME on chain 69000." })
      ] }),
      /* @__PURE__ */ e.jsxs("p", { className: "bridge-notes__hint", children: [
        "Need test ANIME instead of bridging real value? See the ",
        /* @__PURE__ */ e.jsx("a", { href: "/faucet/", children: "Faucet" }),
        "."
      ] })
    ] })
  ] });
}
export {
  w as default
};
