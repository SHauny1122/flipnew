import { Users, Pencil, Mountain, Globe2 } from "lucide-react";

const principles = [
  {
    icon: Users,
    title: "People-Centred:",
    body: "People create lasting value.",
  },
  {
    icon: Pencil,
    title: "Design-Led Improvement:",
    body: "We believe businesses are designed and not merely managed.",
  },
  {
    icon: Mountain,
    title: "Strength in Complexity:",
    body: "Economic volatility, regulatory changes, infrastructure challenges, and competitive pressures demand more than generic advice.",
  },
  {
    icon: Globe2,
    title: "Sustainable National Impact:",
    body: "By helping SMEs getting better we contribute to job creation, economic growth, and a more competitive national economy.",
  },
];

export default function Vision() {
  return (
    <section id="services" className="relative bg-sage-100/60 py-24 lg:py-32">
      <div className="mx-auto max-w-[110rem] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Vision */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 rounded-3xl bg-slate-blue-700 p-10 text-cream-50 shadow-lg">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-300">
                Our Vision
              </span>
              <p className="mt-6 font-display text-3xl leading-snug lg:text-4xl">
                To be involved where small and medium businesses are
                intentionally designed to thrive, be resilient in the face of
                challenges, innovative by nature, and deeply valued by their
                customers, employees and communities.
              </p>
              <div className="mt-8 h-px w-16 bg-brick-400" />
              <p className="mt-6 text-sm leading-relaxed text-cream-100/85">
                <span className="font-semibold text-cream-50">
                  Our Mission:
                </span>{" "}
                To become a trusted partner for SMEs growth, creating a future
                where there is access to tailored, practical tools,
                conversations, knowledge and information for businesses to
                become better on any playing field.
              </p>
            </div>
          </div>

          {/* Why Principles */}
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brick-500">
              Our &ldquo;WHY&rdquo; Principles
            </span>
            <h3 className="mt-3 font-display text-4xl text-ink lg:text-5xl">
              What we stand on.
            </h3>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {principles.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div
                    key={i}
                    className="group relative overflow-hidden rounded-2xl border border-ink/10 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sage-100 text-sage-600">
                      <Icon size={20} />
                    </div>
                    <h4 className="mt-5 font-display text-xl text-ink">
                      {p.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {p.body}
                    </p>
                    <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-slate-blue-500 transition group-hover:scale-x-100" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
