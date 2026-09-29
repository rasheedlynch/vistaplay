import type { MetadataRoute } from "next";

import { BACKGROUND_COLOR, THEME_COLOR } from "@/lib/seo";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.name,
    lang: "es",
    theme_color: THEME_COLOR,
    background_color: BACKGROUND_COLOR,
    display: "browser",
  };
}
