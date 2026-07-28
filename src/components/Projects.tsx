import Link from "next/link";
import { featuredProjects } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";

export function Projects() {
  return (
    <section
      id="projects"
      className="section-pad border-t border-border bg-surface py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
            Projects
          </p>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Selected work I&apos;m proud to ship.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:mt-14 sm:gap-8">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.title}>
              <ProjectCard project={project} index={index} layout="featured" />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center sm:mt-12">
          <Link
            href="/projects"
            className="w-full max-w-xs rounded-full border border-border bg-background px-8 py-3.5 text-center text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent sm:w-auto sm:py-3"
          >
            All Projects →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
