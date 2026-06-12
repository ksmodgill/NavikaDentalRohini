import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/site-data";

export function FAQAccordion() {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
      {faqs.map((faq, index) => (
        <details key={faq.question} className="group bg-surface" open={index === 0}>
          <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left font-heading text-lg font-semibold text-text-primary transition hover:bg-soft-gray group-open:bg-primary group-open:text-white group-open:hover:bg-primary-hover md:text-xl sm:px-6 [&::-webkit-details-marker]:hidden">
            <span>{faq.question}</span>
            <ChevronDown
              aria-hidden="true"
              className="size-5 shrink-0 transition-transform group-open:rotate-180"
            />
          </summary>
          <div className="px-5 pb-5 pt-4 font-body text-base font-normal leading-normal text-text-secondary lg:text-lg sm:px-6">
            {faq.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
