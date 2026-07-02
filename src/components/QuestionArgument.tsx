import Image from "next/image";

export default function QuestionArgument() {
  return (
    <section
      className="relative py-24 text-cream-50 lg:py-32"
      style={{ backgroundColor: "#8E5A63" }}
    >
      <div className="mx-auto max-w-[110rem] px-6 lg:px-10">
        <div className="mb-10 max-w-4xl">
          <span className="text-2xl font-semibold uppercase tracking-[0.2em] text-ink">
            Question? / Argument
          </span>
          <h2 className="mt-3 font-display text-4xl text-ink lg:text-5xl">
            Question? / Argument
          </h2>
        </div>

        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_40rem] lg:items-start lg:gap-10">
          <div>
            <div className="rounded-2xl border border-ink/10 bg-white p-8 shadow-sm lg:max-w-[59rem] lg:p-12">
              <h3 className="max-w-4xl font-display text-4xl leading-tight text-ink lg:text-5xl">
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
                  As such, better businesses are the ones that approach problems in
                  a different, systematic way, turning problem situations into
                  opportunities.
                </li>
              </ul>
            </div>

            <div className="mt-8 rounded-2xl border border-brick-300 bg-white p-8 text-center shadow-sm lg:max-w-[59rem] lg:p-10">
              <h4 className="text-2xl font-semibold uppercase text-ink">
                the mandate for continuous re-invention
              </h4>
              <p className="mt-6 text-2xl leading-relaxed text-ink-soft">
                &ldquo;(Re-) Designing a business is generally considered not a
                usual thing. We are trying to see it differently. It must be
                built into our DNA, this idea that we haven&rsquo;t got it right
                yet &ndash; our business design.&rdquo;
              </p>
            </div>

            <div className="mt-12 rounded-2xl border-l-4 border-brick-500 bg-white p-6 shadow-sm lg:max-w-[59rem]">
              <p className="font-display text-2xl text-ink">
                WHAT can be BETTER in MY BUSINESS?
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                START and Join Conversations and initiatives for Small Business
                Entrepreneurs in South Africa and Africa. Become a Platinum Member
                of the most comprehensive platform of its kind available.
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-brick-500">
                monthly fee benefits
              </p>
            </div>
          </div>

          <div className="relative mt-8 h-[34rem] overflow-hidden rounded-2xl shadow-sm lg:-mt-36 lg:h-[46rem]">
            <Image
              src="/brand/question mark .png"
              alt="Question mark visual"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 32rem"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
