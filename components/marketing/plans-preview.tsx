import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PlansGrid } from "@/components/marketing/plans";
import { Button } from "@/components/ui/button";

export function PlansPreview() {
  return (
    <Section variant="surface">
      <Container>
        <p className="text-eyebrow mb-4">Planes</p>
        <h2 className="text-h2 max-w-2xl">Elige cuánto tiempo quieres. Siempre sin permanencia.</h2>
        <p className="text-lead mt-4">Precio final con IVA incluido. Cuanto más largo el plan, menor el precio por mes.</p>
        <div className="mt-12">
          <PlansGrid />
        </div>
        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <Button asChild variant="secondary">
            <Link href="/planes">Ver todos los detalles de los planes</Link>
          </Button>
          <Link href="/prueba-gratis" className="text-sm font-semibold text-highlight underline-offset-4 hover:underline">
            O empieza con la prueba gratis de 24 horas
          </Link>
        </div>
      </Container>
    </Section>
  );
}
