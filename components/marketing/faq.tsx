import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/faq";

export function Faq() {
  return (
    <Section id="preguntas" variant="paper">
      <Container>
        <h2 className="text-h2">Preguntas frecuentes</h2>
        <Accordion type="single" collapsible className="mt-8 max-w-3xl">
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Section>
  );
}
