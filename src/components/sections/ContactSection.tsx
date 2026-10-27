import Link from "next/link";
import { Reveal } from "../Reveal";
import { Icon } from "../Icon";
import { SectionHeading } from "../SectionHeading";
import { ContactForm } from "../ContactForm";
import { MapCard } from "../MapCard";
import { primaryPhone, secondaryPhone, site, telHref, waHref } from "@/lib/site";

type Props = {
  /** Show the full map card (contact page) or a compact address card (home). */
  full?: boolean;
};

export function ContactSection({ full = false }: Props) {
  return (
    <section className="section bg-mist" id="contact">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Contact us"
            title="Let's build something great together"
            description="Tell us about your project, or simply call and ask a question. There is no charge for an initial conversation and no pressure to proceed."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-12 lg:gap-8">
          {/* Contact details */}
          <div className="space-y-4 lg:col-span-5">
            <Reveal>
              <div className="card p-5 sm:p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-700">
                  Call or message
                </p>
                <div className="mt-4 space-y-2.5">
                  {[primaryPhone, secondaryPhone].map((phone, index) => (
                    <div key={phone.tel} className="flex items-stretch gap-2">
                      <a
                        href={telHref(phone)}
                        className="group flex flex-1 items-center gap-3 rounded-xl border border-navy-100 bg-white px-3.5 py-3 transition-all duration-300 hover:border-navy-800 hover:shadow-card"
                      >
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-navy-800 text-gold-300 transition-colors group-hover:bg-navy-900">
                          <Icon name="phone" size={15} />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[13px] font-semibold text-navy-900">
                            {phone.display}
                          </span>
                          <span className="block text-[10.5px] uppercase tracking-[0.12em] text-navy-500">
                            Tap to call · {index === 0 ? "main line" : "second line"}
                          </span>
                        </span>
                      </a>
                      <a
                        href={waHref(phone)}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Chat on WhatsApp with ${phone.display}`}
                        className="grid w-12 shrink-0 place-items-center rounded-xl border border-[#25D366]/30 bg-[#25D366]/10 text-[#1BAA55] transition-colors hover:bg-[#25D366]/15"
                      >
                        <Icon name="whatsapp" size={19} />
                      </a>
                    </div>
                  ))}
                </div>

                <a
                  href={waHref(primaryPhone)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-[12px] font-bold uppercase tracking-[0.1em] text-navy-950 transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <Icon name="whatsapp" size={16} />
                  Chat with us on WhatsApp
                </a>
              </div>
            </Reveal>

            <Reveal delay={90}>
              {full ? (
                <MapCard />
              ) : (
                <div className="card flex items-start gap-3 p-5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gold-100 text-gold-700">
                    <Icon name="pin" size={18} />
                  </span>
                  <div>
                    <p className="text-[13px] font-semibold text-navy-900">Visit our office</p>
                    <address className="mt-1 not-italic text-[12.5px] leading-relaxed text-navy-500">
                      {site.address.full}
                    </address>
                    <a
                      href={site.map.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-navy-700 underline-offset-4 hover:text-gold-700 hover:underline"
                    >
                      Get directions <Icon name="arrow" size={12} />
                    </a>
                  </div>
                </div>
              )}
            </Reveal>

            <Reveal delay={140}>
              <div className="card p-5">
                <div className="flex items-center gap-2.5">
                  <Icon name="clock" size={16} className="text-gold-700" />
                  <p className="text-[13px] font-semibold text-navy-900">Business hours</p>
                </div>
                <ul className="mt-3 space-y-2">
                  {site.hours.map((slot) => (
                    <li
                      key={slot.days}
                      className="flex items-center justify-between gap-4 border-b border-dashed border-navy-100 pb-2 text-[12.5px] last:border-0 last:pb-0"
                    >
                      <span className="text-navy-500">{slot.days}</span>
                      <span
                        className={`font-semibold ${
                          slot.time === "Closed" ? "text-navy-300" : "text-navy-800"
                        }`}
                      >
                        {slot.time}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-[10.5px] leading-relaxed text-navy-500">
                  Hours can be adjusted on request — please call ahead to confirm availability.
                </p>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="flex flex-wrap items-center gap-2 text-[11px] text-navy-500">
                <Link href="/pricing" className="underline-offset-4 hover:text-navy-700 hover:underline">
                  See service packages
                </Link>
                <span aria-hidden="true">·</span>
                <Link href="/projects" className="underline-offset-4 hover:text-navy-700 hover:underline">
                  Browse our projects
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-7" id="quote">
            <Reveal delay={60}>
              <ContactForm compact={!full} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
