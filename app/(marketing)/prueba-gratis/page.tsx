import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { OrderForm } from "@/components/marketing/order-form";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "IPTV prueba gratis 24 horas",
  description:
    "Pide tu IPTV prueba gratis de 24 horas en Smart TV, Fire TV Stick o móvil. Sin pagar nada ni permanencia. Te contactamos por email y WhatsApp.",
  path: "/prueba-gratis",
});

export default function PruebaGratisPage() {
  return (
    <>
      <PageHeader
        crumb="Prueba gratis"
        path="/prueba-gratis"
        eyebrow="Gratis · 0 €"
        title="Prueba gratis VistaPlay durante 24 horas"
        lead="Comprueba cómo se ve en tu televisor o tu móvil antes de elegir un plan. La prueba no cuesta nada ni te compromete a nada."
      />
      <Section className="py-14 md:py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="text-h3">Cómo funciona la prueba</h2>
            <ol className="mt-6 space-y-5">
              {[
                "Rellena el formulario con tus datos y el dispositivo donde quieres verlo.",
                "Te contactamos por email y WhatsApp para activarla y ayudarte con la instalación.",
                "Disfrútala 24 horas. Si te convence, eliges el plan que prefieras.",
              ].map((text, index) => (
                <li key={text} className="flex gap-4">
                  <span className="font-heading text-2xl text-highlight">{index + 1}</span>
                  <p className="text-body">{text}</p>
                </li>
              ))}
            </ol>
            <p className="text-small mt-8">
              ¿Prefieres contratar directamente? Consulta los{" "}
              <Link href="/planes" className="text-highlight underline underline-offset-4">
                planes y precios
              </Link>
              .
            </p>
          </div>
          <OrderForm defaultPlan="trial" />
        </Container>
      </Section>
    </>
  );
}
