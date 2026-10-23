import Image from "next/image";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import Nav from "@/components/Nav";

const benefits = [
  { number: "01", title: "Connect", detail: "VIP networking, events and a community of entrepreneurs.", tone: "sea" },
  { number: "02", title: "Learn", detail: "Seminars, masterclasses, guides and business education.", tone: "cream" },
  { number: "03", title: "Be seen", detail: "A digital profile, business visibility and exhibition opportunities.", tone: "wine" },
  { number: "04", title: "Build trust", detail: "A Platinum digital badge and recognition opportunities.", tone: "mist" },
  { number: "05", title: "Find funding", detail: "Funding resources and matching opportunities.", tone: "navy" },
  { number: "06", title: "Save", detail: "Member offers, discounts and useful business deals.", tone: "blue" },
] as const;

function Label({ number, children }: { number: string; children: React.ReactNode }) {
  return <div className="section-label"><span>{number}</span><span>{children}</span></div>;
}

function MailLink({ children, subject, className = "" }: { children: React.ReactNode; subject: string; className?: string }) {
  return <a className={`mail-link ${className}`} href={`mailto:info@flipworks.co.za?subject=${encodeURIComponent(subject)}`}><span>{children}</span><ArrowUpRight aria-hidden="true" size={24} strokeWidth={1.7} /></a>;
}

export default function Home() {
  return <>
    <Nav />
    <main id="top">
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-copy">
          <div className="hero-overline"><span>FlipWorks × NSBC</span><span>South African small business</span></div>
          <h1 id="hero-heading" aria-label="Small business. Bigger reach."><span className="hero-line"><span>SMALL</span></span><span className="hero-line"><span>BUSINESS.</span></span><span className="hero-line"><span>BIGGER</span></span><span className="hero-line"><span>REACH.</span></span></h1>
          <div className="hero-bottom"><p>Practical support and your connection to NSBC Platinum Membership.</p><a className="hero-cta" href="#membership">Explore Platinum <ArrowUpRight aria-hidden="true" size={23} /></a></div>
        </div>
        <div className="hero-photo" aria-label="People working in a workshop"><Image src="/brand/1of4.jpg" alt="A team working together in a manufacturing workshop" fill priority sizes="(max-width: 760px) 100vw, 43vw" /><div className="hero-photo-tab"><span>MADE FOR</span><strong>DOERS.</strong><span>01 / 03</span></div></div>
        <a className="hero-down" href="#membership" aria-label="Scroll to membership"><ArrowDown aria-hidden="true" size={21} /></a>
      </section>

      <div className="brand-strip" aria-hidden="true"><div className="brand-strip-track"><span>MORE CONNECTIONS <i>✳</i> MORE OPPORTUNITY <i>✳</i> BETTER BUSINESS <i>✳</i></span><span>MORE CONNECTIONS <i>✳</i> MORE OPPORTUNITY <i>✳</i> BETTER BUSINESS <i>✳</i></span></div></div>

      <section id="membership" className="membership" aria-labelledby="membership-heading">
        <div className="membership-copy"><Label number="01 / 05">The membership</Label><div className="membership-content" data-reveal><p className="eyebrow">NSBC Platinum Membership</p><h2 id="membership-heading">ONE<br />MEMBERSHIP.<br /><span>MORE ROOM</span><br />TO GROW.</h2><p>Connect with people, tools and opportunities that help your business move forward.</p></div><div className="membership-foot">A free NSBC membership option with limited benefits is also available.</div></div>
        <div className="price-block"><div className="price-top"><span>PLATINUM / 12 MONTHS</span><span>FW — NSBC</span></div><div className="price-amount" aria-label="995 rand per year"><span>R</span>995</div><div className="price-bottom"><p>PER YEAR<br />EXCLUDING VAT</p><MailLink subject="FlipWorks — NSBC Platinum membership" className="price-link">Ask about membership</MailLink></div></div>
      </section>

      <section id="benefits" className="benefits" aria-labelledby="benefits-heading">
        <div className="benefits-lead"><div className="benefits-lead-copy"><Label number="02 / 05">What opens up</Label><h2 id="benefits-heading" data-reveal>BETTER<br />CONNECTED.</h2><p>Meet people. Learn faster. Be seen. Find more ways to grow.</p><span className="benefits-lead-index">NSBC PLATINUM / THE ADVANTAGES</span></div><div className="benefits-photo"><Image src="/brand/campaign-creators-gMsnXqILjp4-unsplash.jpg" alt="Entrepreneurs taking part in a business event" fill sizes="(max-width: 760px) 100vw, 48vw" /></div></div>
        <ol className="benefit-wall">{benefits.map((benefit) => <li className={`benefit-tile tone-${benefit.tone}`} key={benefit.number} data-reveal><span className="benefit-number">{benefit.number} / 06</span><h3>{benefit.title}</h3><p>{benefit.detail}</p><ArrowUpRight aria-hidden="true" size={24} strokeWidth={1.5} /></li>)}</ol>
        <div className="benefits-fineprint">Platinum also includes free membership benefits such as business events, My Business Mag, Access to Finance Online and The Small Business Site. Specific benefits and availability are provided by NSBC.</div>
      </section>

      <section id="flipworks" className="consulting" aria-labelledby="consulting-heading"><div className="consulting-top"><Label number="03 / 05">The FlipWorks way</Label><div className="consulting-title-row"><h2 id="consulting-heading" data-reveal>MAKE THE<br /><span>WORK WORK.</span></h2><p>FlipWorks helps SME owners and teams turn friction into practical change.</p></div><div className="consulting-scope"><span>Direction</span><span>People</span><span>Operations</span><span>Practical AI</span></div></div><div className="consulting-photo"><Image src="/brand/meetingroom.jpg" alt="Small business team working through ideas together" fill sizes="100vw" /><div className="consulting-caption"><span>SEE CLEARLY.</span><span>CHANGE PRACTICALLY.</span><span>KEEP IMPROVING.</span></div></div></section>

      <section id="nsbc" className="trust" aria-labelledby="trust-heading"><div className="trust-copy"><Label number="04 / 05">Official connection</Label><div data-reveal><h2 id="trust-heading">LOCAL HELP.<br /><span>NATIONAL REACH.</span></h2><p>FlipWorks is an official NSBC membership licensee. The National Small Business Chamber is a South African non-profit supporting SMEs since 2007.</p><a className="text-link" href="https://www.nsbc.africa/" target="_blank" rel="noopener noreferrer">About NSBC <ArrowUpRight aria-hidden="true" size={19} /></a></div></div><div className="trust-image"><Image src="/brand/1772550369227.jpg" alt="Official NSBC Africa Platinum membership artwork" width={1140} height={568} sizes="(max-width: 760px) 100vw, 49vw" loading="eager" /></div></section>

      <section id="contact" className="contact" aria-labelledby="contact-heading"><div className="contact-inner"><Label number="05 / 05">Your next move</Label><div className="contact-main"><h2 id="contact-heading" data-reveal>READY FOR<br /><span>MORE?</span></h2><div className="contact-side"><p>Tell us what you want to build. We&apos;ll start with a conversation.</p><MailLink subject="FlipWorks — let's talk">Start a conversation</MailLink></div></div><div className="contact-footer"><div><a href="mailto:info@flipworks.co.za">info@flipworks.co.za</a><a href="tel:+27827740092">+27 82 774 0092</a><span>Centurion, Gauteng</span></div><a href="#top">Back to top <ArrowRight aria-hidden="true" size={18} /></a></div></div></section>
    </main>
    <footer className="site-footer"><a href="#top" className="footer-brand"><Image src="/brand/logo.png" alt="FlipWorks logo" width={840} height={827} /><span>FlipWorks</span></a><span>Practical consulting. More business opportunity.</span><span>© {new Date().getFullYear()} FlipWorks</span></footer>
  </>;
}
