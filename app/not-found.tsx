import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <Section className="py-24 md:py-32">
      <Container className="max-w-2xl text-center">
        <p className="text-eyebrow mb-4">Error 404</p>
        <h1 className="text-h1">No encontramos esta página</h1>
        <p className="text-lead mx-auto mt-5">
          Puede que el enlace haya cambiado o que la dirección no sea correcta. Vuelve al inicio o echa un vistazo a nuestros planes.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/">Volver al inicio</Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="/planes">Ver planes</Link>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <Link href="/contacto">Contacto</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
