"use client";

import React from "react";
import { Code, Terminal, Database, Shield, Zap } from "lucide-react";
import { PageNavigation } from "@/components/PageNavigation";
import { InfoBox, DocsTable } from "@/components/docs/DocsComponents";

export default function ApiReferencePage() {
  const endpoints = [
    { method: "POST", path: "/v1/missions", desc: "Create a new autonomous mission objective." },
    { method: "GET", path: "/v1/missions/{id}", desc: "Retrieve the status and live logs for a mission." },
    { method: "POST", path: "/v1/tools/register", desc: "Register a new custom skill at runtime." },
    { method: "GET", path: "/v1/memory/search", desc: "Perform a semantic search across memory tiers." }
  ];

  return (
    <div className="space-y-16">
      <header className="space-y-4">
        <h1 className="text-5xl font-extrabold tracking-tighter text-white uppercase">API Reference</h1>
        <p className="text-xl text-slate-400 leading-relaxed max-w-3xl">
          The VenomX Core API allows for programmatic control of agent nodes, mission 
          orchestration, and memory retrieval.
        </p>
      </header>

      <InfoBox type="warning" title="Sovereign Authentication">
        All requests must include a <code>X-Venom-Key</code> header with your sovereign API key. 
        Keys are generated locally during the <code>init</code> process and never leave 
        your host machine.
      </InfoBox>

      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Operational Endpoints</h2>
        <DocsTable 
          headers={["Method", "Endpoint", "Description"]}
          rows={endpoints.map(ep => [
            <span key={ep.method} className={`text-[10px] font-bold px-2 py-1 rounded-sm ${ep.method === 'POST' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-blue-500/10 text-blue-500'}`}>{ep.method}</span>,
            <code key={ep.path} className="text-xs font-mono text-white bg-white/5 px-2 py-1 rounded-sm">{ep.path}</code>,
            ep.desc
          ])}
        />
      </section>

      <section className="py-12 border-t border-white/5 space-y-8">
        <h2 className="text-2xl font-bold text-white uppercase tracking-tight flex items-center gap-3">
          <Zap className="w-5 h-5 text-[#facc15]" /> Example Request
        </h2>
        <div className="bg-slate-900 p-8 border border-white/5 rounded-sm">
           <pre className="text-xs text-emerald-500 font-mono leading-relaxed overflow-x-auto">
{`import requests

url = "http://localhost:8000/v1/missions"
payload = {
    "goal": "Refactor authentication.ts to use JWT",
    "priority": "critical"
}
headers = {"X-Venom-Key": "your_key_here"}

response = requests.post(url, json=payload, headers=headers)
print(response.json())`}
           </pre>
        </div>
      </section>

      <PageNavigation />
    </div>
  );
}
