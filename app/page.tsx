import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";
import { ProductFinder } from "@/components/ProductFinder";
import { equipmentPortfolio, industries } from "@/lib/data";

export default function Home() {
  return (
    <>
      <section className="akai-hero" id="top">
        <div className="akai-hero-copy">
          <p className="kicker kicker--light"><span />AKAI Elevator System</p>
          <h1>Elevating spaces.<br /><em>Enriching lives.</em></h1>
          <p>Modern elevator and escalator solutions for residential, commercial and industrial spaces—built around safety, precision and efficient movement.</p>
          <div className="akai-hero-actions">
            <Link href="/products" className="button button-orange">Explore solutions <span>↗</span></Link>
            <Link href="/projects" className="text-link text-link--light">View equipment portfolio <span>↗</span></Link>
          </div>
          <div className="akai-hero-proof">
            <div><b>06–20</b><span>Passenger<br />range</span></div>
            <div><b>10–26</b><span>Hospital<br />range</span></div>
            <div><b>500–5000</b><span>Goods lift<br />kg load</span></div>
          </div>
        </div>
        <div className="akai-hero-visual">
          <img src="/profile/passenger-auto-door.webp" alt="AKAI automatic passenger elevator with glass cabin" />
          <div className="akai-hero-label"><span>01 / PASSENGER</span><b>Simple. Smooth. Safe.</b></div>
        </div>
        <a className="hero-scroll" href="#portfolio"><i>↓</i>Discover AKAI</a>
      </section>

      <div className="motion-strip"><div>PASSENGER / HOSPITAL / GOODS / CAR / HOME / MRL / TRACTION / CONTROLS /</div><div>PASSENGER / HOSPITAL / GOODS / CAR / HOME / MRL / TRACTION / CONTROLS /</div></div>

      <section className="section akai-intro" id="portfolio">
        <Reveal><p className="section-index">01 — AKAI PORTFOLIO</p><p className="kicker"><span />Solutions that fit the journey</p><h2>One elevator partner.<br /><em>Four distinct needs.</em></h2></Reveal>
        <Reveal><p>AKAI’s range brings together passenger movement, clinical access, heavy-duty goods handling and compact residential mobility. Cabin design, entrances, controls and drive equipment can be configured around the building brief.</p><Link href="/company" className="text-link">About AKAI Elevator System <span>↗</span></Link></Reveal>
      </section>

      <section className="section section--ink">
        <div className="section-title-row"><div><p className="section-index light">02 — SOLUTIONS</p><p className="kicker kicker--light"><span />Choose by application</p><h2>Made for the way<br />your building moves.</h2></div><p>Explore the core range described in the AKAI product profile.</p></div>
        <ProductFinder />
      </section>

      <section className="section akai-equipment">
        <Reveal className="section-title-row section-title-row--dark"><div><p className="section-index">03 — EQUIPMENT</p><p className="kicker"><span />Inside the system</p><h2>Engineering you can<br />see and understand.</h2></div><Link className="text-link" href="/projects">View complete equipment portfolio <span>↗</span></Link></Reveal>
        <div className="equipment-preview">
          {equipmentPortfolio.slice(0, 3).map(item => <Link href="/projects" key={item.code}><div><img src={item.image} alt={item.name} /><span>{item.code}</span></div><small>{item.type}</small><h3>{item.name}</h3><p>{item.detail}</p></Link>)}
        </div>
      </section>

      <section className="akai-safety">
        <div className="akai-safety-image"><img src="/profile/pm-traction.webp" alt="Permanent-magnet traction machine and elevator shaft engineering" /></div>
        <Reveal>
          <p className="section-index light">04 — PERFORMANCE</p>
          <p className="kicker kicker--light"><span />PM traction technology</p>
          <h2>Compact power.<br /><em>Considered efficiency.</em></h2>
          <p>The profile describes a joint-lapped core in the permanent-magnet motor that allows denser winding, supporting improved motor efficiency and compactness with lower energy and resource use.</p>
          <div className="safety-feature-grid"><span>Automatic rescue device</span><span>94-beam light curtain</span><span>Emergency lighting</span><span>Phase-failure protection</span></div>
          <Link className="button button-light" href="/technology">Explore the technology <span>↗</span></Link>
        </Reveal>
      </section>

      <section className="section industries-home">
        <Reveal className="section-title-row section-title-row--dark"><div><p className="section-index">05 — APPLICATIONS</p><p className="kicker"><span />Designed for real spaces</p><h2>From private homes<br />to heavy operations.</h2></div><p>Four application areas, each with a different movement, access and durability brief.</p></Reveal>
        <div className="industry-list">{industries.map(item => <Link href={`/industries/${item.slug}`} key={item.slug}><span>{item.number}</span><h3>{item.name}</h3><p>{item.line}</p><i>↗</i></Link>)}</div>
      </section>

      <section className="section akai-brand-story section--paper-dark">
        <div className="akai-brand-card"><img src="/profile/brand-profile.webp" alt="AKAI Elevator System company profile with elevator and escalator installation" /></div>
        <Reveal><p className="section-index">06 — OUR PROMISE</p><h2>Your trust<br /><em>drives us higher.</em></h2><div className="brand-principles"><div><b>Safety</b><span>Engineered for maximum protection.</span></div><div><b>Precision</b><span>Technology focused on dependable performance.</span></div><div><b>Efficiency</b><span>Smart solutions for a sustainable future.</span></div><div><b>24/7 Support</b><span>Always there, whenever you need us.</span></div></div><Link className="button button-dark" href="/contact">Contact AKAI <span>↗</span></Link></Reveal>
      </section>
      <CTABand title="Let’s plan the right elevator for your building." text="Share the building type, load, passenger count and installation location. AKAI can help frame the next step." />
    </>
  );
}
