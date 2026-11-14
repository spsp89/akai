"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandLogo } from "./BrandLogo";
import { navGroups } from "@/lib/data";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mega, setMega] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); setMega(null); }, [pathname]);

  return (
    <header className={`global-header ${scrolled ? "is-scrolled" : ""}`} onMouseLeave={() => setMega(null)}>
      <div className="utility-bar">
        <span>AKAI GLOBAL</span><span>Architects &amp; consultants</span><span>EN · Global</span>
      </div>
      <div className="nav-shell">
        <BrandLogo inverse={!scrolled} />
        <nav className="primary-nav" aria-label="Primary navigation">
          {navGroups.map(group => (
            <div key={group.label} className="nav-group" onMouseEnter={() => setMega(group.label)}>
              <Link className={pathname.startsWith(group.href) ? "active" : ""} href={group.href}>{group.label}</Link>
              <button aria-label={`Open ${group.label} menu`} aria-expanded={mega === group.label} onClick={() => setMega(group.label)}>⌄</button>
            </div>
          ))}
          <Link className={pathname.startsWith("/projects") ? "active" : ""} href="/projects">Projects</Link>
          <Link className={pathname.startsWith("/company") ? "active" : ""} href="/company">Company</Link>
        </nav>
        <div className="nav-actions">
          <Link href="/contact" className="nav-contact">Start a project <span>↗</span></Link>
          <button className="menu-button" aria-expanded={menuOpen} aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}><i /><i /></button>
        </div>
      </div>
      {navGroups.map(group => mega === group.label && (
        <div className="mega-menu" key={group.label} onMouseEnter={() => setMega(group.label)}>
          <div className="mega-intro"><span>Explore</span><h2>{group.label}</h2><Link href={group.href}>View all {group.label.toLowerCase()} ↗</Link></div>
          <div className="mega-links">
            {group.items.map((item, index) => <Link href={item.href} key={item.href}><b>0{index + 1}</b><strong>{item.label}</strong><span>{item.note}</span><i>↗</i></Link>)}
          </div>
          <div className="mega-feature"><p>AKAI GLOBAL</p><strong>Movement, engineered around life.</strong><span>Explore our global design perspective.</span></div>
        </div>
      ))}
      <div className={`mobile-drawer ${menuOpen ? "open" : ""}`}>
        {navGroups.map(group => <div key={group.label}><Link href={group.href}>{group.label}</Link><div>{group.items.slice(0, 4).map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div></div>)}
        <Link href="/projects">Projects</Link><Link href="/company">Company</Link><Link href="/contact" className="mobile-project">Start a project ↗</Link>
      </div>
    </header>
  );
}
