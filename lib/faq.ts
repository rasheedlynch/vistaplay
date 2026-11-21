export type Faq = {
  question: string;
  answer: string;
};

// Single source for /preguntas-frecuentes, the home preview and the FAQPage
// JSON-LD. No third-party brand names or competition names here.
export const faqs: Faq[] = [
  {
    question: "¿Qué incluye VistaPlay?",
    answer:
      "Canales nacionales e internacionales, fútbol nacional e internacional en directo y los grandes deportes, además de cine, series, documentales e infantiles, organizados por categorías para que encuentres lo que buscas sin complicarte.",
  },
  {
    question: "¿Cuánto tarda la activación?",
    answer:
      "Activamos tu acceso en minutos tras confirmar tu pedido y el pago. Te avisamos por email y por WhatsApp en cuanto esté listo.",
  },
  {
    question: "¿En qué dispositivos puedo verlo?",
    answer:
      "Es compatible con los dispositivos que ya tienes: móvil, tablet, ordenador y Smart TV. Si usas un Android TV o un Fire TV Stick, te explicamos cómo instalarlo. Puedes consultar todas las opciones en la página de dispositivos.",
  },
  {
    question: "¿Qué velocidad de internet necesito?",
    // TODO(client): confirm recommended connection speeds — CLIENT_QUESTIONS.md #17
    answer:
      "Necesitas una conexión a internet estable. Como referencia general, unos 10 Mbps suelen bastar para ver en alta definición; si tu conexión es más lenta, escríbenos y lo revisamos contigo. Para mayor estabilidad, conecta tu televisor por cable o cerca del router.",
  },
  {
    question: "¿Cuántas pantallas puedo usar a la vez?",
    // TODO(client): confirm simultaneous screens per plan — CLIENT_QUESTIONS.md #18
    answer:
      "Cada suscripción está pensada para el uso de tu hogar. Escríbenos por WhatsApp o email y te indicamos cuántas pantallas admite tu plan.",
  },
  {
    question: "¿Puedo cancelar cuando quiera?",
    answer:
      "Sí, nuestros planes no tienen permanencia. Además, si no quedas satisfecho en las primeras 24 horas, te devolvemos el dinero.",
  },
  {
    question: "¿Qué métodos de pago aceptáis?",
    answer:
      "Te enviamos un enlace de pago seguro por email. Puedes pagar con tarjeta a través de Stripe o con PayPal. Todos los precios incluyen IVA.",
  },
  {
    question: "¿Cómo funciona la prueba gratis de 24 horas?",
    answer:
      "Rellena el formulario de prueba gratis con tus datos y el dispositivo en el que vas a verlo. Te contactamos por email y WhatsApp para activarla. La prueba es gratuita (0 €) y dura 24 horas.",
  },
  {
    question: "¿Cómo es el soporte?",
    answer:
      "Es soporte humano, 24 horas todos los días, por WhatsApp y por email. Si algo no funciona o no sabes cómo instalarlo, escríbenos y te ayudamos.",
  },
  {
    question: "¿Es legal VistaPlay?",
    answer:
      "Sí. VistaPlay comercializa servicios de IPTV como distribuidor autorizado a través de su proveedor mayorista. Puedes consultar todos los detalles en nuestro aviso legal.",
  },
  {
    question: "¿Qué necesito para verlo?",
    answer:
      "Una conexión a internet y uno de tus dispositivos: móvil, tablet, ordenador o Smart TV. Tras tu pedido te enviamos las instrucciones paso a paso.",
  },
  {
    question: "¿Qué pasa si tengo un problema con la instalación?",
    answer:
      "Escríbenos por WhatsApp indicando tu dispositivo y te guiamos paso a paso. Si no consigues verlo y estás dentro de las primeras 24 horas, te devolvemos el dinero.",
  },
];

/** Shorter selection for the home page preview. */
export const homeFaqs: Faq[] = [faqs[0], faqs[1], faqs[5], faqs[7]];
