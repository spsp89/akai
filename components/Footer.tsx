import Link from "next/link";
import { BrandLogo } from "./BrandLogo";
import { industries, products } from "@/lib/data";

export function Footer() {
  return (
    <footer className="global-footer">
      <div className="footer-lead"><BrandLogo inverse /><h2>Movement that makes<br /><em>cities feel human.</em></h2><Link href="/contact" className="round-arrow" aria-label="Contact AKAI">↗</Link></div>
      <div className="footer-grid">
        <div><p>Solutions</p>{products.map(item => <Link key={item.slug} href={`/products/${item.slug}`}>{item.name}</Link>)}</div>
        <div><p>Industries</p>{industries.slice(0, 5).map(item => <Link key={item.slug} href={`/industries/${item.slug}`}>{item.name}</Link>)}</div>
        <div><p>Explore</p><Link href="/technology">Technology</Link><Link href="/modernization">Modernization</Link><Link href="/service">Service</Link><Link href="/projects">Projects</Link></div>
        <div><p>Company</p><Link href="/company">About AKAI</Link><Link href="/contact">Global contact</Link><Link href="/contact">Careers</Link><Link href="/contact">Suppliers</Link></div>
      </div>
      <div className="footer-bottom"><span>© 2026 AKAI Elevators · Concept platform</span><span>Privacy · Legal · Accessibility</span><Link href="#top">Back to top ↑</Link></div>
    </footer>
  );
}
