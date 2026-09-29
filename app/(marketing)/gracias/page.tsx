import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { deviceLabel, planLabel } from "@/lib/order-helpers";
import { buildMetadata } from "@/lib/seo";
import { getWhatsAppUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Pedido recibido",
  path: "/gracias",
  noIndex: true,
});

type GraciasPageProps = {
  searchParams: Promise<{ name?: string; plan?: string; device?: string }>;
};

export default async function GraciasPage({ searchParams }: GraciasPageProps) {
  const params = await searchParams;
  const name = params.name?.trim();
  const planText = params.plan ? planLabel(params.plan) : null;
  const deviceText = params.device ? deviceLabel(params.device) : null;

  const messageLines = [
    "Hola, acabo de enviar mi pedido en VistaPlay.",
    name && `Soy ${name}.`,
    planText && `Plan: ${planText}.`,
    deviceText && `Dispositivo: ${deviceText}.`,
    "¿Podemos activar el acceso?",
  ].filter(Boolean);

  const whatsappUrl = getWhatsAppUrl(messageLines.join(" "));

  return (
    <Section variant="paper" className="py-20">
      <Container className="max-w-2xl text-center">
        <h1 className="text-h1">Gracias, hemos recibido tu pedido</h1>
        <p className="text-lead mt-4">
          {name ? `${name}, en` : "En"} unos minutos recibirás un email con
          el enlace de pago y las instrucciones para activar tu acceso.
          Revisa también tu carpeta de spam, por si acaso.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg">
            <a
              href={whatsappUrl ?? "/"}
              target={whatsappUrl ? "_blank" : undefined}
              rel={whatsappUrl ? "noopener noreferrer" : undefined}
            >
              Activar ahora por WhatsApp
            </a>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="/">Volver al inicio</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
