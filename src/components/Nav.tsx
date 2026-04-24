"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
  { href: "#about", label: "About" },
  { href: "#approach", label: "Approach" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [logoOk, setLogoOk] = useState(true);

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
            </span>
            <span className="-mt-1.5 self-end pr-2 text-[10px] font-medium tracking-wide text-ink-soft sm:text-xs">
              PTY Ltd.
            </span>
          </span>
        </a>

        <nav className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="pointer-events-auto text-sm font-medium text-ink-soft transition hover:text-slate-blue-600"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full bg-slate-blue-700 px-5 py-2 text-sm font-medium text-cream-50 shadow-sm transition hover:bg-slate-blue-800 md:inline-flex"
        >
          Book a Discussion
        </a>

        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-ink/10 text-ink"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-ink/5 bg-cream-50">
          <nav className="mx-auto flex max-w-[110rem] flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-ink-soft hover:bg-slate-blue-50"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-slate-blue-700 px-5 py-2 text-center text-sm font-medium text-cream-50"
            >
              Book a Discussion
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
