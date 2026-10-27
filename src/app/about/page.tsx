import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { CtaBand } from "@/components/sections/CtaBand";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us — Building Excellence, One Project at a Time",
  description:
    "Building and Great Design is a construction and architectural design studio in Adamawa State, Nigeria, focused on affordable, durable and beautifully designed buildings.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Building and Great Design",
    description:
      "A hands-on building and architectural design studio in Adamawa State, Nigeria — transforming ideas into functional, durable structures.",
    images: ["/images/opt/about-team-wide.webp"],
  },
};

const principles = [
  {
    icon: "wallet" as const,
    title: "Affordability is a design decision",
    text: "A plan that ignores your budget is not a good plan. We discuss cost early and design within realistic limits, so the drawing you approve is one you can actually build.",
  },
  {
    icon: "shield" as const,
    title: "Durability over shortcuts",
    text: "Materials and details are chosen for the Nigerian climate — heat, rain and heavy use. We would rather advise a slower, sound approach than a quick fix that fails.",
  },
  {
    icon: "chat" as const,
    title: "Clarity at every stage",
    text: "Scope, cost and sequence are discussed in plain language before work starts. If something changes, you hear about it from us first.",
  },
  {
    icon: "heart" as const,
    title: "Built around your life",
    text: "Your family's routines, your business's customers and your plans for the future shape the layout — not a template that was designed for someone else.",
  },
];

const approach = [
  {
    title: "We start with your brief",
    text: "A conversation about how you want to live or work, what you already own and what you can spend. No drawings until we understand the brief.",
  },
  {
    title: "We design for the site",
    text: "Orientation, access, drainage, privacy and prevailing breeze all shape the plan — because the same house performs differently on a different plot.",
  },
  {
    title: "We plan the sequence",
    text: "Construction is staged so materials, labour and payments are predictable, with clear checkpoints before the next phase begins.",
  },
  {
    title: "We stay reachable",
    text: "You have two phone lines, WhatsApp and this website. Questions get answered by the people actually handling your project.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Building excellence, one project at a time"
        description="We are a building and architectural design studio based in Adamawa State, Nigeria — helping homeowners, businesses and investors turn clear ideas into well-built spaces."
        image="/images/opt/about-team-wide.webp"
        imageAlt="Architects reviewing building plans"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      >
        <div className="flex flex-wrap gap-2.5">
          <Link href="/contact#quote" className="btn-gold">
            Book a Free Consultation
            <Icon name="arrow" size={16} />
          </Link>
          <Link href="/services" className="btn-ghost-light">
            Our Services
          </Link>
        </div>
      </PageHero>

      {/* Story */}
      <section className="section bg-white">
        <div className="container-x grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src="/images/opt/about-team-wide.webp"
                  alt="Two architects discussing drawings in a studio"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-3 w-56 rounded-xl bg-gold-sheen p-4 shadow-lift sm:right-6">
                <p className="font-display text-[13px] font-semibold leading-snug text-navy-950">
                  “Make quality building services accessible and affordable.”
                </p>
                <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-navy-900/60">
                  Our founding goal
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-7">
            <p className="eyebrow">Our story</p>
            <h2 className="display-2 mt-4">
              Design that respects your budget — and your future
            </h2>
            <div className="prose-brand mt-6">
              <p>
                At Building and Great Design, we are passionate about transforming ideas into
                beautiful, functional and durable structures. We provide building and
                architectural design solutions tailored to our clients&apos; needs, preferences
                and budgets.
              </p>
              <p>
                Our goal is to make quality building services accessible and affordable while
                maintaining professional standards, attention to detail and customer
                satisfaction. Whether you are planning your dream home, renovating an existing
                property or developing a commercial building, we are ready to help bring your
                vision to life.
              </p>
              <p>
                We work from {site.address.street}, {site.address.city}, and support clients
                across Adamawa State and beyond. Because we are a hands-on studio, the person
                who discusses your brief is the same person who prepares your drawings and
                follows your project through construction.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-navy-100 bg-mist/60 p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-700">
                  What we do
                </p>
                <p className="mt-2 text-[13px] leading-relaxed text-navy-600">
                  Architectural design, construction, modern house design, interiors and
                  exteriors, renovation and building consultancy.
                </p>
              </div>
              <div className="rounded-xl border border-navy-100 bg-mist/60 p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-700">
                  Who we work with
                </p>
                <p className="mt-2 text-[13px] leading-relaxed text-navy-600">
                  Homeowners, landlords, property developers, investors and businesses building
                  in Nigeria.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Principles */}
      <section className="section bg-mist">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="What guides us"
              title="Four principles behind every project"
              description="These are not slogans on a wall — they decide how we scope work, what we recommend and when we tell you to slow down."
            />
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {principles.map((principle, index) => (
              <Reveal key={principle.title} delay={index * 80}>
                <div className="card card-hover h-full p-6">
                  <span className="icon-badge">
                    <Icon name={principle.icon} size={21} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-navy-900">
                    {principle.title}
                  </h3>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-navy-500">
                    {principle.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <SectionHeading
              eyebrow="Our approach"
              title="How we actually work"
              description="A simple, repeatable way of working that keeps drawings, costs and construction in step with each other."
            />
            <Link href="/process" className="btn-outline mt-7">
              See Our Full Process
              <Icon name="arrow" size={15} />
            </Link>
          </Reveal>

          <div className="lg:col-span-8">
            <ol className="relative border-l border-navy-100 pl-7">
              {approach.map((item, index) => (
                <Reveal as="li" key={item.title} delay={index * 80} className="relative pb-8 last:pb-0">
                  <span className="absolute -left-[35px] top-0 grid h-6 w-6 place-items-center rounded-full border border-gold-300 bg-white text-[10px] font-bold text-gold-700">
                    {index + 1}
                  </span>
                  <h3 className="font-display text-base font-semibold text-navy-900">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 max-w-xl text-[13.5px] leading-relaxed text-navy-500">
                    {item.text}
                  </p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <ProcessSection compact tone="mist" />
      <CtaBand
        title="Let's talk about what you want to build"
        text="Share your plot, your budget range and the kind of building you have in mind. We will come back with honest, practical next steps."
      />
    </>
  );
}
