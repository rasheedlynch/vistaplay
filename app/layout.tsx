import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
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
  title: "VistaPlay — Televisión en streaming para tu hogar",
  description:
    "VistaPlay es un servicio de televisión en streaming pensado para hogares en España: canales nacionales, deporte, cine, series y documentales en tu móvil o tu TV.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${sora.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
