export type Plan = {
  id: string;
  name: string;
  subtitle: string;
  months: 1 | 3 | 12;
  price: number | null;
  billingNote: string;
  features: string[];
};

// TODO(client): confirm "sin permanencia" contract terms — see CLIENT_QUESTIONS.md
const SIN_PERMANENCIA = "Sin permanencia";

export const plans: Plan[] = [
  {
    id: "1-mes",
    name: "Plan 1 mes",
    subtitle: "Para empezar",
    months: 1,
    price: null, // TODO(client): confirm monthly price
    billingNote: "Pago mensual.",
    features: ["Acceso desde tu móvil y tu televisor", "Soporte por WhatsApp", SIN_PERMANENCIA],
  },
  {
    id: "3-meses",
    name: "Plan 3 meses",
    subtitle: "Más tiempo, menos gestiones",
    months: 3,
    price: null, // TODO(client): confirm 3-month price
    billingNote: "Pago único cada 3 meses.",
    features: ["Acceso desde tu móvil y tu televisor", "Soporte por WhatsApp", SIN_PERMANENCIA],
  },
  {
    id: "12-meses",
    name: "Plan 12 meses",
    subtitle: "Todo el año cubierto",
    months: 12,
    price: null, // TODO(client): confirm annual price
    billingNote: "Pago único anual.",
    features: ["Acceso desde tu móvil y tu televisor", "Soporte por WhatsApp", SIN_PERMANENCIA],
  },
];
