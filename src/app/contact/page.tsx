import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactSection } from "@/components/sections/ContactSection";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Faq } from "@/components/Faq";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import { Icon } from "@/components/Icon";
import { primaryPhone, secondaryPhone, site, telHref, waHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us — Request a Building or Design Quote",
  description:
    "Contact Building and Great Design in Adamawa State, Nigeria. Call 0905 502 1959 or 0708 456 3858, message us on WhatsApp, or send a project enquiry for a free quotation.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Building and Great Design",
    description:
      "GRA Road, Opposite Central Mosque, Adamawa State, Nigeria. Call 0905 502 1959 or 0708 456 3858, or send a project enquiry.",
    images: ["/images/opt/hero-duplex-1920.webp"],
  },
};

const faqs = [
  {
    question: "What happens after I submit the form?",
    answer:
      "Your enquiry is delivered to the business and reviewed by our team. We then contact you on the phone number you provided, usually within one business day, to discuss your project. If you prefer WhatsApp, message us directly and we will reply there.",
  },
  {
    question: "Is the first consultation really free?",
    answer:
      "Yes. The initial conversation about your project — what you want to build, where, and roughly what you can spend — is free and carries no obligation. Detailed design work and drawings are quoted separately.",
  },
  {
    question: "Can I visit your office?",
    answer: `Yes. We are at ${site.address.full}. Please call ahead on ${primaryPhone.display} so someone is available to attend to you when you arrive.`,
  },
  {
    question: "Do you reply to WhatsApp messages outside business hours?",
    answer:
      "Messages received outside business hours are answered as soon as we are back in the office. For anything urgent, calling during business hours is the fastest route.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Let's build something great together"
        description="Tell us about your project, ask a question about cost, or arrange a visit to our office. We respond during business hours on both phone lines and WhatsApp."
        image="/images/opt/hero-duplex-1920.webp"
        imageAlt="Modern duplex at dusk"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      >
        <div className="grid gap-2.5 sm:grid-cols-2 lg:max-w-2xl lg:grid-cols-4">
          <a href={telHref(primaryPhone)} className="btn-gold">
            <Icon name="phone" size={15} />
            {primaryPhone.display}
          </a>
          <a href={telHref(secondaryPhone)} className="btn-ghost-light">
            <Icon name="phone" size={15} />
            {secondaryPhone.display}
          </a>
          <a
            href={waHref(primaryPhone)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-navy-950 transition-transform duration-300 hover:-translate-y-0.5"
          >
            <Icon name="whatsapp" size={16} />
            WhatsApp
          </a>
          <a
            href={site.map.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost-light"
          >
            <Icon name="pin" size={15} />
            Directions
          </a>
        </div>
      </PageHero>

      <ContactSection full />

      <section className="section bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-4">
            <SectionHeading
              eyebrow="Before you write"
              title="Common questions"
              description="A few things people ask before sending their first message."
            />
            <div className="mt-7 rounded-2xl bg-navy-900 p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-400">
                Fastest response
              </p>
              <p className="mt-2 font-display text-sm font-semibold text-white">
                Call or WhatsApp
              </p>
              <p className="mt-1.5 text-[12px] leading-relaxed text-white/55">
                Phone is quickest during business hours. WhatsApp is best if you want to send
                site photos or sketches.
              </p>
              <a
                href={waHref(primaryPhone)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.1em] text-navy-950"
              >
                <Icon name="whatsapp" size={14} />
                Open WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={90} className="lg:col-span-8">
            <Faq items={faqs} />
          </Reveal>
        </div>
      </section>
      <FaqJsonLd items={faqs} />
    </>
  );
}
