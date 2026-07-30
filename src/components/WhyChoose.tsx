import Image from "next/image";
import type * as React from "react";
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
  {
    icon: UsersRound,
    title: "OPERATIONS IMPROVEMENT",
    body: "Streamline processes and remove friction so teams can deliver faster with fewer errors.",
  },
  {
    icon: BookOpenCheck,
    title: "CHANGE MANAGEMENT",
    body: "Practical support to land change—clear roles, communication and first-line leader enablement.",
  },
];

type WhyChooseProps = {
  showValues?: boolean;
  showWhyChoose?: boolean;
};

export default function WhyChoose({
  showValues = true,
  showWhyChoose = true,
}: WhyChooseProps) {
  return (
    <section className="relative bg-cream-100 py-24 lg:py-32">
      <div className="mx-auto max-w-[110rem] px-6 lg:px-10">
        {/* Our Service Offerings */}
        {showValues && (
          <div>
            <div className="flex items-end justify-between gap-6">
              <h3 className="font-display text-4xl text-ink lg:text-5xl">Our Service Offerings</h3>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((v, i) => {
                const wrapperClass = "relative isolate";
                const baseCardClass =
                  "relative z-[1] flex h-full min-h-[22rem] flex-col rounded-3xl border border-ink/10 bg-white p-6 transition hover:-translate-y-0.5";

                // Variant-specific visuals
                let cardStyle: React.CSSProperties = {};
                let backing: React.ReactNode = null;

                if (i <= 1) {
                  // Cards 1–2: current style
                  cardStyle = {
                    boxShadow:
                      "-8px 0 10px rgba(35, 45, 220, 0.75), 0 3px 8px rgba(0, 0, 0, 0.12)",
                  };
                } else if (i <= 3) {
                  // Cards 3–4: stronger left-edge style
                  cardStyle = {
                    boxShadow:
                      "-14px 0 22px rgba(35,45,220,0.90), -22px 0 34px rgba(35,45,220,0.45), 0 4px 10px rgba(0,0,0,0.12)",
                  };
                } else if (i <= 5) {
                  // Cards 5–6: soft gradient style (subtle, fades top/bottom)
                  backing = (
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -left-2 top-1 bottom-1 w-8 rounded-[24px] blur-[2px]"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(82,88,238,0) 0%, rgba(82,88,238,0.28) 35%, rgba(82,88,238,0.28) 65%, rgba(82,88,238,0) 100%)",
                      }}
                    />
                  );
                  cardStyle = { boxShadow: "0 3px 8px rgba(0, 0, 0, 0.12)" };
                } else {
                  // Cards 7–8: layered backing style (blue shape behind card)
                  backing = (
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -left-[9px] top-0 bottom-0 w-[35px] rounded-[24px_0_0_24px] blur-[1px]"
                      style={{
                        background:
                          "linear-gradient(180deg, #5258ee 0%, #2424d8 50%, #353be9 100%)",
                      }}
                    />
                  );
                  cardStyle = { boxShadow: "0 3px 8px rgba(0,0,0,0.12)" };
                }

                return (
                  <div key={i} className={wrapperClass}>
                    {backing}
                    <div className={baseCardClass} style={cardStyle}>
                      <h4 className="font-display text-lg text-ink">{v.title}</h4>
                      <p className="mt-3 text-sm leading-relaxed text-ink-soft">{v.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Why choose */}
        {showWhyChoose && (
          <div className={`${showValues ? "mt-24 " : ""}grid gap-12 lg:grid-cols-12 lg:items-start`}>
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
        )}
      </div>
    </section>
  );
}

/* Example idea for the layered backing variant
.card {
  position: relative;
  isolation: isolate;
}

.card::before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: -9px;
  width: 35px;
  border-radius: 24px 0 0 24px;
  background: linear-gradient(
    180deg,
    #5258ee 0%,
    #2424d8 50%,
    #353be9 100%
  );
  filter: blur(1px);
}
*/
