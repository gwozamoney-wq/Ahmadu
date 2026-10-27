import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBand } from "@/components/sections/CtaBand";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { services } from "@/lib/content";
import { primaryPhone, waHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services — Architectural Design, Construction & Consultancy",
  description:
    "Explore our six services: architectural design, building construction, modern house design, interior and exterior design, renovation and remodeling, and building consultancy in Adamawa State, Nigeria.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Our Services | Building and Great Design",
    description:
      "Architectural design, construction, modern house design, interiors, renovation and building consultancy in Adamawa State, Nigeria.",
    images: ["/images/opt/project-concept-wide.webp"],
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Everything needed to plan, design and build well"
        description="Six connected services that can stand alone or work together — depending on how much of your project you want us to handle."
        image="/images/opt/project-concept-wide.webp"
        imageAlt="Architectural concept of a modern villa"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Services" }]}
      >
        <div className="flex flex-wrap gap-2.5">
          <Link href="/contact#quote" className="btn-gold">
            Get a Free Quote
            <Icon name="arrow" size={16} />
          </Link>
          <Link href="/pricing" className="btn-ghost-light">
            View Packages
          </Link>
        </div>
      </PageHero>

      {/* Quick index */}
      <section className="border-b border-navy-100 bg-white">
        <div className="container-x py-8">
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <a
                key={service.slug}
                href={`#${service.slug}`}
                className="group flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 transition-colors hover:border-navy-100 hover:bg-mist"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-navy-50 text-[11px] font-bold text-navy-500 transition-colors group-hover:bg-navy-800 group-hover:text-gold-300">
                  0{index + 1}
                </span>
                <span className="text-[13px] font-medium text-navy-700 group-hover:text-navy-900">
                  {service.title}
                </span>
                <Icon name="arrow" size={14} className="ml-auto text-navy-300 group-hover:text-gold-700" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed services */}
      <section className="bg-white">
        <div className="container-x py-14 sm:py-16 lg:py-20">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="What we deliver"
              title="Services in detail"
              description="Each service below lists what is included and who it suits. If your project needs a mix, we will combine them into one clear scope."
            />
          </Reveal>

          <div className="mt-12 space-y-14 lg:space-y-20">
            {services.map((service, index) => {
              const reversed = index % 2 === 1;
              return (
                <Reveal
                  key={service.slug}
                  as="article"
                  className="scroll-mt-28"
                >
                  <div id={service.slug} className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
                    <div
                      className={`lg:col-span-6 ${reversed ? "lg:order-2" : ""}`}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card">
                        <Image
                          src={service.image}
                          alt={service.imageAlt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover transition-transform duration-700 ease-premium hover:scale-[1.04]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/35 to-transparent" />
                        <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-navy-950/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-gold-200 backdrop-blur">
                          <Icon name={service.icon} size={13} />
                          0{index + 1}
                        </span>
                      </div>
                    </div>

                    <div className={`lg:col-span-6 ${reversed ? "lg:order-1" : ""}`}>
                      <h3 className="display-3">{service.title}</h3>
                      <p className="mt-3 text-[14px] leading-relaxed text-navy-500">
                        {service.intro}
                      </p>

                      <div className="mt-5 grid gap-5 sm:grid-cols-2">
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-700">
                            What&apos;s included
                          </p>
                          <ul className="mt-2.5 space-y-2">
                            {service.includes.map((item) => (
                              <li key={item} className="flex items-start gap-2 text-[12.5px] leading-relaxed text-navy-600">
                                <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-gold-100 text-gold-700">
                                  <Icon name="check" size={10} />
                                </span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-700">
                            Good for
                          </p>
                          <ul className="mt-2.5 space-y-2">
                            {service.goodFor.map((item) => (
                              <li key={item} className="flex items-start gap-2 text-[12.5px] leading-relaxed text-navy-600">
                                <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-300" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-6 flex flex-wrap items-center gap-3">
                        <Link
                          href={`/contact?service=${encodeURIComponent(service.title)}#quote`}
                          className="btn-navy btn-sm"
                        >
                          Request a Quote
                          <Icon name="arrow" size={14} />
                        </Link>
                        <a
                          href={waHref(
                            primaryPhone,
                            `Hello Building and Great Design, I am interested in your ${service.title} service. I would like to discuss my project and get an affordable quotation.`,
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-navy-600 transition-colors hover:text-gold-700"
                        >
                          <Icon name="whatsapp" size={15} className="text-[#25D366]" />
                          Ask on WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <ProcessSection compact />
      <CtaBand
        title="Not sure which service you need?"
        text="Describe your situation — a plot you have just bought, a house that needs work, a design you want reviewed — and we will point you in the right direction."
      />
    </>
  );
}
