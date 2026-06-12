import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { colors } from "@/lib/design-tokens";
import { clinic, seoKeywords } from "@/lib/site-data";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope"
});

const title =
  "Navika Dental Care & Implant Center | Dentist in Rohini, Delhi";
const description =
  "Dental clinic in Rohini for dental implants, root canal treatment, smile makeovers, braces, whitening, crowns, gum care, and family dentistry.";

export const metadata: Metadata = {
  metadataBase: new URL(clinic.url),
  title: {
    default: title,
    template: "%s | Navika Dental"
  },
  description,
  keywords: seoKeywords,
  authors: [
    {
      name: "Sintyz Technologies",
      url: "https://www.sintyz.com"
    }
  ],
  generator: "Sintyz Healthcare Platform",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: clinic.url,
    siteName: clinic.name,
    title,
    description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Navika Dental Care & Implant Center in Rohini"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  category: "Healthcare"
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: colors.primary
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body className={`${inter.variable} ${manrope.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
