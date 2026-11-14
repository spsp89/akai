import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";

export const metadata: Metadata = { title: "Company", description: "AKAI Elevator System provides elevator and escalator solutions for residential, commercial and industrial spaces." };

export default function CompanyPage() {
  return <>
    <PageHero eyebrow="Akai Elevator System / India" title={<>International thinking.<br /><em>Built around India.</em></>} text="Premium elevator solutions for apartments, villas, hospitals, offices, retail and industrial projects." image="/images/lobby-elevator.png" />
    <section className="section company-manifesto"><Reveal><p className="section-index">01 — ABOUT AKAI</p><h2>Simple to use.<br />Smooth in motion.<br /><em>Safe by design.</em></h2></Reveal><Reveal><p>Akai’s range covers passenger, hospital, goods, car, home and machine-room-less lift requirements for the Indian market, supported by traction equipment, cabin options, doors, signalization and control systems.</p><p>Every enquiry starts with the building: application, capacity, floors, shaft, entrance and finish requirements. The result is a clearer system brief for builders, architects, consultants and owners.</p></Reveal></section>
    <section className="company-values section--ink"><article><span>01</span><h2>Safety</h2><p>Elevator systems and entrance protection designed around dependable passenger and operational use.</p></article><article><span>02</span><h2>Precision</h2><p>Technology and equipment choices focused on smooth, consistent performance.</p></article><article><span>03</span><h2>Efficiency</h2><p>Compact PM traction technology and system planning intended to reduce energy and resource use.</p></article><article><span>04</span><h2>24/7 support</h2><p>A support promise centred on being available whenever customers need assistance.</p></article></section>
    <section className="section akai-company-scope">
      <Reveal><p className="section-index">02 — WHAT WE DELIVER</p><p className="kicker"><span />One coordinated system</p><h2>From drive machine<br />to the call button.</h2><p>AKAI’s documented equipment portfolio spans the complete vertical journey: machine, controller, ropes, safety governor, car frame, entrances, cabin finishes, landing indicators and user controls.</p><Link href="/projects" className="button button-dark">Explore equipment <span>↗</span></Link></Reveal>
      <div className="akai-company-system"><img src="/team/design-planning.webp" alt="Akai design professional planning an elevator project" /></div>
    </section>
    <section className="section join-section section--paper-dark"><Reveal><p className="section-index">03 — INDIAN APPLICATIONS</p><h2>Apartments.<br />Hospitals.<br /><em>Industry.</em></h2><p>Passenger comfort, clinical access, heavy-duty movement and compact home mobility each require a different system brief. Akai’s range is structured for those distinct project types.</p><Link href="/industries" className="button button-dark">View Indian project applications <span>↗</span></Link></Reveal><img src="/images/product-cabin.png" alt="Premium elevator cabin design for an Indian project" /></section>
    <CTABand title="Your trust drives us higher." text="Talk to AKAI about your building, passenger capacity, load requirement or equipment configuration." />
  </>;
}
