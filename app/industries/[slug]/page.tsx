import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";
import { industries } from "@/lib/data";

export function generateStaticParams() { return industries.map(industry => ({ slug: industry.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const industry = industries.find(item => item.slug === slug); return { title: industry?.name ?? "Industry", description: industry?.description }; }

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const industry = industries.find(item => item.slug === slug); if (!industry) notFound();
  const heroImage = ["hospitality", "residential", "retail"].includes(industry.slug) ? "/images/lobby-elevator.png" : "/images/global-hero.png";
  return <>
    <PageHero eyebrow={`Industry / ${industry.number}`} title={<>{industry.name}<br /><em>{industry.line}</em></>} text={industry.description} image={heroImage}><Link href="/contact" className="button button-orange">Discuss your building <span>↗</span></Link></PageHero>
    <section className="section industry-detail-intro"><Reveal><p className="section-index">01 — THE MOVEMENT BRIEF</p><h2>Designed around the<br />real life of {industry.name.toLowerCase()}.</h2></Reveal><Reveal><p>{industry.description}</p><p>AKAI frames the final design around verified traffic, access, operational and architectural requirements—not assumptions.</p></Reveal></section>
    <section className="section section--ink priority-section"><Reveal><p className="section-index light">02 — PRIORITIES</p><h2>What we would explore.</h2></Reveal><div>{industry.priorities.map((priority, index) => <article key={priority}><span>0{index + 1}</span><h3>{priority}</h3><p>Studied across planning, passenger touchpoints, control strategy and the long-term operating model.</p></article>)}</div></section>
    <section className="industry-blueprint section"><div className="blueprint-visual"><div className="floor-lines">{[8,7,6,5,4,3,2,1].map(item => <span key={item}>0{item}</span>)}</div><div className="blueprint-car"><i /><i /></div><b>AKAI / {industry.number}</b></div><Reveal><p className="kicker"><span />System direction</p><h2>{industry.product}</h2><p>Suggested starting point for an early concept conversation. Final selection and configuration depend on the verified project brief.</p><Link href="/products" className="button button-dark">Explore product platforms <span>↗</span></Link></Reveal></section>
    <CTABand title={`Move ${industry.name.toLowerCase()} forward.`} />
  </>;
}
