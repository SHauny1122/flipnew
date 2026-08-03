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
    title: "Organisation Development",
    longBody: [
      "Focuses on businesses getting better through strengthening how they work and focusing on what matters most.",
      "Identifying the key challenges affecting your workplace, then prioritise the changes that will have the greatest impact.",
      "Strengthen frontline leadership, enhance employee engagement, and drive productivity to achieve results.",
      "Work closely with your business to determine which strategies, processes, or actions will deliver the most value and serve as a hands-on partner.",
    ],
  },
  {
    icon: Eye,
    title: "Business Benchmarking",
    longBody: [
      "Benchmarking helps SMEs improve profitability, productivity, and customer satisfaction.",
      <span key="l1" className="text-red-600 font-medium">better or worse?</span>,
      <span key="l2" className="text-amber-600 font-medium">top or bottom?</span>,
      <span key="l3" className="text-blue-600 font-medium">average or excellent?</span>,
      <span key="l4" className="text-green-600 font-medium">leading or lagging?</span>,
      <span key="l5" className="text-red-600 font-medium">how do you compare to the rest?</span>,
      "If you’re an SME owner, start simple, focus on actionable insights, and review regularly.",
    ],
  },
  {
    icon: UsersRound,
    title: "Business Design",
    longBody: [
      "Effective business design clarifies how work gets done.",
      "Focuses on structuring roles, teams, and workflows to support business strategy and improve efficiency.",
      "To ensure the right capabilities, decision-making authority, and that the resources are in place so the business can operate effectively and grow successfully.",
      "Getting your business design right unlocks a powerful and often overlooked competitive advantage.",
    ],
  },
  {
    icon: BookOpenCheck,
    title: "Strategy Alignment",
    longBody: [
      "Focuses on translating organisational strategy into actionable plans and measurable results.",
      "We ensure alignment between goals, initiatives, and performance tracking so the business can execute strategy effectively and adapt to changing business conditions.",
      "This process strengthens leaders’ ability to translate strategy into action—building clarity, accountability, and confidence so strategy is not only defined, but effectively achieved.",
    ],
  },
  {
    icon: Wrench,
    title: "Frontline Leadership Development",
    longBody: [
      "Focuses on building capable frontline leaders who can drive strategy, manage change, and deliver results.",
      "To strengthen leadership skills, decision-making, and accountability will ensure strong management and sustained business performance and growth.",
      "Your people are an asset",
      "It is a flexible journey and supports them at critical moments—so they can perform at their best and deliver.",
    ],
  },
  {
    icon: Gem,
    title: "People Strategy",
    longBody: [
      "A strong business begins with a thoughtful, well-aligned approach to its people.",
      "Focus on using data, systems, and frameworks to manage and optimise workforce performance.",
      "We develop talent decisions, improve productivity, and enable organisations to align people capabilities with business objectives while focusing on employee growth.",
      "We help leaders ask the right questions, challenge assumptions, and design people practices that enable performance, adaptability, and long-term success.",
    ],
  },
  {
    icon: UsersRound,
    title: "Business Process Solutions",
    longBody: [
      "Change, disruption, and reorganisation place significant demands on businesses.",
      "These challenges need to be navigated through clear insight and practical strategies that improve performance and resilience.",
      "Focus on strengthening how work is executed across the business. Identify inefficiencies, remove barriers, and improve how work gets done by streamlining, standardising, and optimising processes.",
      "To increase efficiency, reduce costs, improve quality, and enable scalable, consistent business operations while focusing on growth.",
    ],
  },
  {
    icon: BookOpenCheck,
    title: "Artificial Intelligence in Business",
    longBody: [
      "Artificial intelligence in business is revolutionising how a business operates by automating time-consuming tasks.",
      "AI and automation solutions replace manual workflows with intelligent, self-learning systems. Thus, AI-powered automation and scale reduce dependency on human intervention and minimise errors.",
      "With AI and automation solutions for small businesses, bottlenecks can be eliminated. Thus, they can increase profitability with the help of AI cost reduction through automation.",
    ],
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
                  "relative z-[1] flex h-full min-h-[22rem] flex-col rounded-3xl border border-ink/10 bg-white p-6 text-center transition hover:-translate-y-0.5";

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
                      {Array.isArray((v as any).longBody) ? (
                        ((v as any).longBody as any[]).map((t, idx) => (
                          <p key={idx} className="mt-3 text-sm leading-relaxed text-ink-soft">
                            {t}
                          </p>
                        ))
                      ) : (
                        <p className="mt-3 text-sm leading-relaxed text-ink-soft">{(v as any).body}</p>
                      )}
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
