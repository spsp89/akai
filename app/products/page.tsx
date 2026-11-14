import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ProductFinder } from "@/components/ProductFinder";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";
import { products } from "@/lib/data";

export const metadata: Metadata = { title: "Elevator solutions", description: "Explore AKAI passenger, hospital, goods, car, home and MRL elevator systems." };

export default function ProductsPage() {
  return <>
    <PageHero eyebrow="Elevator solutions for India" title={<>The right system.<br /><em>For the real project.</em></>} text="Passenger, hospital, goods, car, home and escalator systems for Indian buildings—supported by cabins, controls, doors and drive equipment." image="/media/products-overview.webp"><Link href="#finder" className="button button-orange">Find a solution <span>↓</span></Link></PageHero>
    <section className="section product-intro"><Reveal><p className="section-index">01 — PRODUCT RANGE</p><h2>Start with people,<br />capacity and purpose.</h2></Reveal><Reveal><p>The AKAI range is organized around five clearly different movement needs. Selection begins with building use, passenger or load capacity, entrance requirements and available shaft planning.</p><div className="product-principles"><span>Safety first</span><span>Application-led selection</span><span>Configurable finishes</span></div></Reveal></section>
    <section className="section section--ink" id="finder"><div className="section-title-row"><div><p className="section-index light">02 — SOLUTION FINDER</p><h2>Explore the range.</h2></div><p>Compare capacity, application and the equipment priorities of each AKAI system.</p></div><ProductFinder /></section>
    <section className="section comparison-section"><Reveal><p className="section-index">03 — AT A GLANCE</p><h2>Five systems.<br />One AKAI standard.</h2></Reveal><div className="comparison-table"><div className="comparison-row comparison-head"><span>System</span><span>Capacity / role</span><span>Best fit</span><span>Explore</span></div>{products.map(product => <div className="comparison-row" key={product.slug}><b>{product.name}</b><span>{product.segment}</span><span>{product.applications.join(" · ")}</span><Link href={`/products/${product.slug}`}>View ↗</Link></div>)}</div></section>
    <CTABand title="Need help choosing a system?" text="Tell us the building type, passenger count or load, travel requirements and location. We’ll help identify the right starting point." />
  </>;
}
