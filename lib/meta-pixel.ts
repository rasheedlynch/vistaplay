import { hasConsent } from "@/lib/consent";
import { META_PIXEL_ID } from "@/lib/site";

type PixelArgs = unknown[];

declare global {
  interface Window {
    fbq?: (...args: PixelArgs) => void;
    __vpQueue?: PixelArgs[];
  }
}

// Meta Pixel base code. Rendered through next/script ONLY after consent.
// - No noscript <img> fallback (it would load without consent).
// - autoConfig is disabled so Meta does not auto-collect form fields
//   (automatic advanced matching) or button clicks: no personal data is sent.
// - PageView is NOT fired here; MetaPixel fires it on every route change.
// - Events requested before this script ran are replayed from __vpQueue.
export const META_PIXEL_SNIPPET = `
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('set','autoConfig',false,'${META_PIXEL_ID}');
fbq('init','${META_PIXEL_ID}');
var q=window.__vpQueue||[];window.__vpQueue=[];
q.forEach(function(a){fbq.apply(null,a)});
`;

export type PixelEventName = "PageView" | "ViewContent" | "InitiateCheckout" | "Lead" | "Contact";

// Single entry point for every event. Does nothing without consent.
export function trackPixel(event: PixelEventName, data?: Record<string, string | number>): void {
  if (typeof window === "undefined" || !hasConsent()) return;
  const args: PixelArgs = data ? ["track", event, data] : ["track", event];
  if (window.fbq) {
    window.fbq(...args);
  } else {
    (window.__vpQueue ??= []).push(args);
  }
}

// Called when the visitor rejects (or withdraws) consent.
export function revokePixel(): void {
  window.__vpQueue = [];
  window.fbq?.("consent", "revoke");
  const host = window.location.hostname;
  for (const name of ["_fbp", "_fbc"]) {
    document.cookie = `${name}=; Max-Age=0; path=/`;
    document.cookie = `${name}=; Max-Age=0; path=/; domain=.${host.replace(/^www\./, "")}`;
  }
}
