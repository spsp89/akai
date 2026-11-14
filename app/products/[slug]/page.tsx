import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";
import { products } from "@/lib/data";

export function generateStaticParams() { return products.map(product => ({ slug: product.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const product = products.find(item => item.slug === slug); return { title: product?.name ?? "Product", description: product?.description }; }

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const product = products.find(item => item.slug === slug); if (!product) notFound();
  return <>
    <PageHero eyebrow={`${product.code} / ${product.segment}`} title={<>{product.name}<br /><em>{product.tagline}</em></>} text={product.description} image={product.image}><Link href="/contact" className="button button-orange">Request a consultation <span>↗</span></Link></PageHero>
    <section className="section product-detail-intro"><Reveal><p className="section-index">01 — THE SYSTEM</p><h2>Specified around<br />the real requirement.</h2></Reveal><Reveal><p>{product.description} Final capacity, dimensions, drive, doors and finishes should be confirmed against the installation site and applicable project requirements.</p><Link href="/contact" className="text-link">Discuss your requirement ↗</Link></Reveal></section>
    <section className="product-detail-visual"><img src={product.image} alt={`AKAI ${product.name} elevator`} /><div className="product-overlay-code">{product.code}<span>AKAI ELEVATOR SYSTEM</span></div></section>
    <section className="section product-highlights"><p className="section-index">02 — PROFILE HIGHLIGHTS</p><div>{product.highlights.map((item, index) => <Reveal key={item}><span>0{index + 1}</span><h3>{item}</h3><p>A documented option or capability within the AKAI product profile. Availability and final configuration are project-specific.</p></Reveal>)}</div></section>
    <section className="section section--ink experience-section"><Reveal><p className="section-index light">03 — SYSTEM LAYERS</p><p className="kicker kicker--light"><span />From machine to interface</p><h2>Equipment designed<br />as one complete lift.</h2></Reveal><div className="experience-steps"><div><b>DRIVE</b><span>Traction equipment</span><p>PM, geared and gearless machine options shown in the range.</p></div><div><b>ACCESS</b><span>Doors + entrances</span><p>Automatic, telescopic and application-specific entrance options.</p></div><div><b>CABIN</b><span>Interior system</span><p>Wall, ceiling, lighting, flooring, mirror and handrail choices.</p></div><div><b>CONTROL</b><span>Indicators + buttons</span><p>LED and LCD position displays with multiple hall interfaces.</p></div></div></section>
    <section className="section applications-section"><p className="section-index">04 — APPLICATIONS</p><h2>Designed for.</h2><div>{product.applications.map(item => <Link href="/industries" key={item}>{item}<span>↗</span></Link>)}</div></section>
    <CTABand title={`Configure an AKAI ${product.name} system.`} />
  </>;
}
