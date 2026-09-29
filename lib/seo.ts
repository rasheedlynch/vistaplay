import type { Metadata } from "next";

import { site } from "@/lib/site";

export const THEME_COLOR = "#0F766E";
export const BACKGROUND_COLOR = "#FAF7F2";

export const TITLE_TEMPLATE = "%s | VistaPlay";
export const DEFAULT_TITLE = "VistaPlay — Televisión en streaming para tu hogar";
export const DEFAULT_DESCRIPTION =
  "Televisión en streaming para tu hogar: canales nacionales y autonómicos, deporte, cine, series y documentales en tu móvil y TV, con soporte por WhatsApp.";

type SeoOptions = {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
};

// Every page should call this so title templating, canonical URLs and
// OpenGraph/Twitter stay consistent without each page repeating itself.
export function buildMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  noIndex = false,
}: SeoOptions = {}): Metadata {
  const url = new URL(path, site.url).toString();
  const resolvedTitle = title ?? DEFAULT_TITLE;
  // Explicitly defining openGraph/twitter below opts us out of Next's
  // automatic file-convention image detection, so the shared
  // opengraph-image/twitter-image route is referenced by hand instead.
  const image = { url: "/opengraph-image", width: 1200, height: 630, alt: DEFAULT_TITLE };

  return {
    ...(title ? { title } : {}),
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: resolvedTitle,
      description,
      url,
      siteName: site.name,
      locale: "es_ES",
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
      images: [image.url],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
