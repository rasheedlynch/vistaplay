import { Check } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatPrice, PLANS, PRICE_NOTE, TRIAL } from "@/lib/site";
import { cn } from "@/lib/utils";

const INCLUDED = ["Acceso en todos tus dispositivos", "Soporte humano 24 horas", "Activación en minutos"];

export function PlansGrid() {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {PLANS.map((plan) => (
        <li
          key={plan.id}
          className={cn(
            "flex flex-col rounded-2xl border bg-surface p-7",
            plan.featured ? "border-primary shadow-lift ring-1 ring-primary" : "border-border"
          )}
        >
          <div className="flex min-h-7 items-center justify-between">
            <h3 className="font-heading text-xl font-medium">{plan.name}</h3>
            {plan.badge && <Badge>{plan.badge}</Badge>}
          </div>
          <p className="font-heading mt-6 text-5xl font-medium text-foreground">{formatPrice(plan.price)}</p>
          <p className="text-small mt-2 min-h-5">
            {plan.perMonth !== null ? `Equivale a ${formatPrice(plan.perMonth)}/mes` : "Pago mensual"}
          </p>
          <p className="text-small">{PRICE_NOTE}</p>
          <ul className="mt-6 flex-1 space-y-3 border-t border-border pt-6">
            {INCLUDED.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-foreground/90">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-highlight" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <Button asChild className="mt-8 w-full" variant={plan.featured ? "primary" : "secondary"}>
            <Link href={`/solicitar?plan=${plan.id}`}>
              Elegir plan<span className="sr-only"> de {plan.name}</span>
            </Link>
          </Button>
        </li>
      ))}
    </ul>
  );
}

export function TrialCard() {
  return (
    <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-primary/70 bg-surface p-8 md:flex-row md:items-center md:p-10">
      <div>
        <p className="text-eyebrow mb-3">Sin compromiso</p>
        <h3 className="text-h3">{TRIAL.name}</h3>
        <p className="text-lead mt-2 text-base md:text-lg">
          Pruébalo 24 horas, gratis (0 €), antes de decidir. Sin pagar nada y sin permanencia.
        </p>
      </div>
      <Button asChild size="lg" className="w-full shrink-0 md:w-auto">
        <Link href="/prueba-gratis">Pedir prueba gratis</Link>
      </Button>
    </div>
  );
}
