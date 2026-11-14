import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";

export const metadata: Metadata = { title: "Service", description: "Lifecycle care planned around the building, the system and the people who depend on it." };

export default function ServicePage() {
  return <>
    <PageHero dark eyebrow="Service" title={<>Every journey depends<br />on what happens <em>between.</em></>} text="A lifecycle service concept built around system understanding, planned action and a clear view of what comes next." image="/images/service-engineer.png"><Link href="/contact" className="button button-orange">Talk to service <span>↗</span></Link></PageHero>
    <section className="section service-intro"><Reveal><p className="section-index">01 — LIFECYCLE CARE</p><h2>Care for the system.<br />Confidence for the building.</h2></Reveal><Reveal><p>AKAI’s service model is designed as an ongoing conversation: understand the equipment, organize the work, communicate clearly and connect today’s maintenance to tomorrow’s plan.</p></Reveal></section>
    <section className="service-wheel-section section--ink"><div className="service-wheel"><div><b>∞</b><span>AKAI CARE</span></div>{["Inspect", "Plan", "Maintain", "Improve"].map((item, index) => <i key={item} style={{ transform: `rotate(${index * 90}deg) translateY(-185px)` }}><span style={{ transform: `rotate(-${index * 90}deg)` }}>0{index + 1}<b>{item}</b></span></i>)}</div><Reveal><p className="section-index light">02 — CARE CYCLE</p><h2>Not a visit.<br /><em>A continuous view.</em></h2><p>Every intervention should add to a clearer picture of the system and its future. That is the logic behind the AKAI Care concept.</p></Reveal></section>
    <section className="section service-modes"><p className="section-index">03 — SERVICE MODES</p><div><article><span>01</span><h3>Essential care</h3><p>A disciplined foundation for routine system attention and clear service records.</p></article><article><span>02</span><h3>Connected care</h3><p>A service conversation supported by system visibility and planned response.</p></article><article><span>03</span><h3>Portfolio care</h3><p>A coordinated view for owners and teams responsible for multiple buildings.</p></article></div></section>
    <CTABand title="Build a clearer service plan." />
  </>;
}
