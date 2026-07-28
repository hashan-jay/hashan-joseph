import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { allProjects, site } from "@/data/site";

export const metadata: Metadata = {
  title: `All Projects — ${site.name}`,
  description: `Complete project archive for ${site.name}, including web applications and ERP systems.`,
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-dvh overflow-x-hidden bg-background pt-20 sm:pt-24">
        <section className="section-pad border-b border-border pb-10 pt-8 sm:pb-16 sm:pt-10">
          <div className="mx-auto max-w-6xl">
            <Link
              href="/#projects"
              className="font-mono text-xs uppercase tracking-[0.18em] text-muted transition-colors hover:text-accent"
            >
              ← Back to home
            </Link>
            <h1 className="mt-5 font-display text-3xl font-semibold tracking-tight text-foreground sm:mt-6 sm:text-5xl lg:text-6xl">
              All Projects
            </h1>
            <p className="mt-3 max-w-2xl text-base text-muted sm:mt-4 sm:text-lg">
              A full archive of shipped and in-progress work — including live
              client sites and private enterprise builds.
            </p>
          </div>
        </section>

        <section className="section-pad py-10 sm:py-16">
          <div className="mx-auto grid max-w-6xl gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
            {allProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                layout="grid"
                showYear
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
