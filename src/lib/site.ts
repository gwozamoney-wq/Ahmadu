/**
 * Central business configuration.
 * ------------------------------------------------------------------
 * Everything the business owner is likely to change lives here:
 * phone numbers, address, opening hours, map settings and the
 * WhatsApp message. Update this file and every page follows.
 */

export type Phone = {
  /** How the number is displayed to visitors */
  display: string;
  /** E.164 format for tel: links */
  tel: string;
  /** Digits only, international format (no +) for wa.me links */
  whatsapp: string;
  label: string;
};

export const site = {
  name: "Building and Great Design",
  shortName: "B&GD",
  initials: "BG",
  tagline: "Quality Construction | Creative Designs | Affordable Solutions",
  description:
    "Building and Great Design is a construction and architectural design studio in Adamawa State, Nigeria. We design and build beautiful, durable and affordable homes, commercial buildings and interiors.",
  url: "https://buildingandgreatdesign.com",
  address: {
    street: "GRA Road, Opposite Central Mosque",
    city: "Adamawa State",
    region: "Adamawa State",
    country: "Nigeria",
    countryCode: "NG",
    /** Human readable, single line */
    full: "GRA Road, Opposite Central Mosque, Adamawa State, Nigeria",
  },
  /** Primary number first — used for the floating WhatsApp button. */
  phones: [
    {
      display: "0905 502 1959",
      tel: "+2349055021959",
      whatsapp: "2349055021959",
      label: "Primary line",
    },
    {
      display: "0708 456 3858",
      tel: "+2347084563858",
      whatsapp: "2347084563858",
      label: "Second line",
    },
  ] as Phone[],
  whatsappMessage:
    "Hello Building and Great Design, I am interested in your building and architectural design services. I would like to discuss my project and get an affordable quotation.",
  /**
   * Opening hours — EDIT THESE to match the real business hours.
   * They are shown on the contact page with a note that they can be
   * confirmed by phone, so nothing is presented as a live status.
   */
  hours: [
    { days: "Monday – Friday", time: "8:00 AM – 5:00 PM" },
    { days: "Saturday", time: "9:00 AM – 3:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
  /**
   * Map. The pin is an address search for the location supplied by the
   * business — set `confirmed` to true once the exact coordinates have
   * been verified, which removes the "approximate" caption.
   */
  map: {
    query: "GRA Road, Opposite Central Mosque, Adamawa State, Nigeria",
    confirmed: false,
    link: "https://www.google.com/maps/search/?api=1&query=GRA+Road%2C+Opposite+Central+Mosque%2C+Adamawa+State%2C+Nigeria",
  },
  /** Social links — add the business profiles here when available. */
  socials: [] as { label: string; href: string }[],
} as const;

export const telHref = (phone: Phone) => `tel:${phone.tel}`;

export const waHref = (phone: Phone, message: string = site.whatsappMessage) =>
  `https://wa.me/${phone.whatsapp}?text=${encodeURIComponent(message)}`;

export const primaryPhone = site.phones[0];
export const secondaryPhone = site.phones[1];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Projects", href: "/projects" },
  { label: "Our Process", href: "/process" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
] as const;

export const trustPoints = [
  "Free initial consultation",
  "Personalised, transparent quotes",
  "Design-led, quality-focused builds",
  "Proudly based in Adamawa State",
] as const;
