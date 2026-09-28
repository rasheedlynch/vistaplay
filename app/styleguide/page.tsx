import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Guía de estilo — VistaPlay",
  robots: {
    index: false,
    follow: false,
  },
};

type Swatch = {
  name: string;
  token: string;
  hex: string;
  className: string;
  textClassName?: string;
  note: string;
};

const swatches: Swatch[] = [
  {
    name: "Papel",
    token: "--paper",
    hex: "#FAF7F2",
    className: "bg-paper",
    note: "Fondo de página. Base del sistema.",
  },
  {
    name: "Tinta",
    token: "--ink",
    hex: "#0E1B2C",
    className: "bg-ink",
    textClassName: "text-paper",
    note: "Texto principal. Contraste sobre papel: 16.2:1.",
  },
  {
    name: "Tinta suave",
    token: "--ink-muted",
    hex: "#52637A",
    className: "bg-ink-muted",
    textClassName: "text-paper",
    note: "Texto secundario. Contraste sobre papel: 5.7:1.",
  },
  {
    name: "Marca",
    token: "--brand",
    hex: "#0F766E",
    className: "bg-brand",
    textClassName: "text-white",
    note: "Botones primarios y texto de enlaces sobre papel. Texto blanco: 5.5:1. Como texto sobre papel: 5.1:1.",
  },
  {
    name: "Marca (hover)",
    token: "--brand-hover",
    hex: "#0C5F58",
    className: "bg-brand-hover",
    textClassName: "text-white",
    note: "Estado hover/active de los botones primarios.",
  },
  {
    name: "Tinte",
    token: "--tint",
    hex: "#EAF1FA",
    className: "bg-tint",
    note: "Fondo de sección suave.",
  },
  {
    name: "Línea",
    token: "--line",
    hex: "#E5DED4",
    className: "bg-line",
    note: "Bordes y separadores. No pensado para texto.",
  },
  {
    name: "Blanco (card)",
    token: "--card",
    hex: "#FFFFFF",
    className: "bg-white border border-line",
    note: "Fondo de tarjetas sobre papel o tinte.",
  },
  {
    name: "Rojo (destructive)",
    token: "--destructive",
    hex: "#B81E1E",
    className: "bg-destructive",
    textClassName: "text-white",
    note: "Errores y acciones destructivas. Texto blanco: 6.5:1.",
  },
];

export default function StyleguidePage() {
  return (
    <main>
      <Section variant="paper" className="pb-8 pt-16 md:pt-20">
        <Container>
          <p className="text-small mb-3 uppercase tracking-wide">
            Uso interno — no indexar
          </p>
          <h1 className="text-h1">Guía de estilo de VistaPlay</h1>
          <p className="text-lead mt-4">
            Referencia visual del sistema de diseño: colores, tipografía,
            componentes y estructura. Esta página no forma parte del sitio
            público.
          </p>
        </Container>
      </Section>

      <Section variant="paper">
        <Container>
          <h2 className="text-h2 mb-2">Colores</h2>
          <p className="text-body mb-8 text-ink-muted">
            Todos los tonos están pensados para modo claro únicamente, con
            ratios de contraste verificados sobre el fondo de página.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {swatches.map((swatch) => (
              <div
                key={swatch.token}
                className="overflow-hidden rounded-2xl border border-line bg-white shadow-soft"
              >
                <div
                  className={`flex h-24 items-end p-4 ${swatch.className} ${
                    swatch.textClassName ?? "text-ink"
                  }`}
                >
                  <span className="font-heading text-sm font-semibold">
                    {swatch.name}
                  </span>
                </div>
                <div className="space-y-1 p-4">
                  <p className="text-small font-mono text-ink">
                    {swatch.token} · {swatch.hex}
                  </p>
                  <p className="text-small">{swatch.note}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="tint">
        <Container>
          <h2 className="text-h2 mb-8">Tipografía</h2>
          <div className="space-y-6 rounded-2xl border border-line bg-white p-6 shadow-soft sm:p-10">
            <div>
              <p className="text-display">Televisión que se ve bien</p>
              <p className="text-small mt-1">display · Sora</p>
            </div>
            <Separator />
            <div>
              <h1 className="text-h1">Tu hogar, tu programación</h1>
              <p className="text-small mt-1">h1 · Sora</p>
            </div>
            <Separator />
            <div>
              <h2 className="text-h2">Canales, cine y series en un solo lugar</h2>
              <p className="text-small mt-1">h2 · Sora</p>
            </div>
            <Separator />
            <div>
              <h3 className="text-h3">Disponible en móvil y TV</h3>
              <p className="text-small mt-1">h3 · Sora</p>
            </div>
            <Separator />
            <div>
              <p className="text-lead">
                VistaPlay acompaña a tu familia con una experiencia de
                televisión clara, estable y sin sorpresas en la factura.
              </p>
              <p className="text-small mt-1">lead · Inter</p>
            </div>
            <Separator />
            <div>
              {/* TODO(client): confirm support response time */}
              <p className="text-body">
                Nuestro equipo está disponible para resolver dudas antes y
                después de contratar. Puedes escribirnos por WhatsApp o
                completar el formulario de contacto y te responderemos en
                menos de 24 horas laborables.
              </p>
              <p className="text-small mt-1">body · Inter, 16px, interlineado 1.6</p>
            </div>
            <Separator />
            <div>
              {/* TODO(client): confirm VAT-included pricing claim */}
              <p className="text-small">
                Los precios incluyen IVA. Consulta las condiciones de
                contratación antes de suscribirte.
              </p>
              <p className="text-small mt-1">small · Inter</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="paper">
        <Container>
          <h2 className="text-h2 mb-8">Botones</h2>
          <div className="space-y-8">
            {(["primary", "secondary", "ghost", "link"] as const).map(
              (variant) => (
                <div key={variant}>
                  <p className="text-small mb-3 font-mono">{variant}</p>
                  <div className="flex flex-wrap items-center gap-4">
                    <Button variant={variant} size="sm">
                      Ver planes
                    </Button>
                    <Button variant={variant} size="default">
                      Ver planes
                    </Button>
                    <Button variant={variant} size="lg">
                      Ver planes
                    </Button>
                  </div>
                </div>
              )
            )}
          </div>
        </Container>
      </Section>

      <Section variant="tint">
        <Container>
          <h2 className="text-h2 mb-8">Tarjeta y badge</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="mb-2">
                  {/* TODO(client): confirm this plan is genuinely the most-chosen before claiming it */}
                  <Badge>Plan más elegido</Badge>
                </div>
                <CardTitle className="font-heading text-xl">
                  Plan 12 meses
                </CardTitle>
                <CardDescription>
                  {/* TODO(client): confirm annual-vs-monthly savings claim with real pricing */}
                  Ahorra frente al pago mensual con la suscripción anual.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-body">
                  {/* TODO(client): confirm 24h activation time */}
                  Incluye acceso completo desde tu móvil o tu televisor,
                  soporte por WhatsApp y activación en menos de 24 horas.
                </p>
              </CardContent>
            </Card>
            <div className="flex flex-col justify-center gap-4">
              <p className="text-body">
                Las tarjetas usan fondo blanco, borde suave y una sombra
                discreta para separarse del fondo sin recurrir a bordes
                marcados.
              </p>
              <div className="flex flex-wrap gap-2">
                {/* TODO(client): confirm "no permanencia" contract terms */}
                <Badge>Sin permanencia</Badge>
                {/* TODO(client): confirm 24h activation time */}
                <Badge>Activación en 24h</Badge>
                <Badge>Soporte por WhatsApp</Badge>
              </div>
            </div>
          </div>

          <h3 className="text-h3 mb-4 mt-12">Badge sobre papel y tinte</h3>
          <p className="text-small mb-4">
            Fondo blanco + borde para mantenerse visible en ambos casos.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-line bg-paper p-6">
              <p className="text-small mb-3">Sobre papel</p>
              <div className="flex flex-wrap gap-2">
                <Badge>Sin permanencia</Badge>
                <Badge>Activación en 24h</Badge>
              </div>
            </div>
            <div className="rounded-2xl border border-line bg-tint p-6">
              <p className="text-small mb-3">Sobre tinte</p>
              <div className="flex flex-wrap gap-2">
                <Badge>Sin permanencia</Badge>
                <Badge>Activación en 24h</Badge>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="paper">
        <Container>
          <h2 className="text-h2 mb-8">Campos de formulario</h2>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="sg-name">Nombre y apellidos</Label>
                <Input id="sg-name" placeholder="Ej. María López" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sg-phone">WhatsApp</Label>
                <Input id="sg-phone" placeholder="Ej. 600 000 000" />
              </div>
              <div className="flex items-start gap-3">
                <Checkbox id="sg-consent" className="mt-0.5" />
                <Label htmlFor="sg-consent" className="text-ink-muted">
                  Acepto la política de privacidad y el tratamiento de mis
                  datos para ser contactado/a.
                </Label>
              </div>
            </div>
            <div className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="sg-email-error">
                  Correo electrónico
                </Label>
                <Input
                  id="sg-email-error"
                  defaultValue="maria@correo"
                  aria-invalid="true"
                  aria-describedby="sg-email-error-message"
                />
                <p
                  id="sg-email-error-message"
                  className="text-small text-destructive"
                >
                  Revisa el formato del correo electrónico.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Checkbox
                  id="sg-consent-error"
                  aria-invalid="true"
                  className="mt-0.5"
                />
                <Label
                  htmlFor="sg-consent-error"
                  className="text-destructive"
                >
                  Debes aceptar la política de privacidad para continuar.
                </Label>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="tint">
        <Container>
          <h2 className="text-h2 mb-8">Variantes de sección</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-line bg-paper p-8">
              <p className="font-heading text-sm font-semibold text-ink">
                Section variant=&quot;paper&quot;
              </p>
              <p className="text-small mt-1">
                Fondo papel. Uso por defecto para el cuerpo del sitio.
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-tint p-8">
              <p className="font-heading text-sm font-semibold text-ink">
                Section variant=&quot;tint&quot;
              </p>
              <p className="text-small mt-1">
                Fondo tinte. Uso para separar bloques sin añadir contraste
                duro.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
