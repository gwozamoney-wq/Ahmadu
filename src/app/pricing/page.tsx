import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { PricingSection } from "@/components/sections/PricingSection";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { SectionHeading } from "@/components/SectionHeading";
import { Faq } from "@/components/Faq";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Pricing — Affordable Building & Design Packages",
  description:
    "Basic, Standard and Premium service packages for architectural design and building projects in Nigeria. Pricing is quoted per project — request a personalised, no-obligation quotation.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing & Packages | Building and Great Design",
    description:
      "Three flexible service packages for design and building support, with quotations tailored to your project size, materials, location and complexity.",
    images: ["/images/opt/project-bungalow-wide.webp"],
  },
};

const factors = [
  {
    title: "Project size",
    text: "A three-bedroom bungalow and a four-storey commercial building need very different levels of drawing, detailing and supervision.",
    icon: "house" as const,
  },
  {
    title: "Materials and finishes",
    text: "Roof type, windows, tiles, kitchen specification and cladding all move cost significantly. We present options at different price points.",
    icon: "sparkle" as const,
  },
  {
    title: "Location and site conditions",
    text: "Access, ground conditions, distance for materials and labour availability all affect the build — especially outside the main town.",
    icon: "pin" as const,
  },
  {
    title: "Complexity and scope",
    text: "Structural complexity, number of revisions, phasing and whether you need consultancy only or construction as well.",
    icon: "blueprint" as const,
  },
];

const faqs = [
  {
    question: "Why don't you show fixed prices?",
    answer:
      "Because a fixed price without seeing your plot, drawings and specification would be misleading. Construction costs vary with size, materials, ground conditions and location. Instead we give you a written quotation based on your actual project — free and with no obligation.",
  },
  {
    question: "Are these packages the only option?",
    answer:
      "No. The three packages are simply starting points so you can see the level of support available. Most clients end up with a combination tailored to their project, and we are happy to quote for a single service such as a floor plan.",
  },
  {
    question: "Will the price change after work starts?",
    answer:
      "Only if the scope changes, and only with your written approval first. If a site condition or material availability requires a different approach, we discuss the effect on cost before proceeding.",
  },
  {
    question: "How do I get a quotation?",
    answer:
      "Use the enquiry form on the contact page, call 0905 502 1959 or message us on WhatsApp. Share the project type, location, approximate size and your budget range, and we will come back with clear next steps.",
  },
  {
    question: "Do you offer payment in stages?",
    answer:
      "Project costs are usually structured in stages tied to milestones, which is standard practice for building work. The exact structure is agreed in the quotation so both sides know what is due and when.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Affordable packages, quoted around your project"
        description="No hidden figures and no invented price lists. Choose the level of support you need, then request a clear quotation based on your real requirements."
        image="/images/opt/project-bungalow-wide.webp"
        imageAlt="Modern bungalow concept with landscaped garden"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Pricing" }]}
      >
        <div className="flex flex-wrap gap-2.5">
          <Link href="/contact#quote" className="btn-gold">
            Request a Quote
            <Icon name="arrow" size={16} />
          </Link>
          <Link href="/services" className="btn-ghost-light">
            Compare Services
          </Link>
        </div>
      </PageHero>

      <PricingSection showHeading={false} />

      <section className="section bg-white">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Cost drivers"
              title="What affects the price of your project"
              description="Understanding these four factors early helps you make decisions that protect your budget."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {factors.map((factor, index) => (
              <Reveal key={factor.title} delay={index * 70}>
                <div className="card card-hover flex h-full gap-4 p-5 sm:p-6">
                  <span className="icon-badge shrink-0">
                    <Icon name={factor.icon} size={20} />
                  </span>
                  <div>
                    <h3 className="font-display text-[15px] font-semibold text-navy-900">
                      {factor.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-navy-500">{factor.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-4">
            <SectionHeading
              eyebrow="Pricing questions"
              title="Straight answers about cost"
              description="If your question is not here, ask it directly — we answer pricing questions honestly, even when the answer is 'it depends'."
            />
            <Link href="/contact" className="btn-outline mt-7">
              Ask a Pricing Question
              <Icon name="arrow" size={15} />
            </Link>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-8">
            <Faq items={faqs} />
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Get a quotation built around your budget"
        text="Send your project details and we will reply with a clear scope, a realistic cost range and the next step — free of charge."
      />
      <FaqJsonLd items={faqs} />
    </>
  );
}
