"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { site } from "@/data/site";

const links = [
  { href: "/#about", label: "About" },
  { href: "/projects", label: "All Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#education", label: "Education" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="section-pad mx-auto flex h-14 max-w-6xl items-center justify-between sm:h-16">
        <a
          href="/"
          className="flex min-w-0 items-center gap-2.5 font-display text-base font-semibold tracking-tight text-foreground sm:text-lg"
          onClick={() => setOpen(false)}
        >
          <Image
            src={site.profileImage}
            alt=""
            width={32}
            height={32}
            className="h-7 w-7 shrink-0 rounded-full border border-border object-cover object-top sm:h-8 sm:w-8"
          />
          <span className="truncate">{site.name.split(" ")[0]}</span>
        </a>

        <div className="hidden items-center gap-5 lg:flex xl:gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${site.email}`}
            className="rounded-full border border-border px-4 py-1.5 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Get in touch
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative z-50 flex h-10 w-10 items-center justify-center text-foreground lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={`block h-0.5 w-full bg-current transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-current transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-current transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {open ? (
        <div className="section-pad max-h-[calc(100dvh-3.5rem)] overflow-y-auto border-b border-border bg-background pb-6 pt-2 lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-base text-muted transition-colors hover:bg-surface hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`mailto:${site.email}`}
              className="mt-2 rounded-full border border-accent/40 bg-accent-soft px-4 py-3 text-center text-sm font-medium text-accent"
              onClick={() => setOpen(false)}
            >
              Get in touch
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
