import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { CtaBanner } from "@/components/marketing/cta-banner";
import { FaqList } from "@/components/marketing/faq-list";
import { JsonLd } from "@/components/seo/json-ld";
import { faqs } from "@/lib/faq";
import { buildMetadata } from "@/lib/seo";
import { getFaqJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Preguntas frecuentes sobre IPTV",
  description:
    "Resolvemos tus dudas sobre VistaPlay: qué incluye, activación, dispositivos, velocidad de internet, pagos, cancelación y prueba gratis de 24 horas.",
  path: "/preguntas-frecuentes",
});

export default function PreguntasFrecuentesPage() {
  return (
    <>
      <JsonLd data={getFaqJsonLd()} />
      <PageHeader
        crumb="Preguntas frecuentes"
        path="/preguntas-frecuentes"
        eyebrow="Ayuda"
        title="Preguntas frecuentes sobre IPTV en España"
        lead="Respuestas claras a lo que más nos preguntan. Si no encuentras la tuya, escríbenos."
      />
      <Section className="py-14 md:py-20">
        <Container className="max-w-3xl">
          <h2 className="sr-only">Lista de preguntas</h2>
          <FaqList items={faqs} />
          <p className="text-small mt-8">
            ¿Todo claro? Pide la{" "}
            <Link href="/prueba-gratis" className="text-highlight underline underline-offset-4">
              prueba gratis de 24 horas
            </Link>{" "}
            o consulta los{" "}
            <Link href="/planes" className="text-highlight underline underline-offset-4">
              planes
            </Link>
            . También puedes{" "}
            <Link href="/contacto" className="text-highlight underline underline-offset-4">
              contactarnos
            </Link>
            .
          </p>
        </Container>
      </Section>
      <CtaBanner />
    </>
  );
}
