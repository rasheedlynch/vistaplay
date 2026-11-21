import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { CtaBanner } from "@/components/marketing/cta-banner";
import { DeviceIcon } from "@/components/marketing/device-icon";
import { deviceGuides } from "@/lib/devices";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "IPTV Smart TV, Fire TV Stick y móvil",
  description:
    "Mira VistaPlay en IPTV Smart TV, Fire TV Stick, Android TV, móvil, iPhone, iPad u ordenador. Elige tu dispositivo y te ayudamos a instalarlo.",
  path: "/dispositivos",
});

export default function DispositivosPage() {
  return (
    <>
      <PageHeader
        crumb="Dispositivos"
        path="/dispositivos"
        eyebrow="Dispositivos compatibles"
        title="IPTV en Smart TV, Fire TV Stick, móvil y ordenador"
        lead="VistaPlay es compatible con los dispositivos que ya tienes. Elige el tuyo y te explicamos cómo instalarlo."
      />
      <Section className="py-14 md:py-20">
        <Container>
          <div className="space-y-6">
            {deviceGuides.map((device) => (
              <section
                key={device.slug}
                id={device.slug}
                aria-labelledby={`${device.slug}-title`}
                className="grid scroll-mt-24 grid-cols-1 gap-5 rounded-2xl border border-border bg-surface p-7 md:grid-cols-[auto_1fr] md:gap-8 md:p-9"
              >
                <DeviceIcon icon={device.icon} className="h-8 w-8 text-highlight" />
                <div>
                  <h2 id={`${device.slug}-title`} className="text-h3">
                    {device.name}
                  </h2>
                  <p className="text-body mt-3">{device.summary}</p>
                  {device.hasGuide && (
                    <Link
                      href={`/dispositivos/${device.slug}`}
                      className="mt-4 inline-block text-sm font-semibold text-highlight underline-offset-4 hover:underline"
                    >
                      Ver guía de instalación
                    </Link>
                  )}
                </div>
              </section>
            ))}
          </div>
          <p className="text-small mt-8">
            ¿No ves tu dispositivo? Escríbenos desde la página de{" "}
            <Link href="/contacto" className="text-highlight underline underline-offset-4">
              contacto
            </Link>{" "}
            y te decimos cómo hacerlo.
          </p>
        </Container>
      </Section>
      <CtaBanner
        title="Pruébalo en tu dispositivo"
        text="Pide la prueba gratis de 24 horas y comprueba cómo se ve en tu televisor o tu móvil. También puedes ver los planes."
      />
    </>
  );
}
