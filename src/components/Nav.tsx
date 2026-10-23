"use client";

import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  ["#about", "About"],
  ["#services", "What we do"],
  ["#approach", "How we work"],
  ["#membership", "NSBC membership"],
] as const;

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);

  return (
    <header className="site-header">
      <div className="page-shell header-inner">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <Image src="/brand/logo.png" alt="FlipWorks logo" width={840} height={827} className="brand-logo" priority />
          <span><strong>FlipWorks</strong><small>Consulting</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([href, label]) => <a href={href} key={href}>{label}</a>)}
        </nav>
        <a className="nav-contact" href="#contact">Let’s talk <ArrowUpRight aria-hidden="true" size={17} strokeWidth={1.8} /></a>
        <button type="button" className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X aria-hidden="true" size={25} /> : <Menu aria-hidden="true" size={25} />}
        </button>
      </div>
      {open && (
        <nav id="mobile-menu" className="mobile-nav" aria-label="Mobile navigation">
          {links.map(([href, label], index) => <a href={href} key={href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{label}<ArrowUpRight aria-hidden="true" size={20} /></a>)}
          <a href="#contact" onClick={() => setOpen(false)}><span>05</span>Let’s talk<ArrowUpRight aria-hidden="true" size={20} /></a>
        </nav>
      )}
    </header>
  );
}
