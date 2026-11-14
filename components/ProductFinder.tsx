"use client";

import Link from "next/link";
import { useState } from "react";
import { products } from "@/lib/data";

export function ProductFinder() {
  const [active, setActive] = useState(0);
  const product = products[active];
  return (
    <div className="product-finder">
      <div className="finder-tabs" role="tablist" aria-label="AKAI product families">
        {products.map((item, index) => <button key={item.slug} role="tab" aria-selected={active === index} onClick={() => setActive(index)}><span>0{index + 1}</span>{item.name}<small>{item.segment}</small></button>)}
      </div>
      <div className="finder-stage" role="tabpanel">
        <div className="finder-image"><img src={product.image} alt={`AKAI ${product.name} elevator`} /><span className="finder-code">{product.code}</span></div>
        <div className="finder-copy"><p className="kicker"><span />{product.segment}</p><h2>{product.tagline}</h2><p>{product.description}</p><ul>{product.highlights.map(item => <li key={item}>{item}</li>)}</ul><Link className="button button-dark" href={`/products/${product.slug}`}>Explore {product.name} <span>↗</span></Link></div>
      </div>
    </div>
  );
}
