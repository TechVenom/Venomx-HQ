"use client";

import React from "react";
import { Cpu, Layers, Shield, Zap, Database } from "lucide-react";
import { PageNavigation } from "@/components/PageNavigation";
import { InfoBox, DocsTable } from "@/components/docs/DocsComponents";

export default function ArchitecturePage() {
  return (
    <div className="space-y-16">
      <header className="space-y-4">
        <h1 className="text-5xl font-extrabold tracking-tighter text-white uppercase">System Architecture</h1>
        <p className="text-xl text-slate-400 leading-relaxed max-w-3xl">
          Deep dive into the modular engine, neural routing, and the sovereign security layer 
          that defines the VenomX core.
        </p>
      </header>

      <InfoBox type="info" title="Modular Sovereignty">
        VenomX is built on a <strong>Decoupled Architecture</strong>. The reasoning core (Cortex), 
        action layer (Claws), and memory tiers are isolated modules that communicate through 
        a secured local bus. This ensures that even if one module is compromised, the 
        sovereign integrity of the system remains intact.
      </InfoBox>

      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Core Components</h2>
        <DocsTable 
          headers={["Component", "Module Name", "Primary Responsibility"]}
          rows={[
            [
              <div className="flex items-center gap-2 font-bold text-[#facc15]"><Cpu className="w-4 h-4" /> Reasoning Core</div>,
              "Cortex-Prime",
              "Goal decomposition, neural routing, and logical orchestration."
            ],
            [
              <div className="flex items-center gap-2 font-bold text-[#facc15]"><Zap className="w-4 h-4" /> Action Layer</div>,
              "Claws-IO",
              "Direct system execution, tool calling, and hardware interfacing."
            ],
            [
              <div className="flex items-center gap-2 font-bold text-[#facc15]"><Database className="w-4 h-4" /> Memory Stack</div>,
              "Vault-Index",
              "9-tier hierarchical storage and semantic indexing."
            ],
            [
              <div className="flex items-center gap-2 font-bold text-[#facc15]"><Shield className="w-4 h-4" /> Security Layer</div>,
              "Axiom-Guard",
              "Hardcoded survival protocols and permission validation."
            ]
          ]}
        />
      </section>

      <section className="space-y-12 py-12 border-t border-white/5">
        <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Data Flow</h2>
        <div className="prose prose-invert max-w-none text-slate-400 leading-relaxed">
          <p>
            When a mission is initiated, the <strong>Cortex-Prime</strong> module first performs a 
            semantic search in the <strong>Vault-Index</strong> to retrieve historical context. 
            The goal is then decomposed into sub-tasks, which are validated against the 
            <strong>Axiom-Guard</strong> before being sent to the <strong>Claws-IO</strong> 
            layer for execution.
          </p>
        </div>
      </section>

      <PageNavigation />
    </div>
  );
}
