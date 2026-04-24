import Image from "next/image";
import { ArrowRight, BookOpen, ShieldCheck, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream-50">
      {/* Background decorative blocks */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-slate-blue-100/60 blur-3xl" />
        <div className="absolute top-40 right-0 h-80 w-80 rounded-full bg-sage-200/50 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-[110rem] gap-12 px-6 pt-16 pb-24 lg:grid-cols-12 lg:gap-10 lg:px-10 lg:pt-24 lg:pb-32">
        {/* Left - copy */}
        <div className="lg:col-span-7">
          <div className="-mt-[75px] -translate-y-[75px] inline-flex items-center gap-2 rounded-full border border-brick-600/30 bg-brick-500 px-3 py-1 text-xs font-medium tracking-wide text-cream-50 shadow-sm backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-cream-50" />
            SME Consulting &amp; Support
          </div>

          <h1 className="mt-6 font-display text-5xl leading-[1.02] text-ink sm:text-6xl lg:text-7xl">
            <span style={{ color: "#5F8E9B" }}>(Re) Design</span>{" "}
            <span className="relative inline-block align-baseline">
              <span className="absolute -top-10 left-[calc(50%+38px)] -translate-x-[25%] -rotate-12 font-serif text-4xl italic sm:text-5xl" style={{ color: "#82a590" }}>
                Your
              </span>
              <span className="relative" style={{ color: "#5F8E9B" }}>
                a
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-1/2 top-[65%] h-[3px] w-[140%] -translate-x-1/2 -translate-y-1/2 -rotate-[18deg] rounded-full"
                  style={{ backgroundColor: "#82a590" }}
                />
              </span>
            </span>
            <br />
            Better Business.
          </h1>

          <p className="mt-6 max-w-xl border-l-2 border-brick-500 pl-4 text-lg leading-relaxed text-ink-soft">
            Better Businesses are the ones that approach problems in a
            different way, turning problems situations into opportunities.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-slate-blue-700 px-6 py-3 text-sm font-medium text-cream-50 shadow-sm transition hover:bg-slate-blue-800"
            >
              Book a Discussion
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-0.5"
              />
            </a>
          </div>

          <div className="mt-6 h-[2px] w-full rounded-full bg-brick-500 lg:-mr-4" />

          <p className="mt-8 max-w-xl border-l-2 border-brick-500 pl-4 text-lg leading-relaxed text-ink-soft">
            Join Conversations and initiatives for Small Business Entrepreneurs
            in Africa.
          </p>

          <div className="mt-4">
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/60 px-6 py-3 text-sm font-medium text-ink-soft transition hover:border-ink/30 hover:bg-white"
            >
              <BookOpen size={16} />
              Read More
            </a>
          </div>

          {/* Trust strip */}
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-ink/10 pt-6">
            <div>
              <div className="font-display text-2xl text-ink">SME</div>
              <div className="text-xs uppercase tracking-wider text-ink-soft/70">
                Focused
              </div>
            </div>
            <div className="h-8 w-0.5 rounded-full bg-brick-500" />
            <div>
              <div className="font-display text-2xl text-ink">Platinum</div>
              <div className="text-xs uppercase tracking-wider text-ink-soft/70">
                NSBC Licensee
              </div>
            </div>
            <div className="h-8 w-0.5 rounded-full bg-brick-500" />
            <div>
              <div className="font-display text-2xl text-ink">Practical</div>
              <div className="text-xs uppercase tracking-wider text-ink-soft/70">
                Results-oriented
              </div>
            </div>
          </div>
        </div>

        {/* Right - visual */}
        <div className="relative lg:col-span-5">
          <div className="relative">
            {/* Main image */}
            <div className="img-overlay relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-ink/10">
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
                alt="Consulting team in discussion"
                width={900}
                height={1100}
                priority
                className="h-[520px] w-full object-cover"
              />
            </div>

            {/* Offset sage block */}
            <div className="absolute -bottom-6 -left-6 hidden h-28 w-28 rounded-xl bg-sage-300/80 md:block" />

            {/* Floating trust card */}
            <div className="absolute -bottom-8 right-4 w-64 rounded-2xl border border-ink/10 bg-white/95 p-5 shadow-xl backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brick-500/10 text-brick-500">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <div className="font-display text-base text-ink">
                    Trusted Partner
                  </div>
                  <div className="text-xs text-ink-soft/80">
                    For SME growth
                  </div>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-ink-soft">
                Affordable, accessible, results-oriented consulting aligned
                with limited budgets and internal resources.
              </p>
            </div>

            {/* Floating top badge */}
            <div className="absolute -top-4 -left-4 hidden items-center gap-2 rounded-full border border-brick-600/30 bg-brick-500 px-4 py-2 shadow-md md:inline-flex">
              <Sparkles size={14} className="text-cream-50" />
              <span className="text-xs font-medium text-cream-50">
                Flipping the Works
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[110rem] px-6 lg:px-10">
        <div className="hairline" />
      </div>
    </section>
  );
}
