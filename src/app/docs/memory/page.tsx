"use client";

import React from "react";
import { Database, Zap, Shield, Activity, Brain } from "lucide-react";

export default function MemoryDocsPage() {
  const tiers = [
    { name: "Sensory", type: "Immediate", desc: "Processes real-time environmental input (audio, vision, system events). Acts as the primary interface between the physical world and the engine." },
    { name: "Working", type: "Transient", desc: "A high-concurrency buffer for active task context. Stores current mission parameters and active logical branches." },
    { name: "Short-term", type: "Buffered", desc: "Temporary retention of recent conversational and execution history. Allows for immediate context recall in active sessions." },
    { name: "Long-term", type: "Persistent", desc: "User-specific data vault. Stores permanent identities, learned preferences, and cross-session behavioral alignment." },
    { name: "Episodic", type: "Historical", desc: "A chronological ledger of every past mission and execution cycle. Enables historical decision analysis and self-correction." },
    { name: "Semantic", type: "Conceptual", desc: "The engine's internal knowledge base. Stores abstract facts, structured concepts, and world-logic metadata." },
    { name: "Procedural", type: "Operational", desc: "Stores 'Claws' execution patterns. Skill-based logic and tool-usage mastery refined over time." },
    { name: "Collective", type: "Swarm", desc: "Synchronized knowledge layer across distributed nodes. Enables shared recall within a multi-agent swarm." },
    { name: "Meta-memory", type: "Reflective", desc: "Metacognitive awareness. The engine assesses its own cognitive load, learning progress, and reasoning limits." }
  ];

  return (
    <div className="max-w-4xl space-y-16">
      <header>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 uppercase">Cognitive Pipeline: <br /> The 9-Tier Memory.</h1>
        <p className="text-xl text-[#71717a] leading-relaxed font-medium">
          VenomX utilizes a sophisticated hierarchical memory architecture to maintain 
          high-concurrency context and long-term sovereignty.
        </p>
      </header>

      <section className="space-y-12">
        <div className="prose prose-invert max-w-none text-[#71717a] leading-relaxed">
          <p>
            Unlike traditional LLMs that rely on simple context windows, VenomX implements a 
            modular cognitive pipeline. Information is filtered, synthesized, and stored across 
            nine specialized tiers, mimicking advanced human neuro-architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-[#27272a] border border-[#27272a]">
          {tiers.map((tier, i) => (
            <div key={i} className="bg-black p-10 flex flex-col md:flex-row gap-12 group hover:bg-white hover:text-black transition-all">
              <div className="md:w-1/3">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#3f3f46] group-hover:text-black mb-4 block">Tier 0{i+1} — {tier.type}</span>
                <h4 className="text-2xl font-bold uppercase tracking-tighter">{tier.name}</h4>
              </div>
              <div className="md:w-2/3">
                <p className="text-sm leading-relaxed font-medium">{tier.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="p-12 border border-[#27272a] bg-zinc-950/50">
        <div className="flex items-center gap-6 mb-8">
           <Zap className="w-6 h-6 text-white" />
           <h3 className="text-2xl font-bold uppercase tracking-tight">Data Sovereignty</h3>
        </div>
        <p className="text-sm text-[#71717a] leading-relaxed font-medium">
          All memory tiers are stored locally on your node. VenomX does not upload your 
          contextual data to external servers, ensuring that your episodic history and 
          personal identities remain private and sovereign.
        </p>
      </section>
    </div>
  );
}
