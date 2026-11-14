import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";

export const metadata: Metadata = { title: "Technology", description: "Explore AKAI PM traction machines, roping, drive units, automatic-door protection and lift safety features." };

export default function TechnologyPage() {
  return <>
    <PageHero dark eyebrow="Technology" title={<>Power, control<br /><em>and protection.</em></>} text="The technical layers behind an Akai elevator—from permanent-magnet traction and drive units to ropes, doors and safety functions." image="/images/service-engineer.png" />
    <section className="section technology-intro"><Reveal><p className="section-index">01 — PM TRACTION</p><h2>Compact engineering.<br />Efficient movement.</h2></Reveal><Reveal><p>The AKAI profile describes a joint-lapped core built into the permanent-magnet motor. Its flexible-joint construction allows coils to be wound more densely, supporting improved motor efficiency and compactness with lower energy and resource use.</p></Reveal></section>
    <section className="tech-visual-split section--ink"><div><img src="/images/global-hero.png" alt="Modern high-rise elevator architecture" /></div><Reveal><p className="section-index light">02 — ROPING</p><h2>Strength for<br /><em>longer travel.</em></h2><p>The profile describes H.E.T sfleX-rope as bundles of high-intensity steel wire strands covered with plastic. The construction is presented as increasing strength and helping reduce rope stretch when passengers enter the car.</p><Link className="button button-light" href="/projects">View equipment portfolio <span>↗</span></Link></Reveal></section>
    <section className="section digital-pillars"><Reveal><p className="section-index">03 — AUTOMATIC-DOOR SAFETY</p><h2>Protection across<br />the passenger threshold.</h2></Reveal><div><article><span>01</span><h3>Light curtain</h3><p>A multi-ray entrance-protection system operating with 94 crossed infrared beams.</p></article><article><span>02</span><h3>Lock protection</h3><p>Repeated door closing is listed for the event of lock failure.</p></article><article><span>03</span><h3>Rescue support</h3><p>Automatic rescue, emergency lighting and intercom functions are listed in the passenger range.</p></article><article><span>04</span><h3>Power protection</h3><p>Phase-failure and phase-reversal protection are included in the documented feature set.</p></article></div></section>
    <section className="technology-image-band"><img src="/images/lobby-elevator.png" alt="Premium elevator installation in a contemporary lobby" /><div><p className="kicker kicker--light"><span />One coordinated architecture</p><h2>Machine to landing.<br /><em>Every part connected.</em></h2><Link className="button button-orange" href="/contact">Discuss your Indian project <span>↗</span></Link></div></section>
    <CTABand title="Specify the system around the building." />
  </>;
}
