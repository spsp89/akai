import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";

export const metadata: Metadata = { title: "Technology", description: "Explore AKAI's concept for connected, visible and adaptable elevator systems." };

export default function TechnologyPage() {
  return <>
    <PageHero dark eyebrow="Technology" title={<>The lift is moving.<br /><em>So is the data.</em></>} text="A connected mobility concept that helps people move clearly and helps building teams understand what is happening behind every journey." image="/images/service-engineer.png" />
    <section className="section technology-intro"><Reveal><p className="section-index">01 — CONNECTED MOVEMENT</p><h2>Turn the hidden system<br />into a visible asset.</h2></Reveal><Reveal><p>AKAI’s digital direction connects four views of the same system: the passenger journey, building flow, technical condition and future service plan.</p></Reveal></section>
    <section className="digital-console section--ink"><div className="console-head"><p>AKAI / SYSTEM PULSE</p><span>CONCEPT INTERFACE</span><i>● LIVE</i></div><div className="console-grid"><div className="console-shaft"><span>18</span><span>17</span><span>16</span><span>15</span><div className="console-car">AK</div></div><div className="console-data"><article><span>JOURNEY FLOW</span><strong>Balanced</strong><div className="data-bars"><i /><i /><i /><i /><i /></div></article><article><span>SYSTEM VIEW</span><strong>Connected</strong><div className="pulse-line" /></article><article><span>NEXT ACTION</span><strong>Planned</strong><p>Lifecycle events organized into one understandable view.</p></article></div></div></section>
    <section className="section digital-pillars"><Reveal><p className="section-index">02 — FOUR LAYERS</p><h2>One system.<br />Four clear perspectives.</h2></Reveal><div><article><span>01</span><h3>Passenger</h3><p>Interfaces and destination logic that make the next action feel obvious.</p></article><article><span>02</span><h3>Building</h3><p>Flow awareness that supports the changing patterns of a live environment.</p></article><article><span>03</span><h3>Technical</h3><p>System insight organized for the people responsible for performance.</p></article><article><span>04</span><h3>Lifecycle</h3><p>Service and modernization conversations connected to a long-term plan.</p></article></div></section>
    <section className="technology-image-band"><img src="/images/global-hero.png" alt="Glass elevator moving along a high-rise tower" /><div><p className="kicker kicker--light"><span />Ready for what comes next</p><h2>Open by design.<br /><em>Adaptable by nature.</em></h2><Link className="button button-orange" href="/contact">Discuss technology <span>↗</span></Link></div></section>
    <CTABand title="Make movement visible." />
  </>;
}
