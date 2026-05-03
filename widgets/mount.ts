import { createElement, type ComponentType } from "react";
import { createRoot, type Root } from "react-dom/client";

export type WidgetLoader = () => Promise<{ default: ComponentType }>;

export type WidgetSpec = {
  /** Value of the `data-widget` attribute on the mount element. */
  name: string;
  load: WidgetLoader;
};

const registry = new Map<string, WidgetLoader>();
const componentCache = new Map<string, ComponentType>();
const inflight = new Map<string, Promise<ComponentType>>();
const mounted = new WeakMap<HTMLElement, Root>();

function getComponent(name: string): Promise<ComponentType> | ComponentType | undefined {
  const cached = componentCache.get(name);
  if (cached) return cached;
  const pending = inflight.get(name);
  if (pending) return pending;
  const loader = registry.get(name);
  if (!loader) return undefined;
  const promise = loader().then((mod) => {
    componentCache.set(name, mod.default);
    inflight.delete(name);
    return mod.default;
  });
  inflight.set(name, promise);
  return promise;
}

function mountElement(el: HTMLElement, Component: ComponentType): void {
  if (mounted.has(el)) return;
  const root = createRoot(el);
  mounted.set(el, root);
  root.render(createElement(Component));
}

function mountAll() {
  document.querySelectorAll<HTMLElement>("[data-widget]").forEach((el) => {
    if (mounted.has(el)) return;
    const name = el.getAttribute("data-widget");
    if (!name) return;
    const result = getComponent(name);
    if (!result) return;
    if (result instanceof Promise) {
      result.then((Component) => mountElement(el, Component));
    } else {
      mountElement(el, result);
    }
  });
}

type MaterialDocumentObservable = {
  subscribe: (next: (doc?: Document) => void) => unknown;
};

/**
 * Register widgets and start mounting them to any matching `data-widget` div.
 *
 * Each widget is loaded lazily the first time its mount point appears, so a
 * page without a given widget never downloads its code chunk.
 *
 * Material for MkDocs's `navigation.instant` feature swaps the document body
 * on every link click rather than performing a full page reload. To keep
 * widgets working across those swaps we subscribe to Material's `document$`
 * observable, which fires once on initial subscription and again on each
 * subsequent navigation. When `navigation.instant` is disabled (or Material
 * isn't present at all) we fall back to a single DOMContentLoaded mount.
 */
export function registerWidgets(widgets: WidgetSpec[]): void {
  for (const w of widgets) registry.set(w.name, w.load);

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
