import {
  MessageSquare,
  Eye,
  Stethoscope,
  PencilRuler,
  Rocket,
  ClipboardCheck,
  ArrowRightCircle,
} from "lucide-react";

const steps = [
  {
    no: "0",
    icon: MessageSquare,
    title: "Discussion",
    bullets: ["point of view", "honest and open", "what work and what don't"],
  },
  {
    no: "1",
    icon: Eye,
    title: "Awareness",
    bullets: [
      "recognise the need for better",
      "define where we are",
      "where we want we to be",
    ],
  },
  {
    no: "2",
    icon: Stethoscope,
    title: "Diagnoses",
    bullets: [
      "formulate the gap",
      "define why a gap exists",
      "pick point of pain",
    ],
  },
  {
    no: "3",
    icon: PencilRuler,
    title: "Design interventions",
    bullets: [
      "design criteria",
      "project planning",
      "orientation for interventions",
      "roles",
    ],
  },
  {
    no: "4",
    icon: Rocket,
    title: "Implement",
    bullets: [
      "orientation",
      "communication",
      "leader support",
      "involvement",
      "project lead",
    ],
  },
  {
    no: "5",
    icon: ClipboardCheck,
    title: "Review",
    bullets: ["evaluation against performance", "recognition reward"],
  },
  {
    no: "6",
    icon: ArrowRightCircle,
    title: "What next",
    bullets: ["pick next point of pain."],
  },
];

export default function Approach() {
  return (
    <section id="approach" className="relative bg-slate-blue-800 py-24 text-cream-50 lg:py-32">
      {/* decorative sand block */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-cream-100 to-transparent opacity-10" />

      <div className="mx-auto max-w-[110rem] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-300">
              Our Approach
            </span>
            <h3 className="mt-3 font-display text-4xl leading-tight lg:text-5xl">
              The mandate for continious re-invention.
            </h3>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-cream-100/80">
              &ldquo;(Re-) Designing for a better business is generally
              considered not a usual thing. We are trying to see it
              differently. It must be built into the business DNA and culture,
              this idea that we haven&rsquo;t got it right&hellip;.YET!&rdquo;.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-cream-50/20 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-widest text-cream-100/80 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brick-400" />
              Theory &mdash; 7 stages
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.no}
                className="group relative flex flex-col rounded-2xl border border-cream-50/10 bg-white/[0.03] p-6 backdrop-blur transition hover:bg-white/[0.06]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cream-50/10 text-sage-300">
                    <Icon size={20} />
                  </div>
                  <span className="font-display text-3xl text-brick-300/80">
                    {s.no}
                  </span>
                </div>
                <h4 className="mt-5 font-display text-xl text-cream-50">
                  {s.title}
                </h4>
                <ul className="mt-3 space-y-1.5 text-sm text-cream-100/75">
                  {s.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-sage-300" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                {i < steps.length - 1 && (
                  <div className="absolute -right-2 top-1/2 hidden h-px w-4 -translate-y-1/2 bg-cream-50/20 lg:block" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
