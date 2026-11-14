import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ProductFinder } from "@/components/ProductFinder";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";
import { products } from "@/lib/data";

export const metadata: Metadata = { title: "Elevator solutions", description: "Explore AKAI passenger, high-rise, home and freight elevator platforms." };

export default function ProductsPage() {
  return <>
    <PageHero eyebrow="Solutions" title={<>One platform.<br /><em>Many ways up.</em></>} text="A coordinated family of elevator concepts for everyday buildings, vertical cities, private homes and demanding operations." image="/images/product-cabin.png"><Link href="#finder" className="button button-orange">Find a solution <span>↓</span></Link></PageHero>
    <section className="section product-intro"><Reveal><p className="section-index">01 — PRODUCT LANDSCAPE</p><h2>Start with the building.<br />Then shape the system.</h2></Reveal><Reveal><p>AKAI product platforms are organized around distinct movement needs. Each concept combines spatial planning, cabin experience, interface thinking and lifecycle access.</p><div className="product-principles"><span>Architecture first</span><span>Passenger clarity</span><span>Lifecycle thinking</span></div></Reveal></section>
    <section className="section section--ink" id="finder"><div className="section-title-row"><div><p className="section-index light">02 — PRODUCT FINDER</p><h2>Explore the range.</h2></div><p>Compare the character and priorities of each AKAI platform.</p></div><ProductFinder /></section>
    <section className="section comparison-section"><Reveal><p className="section-index">03 — AT A GLANCE</p><h2>Four systems.<br />One AKAI logic.</h2></Reveal><div className="comparison-table"><div className="comparison-row comparison-head"><span>Platform</span><span>Primary role</span><span>Best fit</span><span>Explore</span></div>{products.map(product => <div className="comparison-row" key={product.slug}><b>{product.name}</b><span>{product.segment}</span><span>{product.applications.join(" · ")}</span><Link href={`/products/${product.slug}`}>View ↗</Link></div>)}</div></section>
    <CTABand title="Need help choosing a system?" text="Tell us about the building, its users and its next chapter. We’ll frame the right mobility conversation." />
  </>;
}
