export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "¿Qué incluye VistaPlay?",
    answer:
      "Acceso a canales nacionales y autonómicos, además de deporte, cine, series, documentales e infantiles, organizados por categorías.",
  },
  {
    question: "¿Cómo funciona la activación?",
    // TODO(client): confirm real activation time
    answer:
      "Tras solicitar tu plan te contactamos por WhatsApp para confirmar los datos y el pago, y activamos tu acceso a continuación.",
  },
  {
    question: "¿En qué dispositivos puedo verlo?",
    // TODO(client): confirm supported device list
    answer:
      "Puedes ver VistaPlay desde tu móvil, tu tablet y tu televisor. Consulta la sección de dispositivos para más detalle.",
  },
  {
    question: "¿Puedo cancelar cuando quiera?",
    // TODO(client): confirm real cancellation process and terms
    answer:
      "Sí, nuestros planes no tienen permanencia. Escríbenos por WhatsApp para gestionar la cancelación.",
  },
  {
    question: "¿Qué métodos de pago aceptáis?",
    // TODO(client): confirm accepted payment methods
    answer: "Te lo confirmamos por WhatsApp junto con el resto de datos de tu plan.",
  },
];
