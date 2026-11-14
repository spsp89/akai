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
    <PageHero eyebrow={`${product.code} / ${product.segment}`} title={<>{product.name}<br /><em>{product.tagline}</em></>} text={product.description} image={product.image}><Link href="/contact" className="button button-orange">Discuss this platform <span>↗</span></Link></PageHero>
    <section className="section product-detail-intro"><Reveal><p className="section-index">01 — THE PLATFORM</p><h2>Engineered as a complete<br />building experience.</h2></Reveal><Reveal><p>{product.description} The final system, finishes and performance envelope are developed around the verified requirements of each project.</p><Link href="/contact" className="text-link">Request a design conversation ↗</Link></Reveal></section>
    <section className="product-detail-visual"><img src={product.image} alt={`${product.name} concept`} /><div className="product-overlay-code">{product.code}<span>AKAI PRODUCT PLATFORM</span></div></section>
    <section className="section product-highlights"><p className="section-index">02 — DESIGN PRIORITIES</p><div>{product.highlights.map((item, index) => <Reveal key={item}><span>0{index + 1}</span><h3>{item}</h3><p>Developed through architecture, engineering and lifecycle planning as one coordinated project conversation.</p></Reveal>)}</div></section>
    <section className="section section--ink experience-section"><Reveal><p className="section-index light">03 — EXPERIENCE</p><p className="kicker kicker--light"><span />From threshold to destination</p><h2>Every detail belongs<br />to the same journey.</h2></Reveal><div className="experience-steps"><div><b>ARRIVE</b><span>Landing identity</span><p>Legible, calm and integrated with the building.</p></div><div><b>ENTER</b><span>Cabin experience</span><p>Material, light and proportion shaped as architecture.</p></div><div><b>MOVE</b><span>Ride character</span><p>A journey tuned for confidence and clarity.</p></div><div><b>EVOLVE</b><span>Lifecycle access</span><p>A system designed to be understood and renewed.</p></div></div></section>
    <section className="section applications-section"><p className="section-index">04 — APPLICATIONS</p><h2>Designed to work across.</h2><div>{product.applications.map(item => <Link href="/industries" key={item}>{item}<span>↗</span></Link>)}</div></section>
    <CTABand title={`Shape ${product.name} around your building.`} />
  </>;
}
