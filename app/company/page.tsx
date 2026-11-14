import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";

export const metadata: Metadata = { title: "Company", description: "Meet the design principles and global operating idea behind AKAI Elevators." };

export default function CompanyPage() {
  return <>
    <PageHero eyebrow="Company" title={<>Engineering movement.<br /><em>Designing belonging.</em></>} text="AKAI is imagined as a globally minded elevator company where technical decisions and human experience belong to the same discipline." image="/images/lobby-elevator.png" />
    <section className="section company-manifesto"><Reveal><p className="section-index">01 — OUR POINT OF VIEW</p><h2>A lift can be technically excellent and still feel disconnected from the building.</h2></Reveal><Reveal><p>AKAI exists to close that gap. The company model brings architects, engineers, digital thinkers and lifecycle teams into one movement conversation—so every layer supports the same experience.</p><p className="disclaimer">This site establishes the AKAI brand and operating vision. Company history, certifications, locations, leadership and verified corporate facts should be added when supplied.</p></Reveal></section>
    <section className="company-values section--ink"><article><span>01</span><h2>Human clarity</h2><p>People should understand the next step without needing to think about the system behind it.</p></article><article><span>02</span><h2>Engineering honesty</h2><p>Complexity belongs in the work—not in the experience of the passenger or building team.</p></article><article><span>03</span><h2>Long thinking</h2><p>Every product decision should consider service, renewal and the changing life of the building.</p></article></section>
    <section className="section global-model"><Reveal><p className="section-index">02 — GLOBAL MODEL</p><p className="kicker"><span />One standard, local intelligence</p><h2>Global in ambition.<br />Specific in delivery.</h2></Reveal><div className="world-grid"><div className="world-map" aria-label="Stylized global operating model"><i className="dot d1" /><i className="dot d2" /><i className="dot d3" /><i className="dot d4" /><i className="dot d5" /><span>APAC</span><span>MEA</span><span>EUROPE</span><span>AMERICAS</span></div><p>The AKAI operating idea pairs a consistent design and engineering standard with the local market knowledge each project requires. Regional structure and office information can be connected once verified.</p></div></section>
    <section className="section join-section section--paper-dark"><Reveal><p className="section-index">03 — BUILD AKAI</p><h2>Engineers. Designers.<br />Problem solvers.</h2><p>We are shaping a company for people who see vertical mobility as part of the city—not just a machine in a shaft.</p><Link href="/contact" className="button button-dark">Explore opportunities <span>↗</span></Link></Reveal><img src="/images/service-engineer.png" alt="Elevator engineer working with a control system" /></section>
    <CTABand title="Build the next chapter of AKAI." />
  </>;
}
