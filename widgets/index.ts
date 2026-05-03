import { registerWidgets, type WidgetSpec } from "./mount";

const widgets: WidgetSpec[] = [
  { name: "bridge", load: () => import("./bridge/BridgeWidget") },
  { name: "faucet", load: () => import("./faucet/FaucetWidget") },
  { name: "relay", load: () => import("./relay/RelayWidget") },
];

registerWidgets(widgets);
