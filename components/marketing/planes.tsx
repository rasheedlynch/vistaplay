import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { formatPrice, plans } from "@/lib/plans";

export function Planes() {
  const mainPlans = plans.filter((plan) => !plan.isTrial);
  const trialPlan = plans.find((plan) => plan.isTrial);

  return (
    <Section id="planes" variant="paper">
      <Container>
        <h2 className="text-h2">Planes</h2>
        <p className="text-lead mt-4">
          Varias formas de contratar VistaPlay, sin letra pequeña.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {mainPlans.map((plan) => (
            <Card key={plan.id} className="flex flex-col">
              <CardHeader>
                <CardTitle className="font-heading text-xl">
                  {plan.name}
                </CardTitle>
                <p className="text-small font-medium text-brand">
                  {plan.subtitle}
                </p>
                <p className="text-small">{plan.billingNote}</p>
              </CardHeader>
              <CardContent className="flex-1">
                {plan.price !== null ? (
                  <>
                    <p className="font-heading text-3xl font-bold text-ink">
                      {formatPrice(plan.price)}
                    </p>
                    {plan.perMonth !== null && (
                      <p className="text-small mt-1">
                        Equivale a {formatPrice(plan.perMonth)}/mes
                      </p>
                    )}
                    <p className="text-small mt-1">
                      Precio final, sin costes adicionales
                    </p>
                  </>
                ) : (
                  <p className="text-lg font-medium text-ink-muted">
                    Precio próximamente
                  </p>
                )}
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="text-body text-ink-muted">
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex-col items-stretch gap-2">
                <Button asChild className="w-full">
                  <Link href={`/?plan=${plan.id}#pedido`}>
                    Solicitar este plan
                    <span className="sr-only"> — {plan.name}</span>
                  </Link>
                </Button>
                <p className="text-small text-center">
                  No pagas nada ahora. Te enviaremos el enlace de pago por
                  email.
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>

        <p className="text-body mt-8 text-ink-muted">
          Si no quedas satisfecho en las primeras 24 horas, te devolvemos el
          dinero.
        </p>

        {trialPlan && (
          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-line bg-tint p-6 sm:flex-row">
            <div>
              <p className="font-heading text-lg font-semibold text-ink">
                {trialPlan.name}
                {trialPlan.price !== null && ` — ${formatPrice(trialPlan.price)}`}
              </p>
              <p className="text-small mt-1">{trialPlan.subtitle}</p>
            </div>
            <Button asChild variant="secondary">
              <Link href={`/?plan=${trialPlan.id}#pedido`}>
                Solicitar la prueba de 24 horas
              </Link>
            </Button>
          </div>
        )}
      </Container>
    </Section>
  );
}
