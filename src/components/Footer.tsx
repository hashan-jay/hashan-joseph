import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-pad border-t border-border bg-surface py-6 sm:py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-muted sm:text-sm">
          © {year} {site.name}. Developed with Modern Expertise by Hashan Joseph.
        </p>
        <a
          href="/#top"
          className="text-sm font-medium text-foreground transition-colors hover:text-accent"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
