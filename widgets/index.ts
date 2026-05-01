import { registerWidgets, type WidgetSpec } from "./mount";
import BridgeWidget from "./bridge/BridgeWidget";
import FaucetWidget from "./faucet/FaucetWidget";
import "./bridge/Bridge.css";

const widgets: WidgetSpec[] = [
  { name: "bridge", component: BridgeWidget },
  { name: "faucet", component: FaucetWidget },
];

registerWidgets(widgets);
