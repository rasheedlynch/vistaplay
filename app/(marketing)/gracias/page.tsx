import { MessageCircle } from "lucide-react";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { buildOrderWhatsAppMessage, ORDER_COOKIE_NAME } from "@/lib/order-helpers";
import { buildMetadata } from "@/lib/seo";
import { getWhatsAppUrl, WHATSAPP_URL } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Pedido recibido",
  path: "/gracias",
  noIndex: true,
});

type OrderCookie = {
  firstName?: string;
  plan?: string;
  device?: string;
  reference?: string;
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
  const { firstName, plan, reference } = await readOrderCookie();
  const whatsappUrl = plan && reference ? getWhatsAppUrl(buildOrderWhatsAppMessage(plan, reference)) : WHATSAPP_URL;

  return (
    <Section className="py-20 md:py-28">
      <Container className="max-w-2xl text-center">
        <p className="text-eyebrow mb-4">{firstName ? `Gracias, ${firstName}` : "Gracias"}</p>
        <h1 className="text-h1">Hemos recibido tu pedido</h1>
        <p className="text-lead mx-auto mt-5">
          Te contactaremos por email y WhatsApp con los datos de pago en breve.
        </p>
        {reference && (
          <p className="text-small mt-4">
            Referencia de tu pedido: <strong className="text-foreground">{reference}</strong>
          </p>
        )}
        <div className="mt-10 flex flex-col items-center gap-4">
          <Button asChild size="lg" className="h-16 w-full max-w-md text-lg">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="!size-6" aria-hidden="true" />
              Escríbenos por WhatsApp
            </a>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/">Volver al inicio</Link>
          </Button>
        </div>
        <p className="text-small mt-8">Revisa también tu carpeta de spam, por si acaso.</p>
      </Container>
    </Section>
  );
}
