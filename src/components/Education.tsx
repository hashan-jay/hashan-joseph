import { site } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function Education() {
  return (
    <section
      id="education"
      className="section-pad border-t border-border bg-background py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
            Education
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Academic ladder.
          </h2>
        </Reveal>

        <div className="relative mt-10 ml-2 border-l border-border pl-6 sm:mt-14 sm:ml-3 sm:pl-8 md:ml-4 md:pl-12">
          <div className="flex flex-col gap-12 sm:gap-16 md:gap-20">
            {site.education.map((item) => (
              <Reveal key={`${item.title}-${item.period}`}>
                <article className="relative">
                  <span className="absolute top-1.5 -left-[1.95rem] flex h-4 w-4 items-center justify-center rounded-full border border-accent bg-background sm:-left-[2.45rem] md:-left-[3.2rem]">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  </span>

                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <p className="font-mono text-[11px] text-muted sm:text-xs">
                      {item.period}
                    </p>
                    <span
                      className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${
                        item.status === "Currently Reading"
                          ? "border-accent/30 bg-accent-soft text-accent"
                          : "border-border text-muted"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-foreground sm:mt-4 sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted sm:mt-3 sm:text-base">
                    {item.institution}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
