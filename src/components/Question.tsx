import Image from "next/image";
import { Award } from "lucide-react";

export default function Question() {
  return (
    <section id="nsbc" className="relative bg-slate-blue-800 py-24 text-cream-50 lg:py-32">
      <div className="mx-auto max-w-[110rem] px-6 lg:px-10">
        <div className="mb-14 max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brick-400">
            Membership
          </span>
          <h2 className="mt-3 font-display text-4xl text-cream-50 lg:text-5xl">
            About NSBC Membership
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* NSBC Membership card */}
          <div className="lg:col-span-12">
            <div className="overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-sm">
              <div className="img-overlay relative h-56">
                <Image
                  src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=80"
                  alt="Entrepreneurs in conversation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 lg:p-10">
                <div className="inline-flex items-center gap-2 rounded-full bg-sage-100 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-sage-600">
                  <Award size={14} />
                  NSBC Membership
                </div>
                <h4 className="mt-4 font-display text-2xl text-ink lg:text-3xl">
                  About National Small Business Chamber&rsquo;s (NSBC) Platinum
                  Membership
                </h4>
                <p className="mt-4 text-sm italic leading-relaxed text-ink-soft">
                  &ldquo;Join conversations and initiatives for Small and
                  Medium Entrepreneurs in South Africa and the rest of
                  Africa!&rdquo;
                </p>

                <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink-soft">
                  <p>
                    FlipWorks advocate for Small and Medium Entreprises and in
                    support of our beliefs we would encourage all SME
                    businesses to join an efficient membership solution.
                  </p>
                  <p>
                    FlipWorks became an official NSBC licensee for their
                    membership and engages with SMEs to join the NSBC Platinum
                    Membership or the Free option with limited benefits. For
                    FlipWorks this is a continuous primary project where we
                    will support and engage the SME community.
                  </p>
                  <p>
                    The National Small Business Chamber (NSBC) is a legitimate
                    South African non-profit organization supporting SMEs since
                    2007. It is an unmatched opportunity to seize the most
                    powerful 365 &ndash; day marketing and growth experience as
                    an entrepreneur.
                  </p>
                  <p>
                    The opportunity that the Platinum membership creates for
                    building a customer base and boosting top line sales can be
                    viewed as the # 1 outcome for every business.
                  </p>
                  <p>
                    The membership is very affordable in relation to the
                    benefits received during a year of membership and if that
                    should alternatively have been sourced without such a
                    membership package. It provides easy, cost-effective access
                    for all SMEs to a mix of networking, visibility, education,
                    credibility, funding access, and events.
                  </p>
                </div>

                <div className="mt-6 grid gap-3 rounded-xl bg-cream-100 p-5 sm:grid-cols-3">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-ink-soft/70">
                      Annual
                    </div>
                    <div className="mt-1 font-display text-xl text-ink">
                      R3,950
                    </div>
                    <div className="text-xs text-ink-soft/70">excl. VAT</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-ink-soft/70">
                      Monthly
                    </div>
                    <div className="mt-1 font-display text-xl text-ink">
                      ~R330
                    </div>
                    <div className="text-xs text-ink-soft/70">billed yearly</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-ink-soft/70">
                      Network
                    </div>
                    <div className="mt-1 font-display text-xl text-ink">
                      234,000+
                    </div>
                    <div className="text-xs text-ink-soft/70">members</div>
                  </div>
                </div>

                <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink-soft">
                  <p>
                    At R330/month, it&rsquo;s affordable compared to individual
                    seminars, events, exhibition opportunity, or SEO services,
                    and NSBC&rsquo;s large network (over 234,000 members),
                    partnerships (e.g., Google, Nedbank, Mastercard), and
                    positive member feedback suggest legitimacy and real
                    utility.
                  </p>
                  <p>
                    The SMEs membership platform, largest of its kind, with
                    easy access to a wide range of essential, affordable and
                    comprehensive benefits. The benefits are loaded with access
                    to high quality scaled resources and events throughout the
                    year of platinum membership.
                  </p>
                  <p>
                    The NSBC Platinum Membership is a comprehensive package for
                    engaged SMEs in South Africa, especially those seeking
                    funding, networking, event exposure, and credibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
