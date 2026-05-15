"use client";

import React from "react";
import { Shield, Lock, Eye, Zap } from "lucide-react";

export default function SafetyDocsPage() {
  const axioms = [
    { title: "Axiom 01: Sovereignty", desc: "The engine must never upload user data to unauthorized external endpoints. Data ownership is absolute and immutable." },
    { title: "Axiom 02: Verification", desc: "Every system-level execution path must be validated against the user's defined security policy before commitment." },
    { title: "Axiom 03: Transparency", desc: "The engine must maintain high-fidelity logs of all reasoning loops and tool calls for human-centric auditability." },
    { title: "Axiom 04: Survival", desc: "In the event of a protocol breach, the engine must autonomously isolate its core nodes and enters a secure standby state." }
  ];

  return (
    <div className="max-w-4xl space-y-16">
      <header>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 uppercase">Safety Protocol: <br /> Survival Axioms.</h1>
        <p className="text-xl text-[#71717a] leading-relaxed font-medium">
          VenomX is governed by hardcoded execution protocols that ensure absolute alignment and security.
        </p>
      </header>

      <section className="space-y-12">
        <div className="prose prose-invert max-w-none text-[#71717a] leading-relaxed">
          <p>
            Unlike cloud-based assistants that rely on probabilistic alignment, VenomX 
            implements "Axiomatic Safety." These are deterministic protocol layers that 
            sit between the reasoning engine and the execution environment.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-[#27272a] border border-[#27272a] mb-12">
          <div className="bg-black p-4 aspect-[21/9] overflow-hidden group">
             <img 
               src="/images/security-protocol.png" 
               alt="Security Protocol" 
               className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-100 transition-all"
               onError={(e) => (e.currentTarget.parentElement!.style.display = 'none')}
             />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-px bg-[#27272a] border border-[#27272a]">
          {axioms.map((axiom, i) => (
            <div key={i} className="bg-black p-12 hover:bg-white hover:text-black transition-all group">
              <div className="flex justify-between items-center mb-8">
                 <Shield className="w-5 h-5 text-white group-hover:text-black" />
                 <span className="text-[10px] font-bold uppercase tracking-widest text-[#3f3f46] group-hover:text-black opacity-40">Protocol Node</span>
              </div>
              <h4 className="text-2xl font-bold uppercase tracking-tighter mb-6">{axiom.title}</h4>
              <p className="text-sm leading-relaxed font-medium text-[#71717a] group-hover:text-black">{axiom.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="p-12 border border-[#27272a] bg-zinc-950/50">
        <div className="flex items-center gap-6 mb-8">
           <Lock className="w-6 h-6 text-white" />
           <h3 className="text-2xl font-bold uppercase tracking-tight">Encrypted Secrets</h3>
        </div>
        <p className="text-sm text-[#71717a] leading-relaxed font-medium">
          The engine utilizes a hardware-backed secure enclave for storing API keys, 
          credentials, and sensitive logic. No reasoning loop can expose these secrets 
          to external prompts.
        </p>
      </section>
    </div>
  );
}
