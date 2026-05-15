"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Plus, 
  ArrowRight,
  Terminal,
  Cpu,
  Globe,
  Shield,
  Activity,
  Layers,
  Search
} from "lucide-react";

export default function SkillsPage() {
  const categories = [
    { name: "Intelligence", count: 8, icon: Search },
    { name: "System", count: 12, icon: Terminal },
    { name: "Integration", count: 10, icon: Globe },
    { name: "Security", count: 6, icon: Shield },
    { name: "Observability", count: 5, icon: Activity },
    { name: "Architecture", count: 8, icon: Layers },
  ];

  const featuredSkills = [
    { title: "Market Intelligence", category: "Research", desc: "Real-time on-chain analysis and whale tracking for digital assets." },
    { title: "System Orchestrator", category: "OS", desc: "Full control over file systems, process management, and local terminals." },
    { title: "Sovereign Search", category: "Web", desc: "High-fidelity data extraction and monitoring across dynamic web sources." },
    { title: "Security Audit", category: "Protocol", desc: "Autonomous vulnerability scanning and protocol reconnaissance." },
    { title: "Enterprise Connect", category: "Work", desc: "Deep integration with corporate workspace suites and workflow automation." },
    { title: "Swarm Analytics", category: "Data", desc: "Metric aggregation and reasoning visualization for distributed agent nodes." }
  ];

  return (
    <div className="pt-48 pb-40 bg-black min-h-screen selection:bg-white selection:text-black">
      <div className="grid-container mb-40">
        <h1 className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#71717a] mb-12">Skills Marketplace</h1>
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-12 uppercase">Extend the Engine.</h2>
        <p className="text-xl text-[#71717a] max-w-2xl leading-relaxed font-medium">
          A library of 49+ specialized production tools. Deploy new capabilities 
          to your swarms in seconds.
        </p>
      </div>

      {/* Marketplace Overview Visual */}
      <div className="grid-container mb-20 border border-[#27272a] aspect-[21/9] overflow-hidden group relative">
         <img 
           src="/images/skills-marketplace.png" 
           alt="Skills Marketplace" 
           className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-100 transition-all"
           onError={(e) => (e.currentTarget.parentElement!.style.display = 'none')}
         />
      </div>

      {/* Categories Grid */}
      <div className="grid-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-[#27272a] mb-40 border border-[#27272a]">
        {categories.map((cat, i) => (
          <div key={i} className="bg-black p-10 flex flex-col items-center text-center hover:bg-white hover:text-black transition-all group cursor-pointer">
            <cat.icon className="w-5 h-5 mb-6 opacity-30 group-hover:opacity-100" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#71717a] group-hover:text-black mb-1">{cat.name}</span>
            <span className="text-xs font-bold">{cat.count} Skills</span>
          </div>
        ))}
      </div>

      {/* Featured Skills Grid */}
      <div className="grid-container mb-60">
        <div className="flex justify-between items-end mb-20 border-b border-[#27272a] pb-12">
          <div>
            <h3 className="text-3xl font-bold tracking-tighter uppercase tracking-widest">Featured Skills</h3>
            <p className="text-sm text-[#71717a] mt-2 font-medium">Verified production-ready modules.</p>
          </div>
          <div className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-3">
            Explore All <ArrowRight className="w-3 h-3" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#27272a] border border-[#27272a]">
          {featuredSkills.map((skill, i) => (
            <div key={i} className="bg-black p-12 hover:bg-white hover:text-black transition-all group flex flex-col h-full">
              <div className="flex justify-between items-start mb-12">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#71717a] group-hover:text-black border border-[#27272a] group-hover:border-black px-3 py-1">
                  {skill.category}
                </span>
                <Plus className="w-4 h-4 opacity-10" />
              </div>
              <h4 className="text-xl font-bold mb-6 tracking-tight uppercase">{skill.title}</h4>
              <p className="text-xs text-[#71717a] group-hover:text-black leading-relaxed mb-12 font-medium">{skill.desc}</p>
              <button className="mt-auto w-full py-4 border border-[#27272a] group-hover:border-black text-[10px] font-bold uppercase tracking-[0.3em] transition-all">
                Install Skill
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Registration Walkthrough */}
      <section className="grid-container pb-40">
        <div className="noir-card flex flex-col lg:flex-row gap-20 items-stretch">
          <div className="lg:w-1/2 py-10">
            <h3 className="text-3xl font-bold mb-8 uppercase tracking-tight">Modular Runtime</h3>
            <div className="space-y-12">
              {[
                { title: "Standardized Interface", desc: "Every skill follows a strict cognitive protocol for seamless core integration." },
                { title: "Auto-Discovery", desc: "The engine registers new modules instantly at runtime without downtime." }
              ].map((item, i) => (
                <div key={i}>
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-white" /> {item.title}
                  </h4>
                  <p className="text-sm text-[#71717a] leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative overflow-hidden group border-l border-[#27272a] bg-[#0a0a0a]">
            {/* Background Screenshot Placeholder */}
            <img 
              src="/images/skills-marketplace.png" 
              alt="Installation" 
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-10 group-hover:opacity-40 transition-all z-0"
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />

            <div className="relative z-10 p-12 font-mono text-[11px] leading-relaxed text-[#71717a]">
              <div className="flex gap-2 mb-12 opacity-20">
                <div className="w-2 h-2 bg-white" />
                <div className="w-2 h-2 bg-white" />
                <div className="w-2 h-2 bg-white" />
              </div>
              <span className="text-white font-bold">$ venomx install vnmx-finance-oracle</span>
              <br /><br />
              <span>[OK] Protocol verified (SHA-256)</span><br />
              <span>[OK] Dependencies satisfied</span><br />
              <span className="text-white font-bold tracking-widest uppercase mt-4 block">[SUCCESS] Module registered to Core Swarm.</span>
              <br /><br />
              <span className="text-[#3f3f46]"># Ready for execution.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
