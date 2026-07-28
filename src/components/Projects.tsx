import Link from "next/link";
import { featuredProjects } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="section-pad border-t border-border bg-surface py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
            Projects
          </p>
          <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Selected work I&apos;m proud to ship.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-1">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.title}>
              <ProjectCard project={project} index={index} layout="featured" />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <Link
            href="/projects"
            className="rounded-full border border-border bg-background px-8 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            All Projects →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
