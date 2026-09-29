import type { Metadata } from "next";

import { ComoFunciona } from "@/components/marketing/como-funciona";
import { Dispositivos } from "@/components/marketing/dispositivos";
import { Faq } from "@/components/marketing/faq";
import { FinalCta } from "@/components/marketing/final-cta";
import { Hero } from "@/components/marketing/hero";
import { Incluye } from "@/components/marketing/incluye";
import { Planes } from "@/components/marketing/planes";
import { TrustStrip } from "@/components/marketing/trust-strip";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata } from "@/lib/seo";
import { getFaqJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({ path: "/" });

export default function Home() {
  return (
    <>
      <JsonLd data={getFaqJsonLd()} />
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
