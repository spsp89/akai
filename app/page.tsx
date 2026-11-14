import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";
import { ProductFinder } from "@/components/ProductFinder";
import { conceptProjects, industries } from "@/lib/data";

export default function Home() {
  return (
    <>
      <section className="home-hero" id="top">
        <img className="home-hero-image" src="/images/global-hero.png" alt="Panoramic elevator on a global city tower at blue hour" />
        <div className="home-hero-overlay" /><div className="hero-coordinates">25° 12′ N&nbsp;&nbsp;55° 16′ E <span>AKAI / GLOBAL</span></div>
        <div className="home-hero-copy"><p className="kicker kicker--light"><span />Vertical mobility for a changing world</p><h1><span>Cities rise.</span><em>We move them.</em></h1><p>Elevators, digital systems and lifecycle care—designed as one global movement platform.</p><div><Link href="/products" className="button button-orange">Explore solutions <span>↗</span></Link><Link href="/projects" className="text-link text-link--light">See our concept studies <span>↗</span></Link></div></div>
        <div className="hero-rail"><div><b>04</b><span>Product<br />platforms</span></div><div><b>06</b><span>Industry<br />approaches</span></div><div><b>∞</b><span>One connected<br />lifecycle</span></div></div>
        <a className="hero-scroll" href="#movement"><i>↓</i>Discover AKAI</a>
      </section>

      <div className="motion-strip"><div>PASSENGER / HIGH-RISE / HOME / FREIGHT / MODERNIZATION / SERVICE / DIGITAL /</div><div>PASSENGER / HIGH-RISE / HOME / FREIGHT / MODERNIZATION / SERVICE / DIGITAL /</div></div>

      <section className="movement-section section" id="movement">
        <Reveal className="movement-heading"><p className="section-index">01 — MOVEMENT</p><p className="kicker"><span />One company. Every vertical journey.</p><h2>We design the invisible system that makes a building <em>feel alive.</em></h2></Reveal>
        <Reveal className="movement-grid"><div className="movement-statement"><p>From private homes to vertical cities, AKAI brings product engineering, passenger experience, digital intelligence and long-term care into one continuous design process.</p><Link href="/company" className="circle-link">Discover<br />AKAI <span>↗</span></Link></div><div className="movement-diagram" aria-label="AKAI lifecycle diagram"><div><span>01</span><b>Understand</b><small>People + place</small></div><div><span>02</span><b>Engineer</b><small>System + space</small></div><div><span>03</span><b>Deliver</b><small>Build + integrate</small></div><div><span>04</span><b>Evolve</b><small>Care + modernize</small></div><i /></div></Reveal>
      </section>

      <section className="products-home section section--ink">
        <Reveal className="section-title-row"><div><p className="section-index light">02 — SOLUTIONS</p><p className="kicker kicker--light"><span />A platform for every building</p><h2>Choose how<br />you want to move.</h2></div><p>Four distinct mobility platforms. One design language focused on clarity, integration and the complete passenger journey.</p></Reveal>
        <ProductFinder />
      </section>

      <section className="technology-home">
        <div className="technology-image"><img src="/images/service-engineer.png" alt="Engineer inspecting an elevator control system" /><span>AKAI / SYSTEM VIEW</span></div>
        <Reveal className="technology-copy"><p className="section-index">03 — INTELLIGENCE</p><p className="kicker"><span />Connected from day one</p><h2>See the system.<br /><em>Shape the future.</em></h2><p>Digital visibility turns a lift from a hidden machine into an active part of the building. AKAI’s technology concept connects passenger flow, system insight and service planning.</p><div className="tech-signals"><div><b>LIVE</b><span>System awareness</span></div><div><b>FLOW</b><span>Journey orchestration</span></div><div><b>NEXT</b><span>Lifecycle planning</span></div></div><Link className="button button-dark" href="/technology">Explore technology <span>↗</span></Link></Reveal>
      </section>

      <section className="industries-home section">
        <Reveal className="section-title-row section-title-row--dark"><div><p className="section-index">04 — INDUSTRIES</p><p className="kicker"><span />One system, different worlds</p><h2>Designed around<br />how places live.</h2></div><p>Every building has its own rhythm. We begin with the people, patterns and pressure points that define it.</p></Reveal>
        <div className="industry-list">{industries.map(item => <Link href={`/industries/${item.slug}`} key={item.slug}><span>{item.number}</span><h3>{item.name}</h3><p>{item.line}</p><i>↗</i></Link>)}</div>
      </section>

      <section className="projects-home section section--paper-dark">
        <Reveal className="section-title-row"><div><p className="section-index">05 — CONCEPT STUDIES</p><p className="kicker"><span />Ideas in context</p><h2>Where movement<br />meets architecture.</h2></div><Link className="text-link" href="/projects">View all concept studies <span>↗</span></Link></Reveal>
        <div className="project-grid">{conceptProjects.slice(0, 3).map((project, index) => <Link href="/projects" className={`project-card project-card--${index + 1}`} key={project.name}><div><img src={project.image} alt="" /><span>0{index + 1}</span></div><p>{project.city}</p><h3>{project.name}</h3><small>{project.type}</small></Link>)}</div>
      </section>

      <section className="service-home section section--ink">
        <div className="service-orbit" aria-hidden="true"><i /><i /><div>∞<span>CARE<br />CYCLE</span></div></div>
        <Reveal><p className="section-index light">06 — LIFECYCLE</p><p className="kicker kicker--light"><span />Keep every journey moving</p><h2>Service isn’t aftercare.<br /><em>It is part of the design.</em></h2><p>Plan maintenance, insight and modernization as one evolving strategy—built around the real life of the building.</p><div className="service-actions"><Link href="/service" className="button button-orange">Explore service <span>↗</span></Link><Link href="/modernization" className="text-link text-link--light">Modernize a system ↗</Link></div></Reveal>
      </section>
      <CTABand />
    </>
  );
}
