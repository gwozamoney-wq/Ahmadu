"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { Icon } from "./Icon";
import { categories, projects, type Project } from "@/lib/content";

const filters = categories;

export function ProjectGallery() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All Projects");
  const [selected, setSelected] = useState<Project | null>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const visible = projects.filter(
    (project) => filter === "All Projects" || project.category === filter,
  );

  const open = useCallback((project: Project) => {
    lastTrigger.current = document.activeElement as HTMLElement;
    setSelected(project);
  }, []);

  const close = useCallback(() => {
    setSelected(null);
    lastTrigger.current?.focus?.();
  }, []);

  const step = useCallback(
    (direction: 1 | -1) => {
      setSelected((current) => {
        if (!current) return current;
        const list = projects.filter(
          (project) => filter === "All Projects" || project.category === filter,
        );
        const index = list.findIndex((project) => project.slug === current.slug);
        const next = list[(index + direction + list.length) % list.length];
        return next ?? current;
      });
    },
    [filter],
  );

  useEffect(() => {
    if (!selected) return;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selected, close, step]);

  return (
    <div>
      {/* Filters */}
      <div
        role="group"
        aria-label="Filter projects by category"
        className="hide-scrollbar -mx-5 flex snap-x gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0"
      >
        {filters.map((option) => {
          const active = option === filter;
          const count =
            option === "All Projects"
              ? projects.length
              : projects.filter((project) => project.category === option).length;
          return (
            <button
              key={option}
              type="button"
              onClick={() => setFilter(option)}
              aria-pressed={active}
              className={`snap-start whitespace-nowrap rounded-full border px-4 py-2.5 text-[11.5px] font-semibold uppercase tracking-[0.1em] transition-all duration-300 ease-premium ${
                active
                  ? "border-navy-900 bg-navy-900 text-white shadow-card"
                  : "border-navy-200 bg-white text-navy-500 hover:border-gold-400 hover:text-navy-800"
              }`}
            >
              {option}
              <span className={`ml-2 text-[10px] ${active ? "text-gold-400" : "text-navy-300"}`}>
                {String(count).padStart(2, "0")}
              </span>
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {visible.length} {filter.toLowerCase()}.
      </p>

      {/* Grid */}
      <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, index) => (
          <div
            key={`${filter}-${project.slug}`}
            className="animate-fade-up"
            style={{ animationDelay: `${Math.min(index, 6) * 70}ms` }}
          >
            <ProjectCard project={project} onOpen={open} />
          </div>
        ))}
      </div>

      {visible.length === 0 && (
        <p className="mt-10 text-center text-sm text-navy-500">
          No projects in this category yet — please check another filter.
        </p>
      )}

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center overflow-y-auto bg-navy-950/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={close}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-4xl animate-fade-up overflow-hidden rounded-t-2xl bg-white shadow-lift sm:rounded-2xl"
          >
            <div className="relative aspect-[16/10] sm:aspect-[16/8]">
              <Image
                src={selected.image}
                alt={selected.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/10 to-navy-950/30" />
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                aria-label="Close project details"
                className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-navy-900 transition-colors hover:bg-white"
              >
                <Icon name="close" size={18} />
              </button>
              <div className="absolute inset-x-4 bottom-4 sm:inset-x-6 sm:bottom-6">
                <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-gold-300">
                  {selected.category} · {selected.location}
                </p>
                <h2
                  id="project-modal-title"
                  className="mt-2 font-display text-xl font-semibold text-white sm:text-2xl"
                >
                  {selected.name}
                </h2>
              </div>
            </div>

            <div className="max-h-[45vh] overflow-y-auto p-5 sm:max-h-none sm:p-7">
              <p className="text-sm leading-relaxed text-navy-500">{selected.description}</p>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {selected.highlights.map((highlight) => (
                  <div key={highlight.title} className="rounded-xl bg-mist p-3.5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-navy-800">
                      {highlight.title}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-navy-500">{highlight.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {selected.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>

              {selected.illustrative && (
                <p className="mt-4 rounded-lg border border-gold-200 bg-gold-50/60 px-3.5 py-2.5 text-[11px] leading-relaxed text-gold-800">
                  Illustrative design concept — not a photograph of a completed company project.
                </p>
              )}

              <div className="mt-6 flex flex-col gap-2.5 border-t border-navy-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    aria-label="Previous project"
                    className="grid h-9 w-9 place-items-center rounded-full border border-navy-200 text-navy-600 transition-colors hover:border-navy-800 hover:text-navy-900"
                  >
                    <Icon name="arrow" size={15} className="rotate-180" />
                  </button>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    aria-label="Next project"
                    className="grid h-9 w-9 place-items-center rounded-full border border-navy-200 text-navy-600 transition-colors hover:border-navy-800 hover:text-navy-900"
                  >
                    <Icon name="arrow" size={15} />
                  </button>
                  <Link
                    href={`/projects/${selected.slug}`}
                    className="ml-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-navy-600 underline-offset-4 hover:text-gold-700 hover:underline"
                  >
                    Full details
                  </Link>
                </div>
                <Link href="/contact#quote" className="btn-gold btn-sm">
                  Discuss a Similar Project
                  <Icon name="arrow" size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
