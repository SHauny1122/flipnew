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
          {/* Left card */}
          <div className="lg:col-span-6 lg:order-2">
            <div className="overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-sm">
              <div className="img-overlay relative h-56">
                <div className="absolute inset-y-0 left-0 w-1/2">
                  <Image
                    src="/brand/1772550369227.jpg"
                    alt="NSBC photo"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="absolute inset-y-0 right-0 w-1/2">
                  <Image
                    src="/brand/ChatGPT Image Aug 28, 2026, 11_17_51 AM.png"
                    alt="NSBC graphic"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
              <div className="p-8 lg:p-10">
                

                <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink-soft">
                  <p>
                    The membership is highly affordable in relation to the value and benefits received throughout the year. At approximately R330/month, it provides cost-effective access to networking, seminars, events, exposure opportunities, business education, funding access, and marketing support that would otherwise cost significantly more when sourced individually.
                  </p>
                  <p>
                    The SME membership platform is one of the largest of its kind, giving members easy access to a wide range of essential, affordable, and comprehensive benefits. These benefits include high-quality resources, national initiatives, educational tools, and events throughout the year of Platinum Membership.
                  </p>
                  <p>
                    The NSBC Platinum Membership is a comprehensive solution for engaged SMEs in South Africa, especially businesses seeking funding access, networking, exposure opportunities, business growth support, and long-term credibility.
                  </p>

                  <p className="font-semibold text-ink">Platinum Members also have Full Access to ALL the FREE MEMBERSHIP BENEFITS</p>
                  <ul className="list-disc space-y-1 pl-5 marker:text-[#8E5A63]">
                    <li>Year-round elite business events</li>
                    <li>Designed to help you grow, connect and thrive</li>
                    <li>The weekly My Business Mag</li>
                    <li>Stay ahead of the game and get the competitive edge you need</li>
                    <li>Access to Finance Online</li>
                    <li>Gain access to South Africa’s leading funders and exclusive financing options</li>
                    <li>The Small Business Site — South Africa's premier destination for empowering, thought-provoking entrepreneurial insights and inspiration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right card */}
          <div className="lg:col-span-6 lg:order-1">
            <div className="rounded-3xl border border-ink/10 bg-white p-8 shadow-sm lg:p-10">
              <h4 className="font-display text-2xl text-ink lg:text-3xl">
                National Small Business Chamber (NSBC)
              </h4>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-ink-soft">
                <p>
                  The National Small Business Chamber (NSBC) is a legitimate South African non-profit organization supporting SMEs since 2007.
                </p>
                <p>It offers one of the most comprehensive SME ecosystems available.</p>
                <p>
                  This  creates an unmatched opportunity to access a powerful 365-day business growth and marketing experience as an entrepreneur.
                </p>
                <p>
                  FlipWorks became an official NSBC licensee for their membership and actively engages with SMEs to join the NSBC Platinum Membership, or alternatively the Free option with limited benefits. For FlipWorks, this is a continuous flagship project where we support and engage the SME community throughout South Africa and Africa.
                </p>
                <p>
                  FlipWorks advocate for Small and Medium Enterprises and in support of our beliefs we encourage SMEs to join an efficient and impactful membership solution designed to help businesses grow, improve, and connect with the right opportunities.
                </p>
                <p>
                  NSBC’s network of more than 234,000 members, combined with strategic partnerships including Google, Nedbank, and Mastercard, further demonstrates the legitimacy and practical value of the platform.
                </p>
                <p>
                  By joining the NSBC Platinum Membership, SMEs step into an effective business ecosystem focused on active benchmarking, improved business practices, innovation, and sustainable growth.
                </p>
                <p className="font-semibold text-ink">NSBC Platinum Membership  offering</p>
                <p className="italic">“Join conversations and initiatives for Small and Medium Entrepreneurs in South Africa and the rest of Africa!”</p>
                <p className="font-semibold text-ink">What can be better in my business?</p>
                <p className="font-semibold text-ink">Is your business:</p>
                <ul className="mt-1 list-disc space-y-1 pl-5 marker:text-[#8E5A63]">
                  <li>top or bottom?</li>
                  <li>average or excellent?</li>
                  <li>leading or lagging?</li>
                  <li>how do  you compare to the rest?</li>
                </ul>
                <p>here is your change to find best practices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
