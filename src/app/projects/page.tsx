import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ProjectGallery } from "@/components/ProjectGallery";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { CtaBand } from "@/components/sections/CtaBand";
import { imageDisclaimer, projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Projects — Duplexes, Bungalows, Commercial & Interior Concepts",
  description:
    "Browse architectural concepts and building projects: modern duplexes, luxury homes, bungalows, commercial buildings, interior design and renovation. Filter by category.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Our Building Projects | Building and Great Design",
    description:
      "A gallery of residential, commercial, interior and renovation design concepts from Building and Great Design, Adamawa State, Nigeria.",
    images: ["/images/opt/project-duplex-wide.webp"],
  },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Our building projects"
        description="Explore inspiring architectural concepts and building projects that demonstrate our commitment to quality, creativity and modern design."
        image="/images/opt/project-villa-wide.webp"
        imageAlt="Contemporary villa concept with courtyard pool"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Our Projects" }]}
      >
        <div className="flex flex-wrap gap-2.5">
          <Link href="/contact#quote" className="btn-gold">
            Discuss a Similar Project
            <Icon name="arrow" size={16} />
          </Link>
          <Link href="/services" className="btn-ghost-light">
            Our Services
          </Link>
        </div>
      </PageHero>

      <section className="section bg-white">
        <div className="container-x">
          <Reveal className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">{projects.length} design concepts</p>
              <h2 className="display-3 mt-3">Filter by project type</h2>
            </div>
            <p className="max-w-sm text-[12px] leading-relaxed text-navy-500">
              Select a category to narrow the gallery, then open any project for the full
              concept story, design notes and discussion points.
            </p>
          </Reveal>

          <ProjectGallery />

          <Reveal className="mt-12">
            <div className="flex flex-col gap-3 rounded-2xl border border-gold-200 bg-gold-50/50 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <Icon name="sparkle" size={18} className="mt-0.5 shrink-0 text-gold-700" />
                <p className="max-w-2xl text-[12px] leading-relaxed text-gold-900/80">
                  <span className="font-semibold">A note on these images.</span> {imageDisclaimer}
                </p>
              </div>
              <Link
                href="/contact"
                className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.12em] text-navy-800 underline-offset-4 hover:underline"
              >
                Ask about a real project
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Have plans already? We can review them."
        text="Bring your drawings, a contractor's quotation or a sketch on paper. We will review it with you and tell you honestly what we would change and why."
      />
    </>
  );
}
