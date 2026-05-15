"use client";

import React from "react";
import { Terminal, Download, Cpu, Check } from "lucide-react";

export default function InstallDocsPage() {
  return (
    <div className="max-w-4xl space-y-16">
      <header>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 uppercase">Deployment & <br /> Installation.</h1>
        <p className="text-xl text-[#71717a] leading-relaxed font-medium">
          Set up the VenomX Sovereign Engine on your local node or enterprise cluster.
        </p>
      </header>

      <section className="space-y-12">
        <h2 className="text-2xl font-bold uppercase tracking-tight border-b border-[#27272a] pb-6">Core Prerequisites</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#27272a] border border-[#27272a]">
          <div className="bg-black p-10">
             <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#3f3f46] mb-6">Software Environment</h4>
             <ul className="space-y-4 text-xs font-medium text-[#71717a]">
               <li className="flex items-center gap-3"><Check className="w-3 h-3" /> Python 3.12+</li>
               <li className="flex items-center gap-3"><Check className="w-3 h-3" /> Docker (for Swarm)</li>
               <li className="flex items-center gap-3"><Check className="w-3 h-3" /> Node.js 20+ (for UI)</li>
             </ul>
          </div>
          <div className="bg-black p-10">
             <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#3f3f46] mb-6">Hardware Node</h4>
             <ul className="space-y-4 text-xs font-medium text-[#71717a]">
               <li className="flex items-center gap-3"><Check className="w-3 h-3" /> 8GB RAM (Minimum)</li>
               <li className="flex items-center gap-3"><Check className="w-3 h-3" /> 2GB Disk Space</li>
               <li className="flex items-center gap-3"><Check className="w-3 h-3" /> AVX2 Support (CPU)</li>
             </ul>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-2xl font-bold uppercase tracking-tight">Installation Methods</h2>
        
        <div className="space-y-12">
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">01 — PIP (Recommended for Developers)</h4>
            <div className="bg-zinc-950 p-8 border border-[#27272a] font-mono text-xs leading-relaxed text-white">
              $ pip install venomx-core
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">02 — Docker (Headless Swarm)</h4>
            <div className="bg-zinc-950 p-8 border border-[#27272a] font-mono text-xs leading-relaxed text-white">
              $ docker pull techvenom/vnmx:stable
              <br />
              $ docker run -d --name vnmx-node techvenom/vnmx
            </div>
          </div>
        </div>
      </section>

      <section className="p-12 border border-[#27272a] bg-white text-black">
        <h3 className="text-xl font-bold uppercase tracking-tight mb-4">Enterprise Clusters</h3>
        <p className="text-xs font-medium leading-relaxed">
          For large-scale infrastructure and high-concurrency node deployments, 
          please contact our engineering team for optimized orchestration templates.
        </p>
      </section>
    </div>
  );
}
