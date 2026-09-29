import { ImageResponse } from "next/og";

import { LOGO_TRIANGLE_PATH, LOGO_VIEWBOX, LOGO_V_PATH } from "@/lib/brand";
import { BACKGROUND_COLOR, DEFAULT_TITLE, INK_COLOR, THEME_COLOR } from "@/lib/seo";

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageAlt = DEFAULT_TITLE;

const HERO_HEADLINE = "Televisión en streaming, sin complicaciones";

// Fetches real Sora font bytes from Google Fonts for use in ImageResponse.
// Returns null on any failure so callers can fall back to a system font
// instead of breaking image generation.
export async function loadSora(): Promise<ArrayBuffer | null> {
  try {
    const cssUrl = "https://fonts.googleapis.com/css2?family=Sora:wght@700";
    const css = await (await fetch(cssUrl)).text();
    const match = css.match(/src: url\(([^)]+)\) format\('(?:opentype|truetype)'\)/);
    if (!match) return null;
    const fontRes = await fetch(match[1]);
    if (!fontRes.ok) return null;
    return await fontRes.arrayBuffer();
  } catch {
    return null;
  }
}

function soraFonts(data: ArrayBuffer | null) {
  return data
    ? [{ name: "Sora", data, weight: 700 as const, style: "normal" as const }]
    : undefined;
}

export async function renderOgImage() {
  const soraData = await loadSora();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: BACKGROUND_COLOR,
          padding: "80px",
          fontFamily: soraData ? "Sora" : "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 48 }}>
          <svg width="44" height="44" viewBox={LOGO_VIEWBOX}>
            <path d={LOGO_V_PATH} fill={INK_COLOR} />
            <path d={LOGO_TRIANGLE_PATH} fill={THEME_COLOR} />
          </svg>
          <div style={{ fontSize: 36, fontWeight: 700, color: INK_COLOR, display: "flex" }}>
            VistaPlay
          </div>
        </div>
        <div
          style={{
            fontSize: 60,
            fontWeight: 700,
            color: INK_COLOR,
            lineHeight: 1.15,
            maxWidth: 920,
            display: "flex",
          }}
        >
          {HERO_HEADLINE}
        </div>
      </div>
    ),
    {
      ...ogImageSize,
      fonts: soraFonts(soraData),
    }
  );
}

export async function renderBrandIcon({
  width,
  height,
  radius,
}: {
  width: number;
  height: number;
  radius: number;
}) {
  const markSize = Math.round(Math.min(width, height) * 0.62);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: THEME_COLOR,
          borderRadius: radius,
        }}
      >
        <svg width={markSize} height={markSize} viewBox={LOGO_VIEWBOX}>
          <path d={LOGO_V_PATH} fill="#FFFFFF" />
          <path d={LOGO_TRIANGLE_PATH} fill={BACKGROUND_COLOR} />
        </svg>
      </div>
    ),
    { width, height }
  );
}
