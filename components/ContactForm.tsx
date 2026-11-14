"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [prepared, setPrepared] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setPrepared(true); };
  return <form className="contact-form" onSubmit={submit}>
    <div className="form-row"><label><span>First name *</span><input required name="firstName" autoComplete="given-name" placeholder="Your first name" /></label><label><span>Last name *</span><input required name="lastName" autoComplete="family-name" placeholder="Your last name" /></label></div>
    <div className="form-row"><label><span>Work email *</span><input required type="email" name="email" autoComplete="email" placeholder="you@company.com" /></label><label><span>Company</span><input name="company" autoComplete="organization" placeholder="Company name" /></label></div>
    <div className="form-row"><label><span>Region *</span><select required name="region" defaultValue=""><option value="" disabled>Select a region</option><option>Asia Pacific</option><option>Middle East &amp; Africa</option><option>Europe</option><option>Americas</option></select></label><label><span>Project type *</span><select required name="project" defaultValue=""><option value="" disabled>Select project type</option><option>New elevator system</option><option>Modernization</option><option>Service &amp; maintenance</option><option>Architect / consultant support</option><option>Other</option></select></label></div>
    <label><span>Project brief</span><textarea name="brief" rows={5} placeholder="Tell us about the building, location, stage and key requirements" /></label>
    <div className="form-action"><button className="button button-dark" type="submit">Prepare enquiry <span>↗</span></button><p>This concept form does not transmit information yet.</p></div>
    {prepared && <div className="form-success" role="status"><b>Enquiry prepared.</b><span>The interface is ready to connect to AKAI’s future CRM or regional contact workflow.</span></div>}
  </form>;
}
