"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import {
  Clock,
  MapPin,
  Menu,
  MessageCircle,
  Navigation,
  Phone,
  ShieldCheck,
  X
} from "lucide-react";
import { clinic, workingHours } from "@/lib/site-data";

const navItems = [
  { href: "#top", label: "Home" },
  { href: "#why-choose", label: "Why Choose" },
  { href: "#services", label: "Services" },
  { href: "#doctor", label: "Doctor" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" }
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#top");
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!isMenuOpen || !menuRef.current) {
        return;
      }

      if (!menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveHref(`#${visibleEntry.target.id}`);
        }
      },
      {
        rootMargin: "-28% 0px -58% 0px",
        threshold: [0.12, 0.35, 0.6]
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  function handleSectionNavigation(href: string) {
    const section = document.querySelector(href);

    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      section?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    window.history.replaceState(null, "", href);
    setActiveHref(href);
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-[80] border-b border-border bg-surface/95 backdrop-blur-xl">
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
              onClick={(event) => {
                event.preventDefault();
                handleSectionNavigation(item.href);
              }}
              className={`focus-ring rounded-full px-1 font-body text-sm font-medium transition ${
                activeHref === item.href
                  ? "text-primary"
                  : "text-text-secondary hover:text-primary"
              }`}
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

        <div ref={menuRef} className="relative lg:hidden">
          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="site-menu"
            className="focus-ring grid size-11 place-items-center rounded-2xl border border-border bg-surface text-primary shadow-sm transition hover:border-primary hover:bg-soft-gray hover:shadow-md"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? (
              <X aria-hidden="true" className="size-5 shrink-0 self-center" />
            ) : (
              <Menu aria-hidden="true" className="size-5 shrink-0 self-center" />
            )}
          </button>
          <nav
            id="site-menu"
            aria-label="Mobile and tablet navigation"
            className={`fixed inset-x-0 top-[4.5rem] z-[90] max-h-[calc(100vh-4.5rem)] w-full origin-top overflow-y-auto border-b border-border bg-surface/98 p-3 shadow-[0_24px_70px_rgba(15,23,42,0.16)] ring-1 ring-white/70 backdrop-blur-2xl transition duration-200 ease-out ${
              isMenuOpen
                ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                : "pointer-events-none -translate-y-2 scale-[0.98] opacity-0"
            }`}
          >
            <div className="rounded-2xl bg-gradient-to-br from-white via-teal-50/40 to-white p-2">
              <p className="px-3 pb-2 pt-1 font-body text-xs font-medium uppercase tracking-[0.18em] text-primary">
                Navigate
              </p>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={activeHref === item.href ? "page" : undefined}
                  onClick={(event) => {
                    event.preventDefault();
                    handleSectionNavigation(item.href);
                  }}
                  className={`focus-ring flex items-center justify-between rounded-xl px-4 py-3 font-body text-sm font-semibold transition ${
                    activeHref === item.href
                      ? "border border-primary/20 bg-teal-50 text-primary shadow-sm"
                      : "text-text-secondary hover:bg-surface hover:text-primary"
                  }`}
                >
                  <span>{item.label}</span>
                  {activeHref === item.href ? (
                    <span className="size-2 rounded-full bg-primary" />
                  ) : null}
                </a>
              ))}
            </div>

            <div className="mt-3 rounded-2xl border border-border bg-surface p-3 shadow-sm">
              <div className="mb-3 flex items-center justify-between px-1">
                <div>
                  <p className="font-heading text-base font-bold text-text-primary">
                    Quick Actions
                  </p>
                  <p className="mt-0.5 font-body text-xs font-medium text-text-secondary">
                    Call, message, or navigate instantly.
                  </p>
                </div>
                <span className="grid size-9 place-items-center rounded-full bg-soft-gray text-primary">
                  <Phone aria-hidden="true" className="size-4 shrink-0 self-center" />
                </span>
              </div>
              <div className="grid gap-2">
                <a
                  href={clinic.phoneHref}
                  onClick={() => setIsMenuOpen(false)}
                  className="focus-ring inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 font-body text-sm font-semibold text-white shadow-sm transition hover:bg-primary-hover"
                >
                  <Phone aria-hidden="true" className="size-4 shrink-0 self-center" />
                  Call Now
                </a>
                <div className="grid grid-cols-2 gap-2">
                <a
                  href={clinic.whatsappHref}
                  onClick={() => setIsMenuOpen(false)}
                  className="focus-ring inline-flex items-center justify-center gap-2 rounded-xl border border-primary bg-surface px-4 py-3 font-body text-sm font-semibold text-primary shadow-sm transition hover:bg-soft-gray"
                >
                  <MessageCircle aria-hidden="true" className="size-4 shrink-0 self-center" />
                  WhatsApp
                </a>
                <a
                  href={clinic.directionsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="focus-ring inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface px-4 py-3 font-body text-sm font-semibold text-text-primary shadow-sm transition hover:border-primary hover:text-primary"
                >
                  <Navigation aria-hidden="true" className="size-4 shrink-0 self-center" />
                  Directions
                </a>
                </div>
              </div>
            </div>

            <div className="mt-3 rounded-2xl border border-border bg-surface p-4 shadow-sm">
              <p className="font-heading text-base font-bold text-text-primary">
                Contact Navika Dental
              </p>
              <div className="mt-3 grid gap-3">
                <MenuContactLink
                  href={clinic.phoneHref}
                  icon={<Phone aria-hidden="true" className="size-4 shrink-0 self-center" />}
                  label="Call Now"
                  value={clinic.phoneDisplay}
                  onClick={() => setIsMenuOpen(false)}
                />
                <MenuContactLink
                  href={clinic.whatsappHref}
                  icon={<MessageCircle aria-hidden="true" className="size-4 shrink-0 self-center" />}
                  label="WhatsApp"
                  value={clinic.phoneDisplay}
                  onClick={() => setIsMenuOpen(false)}
                />
                <MenuContactLink
                  href={clinic.directionsHref}
                  icon={<MapPin aria-hidden="true" className="size-4 shrink-0 self-center" />}
                  label="Clinic Address"
                  value={clinic.address}
                  external
                  onClick={() => setIsMenuOpen(false)}
                />
                <div className="flex gap-3 rounded-xl bg-soft-gray p-3">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-surface text-primary shadow-sm">
                    <Clock aria-hidden="true" className="size-4 shrink-0 self-center" />
                  </span>
                  <div>
                    <p className="font-body text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                      Clinic Timings
                    </p>
                    <p className="mt-1 font-body text-sm font-medium leading-normal text-text-secondary">
                      {workingHours.join(" | ")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

function MenuContactLink({
  href,
  icon,
  label,
  value,
  external = false,
  onClick
}: {
  href: string;
  icon: ReactNode;
  label: string;
  value: string;
  external?: boolean;
  onClick: () => void;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onClick={onClick}
      className="focus-ring flex gap-3 rounded-xl bg-soft-gray p-3 transition hover:bg-secondary-light/60"
    >
      <span className="grid size-8 shrink-0 place-items-center rounded-full bg-surface text-primary shadow-sm">
        {icon}
      </span>
      <span>
        <span className="block font-body text-xs font-semibold uppercase tracking-[0.14em] text-primary">
          {label}
        </span>
        <span className="mt-1 block font-body text-sm font-medium leading-normal text-text-secondary">
          {value}
        </span>
      </span>
    </a>
  );
}
