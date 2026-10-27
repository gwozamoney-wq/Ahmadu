import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "./Icon";

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  image?: string;
  imageAlt?: string;
  breadcrumb?: { label: string; href?: string }[];
  children?: ReactNode;
};

/**
 * Compact interior hero used on every page except the homepage.
 * Includes top padding to clear the fixed header.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  image = "/images/opt/project-concept-wide.webp",
  imageAlt = "Modern architectural concept",
  breadcrumb,
  children,
}: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-45"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-900/35"
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 blueprint-grid opacity-40" aria-hidden="true" />

      <div className="container-x pb-14 pt-28 sm:pb-16 sm:pt-32 lg:pb-20 lg:pt-36">
        {breadcrumb && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-white/45">
              {breadcrumb.map((crumb, index) => (
                <li key={crumb.label} className="flex items-center gap-2">
                  {index > 0 && <span aria-hidden="true">/</span>}
                  {crumb.href ? (
                    <Link href={crumb.href} className="transition-colors hover:text-gold-300">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-gold-400">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <p className="eyebrow eyebrow-light">{eyebrow}</p>
        <h1 className="display-1 mt-5 max-w-4xl !text-white">{title}</h1>
        {description && (
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base sm:leading-relaxed">
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-x flex flex-wrap items-center gap-x-8 gap-y-3 py-4 text-[11px] uppercase tracking-[0.16em] text-white/45">
          <span className="inline-flex items-center gap-2">
            <Icon name="phone" size={13} className="text-gold-500" />
            Free consultation
          </span>
          <span className="inline-flex items-center gap-2">
            <Icon name="pin" size={13} className="text-gold-500" />
            Adamawa State, Nigeria
          </span>
          <span className="inline-flex items-center gap-2">
            <Icon name="document" size={13} className="text-gold-500" />
            Personalised, no-obligation quotes
          </span>
        </div>
      </div>
    </section>
  );
}
