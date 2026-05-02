import { registerWidgets, type WidgetSpec } from "./mount";
import BridgeWidget from "./bridge/BridgeWidget";
import FaucetWidget from "./faucet/FaucetWidget";
import RelayWidget from "./relay/RelayWidget";
import "./bridge/Bridge.css";
import "./relay/Relay.css";

const widgets: WidgetSpec[] = [
  { name: "bridge", component: BridgeWidget },
  { name: "faucet", component: FaucetWidget },
  { name: "relay", component: RelayWidget },
];

registerWidgets(widgets);
