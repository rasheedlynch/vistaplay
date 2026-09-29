export type Plan = {
  id: string;
  name: string;
  subtitle: string;
  durationLabel: string;
  price: number | null;
  perMonth: number | null;
  billingNote: string;
  features: string[];
  isTrial?: boolean;
};

const FEATURES = ["Acceso en todos tus dispositivos", "Soporte humano 24 horas", "Sin permanencia"];

export const plans: Plan[] = [
  {
    id: "prueba-24h",
    name: "Prueba 24 horas",
    subtitle: "Pruébalo antes de decidir",
    durationLabel: "24 horas",
    price: 2,
    perMonth: null,
    billingNote: "Acceso durante 24 horas.",
    features: FEATURES,
    isTrial: true,
  },
  {
    id: "1-mes",
    name: "Plan 1 mes",
    subtitle: "Para empezar",
    durationLabel: "1 mes",
    price: 9.99,
    perMonth: null,
    billingNote: "Pago mensual.",
    features: FEATURES,
  },
  {
    id: "3-meses",
    name: "Plan 3 meses",
    subtitle: "Más tiempo, menos gestiones",
    durationLabel: "3 meses",
    price: 19.99,
    perMonth: 6.66,
    billingNote: "Pago único cada 3 meses.",
    features: FEATURES,
  },
  {
    id: "6-meses",
    name: "Plan 6 meses",
    subtitle: "Un buen punto intermedio",
    durationLabel: "6 meses",
    price: 34.99,
    perMonth: 5.83,
    billingNote: "Pago único cada 6 meses.",
    features: FEATURES,
  },
  {
    id: "12-meses",
    name: "Plan 12 meses",
    subtitle: "Todo el año cubierto",
    durationLabel: "12 meses",
    price: 54.99,
    perMonth: 4.58,
    billingNote: "Pago único anual.",
    features: FEATURES,
  },
];

export function formatPrice(value: number): string {
  const isWhole = Number.isInteger(value);
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: isWhole ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(value);
}
