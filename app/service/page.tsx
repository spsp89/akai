import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";

export const metadata: Metadata = { title: "Support", description: "Contact AKAI Elevator System for elevator support and assistance." };

export default function ServicePage() {
  return <>
    <PageHero dark eyebrow="Support" title={<>Always there,<br /><em>when you need us.</em></>} text="AKAI’s company profile presents a 24/7 support promise for elevator customers and building teams." image="/images/service-engineer.png"><Link href="/contact" className="button button-orange">Contact AKAI <span>↗</span></Link></PageHero>
    <section className="section service-intro"><Reveal><p className="section-index">01 — SUPPORT</p><h2>Start with the system<br />and the site details.</h2></Reveal><Reveal><p>For the fastest route to assistance, share the installation location, lift application, current condition and a clear description of the support required.</p></Reveal></section>
    <section className="service-wheel-section section--ink"><div className="service-wheel"><div><b>24/7</b><span>AKAI SUPPORT</span></div>{["Identify", "Report", "Review", "Respond"].map((item, index) => <i key={item} style={{ transform: `rotate(${index * 90}deg) translateY(-185px)` }}><span style={{ transform: `rotate(-${index * 90}deg)` }}>0{index + 1}<b>{item}</b></span></i>)}</div><Reveal><p className="section-index light">02 — CONTACT</p><h2>One direct line<br /><em>to AKAI.</em></h2><p>Email akaielevatorsystem@gmail.com or call +91 94476 29724 with the equipment and location details.</p></Reveal></section>
    <section className="section service-modes"><p className="section-index">03 — USEFUL DETAILS</p><div><article><span>01</span><h3>Location</h3><p>Project or installation address and the best on-site contact.</p></article><article><span>02</span><h3>Equipment</h3><p>Lift type, capacity, stops and any available equipment identification.</p></article><article><span>03</span><h3>Issue</h3><p>A concise description of the support needed and when it started.</p></article></div></section>
    <CTABand title="Contact AKAI support." />
  </>;
}
