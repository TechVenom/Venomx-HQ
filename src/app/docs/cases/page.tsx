"use client";

import React from "react";
import { Briefcase, Target, Zap, Activity, Shield } from "lucide-react";
import { PageNavigation } from "@/components/PageNavigation";
import { InfoBox, DocsTable } from "@/components/docs/DocsComponents";

export default function CasesPage() {
  return (
    <div className="space-y-16">
      <header className="space-y-4">
        <h1 className="text-5xl font-extrabold tracking-tighter text-white uppercase">Case Studies</h1>
        <p className="text-xl text-slate-400 leading-relaxed max-w-3xl">
          Real-world applications of the VenomX AGI engine. See how sovereign 
          intelligence is being deployed in mission-critical environments.
        </p>
      </header>

      <section className="space-y-12">
        <div className="p-8 border border-white/5 bg-white/5 rounded-sm space-y-6">
          <div className="flex items-center gap-3 text-[#facc15] font-bold uppercase tracking-tight">
            <Shield className="w-5 h-5" /> Case 01: Secure DevOps Swarm
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            A financial services firm deployed a swarm of 5 VenomX nodes to monitor 
            their private cloud infrastructure. The nodes autonomously identified 
            configuration drifts and executed self-healing scripts without ever 
            sending data to external AI providers.
          </p>
          <div className="grid grid-cols-2 gap-4 text-[10px] uppercase font-bold tracking-widest text-slate-500">
            <div>Nodes: 05</div>
            <div>Uptime: 99.99%</div>
          </div>
        </div>

        <div className="p-8 border border-white/5 bg-white/5 rounded-sm space-y-6">
          <div className="flex items-center gap-3 text-[#facc15] font-bold uppercase tracking-tight">
            <Target className="w-5 h-5" /> Case 02: Research & Synthesis
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            An academic research team used VenomX to synthesize 5,000+ technical 
            documents. By utilizing the 9-tier Memory Stack, the agent maintained 
            a consistent conceptual model across weeks of processing, generating 
            a comprehensive knowledge graph of the field.
          </p>
          <div className="grid grid-cols-2 gap-4 text-[10px] uppercase font-bold tracking-widest text-slate-500">
            <div>Docs Processed: 5k+</div>
            <div>Accuracy: 96%</div>
          </div>
        </div>
      </section>

      <InfoBox type="success" title="Have a Case Study?">
        If you've deployed VenomX in a unique environment or for a complex mission, 
        we'd love to hear about it. Share your story on our Discord or GitHub.
      </InfoBox>

      <PageNavigation />
    </div>
  );
}
