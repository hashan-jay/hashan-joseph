import { site } from "@/data/site";
import { Reveal } from "@/components/Reveal";

function TechList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-foreground sm:px-3 sm:py-1.5 sm:text-sm"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function Skills() {
  const { sdlc, projectManagement, focus } = site;

  return (
    <section
      id="skills"
      className="section-pad border-t border-border bg-background py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
            Skills · SDLC
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Technologies across every stage of delivery.
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted sm:mt-5 sm:text-lg">
            {focus}
          </p>
        </Reveal>

        <div className="mt-10 space-y-5 sm:mt-14 sm:space-y-6">
          <Reveal>
            <div className="rounded-2xl border border-border bg-surface p-5 sm:p-6 lg:p-8">
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                Project Management
              </h3>
              <TechList items={projectManagement} />
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-2xl border border-border bg-surface p-5 sm:p-6 lg:p-8">
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                Design
              </h3>
              <TechList items={sdlc.design} />
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-2xl border border-border bg-surface p-5 sm:p-6 lg:p-8">
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                Development
              </h3>
              <div className="mt-6 grid gap-8 md:grid-cols-2">
                <div>
                  <h4 className="font-display text-base font-semibold text-foreground sm:text-lg">
                    Programming Languages
                  </h4>
                  <TechList items={sdlc.development.languages} />
                </div>
                <div>
                  <h4 className="font-display text-base font-semibold text-foreground sm:text-lg">
                    Core Frameworks & Libraries
                  </h4>
                  <TechList items={sdlc.development.coreFrameworksAndLibraries} />
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
            <Reveal>
              <div className="h-full rounded-2xl border border-border bg-surface p-5 sm:p-6 lg:p-8">
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  Databases
                </h3>
                <TechList items={sdlc.databases} />
              </div>
            </Reveal>
            <Reveal>
              <div className="h-full rounded-2xl border border-border bg-surface p-5 sm:p-6 lg:p-8">
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  Analytics
                </h3>
                <TechList items={sdlc.analytics} />
              </div>
            </Reveal>
            <Reveal>
              <div className="h-full rounded-2xl border border-border bg-surface p-5 sm:p-6 lg:p-8">
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  SEO
                </h3>
                <TechList items={sdlc.seo} />
              </div>
            </Reveal>
            <Reveal>
              <div className="h-full rounded-2xl border border-border bg-surface p-5 sm:p-6 lg:p-8">
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  Testing
                </h3>
                <TechList items={sdlc.testing} />
              </div>
            </Reveal>
            <Reveal>
              <div className="h-full rounded-2xl border border-border bg-surface p-5 sm:p-6 lg:p-8">
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  Deployments
                </h3>
                <TechList items={sdlc.deployments} />
              </div>
            </Reveal>
          </div>

          <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-border bg-surface p-5 sm:p-6 lg:p-8">
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  Mobile Development
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                  {sdlc.mobile.note}
                </p>
                <TechList items={sdlc.mobile.tools} />
              </div>
            </Reveal>
            <Reveal>
              <div className="h-full rounded-2xl border border-border bg-surface p-5 sm:p-6 lg:p-8">
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  IDEs & Tools
                </h3>
                <TechList items={sdlc.ides} />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
