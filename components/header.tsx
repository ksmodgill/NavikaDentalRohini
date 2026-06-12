import { Menu, Phone, ShieldCheck, X } from "lucide-react";
import { clinic } from "@/lib/site-data";

const navItems = [
  { href: "#top", label: "Home" },
  { href: "#why-choose", label: "Why Choose" },
  { href: "#services", label: "Services" },
  { href: "#doctor", label: "Doctor" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur-xl">
      <div className="container-narrow flex h-18 items-center justify-between gap-4">
        <a
          href="#top"
          aria-label="Navika Dental home"
          className="focus-ring flex items-center gap-3 rounded-2xl"
        >
          <span className="grid size-11 place-items-center rounded-2xl bg-primary text-white shadow-sm">
            <ShieldCheck aria-hidden="true" className="size-6 shrink-0 self-center" />
          </span>
          <span className="leading-normal">
            <span className="block font-heading text-base font-bold tracking-tight text-text-primary">
              Navika Dental
            </span>
            <span className="hidden font-body text-xs font-normal text-text-secondary sm:block">
              Care & Implant Center
            </span>
          </span>
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-5 lg:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-full px-1 font-body text-sm font-medium text-text-secondary transition hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={clinic.phoneHref}
            aria-label={`Call ${clinic.name}`}
            className="focus-ring inline-flex items-center gap-2 rounded-xl border border-primary bg-surface px-4 py-2.5 font-body text-sm font-medium text-primary transition hover:border-primary-hover hover:text-primary-hover"
          >
            <Phone aria-hidden="true" className="size-4 shrink-0 self-center" />
            Call
          </a>
          <a
            href={clinic.whatsappHref}
            aria-label="Send WhatsApp inquiry"
            className="focus-ring inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 font-body text-sm font-medium text-white transition hover:bg-primary-hover"
          >
            WhatsApp
          </a>
        </div>

        <details className="group relative lg:hidden">
          <summary className="focus-ring flex cursor-pointer list-none items-center gap-2 rounded-xl bg-primary px-4 py-2.5 font-body text-sm font-medium text-white transition hover:bg-primary-hover [&::-webkit-details-marker]:hidden">
            <Menu aria-hidden="true" className="size-4 shrink-0 self-center group-open:hidden" />
            <X aria-hidden="true" className="hidden size-4 shrink-0 self-center group-open:block" />
            Menu
          </summary>
          <nav
            id="site-menu"
            aria-label="Mobile and tablet navigation"
            className="absolute right-0 top-full mt-3 w-[min(84vw,22rem)] rounded-2xl border border-border bg-surface p-3 shadow-lg"
          >
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="focus-ring rounded-xl px-4 py-3 font-body text-sm font-medium text-text-secondary transition hover:bg-soft-gray hover:text-primary"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        </details>
      </div>
    </header>
  );
}
