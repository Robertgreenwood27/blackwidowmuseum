"use client";
/**
 * VISITS — which exhibits this visitor has opened, kept in their own browser.
 *
 * Keyed by permanent exhibit id (never by URL), so marks survive folders
 * moving. Storage can be missing or throw (private windows, blocked site
 * data); every access is guarded and the museum works without it.
 * Server render and first client render both see "no visits", so static
 * pages never mismatch on hydration.
 */
import { useSyncExternalStore } from "react";

const KEY = "bwm:visited:v1";
const EVENT = "bwm:visits";
const EMPTY: ReadonlySet<string> = new Set();

let cache: { raw: string | null; set: ReadonlySet<string> } = { raw: null, set: EMPTY };

function read(): ReadonlySet<string> {
  let raw: string | null = null;
  try {
    raw = window.localStorage.getItem(KEY);
  } catch {
    return EMPTY;
  }
  if (raw === cache.raw) return cache.set;
  let set: ReadonlySet<string> = EMPTY;
  try {
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    if (Array.isArray(parsed)) set = new Set(parsed.filter((x): x is string => typeof x === "string"));
  } catch {
    /* corrupt value: treat as empty */
  }
  cache = { raw, set };
  return set;
}

function write(set: ReadonlySet<string>) {
  try {
    if (set.size) window.localStorage.setItem(KEY, JSON.stringify([...set]));
    else window.localStorage.removeItem(KEY);
  } catch {
    return;
  }
  window.dispatchEvent(new Event(EVENT));
}

function subscribe(onChange: () => void) {
  const onStorage = (e: StorageEvent) => e.key === KEY && onChange();
  window.addEventListener(EVENT, onChange);
  window.addEventListener("storage", onStorage); // other tabs
  return () => {
    window.removeEventListener(EVENT, onChange);
    window.removeEventListener("storage", onStorage);
  };
}

/** The set of visited exhibit ids (empty on the server and before hydration). */
export function useVisits(): ReadonlySet<string> {
  return useSyncExternalStore(subscribe, read, () => EMPTY);
}

export function markVisited(id: string) {
  const set = read();
  if (set.has(id)) return;
  write(new Set([...set, id]));
}

export function forgetVisits(ids?: string[]) {
  if (!ids) return write(EMPTY);
  const drop = new Set(ids);
  write(new Set([...read()].filter((id) => !drop.has(id))));
}
