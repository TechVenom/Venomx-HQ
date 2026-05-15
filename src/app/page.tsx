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
  RefreshCcw
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
      desc: "Unlike cloud-dependent LLMs, VenomX is a local-first engine. Every reasoning loop and execution cycle happens within your secure infrastructure, ensuring absolute data ownership and zero latency from third-party APIs.",
      icon: Shield
    },
    {
      title: "Recursive Self-Healing",
      desc: "The engine utilizes advanced error-correction loops. If a tool call or logical path fails, VenomX autonomously identifies the bottleneck, refines the code or logic, and re-executes without human intervention.",
      icon: RefreshCcw
    },
    {
      title: "System-Level Agency",
      desc: "Most systems are limited to text or API calls. VenomX interacts with the digital and physical world through OS-level primitives, direct hardware control, and high-fidelity browser automation via the Claws library.",
      icon: CpuIcon
    },
    {
      title: "High-Concurrency Swarms",
      desc: "VenomX isn't a single agent; it's an orchestrator. It can deploy hundreds of specialized sub-agents into a coordinated swarm, sharing memory and processing power to solve massive, multi-dimensional problems.",
      icon: Layers
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen selection:bg-white selection:text-black">
      {/* ─── Hero Section ─── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center border-b border-[#27272a] overflow-hidden">
        <div className="bg-noir-grid absolute inset-0 opacity-10" />
        
        {/* Real Hero Image Placeholder */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-engine.png" 
            alt="" 
            className="w-full h-full object-cover opacity-20 grayscale"
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
        </div>

        <div className="relative z-10 max-w-4xl pt-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#3f3f46] mb-12"
          >
            Sovereign Autonomous Intelligence
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter mb-12 leading-none uppercase"
          >
            The AGI Edge.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg md:text-xl text-[#71717a] max-w-2xl mx-auto mb-16 leading-relaxed font-medium"
          >
            VenomX is not an assistant; it is a goal-oriented autonomous engine. 
            Engineered to bridge cognitive reasoning with low-level system execution 
            under absolute sovereignty.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-12"
          >
            <Link href="/download" className="btn-noir btn-noir-primary px-12 py-4">
              Deploy Engine
            </Link>
            <Link href="/features" className="btn-noir btn-noir-secondary px-12 py-4">
              Explore Architecture
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── What Makes VenomX AGI? ─── */}
      <section className="py-40 grid-container border-b border-[#27272a]">
        <div className="mb-32">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] mb-6 text-[#3f3f46]">The Framework Edge</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 uppercase">Why VenomX?</h3>
          <p className="text-[#71717a] max-w-2xl font-medium leading-relaxed">
            While traditional AI systems are confined to chat interfaces, VenomX is built for 
            high-fidelity autonomous labor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {agiDifferentiators.map((d, i) => (
            <div key={i} className="noir-card p-16 hover:bg-white hover:text-black transition-all group">
               <div className="w-12 h-12 border border-[#27272a] group-hover:border-black flex items-center justify-center mb-12">
                  <d.icon className="w-5 h-5" />
               </div>
               <h4 className="text-2xl font-bold mb-6 uppercase tracking-tighter">{d.title}</h4>
               <p className="text-sm text-[#71717a] group-hover:text-black font-medium leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Cognitive Architecture (The 9-Tier Memory) ─── */}
      <section id="framework" className="py-40 grid-container border-b border-[#27272a]">
        <div className="mb-32 flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="max-w-2xl">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] mb-6 text-[#3f3f46]">Cognitive Pipeline</h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 uppercase">9-Tier Memory Architecture</h3>
            <p className="text-[#71717a] font-medium leading-relaxed">
              The engine utilizes a hierarchical memory stack to maintain high-concurrency context 
              and long-term episodic recall.
            </p>
          </div>
          <div className="w-full md:w-80 aspect-video border border-[#27272a] overflow-hidden group">
             <img 
               src="/images/memory-stack.png" 
               alt="Memory Stack" 
               className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 transition-all"
               onError={(e) => (e.currentTarget.parentElement!.style.display = 'none')}
             />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#27272a] border border-[#27272a]">
          {memoryTiers.map((tier, i) => (
            <div key={i} className="bg-black p-12 hover:bg-white hover:text-black transition-all group">
              <div className="flex justify-between items-center mb-12">
                 <span className="text-[8px] font-bold uppercase tracking-widest text-[#3f3f46] group-hover:text-black border border-[#27272a] group-hover:border-black px-2 py-1">Tier 0{i+1}</span>
                 <span className="text-[10px] font-bold uppercase tracking-widest text-[#71717a] group-hover:text-black opacity-40">{tier.type}</span>
              </div>
              <h4 className="text-2xl font-bold mb-6 tracking-tighter uppercase">{tier.name}</h4>
              <p className="text-xs text-[#71717a] group-hover:text-black leading-relaxed font-medium">{tier.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Autonomous Execution (Claws) ─── */}
      <section className="py-40 grid-container border-b border-[#27272a]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div>
            <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] mb-6 text-[#3f3f46]">Operational Logic</h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 uppercase">The Claws <br /> Framework.</h3>
            <p className="text-[#71717a] font-medium leading-relaxed mb-12">
              VenomX interacts with the digital world through "Claws"—a library of specialized 
              production tools that bridge the gap between AI reasoning and system-level execution.
            </p>
            <div className="space-y-8">
              {[
                { title: "Hardware Agency", desc: "Direct communication with local system primitives and hardware interfaces.", icon: Cpu },
                { title: "Goal-Oriented Reasoning", desc: "The engine solves for outcomes, not just text responses.", icon: Command },
                { title: "Axiomatic Safety", desc: "Hardcoded survival and ethical protocols that cannot be overridden by prompts.", icon: Shield }
              ].map((f, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-10 h-10 border border-[#27272a] flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-2">{f.title}</h4>
                    <p className="text-xs text-[#71717a] font-medium leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-[#27272a] aspect-square flex flex-col font-mono text-[11px] text-[#3f3f46] relative overflow-hidden group">
             <div className="bg-noir-grid absolute inset-0 opacity-5" />
             
             {/* Real Claws Action Image */}
             <img 
               src="/images/claws-action.png" 
               alt="Claws in action" 
               className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 group-hover:opacity-60 transition-all z-0"
               onError={(e) => (e.currentTarget.style.display = 'none')}
             />

             <div className="relative z-10 p-12 flex-1 flex flex-col justify-between">
               <div className="space-y-6">
                  <span className="text-white"># Status: Goal Identified</span><br />
                  <span>{"[OK] Initializing self-healing loop"}</span><br />
                  <span>{"[OK] Optimizing Claws for environment"}</span><br />
                  <span>{"[OK] Collective swarm synchronized"}</span><br /><br />
                  <span className="text-white">{"$ venomx run --autonomous-labor --level=max"}</span><br />
                  <span>{"[SUCCESS] Mission executed: System Refactored."}</span><br />
                  <span className="text-[#71717a]">{"// AGI Engine: Sovereign & Secure"}</span>
               </div>
               <div className="mt-auto border-t border-[#27272a] pt-8 flex items-center justify-between uppercase tracking-widest text-[8px] font-bold">
                  <span>Core Stable v4.9.0</span>
                  <span className="flex items-center gap-2"><div className="w-2 h-2 bg-emerald-500 rounded-full" /> Full Sovereignty Active</span>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* ─── Professional CTA ─── */}
      <section className="py-60 grid-container text-center">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-16 uppercase">The Future of <br /> Digital Labor.</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
          <Link href="/download" className="btn-noir btn-noir-primary px-16 py-5">
            Get Engine
          </Link>
          <Link href="/contact" className="btn-noir btn-noir-secondary px-16 py-5">
            Talk to Engineering
          </Link>
        </div>
      </section>
    </div>
  );
}
