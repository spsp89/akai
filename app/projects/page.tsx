import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";
import { equipmentPortfolio } from "@/lib/data";

export const metadata: Metadata = { title: "Equipment portfolio", description: "Explore AKAI traction machines, complete lift architecture, cabins, ceilings, indicators and control equipment." };

export default function EquipmentPage() {
  return <>
    <PageHero eyebrow="Equipment portfolio" title={<>The system behind<br /><em>every smooth journey.</em></>} text="Drive equipment, controls, cabins, entrances and interfaces—configured around the application and the realities of the project site." image="/media/equipment-portfolio-hero.webp" />
    <section className="section projects-note"><Reveal><p className="section-index">01 — COMPLETE SYSTEM</p><h2>More than a cabin.<br />More than a machine.</h2></Reveal><Reveal><p>AKAI’s profile presents the elevator as a coordinated architecture: controller, traction machine, governor, ropes, car frame, doors, guide rails, buffers, landing equipment, indicators and passenger controls.</p></Reveal></section>
    <section className="project-catalog equipment-catalog">{equipmentPortfolio.map((item, index) => <article key={item.name} className={index % 2 ? "reverse" : ""}><div className="project-catalog-image"><img src={item.image} alt={item.name} /><span>{item.code}</span></div><Reveal><p className="kicker"><span />{item.type}</p><h2>{item.name}</h2><strong>AKAI EQUIPMENT / {item.code}</strong><p>{item.detail}</p><div className="project-tags">{index === 0 && <><span>PM motor</span><span>Compact design</span><span>Lower energy use</span></>}{index === 1 && <><span>Geared</span><span>Gearless</span><span>Vertical traction</span></>}{index === 2 && <><span>Walls</span><span>Ceilings</span><span>Lighting</span><span>Handrails</span></>}{index === 3 && <><span>Segment LED</span><span>Dot LED</span><span>LCD</span><span>Hall buttons</span></>}{index === 4 && <><span>Controller</span><span>Governor</span><span>Doors</span><span>Guide rails</span></>}</div></Reveal></article>)}</section>
    <section className="section equipment-spec-band section--ink">
      <Reveal><p className="section-index light">02 — CABIN CONFIGURATION</p><h2>Material, light and interface.<br /><em>Specified together.</em></h2></Reveal>
      <div className="equipment-spec-grid"><div><span>01</span><b>Walls + doors</b><p>Pattern-printed steel, stainless steel and coloured bronze stainless-steel examples.</p></div><div><span>02</span><b>Ceilings + lighting</b><p>Painted steel, stainless steel, LED downlights and centralized indirect lighting.</p></div><div><span>03</span><b>Floors + handrails</b><p>Durable vinyl, marble, chequered plate and multiple handrail configurations.</p></div><div><span>04</span><b>Controls + displays</b><p>Car operating panels, hall buttons and segment LED, dot LED or LCD indication.</p></div></div>
    </section>
    <CTABand title="Match the equipment to the building." text="AKAI can help coordinate capacity, drive, entrances, cabin finishes and interface choices around your requirement." />
  </>;
}
