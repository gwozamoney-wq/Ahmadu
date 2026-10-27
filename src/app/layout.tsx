import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/montserrat";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactDock } from "@/components/ContactDock";
import { primaryPhone, secondaryPhone, site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Building and Great Design | Construction & Architectural Design in Adamawa",
    template: "%s | Building and Great Design",
  },
  description: site.description,
  keywords: [
    "building construction Adamawa",
    "architectural design Nigeria",
    "modern house design Adamawa",
    "duplex design Nigeria",
    "bungalow plan Adamawa",
    "renovation and remodeling Nigeria",
    "building consultancy Adamawa",
    "building and great design",
  ],
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: site.url,
    siteName: site.name,
    title: "Building and Great Design | Construction & Architectural Design",
    description:
      "Architectural design, modern house design and quality construction in Adamawa State, Nigeria. Affordable, personalised building solutions — request a free quote.",
    images: [
      {
        url: "/images/opt/hero-duplex-1920.webp",
        width: 1920,
        height: 1071,
        alt: "Modern luxury duplex designed and built in Nigeria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Building and Great Design",
    description:
      "Construction and architectural design studio in Adamawa State, Nigeria. Quality construction, creative designs, affordable solutions.",
    images: ["/images/opt/hero-duplex-1920.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "Construction and Architecture",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#102B46",
  colorScheme: "light",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: [primaryPhone.tel, secondaryPhone.tel],
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: "Adamawa State",
    addressRegion: "Adamawa State",
    addressCountry: "NG",
  },
  areaServed: {
    "@type": "State",
    name: "Adamawa State, Nigeria",
  },
  knowsAbout: [
    "Architectural design",
    "Building construction",
    "Modern house design",
    "Interior and exterior design",
    "Renovation and remodeling",
    "Building consultancy",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "15:00",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NG">
      <body className="min-h-dvh bg-white font-sans">
        <script
          // Enables the scroll-reveal styles only when scripting is available.
          dangerouslySetInnerHTML={{ __html: 'document.documentElement.classList.add("js")' }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-navy-900 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <ContactDock />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
