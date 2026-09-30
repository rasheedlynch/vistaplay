import type { Metadata } from "next";

import { LegalLayout, LegalSection } from "@/components/legal/legal-layout";
import { COMPANY } from "@/lib/company";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Derecho de desistimiento",
  path: "/derecho-de-desistimiento",
  noIndex: true,
});

const UPDATED = "30 de septiembre de 2026";

export default function DerechoDeDesistimientoPage() {
  return (
    <LegalLayout title="Derecho de desistimiento" updated={UPDATED}>
      <LegalSection title="1. Derecho general de desistimiento">
        <p>
          De acuerdo con el Real Decreto Legislativo 1/2007, por el que se
          aprueba el texto refundido de la Ley General para la Defensa de
          los Consumidores y Usuarios (TRLGDCU), el consumidor dispone con
          carácter general de un plazo de 14 días naturales desde la
          contratación para desistir del contrato, sin necesidad de
          justificación y sin penalización alguna.
        </p>
      </LegalSection>

      <LegalSection title="2. Excepción aplicable al servicio de VistaPlay">
        <p>
          El servicio de {site.name} consiste en el suministro de contenido
          digital que no se presta en un soporte material, sino mediante
          acceso inmediato en streaming. El artículo 103.m) del TRLGDCU
          establece que el derecho de desistimiento no resulta aplicable a
          este tipo de contratos cuando la ejecución del contrato haya
          comenzado, siempre que:
        </p>
        <ul>
          <li>
            el consumidor haya otorgado su consentimiento previo y expreso
            para que la ejecución comience durante el plazo de
            desistimiento, y
          </li>
          <li>
            el consumidor haya reconocido que, en consecuencia, pierde su
            derecho de desistimiento una vez el contrato se haya ejecutado
            completa o parcialmente.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Cómo se formaliza el consentimiento">
        <p>
          {site.name} recaba este consentimiento expreso en el momento del
          pago, en los siguientes términos: al responder &laquo;ACEPTO&raquo;
          al email de pago, el cliente otorga su consentimiento expreso para
          el inicio inmediato del servicio y reconoce que pierde su derecho
          de desistimiento una vez activado el acceso.
        </p>
        <p>
          A partir de ese momento, el usuario no podrá ejercer el derecho de
          desistimiento legal sobre el servicio ya activado.
        </p>
      </LegalSection>

      <LegalSection title="4. La garantía de 24 horas es independiente de este límite legal">
        <p>
          Con independencia de la pérdida del derecho de desistimiento
          descrita arriba, {site.name} ofrece de forma voluntaria una
          garantía de satisfacción: si el usuario no queda satisfecho en
          las primeras 24 horas desde la activación, {site.name} le
          devuelve el importe pagado. Esta garantía es un compromiso
          comercial adicional, no una obligación legal, y se explica en las{" "}
          <a href="/condiciones-de-contratacion">
            condiciones de contratación
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="5. Anexo — modelo de formulario de desistimiento">
        <p>
          Para los supuestos en los que el derecho de desistimiento sí
          resulte de aplicación (por ejemplo, si el usuario desiste antes de
          que el servicio haya sido activado), puede utilizar el siguiente
          modelo orientativo. Su cumplimentación y envío no es obligatoria.
        </p>
        <div className="rounded-2xl border border-line bg-card p-6">
          <p className="text-small italic">
            A la atención de {COMPANY.legalName}, {COMPANY.email}:
          </p>
          <p className="text-small mt-4 italic">
            Por la presente le comunico que desisto de mi contrato de
            prestación del siguiente servicio:
          </p>
          <p className="text-small mt-2 italic">— Pedido realizado el (fecha):</p>
          <p className="text-small mt-1 italic">— Referencia del pedido:</p>
          <p className="text-small mt-1 italic">— Nombre del consumidor:</p>
          <p className="text-small mt-1 italic">— Dirección del consumidor:</p>
          <p className="text-small mt-1 italic">
            — Firma del consumidor (solo si el formulario se presenta en
            papel):
          </p>
          <p className="text-small mt-1 italic">— Fecha:</p>
        </div>
      </LegalSection>
    </LegalLayout>
  );
}
