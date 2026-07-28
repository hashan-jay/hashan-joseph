import { site } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function Education() {
  return (
    <section
      id="education"
      className="section-pad border-t border-border bg-background py-24"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
            Education
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Academic ladder.
          </h2>
        </Reveal>

        <div className="relative mt-14 ml-3 border-l border-border pl-8 sm:ml-4 sm:pl-12">
          <div className="flex flex-col gap-16 sm:gap-20">
            {site.education.map((item) => (
              <Reveal key={`${item.title}-${item.period}`}>
                <article className="relative">
                  <span className="absolute top-1.5 -left-[2.45rem] flex h-4 w-4 items-center justify-center rounded-full border border-accent bg-background sm:-left-[3.2rem]">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  </span>

                  <div className="flex flex-wrap items-center gap-3">
                    <p className="font-mono text-xs text-muted">{item.period}</p>
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

                  <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  {"detail" in item && item.detail ? (
                    <p className="mt-2 text-sm text-accent">{item.detail}</p>
                  ) : null}
                  <p className="mt-3 text-base leading-relaxed text-muted">
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
