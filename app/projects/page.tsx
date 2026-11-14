import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";
import { conceptProjects } from "@/lib/data";

export const metadata: Metadata = { title: "Concept studies", description: "Explore illustrative AKAI mobility concepts across global building types." };

export default function ProjectsPage() {
  return <>
    <PageHero eyebrow="Concept studies" title={<>Movement in<br /><em>its natural habitat.</em></>} text="Illustrative studies that show how AKAI’s design language can respond to different cities, building types and passenger journeys." image="/images/global-hero.png" />
    <section className="section projects-note"><Reveal><p className="section-index">IMPORTANT CONTEXT</p><h2>Ideas, not client claims.</h2></Reveal><Reveal><p>These are creative concept studies developed for this website. They demonstrate possible applications and visual directions, not completed commissions, customer relationships or verified product specifications.</p></Reveal></section>
    <section className="project-catalog">{conceptProjects.map((project, index) => <article key={project.name} className={index % 2 ? "reverse" : ""}><div className="project-catalog-image"><img src={project.image} alt="" /><span>0{index + 1}</span></div><Reveal><p className="kicker"><span />{project.city}</p><h2>{project.name}</h2><strong>{project.type}</strong><p>Exploring how vertical movement, material atmosphere and passenger clarity could become part of one architectural story.</p><div className="project-tags"><span>Mobility strategy</span><span>Cabin experience</span><span>Digital journey</span></div></Reveal></article>)}</section>
    <section className="section concept-process section--paper-dark"><p className="section-index">FROM BRIEF TO MOVEMENT</p><div><span>01<h3>Read the place</h3></span><i>→</i><span>02<h3>Map the journey</h3></span><i>→</i><span>03<h3>Shape the system</h3></span><i>→</i><span>04<h3>Design the experience</h3></span></div></section>
    <CTABand title="Create the next AKAI study with us." />
  </>;
}
