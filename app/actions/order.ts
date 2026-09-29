"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Resend } from "resend";

import { renderConfirmationEmail, renderNotificationEmail } from "@/lib/emails";
import { orderSchema } from "@/lib/order";
import type { OrderFormState, OrderFormValues } from "@/lib/order-helpers";

const MIN_SUBMIT_MS = 2000;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

// Simple in-memory limiter — resets on server restart/cold start, and is
// per-instance only. Good enough for this scale; not a distributed limiter.
const submissionsByKey = new Map<string, number[]>();

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (submissionsByKey.get(key) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
  );
  recent.push(now);
  submissionsByKey.set(key, recent);
  return recent.length > RATE_LIMIT_MAX;
}

// React resets <form action={...}> after the action returns (unless it
// redirects), so uncontrolled inputs can't just keep their live DOM value —
// we echo back what was submitted and the form re-mounts with it as
// defaultValue/defaultChecked.
function extractValues(formData: FormData): OrderFormValues {
  return {
    name: String(formData.get("name") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    email: String(formData.get("email") ?? ""),
    plan: String(formData.get("plan") ?? ""),
    device: String(formData.get("device") ?? ""),
    privacyConsent: formData.get("privacyConsent") === "on",
    activationConsent: formData.get("activationConsent") === "on",
  };
}

async function sendOrderEmails(order: {
  name: string;
  phone: string;
  email: string;
  plan: string;
  device: string;
  submittedAt: Date;
}): Promise<{ ok: boolean }> {
  const apiKey = process.env.RESEND_API_KEY;
  const fromAddress = process.env.RESEND_FROM_EMAIL;
  const notifyAddress = process.env.ORDER_NOTIFICATION_EMAIL;

  const notificationHtml = renderNotificationEmail(order);
  const confirmationHtml = renderConfirmationEmail(order);

  if (!apiKey || !fromAddress || !notifyAddress) {
    if (process.env.NODE_ENV === "production") {
      console.error(
        "[order] Resend is not configured (missing env vars) in production — order email NOT sent"
      );
      return { ok: false };
    }

    console.log("\n=== [DEV] Resend no configurado: volcando emails a consola ===");
    console.log(`--- Notificación interna -> ${notifyAddress ?? "(ORDER_NOTIFICATION_EMAIL vacío)"} ---`);
    console.log(notificationHtml);
    console.log(`--- Confirmación al cliente -> ${order.email} ---`);
    console.log(confirmationHtml);
    console.log("=== [DEV] fin del volcado de emails ===\n");
    return { ok: true };
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: fromAddress,
      to: notifyAddress,
      subject: `Nuevo pedido — ${order.name}`,
      html: notificationHtml,
    });
    await resend.emails.send({
      from: fromAddress,
      to: order.email,
      subject: "Hemos recibido tu pedido — VistaPlay",
      html: confirmationHtml,
    });
    return { ok: true };
  } catch (error) {
    console.error("[order] Resend send failed", error);
    return { ok: false };
  }
}

export async function submitOrder(
  _prevState: OrderFormState,
  formData: FormData
): Promise<OrderFormState> {
  const values = extractValues(formData);

  const headerList = await headers();
  const rateLimitKey = headerList.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  if (isRateLimited(rateLimitKey)) {
    return {
      status: "error",
      message:
        "Has enviado demasiadas solicitudes seguidas. Espera unos minutos o escríbenos por WhatsApp.",
      values,
    };
  }

  // Honeypot: real users never see or fill this field.
  const honeypot = formData.get("company");
  if (typeof honeypot === "string" && honeypot.length > 0) {
    return {
      status: "error",
      message: "No hemos podido procesar tu solicitud. Inténtalo de nuevo.",
      values,
    };
  }

  // Minimum time-to-submit: rendered timestamp is set client-side on mount.
  const renderedAt = Number(formData.get("renderedAt"));
  if (!renderedAt || Date.now() - renderedAt < MIN_SUBMIT_MS) {
    return {
      status: "error",
      message: "No hemos podido procesar tu solicitud. Inténtalo de nuevo.",
      values,
    };
  }

  const parsed = orderSchema.safeParse(values);

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0]);
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return {
      status: "error",
      message: "Revisa los campos marcados.",
      fieldErrors,
      values,
    };
  }

  const order = { ...parsed.data, submittedAt: new Date() };
  const emailResult = await sendOrderEmails(order);

  if (!emailResult.ok) {
    return {
      status: "error",
      message:
        "No hemos podido enviar tu pedido automáticamente. Escríbenos por WhatsApp y lo confirmamos al momento.",
      values,
    };
  }

  const thankYouParams = new URLSearchParams({
    name: order.name,
    plan: order.plan,
    device: order.device,
  });
  redirect(`/gracias?${thankYouParams.toString()}`);
}
