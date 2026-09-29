"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useActionState, useEffect, useState } from "react";

import { submitOrder } from "@/app/actions/order";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
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

  const [selectedPlan, setSelectedPlan] = useState(
    planParam && planIds.includes(planParam) ? planParam : DEFAULT_PLAN_ID
  );
  const [renderedAt] = useState(() => Date.now());
  const [state, formAction, isPending] = useActionState(submitOrder, initialOrderFormState);

  useEffect(() => {
    if (planParam && planIds.includes(planParam)) {
      setSelectedPlan(planParam);
    }
  }, [planParam]);

  const fieldErrors = state.fieldErrors;
  const formValues = state.values;
  // React resets <form action={...}> after the action returns, clearing
  // uncontrolled inputs — remounting with a key tied to the echoed values
  // lets defaultValue/defaultChecked restore what the user typed.
  const formKey = formValues ? JSON.stringify(formValues) : "initial";
  const whatsappUrl = getWhatsAppUrl(
    "Hola, quiero contratar un plan de VistaPlay pero he tenido un problema con el formulario del pedido."
  );

  return (
    <Section id="pedido" variant="tint">
      <Container className="max-w-2xl">
        <h2 className="text-h2">Solicita tu plan</h2>
        <p className="text-lead mt-4">
          Rellena tus datos y te enviamos el enlace de pago por email. No
          pagas nada en este paso.
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
                    pattern="^(\+34|0034|34)?[\s\-\.]?[67]\d{2}[\s\-\.]?\d{3}[\s\-\.]?\d{3}$"
                    title="Teléfono español, con o sin prefijo +34"
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

              {/* No `required` on these: Radix Checkbox's hidden native input for
                  form submission isn't focusable, so native validation can't show
                  its bubble on it and silently blocks submit. Server-side zod
                  (fieldErrors below) validates consent instead. */}
              <div className="space-y-4 border-t border-line pt-6">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="order-privacy"
                    name="privacyConsent"
                    defaultChecked={formValues?.privacyConsent}
                    className="mt-0.5"
                    aria-invalid={Boolean(fieldErrors?.privacyConsent)}
                    aria-describedby={
                      fieldErrors?.privacyConsent ? "order-privacy-error" : undefined
                    }
                  />
                  <Label htmlFor="order-privacy" className="text-ink-muted">
                    He leído y acepto la{" "}
                    <Link href="/privacidad" className="text-brand underline-offset-4 hover:underline">
                      política de privacidad
                    </Link>
                    .
                  </Label>
                </div>
                {fieldErrors?.privacyConsent && (
                  <p id="order-privacy-error" className="text-small text-destructive">
                    {fieldErrors.privacyConsent}
                  </p>
                )}

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="order-activation"
                    name="activationConsent"
                    defaultChecked={formValues?.activationConsent}
                    className="mt-0.5"
                    aria-invalid={Boolean(fieldErrors?.activationConsent)}
                    aria-describedby={
                      fieldErrors?.activationConsent ? "order-activation-error" : undefined
                    }
                  />
                  {/* TODO(lawyer): review this withdrawal-of-right waiver before launch */}
                  <Label htmlFor="order-activation" className="text-ink-muted">
                    Solicito la activación inmediata del servicio y acepto
                    que, una vez activado, pierdo el derecho de
                    desistimiento, sin perjuicio de la garantía de
                    satisfacción de 24 horas.
                  </Label>
                </div>
                {fieldErrors?.activationConsent && (
                  <p id="order-activation-error" className="text-small text-destructive">
                    {fieldErrors.activationConsent}
                  </p>
                )}
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
              </div>
            </form>
          </CardContent>
        </Card>
      </Container>
    </Section>
  );
}
