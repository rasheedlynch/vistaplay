import { z } from "zod";

import { deviceOptions } from "@/lib/devices";
import { plans } from "@/lib/plans";

const planIds = plans.map((plan) => plan.id);
const deviceValues = deviceOptions.map((device) => device.value);

// Spanish mobile numbers (WhatsApp-capable): optional +34/0034/34 prefix,
// then 6xx/7xx and 6 more digits, spaces/dots/dashes allowed as separators.
const SPANISH_PHONE_REGEX =
  /^(?:\+34|0034|34)?[\s\-\.]?[67]\d{2}[\s\-\.]?\d{3}[\s\-\.]?\d{3}$/;

export const orderSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Introduce tu nombre y apellidos.")
    .max(120, "El nombre es demasiado largo."),
  phone: z
    .string()
    .trim()
    .refine(
      (value) => SPANISH_PHONE_REGEX.test(value),
      "Introduce un teléfono español válido (p. ej. 612 345 678 o +34 612 345 678)."
    ),
  email: z.string().trim().min(1, "Introduce tu email.").email("Introduce un email válido."),
  plan: z.string().refine((value) => planIds.includes(value), "Elige un plan."),
  device: z
    .string()
    .refine((value) => deviceValues.includes(value), "Elige un dispositivo."),
  privacyConsent: z
    .boolean()
    .refine((value) => value === true, "Debes aceptar la política de privacidad."),
  activationConsent: z
    .boolean()
    .refine((value) => value === true, "Debes aceptar la activación inmediata."),
});

export type OrderInput = z.infer<typeof orderSchema>;
