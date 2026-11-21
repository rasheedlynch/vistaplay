import { ChevronDown } from "lucide-react";

import type { Faq } from "@/lib/faq";

// Native <details>: every answer is in the server-rendered HTML (visible to
// crawlers) and it works without JavaScript.
export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="divide-y divide-border rounded-2xl border border-border bg-surface">
      {items.map((faq) => (
        <details key={faq.question} className="group px-6 py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-md font-heading text-lg font-medium [&::-webkit-details-marker]:hidden">
            <h3 className="text-lg font-medium">{faq.question}</h3>
            <ChevronDown
              className="h-5 w-5 shrink-0 text-highlight transition-transform group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <p className="text-small mt-3 max-w-[65ch] text-base leading-relaxed">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
