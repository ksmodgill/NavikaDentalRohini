import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { beforeAfterCases } from "@/lib/site-data";

export function BeforeAfterGallery() {
  return (
    <div className="mx-auto max-w-5xl space-y-4">
      {beforeAfterCases.map((caseItem, index) => (
        <details
          key={caseItem.title}
          open={index === 0}
          className="group rounded-2xl border border-border bg-surface shadow-sm transition hover:border-primary hover:shadow-md"
        >
          <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-left [&::-webkit-details-marker]:hidden">
            <span>
              <span className="font-body text-xs font-medium uppercase tracking-[0.2em] text-primary">
                Case {index + 1}
              </span>
              <span className="mt-2 block font-heading text-lg font-semibold text-text-primary md:text-xl">
                {caseItem.title}
              </span>
              <span className="mt-2 block font-body text-base font-normal leading-normal text-text-secondary">
                {caseItem.concern}
              </span>
            </span>
            <ChevronDown
              aria-hidden="true"
              className="size-5 shrink-0 text-primary transition-transform group-open:rotate-180"
            />
          </summary>

          <div className="px-3 pb-3">
            <div className="grid gap-3 overflow-hidden rounded-2xl sm:grid-cols-2">
              <figure className="relative min-h-[240px] overflow-hidden bg-background sm:min-h-[280px]">
                <Image
                  src={caseItem.before}
                  alt={`${caseItem.title} concern visual for Navika Dental consultation`}
                  fill
                  sizes="(min-width: 1024px) 480px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <figcaption className="absolute left-4 top-4 rounded-xl bg-surface/90 px-4 py-2 font-body text-xs font-medium uppercase tracking-[0.18em] text-text-primary backdrop-blur">
                  Concern
                </figcaption>
              </figure>
              <figure className="relative min-h-[240px] overflow-hidden bg-background sm:min-h-[280px]">
                <Image
                  src={caseItem.after}
                  alt={`${caseItem.title} treatment goal visual for Navika Dental consultation`}
                  fill
                  sizes="(min-width: 1024px) 480px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <figcaption className="absolute left-4 top-4 rounded-xl bg-primary px-4 py-2 font-body text-xs font-medium uppercase tracking-[0.18em] text-white">
                  Treatment Goal
                </figcaption>
              </figure>
            </div>
            <p className="px-3 pt-4 font-body text-xs font-normal leading-normal text-text-secondary">
              Visual examples help patients understand the type of concerns
              that can be discussed during a dental consultation.
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}
