"use client";

import React from "react";
import { Command, Terminal, Globe, Code, Zap } from "lucide-react";

export default function ToolsDocsPage() {
  const tools = [
    { title: "OS Primitives", icon: Terminal, desc: "Direct file system interaction, process management, and local terminal execution. Enables agents to manage local compute resources." },
    { title: "Browser Claws", icon: Globe, desc: "High-fidelity browser automation. Includes JS execution, cookie management, and dynamic DOM interaction for web labor." },
    { title: "Protocol Claws", icon: Code, desc: "Native interop with blockchain RPCs, financial APIs, and proprietary enterprise protocols. Built for sovereign transaction management." },
    { title: "Network Claws", icon: Zap, desc: "Socket-level communication and network reconnaissance. Used for system monitoring and decentralized node coordination." }
  ];

  return (
    <div className="max-w-4xl space-y-16">
      <header>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 uppercase">The Claws: <br /> System-Level Tools.</h1>
        <p className="text-xl text-[#71717a] leading-relaxed font-medium">
          VenomX interacts with the digital and physical world through a specialized library of execution modules.
        </p>
      </header>

      <section className="space-y-12">
        <div className="prose prose-invert max-w-none text-[#71717a] leading-relaxed">
          <p>
            In the VenomX ecosystem, "Claws" are not simple API integrations. They are 
            high-fidelity, outcome-driven modules that bridge cognitive reasoning with 
            low-level system primitives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#27272a] border border-[#27272a]">
          {tools.map((tool, i) => (
            <div key={i} className="bg-black p-12 hover:bg-white hover:text-black transition-all group">
              <div className="w-10 h-10 border border-[#27272a] group-hover:border-black flex items-center justify-center mb-10">
                <tool.icon className="w-4 h-4" />
              </div>
              <h4 className="text-xl font-bold uppercase tracking-tighter mb-6">{tool.title}</h4>
              <p className="text-xs leading-relaxed font-medium text-[#71717a] group-hover:text-black">{tool.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="p-12 border border-[#27272a] bg-zinc-950/50">
        <h3 className="text-xl font-bold uppercase tracking-tight mb-6">Developing Custom Claws</h3>
        <p className="text-sm text-[#71717a] leading-relaxed mb-8 font-medium">
          The framework allows developers to register new Claws using a standardized 
          cognitive interface. This ensures that every tool is immediately accessible 
          to the reasoning engine without further training.
        </p>
        <div className="bg-black p-8 border border-[#27272a] font-mono text-[10px] text-white">
          {`# Example: Custom Tool Registration
from venomx import Claw, Interface

class CustomTool(Claw):
    def execute(self, params):
        # Implementation logic here
        pass`}
        </div>
      </section>
    </div>
  );
}
