import Link from "next/link";
import { ProjectCard } from "../ProjectCard";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { Icon } from "../Icon";
import { projects } from "@/lib/content";

const featured = ["contemporary-family-duplex", "living-space-interior", "cantilever-villa-study"];

export function FeaturedProjects() {
  const list = featured
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is (typeof projects)[number] => Boolean(project));

  return (
    <section className="section bg-white" id="projects">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Portfolio"
            title="Our building projects"
            description="Explore inspiring architectural concepts and building projects that demonstrate our commitment to quality, creativity and modern design."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {list.map((project, index) => (
            <Reveal key={project.slug} delay={index * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex flex-col items-center gap-3">
          <Link href="/projects" className="btn-navy">
            View All Projects
            <Icon name="arrow" size={16} />
          </Link>
          <p className="max-w-xl text-center text-[11.5px] leading-relaxed text-navy-500">
            Project visuals are illustrative design concepts that communicate our style. Client
            photographs are published only with the owner&apos;s permission.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
