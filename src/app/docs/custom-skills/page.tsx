"use client";

import React from "react";
import { Cpu, Code, Zap } from "lucide-react";
import { PageNavigation } from "@/components/PageNavigation";

export default function CustomSkillsPage() {
  return (
    <div className="space-y-16">
      <header>
        <h1 className="text-5xl font-extrabold tracking-tighter mb-6 uppercase">Custom Skills</h1>
        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
          Extend the agent's intelligence by building and registering specialized 
          skill modules.
        </p>
      </header>

      <section className="space-y-12">
        <div className="prose prose-invert max-w-none text-slate-400 space-y-8">
          <p>
            VenomX is a modular platform. While it comes with a powerful set of base "Claws," 
            you can create **Custom Skills** to handle domain-specific logic, proprietary APIs, 
            or specialized hardware.
          </p>
          
          <div className="bg-zinc-950 border border-white/5 p-10 space-y-6">
             <div className="flex items-center gap-4 text-white">
                <Code className="w-6 h-6" />
                <h3 className="text-lg font-bold uppercase tracking-tight">The Skill Pattern</h3>
             </div>
             <p className="text-sm">Skills are defined as decorated Python functions or classes. The agent uses the docstring as the "Neural Description" to understand when to invoke the skill.</p>
             <div className="bg-black p-6 border border-white/10">
                <pre className="text-xs text-emerald-400 leading-relaxed">
{`@venomx.skill("database_query")
def query_vector_db(query: str, top_k: int = 5):
    """
    Performs a semantic search on the local knowledge base.
    Used for retrieving historical project context.
    """
    return db.search(query, k=top_k)`}
                </pre>
             </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="p-8 border border-white/5 space-y-4">
            <Zap className="w-6 h-6 text-[#3f3f46]" />
            <h4 className="font-bold uppercase tracking-widest text-xs">Hot-Reloading</h4>
            <p className="text-xs text-[#71717a] leading-relaxed">Skills can be registered and updated at runtime without restarting the main engine loop.</p>
         </div>
         <div className="p-8 border border-white/5 space-y-4">
            <Cpu className="w-6 h-6 text-[#3f3f46]" />
            <h4 className="font-bold uppercase tracking-widest text-xs">Hardware Binding</h4>
            <p className="text-xs text-[#71717a] leading-relaxed">Direct C++ bindings allow for high-performance skills that interact with GPU and FPGA hardware.</p>
         </div>
      </div>

      <PageNavigation />
    </div>
  );
}
