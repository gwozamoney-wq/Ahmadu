import Image from "next/image";
import Link from "next/link";
import { Icon } from "./Icon";
import type { Service } from "@/lib/content";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article
      id={service.slug}
      className="card card-hover group flex scroll-mt-28 flex-col overflow-hidden"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/55 via-navy-950/5 to-transparent" />
        <span className="absolute left-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-navy-900/90 text-gold-300 shadow-card backdrop-blur transition-colors duration-500 group-hover:bg-gold-sheen group-hover:text-navy-950">
          <Icon name={service.icon} size={21} />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold text-navy-900">{service.title}</h3>
        <p className="mt-2.5 flex-1 text-[13.5px] leading-relaxed text-navy-500">{service.short}</p>
        <Link
          href={`/services#${service.slug}`}
          className="link-underline mt-5 text-[12px] uppercase tracking-[0.12em]"
          aria-label={`Learn more about ${service.title}`}
        >
          Learn More
          <Icon
            name="arrow"
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </article>
  );
}
