import type { MetadataRoute } from "next";

import { THEME_COLOR } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    lang: "es",
    theme_color: THEME_COLOR,
    background_color: THEME_COLOR,
    display: "browser",
  };
}
