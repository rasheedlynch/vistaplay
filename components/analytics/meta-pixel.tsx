"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect, useRef } from "react";

import { useConsent } from "@/lib/consent";
import { META_PIXEL_SNIPPET, revokePixel, trackPixel } from "@/lib/meta-pixel";

// Mounted once in the root layout. Renders nothing until consent is granted.
export function MetaPixel() {
  const consent = useConsent();
  const pathname = usePathname();
  const lastTrackedPath = useRef<string | null>(null);

  // PageView on every route change (client navigations included), once per path.
  useEffect(() => {
    if (consent !== "granted") {
      lastTrackedPath.current = null;
      return;
    }
    if (lastTrackedPath.current === pathname) return;
    lastTrackedPath.current = pathname;
    trackPixel("PageView");
  }, [consent, pathname]);

  // Rejected or withdrawn: stop the pixel and remove its cookies.
  useEffect(() => {
    if (consent === "denied") revokePixel();
  }, [consent]);

  // Contact: any click on a WhatsApp link (floating button, CTAs, contact page...).
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (target.closest('a[href^="https://wa.me/"]')) trackPixel("Contact");
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  if (consent !== "granted") return null;
  return (
    <Script id="meta-pixel" strategy="afterInteractive">
      {META_PIXEL_SNIPPET}
    </Script>
  );
}
