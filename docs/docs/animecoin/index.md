# <img src="/assets/images/animecoin.webp" alt="Animecoin" style="height: 28px; vertical-align: middle; margin-right: 8px;" /> Animecoin (ANIME)

Native token powering the AnimeChain ecosystem. Animecoin is the same token and chain that powers Anime.com, and it’s the same Animecoin you can buy via Anime.xyz. It is an ERC‑20 token natively issued on Ethereum L1 and is the native token of AnimeChain (L3). 

**Contract (L1 ERC‑20)**: `0x4dc26fc5854e7648a064a4abd590bbe71724c277`

| | Mainnet | Testnet |
|--|---------|---------|
| **Symbol** | ANIME | ANIME |
| **Supply** | 10B (fixed) | Unlimited |
| **Use** | Gas token on L3 | Testing only |
| **Bridging** | L1 ⇄ L2 ⇄ L3 | N/A |


<div class="linked-image-grid">
  <a class="linked-image-card" href="https://anime.com" target="_blank" rel="noopener" aria-label="Visit Anime.com">
    <div class="linked-image-title">Anime.com</div>
    <img class="linked-image-img" src="/assets/images/animecom.png" alt="Screenshot of Anime.com" />
  </a>
  <a class="linked-image-card" href="https://anime.xyz" target="_blank" rel="noopener" aria-label="Visit Anime.xyz (How to Buy)">
    <div class="linked-image-title">Anime.xyz — How to Buy</div>
    <img class="linked-image-img" src="/assets/images/howtobuy.png" alt="Screenshot of Anime.xyz How to Buy" />
  </a>
  
</div>

## <img src="/assets/images/animecoin.webp" alt="Animecoin" style="height: 20px; vertical-align: middle; margin-right: 6px;" /> Overview

To get Animecoin onto AnimeChain, you need to bridge tokens from Ethereum to Arbitrum to AnimeChain.
**L1 (Ethereum)**: ERC-20 ANIME → **L2 (Arbitrum)**: Wrapped ANIME → **L3 (AnimeChain)**: Native gas token

<div style="display: flex; align-items: center; gap: 12px; margin: 6px 0 12px;">
  <span>
    <img src="/assets/images/eth.webp" alt="Ethereum" style="height: 18px; vertical-align: middle;" />
    <img src="/assets/images/animecoin.webp" alt="ANIME" style="height: 18px; vertical-align: middle; margin-left: 4px;" />
  </span>
  <span style="opacity: 0.7;">→</span>
  <span>
    <img src="/assets/images/arbitrum.webp" alt="Arbitrum" style="height: 18px; vertical-align: middle;" />
    <img src="/assets/images/animecoin.webp" alt="ANIME" style="height: 18px; vertical-align: middle; margin-left: 4px;" />
  </span>
  <span style="opacity: 0.7;">→</span>
  <span>
    <img src="/assets/images/animechain.webp" alt="AnimeChain" style="height: 18px; vertical-align: middle;" />
    <img src="/assets/images/animecoin.webp" alt="ANIME" style="height: 18px; vertical-align: middle; margin-left: 4px;" />
  </span>
</div>

## 🔄 Bridging Times

| Route | Time | Fees | Tool |
|-------|------|------|------|
| L1 → L2 | ~10min | L1 gas | Arbitrum Bridge |
| L2 → L3 | ~1min | minimal | Orbit Bridge |
| L3 → L2 | 7 days | minimal | Withdrawal |
| L2 → L1 | 7 days | L1 gas | Withdrawal |

Please see the bridging section for details on how to bridge between chains.



## 🧩 Chain & Contract Details

| | Mainnet | Testnet |
|--|---------|---------|
| **Chain Name** | AnimeChain | `conduit-orbit-deployer` |
| **Chain ID** | `69000` | `6900` |
| **Parent Chain ID** | `42161` | `421614` |
| **Parent Chain** | Arbitrum One | TBA |
| **RPC URL** | `https://rpc-animechain-39xf6m45e3.t.conduit.xyz/` | TBA |
| **Block Explorer** | `https://explorer-animechain-39xf6m45e3.t.conduit.xyz/` | TBA |
| **L3 Base Token on Parent (Arbitrum)** | `0x37a645648dF29205C6261289983FB04ECD70b4B3` | TBA |
| **Native Token (L3)** | `0x4dc26fc5854e7648a064a4abd590bbe71724c277` | `0x38208F36E9d6CE86ccE0977fA5690140Ec78A5d4` |
| **minL2BaseFee** | `5000000000` | `10000000` |
| **Network Fee Receiver** | TBA | `0x252431e84d5e22435a0c833c2220770c52f59633` |
| **Infrastructure Fee Collector** | TBA | `0x252431e84d5e22435a0c833c2220770c52f59633` |
| **Batch Poster** | TBA | `0x4483365B7136E49AE64513Cf037501c9A0054BB3` |
| **Staker** | TBA | `0x1aB419Fb938599ff1CB82c8327d2408B78C681Bb` |
| **Chain Owner** | TBA | `0x844B47A63192B6B0dd887B6Cd5cbAe51316042d4` |
| **Rollup** | TBA | `0xb31ae2dA8AF1227D3533DBE11a5E9B0bCfc738B4` |
| **Inbox** | TBA | `0x0590A4DEDCE7145e81BF59DB39029a27A6783141` |
| **Outbox** | TBA | `0xb1C0EbEADFf5f277727ABf8aCdC1031AA119A26d` |
| **Admin Proxy** | TBA | `0x0A5a84165fa6CdEF019CDA24b3d79e0f7E435602` |
| **Sequencer Inbox** | TBA | `0x742FFc80b224C815E8faeE34DC0d612c722d5Bd0` |
| **Bridge** | TBA | `0x554105BbC8eB136933B210Eb60b5d7C9c592d6D8` |
| **Utils** | TBA | `0x2E0848589d85Bb55a3F3e0f5cE5bFAcd24f3E197` |
| **Validator Wallet Creator** | TBA | `0x03568A3aAAC150D0D22230729126B92Ee7988D44` |
| **L3 Upgrade Executor** | TBA | `0xb3c44d34c55087a482307eBa753b3cAd31622537` |
| **LayerZero EndpointV2** | `0x6F475642a6e85809B1c36Fa62763669b1b48DD5B` | TBA |
| **LayerZero sendUln302** | `0xC39161c743D0307EB9BCc9FEF03eeb9Dc4802de7` | TBA |
| **LayerZero receiveUln302** | `0xe1844c5D63a9543023008D332Bd3d2e6f1FE1043` | TBA |
| **LayerZero Executor** | `0x4208D6E27538189bB48E603D6123A94b8Abe0A0b` | TBA |
| **LayerZero Endpoint ID** | `30372` | TBA |
| **App Bridge from Arbitrum** | `0xA203252940839c8482dD4b938b4178f842E343D7` | TBA |
| **Token Bridge (L2) Router** | TBA | `0xD9d44147aBefa4a965dfA02792A49A8672e1464F` |
| **Token Bridge (L2) Standard Gateway** | TBA | `0xfD99AFa35cFb778cB6d16552CE62874E2838a293` |
| **Token Bridge (L2) Custom Gateway** | TBA | `0x7aE1625b7284dFcb6CA1431a547c4eA80b0A0490` |
| **Token Bridge (L2) Multicall** | TBA | `0xce1CAd780c529e66e3aa6D952a1ED9A6447791c1` |
| **Token Bridge (L2) Proxy Admin** | TBA | `0x0000000000000000000000000000000000000000` |
| **Token Bridge (L2) WETH** | TBA | `0x0000000000000000000000000000000000000000` |
| **Token Bridge (L2) WETH Gateway** | TBA | `0x0000000000000000000000000000000000000000` |
| **Token Bridge (L3) Router** | TBA | `0xbEE16d3e349DD7A5aEC190b1C03aA8f65A915360` |
| **Token Bridge (L3) Standard Gateway** | TBA | `0x14B739e95cABeEC8C9f550530C5F701CBaAe9D38` |
| **Token Bridge (L3) Custom Gateway** | TBA | `0xEC44a2AcE1a58f5520Ca716873dF6E3f39c498b0` |
| **Token Bridge (L3) Multicall** | TBA | `0x2217BF4E11F8bd17A10e29F14E7d0E99A287E88F` |
| **Token Bridge (L3) Proxy Admin** | TBA | `0x181E432B63EC68B59AEb47d8fA3C7763c4717e79` |
| **Token Bridge (L3) WETH** | TBA | `0x0000000000000000000000000000000000000000` |
| **Token Bridge (L3) WETH Gateway** | TBA | `0x0000000000000000000000000000000000000000` |

**Links**: [Bridging Guide](bridging.md) • [Developer Docs](../developers/index.md) • [FAQ](../resources/faq.md) 