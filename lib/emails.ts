import { deviceLabel, planLabel } from "@/lib/order-helpers";
import { getWhatsAppUrl } from "@/lib/site";

type OrderEmailData = {
  name: string;
  phone: string;
  email: string;
  plan: string;
  device: string;
  submittedAt: Date;
};

const COLORS = {
  paper: "#FAF7F2",
  ink: "#0E1B2C",
  brand: "#0F766E",
  line: "#E5DED4",
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function emailShell(bodyHtml: string): string {
  return `<!DOCTYPE html>
<html lang="es">
  <body style="margin:0;padding:0;background-color:${COLORS.paper};font-family:Arial,Helvetica,sans-serif;color:${COLORS.ink};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${COLORS.paper};padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" style="max-width:480px;background-color:#FFFFFF;border:1px solid ${COLORS.line};border-radius:16px;">
            <tr>
              <td style="padding:32px;">
                <p style="margin:0 0 24px;font-size:18px;font-weight:700;color:${COLORS.ink};">VistaPlay</p>
                ${bodyHtml}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function renderNotificationEmail(data: OrderEmailData): string {
  const rows: [string, string][] = [
    ["Nombre", escapeHtml(data.name)],
    ["Teléfono", escapeHtml(data.phone)],
    ["Email", escapeHtml(data.email)],
    ["Plan", escapeHtml(planLabel(data.plan))],
    ["Dispositivo", escapeHtml(deviceLabel(data.device))],
    [
      "Fecha",
      escapeHtml(
        data.submittedAt.toLocaleString("es-ES", {
          dateStyle: "long",
          timeStyle: "short",
        })
      ),
    ],
  ];

  const rowsHtml = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 0;border-bottom:1px solid ${COLORS.line};font-size:14px;"><strong>${label}:</strong> ${value}</td></tr>`
    )
    .join("");

  return emailShell(`
    <p style="margin:0 0 16px;font-size:16px;">Nuevo pedido recibido.</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rowsHtml}</table>
  `);
}

export function renderConfirmationEmail(data: OrderEmailData): string {
  const whatsappUrl = getWhatsAppUrl(
    `Hola, acabo de solicitar el plan ${planLabel(data.plan)} en VistaPlay.`
  );

  const rows: [string, string][] = [
    ["Plan", escapeHtml(planLabel(data.plan))],
    ["Dispositivo", escapeHtml(deviceLabel(data.device))],
  ];
  const rowsHtml = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 0;font-size:14px;"><strong>${label}:</strong> ${value}</td></tr>`
    )
    .join("");

  const whatsappButton = whatsappUrl
    ? `<p style="margin:24px 0 0;"><a href="${whatsappUrl}" style="display:inline-block;background-color:${COLORS.brand};color:#FFFFFF;text-decoration:none;padding:12px 20px;border-radius:12px;font-size:14px;font-weight:700;">Escríbenos por WhatsApp</a></p>`
    : "";

  return emailShell(`
    <p style="margin:0 0 16px;font-size:16px;">Hola ${escapeHtml(data.name)},</p>
    <p style="margin:0 0 16px;font-size:14px;line-height:1.6;">
      Hemos recibido tu pedido. En breve recibirás en este correo el enlace
      de pago y las instrucciones para activar tu acceso.
    </p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:16px 0;">${rowsHtml}</table>
    <p style="margin:16px 0;font-size:14px;line-height:1.6;">
      Si no lo ves en un rato, revisa también tu carpeta de spam.
    </p>
    ${whatsappButton}
  `);
}
