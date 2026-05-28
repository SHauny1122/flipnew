import Image from "next/image";
import { Award } from "lucide-react";

export default function Question() {
  return (
    <section id="nsbc" className="relative py-24 text-cream-50 lg:py-32" style={{ backgroundColor: "#4F79A8" }}>
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
                    FlipWorks advocate for Small and Medium Enterprises and in
                    support of our beliefs we encourage SMEs to join an
                    efficient and impactful membership solution designed to help
                    businesses grow, improve, and connect with the right
                    opportunities.
                  </p>
                  <p>
                    FlipWorks became an official NSBC licensee for their
                    membership and actively engages with SMEs to join the NSBC
                    Platinum Membership, or alternatively the Free option with
                    limited benefits. For FlipWorks, this is a continuous
                    flagship project where we support and engage the SME
                    community throughout South Africa and Africa.
                  </p>
                  <p>
                    The National Small Business Chamber (NSBC) is a legitimate
                    South African non-profit organization supporting SMEs since
                    2007. It offers one of the most comprehensive SME
                    ecosystems available and creates an unmatched opportunity to
                    access a powerful 365-day business growth and marketing
                    experience as an entrepreneur.
                  </p>
                  <p>
                    By joining the NSBC Platinum Membership, SMEs step into an
                    effective business ecosystem focused on active benchmarking,
                    improved business practices, innovation, and sustainable
                    growth.
                  </p>
                  <p>
                    <strong>What can be better in my business?</strong>
                  </p>
                </div>

                <div className="mt-6 grid gap-3 rounded-xl bg-cream-100 p-5 sm:grid-cols-2">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-ink-soft/70">
                      Annual
                    </div>
                    <div className="mt-1 font-display text-xl text-ink">
                      R995.00
                    </div>
                    <div className="text-xs text-ink-soft/70">excl. VAT</div>
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
                  <p>The Platinum Membership helps businesses:</p>
                  <ul className="list-disc space-y-1 pl-5 marker:text-[#8E5A63]">
                    <li>Discover better business practices and innovations to implement</li>
                    <li>Access practical resources and growth opportunities</li>
                    <li>Attract more customers</li>
                    <li>Accelerate cash flow</li>
                    <li>Improve visibility and credibility</li>
                    <li>Connect with networking, events, education, and funding opportunities</li>
                    <li>Gain access to one of Africa&rsquo;s largest SME communities</li>
                  </ul>
                  <p>
                    The opportunity that the Platinum Membership creates for
                    building a customer base and boosting top-line sales can be
                    viewed as one of the most valuable outcomes for any growing
                    business.
                  </p>
                  <p>
                    The membership is highly affordable in relation to the value
                    and benefits received throughout the year. At approximately
                    R330/month, it provides cost-effective access to networking,
                    seminars, events, exposure opportunities, business
                    education, funding access, and marketing support that would
                    otherwise cost significantly more when sourced individually.
                  </p>
                  <p>
                    NSBC&rsquo;s network of more than 234,000 members, combined
                    with strategic partnerships including Google, Nedbank, and
                    Mastercard, further demonstrates the legitimacy and
                    practical value of the platform.
                  </p>
                  <p>
                    The SME membership platform is one of the largest of its
                    kind, giving members easy access to a wide range of
                    essential, affordable, and comprehensive benefits. These
                    benefits include high-quality resources, national
                    initiatives, educational tools, and events throughout the
                    year of Platinum Membership.
                  </p>
                  <p>
                    The NSBC Platinum Membership is a comprehensive solution for
                    engaged SMEs in South Africa, especially businesses seeking
                    funding access, networking, exposure opportunities, business
                    growth support, and long-term credibility.
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
