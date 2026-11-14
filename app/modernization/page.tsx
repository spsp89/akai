import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";

export const metadata: Metadata = { title: "Modernization", description: "Give existing elevator systems a smarter, more coherent next chapter." };

export default function ModernizationPage() {
  return <>
    <PageHero eyebrow="Modernization" title={<>Keep the building.<br /><em>Change the journey.</em></>} text="A structured path from an ageing system to a clearer, more current and more maintainable movement experience." image="/images/lobby-elevator.png"><Link href="/contact" className="button button-orange">Plan an assessment <span>↗</span></Link></PageHero>
    <section className="section modernization-intro"><Reveal><p className="section-index">01 — THE NEXT CHAPTER</p><h2>Renew what matters.<br />Respect what already works.</h2></Reveal><Reveal><p>Modernization is not one replacement decision. It is a coordinated plan across equipment condition, passenger experience, building disruption and the future service model.</p></Reveal></section>
    <section className="modernization-path section section--paper-dark"><p className="section-index">02 — A PHASED PATH</p><div className="modernization-track"><article><span>01</span><h3>Understand</h3><p>Assess the existing system, operating context and building priorities.</p></article><article><span>02</span><h3>Prioritize</h3><p>Separate urgent needs, experience gains and longer-term opportunities.</p></article><article><span>03</span><h3>Sequence</h3><p>Shape a practical delivery path around access and operational constraints.</p></article><article><span>04</span><h3>Renew</h3><p>Bring controls, components and passenger touchpoints into one new chapter.</p></article><i /></div></section>
    <section className="section renewal-scope"><Reveal><p className="section-index">03 — SCOPE</p><h2>From a single touchpoint<br />to a system-wide renewal.</h2></Reveal><div><article><b>Controls</b><span>Clarity behind the movement</span></article><article><b>Drives</b><span>A new foundation for the ride</span></article><article><b>Doors</b><span>Reliability at every threshold</span></article><article><b>Cabin</b><span>A complete passenger reset</span></article><article><b>Signals</b><span>Information made intuitive</span></article><article><b>Digital</b><span>Visibility for the next lifecycle</span></article></div></section>
    <CTABand title="Plan the next chapter of your system." />
  </>;
}
