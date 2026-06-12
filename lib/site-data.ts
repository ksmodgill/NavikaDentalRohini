import {
  BadgeCheck,
  CalendarCheck,
  HeartHandshake,
  Microscope,
  ShieldCheck,
  SmilePlus,
  Sparkles,
  Stethoscope,
  Syringe,
  Users,
  WandSparkles
} from "lucide-react";

export const clinic = {
  name: "Navika Dental Care & Implant Center",
  shortName: "Navika Dental",
  phoneDisplay: "+91 98211 07131",
  phoneHref: "tel:+919821107131",
  whatsappHref:
    "https://wa.me/919821107131?text=Hello%20Navika%20Dental%2C%20I%20would%20like%20to%20ask%20about%20dental%20treatment.",
  address:
    "Navika Dental Care & Implant Center, Rohini, New Delhi, Delhi 110085",
  mapQuery:
    "Navika%20Dental%20Care%20%26%20Implant%20Center%20Rohini%20New%20Delhi",
  directionsHref: "https://maps.app.goo.gl/mx4L2ASJRTjTnens6?g_st=aw",
  email: "care@navikadental.com",
  url: "https://navikadental.com",
  geo: {
    latitude: 28.7396,
    longitude: 77.1012
  }
};

export const trustBadges = [
  "Advanced Dental Care",
  "Modern Equipment",
  "High Sterilization Standards",
  "Patient-Focused Treatment"
];

export const whyChoose = [
  {
    title: "Personalized Care",
    description:
      "Treatment recommendations are tailored to your concern, comfort level, oral health goals, and long-term needs.",
    icon: HeartHandshake
  },
  {
    title: "Modern Dental Technology",
    description:
      "Digital diagnostics and contemporary dental equipment support clearer decisions and precise treatment planning.",
    icon: Microscope
  },
  {
    title: "Comfortable Experience",
    description:
      "A calm clinical environment, gentle communication, and comfort-first care help reduce treatment anxiety.",
    icon: Stethoscope
  },
  {
    title: "Transparent Planning",
    description:
      "Clear options, timelines, and cost explanations for implants, root canals, braces, crowns, and smile makeovers.",
    icon: BadgeCheck
  },
  {
    title: "Long-Term Oral Health",
    description:
      "Care is planned around healthy gums, stable bite function, preventive guidance, and durable dental results.",
    icon: ShieldCheck
  },
  {
    title: "Friendly Clinical Environment",
    description:
      "The clinic experience is designed to feel approachable, clean, organized, and easy to understand.",
    icon: CalendarCheck
  }
];

export const services = [
  {
    title: "Dental Implants",
    description:
      "Implant consultation and tooth replacement planning for missing teeth, with attention to comfort, function, and long-term maintenance.",
    icon: SmilePlus
  },
  {
    title: "Root Canal Treatment",
    description:
      "Tooth pain evaluation and root canal treatment planning for infected or damaged teeth, explained clearly before treatment begins.",
    icon: Syringe
  },
  {
    title: "Smile Makeover",
    description:
      "Cosmetic dental consultation for tooth shade, shape, spacing, alignment, and natural-looking smile improvements.",
    icon: Sparkles
  },
  {
    title: "Teeth Whitening",
    description:
      "Professional whitening guidance for patients who want a brighter smile with dentist-supervised shade planning.",
    icon: WandSparkles
  },
  {
    title: "Crowns & Bridges",
    description:
      "Restoration options for damaged, root-canal-treated, or missing teeth using crowns and bridges where clinically suitable.",
    icon: ShieldCheck
  },
  {
    title: "Braces & Aligners",
    description:
      "Alignment consultation for crowded teeth, spacing, and bite concerns, with guidance on braces or aligner suitability.",
    icon: BadgeCheck
  },
  {
    title: "Tooth Extraction",
    description:
      "Assessment for teeth that may need removal, including wisdom tooth concerns, pain control, and after-care instructions.",
    icon: SmilePlus
  },
  {
    title: "Pediatric Dentistry",
    description:
      "Gentle dental visits for children, including cavity checks, preventive guidance, habit counselling, and parent education.",
    icon: HeartHandshake
  },
  {
    title: "Gum Treatment",
    description:
      "Gum health evaluation, cleaning guidance, bleeding gum care, and maintenance support for healthier oral foundations.",
    icon: ShieldCheck
  }
];

export const processSteps = [
  {
    title: "Consultation",
    description:
      "Share your dental concern, medical history, and expectations with the clinic team in a calm consultation."
  },
  {
    title: "Diagnosis",
    description:
      "The dentist reviews your teeth, gums, bite, and any required diagnostic records before recommending care."
  },
  {
    title: "Treatment",
    description:
      "Treatment is carried out with clear communication, hygiene protocols, and attention to patient comfort."
  },
  {
    title: "Follow-up",
    description:
      "After-care guidance and review advice help protect healing, restorations, gums, and daily oral hygiene."
  }
];

export const beforeAfterCases = [
  {
    title: "Missing Tooth Planning",
    concern: "A consultation may include replacement options, gum and bone evaluation, and maintenance guidance.",
    before:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=80",
    after:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Smile Brightening",
    concern: "A smile consultation can review shade, stains, enamel health, and whitening suitability.",
    before:
      "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=900&q=80",
    after:
      "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Restoration Planning",
    concern: "Damaged or worn teeth can be evaluated for crowns, bridges, or other restorative options.",
    before:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80",
    after:
      "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=900&q=80"
  }
];

export const testimonials = [
  {
    name: "Clear Treatment Guidance",
    treatment: "Missing Tooth Consultation",
    review:
      "Patients are guided through tooth replacement options in simple language, including expected steps, care needs, and follow-up."
  },
  {
    name: "Comfort During Tooth Pain",
    treatment: "Root Canal Consultation",
    review:
      "Tooth pain visits are handled with a focus on diagnosis, comfort, and explaining why a tooth may need root canal treatment."
  },
  {
    name: "Conservative Smile Planning",
    treatment: "Smile Consultation",
    review:
      "Cosmetic concerns are discussed with a conservative approach, keeping natural appearance, gum health, and daily comfort in mind."
  }
];

export const facilities = [
  {
    title: "Modern Equipment",
    description:
      "The clinic is planned with modern dental equipment to support comfortable consultation and treatment workflows.",
    icon: Microscope
  },
  {
    title: "Sterilization Protocol",
    description:
      "Sterilization, disinfection, and clean surface protocols are treated as a core part of patient care.",
    icon: ShieldCheck
  },
  {
    title: "Comfortable Environment",
    description:
      "The clinic environment is designed to feel calm, clean, and approachable for adults, children, and anxious patients.",
    icon: HeartHandshake
  },
  {
    title: "Digital Diagnostics",
    description:
      "Diagnostic records, when required, help explain dental concerns and treatment options more clearly.",
    icon: BadgeCheck
  }
];

export const faqs = [
  {
    question: "How do I choose a dentist in Rohini for dental implants?",
    answer:
      "A good dental implant consultation in Rohini should include gum and bone evaluation, clear explanation of options, cost transparency, and maintenance guidance. Navika Dental Care & Implant Center helps patients understand whether implants are suitable for their case."
  },
  {
    question: "How much does a dental implant cost in Rohini?",
    answer:
      "Dental implant cost in Rohini depends on bone condition, implant system, crown material, diagnostic records, and whether any additional procedures are required. The clinic can share a clearer estimate after an in-person consultation."
  },
  {
    question: "Is root canal treatment painful?",
    answer:
      "Root canal treatment is usually performed with local anesthesia. The goal is to manage infection, protect the tooth when possible, and reduce pain caused by deep decay or nerve involvement."
  },
  {
    question: "When should I visit a dental clinic near me?",
    answer:
      "You should contact a dental clinic if you notice tooth pain, swelling, bleeding gums, sensitivity, a broken tooth, missing teeth, bad breath, or discomfort while chewing."
  },
  {
    question: "Do you offer smile makeover treatment in Rohini?",
    answer:
      "Smile consultation at Navika Dental can include discussion around whitening, bonding, veneers, crowns, gum appearance, and alignment. The right plan depends on tooth health, bite, gums, and expectations."
  },
  {
    question: "How do I contact Navika Dental?",
    answer:
      "You can call or send a WhatsApp message to Navika Dental Care & Implant Center in Rohini. The clinic team can guide you on the next step for consultation or treatment."
  }
];

export const trustPillars = [
  { label: "Dental Care Team", icon: Users },
  { label: "Modern Equipment", icon: Microscope },
  { label: "Comfortable Environment", icon: HeartHandshake },
  { label: "Personalized Treatment Plans", icon: BadgeCheck }
];

export const workingHours = [
  "Mon - Sat: 10:00 AM - 8:00 PM",
  "Sunday: By appointment"
];

export const doctorHighlights = [
  "Dental consultation focused on understanding the patient’s concern before recommending treatment",
  "Clear explanation of available treatment options, expected steps, and maintenance needs",
  "Care planning for implants, root canals, crowns, aligners, cosmetic dentistry, and preventive visits",
  "Patient-centered communication for families, working professionals, children, and senior citizens"
];

export const careApproach = [
  "Diagnosis before treatment decisions",
  "Transparent discussion of suitable options",
  "Comfort and hygiene during every visit",
  "After-care guidance for long-term oral health"
];

export const treatmentFocus = [
  "Dental implants and missing tooth replacement",
  "Root canal treatment and tooth pain care",
  "Smile design, whitening, crowns, and bridges",
  "Gum care, children’s dentistry, braces, and aligners"
];

export const seoKeywords = [
  "Dentist in Rohini",
  "Dental Clinic in Rohini",
  "Dental Implant Specialist in Rohini",
  "Dentist Near Me Rohini",
  "Root Canal Treatment Rohini",
  "Smile Makeover Rohini"
];
