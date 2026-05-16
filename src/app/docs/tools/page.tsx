"use client";

import React from "react";
import { Hammer, Terminal, Eye, Globe, Code, Zap } from "lucide-react";
import { PageNavigation } from "@/components/PageNavigation";
import { InfoBox, DocsTable } from "@/components/docs/DocsComponents";

export default function ToolDocsPage() {
  const tools = [
    { title: "Terminal (Shell)", icon: Terminal, desc: "Direct system execution via bash or powershell." },
    { title: "Vision (Cortex)", icon: Eye, desc: "Real-time analysis of images, videos, and screen captures." },
    { title: "Network (Recon)", icon: Globe, desc: "Secure web navigation, API interaction, and scraping." },
    { title: "Filesystem (IO)", icon: Hammer, desc: "Read, write, and refactor code directly on the host machine." }
  ];

  return (
    <div className="space-y-16">
      <header className="space-y-4">
        <h1 className="text-5xl font-extrabold tracking-tighter text-white uppercase">The Claws System</h1>
        <p className="text-xl text-slate-400 leading-relaxed max-w-3xl">
          Learn how VenomX interacts with the digital world through its specialized 
          library of "Claws"—bridging the gap between neural reasoning and direct system action.
        </p>
      </header>

      <InfoBox type="info" title="Action-Oriented AGI">
        Unlike typical LLMs that only generate text, VenomX is an <strong>Action-Oriented AGI</strong>. 
        It utilizes the "Claws" system to execute commands on the host machine with 
        surgical precision, managing state and verifying outcomes autonomously.
      </InfoBox>

      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Core Toolset</h2>
        <DocsTable 
          headers={["Asset", "Operational Summary"]}
          rows={tools.map(tool => [
            <div key={tool.title} className="flex items-center gap-2 font-bold text-[#facc15]"><tool.icon className="w-4 h-4" /> {tool.title}</div>,
            tool.desc
          ])}
        />
      </section>

      <section className="py-12 border-t border-white/5 space-y-8">
        <h2 className="text-2xl font-bold text-white uppercase tracking-tight flex items-center gap-3">
          <Code className="w-6 h-6 text-[#facc15]" /> Tool Registration
        </h2>
        <p className="text-slate-400 text-sm leading-relaxed max-w-3xl">
           You can register custom Python tools to extend the agent's capabilities. 
           VenomX uses standard type hints and docstrings to automatically generate 
           tool definitions for the reasoning core.
        </p>
        <div className="bg-slate-900 p-8 border border-white/5 rounded-sm">
           <pre className="text-xs text-emerald-500 font-mono leading-relaxed overflow-x-auto">
{`@venomx.tool
def get_system_health(priority: int = 1) -> dict:
    """Retrieves critical hardware metrics."""
    return psutil.virtual_memory()._asdict()`}
           </pre>
        </div>
      </section>

      <PageNavigation />
    </div>
  );
}
