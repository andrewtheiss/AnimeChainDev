# Faucet

Get test ANIME for development on Animechain Testnet (or small amounts of ANIME on mainnet, gas permitting). The faucet uses a proof-of-work challenge for the first withdrawal so a proxy at `faucet.animechain.dev` can pay gas on your behalf — no ANIME needed to claim your first ANIME.

<div data-widget="faucet"></div>

## How it works

- Pick the network (mainnet or testnet) from the dropdown above.
- Click **🦊 Add to MetaMask** if you don't already have the chain — it will add or update the saved network details.
- Connect your wallet, then mine the small proof-of-work challenge for each withdrawal in the 8-withdrawal-per-24h cycle.
- The first transaction is **gasless** — your PoW signature is forwarded to the faucet server which pays gas. Subsequent transactions are signed and submitted from your wallet directly.

## Need to bridge real ANIME instead?

Test ANIME from the faucet is for development only. To bring real value into Animechain, see the [bridging guide](animecoin/bridging-easy.md).
