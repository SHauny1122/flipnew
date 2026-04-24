import Image from "next/image";
import {
  HandHeart,
  Eye,
  UsersRound,
  BookOpenCheck,
  Wrench,
  Gem,
  CheckCircle2,
} from "lucide-react";

const reasons = [
  "Not alone in making hard changes and decisions.",
  "Get clarity on what's actually happening.",
  "Collaborative assessment (not consultant dictating)",
  "It reveals money left on the table",
  "Creates team alignment",
  "Actionable from day one",
  "See exactly what will happen",
  "Adaptive (not rigid consulting)",
];

const values = [
  {
    icon: HandHeart,
    title: "APPROACHABILITY",
    body: "We speak straight plain language, being responsive, jargon-free, and to the point.",
  },
  {
    icon: Eye,
    title: "OPENESS",
    body: "We only recommend what you truly need.",
  },
  {
    icon: UsersRound,
    title: "PARTNERING",
    body: "We are in this with you because relationships matter beyond the initial project",
  },
  {
    icon: BookOpenCheck,
    title: "UNDERSTANDING",
    body: "For us understanding builds deeper connections than pure expertise.",
  },
  {
    icon: Wrench,
    title: "PRACTICALITY",
    body: "We deliver actionable solutions that work in the real world.",
  },
  {
    icon: Gem,
    title: "VALUE CREATION",
    body: "Every recommendation must solve the issue or create other opportunities.",
  },
];

export default function WhyChoose() {
  return (
    <section className="relative bg-cream-100 py-24 lg:py-32">
      <div className="mx-auto max-w-[110rem] px-6 lg:px-10">
        {/* Why choose */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brick-500">
              Why Choose
            </span>
            <h3 className="mt-3 font-display text-4xl text-ink lg:text-5xl">
              Why Choose a FlipWorks Approach
            </h3>

            <div className="relative mt-8">
              <div className="img-overlay relative overflow-hidden rounded-2xl shadow-md ring-1 ring-ink/10">
                <Image
                  src="https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1200&q=80"
                  alt="Professionals collaborating"
                  width={900}
                  height={600}
                  className="h-72 w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 hidden h-20 w-20 rounded-xl bg-brick-400/70 lg:block" />
            </div>
          </div>

          <div className="lg:col-span-7">
            <ul className="grid gap-3 sm:grid-cols-2">
              {reasons.map((r, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-ink/10 bg-white p-4 shadow-sm"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-sage-600"
                  />
                  <span className="text-sm leading-relaxed text-ink-soft">
                    {r}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* We Value */}
        <div className="mt-24">
          <div className="flex items-end justify-between gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brick-500">
                We Value
              </span>
              <h3 className="mt-3 font-display text-4xl text-ink lg:text-5xl">
                Principles that guide every engagement.
              </h3>
            </div>
            <span className="hidden font-display text-sm italic text-ink-soft md:block">
              Our Why
            </span>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="group relative flex flex-col rounded-2xl border border-ink/10 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-blue-50 text-slate-blue-600">
                    <Icon size={22} />
                  </div>
                  <h4 className="mt-6 font-display text-lg tracking-wide text-ink">
                    {v.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {v.body}
                  </p>
                  <div className="mt-6 h-px w-10 bg-brick-400" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
