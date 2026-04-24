const links = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-blue-800 py-16 text-cream-100/80">
      <div className="mx-auto grid max-w-[110rem] gap-10 px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-6">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-cream-50 font-display text-lg font-semibold text-slate-blue-800">
              F
            </span>
            <span className="font-display text-lg font-semibold tracking-tight text-cream-50">
              FLiP.WORKS PTY Ltd. Consulting
            </span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-cream-100/70">
            Consulting and small-business support focused on practical growth.
          </p>
        </div>

        <div className="lg:col-span-3">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-300">
            Links
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-cream-100/80 transition hover:text-cream-50"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-300">
            Contact
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href="mailto:info@flipworks.co.za"
                className="transition hover:text-cream-50"
              >
                info@flipworks.co.za
              </a>
            </li>
            <li>
              <a
                href="tel:+27827740092"
                className="transition hover:text-cream-50"
              >
                +27827740092
              </a>
            </li>
            <li>Centurion, Gauteng</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-[110rem] px-6 lg:px-10">
        <div className="border-t border-cream-50/10 pt-6 text-xs text-cream-100/60">
          &copy; 2026 FlipWorks. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
