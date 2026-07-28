import Image from "next/image";
import type { Project } from "@/data/site";

type Props = {
  project: Project;
  index?: number;
  layout?: "featured" | "grid";
  showYear?: boolean;
};

export function ProjectCard({
  project,
  index = 0,
  layout = "grid",
  showYear = false,
}: Props) {
  const isFeatured = layout === "featured";

  return (
    <article
      className={`overflow-hidden rounded-2xl border border-border bg-background transition-colors hover:border-accent/40 ${
        isFeatured ? "lg:grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]" : "h-full"
      }`}
    >
      {project.image ? (
        <div
          className={`relative overflow-hidden border-b border-border bg-surface ${
            isFeatured
              ? "aspect-[16/10] lg:border-b-0 lg:border-r"
              : "aspect-[16/10]"
          }`}
        >
          <Image
            src={project.image}
            alt={`${project.title} homepage preview`}
            fill
            className="object-cover object-top"
            sizes={
              isFeatured
                ? "(max-width: 1024px) 100vw, 55vw"
                : "(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
            }
          />
        </div>
      ) : (
        <div
          className={`flex items-center justify-center border-b border-border bg-[radial-gradient(circle_at_30%_20%,rgba(103,232,249,0.12),transparent_55%),linear-gradient(160deg,#0c0c0c,#141414)] ${
            isFeatured
              ? "aspect-[16/10] lg:border-b-0 lg:border-r"
              : "aspect-[16/10]"
          }`}
        >
          <div className="px-4 text-center sm:px-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              {showYear ? project.year : "Private build"}
            </p>
            <p className="mt-3 font-display text-xl font-semibold text-foreground sm:text-2xl">
              {project.title}
            </p>
          </div>
        </div>
      )}

      <div className="flex flex-col justify-center p-5 sm:p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <span className="font-mono text-xs text-muted">
            {String(index + 1).padStart(2, "0")}
          </span>
          {showYear ? (
            <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
              {project.year}
            </span>
          ) : null}
          {project.status === "live" ? (
            <span className="rounded-full border border-accent/30 bg-accent-soft px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
              Live
            </span>
          ) : (
            <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted">
              Not hosted
            </span>
          )}
        </div>

        <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl lg:text-3xl">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2 sm:mt-5">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-accent sm:px-3 sm:text-xs"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap min-[420px]:items-center sm:mt-6 sm:gap-4">
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-foreground px-4 py-2.5 text-center text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Visit site →
            </a>
          ) : (
            <span className="rounded-full border border-border px-4 py-2.5 text-center text-sm text-muted">
              Details coming soon
            </span>
          )}
          {project.sourceLocked ? (
            <span
              aria-disabled="true"
              title="Source code is private for this commercial project"
              className="cursor-not-allowed rounded-full border border-border/60 px-4 py-2.5 text-center text-sm font-medium text-muted/50"
            >
              Source Code →
            </span>
          ) : (
            <a
              href={project.source || "#"}
              target={project.source && project.source !== "#" ? "_blank" : undefined}
              rel={
                project.source && project.source !== "#"
                  ? "noopener noreferrer"
                  : undefined
              }
              className="rounded-full border border-border px-4 py-2.5 text-center text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Source Code →
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
