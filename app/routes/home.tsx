import type { Route } from "./+types/home";
// Import working faucet UI (ported from appcomplete)
import App from "../faucet/App.jsx";
import "../faucet/index.css";
import "../faucet/App.css";
import "../faucet/components/styles/Faucet.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "AnimeChain Testnet Faucet" },
    { name: "description", content: "Get free tANIME tokens for testing and development on AnimeChain Testnet" },
    { name: "keywords", content: "AnimeChain, testnet, faucet, tANIME, blockchain, crypto" },
  ];
}

export default function Home() {
  return <App />;
}
