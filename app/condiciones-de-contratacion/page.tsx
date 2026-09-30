import type { Metadata } from "next";

import { LegalLayout, LegalSection } from "@/components/legal/legal-layout";
import { COMPANY } from "@/lib/company";
import { formatPrice, plans } from "@/lib/plans";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Condiciones de contratación",
  path: "/condiciones-de-contratacion",
  noIndex: true,
});

const UPDATED = "30 de septiembre de 2026";

export default function CondicionesDeContratacionPage() {
  return (
    <LegalLayout title="Condiciones de contratación" updated={UPDATED}>
      <LegalSection title="1. Objeto y partes">
        <p>
          Las presentes condiciones regulan la contratación de los planes de
          suscripción de {site.name} con los usuarios que solicitan el
          servicio a través del sitio web. La solicitud de un plan implica
          la aceptación de estas condiciones.
        </p>
      </LegalSection>

      <LegalSection title="2. Descripción del servicio">
        <p>
          {site.name} presta un servicio de televisión en streaming (IPTV)
          con acceso a canales nacionales y autonómicos, deporte, cine,
          series, documentales e infantil, disponible en los dispositivos
          del usuario (móvil, tablet, ordenador y Smart TV) a través de
          conexión a internet.
        </p>
      </LegalSection>

      <LegalSection title="3. Planes y precios">
        <p>Precio final, IVA incluido. Precios vigentes en la fecha de esta actualización:</p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-line">
                <th className="py-2 pr-4 font-heading text-sm font-semibold text-ink">
                  Plan
                </th>
                <th className="py-2 pr-4 font-heading text-sm font-semibold text-ink">
                  Duración
                </th>
                <th className="py-2 font-heading text-sm font-semibold text-ink">
                  Precio
                </th>
              </tr>
            </thead>
            <tbody>
              {plans.map((plan) => (
                <tr key={plan.id} className="border-b border-line">
                  <td className="py-2 pr-4 text-sm">{plan.name}</td>
                  <td className="py-2 pr-4 text-sm">{plan.durationLabel}</td>
                  <td className="py-2 text-sm">
                    {plan.price !== null ? formatPrice(plan.price) : "Próximamente"}
                    {plan.perMonth !== null && (
                      <span className="text-ink-muted">
                        {" "}
                        ({formatPrice(plan.perMonth)}/mes)
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </LegalSection>

      <LegalSection title="4. Proceso de contratación">
        <p>El proceso de contratación sigue estos pasos:</p>
        <ul>
          <li>
            El usuario rellena el formulario de pedido con sus datos y el
            plan elegido. En este paso no se realiza ningún cobro.
          </li>
          <li>
            {site.name} envía un correo de confirmación con el número de
            referencia del pedido.
          </li>
          <li>
            A continuación, {site.name} envía por email un enlace de pago
            seguro, con pago mediante tarjeta a través de Stripe o PayPal,
            junto con las instrucciones de instalación.
          </li>
          <li>
            Una vez confirmado el pago, el acceso se activa en minutos.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Forma de pago">
        <p>
          No se realiza ningún cargo en el momento de enviar el formulario
          de pedido. El pago se efectúa exclusivamente a través del enlace
          de pago seguro enviado por email, con tarjeta mediante Stripe o
          PayPal.
        </p>
      </LegalSection>

      <LegalSection title="6. Duración y renovación">
        <p>
          Cada plan contratado corresponde a un único periodo de acceso
          (24 horas, 1, 3, 6 o 12 meses, según el plan elegido). Los planes
          no se renuevan automáticamente: al finalizar el periodo
          contratado, el acceso se desactiva salvo que el usuario realice
          un nuevo pedido.
        </p>
      </LegalSection>

      <LegalSection title="7. Garantía de satisfacción de 24 horas">
        <p>
          Si el usuario no queda satisfecho en las primeras 24 horas desde
          la activación del servicio, {site.name} le devuelve el importe
          pagado. Esta garantía es un compromiso comercial de {site.name}
          {" "}que se añade al mínimo legal descrito en la{" "}
          <a href="/derecho-de-desistimiento">
            política de derecho de desistimiento
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="8. Atención y soporte al cliente">
        <p>
          El usuario puede contactar con el equipo de soporte de{" "}
          {site.name} por correo electrónico a{" "}
          <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> o por
          WhatsApp, para cualquier duda o incidencia relacionada con su
          pedido o con el servicio.
        </p>
      </LegalSection>

      <LegalSection title="9. Modificación y suspensión del servicio">
        <p>
          {site.name} podrá modificar o suspender temporalmente el acceso
          al servicio por motivos de mantenimiento, actualización técnica o
          causas ajenas a su control derivadas de su proveedor mayorista,
          procurando minimizar las molestias al usuario. {site.name} podrá
          asimismo suspender o cancelar el acceso de un usuario en caso de
          impago o de uso contrario a estas condiciones.
        </p>
      </LegalSection>

      <LegalSection title="10. Incidencias y reclamaciones">
        <p>
          Cualquier incidencia o reclamación relacionada con el pedido o el
          servicio debe dirigirse en primer lugar a{" "}
          <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>. Si no se
          alcanza una solución satisfactoria, el usuario con la condición de
          consumidor puede acudir a las Juntas Arbitrales de Consumo o a la
          plataforma europea de resolución de litigios en línea:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
          >
            ec.europa.eu/consumers/odr
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
