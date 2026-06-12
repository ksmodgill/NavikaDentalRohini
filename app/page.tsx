import dynamic from "next/dynamic";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  PlayCircle,
  Quote
} from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { BackgroundDentalIcons } from "@/components/background-dental-icons";
import { Header } from "@/components/header";
import { MobileStickyFooter } from "@/components/mobile-sticky-footer";
import { SectionHeading } from "@/components/section-heading";
import {
  careApproach,
  clinic,
  doctorHighlights,
  facilities,
  processSteps,
  services,
  testimonials,
  treatmentFocus,
  trustPillars,
  whyChoose,
  workingHours
} from "@/lib/site-data";
import { buildJsonLd } from "@/lib/schema";

const BeforeAfterGallery = dynamic(
  () =>
    import("@/components/before-after-gallery").then(
      (mod) => mod.BeforeAfterGallery
    ),
  {
    loading: () => (
      <div className="min-h-[420px] animate-pulse rounded-2xl bg-accent-light" />
    )
  }
);

const FAQAccordion = dynamic(
  () => import("@/components/faq-accordion").then((mod) => mod.FAQAccordion),
  {
    loading: () => (
      <div className="mx-auto min-h-[360px] max-w-3xl animate-pulse rounded-2xl bg-accent-light" />
    )
  }
);

export default function Home() {
  const jsonLd = buildJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="top">
        <HeroSection />
        <WhyChooseSection />
        <ServicesSection />
        <DoctorSection />
        <ProcessSection />
        <CasesSection />
        <TestimonialsSection />
        <FacilitiesSection />
        <FAQSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <SintyzFloatingBadge />
      <MobileStickyFooter />
    </>
  );
}

function HeroSection() {
  return (
    <section className="medical-grid relative isolate overflow-hidden bg-gradient-to-br from-white via-emerald-50/70 to-teal-50/60">
      <div className="pointer-events-none absolute right-[-8rem] top-20 z-0 size-[32rem] rounded-full bg-[rgba(94,234,212,0.18)] blur-[120px] sm:size-[40rem]" />
      <BackgroundDentalIcons variant="hero" />
      <div className="container-narrow relative z-10 grid gap-6 pb-16 pt-12 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:gap-8 lg:pt-24">
        <AnimatedSection as="div" className="max-w-[680px]">
          <div className="mb-4 inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2 font-body text-sm font-medium text-primary shadow-sm">
            <CheckCircle2 aria-hidden="true" className="size-4 shrink-0 self-center" />
            Safe, Modern Dental Care in Rohini
          </div>
          <h1 className="max-w-[640px] font-heading text-[2rem] font-extrabold leading-[1.08] tracking-tight text-balance text-text-primary md:text-[2.5rem] lg:text-[3rem]">
            <span className="lg:block">Dental Implants & Advanced</span>{" "}
            <span className="lg:block">Dentistry in Rohini</span>
          </h1>
          <p className="mt-4 max-w-2xl font-body text-base font-normal leading-normal text-text-secondary lg:text-lg">
            Navika Dental Care & Implant Center provides hygienic,
            comfort-focused dental care for implants, root canals, smile
            makeovers, braces, whitening, crowns, and family visits.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={clinic.phoneHref}
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-4 font-body text-base font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-primary-hover"
            >
              Call Now
              <ArrowRight aria-hidden="true" className="size-5 shrink-0 self-center" />
            </a>
            <a
              href={clinic.whatsappHref}
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-xl border border-primary bg-surface px-7 py-4 font-body text-base font-medium text-primary shadow-sm transition hover:-translate-y-0.5 hover:bg-soft-gray"
            >
              <MessageCircle aria-hidden="true" className="size-5 shrink-0 self-center" />
              WhatsApp Inquiry
            </a>
          </div>

          <div className="mt-6 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {trustPillars.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="rounded-2xl border border-border bg-surface p-4 shadow-sm"
                >
                  <Icon aria-hidden="true" className="mb-3 size-5 text-primary" />
                  <p className="font-heading text-sm font-semibold leading-normal text-text-primary">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </AnimatedSection>

        <AnimatedSection as="div" delay={0.1} className="relative space-y-4 sm:space-y-0">
          <div className="pointer-events-none absolute -right-16 top-8 z-0 size-[22rem] rounded-full bg-[rgba(94,234,212,0.18)] blur-[120px] sm:size-[32rem] lg:size-[40rem]" />
          <div className="glass-card relative z-10 overflow-hidden rounded-[2.5rem] p-3">
            <div className="relative min-h-[360px] overflow-hidden rounded-3xl bg-accent-light sm:min-h-[440px] lg:min-h-[520px]">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1100&q=85"
                alt="Dentist at Navika Dental Care & Implant Center consulting a patient"
                fill
                priority
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-text-primary/85 to-transparent p-5 pt-24 text-white">
                <p className="font-body text-sm font-medium uppercase tracking-[0.2em] text-secondary">
                  Dental Care
                </p>
                <p className="mt-2 font-heading text-lg font-bold leading-normal text-balance md:text-xl">
                  Calm visits. Clear planning. Better oral health.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm sm:absolute sm:-bottom-6 sm:left-auto sm:right-8 sm:w-72">
            <p className="font-heading text-xl font-semibold text-text-primary">
              Patient-focused care
            </p>
            <p className="mt-2 font-body text-sm font-normal leading-normal text-text-secondary">
              Clear consultation, careful planning, and a comfortable visit
              experience for Rohini families.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  return (
    <AnimatedSection id="why-choose" className="section-padding relative isolate overflow-hidden bg-[#FAFAF9] bg-gradient-to-br from-white via-teal-50/40 to-white">
      <div className="pointer-events-none absolute -left-28 bottom-0 z-0 size-[28rem] rounded-full bg-secondary/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-28 top-6 z-0 size-[24rem] rounded-full bg-secondary-light opacity-[0.15] blur-[120px]" />
      <BackgroundDentalIcons variant="why" />
      <div className="container-narrow relative z-10">
        <SectionHeading
          eyebrow="Why Choose Navika"
          title="Why Patients Choose Us"
          description="Clear diagnosis, hygienic treatment, modern technology, and calm communication for every dental visit."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="group rounded-2xl border border-border bg-surface p-5 shadow-sm transition hover:-translate-y-0.5 hover:scale-[1.02] hover:border-primary hover:shadow-md"
              >
                <div className="mb-6 grid size-13 place-items-center rounded-full border border-border bg-soft-gray text-primary transition group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                  <Icon aria-hidden="true" className="size-6" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-text-primary md:text-xl">{item.title}</h3>
                <p className="mt-3 font-body text-base font-normal leading-normal text-text-secondary lg:text-lg">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}

function ServicesSection() {
  return (
    <AnimatedSection id="services" className="section-padding relative isolate overflow-hidden border-t border-border bg-surface">
      <BackgroundDentalIcons variant="services" />
      <div className="container-narrow relative z-10">
        <SectionHeading
          eyebrow="Dental Services"
          title="Complete Dental Care"
          description="Dental implants, root canals, cosmetic dentistry, gum care, children’s dentistry, and routine visits in Rohini."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group flex min-h-64 flex-col rounded-2xl border border-border bg-surface p-5 shadow-sm transition hover:-translate-y-0.5 hover:scale-[1.02] hover:border-primary hover:shadow-md"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="grid size-13 place-items-center rounded-full border border-border bg-soft-gray text-primary transition group-hover:border-primary group-hover:bg-secondary-light">
                    <Icon aria-hidden="true" className="size-6" />
                  </div>
                  <ArrowRight
                    aria-hidden="true"
                    className="size-5 shrink-0 self-center text-text-secondary transition group-hover:translate-x-1 group-hover:text-primary"
                  />
                </div>
                <h3 className="font-heading text-lg font-semibold text-text-primary md:text-xl">{service.title}</h3>
                <p className="mt-3 flex-1 font-body text-base font-normal leading-normal text-text-secondary lg:text-lg">
                  {service.description}
                </p>
                <a
                  href={clinic.whatsappHref}
                  className="focus-ring mt-6 inline-flex w-fit items-center justify-center rounded-xl border border-primary px-4 py-2.5 font-body text-sm font-medium text-primary shadow-sm transition hover:bg-soft-gray hover:text-primary-hover"
                  aria-label={`Ask about ${service.title}`}
                >
                  Ask about this treatment
                </a>
              </article>
            );
          })}
        </div>
        <div className="mt-6 rounded-2xl border border-border bg-surface p-5 shadow-sm transition hover:border-primary hover:shadow-md">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-heading text-lg font-semibold text-text-primary md:text-xl">
                Not sure which treatment you need?
              </h3>
              <p className="mt-1 max-w-2xl font-body text-base font-normal leading-normal text-text-secondary">
                Share your concern with Navika Dental in Rohini and the clinic
                team can guide you on the next step.
              </p>
            </div>
            <a
              href={clinic.whatsappHref}
              className="focus-ring inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-body text-base font-medium text-white shadow-sm transition hover:bg-primary-hover"
            >
              <MessageCircle aria-hidden="true" className="size-5 shrink-0 self-center" />
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

function DoctorSection() {
  return (
    <AnimatedSection id="doctor" className="section-padding relative isolate overflow-hidden border-t border-border bg-surface">
      <BackgroundDentalIcons variant="doctor" />
      <div className="container-narrow relative z-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="relative">
          <div className="relative min-h-[520px] overflow-hidden rounded-3xl bg-accent-light shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1100&q=85"
              alt="Dentist consultation at Navika Dental Care & Implant Center"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-text-primary/90 via-text-primary/55 to-transparent p-5 pt-28 text-white">
              <p className="font-heading text-2xl font-bold leading-normal">
                Dr. Navika
              </p>
              <p className="mt-1 font-body text-sm font-medium leading-normal text-white/85">
                5+ Years Experience
              </p>
            </div>
          </div>
        </div>

        <div>
          <SectionHeading
            align="left"
            eyebrow="Meet Your Dentist"
            title="Dental Care Team"
            description="Consultation-led care for implants, root canals, crowns, aligners, cosmetic dentistry, and preventive visits."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {doctorHighlights.map((highlight) => (
              <div
                key={highlight}
                className="flex gap-3 rounded-2xl border border-border bg-surface p-4 shadow-sm"
              >
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0 text-success"
                />
                <p className="font-body text-base font-normal leading-normal text-text-secondary">
                  {highlight}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <CredentialList title="Care Approach" items={careApproach} />
            <CredentialList title="Treatment Focus" items={treatmentFocus} />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

function CredentialList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-border bg-background p-5 shadow-sm">
      <h3 className="font-heading text-lg font-semibold text-text-primary md:text-xl">{title}</h3>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 font-body text-base font-normal leading-normal text-text-secondary">
            <CheckCircle2
              aria-hidden="true"
              className="mt-0.5 size-4 shrink-0 text-primary"
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProcessSection() {
  return (
    <AnimatedSection id="process" className="section-padding relative isolate overflow-hidden bg-text-primary text-white">
      <BackgroundDentalIcons variant="process" />
      <div className="container-narrow relative z-10">
        <SectionHeading
          tone="light"
          eyebrow="Treatment Process"
          title="Simple Treatment Journey"
          description="A clear four-step approach helps you understand each stage before, during, and after treatment."
        />
        <div className="relative grid gap-5 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-secondary/30 lg:block" />
          {processSteps.map((step, index) => (
            <article key={step.title} className="relative rounded-2xl border border-secondary/25 bg-surface/10 p-5 shadow-sm backdrop-blur transition hover:scale-[1.02] hover:shadow-md">
              <div className="mb-6 grid size-16 place-items-center rounded-full bg-surface font-heading text-xl font-bold text-primary shadow-sm ring-1 ring-border">
                {index + 1}
              </div>
              <h3 className="font-heading text-lg font-semibold md:text-xl">{step.title}</h3>
              <p className="mt-3 font-body text-base font-normal leading-normal text-secondary-light lg:text-lg">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

function CasesSection() {
  return (
    <AnimatedSection id="cases" className="section-padding relative isolate overflow-hidden border-t border-border bg-surface">
      <BackgroundDentalIcons variant="cases" />
      <div className="container-narrow relative z-10">
        <SectionHeading
          eyebrow="Treatment Planning"
          title="Treatment Planning Examples"
          description="Understand how common dental concerns can be evaluated, planned, and discussed during consultation."
        />
        <BeforeAfterGallery />
      </div>
    </AnimatedSection>
  );
}

function TestimonialsSection() {
  return (
    <AnimatedSection id="experiences" className="section-padding relative isolate overflow-hidden bg-background">
      <BackgroundDentalIcons variant="testimonials" />
      <div className="container-narrow relative z-10">
        <SectionHeading
          eyebrow="Patient Experiences"
          title="What Patients Appreciate"
          description="Common experience themes patients look for when choosing a dental clinic in Rohini."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-2xl border border-border bg-surface p-5 shadow-sm transition hover:scale-[1.02] hover:border-primary hover:shadow-md"
            >
              <Quote aria-hidden="true" className="mb-5 size-8 text-accent-light" />
              <p className="font-body text-base font-normal leading-normal text-text-secondary lg:text-lg">
                {testimonial.review}
              </p>
              <div className="mt-6 border-t border-border pt-5">
                <p className="font-heading text-base font-semibold text-text-primary">{testimonial.name}</p>
                <p className="font-body text-sm font-medium text-primary">
                  {testimonial.treatment}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-6 rounded-2xl bg-text-primary p-5 text-white shadow-sm lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:p-6">
          <div className="flex items-center gap-4">
            <div className="grid size-16 place-items-center rounded-full bg-surface">
              <PlayCircle aria-hidden="true" className="size-9 text-primary" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold md:text-xl">Treatment clarity</h3>
              <p className="mt-1 font-body text-base font-normal text-secondary-light">
                Patients receive clear explanations about diagnosis, options,
                hygiene, after-care, and expected next steps.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-secondary/25 bg-surface/10 p-5">
            <p className="font-body text-base font-normal leading-normal text-secondary-light lg:text-lg">
              Navika Dental focuses on practical guidance so patients can ask
              better questions and make informed treatment decisions.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

function FacilitiesSection() {
  return (
    <AnimatedSection id="facilities" className="section-padding relative isolate overflow-hidden bg-surface">
      <BackgroundDentalIcons variant="facilities" />
      <div className="container-narrow relative z-10">
        <SectionHeading
          eyebrow="Clinic Facilities"
          title="Clinic Facilities"
          description="A clean, calm, technology-supported dental environment designed for safety, comfort, and confidence."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {facilities.map((facility) => {
            const Icon = facility.icon;
            return (
              <article
                key={facility.title}
                className="rounded-2xl border border-border bg-surface p-5 shadow-sm transition hover:-translate-y-0.5 hover:scale-[1.02] hover:border-primary hover:shadow-md"
              >
                <div className="mb-6 grid size-13 place-items-center rounded-full border border-border bg-soft-gray text-primary">
                  <Icon aria-hidden="true" className="size-6" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-text-primary md:text-xl">{facility.title}</h3>
                <p className="mt-3 font-body text-base font-normal leading-normal text-text-secondary lg:text-lg">
                  {facility.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}

function FAQSection() {
  return (
    <AnimatedSection id="faq" className="section-padding relative isolate overflow-hidden border-t border-border bg-surface">
      <BackgroundDentalIcons variant="faq" />
      <div className="container-narrow relative z-10">
        <SectionHeading
          eyebrow="Dental FAQ"
          title="Dental Questions Answered"
          description="Helpful guidance for implants, root canals, smile makeovers, dental symptoms, and contacting the clinic."
        />
        <FAQAccordion />
      </div>
    </AnimatedSection>
  );
}

function ContactSection() {
  return (
    <AnimatedSection id="contact" className="section-padding relative isolate overflow-hidden bg-background pb-28 text-text-primary md:pb-24">
      <BackgroundDentalIcons variant="contact" />
      <div className="container-narrow relative z-10">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Contact The Clinic"
              title="Contact Navika Dental"
              description="Call or WhatsApp for implants, root canal treatment, smile makeover consultation, or family dental care."
            />

            <div className="space-y-4">
              <ContactCard
                icon={<MapPin aria-hidden="true" className="size-5 shrink-0 self-center" />}
                title="Clinic Address"
                detail={clinic.address}
              />
              <ContactCard
                icon={<Clock aria-hidden="true" className="size-5 shrink-0 self-center" />}
                title="Working Hours"
                detail={workingHours.join(" | ")}
              />
              <ContactCard
                icon={<Phone aria-hidden="true" className="size-5 shrink-0 self-center" />}
                title="Call"
                detail={clinic.phoneDisplay}
              />
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={clinic.phoneHref}
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-4 font-body text-base font-medium text-white shadow-sm transition hover:bg-primary-hover"
              >
                <Phone aria-hidden="true" className="size-5 shrink-0 self-center" />
                Call Now
              </a>
              <a
                href={clinic.whatsappHref}
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-xl border border-primary bg-surface px-7 py-4 font-body text-base font-medium text-primary shadow-sm transition hover:bg-soft-gray"
              >
                <MessageCircle aria-hidden="true" className="size-5 shrink-0 self-center" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-md lg:h-full">
            <iframe
              title="Map location for Navika Dental Care & Implant Center Rohini"
              src={`https://www.google.com/maps?q=${clinic.mapQuery}&output=embed`}
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[260px] w-full border-0 sm:h-[340px] lg:h-full lg:min-h-[560px]"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

function ContactCard({
  icon,
  title,
  detail
}: {
  icon: React.ReactNode;
  title: string;
  detail: string;
}) {
  return (
    <div className="flex gap-4 rounded-2xl border border-border bg-surface p-5 shadow-sm transition hover:border-primary hover:shadow-md">
      <div className="grid size-11 shrink-0 place-items-center rounded-full border border-border bg-soft-gray text-primary">
        {icon}
      </div>
      <div>
        <h3 className="font-heading text-lg font-semibold text-text-primary md:text-xl">{title}</h3>
        <p className="mt-1 font-body text-base font-normal leading-normal text-text-secondary">{detail}</p>
      </div>
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface pb-28 pt-5 text-center md:pb-[50px]">
      <div className="container-narrow">
        <a
          href="https://www.sintyz.com"
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring inline-flex flex-col items-center rounded-2xl px-4 py-2 transition hover:bg-soft-gray"
        >
          <span className="font-body text-xs font-medium text-text-secondary">
            Website Designed & Developed by{" "}
            <span className="font-semibold text-primary">Sintyz</span>
          </span>
          <span className="mt-1 font-body text-[0.68rem] font-medium uppercase tracking-[0.18em] text-text-secondary">
            Healthcare Website Specialists
          </span>
        </a>
      </div>
    </footer>
  );
}

function SintyzFloatingBadge() {
  return (
    <a
      href="https://www.sintyz.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Website by Sintyz"
      className="focus-ring fixed bottom-5 left-5 z-40 hidden items-center gap-2 rounded-full border border-primary/20 bg-surface/95 px-4 py-2 font-body text-xs font-semibold text-primary shadow-[0_12px_32px_rgba(15,118,110,0.16)] ring-1 ring-white/70 backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-primary/35 hover:bg-soft-gray hover:shadow-[0_16px_40px_rgba(15,118,110,0.2)] md:inline-flex"
    >
      <span aria-hidden="true">🚀</span>
      <span>Website by Sintyz</span>
    </a>
  );
}
