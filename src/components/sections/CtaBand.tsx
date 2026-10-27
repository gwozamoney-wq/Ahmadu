import Link from "next/link";
import { Icon } from "../Icon";
import { Reveal } from "../Reveal";
import { primaryPhone, site, telHref, waHref } from "@/lib/site";

type Props = {
  title?: string;
  text?: string;
};

export function CtaBand({
  title = "Ready to start building?",
  text = "Send us your idea, your plot details or even a rough sketch. We will tell you what is possible, what it is likely to cost and how to move forward.",
}: Props) {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div className="absolute inset-0 blueprint-grid opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-gold-500/15 blur-[110px]"
        aria-hidden="true"
      />
      <div className="container-x relative py-14 sm:py-16">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow eyebrow-light eyebrow-center">Next step</p>
          <h2 className="display-2 mt-4 !text-white">{title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-[14px] leading-relaxed text-white/60 sm:text-[15px]">
            {text}
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-2.5 sm:flex-row">
            <Link href="/contact#quote" className="btn-gold w-full sm:w-auto">
              Get a Free Quote
              <Icon name="arrow" size={16} />
            </Link>
            <a
              href={waHref(primaryPhone)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-light w-full sm:w-auto"
            >
              <Icon name="whatsapp" size={16} className="text-[#25D366]" />
              WhatsApp Us
            </a>
            <a
              href={telHref(primaryPhone)}
              className="inline-flex items-center justify-center gap-2 px-3 py-3 text-[12.5px] font-semibold uppercase tracking-[0.1em] text-white/70 transition-colors hover:text-gold-300"
            >
              <Icon name="phone" size={14} className="text-gold-400" />
              {primaryPhone.display}
            </a>
          </div>
          <p className="mt-5 text-[10.5px] uppercase tracking-[0.16em] text-white/50">
            {site.address.full}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
