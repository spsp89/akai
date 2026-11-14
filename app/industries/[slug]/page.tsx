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
  return <>
    <PageHero eyebrow={`Industry / ${industry.number}`} title={<>{industry.name}<br /><em>{industry.line}</em></>} text={industry.description} image={industry.image}><Link href="/contact" className="button button-orange">Discuss your building <span>↗</span></Link></PageHero>
    <section className="section industry-detail-intro"><Reveal><p className="section-index">01 — THE REQUIREMENT</p><h2>Designed around<br />{industry.name.toLowerCase()} use.</h2></Reveal><Reveal><p>{industry.description}</p><p>Final capacity, dimensions, drive, doors and finishes should be confirmed against the site and applicable project requirements.</p></Reveal></section>
    <section className="section section--ink priority-section"><Reveal><p className="section-index light">02 — PRIORITIES</p><h2>Key selection points.</h2></Reveal><div>{industry.priorities.map((priority, index) => <article key={priority}><span>0{index + 1}</span><h3>{priority}</h3><p>Considered together with capacity, shaft planning, entrance configuration, control and cabin requirements.</p></article>)}</div></section>
    <section className="industry-blueprint section"><div className="blueprint-visual"><div className="floor-lines">{[8,7,6,5,4,3,2,1].map(item => <span key={item}>0{item}</span>)}</div><div className="blueprint-car"><i /><i /></div><b>AKAI / {industry.number}</b></div><Reveal><p className="kicker"><span />System direction</p><h2>{industry.product}</h2><p>Suggested starting point for the application. Final selection and configuration depend on the verified project brief and site conditions.</p><Link href="/products" className="button button-dark">Explore elevator systems <span>↗</span></Link></Reveal></section>
    <CTABand title={`Plan the right ${industry.name.toLowerCase()} elevator.`} />
  </>;
}
