"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";

const links = [
  { href: "#about", label: "About" },
  { href: "#argument", label: "Question / Argument" },
  { href: "#services", label: "We Value" },
  { href: "#offerings", label: "Our Service Offerings" },
  { href: "#approach", label: "Our Approach" },
  { href: "#why-choose", label: "Why Choose" },
  { href: "#spiral", label: "Development Spiral" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoOk, setLogoOk] = useState(true);

  // Lock scroll and handle Escape key when menu is open
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-ink/5 bg-cream-50/80 backdrop-blur-md">
      <div className="relative mx-auto flex h-16 max-w-[110rem] items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-3">
          {logoOk ? (
            <Image
              src="/brand/logo.png"
              alt="FlipWorks"
              width={160}
              height={40}
              priority
              onError={() => setLogoOk(false)}
              className="h-12 w-auto"
            />
          ) : (
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-blue-500 text-cream-50 font-display text-lg font-semibold">
              F
            </span>
          )}
          <span className="flex flex-col leading-none">
            <span className="font-display text-base font-semibold tracking-tight sm:text-lg">
              <span className="underline decoration-[#8E5A63] decoration-2 underline-offset-[3px]">
                <span className="text-slate-blue-600">FL</span>
                <span style={{ color: "#8E5A63" }}>i</span>
                <span className="text-slate-blue-600">P</span>
              </span>
              <span className="text-ink">.</span>
              <span style={{ color: "#4F79A8" }}>WORKS</span>
              <span className="ml-1 text-[9px] font-medium tracking-wide text-ink-soft sm:text-[10px]">
                PTY Ltd.
              </span>
            </span>
            <span className="-mt-1 self-end mr-10 text-xs font-medium text-ink">
              Consulting
            </span>
          </span>
        </a>

        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
            className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/40 px-4 py-2 text-sm font-medium text-ink shadow-sm backdrop-blur-sm transition hover:bg-white/70 hover:text-slate-blue-700"
          >
            <span>Menu</span>
            <span className="inline-block h-2 w-2 rounded-full bg-ink" />
          </button>
        </div>

        <a
          href="#contact"
          className="hidden rounded-full bg-slate-blue-700 px-5 py-2 text-sm font-medium text-cream-50 shadow-sm transition hover:bg-slate-blue-800 md:inline-flex"
        >
          Book a Discussion
        </a>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
          className="md:hidden inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/60 px-3 py-1.5 text-sm font-medium text-ink shadow-sm backdrop-blur-sm transition hover:bg-white/80"
        >
          <span>Menu</span>
          <span className="inline-block h-2 w-2 rounded-full bg-ink" />
        </button>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 z-50"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 opacity-100 transition-opacity"
            onClick={() => setMenuOpen(false)}
          />

          {/* Panel */}
          <div className="absolute inset-x-0 top-0 mx-auto max-w-[110rem] px-6 py-8 lg:px-10">
            <div className="relative overflow-hidden rounded-3xl border border-ink/10 bg-white/95 shadow-xl backdrop-blur-md transition-transform duration-150 ease-out">
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 bg-white/80 text-ink transition hover:bg-white"
              >
                <X size={16} />
              </button>

              <div className="px-6 py-10 text-center">
                <div className="mx-auto flex w-full max-w-3xl flex-col gap-3">
                  {links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={(e) => {
                        e.preventDefault();
                        const id = l.href.replace('#', '');
                        const el = document.getElementById(id);
                        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        setMenuOpen(false);
                      }}
                      className="inline-flex h-12 w-full items-center justify-center rounded-full border border-ink/15 bg-white/85 px-5 text-base font-semibold text-ink shadow-sm transition hover:bg-white hover:text-slate-blue-700"
                    >
                      {l.label}
                    </a>
                  ))}

                  {/* CTA inside overlay, same size as links */}
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      setMenuOpen(false);
                    }}
                    className="inline-flex h-12 w-full items-center justify-center rounded-full border border-transparent bg-slate-blue-700 px-5 text-base font-semibold text-cream-50 shadow-sm transition hover:bg-slate-blue-800"
                  >
                    Book a Discussion
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
