import type { MetadataRoute } from "next";

import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const isPreview =
    Boolean(process.env.VERCEL_ENV) && process.env.VERCEL_ENV !== "production";

  if (isPreview) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/styleguide",
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
