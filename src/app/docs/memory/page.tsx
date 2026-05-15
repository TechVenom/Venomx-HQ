"use client";

import React from "react";
import { Layers, Database, History, Cpu } from "lucide-react";
import { PageNavigation } from "@/components/PageNavigation";

export default function MemoryDocsPage() {
  const tiers = [
    { title: "Sensory Memory", desc: "Transient buffer for real-time visual and auditory streams.", latency: "< 5ms" },
    { title: "Working Memory", desc: "Active context for the current reasoning loop.", latency: "Immediate" },
    { title: "Episodic Recall", desc: "Vectorized history of all past mission events.", latency: "Variable" },
    { title: "Semantic Vault", desc: "Long-term conceptual and abstract knowledge storage.", latency: "Persistent" }
  ];

  return (
    <div className="space-y-16">
      <header>
        <h1 className="text-5xl font-extrabold tracking-tighter mb-6 uppercase">Memory Stack</h1>
        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
          Understanding the 9-tier hierarchical memory architecture that powers VenomX's 
          long-term reasoning and recall.
        </p>
      </header>

      <section className="space-y-12">
        <div className="prose prose-invert max-w-none text-slate-400">
          <p>
            VenomX does not rely on a simple chat history. It utilizes a **Hierarchical Cognitive Stack** 
            that mimics human information processing. This allows the agent to maintain focus on 
            complex, months-long missions without losing context.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tiers.map((tier, i) => (
            <div key={i} className="p-8 border border-white/5 bg-zinc-950 hover:border-white/20 transition-all">
               <div className="flex justify-between items-start mb-6">
                  <h3 className="font-bold uppercase tracking-widest text-white">{tier.title}</h3>
                  <span className="text-[10px] font-mono text-emerald-500 bg-emerald-500/10 px-2 py-1">{tier.latency}</span>
               </div>
               <p className="text-sm text-[#71717a] leading-relaxed mb-8">{tier.desc}</p>
               <div className="w-full h-1 bg-[#27272a] rounded-full overflow-hidden">
                  <div className="h-full bg-white transition-all duration-1000" style={{ width: `${(i+1)*25}%` }} />
               </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 border-t border-white/5">
        <h2 className="text-2xl font-bold mb-8 uppercase tracking-tight">Vector Integration</h2>
        <div className="bg-slate-900 p-8 border border-white/5 space-y-6">
           <div className="flex items-center gap-4 text-emerald-400">
              <Database className="w-6 h-6" />
              <span className="font-mono text-sm uppercase">Semantic Indexing Active</span>
           </div>
           <p className="text-sm text-slate-400 leading-relaxed">
              Every memory tier is automatically synchronized with a local vector database 
              (Chroma or Qdrant), allowing for high-fidelity retrieval using semantic similarity 
              searches during reasoning loops.
           </p>
        </div>
      </section>

      <PageNavigation />
    </div>
  );
}
