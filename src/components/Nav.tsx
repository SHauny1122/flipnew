"use client";

import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [["#membership", "Membership"], ["#benefits", "Benefits"], ["#flipworks", "FlipWorks"], ["#nsbc", "NSBC"]] as const;

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);

  return <header className="site-header"><div className="nav-inner"><a className="nav-brand" href="#top" onClick={() => setOpen(false)}><Image src="/brand/logo.png" alt="FlipWorks logo" width={840} height={827} priority /><span><strong>FlipWorks</strong><small>Consulting</small></span></a><nav className="nav-links" aria-label="Main navigation">{links.map(([href, label]) => <a href={href} key={href}>{label}</a>)}</nav><a className="nav-cta" href="#contact">Let&apos;s talk <ArrowUpRight aria-hidden="true" size={18} /></a><button className="nav-toggle" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X aria-hidden="true" size={25} /> : <Menu aria-hidden="true" size={25} />}</button></div>{open && <nav id="mobile-navigation" className="mobile-navigation" aria-label="Mobile navigation">{links.map(([href, label], index) => <a href={href} key={href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{label}<ArrowUpRight aria-hidden="true" size={21} /></a>)}<a href="#contact" onClick={() => setOpen(false)}><span>05</span>Let&apos;s talk<ArrowUpRight aria-hidden="true" size={21} /></a></nav>}</header>;
}
