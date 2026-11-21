import type { MetadataRoute } from "next";

import { deviceGuides } from "@/lib/devices";
import { SITE_URL } from "@/lib/site";

// Indexable pages only. /gracias and the legal pages are noindex, so they are
// deliberately excluded.
const staticRoutes: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/planes", priority: 0.9 },
  { path: "/prueba-gratis", priority: 0.9 },
  { path: "/solicitar", priority: 0.7 },
  { path: "/dispositivos", priority: 0.8 },
  { path: "/preguntas-frecuentes", priority: 0.8 },
  { path: "/contacto", priority: 0.6 },
];

// Future /dispositivos/[slug] guides join the sitemap once `hasGuide` is true.
const deviceRoutes = deviceGuides
  .filter((device) => device.hasGuide)
  .map((device) => ({ path: `/dispositivos/${device.slug}`, priority: 0.7 }));

export default function sitemap(): MetadataRoute.Sitemap {
  return [...staticRoutes, ...deviceRoutes].map(({ path, priority }) => ({
    url: new URL(path, SITE_URL).toString(),
    lastModified: new Date(),
    priority,
  }));
}
