import type { Route } from "./+types/home";
import { FaucetApp } from "../components/FaucetApp";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "AnimeChain Testnet Faucet" },
    { name: "description", content: "Get free tANIME tokens for testing and development on AnimeChain Testnet" },
    { name: "keywords", content: "AnimeChain, testnet, faucet, tANIME, blockchain, crypto" },
  ];
}

export default function Home() {
  return <FaucetApp />;
}
