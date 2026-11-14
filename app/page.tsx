import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";
import { ProductFinder } from "@/components/ProductFinder";
import { LeadFunnel } from "@/components/LeadFunnel";
import { LeadershipTeam } from "@/components/LeadershipTeam";
import { equipmentPortfolio, industries } from "@/lib/data";

export default function Home() {
  return (
    <>
      <section className="akai-hero" id="top">
        <div className="akai-hero-copy">
          <p className="kicker kicker--light"><span />Elevator solutions for India</p>
          <h1>Built for India.<br /><em>Engineered to rise.</em></h1>
          <p>Premium elevator systems for apartment towers, villas, hospitals, offices, retail and industry—planned around real Indian projects and built for confident everyday movement.</p>
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
          <img src="/images/global-hero.png" alt="Premium glass elevator integrated into a contemporary high-rise" />
          <div className="akai-hero-label"><span>INDIA / VERTICAL MOBILITY</span><b>Simple. Smooth. Safe.</b></div>
        </div>
        <a className="hero-scroll" href="#portfolio"><i>↓</i>Discover AKAI</a>
      </section>

      <div className="motion-strip"><div>PASSENGER / HOSPITAL / GOODS / CAR / HOME / ESCALATORS / MRL / TRACTION / CONTROLS /</div><div>PASSENGER / HOSPITAL / GOODS / CAR / HOME / ESCALATORS / MRL / TRACTION / CONTROLS /</div></div>

      <section className="section akai-intro" id="portfolio">
        <Reveal><p className="section-index">01 — AKAI FOR INDIA</p><p className="kicker"><span />A range for how India builds</p><h2>One elevator brand.<br /><em>Every kind of project.</em></h2></Reveal>
        <Reveal><p>From a private villa to a new apartment tower, from a hospital to a warehouse, Akai brings passenger, clinical and heavy-duty movement into one focused range. Capacity, shaft, doors, cabin finishes and controls can be planned around the project brief.</p><Link href="/company" className="text-link">About Akai Elevator System <span>↗</span></Link></Reveal>
      </section>

      <section className="section section--ink">
        <div className="section-title-row"><div><p className="section-index light">02 — SOLUTIONS</p><p className="kicker kicker--light"><span />Choose by application</p><h2>Made for the way<br />your building moves.</h2></div><p>Explore the core range described in the AKAI product profile.</p></div>
        <ProductFinder />
      </section>

      <section className="escalator-home">
        <div className="escalator-home-image"><img src="/images/escalator-hero.webp" alt="Modern glass escalators in a premium Indian commercial atrium" /><span>AKAI / ESCALATORS</span></div>
        <Reveal><p className="section-index">03 — ESCALATORS</p><p className="kicker"><span />For high-footfall spaces</p><h2>Keep busy spaces<br /><em>flowing naturally.</em></h2><p>Escalator and moving-walkway solutions for malls, retail, offices, transport-linked developments and other busy Indian projects—with layout, entrances, exits and finishes planned around the architecture.</p><div className="escalator-use"><span>Malls + retail</span><span>Commercial complexes</span><span>Public circulation</span></div><Link className="button button-dark" href="/products/escalators">Explore escalators <span>↗</span></Link></Reveal>
      </section>

      <section className="section akai-equipment">
        <Reveal className="section-title-row section-title-row--dark"><div><p className="section-index">04 — EQUIPMENT</p><p className="kicker"><span />Inside the system</p><h2>Engineering you can<br />see and understand.</h2></div><Link className="text-link" href="/projects">View complete equipment portfolio <span>↗</span></Link></Reveal>
        <div className="equipment-preview">
          {equipmentPortfolio.slice(0, 3).map(item => <Link href="/projects" key={item.code}><div><img src={item.image} alt={item.name} /><span>{item.code}</span></div><small>{item.type}</small><h3>{item.name}</h3><p>{item.detail}</p></Link>)}
        </div>
      </section>

      <section className="akai-safety">
        <div className="akai-safety-image"><img src="/media/home-performance.webp" alt="Compact permanent-magnet elevator traction system" /></div>
        <Reveal>
          <p className="section-index light">05 — PERFORMANCE</p>
          <p className="kicker kicker--light"><span />PM traction technology</p>
          <h2>Compact power.<br /><em>Considered efficiency.</em></h2>
          <p>The profile describes a joint-lapped core in the permanent-magnet motor that allows denser winding, supporting improved motor efficiency and compactness with lower energy and resource use.</p>
          <div className="safety-feature-grid"><span>Automatic rescue device</span><span>94-beam light curtain</span><span>Emergency lighting</span><span>Phase-failure protection</span></div>
          <Link className="button button-light" href="/technology">Explore the technology <span>↗</span></Link>
        </Reveal>
      </section>

      <section className="section industries-home">
        <Reveal className="section-title-row section-title-row--dark"><div><p className="section-index">06 — INDIAN PROJECTS</p><p className="kicker"><span />Designed for real sites</p><h2>From private homes<br />to heavy operations.</h2></div><p>Apartment towers, offices, hospitals and factories each need a different movement, access and durability brief.</p></Reveal>
        <div className="industry-list">{industries.map(item => <Link href={`/industries/${item.slug}`} key={item.slug}><span>{item.number}</span><h3>{item.name}</h3><p>{item.line}</p><i>↗</i></Link>)}</div>
      </section>

      <LeadFunnel />
      <LeadershipTeam />

      <section className="section akai-brand-story section--paper-dark">
        <div className="akai-brand-card"><img src="/images/lobby-elevator.png" alt="Premium Akai elevator in a contemporary Indian building lobby" /></div>
        <Reveal><p className="section-index">10 — START THE RIGHT BRIEF</p><h2>Four details.<br /><em>One clear first step.</em></h2><div className="brand-principles"><div><b>Building type</b><span>Apartment, villa, hospital, office, retail or industrial.</span></div><div><b>Capacity</b><span>Passenger count, stretcher access, vehicle or goods load.</span></div><div><b>Travel</b><span>Floors, stops, approximate height and preferred entrance.</span></div><div><b>Project city</b><span>Location, site stage and available shaft information.</span></div></div><Link className="button button-dark" href="/contact">Request an India project consultation <span>↗</span></Link></Reveal>
      </section>
      <CTABand title="Planning a lift project in India?" text="Share the building type, load or passenger count, floors and project city. Akai can help frame the right system." />
    </>
  );
}
