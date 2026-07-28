import { site } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function Experience() {
  return (
    <section
      id="experience"
      className="section-pad border-t border-border bg-surface py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
            Experience
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Where I&apos;ve been building.
          </h2>
        </Reveal>

        <ol className="relative mt-10 space-y-0 before:absolute before:top-2 before:bottom-2 before:left-[0.35rem] before:w-px before:bg-border sm:mt-14 md:before:left-[13.35rem]">
          {site.experience.map((job) => (
            <Reveal key={`${job.company}-${job.period}`}>
              <li className="relative grid gap-2 border-t border-border py-8 first:border-t-0 sm:gap-3 sm:py-10 md:grid-cols-[12rem_1fr] md:gap-12">
                <div className="absolute top-10 left-0 h-2.5 w-2.5 rounded-full border border-accent bg-background sm:top-12 md:left-[13rem] md:top-[3.15rem]" />
                <div className="pl-6 md:pl-0">
                  <p className="font-mono text-[11px] text-muted sm:text-xs">
                    {job.period}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-foreground sm:text-2xl">
                    {job.company}
                  </h3>
                  <p className="mt-1 text-sm text-accent">{job.role}</p>
                  <p className="mt-1.5 font-mono text-[11px] text-muted sm:text-xs">
                    {job.workMethod}
                  </p>
                </div>
                <p className="max-w-2xl pl-6 text-sm leading-relaxed text-muted sm:text-base md:pl-0 md:pt-8">
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
