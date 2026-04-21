'use client';

import { useEffect, useState, useCallback } from 'react';

const KEY = 'isa-walk-stamps-v1';
const CHANGE_EVENT = 'isa-walk-stamps-changed';

export type StampStore = Record<string, string[]>;

function read(): StampStore {
  if (typeof window === 'undefined') return {};
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function write(s: StampStore) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(s));
    window.dispatchEvent(new CustomEvent(CHANGE_EVENT));
  } catch {}
}

export function useStamps(routeType: string) {
  const [stamps, setStamps] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const sync = () => {
      const all = read();
      setStamps(all[routeType] ?? []);
    };
    sync();
    setMounted(true);
    window.addEventListener(CHANGE_EVENT, sync);
    window.addEventListener('storage', sync);
    return () => {
      window.removeEventListener(CHANGE_EVENT, sync);
      window.removeEventListener('storage', sync);
    };
  }, [routeType]);

  const toggle = useCallback(
    (placeId: string) => {
      const all = read();
      const cur = all[routeType] ?? [];
      const next = cur.includes(placeId)
        ? cur.filter((x) => x !== placeId)
        : [...cur, placeId];
      all[routeType] = next;
      write(all);
      setStamps(next);
    },
    [routeType],
  );

  const has = useCallback(
    (placeId: string) => stamps.includes(placeId),
    [stamps],
  );

  return { stamps, has, toggle, mounted };
}

export function useAllStamps() {
  const [all, setAll] = useState<StampStore>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const sync = () => setAll(read());
    sync();
    setMounted(true);
    window.addEventListener(CHANGE_EVENT, sync);
    window.addEventListener('storage', sync);
    return () => {
      window.removeEventListener(CHANGE_EVENT, sync);
      window.removeEventListener('storage', sync);
    };
  }, []);

  const totalStamps = Object.values(all).reduce(
    (n, arr) => n + (arr?.length ?? 0),
    0,
  );

  return { all, totalStamps, mounted };
}
