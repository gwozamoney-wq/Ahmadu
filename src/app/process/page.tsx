import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { SectionHeading } from "@/components/SectionHeading";
import { Faq } from "@/components/Faq";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Our Process — From Consultation to Project Handover",
  description:
    "A clear four-step process: consultation, planning and design, quotation and approval, then project execution with quality and progress checks.",
  alternates: { canonical: "/process" },
  openGraph: {
    title: "Our Working Process | Building and Great Design",
    description:
      "Four straightforward stages that keep scope, cost and timelines clear from the first conversation to handover.",
    images: ["/images/opt/project-bungalow-wide.webp"],
  },
};

const prepare = [
  {
    title: "Your plot information",
    text: "Approximate size, location and any survey plan or title documents you already have.",
  },
  {
    title: "What you want to build",
    text: "Number of bedrooms, rooms you need, whether it is for family, rental or business use.",
  },
  {
    title: "A realistic budget range",
    text: "Even a rough range helps us advise on size, materials and phasing. It stays confidential.",
  },
  {
    title: "Any existing drawings",
    text: "A sketch, a plan from a previous designer, or photographs of a style you like.",
  },
];

const afterContact = [
  {
    title: "We acknowledge your enquiry",
    text: "You receive a reply by phone, WhatsApp or email — whichever you prefer — during business hours.",
  },
  {
    title: "A short discovery conversation",
    text: "We ask about the site, the brief, your timeline and your budget. No charge, no obligation.",
  },
  {
    title: "A written scope and quotation",
    text: "You receive the proposed scope, deliverables and costs in writing before committing to anything.",
  },
  {
    title: "Work begins only after approval",
    text: "Nothing is ordered or started until you approve the quotation and confirm how you want to proceed.",
  },
];

const faqs = [
  {
    question: "How long does a design take?",
    answer:
      "It depends on the size and complexity of the building and how quickly decisions are made. A straightforward home design is usually faster than a commercial project with multiple revisions. We give you an estimated timeline in writing before we start.",
  },
  {
    question: "Can I build in phases as funds become available?",
    answer:
      "Yes — and it is common. We can plan your project in stages (for example foundation and structure first, finishing later) so work stops at a sensible point. Phasing is discussed at quotation stage so costs and scope stay clear.",
  },
  {
    question: "Do you work outside Adamawa State?",
    answer:
      "Our base is in Adamawa State. For projects further away, we discuss what is practical for site visits and supervision before agreeing to take the work on. Call us and we will be honest about it.",
  },
  {
    question: "Can you work with my own contractor or builder?",
    answer:
      "Yes. We can provide the drawings, specification and consultancy support while you or your contractor handle construction, or we can discuss a fuller scope. The split is agreed in writing.",
  },
  {
    question: "What if I only need a floor plan and not full construction?",
    answer:
      "That is fine. Architectural design and house design can be taken on their own. The Basic and Standard packages cover design-focused support, and you can request construction later.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Our process"
        title="A clear path from first conversation to handover"
        description="Building should not feel like guesswork. Here is exactly how a project moves forward with us — and what you can expect at each stage."
        image="/images/opt/project-duplex-wide.webp"
        imageAlt="Contemporary duplex concept with stone cladding"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Our Process" }]}
      >
        <Link href="/contact#quote" className="btn-gold">
          Start Your Project Today
          <Icon name="arrow" size={16} />
        </Link>
      </PageHero>

      <ProcessSection />

      <section className="section bg-mist">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="Be prepared"
              title="What to have ready before we talk"
              description="You do not need finished drawings or a fixed budget to contact us. These four things simply help the first conversation go further."
            />
            <div className="mt-7 rounded-2xl border border-gold-200 bg-gold-50/50 p-5">
              <div className="flex items-center gap-2.5">
                <Icon name="chat" size={17} className="text-gold-700" />
                <p className="text-[13px] font-semibold text-navy-900">
                  Nothing ready yet? That&apos;s normal.
                </p>
              </div>
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-navy-600">
                Many clients start with only an idea and a plot. Bring the idea — we will help
                you work out the rest in the right order.
              </p>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {prepare.map((item, index) => (
                <Reveal key={item.title} delay={index * 70}>
                  <div className="card h-full p-5">
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-navy-800 text-[11px] font-bold text-gold-300">
                      0{index + 1}
                    </span>
                    <h3 className="mt-4 font-display text-[14px] font-semibold text-navy-900">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[12.5px] leading-relaxed text-navy-500">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="After you contact us"
              title="What happens next"
              description="We keep the early steps quick and low-risk, so you can make a decision with full information."
            />
          </Reveal>
          <div className="lg:col-span-7">
            <ol className="space-y-3">
              {afterContact.map((item, index) => (
                <Reveal as="li" key={item.title} delay={index * 70}>
                  <div className="flex gap-4 rounded-xl border border-navy-100 bg-white p-4 transition-colors hover:border-gold-200 hover:bg-gold-50/30">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gold-100 text-[11px] font-bold text-gold-700">
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-[13.5px] font-semibold text-navy-900">{item.title}</p>
                      <p className="mt-1 text-[12.5px] leading-relaxed text-navy-500">{item.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="container-x max-w-3xl">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Questions"
              title="Process questions, answered"
            />
          </Reveal>
          <Reveal className="mt-8">
            <Faq items={faqs} />
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Step one is a conversation"
        text="Tell us where you are in the process — land only, drawings done, halfway through a build — and we will tell you how we can help."
      />
      <FaqJsonLd items={faqs} />
    </>
  );
}
