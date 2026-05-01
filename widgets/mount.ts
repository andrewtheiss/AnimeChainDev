import { createElement, type ComponentType } from "react";
import { createRoot, type Root } from "react-dom/client";

export type WidgetSpec = {
  /** Value of the `data-widget` attribute on the mount element. */
  name: string;
  component: ComponentType;
};

const registry = new Map<string, ComponentType>();
const mounted = new WeakMap<HTMLElement, Root>();

function mountAll() {
  document.querySelectorAll<HTMLElement>("[data-widget]").forEach((el) => {
    const name = el.getAttribute("data-widget");
    if (!name) return;
    const Component = registry.get(name);
    if (!Component) return;
    if (mounted.has(el)) return;
    const root = createRoot(el);
    mounted.set(el, root);
    root.render(createElement(Component));
  });
}

type MaterialDocumentObservable = {
  subscribe: (next: (doc?: Document) => void) => unknown;
};

/**
 * Register widgets and start mounting them to any matching `data-widget` div.
 *
 * Material for MkDocs's `navigation.instant` feature swaps the document body
 * on every link click rather than performing a full page reload. To keep
 * widgets working across those swaps we subscribe to Material's `document$`
 * observable, which fires once on initial subscription and again on each
 * subsequent navigation. When `navigation.instant` is disabled (or Material
 * isn't present at all) we fall back to a single DOMContentLoaded mount.
 */
export function registerWidgets(widgets: WidgetSpec[]): void {
  for (const w of widgets) registry.set(w.name, w.component);

  const observable = (window as unknown as { document$?: MaterialDocumentObservable }).document$;
  if (observable && typeof observable.subscribe === "function") {
    observable.subscribe(() => mountAll());
    return;
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountAll, { once: true });
  } else {
    mountAll();
  }
}
