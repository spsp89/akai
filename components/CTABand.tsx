import Link from "next/link";

export function CTABand({ title = "Planning a lift project in India?", text = "Share the building type, capacity, floors and project city. We’ll help frame the right elevator system." }: { title?: string; text?: string }) {
  return <section className="cta-band"><div><p className="kicker"><span />INDIA PROJECT CONSULTATION</p><h2>{title}</h2></div><div><p>{text}</p><Link href="/contact" className="button button-light">Request a consultation <span>↗</span></Link></div></section>;
}
