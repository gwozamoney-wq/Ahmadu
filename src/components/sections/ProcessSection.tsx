import Link from "next/link";
import { Reveal } from "../Reveal";
import { Icon } from "../Icon";
import { SectionHeading } from "../SectionHeading";
import { processSteps } from "@/lib/content";

export function ProcessSection({
  compact = false,
  tone = "light",
}: {
  compact?: boolean;
  tone?: "light" | "mist";
}) {
  return (
    <section
      className={`section ${tone === "mist" ? "bg-mist" : "bg-white"} ${
        compact ? "!py-14 sm:!py-16" : ""
      }`}
      id="process"
    >
      <div className="container-x">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="How we work"
            title="A clear path from idea to handover"
            description="Four straightforward stages, so you always know what is happening, what it costs and what comes next."
          />
        </Reveal>

        <div className="relative mt-12">
          {/* Connecting line: vertical on small screens, horizontal on desktop */}
          <div
            className="absolute left-[27px] top-14 h-[calc(100%-3.75rem)] w-px bg-gradient-to-b from-gold-300 via-gold-300/50 to-transparent lg:left-0 lg:top-[27px] lg:h-px lg:w-full lg:bg-gradient-to-r"
            aria-hidden="true"
          />

          <ol className="relative grid gap-8 lg:grid-cols-4 lg:gap-6">
            {processSteps.map((step, index) => (
              <Reveal as="li" key={step.step} delay={index * 100}>
                <div className="flex gap-5 sm:block">
                  <div className="relative shrink-0">
                    <span className="relative z-10 grid h-14 w-14 place-items-center rounded-full border border-gold-200 bg-white text-navy-800 shadow-card">
                      <Icon name={step.icon} size={22} className="text-navy-700" />
                      <span className="absolute -right-1 -top-1 grid h-6 w-6 place-items-center rounded-full bg-gold-sheen text-[10px] font-bold text-navy-950">
                        {step.step}
                      </span>
                    </span>
                  </div>
                  <div className="pt-1 sm:pt-6">
                    <h3 className="font-display text-[16px] font-semibold text-navy-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-xs text-[13px] leading-relaxed text-navy-500">
                      {step.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal className="mt-12 flex justify-center">
          <Link href="/contact#quote" className="btn-gold">
            Start Your Project Today
            <Icon name="arrow" size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
