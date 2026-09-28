import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { plans } from "@/lib/plans";

export function Planes() {
  return (
    <Section id="planes" variant="paper">
      <Container>
        <h2 className="text-h2">Planes</h2>
        <p className="text-lead mt-4">
          Tres formas de contratar VistaPlay, sin letra pequeña.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.id} className="flex flex-col">
              <CardHeader>
                <CardTitle className="font-heading text-xl">
                  {plan.name}
                </CardTitle>
                <p className="text-small">{plan.billingNote}</p>
              </CardHeader>
              <CardContent className="flex-1">
                {plan.price !== null ? (
                  <p className="font-heading text-3xl font-bold text-ink">
                    {plan.price} €
                  </p>
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
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={`/contratar?plan=${plan.id}`}>
                    Solicitar este plan
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
