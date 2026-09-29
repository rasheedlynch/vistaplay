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
    answer:
      "Activamos tu acceso en minutos tras confirmar tu pedido y el pago. Te avisamos por email o WhatsApp en cuanto esté listo.",
  },
  {
    question: "¿En qué dispositivos puedo verlo?",
    answer:
      "Es compatible con los dispositivos que ya tienes: móvil, tablet, ordenador y Smart TV.",
  },
  {
    question: "¿Puedo cancelar cuando quiera?",
    answer:
      "Sí, nuestros planes no tienen permanencia. Además, si no quedas satisfecho en las primeras 24 horas, te devolvemos el dinero.",
  },
  {
    question: "¿Qué métodos de pago aceptáis?",
    // TODO(client): confirm accepted payment methods
    answer: "Te lo confirmamos por WhatsApp junto con el resto de datos de tu plan.",
  },
];
