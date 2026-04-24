import Image from "next/image";
import { Store, TrendingUp, Users } from "lucide-react";

const projects = [
  {
    title: "Operations Improvement for Retail SME",
    body: "Streamlined processes and improved cost control for stronger margins.",
    icon: Store,
    tag: "Operations",
    img: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Growth Strategy for Service Business",
    body: "Defined market priorities and execution plans to support expansion.",
    icon: TrendingUp,
    tag: "Strategy",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Team Capability Program",
    body: "Delivered practical training and coaching for better team performance.",
    icon: Users,
    tag: "People",
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-slate-blue-50/60 py-24 lg:py-32">
      <div className="mx-auto max-w-[110rem] px-6 lg:px-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brick-500">
              Projects
            </span>
            <h3 className="mt-3 font-display text-4xl text-ink lg:text-5xl">
              Selected engagements.
            </h3>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-ink-soft">
            A snapshot of practical work we&rsquo;ve delivered with SME
            partners across retail, services and team capability.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const Icon = p.icon;
            return (
              <article
                key={i}
                className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="img-overlay relative h-52 overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-ink">
                    <Icon size={12} className="text-brick-500" />
                    {p.tag}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h4 className="font-display text-xl text-ink">{p.title}</h4>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                    {p.body}
                  </p>
                  <div className="mt-6 h-px w-10 bg-sage-400" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
