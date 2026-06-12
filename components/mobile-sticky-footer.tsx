import { MessageCircle, Phone } from "lucide-react";
import { clinic } from "@/lib/site-data";

export function MobileStickyFooter() {
  return (
    <nav
      aria-label="Mobile quick actions"
      className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-md rounded-2xl border border-border bg-surface/95 p-3 shadow-[0_18px_48px_rgba(15,118,110,0.28),0_6px_18px_rgba(30,41,59,0.16)] ring-1 ring-primary/10 backdrop-blur-xl md:hidden"
    >
      <p className="px-2 pb-2 text-center font-heading text-xs font-semibold tracking-wide text-text-primary">
        Need dental help today?
      </p>
      <div className="grid grid-cols-2 gap-2">
        <a
          href={clinic.phoneHref}
          className="focus-ring inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 font-body text-sm font-medium text-white shadow-sm transition hover:bg-primary-hover"
          aria-label={`Call ${clinic.name}`}
        >
          <Phone aria-hidden="true" className="size-4 shrink-0 self-center" />
          Call Now
        </a>
        <a
          href={clinic.whatsappHref}
          className="focus-ring inline-flex items-center justify-center gap-2 rounded-xl border border-primary bg-surface px-4 py-3.5 font-body text-sm font-medium text-primary shadow-sm transition hover:bg-soft-gray"
          aria-label="Send WhatsApp message"
        >
          <MessageCircle aria-hidden="true" className="size-4 shrink-0 self-center" />
          WhatsApp
        </a>
      </div>
    </nav>
  );
}
