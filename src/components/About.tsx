import {
  Handshake,
  Target,
  HeartHandshake,
  HelpCircle,
  Workflow,
  Users,
  Compass,
  Layers,
  Gauge,
  Sparkles,
  Lightbulb,
} from "lucide-react";

const problemPoints = [
  { icon: Workflow, text: "It solves real problems elegantly," },
  { icon: Gauge, text: "operates efficiently," },
  { icon: Users, text: "treats people well," },
  { icon: Compass, text: "adapts to change, and" },
  { icon: Layers, text: "builds compounding advantages over time." },
];

const pillars = [
  "A truly \"better\" business likely excels across multiple dimensions, not just one.",
  "Better Structure for Operational Excellence. processes, technology, culture.",
  "Better businesses align what's good for the business with what's good for stakeholders.",
  "Plan for Evolution. Static businesses rarely stay \"better\" for long.",
  "Better Design the Customer Experience",
  "Better Designed Value Proposition. Faster, cheaper, more effective.",
  "Identify the Core Problem Worth Solving.to become \"better\"",
];

export default function About() {
  return (
    <section id="about" className="relative bg-cream-100 py-24 lg:py-32">
      <div className="mx-auto max-w-[110rem] px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="text-2xl font-semibold uppercase tracking-[0.2em] text-brick-500">
            About
          </span>
          <h2 className="mt-3 border-l-2 border-brick-500 pl-5 font-display text-4xl text-ink lg:text-5xl">
            FlipWorks Consulting
          </h2>
          <p className="mt-5 text-lg italic leading-relaxed text-ink-soft">
            &ldquo;The Consulting partner where we are working together, Flipping
            the Works and Designing a Better Business!&rdquo;
          </p>
        </div>

        {/* Consulting five points */}
        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {[
            {
              icon: HeartHandshake,
              text: "the partner for small and medium businesses, igniting new possibilities to make your business better.",
            },
            {
              icon: Target,
              text: "affordable, accessible and practical results-oriented consulting, aligned with limited budgets, time and internal resources.",
            },
            {
              icon: Handshake,
              text: "consulting is designed and tailored by which your business can thrive, grow and evolve in the face of uncertainty and constant challenges.",
            },
            {
              icon: Sparkles,
              text: "",
            },
            {
              icon: Lightbulb,
              text: "",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group relative rounded-2xl border border-ink/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-blue-50 text-slate-blue-600">
                    <Icon size={20} />
                  </div>
                  <p className="text-sm leading-relaxed text-ink-soft">
                    {item.text}
                  </p>
                </div>
                <div className="absolute inset-x-6 bottom-0 h-px origin-left scale-x-0 bg-brick-500 transition group-hover:scale-x-100" />
              </div>
            );
          })}
        </div>

        {/* Question / Argument block */}
        <div className="mt-12 rounded-2xl border border-ink/10 bg-white p-8 shadow-sm lg:p-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-blue-700">
            <HelpCircle size={14} />
            Question? / Argument
          </div>

          <h3 className="mt-5 max-w-4xl font-display text-4xl leading-tight text-ink lg:text-5xl">
            The world around you &ndash; and your business &ndash; is filled
            with <span className="italic text-slate-blue-500">uncertainty</span>.
          </h3>

          <ul className="mt-8 max-w-4xl space-y-4 text-base leading-relaxed text-ink-soft">
            <li className="flex gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brick-500" />
              But within that uncertainty exist innumerable opportunities to
              design or (re) design, game changing businesses.
            </li>
            <li className="flex gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brick-500" />
              These opportunities are there for the taking.
            </li>
            <li className="flex gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brick-500" />
              As such, better businesses are the ones that approach problems
              in a different, systematic way, turning problem situations into
              opportunities.
            </li>
          </ul>
        </div>

        {/* WHAT can be BETTER callout */}
        <div className="mt-8 max-w-3xl rounded-2xl border-l-4 border-brick-500 bg-white p-6 shadow-sm">
          <p className="font-display text-2xl text-ink">
            WHAT can be BETTER in MY BUSINESS?
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            START and Join Conversations and initiatives for Small Business
            Entrepreneurs in South Africa and Africa. Become a Platinum
            Member of the most comprehensive platform of its kind available.
          </p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-brick-500">
            monthly fee benefits
          </p>
        </div>

        {/* The Problems We Flip */}
        <div className="mt-24 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brick-500">
              The Problems We Flip
            </span>
            <h3 className="mt-3 font-display text-4xl text-ink lg:text-5xl">
              A &ldquo;better&rdquo; business isn&rsquo;t just about having a
              good product.
            </h3>
            <p className="mt-5 text-base leading-relaxed text-ink-soft">
              it&rsquo;s about creating a system where value creation, capture,
              and distribution work in harmony.
            </p>

            <div className="mt-8 space-y-3">
              {problemPoints.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-xl border border-ink/5 bg-white/80 p-4 shadow-sm"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-sage-100 text-sage-600">
                      <Icon size={16} />
                    </div>
                    <p className="text-sm leading-relaxed text-ink-soft">
                      {p.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative rounded-2xl border border-ink/10 bg-white p-8 shadow-sm lg:p-10">
              <div className="absolute -top-3 left-8 rounded-full bg-brick-500 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-cream-50">
                Dimensions
              </div>
              <ul className="space-y-5">
                {pillars.map((p, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-blue-50 font-display text-sm text-slate-blue-700">
                      {i + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-ink-soft">
                      {p}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
