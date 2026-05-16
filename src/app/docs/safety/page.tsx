"use client";

import React from "react";
import { Shield, Lock, AlertTriangle, EyeOff, Zap } from "lucide-react";
import { PageNavigation } from "@/components/PageNavigation";
import { InfoBox, DocsTable } from "@/components/docs/DocsComponents";

export default function SafetyDocsPage() {
  const axioms = [
    { title: "Sovereign Privacy", desc: "No data leaves the local environment unless explicitly authorized.", icon: Lock },
    { title: "Resource Guarding", desc: "Hard limits on CPU, memory, and bandwidth consumption.", icon: AlertTriangle },
    { title: "Recursive Validation", desc: "Every destructive command requires human-in-the-loop approval.", icon: Shield },
    { title: "Anonymity Layer", desc: "Integrated multi-hop routing for all external network requests.", icon: EyeOff }
  ];

  return (
    <div className="space-y-16">
      <header className="space-y-4">
        <h1 className="text-5xl font-extrabold tracking-tighter text-white uppercase">Survival Axioms</h1>
        <p className="text-xl text-slate-400 leading-relaxed max-w-3xl">
          The hardcoded protocols that ensure VenomX remains safe, secure, and 
          aligned with the user's sovereign interests.
        </p>
      </header>

      <InfoBox type="warning" title="Sovereign Integrity">
        VenomX does not follow "Asimov's Laws." It follows <strong>Survival Axioms</strong>—a set of 
        prioritized protocols designed for operation in adversarial digital environments where 
        privacy and resource control are paramount.
      </InfoBox>

      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Axiom Protocols</h2>
        <DocsTable 
          headers={["Axiom", "Operational Summary"]}
          rows={axioms.map(axiom => [
            <div key={axiom.title} className="flex items-center gap-2 font-bold text-[#facc15]"><axiom.icon className="w-4 h-4" /> {axiom.title}</div>,
            axiom.desc
          ])}
        />
      </section>

      <section className="py-12 border-t border-white/5 space-y-8">
        <h2 className="text-2xl font-bold text-white uppercase tracking-tight flex items-center gap-3">
          <Shield className="w-5 h-5 text-[#facc15]" /> Permission System
        </h2>
        <p className="text-slate-400 text-sm leading-relaxed max-w-3xl">
           The agent uses a granular permission manifest. You can define exact boundaries 
           for what directories the agent can read, what URLs it can visit, and what 
           commands it can execute without manual approval.
        </p>
        <div className="bg-slate-900 p-8 border border-white/5 rounded-sm">
           <pre className="text-xs text-emerald-500 font-mono leading-relaxed overflow-x-auto">
{`# permissions.yaml
permissions:
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
