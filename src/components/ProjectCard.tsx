import Image from "next/image";
import Link from "next/link";
import { Icon } from "./Icon";
import type { Project } from "@/lib/content";

type Props = {
  project: Project;
  /** When provided, "View Project" opens the gallery modal instead of navigating. */
  onOpen?: (project: Project) => void;
};

/**
 * Project card. The image and title link to the project page (valid, crawlable
 * HTML); the footer action either opens the modal or links to the page.
 */
export function ProjectCard({ project, onOpen }: Props) {
  return (
    <article className="card card-hover group flex h-full flex-col overflow-hidden">
      <Link
        href={`/projects/${project.slug}`}
        className="relative block aspect-[4/3] overflow-hidden"
        aria-label={`View ${project.name}`}
      >
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-[900ms] ease-premium group-hover:scale-[1.07]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/0 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-navy-800 shadow-sm backdrop-blur">
          {project.category}
        </span>
        <p className="absolute inset-x-4 bottom-4 inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-white/85">
          <Icon name="pin" size={13} className="text-gold-400" />
          {project.location}
        </p>
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-[17px] font-semibold leading-snug text-navy-900">
          <Link
            href={`/projects/${project.slug}`}
            className="transition-colors hover:text-gold-700"
          >
            {project.name}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-[13px] leading-relaxed text-navy-500">
          {project.summary}
        </p>

        <div className="mt-4 flex items-center justify-between gap-3">
          {onOpen ? (
            <button
              type="button"
              onClick={() => onOpen(project)}
              aria-haspopup="dialog"
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-navy-700 transition-colors hover:text-gold-700"
            >
              View Project
              <Icon name="arrow" size={14} className="text-gold-700" />
            </button>
          ) : (
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-navy-700 transition-colors hover:text-gold-700"
            >
              View Project
              <Icon name="arrow" size={14} className="text-gold-700" />
            </Link>
          )}

          {project.illustrative && (
            <span className="rounded-full bg-mist px-2.5 py-1 text-[9.5px] font-medium uppercase tracking-[0.1em] text-navy-500">
              Concept
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
