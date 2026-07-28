import { site } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function Experience() {
  return (
    <section
      id="experience"
      className="section-pad border-t border-border bg-surface py-24"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
            Experience
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Where I&apos;ve been building.
          </h2>
        </Reveal>

        <ol className="relative mt-14 space-y-0 before:absolute before:top-2 before:bottom-2 before:left-[0.35rem] before:w-px before:bg-border md:before:left-[13.35rem]">
          {site.experience.map((job) => (
            <Reveal key={`${job.company}-${job.period}`}>
              <li className="relative grid gap-3 border-t border-border py-10 first:border-t-0 md:grid-cols-[12rem_1fr] md:gap-12">
                <div className="absolute top-12 left-0 h-2.5 w-2.5 rounded-full border border-accent bg-background md:left-[13rem] md:top-[3.15rem]" />
                <div className="pl-6 md:pl-0">
                  <p className="font-mono text-xs text-muted">{job.period}</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-foreground">
                    {job.company}
                  </h3>
                  <p className="mt-1 text-sm text-accent">{job.role}</p>
                </div>
                <p className="max-w-2xl pl-6 text-base leading-relaxed text-muted md:pl-0 md:pt-8">
                  {job.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
