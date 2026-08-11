"use client";
import Image from "next/image";
import type * as React from "react";
import { useEffect, useState } from "react";
import {
  HandHeart,
  Eye,
  UsersRound,
  BookOpenCheck,
  Wrench,
  Gem,
  CheckCircle2,
  X,
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
    title: "Stronger Business Foundations",
    summary: [
      "As a business grows, the way things used to work can start creating frustration, delays and unnecessary pressure.",
      "Roles become unclear, communication breaks down and too much depends on the owner or a few key people.",
    ],
    details: [
      "FlipWorks helps you identify what is getting in the way of better performance and decide what needs attention first.",
      "Together, we focus on practical changes to how your people, roles and day-to-day work fit together.",
      "So the business can run more smoothly, your team knows what is expected, and improvement becomes easier to implement and sustain",
    ],
  },
  {
    icon: Eye,
    title: "Business Health Check",
    summary: [
      "It is difficult to improve a business if you do not know where you stand.",
      "A Continious Business Health Check helps you compare key parts of your business - such as productivity, costs, service, profitability, compliance or operational performance - against useful or relevant practices.",
    ],
    details: [
      "FlipWorks introduces and asist with the implementation of the",
      "NSBC Platinum Membership",
      "In your business",
      "With the membership you continiously identify a small number of relevant practices that actually matter, understand what it is telling you and identify where the implementation can have an impact.in your business",
      "The aim is not to drown you in reports; it is to turn simple information into better business decisions and practices.",
    ],
  },
  {
    icon: UsersRound,
    title: "Structure for Growth",
    summary: [
      "Many SMEs grow by adding people and responsibilities as needs arise.",
      "Over time, this can leave gaps, duplicated work, slow decisions and uncertainty about who owns what.",
    ],
    details: [
      "FlipWorks helps you create a practical structure for the business you are becoming, not only the business you were.",
      "We clarify roles, responsibilities, decision-making and how work moves between people.",
      "The result is a simpler way of working where the right people can make the right decisions and growth does not automatically mean more chaos.",
    ],
  },
  {
    icon: BookOpenCheck,
    title: "Clear Purpose, Clear Priorities",
    summary: [
      "SME owners usually do not struggle with a lack of ideas.",
      "The challenge is deciding what matters now, getting the team aligned and turning plans into consistent action.",
      "When priorities change every week, people become reactive and important goals get lost in day-to-day pressure.",
    ],
    details: [
      "FlipWorks helps you define a clear direction, translate it into practical priorities and connect those priorities to actions and measures.",
      "This gives the owner and team a shared view of where the business is going, what needs to happen next and how progress will be tracked.",
    ],
  },
  {
    icon: Wrench,
    title: "Ready for Change",
    summary: [
      "SMEs often have less room for disruption.",
      "The loss of a key person, a major customer, a supplier problem or a sudden market change can quickly affect the whole business.",
      "Being ready does not mean predicting every problem - it means building a business that can respond without falling apart.",
    ],
    details: [
      "FlipWorks helps you identify critical risks, reduce unnecessary dependency, improve continuity and strengthen how leaders respond when circumstances change.",
      "We focus on practical preparation, clearer priorities and better problem-solving so the business can adapt, recover and keep moving.",
    ],
  },
  {
    icon: Gem,
    title: "Everyday Leadership",
    summary: [
      "A strong business needs more than a good owner.",
      "It needs people at team level who can lead confidently, solve problems and keep work moving.",
      "Many supervisors are promoted because they are technically good at the job, but are never shown how to manage people.",
    ],
    details: [
      "FlipWorks develops practical management and leadership skills for the real situations frontline leaders face: setting expectations, handling difficult conversations, making decisions, building accountability and keeping teams focused on results.",
      "The goal is stronger day-to-day management and leadership with less pressure flowing back to the owner or senior manager.",
    ],
  },
  {
    icon: UsersRound,
    title: "Stronger People, Stronger Business",
    summary: [
      "For an SME, every person matters.",
      "A poor hire, an unclear role or a disengaged employee can have an immediate effect on customers, productivity and the owner's workload.",
      "At the same time, good people are one of the biggest advantages a smaller business can have.",
    ],
    details: [
      "FlipWorks helps you make better people decisions as the business grows - from the capabilities you need and the roles people play, to performance, development and retention.",
      "The focus is on building a team that understands the business, can contribute at a higher level and grows with it.",
    ],
  },
  {
    icon: BookOpenCheck,
    title: "Simplify the Way You Work",
    summary: [
      "Small inefficiencies add up quickly: repeated admin, unnecessary handovers, rework, waiting for approvals, inconsistent methods and tasks that only one person knows how to do.",
      "These problems cost time and money, even when they have become part of the normal routine.",
    ],
    details: [
      "FlipWorks works with your team to map how work is really being done, find the friction and simplify it.",
      "We help remove unnecessary steps, clarify responsibilities, standardise what should be consistent and build practical improvements into everyday work.",
      "The focus is on saving time, reducing mistakes and making the business easier to run and grow.",
    ],
  },
  {
    icon: Gem,
    title: "Practical AI for Business",
    summary: [
      "AI does not need to mean replacing your team or buying expensive technology. For an SME, the best starting point is often much simpler:",
      "Identify repetitive work that takes time, slows customers down",
      "or",
      "creates avoidable admin.",
    ],
    details: [
      "FlipWorks helps you find practical opportunities to use AI and automation in areas such as routine administration, content support, information handling and repeatable workflows.",
      "We focus on useful, manageable solutions that fit the way your business works - with the aim of freeing up time, reducing manual effort and helping your team focus on higher-value work.",
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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Disable body scroll and listen for Escape while modal is open
  useEffect(() => {
    if (activeIndex === null) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIndex]);
  return (
    <section className="relative bg-cream-100 py-24 lg:py-32">
      <div className="mx-auto max-w-[110rem] px-6 lg:px-10">
        {/* Our Service Offerings */}
        {showValues && (
          <div>
            <div className="flex items-end justify-between gap-6">
              <h3 className="font-display text-4xl text-ink lg:text-5xl">Our Service Offerings</h3>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {values.map((v, i) => {
                const wrapperClass = "relative isolate";
                const baseCardClass =
                  "relative z-[1] flex h-full min-h-[22rem] flex-col rounded-3xl border border-ink/10 bg-white p-6 text-center transition hover:-translate-y-0.5";

                // Unified: layered backing style for all cards
                const backing = (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -left-[9px] top-0 bottom-0 w-[35px] rounded-[24px_0_0_24px] blur-[1px]"
                    style={{
                      background:
                        "linear-gradient(180deg, #5258ee 0%, #2424d8 50%, #353be9 100%)",
                    }}
                  />
                );
                const cardStyle: React.CSSProperties = { boxShadow: "0 3px 8px rgba(0,0,0,0.12)" };

                return (
                  <div key={i} className={wrapperClass}>
                    {backing}
                    <div className={baseCardClass} style={cardStyle}>
                      <h4 className="font-display text-xl lg:text-2xl font-semibold text-ink">{v.title}</h4>
                      {Array.isArray((v as any).summary)
                        ? ((v as any).summary as any[]).map((t: any, idx: number) => (
                            <p key={idx} className="mt-3 text-sm leading-relaxed text-ink-soft">
                              {t}
                            </p>
                          ))
                        : Array.isArray((v as any).longBody)
                        ? ((v as any).longBody as any[]).map((t: any, idx: number) => (
                            <p key={idx} className="mt-3 text-sm leading-relaxed text-ink-soft">
                              {t}
                            </p>
                          ))
                        : (v as any).body ? (
                          <p className="mt-3 text-sm leading-relaxed text-ink-soft">{(v as any).body}</p>
                        ) : null}

                      <button
                        type="button"
                        onClick={() => setActiveIndex(i)}
                        className="mt-4 inline-flex items-center justify-center self-center rounded-md bg-amber-400 px-3 py-1.5 text-xs font-semibold uppercase text-ink shadow-sm transition hover:bg-amber-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50"
                      >
                        LEARN MORE
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeIndex !== null && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={() => setActiveIndex(null)}
            role="dialog"
            aria-modal="true"
          >
            <div className="absolute inset-0 bg-black/40" aria-hidden />
            <div
              className="relative z-[101] w-full max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -left-[9px] top-0 bottom-0 w-[35px] rounded-[24px_0_0_24px] blur-[1px]"
                style={{
                  background:
                    "linear-gradient(180deg, #5258ee 0%, #2424d8 50%, #353be9 100%)",
                }}
              />
              <div className="relative z-[1] max-h-[85vh] overflow-y-auto rounded-3xl border border-ink/10 bg-white p-6 shadow-xl">
                <button
                  type="button"
                  aria-label="Close"
                  onClick={() => setActiveIndex(null)}
                  className="absolute right-3 top-3 rounded-md p-1 text-ink-soft hover:bg-ink/5"
                >
                  <X size={18} />
                </button>
                <h4 className="font-display text-2xl font-semibold text-ink">
                  {(values[activeIndex] as any).title}
                </h4>
                {Array.isArray((values[activeIndex] as any).details) &&
                (values[activeIndex] as any).details.length > 0
                  ? (((values[activeIndex] as any).details as any[]) || []).map(
                      (t: any, idx: number) => (
                        <p key={idx} className="mt-3 text-sm leading-relaxed text-ink-soft">
                          {t}
                        </p>
                      )
                    )
                  : Array.isArray((values[activeIndex] as any).summary)
                  ? (((values[activeIndex] as any).summary as any[]) || []).map(
                      (t: any, idx: number) => (
                        <p key={idx} className="mt-3 text-sm leading-relaxed text-ink-soft">
                          {t}
                        </p>
                      )
                    )
                  : Array.isArray((values[activeIndex] as any).longBody)
                  ? (((values[activeIndex] as any).longBody as any[]) || []).map(
                      (t: any, idx: number) => (
                        <p key={idx} className="mt-3 text-sm leading-relaxed text-ink-soft">
                          {t}
                        </p>
                      )
                    )
                  : (values[activeIndex] as any).body ? (
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                      {(values[activeIndex] as any).body}
                    </p>
                  ) : null}
              </div>
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
