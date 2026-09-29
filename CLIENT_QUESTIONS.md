# Preguntas para el cliente

Afirmaciones de negocio que aparecen en el sitio (styleguide interno y
páginas públicas) y deben confirmarse por escrito antes de publicarse.
Cada una está marcada en el código con un comentario `TODO(client)`.

## Abiertas

| # | Afirmación | Dónde aparece | Qué necesitamos confirmar |
|---|---|---|---|
| 3 | Precios incluyen IVA | No se menciona el IVA en ningún sitio hasta confirmar | ¿Los precios publicados incluyen IVA o hay que añadirlo? |
| 5 | "Plan más elegido" | `app/styleguide/page.tsx`, badge sobre el plan de 12 meses | ¿Hay datos que respalden que este plan es el más contratado? |
| 6 | Ahorro anual frente al pago mensual | `app/styleguide/page.tsx`, descripción de la tarjeta de plan | ¿Cuál es el ahorro real del plan de 12 meses frente al mensual? (Nota: ya mostramos el precio/mes de cada plan como dato neutro; esto es sobre añadir una afirmación comparativa tipo "ahorras X€") |
| 7 | "Servicio con licencia a través de nuestro proveedor mayorista" | Homepage, franja de confianza (`components/marketing/trust-strip.tsx`) | Redacción legal exacta que se puede publicar sobre la relación con el mayorista |
| 11 | Métodos de pago aceptados | Homepage, FAQ ("¿Qué métodos de pago aceptáis?") | Qué métodos de pago se ofrecerán realmente |
| 12 | Número de WhatsApp Business | `lib/site.ts` (`NEXT_PUBLIC_WHATSAPP_NUMBER`, actualmente vacío) | Número real de contacto para las solicitudes por WhatsApp |
| 14 | Punto de contacto de la organización | `lib/structured-data.ts` (schema Organization, campo `contactPoint` omitido) | Teléfono/email de contacto que se pueda publicar en el schema Organization |
| 15 | Datos estructurados Product/Offer | No implementado | Los precios ya están confirmados (ver resueltas), así que esto ya no está bloqueado — pendiente de implementar en una fase futura |

## Resueltas (confirmadas por el cliente)

| # | Afirmación | Confirmado como |
|---|---|---|
| 1 | Tiempo de activación | "Activación en minutos tras confirmar tu pedido" (nunca "instantánea") |
| 2 | Permanencia | "Sin permanencia" |
| 4 | Horario y canal de soporte | "Soporte humano 24 horas, todos los días, por WhatsApp y email" |
| 8 | Soporte por WhatsApp | Ver fila 4 — soporte humano confirmado |
| 9 | Dispositivos compatibles | "Compatible con los dispositivos que ya tienes: móvil, tablet, ordenador y Smart TV" |
| 10 | Proceso de cancelación | Sin permanencia (fila 2) + garantía de devolución en 24h (nueva, ver abajo) |
| 13 | Precio de cada plan | Prueba 24h 2 €; 1 mes 9,99 €; 3 meses 19,99 € (6,66 €/mes); 6 meses 34,99 € (5,83 €/mes); 12 meses 54,99 € (4,58 €/mes) |
| — | Garantía de satisfacción | "Si no quedas satisfecho en las primeras 24 horas, te devolvemos el dinero" |

## Pendiente de revisión legal

Texto ya confirmado por el cliente pero marcado `TODO(lawyer)` en el
código hasta que un abogado lo revise:

- Casilla de renuncia al derecho de desistimiento en el formulario de
  pedido (`components/marketing/order-form.tsx`): "Solicito la
  activación inmediata del servicio y acepto que, una vez activado,
  pierdo el derecho de desistimiento, sin perjuicio de la garantía de
  satisfacción de 24 horas."

## Regla a partir de ahora

Cualquier afirmación de negocio sin confirmar (tiempos, cifras,
garantías, comparativas de precio, afirmaciones de popularidad) se
marca en el código con `{/* TODO(client): ... */}` justo antes del
texto, y se añade una fila a la tabla "Abiertas". Cuando el cliente lo
confirme por escrito, se retira el TODO del código y la fila se mueve
a "Resueltas". Texto legal sensible (renuncias, condiciones
contractuales) se marca además `TODO(lawyer)` hasta revisión de un
abogado, incluso si el cliente ya confirmó el contenido de negocio.
