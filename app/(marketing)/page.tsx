import type { Metadata } from "next";

import { ComoFunciona } from "@/components/marketing/como-funciona";
import { Dispositivos } from "@/components/marketing/dispositivos";
import { Faq } from "@/components/marketing/faq";
import { FinalCta } from "@/components/marketing/final-cta";
import { Hero } from "@/components/marketing/hero";
import { Incluye } from "@/components/marketing/incluye";
import { Planes } from "@/components/marketing/planes";
import { TrustStrip } from "@/components/marketing/trust-strip";

export const metadata: Metadata = {
  title: "VistaPlay — Televisión en streaming para tu hogar",
  description:
    "VistaPlay es un servicio de televisión en streaming pensado para hogares en España: canales nacionales, deporte, cine, series y documentales en tu móvil o tu TV.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Incluye />
      <ComoFunciona />
      <Planes />
      <Dispositivos />
      <Faq />
      <FinalCta />
    </>
  );
}
