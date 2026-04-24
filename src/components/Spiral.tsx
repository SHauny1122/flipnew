import { Repeat, TrendingUp } from "lucide-react";

export default function Spiral() {
  const stages = [
    "Awareness",
    "Diagnose",
    "Design",
    "Implement",
    "Review",
    "Next",
  ];

  return (
    <section className="relative bg-slate-blue-50/60 py-24 lg:py-28">
      <div className="mx-auto max-w-[110rem] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brick-500">
              The Development Spiral
            </span>
            <h3 className="mt-3 font-display text-4xl text-ink lg:text-5xl">
              Progressive cycles of <span className="italic text-slate-blue-600">better</span>.
            </h3>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-ink-soft">
              <li className="flex gap-3">
                <Repeat size={18} className="mt-0.5 shrink-0 text-sage-600" />
                Development processes work in a cycle, taking us to
                progressively higher levels of &ldquo;better&rdquo;
              </li>
              <li className="flex gap-3">
                <TrendingUp
                  size={18}
                  className="mt-0.5 shrink-0 text-sage-600"
                />
                The spiral indicate the nature of development in stages and
                phases.
              </li>
            </ul>

            <div className="mt-8 rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
              <p className="text-sm leading-relaxed text-ink-soft">
                <span className="font-semibold text-ink">
                  Continious benchmarking with other SME businesses.
                </span>{" "}
                Join and Participate in Conversations and initiatives for
                SME&rsquo;s in South Africa and Africa. Become a Platinum
                Member, one of the most comprehensive platforms of its kind
                available.
              </p>
              <p className="mt-3 text-sm text-ink-soft">
                Yearly subscription of{" "}
                <span className="font-semibold text-ink">R3850.00</span> (vat
                excl) / only{" "}
                <span className="font-semibold text-ink">R385 per month</span>{" "}
                / many benefits and initiatives.
              </p>
            </div>
          </div>

          {/* Spiral visual */}
          <div className="lg:col-span-7">
            <div className="relative mx-auto aspect-square max-w-[520px]">
              {/* concentric rings */}
              <div className="absolute inset-0 rounded-full border border-slate-blue-200" />
              <div className="absolute inset-8 rounded-full border border-slate-blue-200/80" />
              <div className="absolute inset-16 rounded-full border border-sage-300/80" />
              <div className="absolute inset-24 rounded-full border border-sage-300/60" />
              <div className="absolute inset-32 rounded-full border border-brick-300/70" />
              <div className="absolute inset-40 rounded-full border border-brick-400/60" />

              {/* center label */}
              <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-ink/10">
                <span className="font-display text-lg text-ink">better</span>
              </div>

              {/* stage chips around the spiral */}
              {stages.map((s, i) => {
                const angle = (i / stages.length) * Math.PI * 2 - Math.PI / 2;
                const r = 44; // percent
                const x = 50 + r * Math.cos(angle);
                const y = 50 + r * Math.sin(angle);
                return (
                  <div
                    key={s}
                    style={{ left: `${x}%`, top: `${y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="rounded-full border border-ink/10 bg-cream-50 px-3 py-1.5 text-xs font-medium text-ink shadow-sm">
                      <span className="mr-1 text-brick-500">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {s}
                    </div>
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
