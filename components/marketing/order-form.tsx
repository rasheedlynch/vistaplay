"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useActionState, useState } from "react";

import { submitOrder } from "@/app/actions/order";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { deviceOptions } from "@/lib/devices";
import { initialOrderFormState } from "@/lib/order-helpers";
import { formatPrice, plans } from "@/lib/plans";
import { getWhatsAppUrl } from "@/lib/site";

const DEFAULT_PLAN_ID = "1-mes";
const planIds = plans.map((plan) => plan.id);

export function OrderForm() {
  const searchParams = useSearchParams();
  const planParam = searchParams.get("plan");

  // Only used to preselect on first load (e.g. a "Solicitar este plan"
  // deep link). Intentionally never re-synced after mount — the user's
  // own selection must always win, even if the URL doesn't change to
  // match it.
  const [selectedPlan, setSelectedPlan] = useState(
    planParam && planIds.includes(planParam) ? planParam : DEFAULT_PLAN_ID
  );
  const [renderedAt] = useState(() => Date.now());
  const [state, formAction, isPending] = useActionState(submitOrder, initialOrderFormState);

  const fieldErrors = state.fieldErrors;
  const formValues = state.values;
  // React resets <form action={...}> after the action returns, clearing
  // uncontrolled inputs — remounting with a key tied to the echoed values
  // lets defaultValue restore what the user typed.
  const formKey = formValues ? JSON.stringify(formValues) : "initial";
  const whatsappUrl = getWhatsAppUrl(
    "Hola, quiero contratar un plan de VistaPlay pero he tenido un problema con el formulario del pedido."
  );

  return (
    <Section id="pedido" variant="tint">
      <Container className="max-w-2xl">
        <h2 className="text-h2">Solicita tu plan</h2>
        <p className="text-lead mt-4">
          Rellena tus datos y te enviamos el enlace de pago seguro por
          email. No pagas nada en este paso.
        </p>

        <Card className="mt-10">
          <CardContent className="p-6 sm:p-8">
            <form key={formKey} action={formAction} className="space-y-6">
              {/* Honeypot — left empty by real visitors, invisible and unreachable by tab */}
              <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                <label htmlFor="company">No rellenar este campo</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              <input type="hidden" name="renderedAt" value={renderedAt} />

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="order-name">Nombre y apellidos</Label>
                  <Input
                    id="order-name"
                    name="name"
                    autoComplete="name"
                    defaultValue={formValues?.name}
                    required
                    minLength={3}
                    aria-invalid={Boolean(fieldErrors?.name)}
                    aria-describedby={fieldErrors?.name ? "order-name-error" : undefined}
                  />
                  {fieldErrors?.name && (
                    <p id="order-name-error" className="text-small text-destructive">
                      {fieldErrors.name}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="order-phone">Teléfono (WhatsApp)</Label>
                  <Input
                    id="order-phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="612 345 678"
                    defaultValue={formValues?.phone}
                    required
                    maxLength={15}
                    aria-invalid={Boolean(fieldErrors?.phone)}
                    aria-describedby={fieldErrors?.phone ? "order-phone-error" : undefined}
                  />
                  {fieldErrors?.phone && (
                    <p id="order-phone-error" className="text-small text-destructive">
                      {fieldErrors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="order-email">Email</Label>
                <Input
                  id="order-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  defaultValue={formValues?.email}
                  required
                  maxLength={254}
                  aria-invalid={Boolean(fieldErrors?.email)}
                  aria-describedby={fieldErrors?.email ? "order-email-error" : undefined}
                />
                {fieldErrors?.email && (
                  <p id="order-email-error" className="text-small text-destructive">
                    {fieldErrors.email}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="order-plan">Plan</Label>
                  <Select
                    id="order-plan"
                    name="plan"
                    required
                    value={selectedPlan}
                    onChange={(event) => setSelectedPlan(event.target.value)}
                    aria-invalid={Boolean(fieldErrors?.plan)}
                    aria-describedby={fieldErrors?.plan ? "order-plan-error" : undefined}
                  >
                    {plans.map((plan) => (
                      <option key={plan.id} value={plan.id}>
                        {plan.name}
                        {plan.price !== null ? ` — ${formatPrice(plan.price)}` : ""}
                      </option>
                    ))}
                  </Select>
                  {fieldErrors?.plan && (
                    <p id="order-plan-error" className="text-small text-destructive">
                      {fieldErrors.plan}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="order-device">Dispositivo</Label>
                  <Select
                    id="order-device"
                    name="device"
                    required
                    defaultValue={formValues?.device ?? ""}
                    aria-invalid={Boolean(fieldErrors?.device)}
                    aria-describedby={fieldErrors?.device ? "order-device-error" : undefined}
                  >
                    <option value="" disabled>
                      Elige un dispositivo
                    </option>
                    {deviceOptions.map((device) => (
                      <option key={device.value} value={device.value}>
                        {device.label}
                      </option>
                    ))}
                  </Select>
                  {fieldErrors?.device && (
                    <p id="order-device-error" className="text-small text-destructive">
                      {fieldErrors.device}
                    </p>
                  )}
                </div>
              </div>

              {state.status === "error" && state.message && (
                <div role="alert" className="rounded-xl border border-destructive/30 bg-destructive/5 p-4">
                  <p className="text-body text-destructive">{state.message}</p>
                  {!fieldErrors && whatsappUrl && (
                    <Button asChild variant="secondary" size="sm" className="mt-3">
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        Escríbenos por WhatsApp
                      </a>
                    </Button>
                  )}
                </div>
              )}

              <div>
                <Button type="submit" size="lg" className="w-full" disabled={isPending}>
                  {isPending ? "Enviando…" : "Enviar pedido"}
                </Button>
                <p className="text-small mt-3 text-center">
                  No pagas nada ahora. Te enviaremos el enlace de pago por
                  email.
                </p>
                <p className="text-small mt-1 text-center">
                  Usaremos tus datos solo para gestionar tu pedido. Más
                  información en la{" "}
                  <Link
                    href="/politica-de-privacidad"
                    className="text-brand underline-offset-4 hover:underline"
                  >
                    política de privacidad
                  </Link>
                  .
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </Container>
    </Section>
  );
}
