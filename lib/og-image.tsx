import { ImageResponse } from "next/og";

import { BACKGROUND_COLOR, DEFAULT_TITLE, THEME_COLOR } from "@/lib/seo";

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
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48 }}>
          <div
            style={{
              width: 14,
              height: 44,
              borderRadius: 7,
              backgroundColor: THEME_COLOR,
              display: "flex",
            }}
          />
          <div style={{ fontSize: 36, fontWeight: 700, color: "#0E1B2C", display: "flex" }}>
            VistaPlay
          </div>
        </div>
        <div
          style={{
            fontSize: 60,
            fontWeight: 700,
            color: "#0E1B2C",
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
  fontSize,
  radius,
}: {
  width: number;
  height: number;
  fontSize: number;
  radius: number;
}) {
  const soraData = await loadSora();

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
          fontFamily: soraData ? "Sora" : "sans-serif",
        }}
      >
        <div style={{ color: "#FFFFFF", fontSize, fontWeight: 700, display: "flex" }}>
          V
        </div>
      </div>
    ),
    {
      width,
      height,
      fonts: soraFonts(soraData),
    }
  );
}
