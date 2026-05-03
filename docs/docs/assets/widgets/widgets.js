import { n as l, r as m } from "./chunks/react-CISCX5s2.js";
const f = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new WeakMap();
function g(t) {
  const n = u.get(t);
  if (n) return n;
  const e = r.get(t);
  if (e) return e;
  const o = f.get(t);
  if (!o) return;
  const c = o().then((a) => (u.set(t, a.default), r.delete(t), a.default));
  return r.set(t, c), c;
}
function d(t, n) {
  if (s.has(t)) return;
  const e = l.createRoot(t);
  s.set(t, e), e.render(m.createElement(n));
}
function i() {
  document.querySelectorAll("[data-widget]").forEach((t) => {
    if (s.has(t)) return;
    const n = t.getAttribute("data-widget");
    if (!n) return;
    const e = g(n);
    e && (e instanceof Promise ? e.then((o) => d(t, o)) : d(t, e));
  });
}
function p(t) {
  for (const e of t) f.set(e.name, e.load);
  const n = window.document$;
  if (n && typeof n.subscribe == "function") {
    n.subscribe(() => i());
    return;
  }
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", i, { once: !0 }) : i();
}
const w = [
  { name: "bridge", load: () => import("./chunks/BridgeWidget-MZZK2ukK.js") },
  { name: "faucet", load: () => import("./chunks/FaucetWidget-Sub9vrze.js") },
  { name: "relay", load: () => import("./chunks/RelayWidget-s4eudn-A.js") }
];
p(w);
