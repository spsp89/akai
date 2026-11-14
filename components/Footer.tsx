import Link from "next/link";
import { BrandLogo } from "./BrandLogo";
import { industries, products } from "@/lib/data";

export function Footer() {
  return (
    <footer className="global-footer">
      <div className="footer-lead"><BrandLogo inverse /><h2>Built for India.<br /><em>Engineered to rise.</em></h2><Link href="/contact" className="round-arrow" aria-label="Contact AKAI">↗</Link></div>
      <div className="footer-grid">
        <div><p>Solutions</p>{products.map(item => <Link key={item.slug} href={`/products/${item.slug}`}>{item.name}</Link>)}</div>
        <div><p>Industries</p>{industries.slice(0, 5).map(item => <Link key={item.slug} href={`/industries/${item.slug}`}>{item.name}</Link>)}</div>
        <div><p>Equipment</p><Link href="/projects">Traction machines</Link><Link href="/projects">Cabins + ceilings</Link><Link href="/projects">Indicators + controls</Link><Link href="/projects">System architecture</Link></div>
        <div><p>Contact</p><Link href="/company">About AKAI</Link><a href="mailto:akaielevatorsystem@gmail.com">akaielevatorsystem@gmail.com</a><a href="tel:+919447629724">+91 94476 29724</a><Link href="/contact">Request a quote</Link></div>
      </div>
      <div className="footer-bottom"><span>© 2026 AKAI ELEVATOR SYSTEM / INDIA</span><span>Simple · Smooth · Safe</span><Link href="#top">Back to top ↑</Link></div>
    </footer>
  );
}
