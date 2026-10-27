import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Building and Great Design | Construction & Architectural Design in Adamawa",
  description:
    "Building and Great Design delivers architectural design, modern house design and quality construction in Adamawa State, Nigeria. Beautiful, durable and affordable building solutions — request a free quote today.",
  alternates: { canonical: "/" },
};

const strip = [
  {
    icon: "house" as const,
    title: "Residential & commercial",
    text: "Homes, duplexes, bungalows, offices and mixed-use buildings.",
  },
  {
    icon: "blueprint" as const,
    title: "Design-led approach",
    text: "Every build starts with drawings, planning and a clear budget.",
  },
  {
    icon: "wallet" as const,
    title: "Affordable by design",
    text: "Options tailored to your budget, with honest cost guidance.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Trust strip */}
      <section className="border-b border-navy-100 bg-white">
        <div className="container-x grid gap-6 py-8 sm:grid-cols-3 sm:gap-4 sm:py-9">
          {strip.map((item, index) => (
            <div
              key={item.title}
              className={`flex items-start gap-3.5 ${
                index > 0 ? "sm:border-l sm:border-navy-100 sm:pl-6" : ""
              }`}
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-navy-50 text-navy-700">
                <Icon name={item.icon} size={19} />
              </span>
              <div>
                <p className="text-[12.5px] font-semibold uppercase tracking-[0.08em] text-navy-900">
                  {item.title}
                </p>
                <p className="mt-1 text-[12px] leading-relaxed text-navy-500">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <AboutPreview />
      <ServicesSection />
      <FeaturedProjects />
      <WhyChooseUs />
      <ProcessSection />
      <PricingSection />
      <TestimonialSection />

      <ContactSection />
    </>
  );
}
