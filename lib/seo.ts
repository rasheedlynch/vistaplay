import type { Metadata } from "next";

import { SITE_NAME, SITE_URL } from "@/lib/site";

export const THEME_COLOR = "#F6F1E9"; // light header / page background
export const BACKGROUND_COLOR = "#15120F";
export const SURFACE_COLOR = "#1E1A16";
export const FOREGROUND_COLOR = "#F4EFE6";
export const ACCENT_COLOR = "#E0A84F";

export const TITLE_TEMPLATE = "%s | VistaPlay";
export const DEFAULT_TITLE = "VistaPlay | IPTV España con prueba gratis de 24 horas";
export const DEFAULT_DESCRIPTION =
  "IPTV España para tu Smart TV, Fire TV Stick y móvil. Pide tu prueba gratis de 24 horas, sin permanencia y con soporte humano por WhatsApp.";

type SeoOptions = {
  /** Page title WITHOUT the " | VistaPlay" suffix (added by the template). Omit for the home page. */
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
};

// Every page calls this so titles, canonical URLs and Open Graph / Twitter
// stay consistent.
export function buildMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  noIndex = false,
}: SeoOptions = {}): Metadata {
  const url = new URL(path, SITE_URL).toString();
  const shareTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
  // Defining openGraph/twitter explicitly opts out of Next's automatic
  // file-convention image detection, so the shared image is referenced by hand.
  const image = { url: "/opengraph-image", width: 1200, height: 630, alt: "VistaPlay — televisión en streaming" };

  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: url },
    openGraph: {
      title: shareTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "es_ES",
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: [image.url],
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
  };
}
