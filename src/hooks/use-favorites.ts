"use client";

import { useCallback, useSyncExternalStore } from "react";

const STORAGE_KEY = "zepresso:favorites";

/**
 * Favoriler için minimal, uygulama genelinde paylaşılan bir depo.
 * Context yerine harici store kullanıyoruz: header rozeti, ürün kartı ve
 * favoriler paneli aynı anda güncelleniyor, gereksiz yeniden render olmuyor.
 */
let favorites: string[] = [];
let hydrated = false;
const listeners = new Set<() => void>();

const EMPTY: string[] = [];

function emit() {
  for (const listener of listeners) listener();
}

function persist() {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  } catch {
    /* Gizli sekme veya dolu depo — favoriler bu oturumla sınırlı kalır. */
  }
}

function hydrate() {
  if (hydrated) return;
  hydrated = true;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed: unknown = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        favorites = parsed.filter((item): item is string => typeof item === "string");
      }
    }
  } catch {
    favorites = [];
  }
}

function subscribe(listener: () => void) {
  hydrate();
  listeners.add(listener);

  // Başka bir sekmede yapılan değişiklikleri yakala.
  const onStorage = (event: StorageEvent) => {
    if (event.key !== STORAGE_KEY) return;
    hydrated = false;
    hydrate();
    emit();
  };
  window.addEventListener("storage", onStorage);

  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

function getSnapshot() {
  return favorites;
}

function getServerSnapshot() {
  return EMPTY;
}

export function toggleFavorite(id: string) {
  favorites = favorites.includes(id)
    ? favorites.filter((item) => item !== id)
    : [id, ...favorites];
  persist();
  emit();
}

export function clearFavorites() {
  favorites = [];
  persist();
  emit();
}

export function useFavorites() {
  const ids = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const isFavorite = useCallback((id: string) => ids.includes(id), [ids]);

  return { ids, count: ids.length, isFavorite, toggle: toggleFavorite, clear: clearFavorites };
}

export function useIsFavorite(id: string) {
  const { isFavorite } = useFavorites();
  return isFavorite(id);
}
