// Plain helpers shared by the client form and the server action — kept
// free of the zod schema (lib/order.ts) so the client bundle never pulls
// zod in just for these lookups/types.
import { deviceOptions } from "@/lib/devices";
import { formatPrice, getPlan } from "@/lib/site";

export type OrderFormValues = {
  name: string;
  phone: string;
  email: string;
  plan: string;
  device: string;
  consent: boolean;
};

export type OrderFormState = {
  status: "idle" | "error";
  message?: string;
  fieldErrors?: Record<string, string>;
  // Echoes back what was submitted so the form can be redisplayed with the
  // user's data intact — React resets <form action={...}> after the action
  // returns, so we can't just rely on the DOM keeping uncontrolled values.
  values?: OrderFormValues;
};

export const initialOrderFormState: OrderFormState = { status: "idle" };

// Short-lived cookie carrying just enough for the thank-you page's greeting
// and WhatsApp prefill — never the full order (no email/phone in it).
export const ORDER_COOKIE_NAME = "vp_order";

export function planLabel(planId: string): string {
  return getPlan(planId)?.name ?? planId;
}

// e.g. "1 mes — 9,99 €" / "Prueba gratis 24 horas — Gratis (0 €)"
export function planLabelWithPrice(planId: string): string {
  const plan = getPlan(planId);
  if (!plan) return planId;
  return `${plan.name} — ${plan.isTrial ? "Gratis (0 €)" : formatPrice(plan.price)}`;
}

export function deviceLabel(deviceValue: string): string {
  return deviceOptions.find((device) => device.value === deviceValue)?.label ?? deviceValue;
}

// Single source for the WhatsApp prefill text after an order.
export function buildOrderWhatsAppMessage(planId: string, reference: string): string {
  const plan = getPlan(planId);
  const what = plan?.isTrial ? "la prueba gratis de 24 horas" : `el plan de ${plan?.name ?? planId}`;
  return `Hola, acabo de solicitar ${what} en VistaPlay (pedido ${reference}).`;
}
