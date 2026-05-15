"use client";

import React from "react";
import { Layers, Share2, Zap } from "lucide-react";
import { PageNavigation } from "@/components/PageNavigation";

export default function SwarmDocsPage() {
  return (
    <div className="space-y-16">
      <header>
        <h1 className="text-5xl font-extrabold tracking-tighter mb-6 uppercase">Swarm Orchestration</h1>
        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
          Deploy and manage coordinated agent swarms for massive-scale autonomous operations.
        </p>
      </header>

      <section className="space-y-12">
        <div className="prose prose-invert max-w-none text-slate-400 space-y-8">
          <p>
            VenomX is designed for **Multi-Agent Orchestration**. A single node can act as a 
            "Swarm Leader," delegating sub-tasks to specialized worker nodes.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#27272a] border border-[#27272a]">
             <div className="bg-black p-10 space-y-6">
                <h3 className="text-lg font-bold uppercase tracking-tight text-white flex items-center gap-3">
                   <Layers className="w-5 h-5" /> Sub-Agent Delegation
                </h3>
                <p className="text-sm">The leader node breaks down the mission and spawns ephemeral worker agents, each with a limited scope and specific toolset.</p>
             </div>
             <div className="bg-black p-10 space-y-6">
                <h3 className="text-lg font-bold uppercase tracking-tight text-white flex items-center gap-3">
                   <Share2 className="w-5 h-5" /> Memory Syncing
                </h3>
                <p className="text-sm">Swarm members share a synchronized 'Collective Memory' tier, allowing them to learn from each other's successes and failures in real-time.</p>
             </div>
          </div>

          <h2 className="text-2xl font-bold text-white uppercase mt-12">Swarm Configuration</h2>
          <p className="text-sm">Configure your swarm hierarchy and communication protocols via the `swarm.yaml` manifest.</p>
          <div className="bg-slate-900 p-8 border border-white/5">
             <pre className="text-xs text-slate-300 leading-relaxed">
{`swarm:
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
        </div>
      </section>

      <PageNavigation />
    </div>
  );
}
