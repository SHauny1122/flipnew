import Image from "next/image";
import {
  ArrowRight,
  Handshake,
  Target,
  HeartHandshake,
  ShieldCheck,
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
          <h2 className="mt-3 font-display text-4xl text-ink lg:text-5xl">
            FlipWorks Consulting
          </h2>
          <p className="mt-5 border-l-2 border-brick-500 pl-5 text-lg italic leading-relaxed text-ink-soft">
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
              text: "We fuse strategic design, human-centered thinking, and rigorous business strategy to create businesses that are more innovative, resilient, and future-ready.",
            },
            {
              icon: Lightbulb,
              text: "We teamed up with IT Works to explore opportunities in AI and engage with Small and Medium Enterprises (SMEs) where AI adoption can create improvement in the works of the businesses.",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group relative rounded-2xl border border-ink/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-blue-50 text-slate-blue-600">
                  <Icon size={20} />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  {item.text}
                </p>
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
            with <span className="italic" style={{ color: "#82a590" }}>uncertainty</span>.
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

        {/* NSBC image + long text card */}
        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <div className="relative overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm lg:col-span-4">
            <div className="relative h-full min-h-[220px]">
              <Image
                src="/brand/1772550369227.jpg"
                alt="NSBC Platinum Membership"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm lg:col-span-8 lg:p-8">
            <p className="text-lg leading-relaxed text-ink-soft">
              FlipWorks advocate for Small and Medium Enterprises and in
              support of our beliefs we would encourage all SME businesses to
              join an efficient membership solution.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              FlipWorks became an official NSBC licensee for their membership
              and engages with SMEs to join the NSBC Platinum Membership.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-[2px] w-full rounded-full bg-brick-500" />

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

        {/* NSBC Platinum benefits section */}
        <div className="mt-10 rounded-3xl border border-ink/5 bg-cream-50/70 p-6 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center rounded-full bg-brick-500 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-cream-50">
                NSBC Platinum Membership
              </div>

              <h3 className="mt-5 font-display text-4xl leading-tight text-ink lg:text-5xl">
                What You Get with
                <br />
                <span style={{ color: "#82a590" }}>NSBC Platinum</span>
              </h3>

              <p className="mt-5 max-w-xl border-l-2 border-brick-500 pl-4 text-lg leading-relaxed text-ink-soft">
                Powerful benefits, exclusive access and real opportunities to
                help your business grow, connect and thrive.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {[
                  {
                    icon: Users,
                    topic: "SAVE MONEY",
                    detail:
                      "Unlock amazing exclusive offerings from top local and global brands throughout the year. These incredible offers are your key to saving big while enjoying premium products and services",
                  },
                  {
                    icon: Handshake,
                    topic: "Topic Two",
                    detail:
                      "Detailed popup content for this card will appear here once final copy is provided.",
                  },
                  {
                    icon: Compass,
                    topic: "Topic Three",
                    detail:
                      "Detailed popup content for this card will appear here once final copy is provided.",
                  },
                  {
                    icon: Gauge,
                    topic: "Topic Four",
                    detail:
                      "Detailed popup content for this card will appear here once final copy is provided.",
                  },
                  {
                    icon: Workflow,
                    topic: "Topic Five",
                    detail:
                      "Detailed popup content for this card will appear here once final copy is provided.",
                  },
                  {
                    icon: Layers,
                    topic: "Topic Six",
                    detail:
                      "Detailed popup content for this card will appear here once final copy is provided.",
                  },
                  {
                    icon: HeartHandshake,
                    topic: "Topic Seven",
                    detail:
                      "Detailed popup content for this card will appear here once final copy is provided.",
                  },
                  {
                    icon: Target,
                    topic: "Topic Eight",
                    detail:
                      "Detailed popup content for this card will appear here once final copy is provided.",
                  },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="group relative min-h-[170px] rounded-xl border border-ink/10 bg-white p-5 shadow-sm"
                    >
                      <div className="relative flex flex-col items-center text-center">
                        <div
                          className={
                            i === 0
                              ? "pointer-events-none absolute left-1/2 top-0 flex h-28 w-28 -translate-x-1/2 -translate-y-2 items-center justify-center"
                              : "flex h-12 w-12 items-center justify-center rounded-full bg-slate-blue-50 text-sage-500"
                          }
                        >
                          {i === 0 ? (
                            <Image
                              src="/brand/ChatGPT Image May 21, 2026, 12_56_32 PM.png"
                              alt="Save money icon"
                              width={112}
                              height={112}
                              className="h-28 w-28 object-contain"
                            />
                          ) : (
                            <Icon size={24} />
                          )}
                        </div>
                        <p
                          className={
                            i === 0
                              ? "mt-[92px] font-display text-2xl"
                              : "mt-3 font-display text-2xl"
                          }
                          style={{ color: i === 0 ? "#4F79A8" : "#1f2a36" }}
                        >
                          {item.topic}
                        </p>
                      </div>

                      <div className="pointer-events-none absolute left-1/2 bottom-full z-20 mb-3 w-60 -translate-x-1/2 translate-y-1 rounded-lg border border-ink/10 bg-white p-3 text-sm leading-relaxed text-ink-soft opacity-0 shadow-lg transition duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                        {i === 0 && (
                          <p className="mb-2 font-semibold" style={{ color: "#4F79A8" }}>
                            Exclusive High Value Deals and massive discounts
                          </p>
                        )}
                        {item.detail}
                      </div>

                      <div className="absolute bottom-4 left-1/2 h-px w-10 -translate-x-1/2 bg-brick-500" />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-ink/10">
                  <Image
                    src="/brand/imag5.png"
                    alt="NSBC membership workspace"
                    width={900}
                    height={1100}
                    className="h-[520px] w-full object-cover"
                  />
                </div>

                <div className="absolute -bottom-7 right-4 w-64 min-h-[160px] -translate-x-[30%] translate-y-1/2 rounded-2xl border border-ink/10 bg-white p-6 shadow-xl">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brick-500/10 text-brick-500">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <p className="font-display text-2xl text-ink">Trusted Platform</p>
                      <p className="mt-1 whitespace-nowrap text-sm text-ink-soft">Backed by NSBC Africa.</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                    A network built for growth, opportunity and impact.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-ink/10 bg-cream-50 px-5 py-4 lg:px-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-4 lg:gap-6">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-ink/10 bg-white text-center shadow-sm">
                  <span className="text-[9px] font-semibold uppercase tracking-wider text-ink-soft">
                    NSBC
                    <br />
                    Platinum
                    <br />
                    Member
                  </span>
                </div>

                <div>
                  <p className="font-display text-3xl text-ink">All this for less than R330 a month.</p>
                  <p className="mt-1 text-lg text-ink-soft">Join thousands of entrepreneurs already growing with NSBC.</p>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brick-500 px-6 py-4 text-base font-semibold text-cream-50 shadow-sm transition hover:bg-brick-600 lg:min-w-[320px]"
              >
                Learn More About Platinum Membership
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
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
