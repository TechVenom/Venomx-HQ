"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Zap, 
  ArrowRight, 
  Cpu, 
  Database, 
  Globe, 
  Terminal, 
  Layers,
  Shield,
  Activity,
  Code,
  Brain,
  Search,
  Eye,
  Command,
  Settings,
  CpuIcon,
  RefreshCcw,
  Briefcase
} from "lucide-react";

export default function HomePage() {
  const memoryTiers = [
    { name: "Sensory", desc: "Real-time stream processing of visual and auditory environmental data.", type: "Immediate" },
    { name: "Working", desc: "Transient memory buffer for active task context and logic execution.", type: "Active" },
    { name: "Short-term", desc: "Temporary retention of recent conversational and system-level events.", type: "Buffered" },
    { name: "Long-term", desc: "Persistent storage of user preferences, identities, and learned behaviors.", type: "Persistent" },
    { name: "Episodic", desc: "Detailed chronological record of every past mission and execution loop.", type: "Historical" },
    { name: "Semantic", desc: "Structured conceptual knowledge base containing abstract facts and logic.", type: "Conceptual" },
    { name: "Procedural", desc: "High-fidelity operational patterns and skill-based execution logic (Claws).", type: "Operational" },
    { name: "Collective", desc: "Shared swarm intelligence synchronized across multi-agent nodes.", type: "Swarm" },
    { name: "Meta-memory", desc: "Metacognitive self-awareness of cognitive limits and learning states.", type: "Reflective" }
  ];

  const agiDifferentiators = [
    {
      title: "Sovereign Autonomy",
      desc: "Unlike cloud-dependent LLMs, VenomX is a local-first engine. Every reasoning loop and execution cycle happens within your secure infrastructure, ensuring absolute data ownership.",
      icon: Shield
    },
    {
      title: "Recursive Self-Healing",
      desc: "The engine utilizes advanced error-correction loops. If a tool call or logical path fails, VenomX autonomously identifies the bottleneck and re-executes.",
      icon: RefreshCcw
    },
    {
      title: "System-Level Agency",
      desc: "Most systems are limited to text or API calls. VenomX interacts with the digital and physical world through OS-level primitives and direct hardware control.",
      icon: CpuIcon
    },
    {
      title: "High-Concurrency Swarms",
      desc: "VenomX is an orchestrator. It can deploy hundreds of specialized sub-agents into a coordinated swarm, sharing memory and processing power.",
      icon: Layers
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen selection:bg-white selection:text-black">
      {/* ─── Hero Section ─── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center border-b border-[#27272a] overflow-hidden">
        <div className="bg-noir-grid absolute inset-0 opacity-5" />
        
        <div className="relative z-10 flex flex-col items-center">
          {/* VenomX Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-12"
          >
             <div className="w-64 h-64 border border-white/5 bg-zinc-950 flex flex-col items-center justify-center p-12 group hover:border-white transition-all duration-1000">
                <img src="/logo512.png" alt="VenomX Logo" className="w-32 h-32 grayscale brightness-200 mb-6 group-hover:scale-110 transition-transform duration-700" />
                <div className="text-center">
                   <span className="text-2xl font-bold tracking-[0.5em] text-white block leading-none mb-2 uppercase">VENOMX</span>
                   <span className="text-[10px] font-bold tracking-[0.6em] text-[#3f3f46] uppercase">Technologies</span>
                </div>
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[10px] font-bold uppercase tracking-[0.8em] text-[#3f3f46] mb-12"
          >
            Sovereign Autonomous Intelligence
          </motion.div>

          {/* System Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-3 px-6 py-2 border border-white/10 rounded-full mb-16 bg-zinc-950/50"
          >
             <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
             <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">System Status: Online</span>
          </motion.div>
          
          {/* THE AGI EDGE - NEW HERO TITLE */}
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-7xl md:text-9xl font-bold tracking-tighter mb-12 leading-none uppercase"
          >
            The AGI Edge.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-lg md:text-xl text-[#71717a] max-w-2xl mx-auto mb-20 leading-relaxed font-medium"
          >
            VenomX is a high-fidelity engine for bridging cognitive reasoning with system-level execution. 
            Engineered for sovereignty, autonomy, and the next evolution of digital labor.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-12"
          >
            <Link href="/download" className="btn-noir btn-noir-primary px-16 py-5">
              Deploy Engine
            </Link>
            <Link href="/features" className="btn-noir btn-noir-secondary px-16 py-5">
              Explore Architecture
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── Differentiators ─── */}
      <section className="py-60 grid-container border-b border-[#27272a]">
        <div className="mb-40">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] mb-6 text-[#3f3f46]">Engineering Excellence</h2>
          <h3 className="text-4xl md:text-7xl font-bold tracking-tight mb-8 uppercase">Beyond The Interface.</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#27272a] border border-[#27272a]">
          {agiDifferentiators.map((d, i) => (
            <div key={i} className="bg-black p-20 hover:bg-white hover:text-black transition-all group">
               <div className="w-16 h-16 border border-[#27272a] group-hover:border-black flex items-center justify-center mb-16">
                  <d.icon className="w-6 h-6" />
               </div>
               <h4 className="text-3xl font-bold mb-8 uppercase tracking-tighter">{d.title}</h4>
               <p className="text-sm text-[#71717a] group-hover:text-black font-medium leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Memory Tiering ─── */}
      <section id="framework" className="py-60 grid-container border-b border-[#27272a]">
        <div className="mb-40 flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="max-w-3xl">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] mb-6 text-[#3f3f46]">Cognitive Pipeline</h2>
            <h3 className="text-4xl md:text-7xl font-bold tracking-tight mb-8 uppercase">9-Tier Memory Architecture</h3>
          </div>
          <div className="w-full md:w-96 aspect-video border border-[#27272a] overflow-hidden group">
             <img 
               src="/images/memory-stack.png" 
               alt="Memory Stack" 
               className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 transition-all duration-700"
               onError={(e) => (e.currentTarget.parentElement!.style.display = 'none')}
             />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#27272a] border border-[#27272a]">
          {memoryTiers.map((tier, i) => (
            <div key={i} className="bg-black p-16 hover:bg-white hover:text-black transition-all group">
              <div className="flex justify-between items-center mb-16">
                 <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-[#3f3f46] group-hover:text-black border border-[#27272a] group-hover:border-black px-3 py-1">Node 0{i+1}</span>
                 <span className="text-[10px] font-bold uppercase tracking-widest text-[#71717a] group-hover:text-black opacity-40">{tier.type}</span>
              </div>
              <h4 className="text-3xl font-bold mb-8 tracking-tighter uppercase">{tier.name}</h4>
              <p className="text-xs text-[#71717a] group-hover:text-black leading-relaxed font-medium">{tier.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Operational Logic ─── */}
      <section className="py-60 grid-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-40 items-center">
          <div>
            <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] mb-6 text-[#3f3f46]">Operational Logic</h2>
            <h3 className="text-4xl md:text-7xl font-bold tracking-tight mb-12 uppercase">The Claws <br /> Framework.</h3>
            <p className="text-[#71717a] font-medium leading-relaxed mb-16 text-lg">
              VenomX interacts with the digital world through "Claws"—bridging the gap 
              between AI reasoning and system-level execution.
            </p>
            <div className="space-y-12">
              {[
                { title: "Hardware Agency", desc: "Direct communication with local system primitives.", icon: Cpu },
                { title: "Goal-Oriented Reasoning", desc: "The engine solves for outcomes, not just text responses.", icon: Command },
                { title: "Axiomatic Safety", desc: "Hardcoded survival protocols that cannot be overridden.", icon: Shield }
              ].map((f, i) => (
                <div key={i} className="flex gap-8">
                  <div className="w-12 h-12 border border-[#27272a] flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-3">{f.title}</h4>
                    <p className="text-xs text-[#71717a] font-medium leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-[#27272a] aspect-square flex flex-col font-mono text-[11px] text-[#3f3f46] relative overflow-hidden group">
             <div className="bg-noir-grid absolute inset-0 opacity-5" />
             <img 
               src="/images/claws-action.png" 
               alt="Claws Action" 
               className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 group-hover:opacity-60 transition-all duration-1000 z-0"
               onError={(e) => (e.currentTarget.style.display = 'none')}
             />
             <div className="relative z-10 p-16 flex-1 flex flex-col justify-between bg-black/60 backdrop-blur-sm">
               <div className="space-y-8">
                  <span className="text-white"># Status: Goal Identified</span><br />
                  <span>{"[OK] Initializing self-healing loop"}</span><br />
                  <span className="text-white">{"$ venomx run --autonomous-labor --level=max"}</span><br />
                  <span>{"[SUCCESS] Mission executed: System Refactored."}</span>
               </div>
               <div className="mt-auto border-t border-white/5 pt-12 flex items-center justify-between uppercase tracking-widest text-[9px] font-bold">
                  <span>VenomX Core | v2.0 AGI</span>
                  <span className="flex items-center gap-2"><div className="w-2 h-2 bg-emerald-500 rounded-full" /> Operational</span>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* ─── Footer CTA ─── */}
      <section className="py-80 grid-container text-center border-t border-[#27272a]">
        <h2 className="text-5xl md:text-8xl font-bold tracking-tight mb-20 uppercase">Autonomous <br /> Tomorrow.</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-16">
          <Link href="/contact" className="btn-noir btn-noir-primary px-20 py-6">
            Get in Touch
          </Link>
          <a href="mailto:venomx.agent.future@proton.me" className="btn-noir btn-noir-secondary px-20 py-6">
            Contact HQ
          </a>
        </div>
      </section>
    </div>
  );
}
