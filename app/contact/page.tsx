import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = { title: "Contact", description: "Start a project, service or modernization conversation with AKAI Elevators." };

export default function ContactPage() {
  return <>
    <section className="contact-hero" id="top"><div><p className="kicker kicker--light"><span />Global contact</p><h1>Let’s move<br /><em>something important.</em></h1><p>New systems, modernization, service or a complex building brief—start the conversation here.</p></div><div className="contact-hero-graphic"><div className="contact-shaft"><span>↑</span><i /><i /></div><p>AKAI / ENQUIRY ROUTER<br />GLOBAL PLATFORM</p></div></section>
    <section className="contact-main section"><Reveal><p className="section-index">START A PROJECT</p><h2>Tell us about<br />the building.</h2><p>We’ll use these details to frame the right regional, product and lifecycle conversation.</p></Reveal><ContactForm /></section>
    <section className="contact-options section--paper-dark"><div><p>Already operating an AKAI system?</p><h2>Service &amp; support</h2><span>Route a service conversation to the relevant market team.</span><button>Service enquiry ↗</button></div><div><p>Planning a complex building?</p><h2>Architects &amp; consultants</h2><span>Begin with traffic, planning and system integration.</span><button>Consultant support ↗</button></div><div><p>Interested in the company?</p><h2>Careers &amp; partnerships</h2><span>Connect with the future AKAI team.</span><button>Company enquiry ↗</button></div></section>
  </>;
}
