import Link from "next/link";
import { Reveal } from "../Reveal";
import { Icon } from "../Icon";
import { SectionHeading } from "../SectionHeading";
import { benefits } from "@/lib/content";

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-16 sm:py-20 lg:py-28" id="why-us">
      <div className="absolute inset-0 blueprint-grid opacity-70" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-32 top-10 h-[420px] w-[420px] rounded-full bg-gold-500/10 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-40 bottom-0 h-[380px] w-[380px] rounded-full bg-navy-500/20 blur-[120px]"
        aria-hidden="true"
      />

      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                light
                eyebrow="Why choose us"
                title={
                  <>
                    Why choose
                    <br className="hidden sm:block" /> Building and Great Design?
                  </>
                }
                description="We are a small, hands-on studio. That means direct communication, honest advice about cost, and a design that is genuinely yours — not a copy of a catalogue plan."
              />
            </Reveal>

            <Reveal delay={120} className="mt-8">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold-sheen text-navy-950">
                    <Icon name="chat" size={20} />
                  </span>
                  <div>
                    <p className="font-display text-sm font-semibold text-white">
                      Talk to a person, not a call centre
                    </p>
                    <p className="mt-0.5 text-xs text-white/50">
                      Call, WhatsApp or send the enquiry form — we respond during business hours.
                    </p>
                  </div>
                </div>
                <Link href="/contact#quote" className="btn-gold btn-sm mt-4 w-full">
                  Get a Free Quote
                  <Icon name="arrow" size={15} />
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <Reveal key={benefit.title} delay={index * 70}>
                  <div className="group h-full rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-5 transition-all duration-500 ease-premium hover:-translate-y-1 hover:border-gold-400/40 hover:from-white/[0.1]">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gold-400/25 bg-gold-400/10 text-gold-300 transition-colors duration-500 group-hover:bg-gold-sheen group-hover:text-navy-950">
                      <Icon name={benefit.icon} size={19} />
                    </span>
                    <h3 className="mt-4 font-display text-[15px] font-semibold text-white">
                      {benefit.title}
                    </h3>
                    <p className="mt-1.5 text-[12.5px] leading-relaxed text-white/55">
                      {benefit.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
