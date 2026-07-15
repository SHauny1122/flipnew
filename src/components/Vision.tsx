import Image from "next/image";
import { HandHeart, Eye, UsersRound, BookOpenCheck, Wrench, Gem } from "lucide-react";

const principles = [
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

export default function Vision() {
  return (
    <section id="services" className="relative py-24 lg:py-32" style={{ backgroundColor: "#8E5A63" }}>
      <div className="mx-auto max-w-[110rem] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-stretch">
          {/* Vision */}
          <div className="lg:col-span-4">
            <div className="flex flex-col justify-between rounded-3xl bg-slate-blue-700 p-10 text-cream-50 shadow-lg lg:h-full lg:min-h-[54rem]">
              <span className="text-base font-bold uppercase tracking-[0.2em] text-sage-300">
                Our Mission
              </span>
              <p className="mt-6 font-display text-3xl leading-snug lg:text-4xl">
                To become a trusted partner for SMEs growth, creating a future
                where there is access to tailored, practical tools,
                conversations, knowledge and information for businesses to
                become better on any playing field.
              </p>
              <div className="mt-8 h-px w-16 bg-brick-400" />
              <div className="mt-6">
                <h4 className="font-display text-3xl text-cream-50 lg:text-4xl">
                  Our Vision
                </h4>
                <p className="mt-4 text-2xl leading-relaxed text-cream-100/90">
                  To be involved where small and medium businesses are
                  intentionally designed to thrive, be resilient in the face of
                  challenges, innovative by nature, and deeply valued by their
                  customers, employees <span className="whitespace-nowrap">and communities.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Why Principles */}
          <div className="lg:col-span-8 lg:grid lg:grid-cols-[minmax(0,34rem)_minmax(0,1fr)] lg:gap-8">
            <div className="lg:max-w-[34rem]">
              <div className="text-center">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black">
                  We Value
                </span>
                <h3 className="mt-3 font-display text-4xl text-ink lg:text-5xl">
                  Principles that guide every engagement.
                </h3>
              </div>

              <div className="mt-10 flex flex-col gap-5 lg:min-h-[54rem]">
                {principles.map((p, i) => {
                  const Icon = p.icon;
                  return (
                    <div
                      key={i}
                      className="group relative flex flex-1 items-center gap-6 overflow-hidden rounded-2xl border border-ink/10 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <span className="pointer-events-none absolute -right-2 -top-6 font-display text-[7rem] leading-none text-sage-100 transition group-hover:text-sage-200">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-sage-100 text-sage-600 transition group-hover:bg-slate-blue-700 group-hover:text-cream-50">
                        <Icon size={24} />
                      </div>
                      <div className="relative">
                        <h4 className="font-display text-xl text-ink">
                          {p.title}
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                          {p.body}
                        </p>
                      </div>
                      <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-slate-blue-500 transition group-hover:scale-x-100" />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative h-full min-h-[54rem] overflow-hidden rounded-3xl shadow-lg ring-1 ring-ink/10">
                <Image
                  src="/brand/purpose image.png"
                  alt="Purpose visual"
                  fill
                  className="object-cover grayscale"
                  sizes="(min-width: 1024px) 28vw, 100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
