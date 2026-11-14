import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";
import { industries } from "@/lib/data";

export const metadata: Metadata = { title: "Applications", description: "Elevator solutions from Akai Elevator System for residential, commercial, healthcare and industrial applications." };

export default function IndustriesPage() {
  return <>
    <PageHero eyebrow="Indian market applications" title={<>Every project<br /><em>asks something different.</em></>} text="Apartments, villas, hospitals, offices and industrial sites each require a different elevator system." image="/media/industries-overview.webp" />
    <section className="section industry-intro"><Reveal><p className="section-index">01 — APPLICATION FIRST</p><h2>Choose around use,<br />capacity and access.</h2></Reveal><Reveal><p>AKAI’s documented range covers residential, commercial, healthcare and industrial settings. Each application changes the capacity, entrances, cabin materials, controls and operating requirements.</p></Reveal></section>
    <section className="industry-catalog">{industries.map((industry, index) => <Link href={`/industries/${industry.slug}`} key={industry.slug}><div className="industry-catalog-number">{industry.number}</div><div><p>AKAI / INDUSTRY</p><h2>{industry.name}</h2><strong>{industry.line}</strong></div><p>{industry.description}</p><span>Explore <b>↗</b></span><i style={{ height: `${20 + index * 9}%` }} /></Link>)}</section>
    <section className="section industry-method section--paper-dark"><Reveal><p className="section-index">02 — SELECTION LOGIC</p><h2>From requirement<br />to system configuration.</h2></Reveal><div className="method-grid"><div><span>01</span><h3>Define the application</h3><p>Identify passengers, stretchers, wheelchairs, goods, vehicles or private-home use.</p></div><div><span>02</span><h3>Confirm capacity + travel</h3><p>Set the passenger count or load, floors, stops, travel height and door requirement.</p></div><div><span>03</span><h3>Configure the equipment</h3><p>Coordinate drive, entrance, cabin, control and indicator choices for the project.</p></div></div></section>
    <CTABand title="Tell us what the building needs to move." />
  </>;
}
