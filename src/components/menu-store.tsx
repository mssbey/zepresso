"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type Panel = "search" | "favorites" | "product" | null;

interface MenuStore {
  /** Aynı anda yalnızca tek bir katman açık kalır; scroll kilidi çakışmaz. */
  panel: Panel;
  activeProductId: string | null;
  openSearch: () => void;
  openFavorites: () => void;
  openProduct: (id: string) => void;
  close: () => void;
}

const MenuStoreContext = createContext<MenuStore | null>(null);

export function MenuStoreProvider({ children }: { children: ReactNode }) {
  const [panel, setPanel] = useState<Panel>(null);
  const [activeProductId, setActiveProductId] = useState<string | null>(null);

  const openSearch = useCallback(() => setPanel("search"), []);
  const openFavorites = useCallback(() => setPanel("favorites"), []);
  const openProduct = useCallback((id: string) => {
    setActiveProductId(id);
    setPanel("product");
  }, []);
  const close = useCallback(() => setPanel(null), []);

  const value = useMemo<MenuStore>(
    () => ({ panel, activeProductId, openSearch, openFavorites, openProduct, close }),
    [panel, activeProductId, openSearch, openFavorites, openProduct, close],
  );

  return <MenuStoreContext.Provider value={value}>{children}</MenuStoreContext.Provider>;
}

export function useMenuStore() {
  const store = useContext(MenuStoreContext);
  if (!store) {
    throw new Error("useMenuStore, MenuStoreProvider içinde kullanılmalıdır.");
  }
  return store;
}
