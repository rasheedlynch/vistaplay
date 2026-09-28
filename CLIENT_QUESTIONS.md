# Preguntas para el cliente

Afirmaciones de negocio que aparecen en el sitio (styleguide interno y
páginas públicas) y deben confirmarse por escrito antes de publicarse.
Cada una está marcada en el código con un comentario `TODO(client)`.

| # | Afirmación | Dónde aparece | Qué necesitamos confirmar |
|---|---|---|---|
| 1 | Activación en menos de 24 horas | `app/styleguide/page.tsx`, badge "Activación en 24h" | ¿Es el tiempo real de activación tras la contratación? |
| 2 | "Sin permanencia" | `app/styleguide/page.tsx`; `lib/plans.ts` (feature en cada plan); homepage, franja de confianza | ¿Los planes no tienen permanencia mínima real? |
| 3 | Precios incluyen IVA | `app/styleguide/page.tsx`, bloque de tipografía "small" | ¿Los precios que se publiquen ya incluyen IVA? |
| 4 | Respuesta de soporte en menos de 24h laborables | `app/styleguide/page.tsx`, bloque de tipografía "body" | ¿Es el SLA real de soporte por WhatsApp/formulario? |
| 5 | "Plan más elegido" | `app/styleguide/page.tsx`, badge sobre el plan de 12 meses | ¿Hay datos que respalden que este plan es el más contratado? |
| 6 | Ahorro anual frente al pago mensual | `app/styleguide/page.tsx`, descripción de la tarjeta de plan | ¿Cuál es el ahorro real del plan de 12 meses frente al mensual? |
| 7 | "Servicio con licencia a través de nuestro proveedor mayorista" | Homepage, franja de confianza (`components/marketing/trust-strip.tsx`) | Redacción legal exacta que se puede publicar sobre la relación con el mayorista |
| 8 | "Soporte humano por WhatsApp" | Homepage, franja de confianza | ¿El soporte lo atienden personas (no un bot/automatización)? |
| 9 | Dispositivos compatibles | Homepage, sección Dispositivos (`components/marketing/dispositivos.tsx`); FAQ | Lista real de dispositivos/plataformas soportadas (Smart TV, Fire TV, Chromecast, navegador, etc.) |
| 10 | Proceso de cancelación | Homepage, FAQ ("¿Puedo cancelar cuando quiera?") | Proceso y plazos reales para cancelar un plan |
| 11 | Métodos de pago aceptados | Homepage, FAQ ("¿Qué métodos de pago aceptáis?") | Qué métodos de pago se ofrecerán realmente |
| 12 | Número de WhatsApp Business | `lib/site.ts` (`NEXT_PUBLIC_WHATSAPP_NUMBER`, actualmente vacío) | Número real de contacto para las solicitudes por WhatsApp |
| 13 | Precio de cada plan | `lib/plans.ts` (`price: null` en los 3 planes) | Precio de los planes de 1, 3 y 12 meses |

## Regla a partir de ahora

Cualquier afirmación de negocio sin confirmar (tiempos, cifras,
garantías, comparativas de precio, afirmaciones de popularidad) se
marca en el código con `{/* TODO(client): ... */}` justo antes del
texto, y se añade una fila a esta tabla. Se retiran ambas marcas solo
cuando el cliente confirma el dato por escrito.
