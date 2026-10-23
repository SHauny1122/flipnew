import Image from "next/image";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import Nav from "@/components/Nav";

const benefits = [
  ["01", "Connect", "VIP networking, business events and a community of entrepreneurs."],
  ["02", "Learn", "Seminars, masterclasses, guides and business education."],
  ["03", "Be seen", "A digital business profile, visibility and opportunities to exhibit."],
  ["04", "Build trust", "A Platinum digital badge and recognition opportunities."],
  ["05", "Find funding", "Funding resources and matching opportunities."],
  ["06", "Save", "Member offers, discounts and business deals."],
] as const;

function SectionMark({ number, label }: { number: string; label: string }) {
  return <div className="section-mark"><span>{number} / 05</span><span>{label}</span></div>;
}

function EmailLink({ label, subject, className = "" }: { label: string; subject: string; className?: string }) {
  return <a className={`action-link ${className}`} href={`mailto:info@flipworks.co.za?subject=${encodeURIComponent(subject)}`}><span>{label}</span><ArrowUpRight aria-hidden="true" size={24} strokeWidth={1.8} /></a>;
}

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <section className="hero" aria-labelledby="hero-heading">
          <div className="shell hero-inner">
            <div className="hero-topline"><span>FlipWorks / South Africa</span><span>Practical SME consulting + NSBC membership</span></div>
            <div className="hero-title-wrap">
              <p className="hero-index">FW—01<br />A better way forward.</p>
              <h1 id="hero-heading" className="hero-title" aria-label="Make business move.">
                <span className="type-mask"><span>MAKE</span></span>
                <span className="type-mask"><span>BUSINESS</span></span>
                <span className="type-mask type-accent"><span>MOVE<span className="hero-period">.</span></span></span>
              </h1>
            </div>
            <div className="hero-bottom">
              <div className="hero-bottom-rule" aria-hidden="true" />
              <p>Clearer decisions. Better ways of working. More opportunity for South African small businesses.</p>
              <a href="#membership" className="hero-scroll" aria-label="Explore membership"><span>Explore what&apos;s possible</span><ArrowDown aria-hidden="true" size={22} /></a>
            </div>
          </div>
          <div className="hero-edge" aria-hidden="true">MOVE WITH PURPOSE <span>✳</span> MOVE WITH PURPOSE <span>✳</span></div>
        </section>

        <section id="membership" className="membership" aria-labelledby="membership-heading">
          <div className="shell">
            <SectionMark number="01" label="Membership" />
            <div className="membership-head">
              <div className="membership-title-block" data-reveal>
                <p className="overline">NSBC Platinum Membership</p>
                <h2 id="membership-heading">MORE<br /><span>WITH</span><br />ONE.</h2>
              </div>
              <div className="membership-offer" data-reveal>
                <p className="offer-intro">More connections, resources and visibility for the business you are building.</p>
                <div className="offer-price"><span className="offer-currency">R</span><span>995</span></div>
                <div className="offer-price-meta"><span>Per year</span><span>Excluding VAT</span></div>
                <EmailLink label="Ask about membership" subject="FlipWorks — NSBC Platinum membership" className="action-link-light" />
              </div>
            </div>
            <div className="membership-bottom"><span>01—06 / The advantages</span><span>↓ Scroll to explore</span></div>
          </div>
        </section>

        <section id="benefits" className="benefits" aria-labelledby="benefits-heading">
          <div className="shell">
            <SectionMark number="02" label="What opens up" />
            <div className="benefits-intro" data-reveal><h2 id="benefits-heading">ONE MEMBERSHIP.<br /><span>MORE TO WORK WITH.</span></h2><p>Six useful ways to move forward.</p></div>
            <ol className="benefit-list">
              {benefits.map(([number, title, detail]) => <li className="benefit" key={number} data-reveal><span className="benefit-number">{number}</span><h3>{title}</h3><p>{detail}</p><ArrowUpRight className="benefit-arrow" aria-hidden="true" size={26} strokeWidth={1.4} /></li>)}
            </ol>
            <p className="benefit-note">Platinum also includes free membership benefits such as business events, My Business Mag, Access to Finance Online and The Small Business Site. Benefits and availability are provided by NSBC.</p>
          </div>
        </section>

        <div className="motion-band" aria-hidden="true"><div className="motion-track"><span>CONNECT / LEARN / BE SEEN / SAVE / </span><span>CONNECT / LEARN / BE SEEN / SAVE / </span></div></div>

        <section id="flipworks" className="consulting" aria-labelledby="consulting-heading">
          <div className="shell">
            <SectionMark number="03" label="The FlipWorks way" />
            <div className="consulting-grid">
              <h2 id="consulting-heading" data-reveal>BETTER<br />WORK IS<br /><span>BUILT.</span></h2>
              <div className="consulting-side" data-reveal><p>FlipWorks is practical consulting for small and medium businesses. We work with owners and teams to make the next improvement clear and achievable.</p><div className="consulting-scope"><span>Direction</span><span>People</span><span>Operations</span><span>Practical AI</span></div></div>
            </div>
            <div className="consulting-footer"><span>See the issue.</span><span>Make the change.</span><span>Keep improving.</span></div>
          </div>
        </section>

        <section id="nsbc" className="trust" aria-labelledby="trust-heading">
          <div className="shell">
            <SectionMark number="04" label="Official connection" />
            <div className="trust-grid">
              <div className="trust-copy" data-reveal><h2 id="trust-heading">LOCAL HELP.<br /><span>NATIONAL REACH.</span></h2><p>FlipWorks is an official NSBC membership licensee. The National Small Business Chamber is a South African non-profit supporting SMEs since 2007.</p><a href="https://www.nsbc.africa/" target="_blank" rel="noopener noreferrer" className="plain-link">Learn about NSBC <ArrowUpRight aria-hidden="true" size={18} /></a></div>
              <div className="trust-art" data-reveal><Image src="/brand/1772550369227.jpg" alt="Official NSBC Africa Platinum membership artwork" width={1140} height={568} sizes="(max-width: 760px) 100vw, 44vw" loading="eager" /></div>
            </div>
            <div className="trust-end"><span>There is also a free NSBC membership option with limited benefits.</span><a href="mailto:info@flipworks.co.za?subject=FlipWorks%20%E2%80%94%20membership%20options">Ask which option fits <ArrowRight aria-hidden="true" size={18} /></a></div>
          </div>
        </section>

        <section id="contact" className="contact" aria-labelledby="contact-heading">
          <div className="shell">
            <SectionMark number="05" label="The next move" />
            <div className="contact-grid"><h2 id="contact-heading" data-reveal>LET&apos;S<br />GET TO<br /><span>WORK.</span></h2><div className="contact-side" data-reveal><p>Tell us about your business. We&apos;ll start with a conversation and find a practical next step.</p><EmailLink label="Start a conversation" subject="FlipWorks — let's talk" /><div className="contact-details"><a href="mailto:info@flipworks.co.za">info@flipworks.co.za</a><a href="tel:+27827740092">+27 82 774 0092</a><span>Centurion, Gauteng</span></div></div></div>
            <a className="back-top" href="#top">Back to top <ArrowUpRight aria-hidden="true" size={18} /></a>
          </div>
        </section>
      </main>
      <footer className="footer"><div className="shell footer-inner"><a href="#top" className="footer-brand"><Image src="/brand/logo.png" alt="FlipWorks logo" width={840} height={827} /><span>FlipWorks</span></a><span>Practical consulting. More business opportunity.</span><span>© {new Date().getFullYear()} FlipWorks</span></div></footer>
    </>
  );
}
