import Image from "next/image";
import Question from "./Question";
import {
  ArrowRight,
  Handshake,
  Target,
  HeartHandshake,
  ShieldCheck,
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
  const platinumBenefits = [
    {
      icon: Users,
      topic: "VIP BENEFITS",
      bg: "#f5efe0",
      detail:
        "This card includes three dedicated benefit popups that will be added next.",
      boxes: [
        {
          title: "VIP Lounge",
          detail:
            "Get FREE access to connect and collaborate with a powerful network of highly successful entrepreneurs, business leaders, and industry experts.",
        },
        {
          title: "Seminars & Masterclasses",
          detail:
            "Gain FREE access to top-of-the-line masterclasses and seminars led by the most respected business gurus. Learn cutting-edge strategies, proven techniques, and powerful insights designed to give you the competitive edge you need to scale your business and achieve unparalleled success.",
        },
        {
          title: "R5000 Voucher to Exhibit",
          detail:
            "Unlock an immediate R5000 discount voucher to exhibit at Africa's largest and most powerful business event - an unparalleled lead-generation opportunity. You gain exclusive access to a highly subsidised package, giving you the ultimate platform to showcase your business and attract high-value connections.",
        },
      ],
    },
    {
      icon: Handshake,
      topic: "RECEIVE RECOGNITION",
      subtopic: "Nomination for Prestigious Recognition",
      image: "/brand/newnew2.png",
      bg: "#f5e9d3",
      detail:
        "You'll receive a prestigious nomination, putting you in the running for the ultimate recognition every business owner and entrepreneur strives for. This is your springboard to accelerated business success and visibility. You and your business are automatically qualified for entry - the recognition you deserve is within your reach.",
    },
    {
      icon: Compass,
      topic: "BOOST BUSINESS VISIBILITY",
      subtopic: "Boost your Google ranking fast",
      image: "/brand/newnew3.png",
      bg: "#ece6da",
      detail:
        "You'll receive a highly visible digital profile on Search Engine Gateway (SEG), powered by Google, putting your business front and centre.",
    },
    {
      icon: Gauge,
      topic: "NETWORK & CONNECT",
      subtopic: "Supercharge Your Business Network",
      image: "/brand/newnew4.png",
      bg: "#ece6da",
      detail:
        "• Accelerate the growth of your business network with priority, ongoing VIP invites to this world-renowned B2B breakfast networking event.\n• Rub shoulders with industry leaders, gain insights from inspirational top speakers, and\n• unlock unmatched networking opportunities that can propel your business forward.",
    },
    {
      icon: Workflow,
      topic: "LEARN & GROW",
      subtopic: "Self-Education is Your Path to Fortune",
      image: "/brand/newnew5.png",
      bg: "#ece6da",
      detail:
        "Unleash your business potential with exclusive access to the comprehensive Build a Business Academy.\n• Gain instant access to hundreds of downloadable 'how to' guides to better your business.",
    },
    {
      icon: Layers,
      topic: "SAVE MONEY",
      subtopic: "Exclusive, High-value Deals and Massive Discounts",
      image: "/brand/specialoffernew.png",
      bg: "#5b8a8c",
      detail:
        "Unlock amazing exclusive offerings from top local and global brands throughout the year. These incredible offers are your key to saving big while enjoying premium products and services",
    },
    {
      icon: HeartHandshake,
      topic: "ENHANCE CREDIBILITY",
      subtopic: "Elevating your Credibility to New Heights",
      image: "/brand/newnew7.png",
      bg: "#ece6da",
      detail:
        "A digital Platinum Membership badge on your website, email signature and social media pages, signals huge credibility. It boosts online presence significantly, increases visibility, attracts customers, and builds trust - highlighting your business as part of an exclusive, reputable network and organisation.",
    },
    {
      icon: Target,
      topic: "ACCESS TO FUNDING",
      subtopic: "Gain Access to Over 300 Funders and Over 600 Funding Products",
      image: "/brand/financenew.png",
      bg: "#6b2c3a",
      detail:
        "As a Platinum Member get exclusive access to South Africa's most powerful Funding Matching Service.\n• Stop chasing funding. Become positioned for it.\n• Funding moves to the prepared and the connected.",
    },
  ];

  return (
    <>
      <section id="about" className="relative bg-cream-100 py-24 lg:py-32">
        <div className="mx-auto max-w-[110rem] px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-10">
            <div className="max-w-2xl lg:col-span-7">
              <span className="text-2xl font-semibold uppercase tracking-[0.2em] text-brick-500">
                About
              </span>
              <h2 className="mt-3 font-display text-4xl text-ink lg:text-5xl">
                FlipWorks Consulting
              </h2>
              <p className="mt-5 border-l-2 border-brick-500 pl-5 text-lg italic leading-relaxed text-ink-soft">
                &ldquo;The Consulting partner where we are working together,
                Flipping the Works and Designing a Better Business!&rdquo;
              </p>
            </div>

            <div className="relative hidden h-[220px] overflow-hidden rounded-2xl border border-ink/10 shadow-sm lg:col-span-5 lg:block">
              <Image
                src="/brand/austin-distel-mpN7xjKQ_Ns-unsplash.jpg"
                alt="Meeting room"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Consulting five points */}
          <div className="mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
            {[
              {
                icon: HeartHandshake,
                heading: "partnership",
                text: "the partner for small and medium businesses, igniting new possibilities to make your business better.",
              },
              {
                icon: Target,
                heading: "practical",
                text: "affordable, accessible and practical results-oriented consulting, aligned with limited budgets, time and internal resources.",
              },
              {
                icon: Handshake,
                heading: "tailored",
                text: "consulting is designed and tailored by which your business can thrive, grow and evolve in the face of uncertainty and constant challenges.",
              },
              {
                icon: Sparkles,
                heading: "innovative",
                text: "We fuse strategic design, human-centered thinking, and rigorous business strategy to create businesses that are more innovative, resilient, and future-ready.",
              },
              {
                icon: Lightbulb,
                heading: "adopt ai",
                text: "We teamed up with IT Works to explore opportunities in AI and engage with Small and Medium Enterprises (SMEs) where AI adoption can create improvement in the works of the businesses.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="group relative rounded-2xl border border-ink/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="relative flex items-center">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-blue-50 text-slate-blue-600">
                      <Icon size={20} />
                    </div>
                    <p className="absolute left-1/2 -translate-x-1/2 text-center text-sm font-semibold lowercase tracking-[0.12em] text-slate-blue-700">
                      {item.heading}
                    </p>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-ink-soft">
                    {item.text}
                  </p>
                  <div className="absolute inset-x-6 bottom-0 h-px origin-left scale-x-0 bg-brick-500 transition group-hover:scale-x-100" />
                </div>
              );
            })}
          </div>

          <div
            className="mt-6 h-[3px] w-full rounded-full"
            style={{ backgroundColor: "#8E5A63" }}
          />

          {/* NSBC image + long text card */}
          <div className="mt-12 grid gap-6 lg:grid-cols-12">
            <div className="relative overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm lg:col-span-3">
              <div className="relative h-full min-h-[220px]">
                <Image
                  src="/brand/1772550369227.jpg"
                  alt="NSBC Platinum Membership"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm lg:col-span-6 lg:p-8">
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

            <div className="lg:col-span-3">
              <div
                className="relative mx-auto w-full max-w-[420px] overflow-hidden rounded-2xl"
                style={{ aspectRatio: "1.85 / 1" }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#0b3d91_0%,#07245f_55%,#051a47_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#56bf86_0%,transparent_36%),radial-gradient(circle_at_top_left,#f5d34f_0%,transparent_28%)]" />

                <div className="relative flex h-full flex-col items-center justify-center px-8 py-6 text-center sm:px-10">
                  <p className="max-w-[26ch] text-xs font-semibold leading-relaxed text-[#F4D65B] sm:text-sm">
                    Stop operating alone. Start scaling with power
                  </p>
                  <p className="mt-3 text-4xl font-bold italic leading-none text-white sm:text-5xl">
                    R995.00
                  </p>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.03em] text-white sm:text-base">
                    PER YEAR | Excl. VAT
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Question />

      <section className="relative bg-slate-blue-50/60 pb-24 lg:pb-32">
        <div className="mx-auto max-w-[110rem] px-6 lg:px-10">
        {/* NSBC Platinum benefits section */}
        <div className="mt-8 rounded-3xl border border-ink/5 bg-cream-50/70 p-6 lg:p-10">
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

              <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-[repeat(2,minmax(0,24rem))] lg:justify-start">
                {platinumBenefits.slice(0, 4).map((item, i) => {
                  const Icon = item.icon;
                  const isFirstCard = i === 0;
                  const isSplitCard = !isFirstCard && Boolean(item.image && item.subtopic);
                  const isRecognitionCard = item.topic === "RECEIVE RECOGNITION";
                  const isCredibilityCard = item.topic === "ENHANCE CREDIBILITY";
                  const isAdjustedCard = isRecognitionCard || isCredibilityCard;
                  const isSaveMoneyCard = item.topic === "SAVE MONEY";
                  return (
                    <div
                      key={i}
                      className={
                        isFirstCard
                          ? "group relative min-h-[204px] rounded-xl border border-ink/10 bg-white shadow-sm"
                          : isAdjustedCard
                            ? "group relative min-h-[196px] rounded-xl border border-ink/10 bg-white shadow-sm"
                          : isSplitCard
                            ? "group relative min-h-[180px] rounded-xl border border-ink/10 bg-white shadow-sm"
                          : "group relative min-h-[170px] rounded-xl border border-ink/10 bg-white p-5 shadow-sm"
                      }
                    >
                      {isFirstCard ? (
                        <div className="grid min-h-[204px] grid-cols-[minmax(110px,40%)_1fr] items-stretch rounded-xl sm:grid-cols-[minmax(128px,44%)_1fr]">
                          <div className="relative flex h-full min-h-[204px] items-center justify-center self-stretch overflow-hidden rounded-l-xl bg-cream-100 p-4">
                            <Image
                              src="/brand/newnew1.png"
                              alt="VIP benefits"
                              width={400}
                              height={300}
                              sizes="(min-width: 1024px) 180px, 45vw"
                              className="h-auto max-h-full w-auto max-w-full object-contain"
                            />
                          </div>

                          <div className="grid grid-rows-3">
                            {item.boxes?.map((box, boxIndex) => (
                              <div
                                key={box.title}
                                className={`group/box relative flex items-center justify-center px-4 py-3 text-center ${boxIndex < 2 ? "border-b border-ink/15" : "pb-7"}`}
                              >
                                <p
                                  className="text-sm font-semibold leading-tight"
                                  style={{ color: "#4F79A8" }}
                                >
                                  {box.title}
                                </p>

                                <div className="pointer-events-none absolute right-2 top-2 z-30 w-56 origin-top-right rounded-lg border border-ink/10 bg-white p-3 text-sm leading-relaxed text-ink-soft opacity-0 shadow-lg transition duration-200 group-hover/box:translate-x-4 group-hover/box:-translate-y-4 group-hover/box:opacity-100">
                                  {box.detail}
                                </div>

                                {boxIndex === 2 && (
                                  <div className="absolute bottom-4 left-1/2 h-px w-10 -translate-x-1/2 bg-brick-500" />
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : isSplitCard ? (
                        <div className={`grid h-full ${isAdjustedCard ? "min-h-[196px]" : "min-h-[180px]"} grid-cols-[minmax(110px,40%)_1fr] items-stretch overflow-hidden rounded-xl sm:grid-cols-[minmax(128px,44%)_1fr]`}>
                          <div className="relative flex h-full items-center justify-center self-stretch overflow-hidden bg-cream-100 p-4">
                            <Image
                              src={item.image ?? "/brand/specialoffer.png"}
                              alt={item.topic}
                              width={400}
                              height={300}
                              sizes="(min-width: 1024px) 180px, 45vw"
                              className="h-auto max-h-full w-auto max-w-full object-contain"
                            />
                          </div>

                          <div className="grid grid-rows-2">
                            <div className="flex items-center justify-center border-b border-ink/15 px-4 py-4 text-center">
                              <p
                                className="text-base font-bold italic leading-tight"
                                style={{ color: "#4F79A8" }}
                              >
                                {item.topic}
                              </p>
                            </div>

                            <div className="relative flex items-center justify-center px-4 py-4 pb-7 text-center">
                              <p className="text-sm leading-snug text-slate-blue-700">
                                {item.subtopic}
                              </p>
                              <div className="absolute bottom-4 left-1/2 h-px w-10 -translate-x-1/2 bg-brick-500" />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="relative flex flex-col items-center text-center">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-blue-50 text-sage-500">
                            <Icon size={24} />
                          </div>
                          <p
                            className={`mt-3 font-display text-2xl ${isSaveMoneyCard ? "font-bold italic" : ""}`}
                            style={{ color: isSaveMoneyCard ? "#4F79A8" : "#1f2a36" }}
                          >
                            {item.topic}
                          </p>
                        </div>
                      )}

                      {!isFirstCard && (
                        <div className="pointer-events-none absolute right-3 top-3 z-30 w-60 origin-top-right rounded-lg border border-ink/10 bg-white p-3 text-sm leading-relaxed text-ink-soft opacity-0 shadow-lg transition duration-200 group-hover:translate-x-6 group-hover:-translate-y-6 group-hover:opacity-100">
                          {isSaveMoneyCard && (
                          <p className="mb-2 font-semibold" style={{ color: "#4F79A8" }}>
                            Exclusive High Value Deals and massive discounts
                          </p>
                          )}
                          {item.detail}
                        </div>
                      )}

                      {!isFirstCard && !isSplitCard && (
                        <div className="absolute bottom-4 left-1/2 h-px w-10 -translate-x-1/2 bg-brick-500" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative lg:h-[520px]">
                <div className="relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-ink/10 lg:absolute lg:right-0 lg:top-0 lg:h-[560px] lg:w-full">
                  <Image
                    src="/brand/imag5.png"
                    alt="NSBC membership workspace"
                    width={900}
                    height={1100}
                    className="h-[520px] w-full object-cover lg:h-[560px]"
                  />
                </div>

                <div className="mt-6 w-full rounded-2xl border border-ink/10 bg-white p-6 shadow-xl lg:absolute lg:-bottom-7 lg:right-4 lg:mt-0 lg:w-64 lg:min-h-[160px] lg:-translate-x-[30%] lg:translate-y-1/2">
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

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {platinumBenefits.slice(4).map((item) => {
              return (
                <div
                  key={item.topic}
                  className="group relative min-h-[180px] rounded-xl border border-ink/10 bg-white shadow-sm"
                >
                  <div
                    className="grid h-full min-h-[180px] grid-cols-[minmax(110px,40%)_1fr] items-stretch overflow-hidden rounded-xl sm:grid-cols-[minmax(128px,44%)_1fr]"
                  >
                    <div className="relative flex h-full items-center justify-center self-stretch overflow-hidden bg-cream-100 p-4">
                      <Image
                        src={item.image ?? "/brand/specialoffer.png"}
                        alt={item.topic}
                        width={400}
                        height={300}
                        sizes="(min-width: 1024px) 180px, 45vw"
                        className="h-auto max-h-full w-auto max-w-full object-contain"
                      />
                    </div>

                    <div className="grid grid-rows-2">
                      <div className="flex items-center justify-center border-b border-ink/15 px-4 py-4 text-center">
                        <p className="text-base font-bold italic leading-tight" style={{ color: "#4F79A8" }}>
                          {item.topic}
                        </p>
                      </div>

                      <div className="relative flex items-center justify-center px-4 py-4 pb-7 text-center">
                        <p className="text-sm leading-snug text-slate-blue-700">
                          {item.subtopic}
                        </p>
                        <div className="absolute bottom-4 left-1/2 h-px w-10 -translate-x-1/2 bg-brick-500" />
                      </div>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute right-3 top-3 z-30 w-60 origin-top-right rounded-lg border border-ink/10 bg-white p-3 text-sm leading-relaxed text-ink-soft opacity-0 shadow-lg transition duration-200 group-hover:translate-x-6 group-hover:-translate-y-6 group-hover:opacity-100">
                    {item.detail}
                  </div>
                </div>
              );
            })}
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
                  <p className="font-display text-3xl text-ink">All this for less than R995.00 a year.</p>
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

        {/* The Problem We Solve - mandate */}
        <div className="mt-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <div className="flex gap-5">
                <div className="w-1.5 shrink-0 self-stretch rounded-full bg-brick-500" />
                <h3 className="font-display text-4xl leading-tight text-ink lg:text-5xl">
                  The Problem
                  <br />
                  We Solve
                </h3>
              </div>
              <p className="mt-6 font-display text-2xl text-ink">
                FLIP the &ldquo;BUSINESS DESIGN!&rdquo;
              </p>
              <p className="mt-1 text-lg text-ink-soft">
                RE- Design your better business
              </p>
              <p className="mt-6 text-lg leading-relaxed text-ink-soft">
                <span className="font-semibold text-brick-500">FLIP</span>{" "}
                those factors that will affect your business overall
                performance and continued success.
              </p>
              <p className="mt-4 text-lg font-semibold leading-relaxed text-ink">
                Does your business design enable:
              </p>
              <ul className="mt-3 space-y-2 text-base leading-relaxed text-ink-soft">
                <li className="flex gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brick-500" />
                  Your business strategy implementation, and
                </li>
                <li className="flex gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brick-500" />
                  <span>
                    the rapid identification of those{" "}
                    <span className="font-semibold text-ink">
                      VITAL FACTORS
                    </span>{" "}
                    that will affect the overall
                  </span>
                </li>
              </ul>
              <ul className="mt-3 space-y-1 pl-8 text-base leading-relaxed text-ink-soft">
                <li>performance,</li>
                <li>competitiveness and</li>
                <li>future success</li>
              </ul>
              <p className="mt-3 text-base leading-relaxed text-ink-soft">
                of your business?
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-xl border border-ink/10 bg-white p-5 text-center shadow-sm">
                <p className="text-sm leading-relaxed text-ink">
                  Rapid Identification of problems with{" "}
                  <span className="font-semibold italic underline">
                    VITAL FACTORS
                  </span>{" "}
                  such as:
                </p>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Business Opportunities",
                    body: "Business and entrepreneurial opportunities.",
                  },
                  {
                    title: "Resource Utilisation",
                    body: "Effective resource utilisation:",
                    bullets: ["People", "Equipment", "Continuous improvement", "Cheaper, better, faster"],
                  },
                  {
                    title: "Efficient Ways of Working",
                    body: "Efficient ways of working:",
                    bullets: ["Processes", "Interactions", "Systems", "Structures"],
                  },
                  {
                    title: "People Engagement",
                    body: "People engagement:",
                    bullets: ["Alignment", "Engagement", "Culture", "HR services"],
                  },
                  {
                    title: "Focused People and Energy",
                    body: "Focused people and energy:",
                    bullets: ["Competence", "Managing", "First-line leaders", "Clear roles"],
                  },
                  {
                    title: "Meaningful Experiences",
                    body: "Creation of meaningful experiences for:",
                    bullets: ["Customers", "Employees", "Suppliers"],
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-ink/10 bg-white p-5 shadow-sm"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-brick-500 font-display text-base text-brick-500">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-ink">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {item.body}
                    </p>
                    {item.bullets && (
                      <ul className="mt-2 space-y-1 text-sm leading-relaxed text-ink-soft">
                        {item.bullets.map((b) => (
                          <li key={b} className="flex gap-2">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brick-500" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-xl border border-ink/10 bg-white p-5 text-center shadow-sm">
                <p className="text-sm leading-relaxed text-ink">
                  Continuous access to competitive benchmarking information and
                  opportunities to search for and implement best practices in
                  the current SME landscape.
                </p>
              </div>
            </div>
          </div>

          <div className="relative mt-10 h-56 w-full overflow-hidden rounded-2xl shadow-sm lg:h-72">
            <Image
              src="/brand/campaign-creators-gMsnXqILjp4-unsplash.jpg"
              alt="Team collaborating around a laptop"
              fill
              className="object-cover"
              sizes="100vw"
            />
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

        {/* Problems To Solve */}
        <div className="mt-24">
          <div className="flex gap-5">
            <div className="w-1.5 shrink-0 self-stretch rounded-full bg-brick-500" />
            <h3 className="font-display text-4xl leading-tight text-ink lg:text-5xl">
              Problems To Solve
            </h3>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Green ellipse */}
            <div className="flex justify-center lg:col-span-4">
              <div
                className="flex aspect-square w-full max-w-[24rem] items-center justify-center rounded-full p-10 text-center shadow-sm"
                style={{ backgroundColor: "#82a590" }}
              >
                <p className="text-base leading-relaxed text-white">
                  Many small and medium enterprises (SMEs) have promising
                  products, services, or technical expertise, yet they operate
                  with{" "}
                  <span className="font-semibold italic underline">
                    outdated, fragmented, or not fit for purpose business
                    designs
                  </span>
                  .
                </p>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center lg:col-span-3">
              <div className="mr-1.5 hidden gap-1.5 lg:flex">
                <div className="h-24 w-1.5 rounded-full bg-sage-300" />
                <div className="h-24 w-1.5 rounded-full bg-sage-300" />
              </div>
              <div
                className="flex min-h-[15rem] w-full max-w-[20rem] items-center justify-start"
                style={{
                  backgroundColor: "#dbe0c1",
                  clipPath:
                    "polygon(0% 22%, 62% 22%, 62% 0%, 100% 50%, 62% 100%, 62% 78%, 0% 78%)",
                }}
              >
                <p className="w-[62%] px-5 text-center text-sm leading-relaxed text-ink">
                  This issue manifests in the most common{" "}
                  <span className="font-semibold italic underline">
                    pain points
                  </span>{" "}
                  faced by SMEs.
                  <br />
                  (2025&ndash;2026 data)
                </p>
              </div>
            </div>

            {/* Bracket + bullet points */}
            <div className="flex items-stretch gap-4 lg:col-span-5">
              <svg
                viewBox="0 0 32 200"
                preserveAspectRatio="none"
                className="w-6 shrink-0 self-stretch text-brick-500"
                aria-hidden="true"
              >
                <path
                  d="M28 4 C14 4 18 14 18 30 L18 86 C18 96 8 100 4 100 C8 100 18 104 18 114 L18 170 C18 186 14 196 28 196"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>

              <ul className="space-y-3 py-2 text-base leading-relaxed text-ink-soft">
                {[
                  "High failure rates (up to 75% in the first few years)",
                  "Difficulty becoming \u201cfunding-ready\u201d despite available capital.",
                  "Chronic cash-flow and working-capital challenges.",
                  "Rising operational costs and economic volatility.",
                  "Weak market differentiation and limited innovation.",
                  "Skills gaps in strategic planning and management.",
                  "Difficulty to adapt quickly to regulatory changes, competition, digital shifts, and infrastructure pressures.",
                  "Owners and teams end up trapped in reactive, day-to-day survival mode, working in the business instead of on it.",
                ].map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brick-500" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="mt-10 rounded-2xl border border-ink/10 px-8 py-6 text-center shadow-sm"
            style={{ backgroundColor: "#EFC75E" }}
          >
            <p className="mx-auto max-w-5xl text-base leading-relaxed text-ink">
              In short, we solve the problem of{" "}
              <span className="font-semibold">
                &ldquo;good idea, badly designed business&rdquo;
              </span>{" "}
              &mdash; turning survivalist operations into deliberately built,
              competitive, and scalable enterprises that thrive in South Africa
              and Africa&rsquo;s challenging environment.
            </p>
          </div>

        </div>

      </div>
      </section>
    </>
  );
}
