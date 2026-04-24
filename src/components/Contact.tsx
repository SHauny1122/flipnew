import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-cream-100 py-24 lg:py-32">
      <div className="mx-auto max-w-[110rem] px-6 lg:px-10">
        {/* CTA */}
        <div className="relative overflow-hidden rounded-3xl bg-slate-blue-700 p-10 text-cream-50 shadow-lg lg:p-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brick-500/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-sage-400/20 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-300">
                Get Started
              </span>
              <h3 className="mt-3 font-display text-4xl leading-tight lg:text-5xl">
                Ready to grow your business?
              </h3>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-cream-100/85">
                Book a short conversation to explore practical next steps for
                your SME.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <a
                href="mailto:info@flipworks.co.za"
                className="group inline-flex items-center gap-2 rounded-full bg-cream-50 px-6 py-3 text-sm font-semibold text-slate-blue-800 shadow-sm transition hover:bg-white"
              >
                Book a Discussion
                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Contact details */}
        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brick-500">
              Contact
            </span>
            <h3 className="mt-3 font-display text-3xl text-ink lg:text-4xl">
              Let&rsquo;s discuss your goals and practical next steps for
              growth.
            </h3>
          </div>
          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "info@flipworks.co.za",
                  href: "mailto:info@flipworks.co.za",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+27827740092",
                  href: "tel:+27827740092",
                },
                {
                  icon: MapPin,
                  label: "Address",
                  value: "Centurion, Gauteng",
                  href: "#",
                },
              ].map((c, i) => {
                const Icon = c.icon;
                return (
                  <a
                    key={i}
                    href={c.href}
                    className="group flex flex-col gap-3 rounded-2xl border border-ink/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-blue-50 text-slate-blue-600 transition group-hover:bg-slate-blue-500 group-hover:text-cream-50">
                      <Icon size={18} />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-ink-soft/70">
                        {c.label}
                      </div>
                      <div className="mt-1 font-display text-base text-ink">
                        {c.value}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
