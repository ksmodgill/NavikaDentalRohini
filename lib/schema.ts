import { clinic, faqs, services, workingHours } from "@/lib/site-data";

export function buildJsonLd() {
  const dentistSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${clinic.url}/#dentist`,
    name: clinic.name,
    url: clinic.url,
    telephone: clinic.phoneDisplay,
    email: clinic.email,
    image: `${clinic.url}/opengraph-image`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rohini",
      addressLocality: "New Delhi",
      addressRegion: "Delhi",
      postalCode: "110085",
      addressCountry: "IN"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: clinic.geo.latitude,
      longitude: clinic.geo.longitude
    },
    areaServed: [
      "Rohini",
      "North Delhi",
      "Pitampura",
      "Prashant Vihar",
      "Shalimar Bagh"
    ],
    medicalSpecialty: [
      "Dental Implants",
      "Endodontics",
      "Cosmetic Dentistry",
      "Pediatric Dentistry",
      "Orthodontics"
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "14:00",
        description: workingHours[1]
      }
    ],
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "MedicalProcedure",
        name: service.title,
        description: service.description
      }
    }))
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${clinic.url}/#localbusiness`,
    name: clinic.name,
    url: clinic.url,
    telephone: clinic.phoneDisplay,
    address: dentistSchema.address,
    geo: dentistSchema.geo,
    image: `${clinic.url}/opengraph-image`
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return [dentistSchema, localBusinessSchema, faqSchema];
}
