import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata, DEFAULT_TITLE, THEME_COLOR, TITLE_TEMPLATE } from "@/lib/seo";
import { site } from "@/lib/site";
import { getOrganizationJsonLd, getWebSiteJsonLd } from "@/lib/structured-data";

import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  ...buildMetadata(),
  title: {
    default: DEFAULT_TITLE,
    template: TITLE_TEMPLATE,
  },
};

export const viewport: Viewport = {
  themeColor: THEME_COLOR,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${sora.variable} ${inter.variable} antialiased`}>
        <JsonLd data={getOrganizationJsonLd()} />
        <JsonLd data={getWebSiteJsonLd()} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
