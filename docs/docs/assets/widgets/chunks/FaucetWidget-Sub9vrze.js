import { r as t, j as e } from "./react-CISCX5s2.js";
import { f as ee, B as Me, C as ke, k as Ae, p as xe, S as Ze, Z as Ce, g as he, c as Je, z as Ke, t as Qe } from "./ethers-C-jNUbxr.js";
const Se = [
  "Ill use this ANIME coin to build something on ANIME chain.  Also, Earth domain is best.",
  "Gonna build more with this ANIME coin and not sell it like a degen.",
  "Gonna use this ANIME as my last hope for creating something worthwhile.  God help me.",
  "I promise to use this ANIME coin for building and not just hodling forever.",
  "Building on ANIME chain with determination and hope for the future.",
  "This ANIME coin will help me create something meaningful and lasting.",
  "Using this ANIME coin to contribute to the ecosystem and community growth.",
  "Final ANIME coin withdrawal - time to build something truly remarkable."
], Ie = [{ name: "Withdrawal", inputs: [{ name: "recipient", type: "address", indexed: !0 }, { name: "amount", type: "uint256", indexed: !1 }, { name: "withdrawal_index", type: "uint256", indexed: !1 }, { name: "chosen_block_hash", type: "bytes32", indexed: !1 }, { name: "pow_nonce", type: "uint256", indexed: !1 }, { name: "block_time", type: "uint256", indexed: !1 }], anonymous: !1, type: "event" }, { name: "Deposit", inputs: [{ name: "depositor", type: "address", indexed: !0 }, { name: "amount", type: "uint256", indexed: !1 }], anonymous: !1, type: "event" }, { name: "OwnershipTransferred", inputs: [{ name: "previous_owner", type: "address", indexed: !0 }, { name: "new_owner", type: "address", indexed: !0 }], anonymous: !1, type: "event" }, { stateMutability: "payable", type: "function", name: "deposit", inputs: [], outputs: [] }, { stateMutability: "nonpayable", type: "function", name: "withdrawFor", inputs: [{ name: "_recipient", type: "address" }, { name: "_chosen_block_hash", type: "bytes32" }, { name: "_withdrawal_index", type: "uint256" }, { name: "_ip_address", type: "bytes32" }, { name: "_pow_nonce", type: "uint256" }, { name: "_message", type: "string" }, { name: "_v", type: "uint256" }, { name: "_r", type: "bytes32" }, { name: "_s", type: "bytes32" }], outputs: [] }, { stateMutability: "nonpayable", type: "function", name: "withdraw", inputs: [{ name: "_chosen_block_hash", type: "bytes32" }, { name: "_withdrawal_index", type: "uint256" }, { name: "_ip_address", type: "bytes32" }, { name: "_pow_nonce", type: "uint256" }, { name: "_message", type: "string" }], outputs: [] }, { stateMutability: "view", type: "function", name: "get_difficulty_target", inputs: [{ name: "_withdrawal_index", type: "uint256" }], outputs: [{ name: "", type: "uint256" }] }, { stateMutability: "view", type: "function", name: "get_withdrawal_amount", inputs: [{ name: "_withdrawal_index", type: "uint256" }], outputs: [{ name: "", type: "uint256" }] }, { stateMutability: "view", type: "function", name: "get_expected_message", inputs: [{ name: "_withdrawal_index", type: "uint256" }], outputs: [{ name: "", type: "string" }] }, { stateMutability: "nonpayable", type: "function", name: "update_withdrawal_amount", inputs: [{ name: "_index", type: "uint256" }, { name: "_amount", type: "uint256" }], outputs: [] }, { stateMutability: "nonpayable", type: "function", name: "update_pow_difficulty", inputs: [{ name: "_index", type: "uint256" }, { name: "_difficulty", type: "uint256" }], outputs: [] }, { stateMutability: "nonpayable", type: "function", name: "update_cooldown_period", inputs: [{ name: "_period", type: "uint256" }], outputs: [] }, { stateMutability: "nonpayable", type: "function", name: "update_base_amount_multiplier", inputs: [{ name: "_multiplier", type: "uint256" }], outputs: [] }, { stateMutability: "nonpayable", type: "function", name: "update_base_difficulty_multiplier", inputs: [{ name: "_multiplier", type: "uint256" }], outputs: [] }, { stateMutability: "nonpayable", type: "function", name: "withdraw_balance", inputs: [{ name: "_amount", type: "uint256" }], outputs: [] }, { stateMutability: "nonpayable", type: "function", name: "transfer_ownership", inputs: [{ name: "_new_owner", type: "address" }], outputs: [] }, { stateMutability: "view", type: "function", name: "owner", inputs: [], outputs: [{ name: "", type: "address" }] }, { stateMutability: "view", type: "function", name: "withdrawal_count", inputs: [{ name: "arg0", type: "address" }], outputs: [{ name: "", type: "uint256" }] }, { stateMutability: "view", type: "function", name: "first_request_time", inputs: [{ name: "arg0", type: "address" }], outputs: [{ name: "", type: "uint256" }] }, { stateMutability: "view", type: "function", name: "ip_address_hash", inputs: [{ name: "arg0", type: "address" }], outputs: [{ name: "", type: "bytes32" }] }, { stateMutability: "view", type: "function", name: "last_successful_block", inputs: [{ name: "arg0", type: "address" }], outputs: [{ name: "", type: "uint256" }] }, { stateMutability: "view", type: "function", name: "last_global_withdrawal", inputs: [], outputs: [{ name: "", type: "uint256" }] }, { stateMutability: "view", type: "function", name: "nonce", inputs: [{ name: "arg0", type: "address" }], outputs: [{ name: "", type: "uint256" }] }, { stateMutability: "view", type: "function", name: "cooldown_period", inputs: [], outputs: [{ name: "", type: "uint256" }] }, { stateMutability: "view", type: "function", name: "pow_base_difficulty", inputs: [], outputs: [{ name: "", type: "uint256" }] }, { stateMutability: "view", type: "function", name: "base_amount_multiplier", inputs: [], outputs: [{ name: "", type: "uint256" }] }, { stateMutability: "view", type: "function", name: "base_difficulty_multiplier", inputs: [], outputs: [{ name: "", type: "uint256" }] }, { stateMutability: "view", type: "function", name: "withdrawal_amounts", inputs: [{ name: "arg0", type: "uint256" }], outputs: [{ name: "", type: "uint256" }] }, { stateMutability: "view", type: "function", name: "pow_difficulty_targets", inputs: [{ name: "arg0", type: "uint256" }], outputs: [{ name: "", type: "uint256" }] }, { stateMutability: "nonpayable", type: "constructor", inputs: [], outputs: [] }], Y = {
  animechain: {
    chainId: "0x10D88",
    // 69000 in hex
    chainName: "Animechain Mainnet",
    nativeCurrency: {
      name: "Anime",
      symbol: "ANIME",
      decimals: 18
    },
    rpcUrls: ["https://public-rpc.anime.xyz"],
    blockExplorerUrls: ["https://explorer.anime.xyz/"],
    iconUrls: [window.location.origin + "/assets/images/animecoin.webp"]
  },
  animechain_testnet: {
    chainId: "0x1AF4",
    // 6900 in hex
    chainName: "AnimeChain Testnet",
    nativeCurrency: {
      name: "Test Anime",
      symbol: "ANIME",
      decimals: 18
    },
    rpcUrls: ["https://testnet-rpc.anime.xyz/"],
    blockExplorerUrls: ["https://explorer-animechain-testnet-i8yja6a1a0.t.conduit.xyz/"],
    iconUrls: [window.location.origin + "/assets/images/animecoin.webp"],
    parentChainId: 421614,
    nativeTokenAddress: "0x38208F36E9d6CE86ccE0977fA5690140Ec78A5d4",
    coreContracts: {
      rollup: "0xb31ae2dA8AF1227D3533DBE11a5E9B0bCfc738B4",
      inbox: "0x0590A4DEDCE7145e81BF59DB39029a27A6783141",
      outbox: "0xb1C0EbEADFf5f277727ABf8aCdC1031AA119A26d",
      bridge: "0x554105BbC8eB136933B210Eb60b5d7C9c592d6D8",
      sequencerInbox: "0x742FFc80b224C815E8faeE34DC0d612c722d5Bd0"
    },
    tokenBridge: {
      l2: {
        router: "0xD9d44147aBefa4a965dfA02792A49A8672e1464F",
        standardGateway: "0xfD99AFa35cFb778cB6d16552CE62874E2838a293",
        customGateway: "0x7aE1625b7284dFcb6CA1431a547c4eA80b0A0490",
        multicall: "0xce1CAd780c529e66e3aa6D952a1ED9A6447791c1"
      },
      l3: {
        router: "0xbEE16d3e349DD7A5aEC190b1C03aA8f65A915360",
        standardGateway: "0x14B739e95cABeEC8C9f550530C5F701CBaAe9D38",
        customGateway: "0xEC44a2AcE1a58f5520Ca716873dF6E3f39c498b0",
        multicall: "0x2217BF4E11F8bd17A10e29F14E7d0E99A287E88F"
      }
    }
  },
  testnet: {
    chainId: "0x1AF4",
    chainName: "AnimeChain Testnet",
    nativeCurrency: {
      name: "Test Anime",
      symbol: "ANIME",
      decimals: 18
    },
    rpcUrls: ["https://testnet-rpc.anime.xyz/"],
    blockExplorerUrls: ["https://explorer-animechain-testnet-i8yja6a1a0.t.conduit.xyz/"],
    iconUrls: [window.location.origin + "/assets/images/animecoin.webp"]
  }
}, Xe = ({
  onUpdateWithdrawalAmount: u,
  onUpdatePowDifficulty: y,
  onUpdateCooldownPeriod: E,
  onUpdateBaseAmountMultiplier: c,
  onUpdateBaseDifficultyMultiplier: x,
  onDirectWithdrawal: d,
  onDebugBlockInfo: A,
  onWithdrawAllFunds: i,
  loading: p,
  contract: b,
  isDevFaucet: M,
  powComplete: k
}) => {
  const [o, m] = t.useState(1), [r, f] = t.useState(""), [F, L] = t.useState(1), [P, R] = t.useState(""), [W, G] = t.useState(""), [C, Z] = t.useState(""), [T, J] = t.useState(""), [te, pe] = t.useState(Array(8).fill("")), [K, $] = t.useState(Array(8).fill("")), [z, ae] = t.useState(Array(8).fill("")), [we, ne] = t.useState(""), I = async () => {
    if (!(!b || !M))
      try {
        const a = [], _ = [], O = [];
        for (let v = 1; v <= 8; v++)
          a.push(b.get_withdrawal_amount(v)), _.push(b.withdrawal_amounts(v - 1)), O.push(b.get_difficulty_target(v));
        const [U, D, X, ve] = await Promise.all([
          Promise.all(a),
          Promise.all(_),
          Promise.all(O),
          b.base_amount_multiplier()
        ]), oe = U.map((v) => {
          try {
            return ee(v);
          } catch {
            return "";
          }
        }), Ne = D.map((v) => {
          try {
            return ee(v);
          } catch {
            return "";
          }
        }), re = X.map((v) => v?.toString?.() ?? "");
        pe(oe), ae(Ne), $(re), ne(ve?.toString?.() ?? "");
      } catch {
      }
  };
  t.useEffect(() => {
    I();
  }, [p]);
  const se = (a) => {
    a.preventDefault(), r && o >= 1 && o <= 8 && (u(o, r), f(""));
  }, Q = (a) => {
    a.preventDefault(), P && F >= 1 && F <= 8 && (y(F, parseInt(P)), R(""));
  }, ge = (a) => {
    a.preventDefault(), W !== "" && (E(parseInt(W)), G(""));
  }, be = (a) => {
    if (a.preventDefault(), C !== "") {
      const _ = Math.round(parseFloat(C) * 1e3);
      c(_), Z("");
    }
  }, ie = (a) => {
    if (a.preventDefault(), T !== "") {
      const _ = Math.round(parseFloat(T) * 1e3);
      x(_), J("");
    }
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "admin-panel-content", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "admin-section", children: [
      /* @__PURE__ */ e.jsx("h4", { children: "💰 Update Withdrawal Amount" }),
      /* @__PURE__ */ e.jsx("form", { onSubmit: se, className: "admin-form", children: /* @__PURE__ */ e.jsxs("div", { className: "form-row", children: [
        /* @__PURE__ */ e.jsx(
          "select",
          {
            value: o,
            onChange: (a) => m(parseInt(a.target.value)),
            className: "admin-select",
            children: [1, 2, 3, 4, 5, 6, 7, 8].map((a) => {
              const _ = te[a - 1], O = z[a - 1], U = we ? `${(Number(we) / 1e3).toFixed(2)}x` : "", D = [];
              _ && D.push(`current ${Number(_).toLocaleString(void 0, { maximumFractionDigits: 6 })}`), O && D.push(`base ${Number(O).toLocaleString(void 0, { maximumFractionDigits: 6 })}`), U && D.push(U);
              const X = D.length ? `(${D.join(", ")})` : "";
              return /* @__PURE__ */ e.jsx("option", { value: a, children: `Index ${a} ${X}` }, a);
            })
          }
        ),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "number",
            value: r,
            onChange: (a) => f(a.target.value),
            placeholder: "New amount (tokens)",
            className: "admin-input",
            min: "0",
            step: "0.1"
          }
        ),
        /* @__PURE__ */ e.jsx("button", { type: "submit", disabled: p || !r, className: "admin-button", children: "Update Amount" })
      ] }) })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "admin-section", children: [
      /* @__PURE__ */ e.jsx("h4", { children: "⛏️ Update PoW Difficulty" }),
      /* @__PURE__ */ e.jsx("form", { onSubmit: Q, className: "admin-form", children: /* @__PURE__ */ e.jsxs("div", { className: "form-row", children: [
        /* @__PURE__ */ e.jsx(
          "select",
          {
            value: F,
            onChange: (a) => L(parseInt(a.target.value)),
            className: "admin-select",
            children: [1, 2, 3, 4, 5, 6, 7, 8].map((a) => /* @__PURE__ */ e.jsxs("option", { value: a, children: [
              "Index ",
              a,
              " ",
              K[a - 1] ? `(currently ${K[a - 1]})` : ""
            ] }, a))
          }
        ),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "number",
            value: P,
            onChange: (a) => R(a.target.value),
            placeholder: "New difficulty",
            className: "admin-input",
            min: "1000",
            step: "1000"
          }
        ),
        /* @__PURE__ */ e.jsx("button", { type: "submit", disabled: p || !P, className: "admin-button", children: "Update Difficulty" })
      ] }) })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "admin-section", children: [
      /* @__PURE__ */ e.jsx("h4", { children: "⏰ Update Cooldown Period" }),
      /* @__PURE__ */ e.jsx("form", { onSubmit: ge, className: "admin-form", children: /* @__PURE__ */ e.jsxs("div", { className: "form-row", children: [
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "number",
            value: W,
            onChange: (a) => G(a.target.value),
            placeholder: "Cooldown period (seconds, 0 = no cooldown)",
            className: "admin-input",
            min: "0",
            step: "1"
          }
        ),
        /* @__PURE__ */ e.jsx("button", { type: "submit", disabled: p || W === "", className: "admin-button", children: "Update Cooldown" })
      ] }) })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "admin-section multiplier-section", children: [
      /* @__PURE__ */ e.jsx("h4", { children: "🎯 Global Multipliers" }),
      /* @__PURE__ */ e.jsxs("div", { className: "multiplier-subsection", children: [
        /* @__PURE__ */ e.jsx("h5", { children: "💰 Base Amount Multiplier" }),
        /* @__PURE__ */ e.jsx("p", { className: "multiplier-info", children: "Multiplies all withdrawal amounts (1.0 = default, 2.0 = double amounts)" }),
        /* @__PURE__ */ e.jsx("form", { onSubmit: be, className: "admin-form", children: /* @__PURE__ */ e.jsxs("div", { className: "form-row", children: [
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "number",
              value: C,
              onChange: (a) => Z(a.target.value),
              placeholder: "Amount multiplier (e.g., 1.5 for 1.5x)",
              className: "admin-input",
              min: "0.1",
              step: "0.1"
            }
          ),
          /* @__PURE__ */ e.jsx("button", { type: "submit", disabled: p || !C, className: "admin-button", children: "Update Amount Multiplier" })
        ] }) })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "multiplier-subsection", children: [
        /* @__PURE__ */ e.jsx("h5", { children: "⛏️ Base Difficulty Multiplier" }),
        /* @__PURE__ */ e.jsx("p", { className: "multiplier-info", children: "Multiplies all PoW difficulties (1.0 = default, 2.0 = double difficulty)" }),
        /* @__PURE__ */ e.jsx("form", { onSubmit: ie, className: "admin-form", children: /* @__PURE__ */ e.jsxs("div", { className: "form-row", children: [
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "number",
              value: T,
              onChange: (a) => J(a.target.value),
              placeholder: "Difficulty multiplier (e.g., 0.5 for 0.5x)",
              className: "admin-input",
              min: "0.1",
              step: "0.1"
            }
          ),
          /* @__PURE__ */ e.jsx("button", { type: "submit", disabled: p || !T, className: "admin-button", children: "Update Difficulty Multiplier" })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "admin-section", children: [
      /* @__PURE__ */ e.jsx("h4", { children: "🧪 Direct Withdrawal Test" }),
      /* @__PURE__ */ e.jsx("p", { className: "multiplier-info", children: "Test direct contract interaction bypassing the server (requires completed PoW)" }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: d,
          disabled: p || !k,
          className: "admin-button direct-withdrawal-button",
          children: k ? "🚀 Test Direct Withdrawal" : "Complete Mining First"
        }
      )
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "admin-section", children: [
      /* @__PURE__ */ e.jsx("h4", { children: "🔍 Debug Block Info" }),
      /* @__PURE__ */ e.jsx("p", { className: "multiplier-info", children: "Debug blockchain block numbers and contract state" }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: A,
          disabled: p,
          className: "admin-button",
          children: "🔍 Debug Block Info (Check Console)"
        }
      )
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "admin-section", children: [
      /* @__PURE__ */ e.jsx("h4", { children: "💸 Withdraw All Funds" }),
      /* @__PURE__ */ e.jsx("p", { className: "multiplier-info", children: "Emergency withdrawal - extract all funds from the faucet contract" }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: i,
          disabled: p,
          className: "admin-button withdraw-all-button",
          children: "💸 Withdraw All Funds"
        }
      )
    ] })
  ] });
}, Ee = 450, et = (() => {
  try {
    return xe("0.01");
  } catch {
    return 10000000000000000n;
  }
})();
function tt({ contractAddress: u, network: y = "animechain_testnet", onConnectionUpdate: E }) {
  const [c, x] = t.useState(null), [d, A] = t.useState(null), [i, p] = t.useState(null), [b, M] = t.useState("0"), [k, o] = t.useState("0"), [m, r] = t.useState(0), [f, F] = t.useState(""), [L, P] = t.useState("0"), [R, W] = t.useState(0n), [G, C] = t.useState("0"), [Z, T] = t.useState(Ee), [J, te] = t.useState("0"), [pe, K] = t.useState(!0), [$, z] = t.useState(!1), [ae, we] = t.useState(!1), [ne, I] = t.useState(""), [se, Q] = t.useState(""), [ge, be] = t.useState("0"), [ie, a] = t.useState("/assets/images/animechain.webp"), [_, O] = t.useState(!1), [U, D] = t.useState(!1), [X, ve] = t.useState(!1), [oe, Ne] = t.useState(""), [re, v] = t.useState(""), [De, _e] = t.useState(!1), [V, ce] = t.useState(!1), [je, le] = t.useState(0), [N, fe] = t.useState(null), [Be, Fe] = t.useState(0), Pe = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1", B = Y[y] || Y.animechain, S = y === "animechain" || y === "animechain_testnet", We = `${B.blockExplorerUrls[0]}address/${c}`;
  t.useEffect(() => ((async () => {
    if (!window.ethereum) return K(!1);
    const s = new Me(window.ethereum);
    A(s);
    const w = new ke(u, Ie, s);
    p(w);
    try {
      const l = await s.listAccounts();
      l && l.length > 0 && x(l[0].address);
    } catch {
    }
    window.ethereum.on("accountsChanged", (l) => x(l[0] || null)), window.ethereum.on("chainChanged", () => window.location.reload()), K(!1);
  })(), () => {
    window.ethereum && (window.ethereum.removeListener("accountsChanged", () => {
    }), window.ethereum.removeListener("chainChanged", () => {
    }));
  }), [u]), t.useEffect(() => {
    E?.(!!c);
  }, [c]);
  const Ue = async () => {
    try {
      if (!window.ethereum) throw new Error("Please install MetaMask");
      z(!0), I("");
      try {
        await window.ethereum.request({ method: "wallet_switchEthereumChain", params: [{ chainId: B.chainId }] });
      } catch (s) {
        if (s.code === 4902) await window.ethereum.request({ method: "wallet_addEthereumChain", params: [B] });
        else throw s;
      }
      const n = await window.ethereum.request({ method: "eth_requestAccounts" });
      x(n[0]);
    } catch (n) {
      I(n.message);
    } finally {
      z(!1);
    }
  }, de = () => Math.max(0, Be - Math.floor(Date.now() / 1e3)), Te = () => {
    const n = de();
    return n ? `${n}s` : "";
  }, $e = () => {
    if (J === "0") return "0";
    const n = Number(J) + (Z || Ee), s = Math.floor(Date.now() / 1e3);
    return s >= n ? "0" : String(n - s);
  }, ue = async () => {
    if (!(!d || !i))
      try {
        const n = await d.getBalance(u);
        if (M(ee(n)), c) {
          const s = await d.getBalance(c);
          o(ee(s));
          const w = await i.withdrawal_count(c);
          let l = Number(w);
          try {
            const g = await i.first_request_time(c), h = await d.getBlock("latest"), q = BigInt(h?.timestamp ?? Math.floor(Date.now() / 1e3));
            g && q >= BigInt(g) + 86400n && (l = 0);
          } catch {
          }
          r(l);
          try {
            const g = l + 1, h = await i.get_withdrawal_amount(g);
            W(h), P(ee(h));
          } catch {
          }
          try {
            const g = l + 1, h = await i.get_expected_message(g);
            F(h);
          } catch {
            F(Se[l] || "");
          }
        }
        try {
          const s = await i.last_global_withdrawal();
          te(s.toString());
        } catch {
        }
        try {
          const s = await i.cooldown_period();
          T(Number(s));
        } catch {
        }
        C($e());
      } catch {
      }
  };
  t.useEffect(() => {
    i && ue();
  }, [i]), t.useEffect(() => {
    c && i && ue();
  }, [c]), t.useEffect(() => {
    if (!i) return;
    const n = () => ue();
    try {
      i.on("Deposit", n), i.on("Withdrawal", n);
    } catch {
    }
    const s = setInterval(n, 2e4);
    return () => {
      try {
        i.off("Deposit", n), i.off("Withdrawal", n);
      } catch {
      }
      clearInterval(s);
    };
  }, [i]);
  const qe = async () => {
    try {
      const n = await i.ip_address_hash(c);
      if (n && n !== Ce) return n;
    } catch {
    }
    return Ae(he(c));
  }, He = async (n) => {
    try {
      const s = await i.get_difficulty_target(n);
      return Number(s);
    } catch {
      return [8e3, 8e3, 8e3, 8e3, 16e3, 32e3, 64e3, 128e3][n - 1] || 8e3;
    }
  }, Le = (n, s, w, l) => Ae(Je([he(s), he(n), he(w), Ke(Qe(l), 32)])), Re = async () => {
    try {
      return (await d.getBlock("latest")).hash;
    } catch {
      return Ce;
    }
  }, Ge = async () => {
    if (!i || !c) return I("Contract or account not available");
    try {
      _e(!0), ce(!1), le(0), I("");
      const n = await i.withdrawal_count(c), s = Number(n) + 1, w = await He(s), l = await Re(), g = await qe();
      fe({ chosenBlockHash: l, withdrawalIndex: s, ipAddressHash: g, nonce: 0 });
      let h = 0;
      for (; ; ) {
        const q = Le(c, l, g, h);
        if (BigInt(q) % BigInt(w) === 0n) {
          fe({ chosenBlockHash: l, withdrawalIndex: s, ipAddressHash: g, nonce: h }), ce(!0), le(100);
          break;
        }
        if (h++, h % 1e3 === 0 && (le(Math.min(h / w * 100, 99)), await new Promise((j) => setTimeout(j, 1))), h > w * 10) throw new Error("Mining took too long");
      }
    } catch (n) {
      I(n.message || "Mining failed"), _e(!1), ce(!1);
    }
  }, ze = async () => {
    try {
      z(!0), I(""), Q("");
      const n = await d.getBalance(u), s = m + 1;
      let w = 0n;
      try {
        w = await i.get_withdrawal_amount(s);
      } catch {
        w = R;
      }
      if (n < w + et) throw new Error("Faucet has insufficient funds");
      if (S && (!V || !N)) throw new Error("Please complete proof-of-work mining first");
      const l = await d.getSigner(), g = i.connect(l), h = f || Se[m];
      let q = m === 0;
      if (q)
        try {
          await d.getBalance(c) >= xe("0.001") && (q = !1);
        } catch {
        }
      if (q) {
        const j = { name: "DevFaucet", version: "1", chainId: parseInt(B.chainId, 16), verifyingContract: u }, Ve = { WithdrawalRequest: [{ name: "recipient", type: "address" }, { name: "chosenBlockHash", type: "bytes32" }, { name: "withdrawalIndex", type: "uint256" }, { name: "ipAddress", type: "bytes32" }, { name: "nonce", type: "uint256" }, { name: "message", type: "string" }] }, H = { recipient: await l.getAddress(), chosenBlockHash: N.chosenBlockHash, withdrawalIndex: N.withdrawalIndex, ipAddress: N.ipAddressHash, nonce: Number(await i.nonce(c)), message: h }, ye = Ze.from(await l.signTypedData(j, Ve, H)), me = await fetch(`${Pe ? "http://localhost:5000" : "https://faucet.animechain.dev"}/request-withdrawal`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ network: y === "animechain_testnet" ? "testnet" : y, user_address: H.recipient, chosen_block_hash: H.chosenBlockHash, withdrawal_index: H.withdrawalIndex, ip_address: H.ipAddress, nonce: H.nonce, pow_nonce: N.nonce, message: H.message, v: ye.v, r: ye.r, s: ye.s }) });
        if (!me.ok) throw new Error((await me.json()).error || `Server error ${me.status}`);
        const Ye = await me.json();
        Q(`Server processed your request! Tx: ${String(Ye.tx_hash).slice(0, 10)}...`);
      } else {
        await g.withdraw.estimateGas(N.chosenBlockHash, s, N.ipAddressHash, N.nonce, h);
        const j = await g.withdraw(N.chosenBlockHash, s, N.ipAddressHash, N.nonce, h);
        await j.wait(), Q(`Withdrawal tx sent: ${j.hash.slice(0, 10)}...`);
      }
      try {
        const j = await i.last_global_withdrawal();
        te(j.toString());
      } catch {
      }
      try {
        const j = await i.cooldown_period();
        T(Number(j));
      } catch {
      }
      C(String(Z)), Fe(Math.floor(Date.now() / 1e3) + 60), await ue(), ce(!1), fe(null), le(0);
    } catch (n) {
      I(n.message || "Withdrawal failed");
    } finally {
      z(!1);
    }
  }, Oe = () => {
    const n = [];
    for (let s = 1; s <= 8; s++) {
      const w = m >= s, l = m === s - 1;
      n.push(/* @__PURE__ */ e.jsx("div", { className: `progress-step ${w ? "completed" : l ? "current" : ""}`, children: s }, s)), s < 8 && n.push(/* @__PURE__ */ e.jsx("div", { className: `progress-line ${S ? "dev" : ""}` }, `line-${s}`));
    }
    return n;
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "faucet-container dark-theme", children: [
    y === "animechain_testnet" && /* @__PURE__ */ e.jsxs("div", { className: "dev-banner", children: [
      "Testnet Mode - ",
      B.chainName
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "logo-container", children: [
      /* @__PURE__ */ e.jsx(
        "img",
        {
          src: ie,
          alt: "AnimeChain Logo",
          className: "chain-logo",
          onError: () => {
            ie === "/assets/images/animechain.webp" && a("/assets/images/animechain.png");
          }
        }
      ),
      /* @__PURE__ */ e.jsx("img", { src: "/assets/images/animecoin.webp", alt: "Animecoin Logo", className: "coin-logo" })
    ] }),
    pe ? /* @__PURE__ */ e.jsxs("div", { className: "loading-overlay", children: [
      /* @__PURE__ */ e.jsx("div", { className: "spinner" }),
      /* @__PURE__ */ e.jsx("p", { children: "Loading your faucet status…" })
    ] }) : c ? /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsxs("div", { className: "info-container", children: [
        /* @__PURE__ */ e.jsxs("p", { className: "account-info", children: [
          "Connected Account: ",
          c
        ] }),
        /* @__PURE__ */ e.jsxs("p", { className: "user-balance", children: [
          "Your Balance: ",
          k,
          " ",
          B.nativeCurrency.symbol
        ] }),
        /* @__PURE__ */ e.jsxs("p", { className: "balance-info", children: [
          "Faucet Balance: ",
          b,
          " ",
          B.nativeCurrency.symbol
        ] }),
        /* @__PURE__ */ e.jsxs("p", { className: "withdrawal-count", children: [
          "Withdrawals completed: ",
          /* @__PURE__ */ e.jsx("span", { className: "count", children: m }),
          " / 8"
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "explorer-link-container", children: /* @__PURE__ */ e.jsxs("a", { href: We, target: "_blank", rel: "noopener noreferrer", className: "explorer-button", children: [
          "View on ",
          B.chainName,
          " Explorer"
        ] }) })
      ] }),
      m < 8 && /* @__PURE__ */ e.jsxs("div", { className: "phases-container", children: [
        S && /* @__PURE__ */ e.jsxs("div", { className: "phase-line", children: [
          /* @__PURE__ */ e.jsx("span", { className: "phase-label", children: "Phase 1: Mine PoW" }),
          /* @__PURE__ */ e.jsxs("span", { className: "phase-difficulty", children: [
            "diff: ",
            N?.difficultyTarget?.toLocaleString() || "..."
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "phase-status", children: V ? /* @__PURE__ */ e.jsx("span", { className: "phase-complete", children: "✅ Ready" }) : De ? /* @__PURE__ */ e.jsxs("div", { className: "phase-mining", children: [
            /* @__PURE__ */ e.jsxs("span", { children: [
              "⛏️ ",
              je.toFixed(0),
              "%"
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "mini-progress", children: /* @__PURE__ */ e.jsx("div", { className: "mini-fill", style: { width: `${je}%` } }) })
          ] }) : /* @__PURE__ */ e.jsx("button", { onClick: Ge, disabled: $ || de() > 0, className: "phase-button", children: de() > 0 ? `Wait ${Te()}` : "⛏️ Mine" }) })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "phase-line", children: [
          /* @__PURE__ */ e.jsx("span", { className: "phase-label", children: S ? "Phase 2: Sign Message" : "Sign Message" }),
          /* @__PURE__ */ e.jsx("span", { className: "phase-tokens", children: S ? L ? `${Number(L).toLocaleString()} ANIME` : "..." : "" }),
          /* @__PURE__ */ e.jsx("button", { className: `phase-button ${S && V ? "pow-ready" : ""}`, onClick: ze, disabled: $ || ae || de() > 0 || (S ? !V : !1), children: $ ? "Processing..." : ae ? "Sending to Server..." : S ? V ? "Sign & Claim" : "PoW Required" : "Sign" })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "message-progress", children: Oe() })
      ] }),
      _ && S && /* @__PURE__ */ e.jsxs("div", { className: "admin-panel", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "admin-header", children: [
          /* @__PURE__ */ e.jsx("h3", { children: "🔧 Admin Controls" }),
          /* @__PURE__ */ e.jsxs("button", { onClick: () => D(!U), className: "admin-toggle-button", children: [
            U ? "Hide" : "Show",
            " Admin Panel"
          ] })
        ] }),
        U && /* @__PURE__ */ e.jsxs("div", { className: "admin-content", children: [
          /* @__PURE__ */ e.jsx(
            Xe,
            {
              onUpdateWithdrawalAmount: () => {
              },
              onUpdatePowDifficulty: () => {
              },
              onUpdateCooldownPeriod: () => {
              },
              onUpdateBaseAmountMultiplier: () => {
              },
              onUpdateBaseDifficultyMultiplier: () => {
              },
              onDirectWithdrawal: () => {
              },
              onDebugBlockInfo: () => {
              },
              onWithdrawAllFunds: () => {
              },
              loading: X,
              contract: i,
              isDevFaucet: S,
              powComplete: V
            }
          ),
          oe && /* @__PURE__ */ e.jsx("p", { className: "admin-error", children: oe }),
          re && /* @__PURE__ */ e.jsx("p", { className: "admin-success", children: re })
        ] })
      ] }),
      ne && /* @__PURE__ */ e.jsx("p", { className: "error", children: ne }),
      se && /* @__PURE__ */ e.jsx("p", { className: "success-message", children: se })
    ] }) : /* @__PURE__ */ e.jsx("button", { onClick: Ue, disabled: $, className: "connect-button", children: $ ? "Connecting..." : `Connect to ${B.chainName}` })
  ] });
}
function at({ contractAddress: u, network: y }) {
  const [E, c] = t.useState(!1), [x, d] = t.useState(!1), [A, i] = t.useState(""), [p, b] = t.useState(!1), [M, k] = t.useState(""), [o, m] = t.useState(""), r = async () => {
    try {
      if (b(!0), k(""), m(""), !window.ethereum)
        throw new Error("Please install MetaMask");
      const f = Y[y];
      if (f)
        try {
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: f.chainId }]
          });
        } catch (C) {
          if (C.code === 4902)
            await window.ethereum.request({
              method: "wallet_addEthereumChain",
              params: [f]
            });
          else
            throw C;
        }
      const L = await new Me(window.ethereum).getSigner(), P = Ie, R = new ke(u, P, L), W = xe(String(A)), G = await R.deposit({ value: W });
      await G.wait(), m(`Refill sent: ${G.hash.substring(0, 10)}...`), i("");
    } catch (f) {
      k(f.message || "Refill failed");
    } finally {
      b(!1);
    }
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "refill-footer", children: [
    /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", gap: 10, flexWrap: "wrap" }, children: [
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: () => c(!E),
          className: "footer-refill-button",
          children: "🔄 Refill Faucet"
        }
      ),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: () => d(!x),
          className: "footer-refill-button",
          children: x ? "Hide Faucet Details" : "Faucet Details"
        }
      )
    ] }),
    E && /* @__PURE__ */ e.jsxs("div", { className: "refill-container transparent", style: { marginTop: 8 }, children: [
      /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "number",
          value: A,
          onChange: (f) => i(f.target.value),
          placeholder: `Amount in ${Y[y]?.nativeCurrency?.symbol || "ANIME"}`,
          className: "refill-input",
          min: "0",
          step: "0.1"
        }
      ),
      /* @__PURE__ */ e.jsx("button", { onClick: r, disabled: p || !A, className: "refill-button ghost", children: p ? "Processing..." : "Send refill" })
    ] }),
    x && /* @__PURE__ */ e.jsx("div", { className: "refill-container transparent", style: { marginTop: 8 }, children: /* @__PURE__ */ e.jsxs("div", { className: "dev-faucet-info", style: { color: "#0f172a" }, children: [
      /* @__PURE__ */ e.jsx("p", { children: "⚡ DevFaucet: Proof-of-work mining required for withdrawal" }),
      /* @__PURE__ */ e.jsx("p", { children: "💎 Progressive amounts: 5, 5, 10, 15, 25, 50, 75, 100 tokens" }),
      /* @__PURE__ */ e.jsx("p", { children: "🔄 Daily reset: Up to 8 withdrawals per 24-hour period" }),
      /* @__PURE__ */ e.jsx("p", { children: "⛏️ Difficulty: ~8k+ hashes (est. 30s avg)" })
    ] }) }),
    M && /* @__PURE__ */ e.jsx("p", { className: "error", style: { marginTop: 8 }, children: M }),
    o && /* @__PURE__ */ e.jsx("p", { className: "success-message", style: { marginTop: 8 }, children: o }),
    /* @__PURE__ */ e.jsx("footer", { style: { marginTop: 24, paddingTop: 16, borderTop: "1px solid rgba(15,23,42,0.08)", color: "#334155" }, children: /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }, children: [
      /* @__PURE__ */ e.jsx("span", { children: "© AnimeChain" }),
      /* @__PURE__ */ e.jsxs("nav", { style: { display: "flex", gap: 12, flexWrap: "wrap" }, children: [
        /* @__PURE__ */ e.jsx("a", { href: "/", style: { color: "#1f2937", textDecoration: "none" }, children: "Docs" }),
        /* @__PURE__ */ e.jsx("a", { href: "/use-animechain/", style: { color: "#1f2937", textDecoration: "none" }, children: "Use AnimeChain" }),
        /* @__PURE__ */ e.jsx("a", { href: "/developers/", style: { color: "#1f2937", textDecoration: "none" }, children: "Developers" }),
        /* @__PURE__ */ e.jsx("a", { href: "/faucet/", style: { color: "#1f2937", textDecoration: "none" }, children: "Faucet" })
      ] })
    ] }) })
  ] });
}
const nt = {
  animechain: "0xa335F64c4d45da5DdF5931405E79E4Cc17644177",
  animechain_testnet: "0xC960563D5aF77EBB142F25504960723cCD3D4598"
};
function rt() {
  const [u, y] = t.useState(() => {
    const o = typeof localStorage < "u" && localStorage.getItem("selectedNetwork") || "";
    return o && ["animechain", "animechain_testnet"].includes(o) ? o : "animechain_testnet";
  }), [E, c] = t.useState(!1), [x, d] = t.useState(null), A = nt[u], i = async (o) => {
    try {
      if (y(o), localStorage.setItem("selectedNetwork", o), window.ethereum && E) {
        const m = Y[o];
        if (m)
          try {
            await window.ethereum.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: m.chainId }]
            });
          } catch (r) {
            if (r && r.code === 4902)
              await window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [m]
              });
            else {
              window.location.reload();
              return;
            }
          }
      }
      window.location.reload();
    } catch {
      window.location.reload();
    }
  }, p = (o) => c(o), b = () => {
    switch (u) {
      case "animechain":
        return "Animechain Mainnet";
      case "animechain_testnet":
        return "AnimeChain Testnet";
      default:
        return "Animechain";
    }
  }, M = () => {
    switch (u) {
      case "animechain":
        return "ANIME";
      case "animechain_testnet":
        return "ANIME";
      default:
        return "ANIME";
    }
  }, k = async () => {
    if (d(null), !window.ethereum) {
      d({ kind: "error", message: "No wallet detected. Please install MetaMask." });
      return;
    }
    const o = Y[u];
    if (!o) {
      d({ kind: "error", message: `Unknown network: ${u}` });
      return;
    }
    const m = {
      chainId: o.chainId,
      chainName: o.chainName,
      nativeCurrency: o.nativeCurrency,
      rpcUrls: o.rpcUrls,
      blockExplorerUrls: o.blockExplorerUrls
    };
    try {
      await window.ethereum.request({ method: "wallet_addEthereumChain", params: [m] });
    } catch (r) {
      if (r && r.code === 4001) {
        d({ kind: "info", message: "Network update cancelled." });
        return;
      }
      console.error("wallet_addEthereumChain failed", r), d({ kind: "error", message: `Could not add network: ${r?.message || "unknown error"}` });
      return;
    }
    try {
      await window.ethereum.request({ method: "wallet_switchEthereumChain", params: [{ chainId: o.chainId }] });
    } catch (r) {
      if (r && r.code === 4001) {
        d({ kind: "info", message: `${o.chainName} is added. Switch was cancelled.` });
        return;
      }
      console.error("wallet_switchEthereumChain failed", r), d({ kind: "error", message: `Could not switch network: ${r?.message || "unknown error"}` });
      return;
    }
    try {
      const r = await window.ethereum.request({ method: "eth_chainId" }), f = o.chainId.toLowerCase();
      if (typeof r == "string" && r.toLowerCase() !== f) {
        d({
          kind: "error",
          message: `Wallet is on ${r}, expected ${o.chainId}. Remove the network in MetaMask and click "Add to MetaMask" again.`
        });
        return;
      }
    } catch {
    }
    d({ kind: "success", message: `Connected to ${o.chainName}.` });
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "faucet-app faucet-widget", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "network-selector", children: [
      /* @__PURE__ */ e.jsx("label", { htmlFor: "network-select", children: "Select Network:" }),
      /* @__PURE__ */ e.jsxs(
        "select",
        {
          id: "network-select",
          value: u,
          onChange: (o) => i(o.target.value),
          className: "network-dropdown",
          children: [
            /* @__PURE__ */ e.jsx("option", { value: "animechain", children: "🎬 Animechain Mainnet" }),
            /* @__PURE__ */ e.jsx("option", { value: "animechain_testnet", children: "🧪 AnimeChain Testnet (Proof of Work)" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e.jsxs("h2", { className: "page-title", children: [
      b(),
      " Faucet"
    ] }),
    /* @__PURE__ */ e.jsxs("p", { className: "page-subtitle", children: [
      "Request small amounts of ",
      M(),
      " for testing"
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "pow-note", children: "This is a PoW Faucet which refreshes every 24 hours. You have 8 withdrawals every 24 hours. The first transaction is gasless and so a proxy server at faucet.animechain.dev will take your PoW signature to trigger a faucet deposit on your behalf." }),
    /* @__PURE__ */ e.jsxs("div", { className: "pre-faucet-actions", children: [
      /* @__PURE__ */ e.jsx("span", { className: "pre-faucet-text", children: "First, make sure you:" }),
      /* @__PURE__ */ e.jsx("button", { onClick: k, className: "footer-refill-button", children: "🦊 Add to MetaMask" })
    ] }),
    x && /* @__PURE__ */ e.jsx("div", { role: "status", "aria-live": "polite", className: `add-status add-status--${x.kind}`, children: x.message }),
    /* @__PURE__ */ e.jsx(
      tt,
      {
        contractAddress: A,
        network: u,
        onConnectionUpdate: p
      }
    ),
    E ? /* @__PURE__ */ e.jsx(at, { contractAddress: A, network: u }) : /* @__PURE__ */ e.jsxs("p", { className: "read-the-docs", children: [
      "Connect your wallet to request ",
      M(),
      " tokens"
    ] })
  ] });
}
export {
  rt as default
};
