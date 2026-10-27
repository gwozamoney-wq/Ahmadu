import Link from "next/link";
import { Logo } from "./Logo";
import { Icon } from "./Icon";
import { navLinks, primaryPhone, secondaryPhone, site, telHref, waHref } from "@/lib/site";
import { services } from "@/lib/content";

const year = 2026;

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white">
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-gold-500/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative">
        <div className="container-x grid gap-12 py-14 sm:py-16 lg:grid-cols-12 lg:gap-10 lg:py-20">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              A building and architectural design studio based in Adamawa State,
              creating beautiful, durable and affordable spaces for homeowners,
              businesses and investors across Nigeria.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <a
                href={waHref(primaryPhone)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.08em] text-navy-950 transition-transform duration-300 hover:-translate-y-0.5"
              >
                <Icon name="whatsapp" size={15} />
                WhatsApp
              </a>
              <a
                href={telHref(primaryPhone)}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.08em] text-white/85 transition-colors hover:border-gold-400 hover:text-gold-300"
              >
                <Icon name="phone" size={14} />
                Call Us
              </a>
            </div>

            {site.socials.length > 0 && (
              <ul className="mt-5 flex gap-2">
                {site.socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/15 px-3.5 py-2 text-[11px] uppercase tracking-[0.14em] text-white/70 transition-colors hover:border-gold-400 hover:text-white"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation" className="lg:col-span-2">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-400">
              Explore
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 transition-colors hover:text-gold-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Services" className="lg:col-span-3">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-400">
              Our Services
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="text-white/60 transition-colors hover:text-gold-300"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-400">
              Get In Touch
            </h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Icon name="pin" size={16} className="mt-0.5 shrink-0 text-gold-400" />
                <address className="not-italic leading-relaxed text-white/60">
                  {site.address.street},
                  <br />
                  {site.address.city}, {site.address.country}
                </address>
              </li>
              {[primaryPhone, secondaryPhone].map((phone) => (
                <li key={phone.tel} className="flex items-start gap-3">
                  <Icon name="phone" size={15} className="mt-1 shrink-0 text-gold-400" />
                  <a
                    href={telHref(phone)}
                    className="font-medium text-white/80 transition-colors hover:text-gold-300"
                  >
                    {phone.display}
                    <span className="ml-2 text-[10px] uppercase tracking-[0.14em] text-white/45">
                      {phone.label}
                    </span>
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-3">
                <Icon name="clock" size={15} className="mt-1 shrink-0 text-gold-400" />
                <span className="text-white/60">
                  {site.hours[0].days}: {site.hours[0].time}
                  <br />
                  {site.hours[1].days}: {site.hours[1].time}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="container-x flex flex-col gap-3 py-6 text-[12px] text-white/55 sm:flex-row sm:items-center sm:justify-between">
            <p>© {year} Building and Great Design. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <span>Adamawa State, Nigeria</span>
              <Link href="/contact" className="transition-colors hover:text-gold-300">
                Contact
              </Link>
              <Link href="/pricing" className="transition-colors hover:text-gold-300">
                Request a Quote
              </Link>
            </div>
          </div>
          <div className="container-x pb-7">
            <p className="max-w-3xl text-[11px] leading-relaxed text-white/40">
              Design images on this website are illustrative concepts that show the
              style and quality we work towards. Client project photographs are added
              only with the owner&apos;s permission.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
