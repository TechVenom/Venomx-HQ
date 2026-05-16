"use client";

import React from "react";
import { Layers, Share2, Zap, Users, Shield } from "lucide-react";
import { PageNavigation } from "@/components/PageNavigation";
import { InfoBox, DocsTable } from "@/components/docs/DocsComponents";

export default function SwarmDocsPage() {
  return (
    <div className="space-y-16">
      <header className="space-y-4">
        <h1 className="text-5xl font-extrabold tracking-tighter text-white uppercase">Swarm Orchestration</h1>
        <p className="text-xl text-slate-400 leading-relaxed max-w-3xl">
          Deploy and manage coordinated agent swarms for massive-scale autonomous operations. 
          VenomX leads the field in multi-agent neural synchronization.
        </p>
      </header>

      <InfoBox type="tip" title="Collective Intelligence">
        A single VenomX node can act as a <strong>Swarm Leader</strong>, delegating 
        decomposed sub-tasks to specialized worker nodes. This allows for parallel 
        execution of complex, multi-faceted missions.
      </InfoBox>

      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Swarm Node Types</h2>
        <DocsTable 
          headers={["Node Type", "Role", "Specialization"]}
          rows={[
            [
              <div key="leader" className="flex items-center gap-2 font-bold text-[#facc15]"><Users className="w-4 h-4" /> Swarm Leader</div>,
              "Orchestrator",
              "Task decomposition, delegation, and result synthesis."
            ],
            [
              <div key="worker" className="flex items-center gap-2 font-bold text-[#facc15]"><Zap className="w-4 h-4" /> Recon Worker</div>,
              "Data Gatherer",
              "Web scraping, documentation indexing, and research."
            ],
            [
              <div key="executor" className="flex items-center gap-2 font-bold text-[#facc15]"><Shield className="w-4 h-4" /> Dev Worker</div>,
              "System Operator",
              "Code refactoring, terminal execution, and local file I/O."
            ]
          ]}
        />
      </section>

      <section className="py-12 border-t border-white/5 space-y-8">
        <h2 className="text-2xl font-bold text-white uppercase tracking-tight flex items-center gap-3">
          <Layers className="w-5 h-5 text-[#facc15]" /> Swarm Configuration
        </h2>
        <p className="text-slate-400 text-sm leading-relaxed max-w-3xl">
           Configure your swarm hierarchy and communication protocols via the <code>swarm.yaml</code> manifest. 
           Leader nodes will automatically manage the lifecycle of ephemeral worker agents.
        </p>
        <div className="bg-slate-900 p-8 border border-white/5 rounded-sm">
           <pre className="text-xs text-emerald-500 font-mono leading-relaxed overflow-x-auto">
{`# swarm.yaml
swarm:
  topology: hierarchical
  leader: "Cortex-Prime"
  workers:
    - name: "Recon-Node"
      count: 3
      tools: ["browser", "search"]
    - name: "Dev-Node"
      count: 2
      tools: ["terminal", "filesystem"]`}
           </pre>
        </div>
      </section>

      <PageNavigation />
    </div>
  );
}
