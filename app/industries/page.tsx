import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";
import { industries } from "@/lib/data";

export const metadata: Metadata = { title: "Industries", description: "Elevator solutions shaped around residential, commercial, hospitality, healthcare, infrastructure and retail environments." };

export default function IndustriesPage() {
  return <>
    <PageHero eyebrow="Industries" title={<>Every place<br /><em>moves differently.</em></>} text="We start with the rhythms, users and operational realities that make each building type distinct." image="/images/global-hero.png" />
    <section className="section industry-intro"><Reveal><p className="section-index">01 — CONTEXT FIRST</p><h2>The building is never<br />just a backdrop.</h2></Reveal><Reveal><p>It determines when people arrive, what they carry, how they find their way and what cannot be interrupted. AKAI industry approaches turn those realities into a clearer mobility brief.</p></Reveal></section>
    <section className="industry-catalog">{industries.map((industry, index) => <Link href={`/industries/${industry.slug}`} key={industry.slug}><div className="industry-catalog-number">{industry.number}</div><div><p>AKAI / INDUSTRY</p><h2>{industry.name}</h2><strong>{industry.line}</strong></div><p>{industry.description}</p><span>Explore <b>↗</b></span><i style={{ height: `${20 + index * 9}%` }} /></Link>)}</section>
    <section className="section industry-method section--paper-dark"><Reveal><p className="section-index">02 — OUR METHOD</p><h2>From operating pattern<br />to passenger experience.</h2></Reveal><div className="method-grid"><div><span>01</span><h3>Observe the rhythm</h3><p>Map arrivals, destinations, peaks, service traffic and special journeys.</p></div><div><span>02</span><h3>Define the movement model</h3><p>Translate use into zoning, capacity logic and an intuitive passenger path.</p></div><div><span>03</span><h3>Shape the touchpoints</h3><p>Align landing, cabin, signalization and digital experience with the place.</p></div></div></section>
    <CTABand title="Tell us how your building lives." />
  </>;
}
