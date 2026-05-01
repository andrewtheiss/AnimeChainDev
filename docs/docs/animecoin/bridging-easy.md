# Bridging Animecoin (ANIME) – The Easy Way

The recommended path for moving value into native ANIME on Animechain (chain `69000`) is **OpenSea Swap**. Animechain is a first-class destination there, and the swap page accepts deep-link query parameters that prefill source/destination chain + token. One click, wallet sign, the bridge runs end-to-end.

For users who prefer an embedded widget on this page, [thirdweb Bridge](#alternative-thirdweb-bridge) is preserved as an alternative — it quotes USDC → native ANIME today, but does **not** currently return a route for L1 ANIME → L3 ANIME. [Relay](#alternative-relay) is kept as a third option.

---

## ⚡ Bridge with OpenSea (recommended)

Pick a source / destination below and click — OpenSea Swap opens in a new tab with everything prefilled. The widget builds the same deep links documented later in this page, so you can also hand-craft URLs from the parameter reference if you need an unusual source token.

<div data-widget="bridge"></div>

??? tip "Direct deep links (no widget)"

    [USDC (Ethereum) → ANIME (Animechain)](https://opensea.io/swap?fromChain=ethereum&fromAddress=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&toChain=animechain&toAddress=0x0000000000000000000000000000000000000000){ target="_blank" rel="noopener" } · [OpenSea Swap (no prefill)](https://opensea.io/swap?toChain=animechain&toAddress=0x0000000000000000000000000000000000000000){ target="_blank" rel="noopener" }

The recommended link prefills:

- **Source** — USDC on Ethereum (`0xa0b8…eb48`)
- **Destination** — native ANIME on Animechain (chain slug `animechain`, address `0x0000…0000` is OpenSea's native-token sentinel)

Source is editable inside OpenSea's UI; the destination prefill survives. You can also build your own deep links — see the parameter reference below.

### Why OpenSea

- Animechain is registered in OpenSea's chain enum (`Chain.AnimeChain = "animechain"`) and is part of the API spec, so cross-chain quotes targeting chain `69000` actually return routes today (verified in their UI).
- OpenSea aggregates over Relay, Jupiter, LI.FI, and 0x. You're getting the best-of price across those routers without picking one yourself.
- The swap UI is a familiar, stable surface — no widget version drift, and OpenSea handles wallet, approvals, and progress polling.

### URL parameter reference

OpenSea's swap page reads four query params:

| Param | Purpose | Example |
|---|---|---|
| `fromChain` | Source chain slug | `ethereum`, `arbitrum`, `base`, `polygon`, `solana`, `animechain` |
| `fromAddress` | Source token contract address | ERC‑20 address, or `0x0000…0000` for the chain's native token |
| `toChain` | Destination chain slug | Same enum as `fromChain` |
| `toAddress` | Destination token contract address | ERC‑20 address, or `0x0000…0000` for native |

For native ANIME on Animechain L3 the destination is `toChain=animechain&toAddress=0x0000000000000000000000000000000000000000` — that's because ANIME is the native gas token on chain `69000`, so OpenSea uses the zero-address native sentinel rather than a token contract.

### Common prefilled links

| Direction | Link |
|---|---|
| **USDC (Ethereum) → ANIME (Animechain)** *(default)* | [open](https://opensea.io/swap?fromChain=ethereum&fromAddress=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&toChain=animechain&toAddress=0x0000000000000000000000000000000000000000) |
| **ETH (Ethereum) → ANIME (Animechain)** | [open](https://opensea.io/swap?fromChain=ethereum&fromAddress=0x0000000000000000000000000000000000000000&toChain=animechain&toAddress=0x0000000000000000000000000000000000000000) |
| **USDC (Arbitrum) → ANIME (Animechain)** | [open](https://opensea.io/swap?fromChain=arbitrum&fromAddress=0xaf88d065e77c8cc2239327c5edb3a432268e5831&toChain=animechain&toAddress=0x0000000000000000000000000000000000000000) |
| **ETH (Arbitrum) → ANIME (Animechain)** | [open](https://opensea.io/swap?fromChain=arbitrum&fromAddress=0x0000000000000000000000000000000000000000&toChain=animechain&toAddress=0x0000000000000000000000000000000000000000) |
| **ANIME (Animechain) → USDC (Ethereum)** | [open](https://opensea.io/swap?fromChain=animechain&fromAddress=0x0000000000000000000000000000000000000000&toChain=ethereum&toAddress=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48) |
| **Just preselect Animechain as destination** | [open](https://opensea.io/swap?toChain=animechain&toAddress=0x0000000000000000000000000000000000000000) |

Test with a small amount first and confirm the quote and fees inside the swap modal before signing.

??? note "Embedding constraints"

    OpenSea sets `X-Frame-Options: DENY` and a `frame-ancestors` CSP that excludes third-party origins, so the swap page cannot be embedded in an iframe. Hand users off via a link/button in a new tab — that's why this page uses buttons rather than an embedded widget for the recommended path. If you want an in-page embedded experience instead, the [thirdweb alternative](#alternative-thirdweb-bridge) below still works for USDC sources.

---

## Alternative: thirdweb Bridge (embedded widget) { #alternative-thirdweb-bridge }

If you want a swap UI rendered directly on this page rather than handing off to OpenSea, thirdweb's iframe still works for USDC-to-ANIME and ETH-to-ANIME flows. Note the route limitation below.

<iframe
  src="https://thirdweb.com/bridge/widget?inputChain=1&inputCurrency=0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48&outputChain=69000"
  height="750"
  width="100%"
  style="border: 0; border-radius: 12px; max-width: 480px; display: block; margin: 0 auto;"
  title="thirdweb Bridge — USDC L1 to Animechain L3"
  allow="clipboard-read; clipboard-write; web-share"
  loading="lazy"
></iframe>

[Open thirdweb Bridge in a new tab →](https://thirdweb.com/bridge/widget?inputChain=1&inputCurrency=0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48&outputChain=69000){ .md-button target="_blank" rel="noopener" }

??? warning "Known limitation"

    `bridge.thirdweb.com/v1/sell/quote` currently returns **400** for L1 ANIME (`0x4dc2…c277`) → L3 native ANIME — thirdweb's router does not have a route for that exact pair yet. USDC and ETH sources work. If you specifically need to move existing L1 ANIME, use **OpenSea** above or the [manual L1→L2→L3 flow](bridging.md). When the widget shows quote errors but `bridge.thirdweb.com/v1/sell/quote` returns 200 in the network tab for your pair, the route is fine and another error is at play; if it's 400, switch source token.

### Embed thirdweb Bridge in your own app

If you're building on Animechain and want the same in-app widget UX, thirdweb publishes both an iframe embed and a React component.

=== "iframe (any HTML)"

    ```html
    <iframe
      src="https://thirdweb.com/bridge/widget?inputChain=1&inputCurrency=0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48&outputChain=69000"
      height="750"
      width="100%"
      style="border: 0; border-radius: 12px;"
      title="thirdweb Bridge"
      allow="clipboard-read; clipboard-write; web-share"
    ></iframe>
    ```

    Useful query parameters: `theme=light|dark`, `inputChain`, `inputCurrency`, `inputCurrencyAmount`, `outputChain`, `outputCurrency`, `outputCurrencyAmount`, `currency` (fiat display), `persistTokenSelections`. Full list in the [iframe reference](https://portal.thirdweb.com/bridge/bridge-widget/iframe).

=== "React (thirdweb SDK v5)"

    ```tsx
    import { BridgeWidget } from "thirdweb/react";
    import { createThirdwebClient } from "thirdweb";

    const client = createThirdwebClient({
      clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID!,
    });

    export function AnimeBridgeWidget() {
      return (
        <BridgeWidget
          client={client}
          // Prefill: USDC on Ethereum L1 → native ANIME on Animechain L3.
          // Native ANIME on chain 69000 needs no token address (omit it
          // to avoid the wrong-native-sentinel bug class).
          prefill={{
            buyToken: { chainId: 69000 },
            sellToken: {
              chainId: 1,
              tokenAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", // USDC
            },
          }}
        />
      );
    }
    ```

    Refer to the [`BridgeWidget` API reference](https://portal.thirdweb.com/references/typescript/v5/BridgeWidget) for the full prop surface, including event callbacks (`onSuccess`, `onError`) and theme overrides.

You'll need a thirdweb client ID — create one free at [thirdweb.com](https://thirdweb.com/dashboard).

---

## Alternative: Relay { #alternative-relay }

Relay still works for ANIME bridging and is a fallback if OpenSea's quote looks off for an unusual pair. The original preconfigured link:

[Open Relay with Animechain preselected →](https://relay.link/bridge/ethereum?includeChainIds=6167f9a0-84dc-4296-8a26-2bb3cc56dc2c&fromChainId=69000&toCurrency=0x4dc26fc5854e7648a064a4abd590bbe71724c277){ .md-button target="_blank" rel="noopener" }

- Opens Relay with Animechain included
- Starts from Animechain mainnet (chain `69000`) by default
- Pre-fills ANIME currency on the destination

You can change source/destination in the Relay UI for L1 ↔ L3 or L2 ↔ L3.

![Relay showing AnimeChain for Animecoin transfers](/assets/images/bridge assets.webp)

---

## Notes

- Make sure your wallet is connected to the correct **source** network when starting any bridge.
- Gas and fees vary by path (L1↔L2, L2↔L3, L1↔L3). L1 typically dominates the cost; the swap UI will surface the breakdown before you sign.
- ANIME is the native gas token on Animechain. After bridging, you'll need a small amount of ANIME on chain `69000` to send transactions — every option here delivers native ANIME directly.
- Need the manual contract-level flow instead? See [Bridging Guide – The Hard Way](bridging.md).
