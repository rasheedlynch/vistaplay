import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { OrderForm } from "@/components/marketing/order-form";
import { buildMetadata } from "@/lib/seo";
import { GUARANTEE_TEXT } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Solicitar tu plan de IPTV",
  description:
    "Solicita tu plan de IPTV España en un minuto. Elige plan y dispositivo, y te contactamos por email y WhatsApp con los datos de pago. Sin permanencia.",
  path: "/solicitar",
});

export default async function SolicitarPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string | string[] }>;
}) {
  const { plan } = await searchParams;
  const defaultPlan = Array.isArray(plan) ? plan[0] : plan;

  return (
    <>
      <PageHeader
        crumb="Solicitar"
        path="/solicitar"
        eyebrow="Pedido"
        title="Solicita tu plan de VistaPlay"
        lead="Rellena tus datos y elige plan y dispositivo. No pagas nada en este paso: te contactamos por email y WhatsApp con los datos de pago."
      />
      <Section className="py-14 md:py-20">
        <Container className="max-w-2xl">
          <OrderForm defaultPlan={defaultPlan} />
          <p className="text-small mt-6 text-center">{GUARANTEE_TEXT}</p>
          <p className="text-small mt-3 text-center">
            ¿Prefieres probarlo antes?{" "}
            <Link href="/prueba-gratis" className="text-primary underline underline-offset-4">
              Pide la prueba gratis de 24 horas
            </Link>{" "}
            o revisa los{" "}
            <Link href="/planes" className="text-primary underline underline-offset-4">
              planes
            </Link>
            .
          </p>
        </Container>
      </Section>
    </>
  );
}
