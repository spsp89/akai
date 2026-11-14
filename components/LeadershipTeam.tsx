import Link from "next/link";
import { Reveal } from "./Reveal";
import { teamMembers } from "@/lib/data";

export function LeadershipTeam() {
  return <>
    <section className="leadership-section">
      <div className="leadership-photo"><img src="/team/ceo-placeholder.webp" alt="CEO portrait placeholder for Akai Elevator System" /><span>CEO / LEADERSHIP</span></div>
      <Reveal><p className="section-index">08 — LEADERSHIP</p><p className="kicker"><span />A clear point of accountability</p><h2>Built around trust,<br /><em>not just equipment.</em></h2><p>Akai’s leadership direction is simple: understand the building, recommend the right system and make every stage easier to follow—from the first brief to long-term support.</p><blockquote>“The right elevator begins with the right questions.”</blockquote><div className="leadership-name"><b>Chief Executive Officer</b><span>Official name and portrait ready to be replaced</span></div><Link className="text-link" href="/company">Meet Akai <span>↗</span></Link></Reveal>
    </section>
    <section className="team-section section">
      <Reveal className="section-title-row section-title-row--dark"><div><p className="section-index">09 — OUR TEAM</p><p className="kicker"><span />Different specialists. One project.</p><h2>The people behind<br />every smooth handover.</h2></div><p>These are replaceable placeholder profiles. Add the final names and photographs when your team assets are ready.</p></Reveal>
      <div className="team-grid">{teamMembers.map((member, index) => <article key={member.role}><div><img src={member.image} alt={`${member.role} team placeholder`} /><span>0{index + 1}</span></div><small>TEAM MEMBER NAME</small><h3>{member.role}</h3><p>{member.focus}</p></article>)}</div>
    </section>
  </>;
}
