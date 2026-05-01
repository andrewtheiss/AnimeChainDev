declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: unknown[] }) => Promise<unknown>;
      on: (event: string, callback: (...args: unknown[]) => void) => void;
      removeListener: (event: string, callback: (...args: unknown[]) => void) => void;
      isMetaMask?: boolean;
      chainId?: string;
      selectedAddress?: string;
    };
    /**
     * Material for MkDocs exposes this RxJS-style observable when
     * `navigation.instant` is enabled. Each emission corresponds to a
     * page navigation. Used by `widgets/mount.ts` to remount widgets.
     */
    document$?: { subscribe: (next: (doc?: Document) => void) => unknown };
  }
}

export {};
