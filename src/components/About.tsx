import { site } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="section-pad border-t border-border bg-background py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
            About
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Building software that stays clear under pressure.
          </h2>
        </Reveal>

        <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
          {site.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="pt-2 text-sm text-muted/80">Based in {site.location}</p>
        </Reveal>
      </div>
    </section>
  );
}
