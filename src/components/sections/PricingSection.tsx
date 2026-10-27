import Link from "next/link";
import { Reveal } from "../Reveal";
import { Icon } from "../Icon";
import { SectionHeading } from "../SectionHeading";
import { packages } from "@/lib/content";
import { primaryPhone, waHref } from "@/lib/site";

export function PricingSection({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section className="section bg-mist" id="pricing">
      <div className="container-x">
        {showHeading && (
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Pricing"
              title="Quality building services at affordable prices"
              description="We believe excellent design and quality building solutions should be accessible to everyone. Our services are tailored to your project requirements and budget."
            />
          </Reveal>
        )}

        <div className="mt-10 grid items-stretch gap-6 lg:mt-12 lg:grid-cols-3">
          {packages.map((pack, index) => (
            <Reveal key={pack.name} delay={index * 90} className="h-full">
              <div
                className={`relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 transition-all duration-500 ease-premium sm:p-7 ${
                  pack.featured
                    ? "border-navy-800 bg-navy-900 text-white shadow-lift lg:-mt-4 lg:mb-4"
                    : "border-navy-100 bg-white shadow-card hover:-translate-y-1 hover:shadow-lift"
                }`}
              >
                {pack.featured && (
                  <>
                    <div
                      className="pointer-events-none absolute inset-0 blueprint-grid opacity-60"
                      aria-hidden="true"
                    />
                    <span className="absolute right-5 top-5 rounded-full bg-gold-sheen px-3 py-1 text-[9.5px] font-bold uppercase tracking-[0.14em] text-navy-950">
                      Most requested
                    </span>
                  </>
                )}

                <div className="relative">
                  <p
                    className={`text-[10px] font-semibold uppercase tracking-[0.22em] ${
                      pack.featured ? "text-gold-300" : "text-gold-700"
                    }`}
                  >
                    {index === 0 ? "Start here" : index === 1 ? "Best balance" : "Full support"}
                  </p>
                  <h3
                    className={`mt-2.5 font-display text-xl font-semibold ${
                      pack.featured ? "text-white" : "text-navy-900"
                    }`}
                  >
                    {pack.name}
                  </h3>
                  <p
                    className={`mt-1.5 text-[13px] leading-relaxed ${
                      pack.featured ? "text-white/60" : "text-navy-500"
                    }`}
                  >
                    {pack.audience}
                  </p>

                  <div
                    className={`mt-5 rounded-xl border p-3.5 ${
                      pack.featured
                        ? "border-white/10 bg-white/5"
                        : "border-navy-100 bg-mist/70"
                    }`}
                  >
                    <p
                      className={`font-display text-lg font-semibold tracking-tight ${
                        pack.featured ? "text-gold-300" : "text-navy-800"
                      }`}
                    >
                      Request a Quote
                    </p>
                    <p
                      className={`mt-0.5 text-[11px] leading-relaxed ${
                        pack.featured ? "text-white/45" : "text-navy-500"
                      }`}
                    >
                      Priced by project size, materials, location and complexity.
                    </p>
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {pack.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <span
                          className={`mt-0.5 grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full ${
                            pack.featured
                              ? "bg-gold-400/15 text-gold-300"
                              : "bg-gold-100 text-gold-700"
                          }`}
                        >
                          <Icon name="check" size={11} />
                        </span>
                        <span
                          className={`text-[13px] leading-relaxed ${
                            pack.featured ? "text-white/70" : "text-navy-600"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-7">
                  <Link
                    href={`/contact?package=${encodeURIComponent(pack.name)}#quote`}
                    className={`relative w-full ${pack.featured ? "btn-gold" : "btn-outline"}`}
                  >
                    {pack.cta}
                    <Icon name="arrow" size={15} />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-8 max-w-3xl text-center">
          <p className="text-[12px] leading-relaxed text-navy-500">
            Every project is different, so we don&apos;t publish fixed construction prices.
            Tell us about your plot, your plans and your budget and we will prepare a clear,
            itemised quotation — free of charge and with no obligation.
          </p>
          <div className="mt-5 flex flex-col items-center justify-center gap-2.5 sm:flex-row">
            <Link href="/contact#quote" className="btn-navy btn-sm">
              Request a Personalised Quote
            </Link>
            <a
              href={waHref(
                primaryPhone,
                "Hello Building and Great Design, I would like an affordable quotation for my building project.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline btn-sm"
            >
              <Icon name="whatsapp" size={15} className="text-[#25D366]" />
              Ask on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
