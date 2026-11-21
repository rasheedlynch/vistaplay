import { useSyncExternalStore } from "react";

// Cookie-consent state, stored in localStorage and shared across components.
// "pending" only exists on the server / during hydration.
export type ConsentState = "granted" | "denied" | "none" | "pending";

const STORAGE_KEY = "vp_cookie_consent";
const CHANGE_EVENT = "vp-consent-change";
export const OPEN_SETTINGS_EVENT = "vp-open-cookie-settings";

export function readConsent(): Exclude<ConsentState, "pending"> {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : "none";
  } catch {
    return "none";
  }
}

export function setConsent(value: "granted" | "denied"): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Storage blocked: the choice only lives for this page view.
    memoryChoice = value;
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

let memoryChoice: "granted" | "denied" | null = null;

function snapshot(): Exclude<ConsentState, "pending"> {
  const stored = readConsent();
  return stored === "none" && memoryChoice ? memoryChoice : stored;
}

function subscribe(callback: () => void): () => void {
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

export function useConsent(): ConsentState {
  return useSyncExternalStore<ConsentState>(subscribe, snapshot, () => "pending");
}

export function hasConsent(): boolean {
  return typeof window !== "undefined" && snapshot() === "granted";
}

export function openCookieSettings(): void {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}
