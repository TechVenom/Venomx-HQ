"use client";

import React from "react";
import { Shield, Lock, AlertTriangle, EyeOff } from "lucide-react";
import { PageNavigation } from "@/components/PageNavigation";

export default function SafetyDocsPage() {
  const axioms = [
    { title: "Sovereign Privacy", desc: "No data leaves the local environment unless explicitly authorized.", icon: Lock },
    { title: "Resource Guarding", desc: "Hard limits on CPU, memory, and bandwidth consumption.", icon: AlertTriangle },
    { title: "Recursive Validation", desc: "Every destructive command requires human-in-the-loop approval.", icon: Shield },
    { title: "Anonymity Layer", desc: "Integrated multi-hop routing for all external network requests.", icon: EyeOff }
  ];

  return (
    <div className="space-y-16">
      <header>
        <h1 className="text-5xl font-extrabold tracking-tighter mb-6 uppercase">Survival Axioms</h1>
        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
          The hardcoded protocols that ensure VenomX remains safe, secure, and 
          aligned with the user's sovereign interests.
        </p>
      </header>

      <section className="space-y-12">
        <div className="prose prose-invert max-w-none text-slate-400">
          <p>
            VenomX does not follow "Asimov's Laws." It follows **Survival Axioms**—a set of 
            prioritized protocols designed for operation in adversarial digital environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {axioms.map((axiom, i) => (
            <div key={i} className="p-10 border border-white/5 bg-zinc-950 flex gap-8 group hover:bg-white hover:text-black transition-all">
               <div className="w-12 h-12 border border-[#27272a] group-hover:border-black flex items-center justify-center flex-shrink-0">
                  <axiom.icon className="w-6 h-6" />
               </div>
               <div>
                  <h3 className="text-lg font-bold mb-3 uppercase tracking-tighter">{axiom.title}</h3>
                  <p className="text-sm text-[#71717a] group-hover:text-black leading-relaxed">{axiom.desc}</p>
               </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 border-t border-white/5 space-y-8">
        <h2 className="text-2xl font-bold uppercase tracking-tight">Permission System</h2>
        <p className="text-slate-400 text-sm leading-relaxed">
           The agent uses a granular permission manifest. You can define exact boundaries 
           for what directories the agent can read, what URLs it can visit, and what 
           commands it can execute without manual approval.
        </p>
        <div className="bg-slate-900 p-8 border border-white/5">
           <pre className="text-xs text-slate-300 leading-relaxed overflow-x-auto">
{`permissions:
  filesystem:
    read: ["/home/user/project"]
    write: ["/home/user/project/logs"]
  network:
    allow: ["github.com", "pypi.org"]
    deny: ["*"]`}
           </pre>
        </div>
      </section>

      <PageNavigation />
    </div>
  );
}
