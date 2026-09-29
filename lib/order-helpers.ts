// Plain helpers shared by the client form and the server action — kept
// free of the zod schema (lib/order.ts) so the client bundle never pulls
// zod in just for these lookups/types.
import { deviceOptions } from "@/lib/devices";
import { plans } from "@/lib/plans";

export type OrderFormValues = {
  name: string;
  phone: string;
  email: string;
  plan: string;
  device: string;
  privacyConsent: boolean;
  activationConsent: boolean;
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

export function planLabel(planId: string): string {
  return plans.find((plan) => plan.id === planId)?.name ?? planId;
}

export function deviceLabel(deviceValue: string): string {
  return deviceOptions.find((device) => device.value === deviceValue)?.label ?? deviceValue;
}
