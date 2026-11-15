"use client";

import { useEffect, useMemo, useState } from "react";

type Status = "New" | "Qualified" | "Consultation" | "Proposal" | "Won";
type Lead = { id: string; createdAt: string; status: Status; projectType: string; floors: string; capacity: string; city: string; timeline: string; name: string; phone: string; email: string; };

const stages: Status[] = ["New", "Qualified", "Consultation", "Proposal", "Won"];

export function AdminDashboard({ onLogout }: { onLogout?: () => void }) {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [tab, setTab] = useState<"overview" | "leads" | "content">("overview");

  useEffect(() => { setLeads(JSON.parse(localStorage.getItem("akai_leads_v1") || "[]")); }, []);
  const save = (next: Lead[]) => { setLeads(next); localStorage.setItem("akai_leads_v1", JSON.stringify(next)); };
  const counts = useMemo(() => Object.fromEntries(stages.map(stage => [stage, leads.filter(lead => lead.status === stage).length])), [leads]);

  const exportCsv = () => {
    const rows = [["Date", "Status", "Name", "Phone", "Email", "Project", "City", "Floors", "Capacity", "Timeline"], ...leads.map(lead => [lead.createdAt, lead.status, lead.name, lead.phone, lead.email, lead.projectType, lead.city, lead.floors, lead.capacity, lead.timeline])];
    const csv = rows.map(row => row.map(value => `"${String(value).replaceAll('"', '""')}"`).join(",")).join("\n");
    const link = document.createElement("a");
    link.href = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    link.download = "akai-leads.csv";
    link.click();
    URL.revokeObjectURL(link.href);
  };

  return <div className="admin-shell">
    <aside className="admin-sidebar"><div><span>AK</span><b>Akai Admin</b><small>Preview mode</small></div><nav><button className={tab === "overview" ? "active" : ""} onClick={() => setTab("overview")}>Overview</button><button className={tab === "leads" ? "active" : ""} onClick={() => setTab("leads")}>Lead pipeline <span>{leads.length}</span></button><button className={tab === "content" ? "active" : ""} onClick={() => setTab("content")}>Content + assets</button></nav><a href="/">← Back to website</a></aside>
    <div className="admin-main">
      <header><div><p>AKAI / ADMIN CONTROL CENTRE</p><h1>{tab === "overview" ? "Overview" : tab === "leads" ? "Lead pipeline" : "Content + assets"}</h1></div><div className="admin-header-actions"><div className="admin-mode"><i />Protected session</div>{onLogout && <button type="button" onClick={onLogout}>Log out</button>}</div></header>
      <div className="admin-notice"><b>Owner access enabled</b><span>The dashboard is behind a private URL and credential gate. Lead data in this preview remains stored only in the current browser until a shared CRM or database is connected.</span></div>

      {tab === "overview" && <>
        <section className="admin-metrics"><article><span>New leads</span><b>{counts.New}</b><small>Awaiting qualification</small></article><article><span>Active conversations</span><b>{counts.Qualified + counts.Consultation}</b><small>Qualified + consultation</small></article><article><span>Proposals</span><b>{counts.Proposal}</b><small>Decision stage</small></article><article><span>Won</span><b>{counts.Won}</b><small>Converted projects</small></article></section>
        <section className="admin-panel"><div className="admin-panel-head"><div><p>CONVERSION PIPELINE</p><h2>From visitor to project</h2></div><a href="/#project-planner">Open project planner ↗</a></div><div className="admin-pipeline">{stages.map((stage, index) => <div key={stage}><span>0{index + 1}</span><b>{stage}</b><strong>{counts[stage]}</strong><i /></div>)}</div></section>
        <section className="admin-grid"><article><p>CONTENT READINESS</p><h3>Launch checklist</h3><ul><li className="done">Escalator range added</li><li className="done">Lead funnel active</li><li className="done">Thomas Mathew CEO profile added</li><li className="done">Rijo Mathew project profile added</li><li className="done">Akai Elevator System wordmark approved</li></ul></article><article><p>NEXT AUTOMATION</p><h3>Connect the handoff</h3><p>Choose a CRM or company inbox workflow so every submitted lead can be captured centrally, assigned and followed up automatically.</p><a href="mailto:akaielevatorsystem@gmail.com?subject=Akai%20admin%20automation">Configure workflow ↗</a></article></section>
      </>}

      {tab === "leads" && <section className="admin-panel"><div className="admin-panel-head"><div><p>LEADS CAPTURED ON THIS DEVICE</p><h2>{leads.length} project briefs</h2></div><button onClick={exportCsv} disabled={!leads.length}>Export CSV ↓</button></div>{!leads.length ? <div className="admin-empty"><b>No local briefs yet.</b><span>Complete the homepage project planner once to test the pipeline.</span><a href="/#project-planner">Test project planner ↗</a></div> : <div className="lead-table">{leads.map(lead => <article key={lead.id}><div><b>{lead.name}</b><span>{lead.projectType} · {lead.city}</span></div><div><small>{lead.phone}</small><small>{lead.email}</small></div><div><small>{lead.floors}</small><small>{lead.capacity}</small></div><select value={lead.status} onChange={event => save(leads.map(item => item.id === lead.id ? { ...item, status: event.target.value as Status } : item))}>{stages.map(stage => <option key={stage}>{stage}</option>)}</select></article>)}</div>}</section>}

      {tab === "content" && <section className="admin-grid admin-content-grid"><article><p>BRAND</p><h3>Text wordmark</h3><div className="asset-slot"><span>Akai Elevator System</span><small>PT Serif Roman</small></div><b className="pending">Approved wordmark</b><p>The company name appears globally as one continuous line with consistent letter styling.</p></article><article><p>LEADERSHIP</p><h3>Thomas Mathew</h3><div className="asset-person"><img src="/team/thomas-mathew.webp" alt="Thomas Mathew" /><span><b>Chief Executive Officer</b><small>20 years in Marketing &amp; Sales</small></span></div><p>Official leadership portrait and experience profile are active.</p></article><article><p>PROJECTS</p><h3>Rijo Mathew</h3><div className="asset-person"><img src="/team/rijo-mathew.webp" alt="Rijo Mathew" /><span><b>Project Manager</b><small>15 years in Elevator Manufacturing</small></span></div><p>Official project management portrait and experience profile are active.</p></article><article><p>FUNNEL</p><h3>Sales journey</h3><ol><li>Visitor explores solution</li><li>Planner qualifies requirement</li><li>Consultation follows</li><li>Proposal moves to decision</li></ol></article></section>}
    </div>
  </div>;
}
