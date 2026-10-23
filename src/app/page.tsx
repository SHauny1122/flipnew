import Image from "next/image";
import { ArrowDown, ArrowRight, ArrowUpRight, Plus } from "lucide-react";
import Nav from "@/components/Nav";

const services = [
  ["01", "Business foundations", "Make the business easier to run, not just bigger.", "Clarify roles, responsibilities and decisions. Build a practical structure that supports the business you are becoming and reduces pressure on the owner."],
  ["02", "Business health & benchmarking", "See what is working and what needs attention.", "Compare a few useful measures across productivity, cost, service and performance. Turn those signals into better decisions and improvements you can actually implement."],
  ["03", "Direction for growth", "Put the right priorities ahead of the noise.", "Define a clear purpose, choose what matters now and connect plans to everyday action. Prepare for change without losing the ability to move."],
  ["04", "People & leadership", "Give good people room to do good work.", "Strengthen frontline leadership, team capability and the way people work together. Set clearer expectations and reduce decisions that always travel back to the owner."],
  ["05", "Simpler operations", "Remove friction from the day to day.", "Find repeated admin, slow handovers, rework and unclear processes. Make practical changes that save time, reduce mistakes and improve the customer experience."],
  ["06", "Practical AI", "Start with a real task, not a technology pitch.", "Explore manageable uses of AI and automation for routine administration, information and repeatable workflows, with people and business needs guiding the choice."],
] as const;

const benefits = [
  ["01", "Connect", "VIP networking, business events and a community of entrepreneurs."],
  ["02", "Learn", "Seminars, masterclasses, guides and business education."],
  ["03", "Be seen", "Business visibility, a digital profile and opportunities to exhibit."],
  ["04", "Build credibility", "A Platinum digital badge and recognition opportunities."],
  ["05", "Find funding", "Access to funding resources and matching opportunities."],
  ["06", "Save", "Member offers, discounts and valuable business deals."],
] as const;

const approach = [
  ["01", "Discuss", "Start with an open conversation about what works and what does not."],
  ["02", "Understand", "See where you are, where you want to be and what is in the way."],
  ["03", "Design", "Choose practical changes, with clear priorities and roles."],
  ["04", "Put it to work", "Implement with the people who will live with the change."],
  ["05", "Learn & repeat", "Review the result, then choose the next improvement."],
] as const;

function Eyebrow({ number, children }: { number: string; children: React.ReactNode }) {
  return <div className="eyebrow"><span className="eyebrow-number">{number}</span><span className="eyebrow-rule" /><span>{children}</span></div>;
}

function ContactLink({ membership = false }: { membership?: boolean }) {
  const subject = membership ? "FlipWorks — NSBC membership enquiry" : "FlipWorks — book a discussion";
  return (
    <a className={membership ? "text-link text-link-light" : "text-link"} href={`mailto:info@flipworks.co.za?subject=${encodeURIComponent(subject)}`}>
      {membership ? "Ask about membership" : "Book a discussion"}
      <ArrowUpRight aria-hidden="true" size={19} strokeWidth={1.8} />
    </a>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-grid page-shell">
            <div className="hero-copy">
              <p className="hero-kicker hero-enter">FlipWorks Consulting <span>•</span> For businesses ready to work better</p>
              <h1 id="hero-heading" className="hero-heading" aria-label="Business can work better.">
                <span className="hero-line hero-line-one">Business can</span>
                <span className="hero-line hero-line-two">work <em>better.</em></span>
              </h1>
              <div className="hero-bottom hero-enter">
                <p>Practical consulting for small and medium businesses. We help you find what matters, change what does not work, and build a stronger way forward.</p>
                <a className="round-arrow" href="#about" aria-label="Explore FlipWorks"><ArrowDown aria-hidden="true" size={23} strokeWidth={1.5} /></a>
              </div>
            </div>
            <div className="hero-visual hero-enter">
              <div className="hero-image-frame">
                <Image src="/brand/meetingroom.jpg" alt="People working together around a table" fill priority sizes="(max-width: 780px) 100vw, 38vw" className="hero-image" />
              </div>
              <div className="hero-image-caption"><span>Better starts together.</span><span>01 / 05</span></div>
            </div>
          </div>
          <div className="hero-foot page-shell" aria-hidden="true"><span>CLARITY</span><span>PARTNERSHIP</span><span>PROGRESS</span></div>
        </section>

        <section id="about" className="chapter chapter-question" aria-labelledby="question-heading">
          <div className="page-shell question-grid">
            <div className="question-side scroll-reveal"><Eyebrow number="01">The question</Eyebrow><p className="side-note">For every owner who knows their business has more in it.</p></div>
            <div className="question-main scroll-reveal">
              <h2 id="question-heading" className="display-heading">What could be <em>better</em> in your business?</h2>
              <div className="question-lower"><p className="large-copy">The best businesses are not finished. They keep asking better questions.</p><p className="body-copy">When roles blur, decisions slow down or familiar processes stop serving you, there is an opportunity to rethink the work. FlipWorks helps you see it clearly and act on it together.</p></div>
            </div>
          </div>
          <div className="question-bottom page-shell"><span>Not change for its own sake.</span><span>Change that makes the work better.</span></div>
        </section>

        <section id="services" className="chapter services-section" aria-labelledby="services-heading">
          <div className="page-shell">
            <Eyebrow number="02">What we do</Eyebrow>
            <div className="section-intro scroll-reveal"><h2 id="services-heading" className="display-heading">Real help for <em>real work.</em></h2><p>We work alongside SMEs to make improvement practical, affordable and possible with the time and resources you have.</p></div>
            <div className="service-list">
              {services.map(([number, title, intro, detail]) => (
                <details className="service-row" key={number}>
                  <summary><span className="service-number">{number}</span><span className="service-title">{title}</span><span className="service-intro">{intro}</span><span className="service-plus"><Plus aria-hidden="true" size={22} strokeWidth={1.5} /></span></summary>
                  <p className="service-detail">{detail}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <div className="moving-line" aria-hidden="true"><div className="moving-line-track">
          {Array.from({ length: 2 }).map((_, index) => <span key={index}>SEE CLEARLY <i>✳</i> DESIGN PRACTICALLY <i>✳</i> KEEP IMPROVING <i>✳</i></span>)}
        </div></div>

        <section id="approach" className="chapter approach-section" aria-labelledby="approach-heading">
          <div className="page-shell">
            <Eyebrow number="03">How we work</Eyebrow>
            <div className="approach-intro scroll-reveal"><h2 id="approach-heading" className="display-heading">Progress is a <em>practice.</em></h2><p>There is no oversized playbook. We start with a conversation, focus on the right problem and improve in useful cycles.</p></div>
            <ol className="approach-list">{approach.map(([number, title, detail]) => <li className="approach-step scroll-reveal" key={number}><span className="approach-number">{number}</span><h3>{title}</h3><p>{detail}</p></li>)}</ol>
            <p className="approach-footnote">Discuss → understand → design → implement → review → begin again, better.</p>
          </div>
        </section>

        <section id="membership" className="chapter membership-section" aria-labelledby="membership-heading">
          <div className="page-shell">
            <Eyebrow number="04">The NSBC connection</Eyebrow>
            <div className="membership-intro scroll-reveal">
              <div><h2 id="membership-heading" className="display-heading">A wider world of <em>opportunity.</em></h2><p className="membership-lead">FlipWorks is an official NSBC membership licensee. We help South African SMEs connect with a business community, practical resources and opportunities to grow.</p></div>
              <div className="membership-art"><Image src="/brand/1772550369227.jpg" alt="Official NSBC Africa Platinum membership artwork" width={1140} height={568} sizes="(max-width: 780px) 100vw, 34vw" className="nsbc-artwork" /></div>
            </div>
            <div className="membership-details">
              <div className="membership-price scroll-reveal">
                <span className="small-label">PLATINUM MEMBERSHIP</span>
                <div className="price-line"><span>R995</span><span>.00</span></div>
                <p>per year · excluding VAT</p>
                <div className="price-rule" />
                <p className="price-description">For SMEs who want more access, more connection and practical support through the year.</p>
                <ContactLink membership />
                <p className="price-note">A free NSBC membership option with limited benefits is also available. Ask us which route fits your business.</p>
              </div>
              <div className="membership-benefits scroll-reveal">
                <h3>What membership opens up</h3>
                <ul>{benefits.map(([number, title, detail]) => <li key={number}><span>{number}</span><div><strong>{title}</strong><p>{detail}</p></div><ArrowUpRight aria-hidden="true" size={19} strokeWidth={1.4} /></li>)}</ul>
                <p className="benefits-note">Platinum also includes the free membership benefits, such as business events, My Business Mag, Access to Finance Online and The Small Business Site. Specific benefits and availability are provided by NSBC.</p>
              </div>
            </div>
            <div className="membership-trust scroll-reveal"><span className="trust-mark">Since<br />2007</span><p>The National Small Business Chamber is a South African non-profit organisation supporting SMEs. FlipWorks engages businesses as an official NSBC membership licensee.</p><a href="https://www.nsbc.africa/" target="_blank" rel="noopener noreferrer">About NSBC <ArrowUpRight aria-hidden="true" size={18} /></a></div>
          </div>
        </section>

        <section id="contact" className="chapter contact-section" aria-labelledby="contact-heading">
          <div className="page-shell contact-grid">
            <div><Eyebrow number="05">The next move</Eyebrow><h2 id="contact-heading" className="display-heading scroll-reveal">Let’s make room for <em>better.</em></h2></div>
            <div className="contact-actions scroll-reveal"><p>Tell us what is happening in your business. We will start with a conversation and work out a practical next step together.</p><ContactLink /><div className="contact-meta"><a href="mailto:info@flipworks.co.za">info@flipworks.co.za</a><a href="tel:+27827740092">+27 82 774 0092</a><span>Centurion, Gauteng</span></div></div>
          </div>
          <a className="back-top page-shell" href="#top">Back to the top <ArrowRight aria-hidden="true" size={16} /></a>
        </section>
      </main>

      <footer className="site-footer"><div className="page-shell footer-grid"><a className="footer-brand" href="#top"><Image src="/brand/logo.png" alt="FlipWorks logo" width={840} height={827} className="footer-logo" /><span>FlipWorks</span></a><p>Practical consulting. Stronger businesses. Better work.</p><div><span>FlipWorks Consulting · South Africa</span><span>© {new Date().getFullYear()} FlipWorks</span></div></div></footer>
    </>
  );
}
