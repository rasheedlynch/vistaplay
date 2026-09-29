import { z } from "zod";

import { deviceOptions } from "@/lib/devices";
import { plans } from "@/lib/plans";

const planIds = plans.map((plan) => plan.id);
const deviceValues = deviceOptions.map((device) => device.value);

// Accepts any reasonably-formatted phone number: strip spaces, dashes,
// dots and parentheses, allow one optional leading +, then require
// 9–15 digits. Not Spain-specific — the business may get international
// customers too.
function isValidPhone(raw: string): boolean {
  const cleaned = raw.replace(/[\s\-.()]/g, "");
  const digits = cleaned.startsWith("+") ? cleaned.slice(1) : cleaned;
  return /^\d{9,15}$/.test(digits);
}

export const orderSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Introduce tu nombre y apellidos.")
    .max(120, "El nombre es demasiado largo."),
  phone: z
    .string()
    .trim()
    .max(30, "Revisa el número de teléfono.")
    .refine(isValidPhone, "Revisa el número de teléfono."),
  email: z
    .string()
    .trim()
    .min(1, "Introduce tu email.")
    .max(254, "El email es demasiado largo.")
    .email("Introduce un email válido."),
  plan: z.string().refine((value) => planIds.includes(value), "Elige un plan."),
  device: z
    .string()
    .refine((value) => deviceValues.includes(value), "Elige un dispositivo."),
});

export type OrderInput = z.infer<typeof orderSchema>;
