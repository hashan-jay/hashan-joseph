import { site } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function Contact() {
  return (
    <section id="contact" className="section-pad border-t border-border bg-background py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
            Contact
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Let&apos;s build something worthwhile.
          </h2>
          <p className="mt-5 max-w-lg text-lg text-muted">
            Open to thoughtful collaborations, full-time roles, and interesting
            technical problems.
          </p>
        </Reveal>

        <Reveal className="mt-12 flex flex-wrap gap-3">
          <a
            href={`mailto:${site.email}`}
            className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            {site.email}
          </a>
          <a
            href={site.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={site.resumeUrl}
            className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Resume
          </a>
        </Reveal>
      </div>
    </section>
  );
}
