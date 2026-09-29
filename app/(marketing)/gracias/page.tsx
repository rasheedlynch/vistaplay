import type { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { deviceLabel, ORDER_COOKIE_NAME, planLabel } from "@/lib/order-helpers";
import { buildMetadata } from "@/lib/seo";
import { getWhatsAppUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Pedido recibido",
  path: "/gracias",
  noIndex: true,
});

type OrderCookie = {
  firstName?: string;
  plan?: string;
  device?: string;
};

async function readOrderCookie(): Promise<OrderCookie> {
  const cookieStore = await cookies();
  const raw = cookieStore.get(ORDER_COOKIE_NAME)?.value;
  if (!raw) return {};
  try {
    return JSON.parse(raw) as OrderCookie;
  } catch {
    return {};
  }
}

export default async function GraciasPage() {
  const { firstName, plan, device } = await readOrderCookie();
  const planText = plan ? planLabel(plan) : null;
  const deviceText = device ? deviceLabel(device) : null;

  const messageLines = [
    "Hola, acabo de enviar mi pedido en VistaPlay.",
    firstName && `Soy ${firstName}.`,
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
          {firstName ? `${firstName}, en` : "En"} breve recibirás un email
          con el enlace de pago y las instrucciones para activar tu acceso.
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
