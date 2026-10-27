import Image from "next/image";
import Link from "next/link";
import { Icon } from "../Icon";
import { Reveal } from "../Reveal";
import { trustPoints } from "@/lib/site";

export function AboutPreview() {
  return (
    <section className="section overflow-hidden bg-white" id="about">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Image composition */}
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl sm:aspect-[5/5] lg:aspect-[4/5]">
            <Image
              src="/images/opt/about-team-wide.webp"
              alt="Architects reviewing building plans on site"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/25 to-transparent" />
          </div>

          {/* Gold frame detail */}
          <div
            className="pointer-events-none absolute -bottom-4 -left-4 h-24 w-24 rounded-bl-2xl border-b-2 border-l-2 border-gold-400/70 sm:-bottom-5 sm:-left-5 sm:h-32 sm:w-32"
            aria-hidden="true"
          />

          <div className="absolute -bottom-6 right-4 w-[15rem] rounded-xl bg-navy-900 p-4 shadow-lift sm:right-6 sm:w-64 sm:p-5">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold-sheen text-navy-950">
                <Icon name="compass" size={19} />
              </span>
              <div>
                <p className="font-display text-[13px] font-semibold leading-tight text-white">
                  Start with a free consultation
                </p>
                <p className="mt-0.5 text-[10.5px] uppercase tracking-[0.12em] text-white/45">
                  No obligation
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <Reveal delay={120}>
          <p className="eyebrow">About us</p>
          <h2 className="display-2 mt-4">
            Building excellence,
            <br className="hidden sm:block" /> one project at a time
          </h2>

          <div className="prose-brand mt-6 max-w-xl">
            <p>
              At Building and Great Design, we are passionate about transforming ideas into
              beautiful, functional and durable structures. We provide building and
              architectural design solutions tailored to our clients&apos; needs, preferences
              and budgets.
            </p>
            <p>
              Our goal is to make quality building services accessible and affordable while
              maintaining professional standards, attention to detail and customer
              satisfaction.
            </p>
            <p>
              Whether you are planning your dream home, renovating an existing property or
              developing a commercial building, we are ready to help bring your vision to life.
            </p>
          </div>

          <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-[13px] text-navy-700">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold-100 text-gold-700">
                  <Icon name="check" size={12} />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/about" className="btn-navy">
              Learn More About Us
              <Icon name="arrow" size={16} />
            </Link>
            <Link
              href="/contact"
              className="link-underline text-[12px] uppercase tracking-[0.12em]"
            >
              Talk to our team
              <Icon name="arrow" size={15} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
