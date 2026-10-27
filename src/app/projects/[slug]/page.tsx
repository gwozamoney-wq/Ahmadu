import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { ProjectCard } from "@/components/ProjectCard";
import { CtaBand } from "@/components/sections/CtaBand";
import { imageDisclaimer, projectBySlug, projects } from "@/lib/content";
import { primaryPhone, waHref } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) return { title: "Project not found" };

  return {
    title: `${project.name} — ${project.category} Concept`,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.name} | Building and Great Design`,
      description: project.summary,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) notFound();

  const related = projects
    .filter((item) => item.slug !== project.slug)
    .sort((a, b) => Number(b.category === project.category) - Number(a.category === project.category))
    .slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={`${project.category} concept`}
        title={project.name}
        description={project.summary}
        image={project.image}
        imageAlt={project.imageAlt}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Our Projects", href: "/projects" },
          { label: project.name },
        ]}
      >
        <div className="flex flex-wrap items-center gap-2.5">
          <Link href="/contact#quote" className="btn-gold">
            Discuss a Similar Project
            <Icon name="arrow" size={16} />
          </Link>
          <a
            href={waHref(
              primaryPhone,
              `Hello Building and Great Design, I like the "${project.name}" concept on your website and would like to discuss something similar.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost-light"
          >
            <Icon name="whatsapp" size={16} className="text-[#25D366]" />
            Ask on WhatsApp
          </a>
        </div>
      </PageHero>

      <section className="section bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-8">
            <Reveal>
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-card">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal className="mt-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="chip">
                  <Icon name="house" size={13} className="text-gold-700" />
                  {project.category}
                </span>
                <span className="chip">
                  <Icon name="pin" size={13} className="text-gold-700" />
                  {project.location}
                </span>
                {project.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>

              <h2 className="display-3 mt-6">The concept</h2>
              <p className="mt-3 text-[14.5px] leading-relaxed text-navy-500">
                {project.description}
              </p>

              <h3 className="mt-8 font-display text-lg font-semibold text-navy-900">
                Design highlights
              </h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {project.highlights.map((highlight, index) => (
                  <div key={highlight.title} className="rounded-xl border border-navy-100 bg-mist/60 p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gold-700">
                      0{index + 1}
                    </p>
                    <p className="mt-2 text-[13px] font-semibold text-navy-900">{highlight.title}</p>
                    <p className="mt-1.5 text-[12px] leading-relaxed text-navy-500">
                      {highlight.text}
                    </p>
                  </div>
                ))}
              </div>

              {project.illustrative && (
                <div className="mt-7 flex items-start gap-3 rounded-xl border border-gold-200 bg-gold-50/60 p-4">
                  <Icon name="sparkle" size={16} className="mt-0.5 shrink-0 text-gold-700" />
                  <p className="text-[11.5px] leading-relaxed text-gold-900/80">{imageDisclaimer}</p>
                </div>
              )}
            </Reveal>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-4">
              <Reveal delay={80}>
                <div className="card p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-700">
                    Project snapshot
                  </p>
                  <dl className="mt-4 space-y-3 text-[12.5px]">
                    <div className="flex items-start justify-between gap-4 border-b border-navy-100 pb-2.5">
                      <dt className="text-navy-500">Category</dt>
                      <dd className="text-right font-medium text-navy-800">{project.category}</dd>
                    </div>
                    <div className="flex items-start justify-between gap-4 border-b border-navy-100 pb-2.5">
                      <dt className="text-navy-500">Location</dt>
                      <dd className="text-right font-medium text-navy-800">{project.location}</dd>
                    </div>
                    <div className="flex items-start justify-between gap-4 pb-1">
                      <dt className="text-navy-500">Status</dt>
                      <dd className="text-right font-medium text-navy-800">
                        {project.illustrative ? "Design concept" : "Completed project"}
                      </dd>
                    </div>
                  </dl>

                  <Link href="/contact?package=Custom%20Project#quote" className="btn-gold btn-sm mt-5 w-full">
                    Request a Quote
                  </Link>
                  <a
                    href={waHref(
                      primaryPhone,
                      `Hello Building and Great Design, I am interested in a project similar to "${project.name}".`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline btn-sm mt-2 w-full"
                  >
                    <Icon name="whatsapp" size={14} className="text-[#25D366]" />
                    WhatsApp Us
                  </a>
                </div>
              </Reveal>

              <Reveal delay={140}>
                <div className="rounded-2xl bg-navy-900 p-5">
                  <p className="font-display text-sm font-semibold text-white">
                    Like this direction?
                  </p>
                  <p className="mt-1.5 text-[12px] leading-relaxed text-white/55">
                    We can adapt the layout, size and finishes of this concept to your plot and
                    budget.
                  </p>
                  <Link
                    href="/projects"
                    className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-gold-300 hover:text-gold-200"
                  >
                    Back to all projects <Icon name="arrow" size={13} />
                  </Link>
                </div>
              </Reveal>
            </div>
          </aside>
        </div>
      </section>

      {/* Related */}
      <section className="section bg-mist !pt-0">
        <div className="container-x pt-14">
          <Reveal className="mb-8">
            <p className="eyebrow">More concepts</p>
            <h2 className="display-3 mt-3">Explore related work</h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item, index) => (
              <Reveal key={item.slug} delay={index * 80}>
                <ProjectCard project={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
