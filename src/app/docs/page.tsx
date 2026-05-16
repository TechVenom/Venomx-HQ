"use client";

import React from "react";
import { Terminal, Shield, Rocket, Layers, Globe, History, Eye, Code, Mic } from "lucide-react";
import Link from "next/link";
import { PageNavigation } from "@/components/PageNavigation";
import { InfoBox, DocsTable } from "@/components/docs/DocsComponents";

export default function DocsPage() {
  const quickLinks = [
    { name: "Installation", desc: "Install in 60 seconds on Linux, macOS, or native Windows.", href: "/docs/install", icon: Terminal },
    { name: "Quickstart Tutorial", desc: "Your first conversation and key features to try.", href: "/docs/quickstart", icon: Rocket },
    { name: "Learning Path", desc: "Find the right docs for your experience level.", href: "/docs/learning-path", icon: Layers },
    { name: "Tool System (Claws)", desc: "20+ built-in tools and how to configure them.", href: "/docs/tools", icon: Code },
    { name: "Memory Stack", desc: "Persistent memory that grows across missions.", href: "/docs/memory", icon: History },
    { name: "Survival Axioms", desc: "Hardcoded safety protocols and resource limits.", href: "/docs/safety", icon: Shield },
    { name: "Vision & Cortex", desc: "Real-time visual analysis of screens and streams.", href: "/docs/vision", icon: Eye },
    { name: "Voice Workflows", desc: "Hands-on setup for low-latency voice interaction.", href: "/docs/voice", icon: Mic },
    { name: "Swarm Orchestration", desc: "Coordinating multi-agent autonomous mission.", href: "/docs/swarms", icon: Globe },
    { name: "API Reference", desc: "Low-level programmatic control of VenomX nodes.", href: "/docs/api", icon: Code },
  ];

  return (
    <div className="space-y-16">
      <header className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-6xl font-extrabold tracking-tighter text-white">
            VenomX AGI
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-3xl">
            The autonomous, self-improving AGI agent built for <span className="text-[#facc15] font-semibold">Sovereign Intelligence</span>. 
            The only agent with a built-in learning loop—it creates skills from experience, 
            improves them during use, and builds a deepening model of you across missions.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link href="/docs/install" className="bg-[#facc15] text-black px-6 py-3 font-bold uppercase text-xs tracking-widest hover:bg-white transition-colors rounded-sm">
            Get Started —
          </Link>
          <a href="https://github.com/TechVenom/Venomx-HQ" className="bg-white/5 border border-white/10 text-white px-6 py-3 font-bold uppercase text-xs tracking-widest hover:bg-white/10 transition-colors rounded-sm">
            View on GitHub
          </a>
        </div>
      </header>

      <section>
        <h2 className="text-2xl font-bold text-white mb-8 uppercase tracking-tight flex items-center gap-3">
          Quick Links
        </h2>
        <DocsTable 
          headers={["Asset", "Operational Summary"]}
          rows={quickLinks.map(link => [
            <Link key={link.name} href={link.href} className="flex items-center gap-3 text-[#facc15] hover:underline font-bold">
              <link.icon className="w-4 h-4" /> {link.name}
            </Link>,
            link.desc
          ])}
        />
      </section>

      <section className="space-y-12 py-12 border-t border-white/5">
        <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <div className="space-y-2">
            <h4 className="font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#facc15] rounded-full" />
              Closed Learning Loop
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed pl-3.5 border-l border-white/10">
              Agent-curated memory with periodic nudges, autonomous skill creation, and 
              cross-session recall with LLM summarization.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#facc15] rounded-full" />
              Sovereign Execution
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed pl-3.5 border-l border-white/10">
              Run anywhere—CLI, Telegram, Discord, Slack, or secure terminal backends. 
              Hibernates when idle, costing nearly nothing.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#facc15] rounded-full" />
              Action-Oriented Claws
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed pl-3.5 border-l border-white/10">
              20+ built-in tools for shell access, web browsing, file I/O, and vision. 
              Extensible via simple Python skill decorators.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#facc15] rounded-full" />
              Recursive Self-Healing
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed pl-3.5 border-l border-white/10">
              Automatic identification and correction of errors during complex missions. 
              The agent persists until the goal is achieved.
            </p>
          </div>
        </div>
      </section>

      <InfoBox type="tip" title="Mission Ready">
        VenomX is not a chatbot; it's a mission-oriented engine. Start by defining your first 
        objective in the <Link href="/docs/first-mission" className="text-[#facc15] hover:underline">First Mission</Link> guide.
      </InfoBox>

      <PageNavigation />
    </div>
  );
}
