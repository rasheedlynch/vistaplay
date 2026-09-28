type SiteConfig = {
  name: string;
  url: string;
  whatsappNumber: string | null;
  supportHours: string | null;
  activationTime: string | null;
};

export const site: SiteConfig = {
  name: "VistaPlay",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://vistaplay.shop",
  // TODO(client): confirm the WhatsApp Business number
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || null,
  // TODO(client): confirm support hours
  supportHours: null,
  // TODO(client): confirm activation time
  activationTime: null,
};

// Returns null when no number is configured — callers must not fabricate a fallback.
export function getWhatsAppUrl(message: string): string | null {
  if (!site.whatsappNumber) return null;
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
