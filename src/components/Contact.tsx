import { site } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function Contact() {
  return (
    <section
      id="contact"
      className="section-pad border-t border-border bg-background py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
            Contact
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Let&apos;s build something worthwhile.
          </h2>
          <p className="mt-4 max-w-lg text-base text-muted sm:mt-5 sm:text-lg">
            Open to thoughtful collaborations, full-time roles, and interesting
            technical problems.
          </p>
        </Reveal>

        <Reveal className="mt-8 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:flex-wrap">
          <a
            href={`mailto:${site.email}`}
            className="break-all rounded-full bg-foreground px-5 py-3.5 text-center text-sm font-medium text-background transition-opacity hover:opacity-90 sm:break-normal sm:px-6 sm:py-3"
          >
            {site.email}
          </a>
          <a
            href={site.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-5 py-3.5 text-center text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent sm:px-6 sm:py-3"
          >
            GitHub
          </a>
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-5 py-3.5 text-center text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent sm:px-6 sm:py-3"
          >
            LinkedIn
          </a>
          <a
            href={site.resumeUrl}
            className="rounded-full border border-border px-5 py-3.5 text-center text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent sm:px-6 sm:py-3"
          >
            Resume
          </a>
        </Reveal>
      </div>
    </section>
  );
}
