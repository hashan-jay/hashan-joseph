import { site } from "@/data/site";
import { Reveal } from "@/components/Reveal";

function TechList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-border bg-background px-3 py-1.5 text-sm text-foreground"
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
    <section id="skills" className="section-pad border-t border-border bg-background py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
            Skills · SDLC
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Technologies across every stage of delivery.
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-muted">{focus}</p>
        </Reveal>

        <div className="mt-14 space-y-6">
          <Reveal>
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                Project Management
              </h3>
              <TechList items={projectManagement} />
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                Design
              </h3>
              <TechList items={sdlc.design} />
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                Development
              </h3>
              <div className="mt-6 grid gap-8 lg:grid-cols-3">
                <div>
                  <h4 className="font-display text-lg font-semibold text-foreground">
                    Programming Languages
                  </h4>
                  <TechList items={sdlc.development.languages} />
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-foreground">
                    Libraries
                  </h4>
                  <TechList items={sdlc.development.libraries} />
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-foreground">
                    Frameworks
                  </h4>
                  <TechList items={sdlc.development.frameworks} />
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            <Reveal>
              <div className="h-full rounded-2xl border border-border bg-surface p-6 sm:p-8">
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  Databases
                </h3>
                <TechList items={sdlc.databases} />
              </div>
            </Reveal>
            <Reveal>
              <div className="h-full rounded-2xl border border-border bg-surface p-6 sm:p-8">
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  Architecture
                </h3>
                <TechList items={sdlc.architecture} />
              </div>
            </Reveal>
            <Reveal>
              <div className="h-full rounded-2xl border border-border bg-surface p-6 sm:p-8">
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  Analytics
                </h3>
                <TechList items={sdlc.analytics} />
              </div>
            </Reveal>
            <Reveal>
              <div className="h-full rounded-2xl border border-border bg-surface p-6 sm:p-8">
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  SEO
                </h3>
                <TechList items={sdlc.seo} />
              </div>
            </Reveal>
            <Reveal>
              <div className="h-full rounded-2xl border border-border bg-surface p-6 sm:p-8">
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  Testing
                </h3>
                <TechList items={sdlc.testing} />
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                Deployments
              </h3>
              <TechList items={sdlc.deployments} />
            </div>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-border bg-surface p-6 sm:p-8">
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  Mobile Development
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {sdlc.mobile.note}
                </p>
                <TechList items={sdlc.mobile.tools} />
              </div>
            </Reveal>
            <Reveal>
              <div className="h-full rounded-2xl border border-border bg-surface p-6 sm:p-8">
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
