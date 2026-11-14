import { ReactNode } from "react";

export function PageHero({ eyebrow, title, text, image, dark = false, children }: { eyebrow: string; title: ReactNode; text: string; image?: string; dark?: boolean; children?: ReactNode }) {
  return (
    <section id="top" className={`page-hero ${dark ? "page-hero--dark" : ""} ${image ? "page-hero--image" : ""}`}>
      {image && <img src={image} alt="" />}
      {image && <div className="page-hero-shade" />}
      <div className="page-hero-content"><p className="kicker"><span />{eyebrow}</p><h1>{title}</h1><p className="page-hero-text">{text}</p>{children}</div>
      <div className="page-hero-code">AK / {eyebrow.toUpperCase()}</div>
    </section>
  );
}
