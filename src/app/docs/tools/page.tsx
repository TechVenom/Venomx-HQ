"use client";

import React from "react";
import { Hammer, Terminal, Eye, Globe, Code } from "lucide-react";
import { PageNavigation } from "@/components/PageNavigation";

export default function ToolDocsPage() {
  const tools = [
    { title: "Terminal (Shell)", icon: Terminal, desc: "Direct system execution via bash or powershell." },
    { title: "Vision (Cortex)", icon: Eye, desc: "Real-time analysis of images, videos, and screen captures." },
    { title: "Network (Recon)", icon: Globe, desc: "Secure web navigation, API interaction, and scraping." },
    { title: "Filesystem (IO)", icon: Hammer, desc: "Read, write, and refactor code directly on the host machine." }
  ];

  return (
    <div className="space-y-16">
      <header>
        <h1 className="text-5xl font-extrabold tracking-tighter mb-6 uppercase">The Claws System</h1>
        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
          Learn how VenomX interacts with the digital world through its specialized 
          library of "Claws"—bridging the gap between reasoning and action.
        </p>
      </header>

      <section className="space-y-12">
        <div className="prose prose-invert max-w-none text-slate-400">
          <p>
            Unlike typical LLMs that only generate text, VenomX is an **Action-Oriented AGI**. 
            It utilizes the "Claws" system to execute commands on the host machine with 
            surgical precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#27272a] border border-[#27272a]">
          {tools.map((tool, i) => (
            <div key={i} className="bg-black p-12 hover:bg-white hover:text-black transition-all group">
               <tool.icon className="w-8 h-8 mb-8 text-[#3f3f46] group-hover:text-black transition-colors" />
               <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter">{tool.title}</h3>
               <p className="text-sm text-[#71717a] group-hover:text-black leading-relaxed">{tool.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 border-t border-white/5 space-y-8">
        <h2 className="text-2xl font-bold uppercase tracking-tight">Tool Registration</h2>
        <p className="text-slate-400 text-sm leading-relaxed">
           You can register custom Python tools to extend the agent's capabilities. 
           VenomX uses standard type hints to automatically generate tool definitions 
           for the reasoning core.
        </p>
        <div className="bg-slate-900 p-8 border border-white/5">
           <pre className="text-xs text-slate-300 leading-relaxed overflow-x-auto">
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
