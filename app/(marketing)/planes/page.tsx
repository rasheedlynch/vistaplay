import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { CtaBanner } from "@/components/marketing/cta-banner";
import { PlansGrid, TrialCard } from "@/components/marketing/plans";
import { JsonLd } from "@/components/seo/json-ld";
import { buildMetadata } from "@/lib/seo";
import { GUARANTEE_TEXT, PRICE_NOTE } from "@/lib/site";
import { getServiceJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Planes de IPTV España",
  description:
    "Planes de IPTV España de 1, 3, 6 y 12 meses con IVA incluido y sin permanencia. Empieza con una prueba gratis de 24 horas y soporte por WhatsApp.",
  path: "/planes",
});

export default function PlanesPage() {
  return (
    <>
      <JsonLd data={getServiceJsonLd()} />
      <PageHeader
        crumb="Planes"
        path="/planes"
        eyebrow="Planes y precios"
        title="Planes de IPTV España, claros y sin permanencia"
        lead={`Elige la duración que prefieras. ${PRICE_NOTE}.`}
      />

      <Section className="pb-10 pt-12 md:pb-12 md:pt-14">
        <Container>
          <TrialCard />
        </Container>
      </Section>

      <Section className="pb-12 pt-10 md:pb-14 md:pt-12">
        <Container>
          <h2 className="text-h2">Elige tu plan</h2>
          <p className="text-lead mt-4">
            Cuanto más largo es el plan, menor es el precio por mes. Todos incluyen lo mismo.
          </p>
          <div className="mt-12">
            <PlansGrid />
          </div>
          <p className="text-body mt-10 max-w-none rounded-2xl border border-border bg-surface p-6">
            <strong className="text-foreground">Garantía de 24 horas.</strong> {GUARANTEE_TEXT}
          </p>
          <p className="text-small mt-6">
            ¿Dudas sobre qué plan te conviene? Mira las{" "}
            <Link href="/preguntas-frecuentes" className="text-primary underline underline-offset-4">
              preguntas frecuentes
            </Link>{" "}
            o consulta los{" "}
            <Link href="/dispositivos" className="text-primary underline underline-offset-4">
              dispositivos compatibles
            </Link>
            .
          </p>
        </Container>
      </Section>

      <CtaBanner
        className="pt-12 md:pt-16"
        title="¿Listo para empezar?"
        text="Haz tu pedido en un minuto. No pagas nada hasta que te contactemos con los datos de pago."
      />
    </>
  );
}
