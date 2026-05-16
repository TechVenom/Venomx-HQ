"use client";

import React from "react";
import { Play, Rocket, Terminal, Code, Zap } from "lucide-react";
import { PageNavigation } from "@/components/PageNavigation";
import { InfoBox } from "@/components/docs/DocsComponents";

export default function QuickStartPage() {
  return (
    <div className="space-y-16">
      <header className="space-y-4">
        <h1 className="text-5xl font-extrabold tracking-tighter text-white uppercase">Quickstart</h1>
        <p className="text-xl text-slate-400 leading-relaxed max-w-3xl">
          Get your first VenomX node operational and connected in under 5 minutes. 
          Follow these steps to engage the autonomous core.
        </p>
      </header>

      <section className="space-y-12">
        <div className="flex items-start gap-8 border-b border-white/5 pb-12">
          <div className="w-12 h-12 bg-[#facc15] text-black flex items-center justify-center font-bold text-xl flex-shrink-0 rounded-sm">1</div>
          <div className="space-y-4 w-full">
            <h2 className="text-2xl font-bold uppercase text-white tracking-tight">Initialize Configuration</h2>
            <p className="text-slate-400 leading-relaxed text-sm">
              Run the initialization wizard to set up your primary identity and encryption keys.
            </p>
            <div className="bg-slate-900 p-4 font-mono text-sm text-[#facc15] border border-white/5 rounded-sm">
              venomx init --identity="Sovereign-01"
            </div>
          </div>
        </div>

        <div className="flex items-start gap-8 border-b border-white/5 pb-12">
          <div className="w-12 h-12 bg-white text-black flex items-center justify-center font-bold text-xl flex-shrink-0 rounded-sm">2</div>
          <div className="space-y-4 w-full">
            <h2 className="text-2xl font-bold uppercase text-white tracking-tight">Connect Logic Core</h2>
            <p className="text-slate-400 leading-relaxed text-sm">
              Specify your preferred LLM provider. For absolute sovereignty, we recommend 
              pointing to a local Ollama or LM-Studio endpoint.
            </p>
            <div className="bg-slate-900 p-4 font-mono text-sm text-slate-300 border border-white/5 rounded-sm">
              # Set local endpoint<br />
              venomx config set provider.url="http://localhost:11434"
            </div>
          </div>
        </div>

        <div className="flex items-start gap-8 pb-12">
          <div className="w-12 h-12 bg-emerald-500 text-black flex items-center justify-center font-bold text-xl flex-shrink-0 rounded-sm">3</div>
          <div className="space-y-4 w-full">
            <h2 className="text-2xl font-bold uppercase text-white tracking-tight">Engage the Engine</h2>
            <p className="text-slate-400 leading-relaxed text-sm">
              Launch the main autonomous loop and verify the neural connection.
            </p>
            <div className="bg-emerald-500/10 p-4 font-mono text-sm text-emerald-400 border border-emerald-500/20 rounded-sm">
              venomx run --live
            </div>
          </div>
        </div>
      </section>

      <InfoBox type="tip" title="Pro Tip">
        Use the <code>--debug</code> flag during your first run to see the real-time 
        tool-calling and reasoning traces in your terminal.
      </InfoBox>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 border-t border-white/5">
        <div className="p-8 border border-white/5 space-y-4 bg-white/5 hover:bg-white/[0.08] transition-all rounded-sm group">
          <Terminal className="w-6 h-6 text-slate-500 group-hover:text-[#facc15] transition-colors" />
          <h3 className="font-bold uppercase tracking-widest text-sm text-white">CLI Commands</h3>
          <p className="text-xs text-slate-400 leading-relaxed">View the full catalog of terminal instructions for low-level node management.</p>
        </div>
        <div className="p-8 border border-white/5 space-y-4 bg-white/5 hover:bg-white/[0.08] transition-all rounded-sm group">
          <Code className="w-6 h-6 text-slate-500 group-hover:text-[#facc15] transition-colors" />
          <h3 className="font-bold uppercase tracking-widest text-sm text-white">SDK Usage</h3>
          <p className="text-xs text-slate-400 leading-relaxed">Learn how to embed VenomX into your own applications using our Python and JS SDKs.</p>
        </div>
      </div>

      <PageNavigation />
    </div>
  );
}
