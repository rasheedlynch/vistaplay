"use client";

import Link from "next/link";
import { useActionState, useState } from "react";

import { submitOrder } from "@/app/actions/order";
import { PixelEvent } from "@/components/analytics/pixel-event";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { deviceOptions } from "@/lib/devices";
import { initialOrderFormState } from "@/lib/order-helpers";
import { ALL_PLANS, formatPrice, getPlan, getWhatsAppUrl } from "@/lib/site";

type OrderFormProps = {
  /** Plan id to preselect (1m | 3m | 6m | 12m | trial). Falls back to the 1-month plan. */
  defaultPlan?: string;
};

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="text-sm text-destructive">
      {message}
    </p>
  );
}

export function OrderForm({ defaultPlan }: OrderFormProps) {
  const [selectedPlan, setSelectedPlan] = useState<string>(getPlan(defaultPlan)?.id ?? "1m");
  // InitiateCheckout fires once, for the plan selected when the page loads.
  const [checkoutData] = useState(() => ({
    content_name: getPlan(defaultPlan)?.name ?? getPlan("1m")?.name ?? "",
  }));
  const [renderedAt] = useState(() => Date.now());
  const [state, formAction, isPending] = useActionState(submitOrder, initialOrderFormState);

  const fieldErrors = state.fieldErrors;
  const values = state.values;
  // React resets <form action={...}> after the action returns, clearing
  // uncontrolled inputs — remounting with a key tied to the echoed values
  // lets defaultValue restore what the user typed.
  const formKey = values ? JSON.stringify(values) : "initial";
  const whatsappUrl = getWhatsAppUrl(
    "Hola, quiero pedir VistaPlay pero he tenido un problema con el formulario."
  );
  const isTrial = getPlan(selectedPlan)?.isTrial;

  return (
    <>
    <PixelEvent event="InitiateCheckout" data={checkoutData} />
    <form
      key={formKey}
      action={formAction}
      className="space-y-6 rounded-2xl border border-border bg-surface p-6 sm:p-8"
    >
      {/* Honeypot — left empty by real visitors, invisible and unreachable by tab */}
      <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="company">No rellenar este campo</label>
        <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>
      <input type="hidden" name="renderedAt" value={renderedAt} />

      <div className="space-y-2">
        <Label htmlFor="order-name">Nombre y apellidos</Label>
        <Input
          id="order-name"
          name="name"
          autoComplete="name"
          defaultValue={values?.name}
          required
          minLength={3}
          aria-invalid={Boolean(fieldErrors?.name)}
          aria-describedby={fieldErrors?.name ? "order-name-error" : undefined}
        />
        <FieldError id="order-name-error" message={fieldErrors?.name} />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="order-phone">Teléfono (WhatsApp)</Label>
          <Input
            id="order-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="612 345 678"
            defaultValue={values?.phone}
            required
            maxLength={30}
            aria-invalid={Boolean(fieldErrors?.phone)}
            aria-describedby={fieldErrors?.phone ? "order-phone-error" : undefined}
          />
          <FieldError id="order-phone-error" message={fieldErrors?.phone} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="order-email">Email</Label>
          <Input
            id="order-email"
            name="email"
            type="email"
            autoComplete="email"
            defaultValue={values?.email}
            required
            maxLength={254}
            aria-invalid={Boolean(fieldErrors?.email)}
            aria-describedby={fieldErrors?.email ? "order-email-error" : undefined}
          />
          <FieldError id="order-email-error" message={fieldErrors?.email} />
        </div>
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
            {ALL_PLANS.map((plan) => (
              <option key={plan.id} value={plan.id}>
                {plan.isTrial ? "Prueba gratis 24h" : `${plan.name} — ${formatPrice(plan.price)}`}
              </option>
            ))}
          </Select>
          <FieldError id="order-plan-error" message={fieldErrors?.plan} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="order-device">Dispositivo</Label>
          <Select
            id="order-device"
            name="device"
            required
            defaultValue={values?.device ?? ""}
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
          <FieldError id="order-device-error" message={fieldErrors?.device} />
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-start gap-3">
          <input
            id="order-consent"
            name="consent"
            type="checkbox"
            required
            defaultChecked={values?.consent}
            aria-invalid={Boolean(fieldErrors?.consent)}
            aria-describedby={fieldErrors?.consent ? "order-consent-error" : undefined}
            className="mt-1 h-5 w-5 shrink-0 cursor-pointer rounded-md border border-border-strong bg-background accent-highlight"
          />
          <label htmlFor="order-consent" className="text-sm leading-relaxed text-muted-foreground">
            He leído y acepto la{" "}
            <Link href="/politica-de-privacidad" className="text-highlight underline underline-offset-4">
              Política de privacidad
            </Link>{" "}
            y autorizo el tratamiento de mis datos para gestionar mi solicitud.
          </label>
        </div>
        <FieldError id="order-consent-error" message={fieldErrors?.consent} />
      </div>

      {state.status === "error" && state.message && (
        <div role="alert" className="rounded-xl border border-destructive/40 bg-destructive/10 p-4">
          <p className="text-sm text-destructive">{state.message}</p>
          {!fieldErrors && (
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
          {isPending ? "Enviando…" : isTrial ? "Pedir prueba gratis" : "Enviar pedido"}
        </Button>
        <p className="text-small mt-3 text-center">
          {isTrial
            ? "La prueba es gratuita. No pagas nada."
            : "No pagas nada ahora: te contactamos con los datos de pago."}
        </p>
      </div>
    </form>
    </>
  );
}
