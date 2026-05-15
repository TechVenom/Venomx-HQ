"use client";

import React from "react";
import { Code, Terminal, Database, Shield } from "lucide-react";
import { PageNavigation } from "@/components/PageNavigation";

export default function ApiReferencePage() {
  const endpoints = [
    { method: "POST", path: "/v1/missions", desc: "Create a new autonomous mission objective." },
    { method: "GET", path: "/v1/missions/{id}", desc: "Retrieve the status and live logs for a specific mission." },
    { method: "POST", path: "/v1/tools/register", desc: "Register a new custom skill at runtime." },
    { method: "GET", path: "/v1/memory/search", desc: "Perform a semantic search across memory tiers." }
  ];

  return (
    <div className="space-y-16">
      <header>
        <h1 className="text-5xl font-extrabold tracking-tighter mb-6 uppercase">API Reference</h1>
        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
          The VenomX Core API allows for programmatic control of agent nodes, mission 
          orchestration, and memory retrieval.
        </p>
      </header>

      <section className="space-y-12">
        <div className="space-y-6">
           <h2 className="text-2xl font-bold uppercase tracking-tight border-b border-white/5 pb-4">Authentication</h2>
           <p className="text-sm text-slate-400 leading-relaxed">
              All requests must include a `X-Venom-Key` header with your sovereign API key. 
              Keys are generated locally during the `init` process.
           </p>
           <div className="bg-slate-900 p-4 border border-white/5 font-mono text-xs text-slate-300">
             Authorization: Bearer YOUR_API_KEY
           </div>
        </div>

        <div className="space-y-8">
           <h2 className="text-2xl font-bold uppercase tracking-tight border-b border-white/5 pb-4">Endpoints</h2>
           <div className="space-y-px bg-[#27272a] border border-[#27272a]">
              {endpoints.map((ep, i) => (
                <div key={i} className="bg-black p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-zinc-950 transition-all group">
                   <div className="flex items-center gap-6">
                      <span className={`text-[10px] font-bold px-3 py-1 rounded-sm ${ep.method === 'POST' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-blue-500/10 text-blue-500'}`}>
                        {ep.method}
                      </span>
                      <code className="text-sm font-mono text-white">{ep.path}</code>
                   </div>
                   <p className="text-xs text-[#71717a] group-hover:text-slate-300 transition-colors">{ep.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      <section className="py-12 border-t border-white/5 space-y-8">
        <h2 className="text-2xl font-bold uppercase tracking-tight">Example Request</h2>
        <div className="bg-slate-900 p-8 border border-white/5">
           <pre className="text-xs text-slate-300 leading-relaxed overflow-x-auto">
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
