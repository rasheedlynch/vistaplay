"use client";

import { useEffect, useRef } from "react";

import { useConsent } from "@/lib/consent";
import { trackPixel, type PixelEventName } from "@/lib/meta-pixel";

type PixelEventProps = {
  event: PixelEventName;
  data?: Record<string, string | number>;
};

// Fires one event per mount, as soon as (and only if) consent is granted.
export function PixelEvent({ event, data }: PixelEventProps) {
  const consent = useConsent();
  const fired = useRef(false);

  useEffect(() => {
    if (consent !== "granted" || fired.current) return;
    fired.current = true;
    trackPixel(event, data);
  }, [consent, event, data]);

  return null;
}
