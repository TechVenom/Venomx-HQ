"use client";

import React from "react";
import { Layers, Database, History, Cpu, Zap } from "lucide-react";
import { PageNavigation } from "@/components/PageNavigation";
import { InfoBox, DocsTable } from "@/components/docs/DocsComponents";

export default function MemoryDocsPage() {
  const tiers = [
    { title: "Sensory Memory", desc: "Transient buffer for real-time visual and auditory streams.", latency: "< 5ms", type: "RAM" },
    { title: "Working Memory", desc: "Active context for the current reasoning loop.", latency: "Immediate", type: "Context" },
    { title: "Episodic Recall", desc: "Vectorized history of all past mission events.", latency: "100-500ms", type: "Vector DB" },
    { title: "Semantic Vault", desc: "Long-term conceptual and abstract knowledge storage.", latency: "Persistent", type: "Knowledge Graph" }
  ];

  return (
    <div className="space-y-16">
      <header className="space-y-4">
        <h1 className="text-5xl font-extrabold tracking-tighter text-white uppercase">Memory Stack</h1>
        <p className="text-xl text-slate-400 leading-relaxed max-w-3xl">
          Understanding the 9-tier hierarchical memory architecture that powers VenomX's 
          long-term reasoning, recursive learning, and contextual recall.
        </p>
      </header>

      <InfoBox type="info" title="Cognitive Architecture">
        VenomX does not rely on a simple chat history. It utilizes a <strong>Hierarchical Cognitive Stack</strong> 
        that mimics human information processing. This allows the agent to maintain focus on 
        complex, months-long missions without losing context or reasoning quality.
      </InfoBox>

      <section>
        <h2 className="text-2xl font-bold text-white mb-8 uppercase tracking-tight">Tier Specifications</h2>
        <DocsTable 
          headers={["Memory Tier", "Operational Role", "Retrieval Latency", "Storage Layer"]}
          rows={tiers.map(tier => [
            <span key={tier.title} className="font-bold text-[#facc15]">{tier.title}</span>,
            tier.desc,
            <span key={tier.latency} className="font-mono text-xs">{tier.latency}</span>,
            <span key={tier.type} className="text-[10px] font-bold uppercase tracking-widest bg-white/5 px-2 py-1 border border-white/10 rounded-sm">{tier.type}</span>
          ])}
        />
      </section>

      <section className="py-12 border-t border-white/5 space-y-8">
        <h2 className="text-2xl font-bold text-white uppercase tracking-tight flex items-center gap-3">
          <Database className="w-6 h-6 text-[#facc15]" /> Vector Integration
        </h2>
        <p className="text-sm text-slate-400 leading-relaxed max-w-3xl">
          Every memory tier is automatically synchronized with a local vector database 
          (Chroma or Qdrant). This enables <strong>Semantic Indexing</strong>, allowing the agent 
          to retrieve high-fidelity historical context using natural language similarity searches.
        </p>
        <div className="bg-slate-900 p-8 border border-white/5 rounded-sm">
          <div className="flex items-center gap-4 text-emerald-400 mb-4">
            <Zap className="w-4 h-4" />
            <span className="font-mono text-xs uppercase tracking-widest font-bold">Live Sync Active</span>
          </div>
          <pre className="text-xs text-slate-300 font-mono leading-relaxed overflow-x-auto">
{`# Memory search execution
result = venomx.memory.search(
    query="authentication refactor patterns",
    tier="episodic",
    top_k=3
)`}
          </pre>
        </div>
      </section>

      <PageNavigation />
    </div>
  );
}
