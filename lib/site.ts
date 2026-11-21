// Central configuration. Everything that can change (domain, contact
// details, prices) is defined ONLY here; pages, forms, emails and schema
// all read from this file.

export const SITE_URL = "https://vistaplay.shop";
export const SITE_NAME = "VistaPlay";

// Temporary number — will change to a +34 number later. Digits only,
// international format, no "+". Only ever defined here.
export const WHATSAPP_NUMBER = "15172403924";

// Receives every order / trial request. NOTE: spelled exactly as supplied.
export const ORDER_EMAIL = "soporte@vistaplay.shop";

export const PRICE_NOTE = "IVA incluido, sin permanencia";

export type Plan = {
  /** Short code used in ?plan= and in the order form. */
  id: "1m" | "3m" | "6m" | "12m" | "trial";
  name: string;
  durationLabel: string;
  /** Euros, IVA incluido. 0 for the free trial. */
  price: number;
  /** Equivalent monthly price, when the plan is longer than one month. */
  perMonth: number | null;
  badge?: string;
  isTrial?: boolean;
};

export const PLANS: Plan[] = [
  { id: "1m", name: "1 mes", durationLabel: "1 mes", price: 9.99, perMonth: null },
  { id: "3m", name: "3 meses", durationLabel: "3 meses", price: 24.99, perMonth: 8.33 },
  {
    id: "6m",
    name: "6 meses",
    durationLabel: "6 meses",
    price: 39.99,
    perMonth: 6.67,
    // TODO(client): confirm "Más popular" badge (popularity claim) — CLIENT_QUESTIONS.md #5
    badge: "Más popular",
  },
  {
    id: "12m",
    name: "12 meses",
    durationLabel: "12 meses",
    price: 54.99,
    perMonth: 4.58,
    badge: "Mejor valor",
  },
];

export const TRIAL: Plan = {
  id: "trial",
  name: "Prueba gratis 24 horas",
  durationLabel: "24 horas",
  price: 0,
  perMonth: null,
  isTrial: true,
};

/** Trial first, then the paid plans — used by selects, schema validation and emails. */
export const ALL_PLANS: Plan[] = [TRIAL, ...PLANS];

export const GUARANTEE_TEXT =
  "Si no quedas satisfecho en las primeras 24 horas, te devolvemos el dinero.";

export const site = { name: SITE_NAME, url: SITE_URL };

export function getPlan(id: string | null | undefined): Plan | undefined {
  return ALL_PLANS.find((plan) => plan.id === id);
}

export function formatPrice(value: number): string {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    // es-ES hides grouping for 4-digit numbers; irrelevant at these prices.
  }).format(value);
}

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_GENERIC_MESSAGE =
  "Hola, me interesa VistaPlay. ¿Me podéis dar más información?";

export const WHATSAPP_URL = getWhatsAppUrl(WHATSAPP_GENERIC_MESSAGE);

/** Main navigation (header) — footer reuses these plus the extra pages. */
export const NAV_LINKS = [
  { href: "/planes", label: "Planes" },
  { href: "/dispositivos", label: "Dispositivos" },
  { href: "/preguntas-frecuentes", label: "Preguntas frecuentes" },
  { href: "/contacto", label: "Contacto" },
];

export const LEGAL_LINKS = [
  { href: "/aviso-legal", label: "Aviso legal" },
  { href: "/politica-de-privacidad", label: "Política de privacidad" },
  { href: "/politica-de-cookies", label: "Política de cookies" },
  { href: "/condiciones-de-contratacion", label: "Condiciones de contratación" },
  { href: "/derecho-de-desistimiento", label: "Derecho de desistimiento" },
];
