import Image from "next/image";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden bg-background"
    >
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_120%,#0c0c14_0%,transparent_55%),radial-gradient(70%_50%_at_80%_10%,rgba(30,30,45,0.35)_0%,transparent_50%),radial-gradient(60%_40%_at_15%_20%,rgba(20,20,35,0.25)_0%,transparent_45%),linear-gradient(#020208_0%,#050510_50%,#050505_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(90%_60%_at_50%_0,rgba(120,130,180,0.06)_0%,transparent_70%)]" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="hero-orb hero-orb-a" />
        <div className="hero-orb hero-orb-b" />
        <div className="hero-orb hero-orb-c" />
        <div className="hero-grid absolute inset-[-48px] opacity-40 sm:opacity-60" />
        <div className="starfield absolute inset-0" />
        <div className="starfield-dense absolute inset-0 hidden sm:block" />
        <span className="shooting-star hidden md:block" />
        <span className="shooting-star shooting-star-delay hidden md:block" />

        <div className="code-float code-float-1 hidden lg:block">
          <span className="kw">const</span> ship = <span className="fn">await</span>{" "}
          <span className="fn">build</span>(idea)
        </div>
        <div className="code-float code-float-2 hidden lg:block">
          <span className="fn">pipeline</span>.<span className="fn">deploy</span>(
          {"{ "}
          <span className="str">env</span>: <span className="str">&apos;prod&apos;</span>
          {" }"})
        </div>
        <div className="code-float code-float-3 hidden md:block lg:block">
          <span className="muted">→</span> <span className="fn">scale</span>(cluster, {"{ "}
          replicas: <span className="str">12</span>
          {" }"})
        </div>
        <div className="code-float code-float-4 hidden lg:block">
          <span className="kw">export</span> <span className="kw">default</span>{" "}
          <span className="fn">function</span> <span className="fn">App</span>() {"{"} ... {"}"}
        </div>
        <div className="code-float code-float-5 hidden xl:block">
          <span className="kw">git</span> commit -m{" "}
          <span className="str">&quot;ship reliable systems&quot;</span>
        </div>

        <div className="code-stream-panel hidden xl:block">
          <pre>
            {`→ const api = createClient()
→ await api.auth.login(user)
→ const data = await api.get('/projects')
→ render(<Dashboard data={data} />)
→ optimize.bundle({ minify: true })
→ test.run('integration')
→ docker.build('app:latest')
→ vercel.deploy({ prod: true })
→ monitor.health.check()
→ const ship = await build(idea)
→ pipeline.deploy({ env: 'prod' })
→ scale(cluster, { replicas: 12 })
→ const api = createClient()
→ await api.auth.login(user)
→ const data = await api.get('/projects')
→ render(<Dashboard data={data} />)
→ optimize.bundle({ minify: true })
→ test.run('integration')
→ docker.build('app:latest')
→ vercel.deploy({ prod: true })
→ monitor.health.check()
→ const ship = await build(idea)
→ pipeline.deploy({ env: 'prod' })
→ scale(cluster, { replicas: 12 })`}
            <span className="caret" />
          </pre>
        </div>
      </div>

      <div className="section-pad relative mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center justify-center px-4 pb-16 pt-24 text-center sm:pb-20 sm:pt-28">
        <div className="animate-rise relative mb-6 sm:mb-8">
          <div className="absolute -inset-1 rounded-full bg-[radial-gradient(circle,rgba(103,232,249,0.35)_0%,transparent_70%)] blur-md" />
          <div className="relative h-24 w-24 overflow-hidden rounded-full border border-accent/40 sm:h-32 sm:w-32 md:h-36 md:w-36">
            <Image
              src={site.profileImage}
              alt={`${site.name} — profile photo`}
              width={288}
              height={288}
              priority
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>

        <div className="animate-rise inline-flex max-w-full items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 backdrop-blur-sm sm:px-4">
          <span className="relative flex h-1.5 w-1.5 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          <span className="truncate font-mono text-[11px] text-muted sm:text-xs">
            {site.role}
          </span>
        </div>

        <h1 className="animate-rise-delay-1 mt-5 max-w-[18ch] font-display text-[clamp(2.4rem,11vw,6.75rem)] font-bold leading-[0.95] tracking-tight sm:mt-8 sm:max-w-none">
          <span className="hero-shimmer">{site.name}</span>
        </h1>

        <p className="animate-rise-delay-2 mt-4 max-w-xl px-1 text-[0.95rem] leading-relaxed text-muted sm:mt-6 sm:text-base md:text-lg">
          {site.tagline}
        </p>

        <div className="animate-rise-delay-3 mt-8 flex w-full max-w-md flex-col items-stretch gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
          <a
            href="#projects"
            className="rounded-full bg-foreground px-6 py-3.5 text-center text-sm font-medium text-background transition-opacity hover:opacity-90 sm:py-3"
          >
            View projects →
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-6 py-3.5 text-center text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent sm:py-3"
          >
            Get in touch
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent sm:h-32" />
    </section>
  );
}
