import Link from "next/link";
import { ServiceCard } from "../ServiceCard";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { Icon } from "../Icon";
import { services } from "@/lib/content";

type Props = {
  /** Show all six (default) or a limited set */
  limit?: number;
  withIntro?: boolean;
};

export function ServicesSection({ limit = 6, withIntro = true }: Props) {
  return (
    <section className="section bg-mist" id="services">
      <div className="container-x">
        {withIntro && (
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <Reveal>
              <SectionHeading
                eyebrow="Our services"
                title={
                  <>
                    Design and construction,
                    <br className="hidden sm:block" /> handled with care
                  </>
                }
                description="Six focused services that together cover the full journey — from the first sketch of an idea to the day you receive your keys."
              />
            </Reveal>
            <Reveal delay={100} className="shrink-0">
              <Link href="/services" className="btn-outline">
                All Services
                <Icon name="arrow" size={15} />
              </Link>
            </Reveal>
          </div>
        )}

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {services.slice(0, limit).map((service, index) => (
            <Reveal key={service.slug} delay={index * 70}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
