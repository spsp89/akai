import Link from "next/link";
import { Reveal } from "./Reveal";
import { teamMembers } from "@/lib/data";

export function LeadershipTeam() {
  return <>
    <section className="leadership-section">
      <div className="leadership-photo"><img src="/team/thomas-mathew.webp" alt="Thomas Mathew, Chief Executive Officer of Akai Elevator System" /><span>CEO / LEADERSHIP</span></div>
      <Reveal><p className="section-index">08 — LEADERSHIP</p><p className="kicker"><span />A clear point of accountability</p><h2>Built around trust,<br /><em>not just equipment.</em></h2><p>With 20 years of experience in marketing and sales, Thomas Mathew leads Akai with a customer-first approach: understand the building, recommend the right system and make every stage easier to follow.</p><blockquote>“The right elevator begins with the right questions.”</blockquote><div className="leadership-name"><b>Thomas Mathew</b><span>Chief Executive Officer · 20 years in Marketing &amp; Sales</span></div><Link className="text-link" href="/company">Meet Akai <span>↗</span></Link></Reveal>
    </section>
    <section className="team-section section">
      <Reveal className="section-title-row section-title-row--dark"><div><p className="section-index">09 — OUR TEAM</p><p className="kicker"><span />Different specialists. One project.</p><h2>The people behind<br />every smooth handover.</h2></div><p>Leadership, engineering and customer teams work together from the first project brief through manufacturing, installation and long-term support.</p></Reveal>
      <div className="team-grid">{teamMembers.map((member, index) => <article key={member.role}><div><img src={member.image} alt={member.name ? `${member.name}, ${member.role}` : `${member.role} team`} /><span>0{index + 1}</span></div><small>{member.name || "TEAM MEMBER NAME"}</small><h3>{member.role}</h3><p>{member.focus}</p></article>)}</div>
    </section>
  </>;
}
