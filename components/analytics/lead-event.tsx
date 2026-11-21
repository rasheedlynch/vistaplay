"use client";

import { useEffect } from "react";

import { useConsent } from "@/lib/consent";
import { trackPixel } from "@/lib/meta-pixel";

type LeadEventProps = {
  /** Order reference — used ONLY locally to avoid re-firing on refresh; never sent to Meta. */
  reference: string;
  planName: string;
  value: number;
};

// Rendered on /gracias only when the server confirmed a successful order.
export function LeadEvent({ reference, planName, value }: LeadEventProps) {
  const consent = useConsent();

  useEffect(() => {
    if (consent !== "granted") return;
    const key = `vp_lead_${reference}`;
    try {
      if (window.localStorage.getItem(key)) return; // already sent (page refresh)
      window.localStorage.setItem(key, "1");
    } catch {
      // storage unavailable: worst case, one extra Lead on refresh
    }
    trackPixel("Lead", { content_name: planName, value, currency: "EUR" });
  }, [consent, reference, planName, value]);

  return null;
}
