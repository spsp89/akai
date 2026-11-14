import Link from "next/link";

export function CTABand({ title = "What will your building move?", text = "Bring us the brief, the constraints and the ambition. We’ll help shape the movement strategy." }: { title?: string; text?: string }) {
  return <section className="cta-band"><div><p className="kicker"><span />START A CONVERSATION</p><h2>{title}</h2></div><div><p>{text}</p><Link href="/contact" className="button button-light">Start a project <span>↗</span></Link></div></section>;
}
