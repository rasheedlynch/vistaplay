import type { MetadataRoute } from "next";

import { site } from "@/lib/site";

// Routes that exist today. Stage 4 appends legal + /contratar routes here,
// Stage 5 appends blog posts (likely from a separate, dynamically-fetched
// array concatenated below) — /styleguide is deliberately never listed.
const staticRoutes: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes.map(({ path, priority }) => ({
    url: new URL(path, site.url).toString(),
    lastModified: new Date(),
    priority,
  }));
}
