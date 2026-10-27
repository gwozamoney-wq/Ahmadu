import Image from "next/image";
import Link from "next/link";
import { Icon } from "../Icon";
import { primaryPhone, site, telHref } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-navy-950 pb-10 pt-28 sm:min-h-[92svh] sm:pb-14">
      <Image
        src="/images/opt/hero-duplex-1920.webp"
        alt="Modern luxury duplex at dusk with warm interior lighting and landscaped driveway"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="-z-20 object-cover object-[62%_center] sm:object-center"
      />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(7,21,36,0.86)_0%,rgba(7,21,36,0.45)_35%,rgba(7,21,36,0.72)_75%,rgba(7,21,36,0.96)_100%)] sm:bg-[linear-gradient(100deg,rgba(7,21,36,0.94)_0%,rgba(9,26,43,0.78)_42%,rgba(7,21,36,0.24)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-navy-950/70 to-transparent"
        aria-hidden="true"
      />

      <div className="container-x relative w-full">
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-navy-950/40 px-3.5 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-gold-200 backdrop-blur-sm">
              <Icon name="pin" size={12} className="text-gold-400" />
              Adamawa State, Nigeria
            </span>
            <span className="hidden items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-white/55 sm:inline-flex">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
              Building &amp; Architectural Design
            </span>
          </div>

          <h1 className="display-1 mt-6 uppercase !text-white">
            We build your dreams
            <span className="mt-1 block bg-gradient-to-r from-gold-200 via-gold-400 to-gold-300 bg-clip-text text-transparent">
              {" "}into reality
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/75 sm:text-base sm:leading-[1.75]">
            From architectural design to quality construction, Building and Great Design
            delivers beautiful, durable and affordable building solutions tailored to your
            vision and budget.
          </p>

          <div className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center">
            <Link href="/projects" className="btn-gold">
              Explore Our Projects
              <Icon name="arrow" size={16} />
            </Link>
            <Link href="/contact#quote" className="btn-ghost-light">
              Get a Free Quote
            </Link>
            <a
              href={telHref(primaryPhone)}
              className="inline-flex items-center justify-center gap-2 rounded-full px-2 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-white/85 transition-colors hover:text-gold-300 sm:px-3"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full border border-gold-400/50 text-gold-400">
                <Icon name="phone" size={14} />
              </span>
              Call Us Now
              <span className="hidden text-white/50 sm:inline">{primaryPhone.display}</span>
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-white/10 pt-5">
            {["Quality Construction", "Creative Designs", "Affordable Solutions"].map(
              (item, index) => (
                <span key={item} className="flex items-center gap-5">
                  {index > 0 && (
                    <span className="hidden h-3.5 w-px bg-gold-400/40 sm:block" aria-hidden="true" />
                  )}
                  <span className="inline-flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-white/65 sm:text-[11px]">
                    <Icon name="check" size={13} className="text-gold-400" />
                    {item}
                  </span>
                </span>
              ),
            )}
          </div>
        </div>

        {/* Floating service index — desktop only, keeps the hero composed */}
        <div className="pointer-events-none absolute bottom-0 right-6 hidden w-64 xl:block">
          <div className="pointer-events-auto rounded-2xl border border-white/10 bg-navy-950/45 p-5 backdrop-blur-md">
            <p className="text-[9.5px] font-semibold uppercase tracking-[0.22em] text-gold-300">
              What we do
            </p>
            <ul className="mt-3 space-y-2.5 text-[12.5px] text-white/75">
              {[
                "Architectural design",
                "Building construction",
                "Modern house design",
                "Interior & exterior",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span className="h-1 w-1 rounded-full bg-gold-400" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/services"
              className="mt-4 inline-flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:text-gold-300"
            >
              All services <Icon name="arrow" size={13} />
            </Link>
          </div>
        </div>
      </div>

      <span className="sr-only">{site.tagline}</span>
    </section>
  );
}
