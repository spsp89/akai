"use client";

import { FormEvent, useMemo, useState } from "react";

type Lead = {
  id: string;
  createdAt: string;
  status: "New";
  projectType: string;
  floors: string;
  capacity: string;
  city: string;
  timeline: string;
  name: string;
  phone: string;
  email: string;
};

const projectTypes = ["Apartment", "Villa / Home", "Hospital", "Office / Retail", "Factory / Warehouse", "Escalator project"];

export function LeadFunnel() {
  const [step, setStep] = useState(0);
  const [complete, setComplete] = useState(false);
  const [data, setData] = useState({ projectType: "", floors: "", capacity: "", city: "", timeline: "", name: "", phone: "", email: "" });

  const update = (key: keyof typeof data, value: string) => setData(current => ({ ...current, [key]: value }));
  const emailHref = useMemo(() => {
    const subject = encodeURIComponent(`Akai project brief — ${data.projectType || "New enquiry"} — ${data.city || "India"}`);
    const body = encodeURIComponent([
      `Project type: ${data.projectType}`,
      `Floors / stops: ${data.floors}`,
      `Capacity / requirement: ${data.capacity}`,
      `Project city: ${data.city}`,
      `Timeline: ${data.timeline}`,
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email}`
    ].join("\n"));
    return `mailto:akaielevatorsystem@gmail.com?subject=${subject}&body=${body}`;
  }, [data]);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const lead: Lead = { id: crypto.randomUUID(), createdAt: new Date().toISOString(), status: "New", ...data };
    const existing = JSON.parse(localStorage.getItem("akai_leads_v1") || "[]") as Lead[];
    localStorage.setItem("akai_leads_v1", JSON.stringify([lead, ...existing]));
    setComplete(true);
  };

  return (
    <section className="lead-funnel" id="project-planner">
      <div className="funnel-intro">
        <p className="section-index light">07 — PROJECT PLANNER</p>
        <p className="kicker kicker--light"><span />Get to the right system faster</p>
        <h2>Tell us what<br /><em>you need to move.</em></h2>
        <p>A short brief helps Akai understand the application before the first consultation.</p>
        <div className="funnel-journey">
          <span className={step >= 0 ? "active" : ""}>01<small>Project</small></span>
          <i />
          <span className={step >= 1 ? "active" : ""}>02<small>Requirement</small></span>
          <i />
          <span className={step >= 2 ? "active" : ""}>03<small>Contact</small></span>
          <i />
          <span className={complete ? "active" : ""}>04<small>Consultation</small></span>
        </div>
      </div>

      <form className="funnel-card" onSubmit={submit}>
        {!complete && <div className="funnel-progress"><span style={{ width: `${((step + 1) / 3) * 100}%` }} /></div>}
        {step === 0 && !complete && <>
          <p>Step 1 of 3</p><h3>What are you planning?</h3>
          <div className="funnel-options">{projectTypes.map(item => <button type="button" className={data.projectType === item ? "selected" : ""} onClick={() => update("projectType", item)} key={item}>{item}<span>↗</span></button>)}</div>
          <button className="button button-orange" type="button" disabled={!data.projectType} onClick={() => setStep(1)}>Continue <span>→</span></button>
        </>}
        {step === 1 && !complete && <>
          <p>Step 2 of 3</p><h3>Describe the requirement.</h3>
          <div className="funnel-fields"><label><span>Floors / stops</span><input value={data.floors} onChange={e => update("floors", e.target.value)} placeholder="Example: G + 10 floors" required /></label><label><span>Capacity / load</span><input value={data.capacity} onChange={e => update("capacity", e.target.value)} placeholder="Example: 10 passenger / 1000 kg" required /></label><label><span>Project city</span><input value={data.city} onChange={e => update("city", e.target.value)} placeholder="City, State" required /></label><label><span>Expected timeline</span><select value={data.timeline} onChange={e => update("timeline", e.target.value)} required><option value="">Select</option><option>0–3 months</option><option>3–6 months</option><option>6–12 months</option><option>Planning stage</option></select></label></div>
          <div className="funnel-actions"><button type="button" onClick={() => setStep(0)}>← Back</button><button className="button button-orange" type="button" disabled={!data.floors || !data.capacity || !data.city || !data.timeline} onClick={() => setStep(2)}>Continue <span>→</span></button></div>
        </>}
        {step === 2 && !complete && <>
          <p>Step 3 of 3</p><h3>Where can we reach you?</h3>
          <div className="funnel-fields"><label><span>Name</span><input value={data.name} onChange={e => update("name", e.target.value)} placeholder="Your name" required /></label><label><span>Phone</span><input value={data.phone} onChange={e => update("phone", e.target.value)} placeholder="+91" required /></label><label className="wide"><span>Email</span><input type="email" value={data.email} onChange={e => update("email", e.target.value)} placeholder="you@company.com" required /></label></div>
          <div className="funnel-actions"><button type="button" onClick={() => setStep(1)}>← Back</button><button className="button button-orange" type="submit">Prepare my brief <span>↗</span></button></div>
          <small>Your details stay in this browser until you choose to email the brief to Akai.</small>
        </>}
        {complete && <div className="funnel-complete"><span>✓</span><p>Brief prepared</p><h3>Your project is ready for an Akai consultation.</h3><p>Send the prepared brief to the Akai inbox, or call the team directly.</p><a className="button button-orange" href={emailHref}>Email this brief <span>↗</span></a><a className="text-link text-link--light" href="tel:+919447629724">Call +91 94476 29724 <span>↗</span></a></div>}
      </form>
    </section>
  );
}
