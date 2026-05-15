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
import { PageNavigation } from "@/components/PageNavigation";

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

      {/* ─── LIVE OPERATIONAL EVIDENCE ─── */}
      <section className="py-40 bg-[#09090b] border-b border-[#27272a] overflow-hidden">
        <div className="grid-container mb-24 text-center">
           <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] mb-6 text-[#3f3f46]">Mission Control Telemetry</h2>
           <h3 className="text-4xl md:text-8xl font-bold tracking-tight mb-8 uppercase">Neural Evidence.</h3>
           <p className="text-[#71717a] max-w-2xl mx-auto font-medium">
             Direct evidence of sovereign AGI orchestration. Witness the transition from 
             high-level intent to multi-vector system execution.
           </p>
        </div>

        {/* Global Intel Map */}
        <div className="grid-container mb-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group border border-white/5 bg-black p-4 cursor-crosshair"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60" />
            <img 
              src="/screenshots/vnmx_global_dashboard_intel_map.png" 
              alt="Global Situation Dashboard" 
              className="w-full grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
            />
            <div className="absolute bottom-12 left-12 z-20">
               <span className="text-[10px] font-bold uppercase tracking-widest bg-white text-black px-4 py-2">Mission Control: Global Intelligence Map</span>
               <p className="text-[9px] text-white/40 mt-4 uppercase tracking-[0.3em]">3D Visualization of global conflict vectors and autonomous node status.</p>
            </div>
          </motion.div>
        </div>

        {/* Core Logic side-by-side */}
        <div className="grid-container grid grid-cols-1 md:grid-cols-2 gap-12">
          <Link href="/features#reasoning" className="group border border-white/5 bg-black p-8 hover:border-white/20 transition-all">
            <div className="flex justify-between items-center mb-12">
               <h4 className="text-xs font-bold uppercase tracking-[0.4em]">Neural Reasoning (CoT)</h4>
               <ArrowRight className="w-4 h-4 text-[#3f3f46] group-hover:text-white transition-all" />
            </div>
            <div className="aspect-video mb-8 overflow-hidden border border-white/5 bg-zinc-950">
               <img 
                 src="/screenshots/vnmx_live_execution_neural_reasoning.png" 
                 alt="Neural Reasoning" 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
               />
            </div>
            <p className="text-[10px] text-[#71717a] font-medium leading-relaxed group-hover:text-white/60 transition-colors">
              Real-time visualization of the agent's internal reasoning chain. Every action 
              is preceded by a self-correcting logic cycle that analyzes mission parameters.
            </p>
          </Link>

          <Link href="/features#agency" className="group border border-white/5 bg-black p-8 hover:border-white/20 transition-all">
            <div className="flex justify-between items-center mb-12">
               <h4 className="text-xs font-bold uppercase tracking-[0.4em]">Autonomous Orchestration</h4>
               <ArrowRight className="w-4 h-4 text-[#3f3f46] group-hover:text-white transition-all" />
            </div>
            <div className="aspect-video mb-8 overflow-hidden border border-white/5 bg-zinc-950">
               <img 
                 src="/screenshots/vnmx_multi_tool_task_orchestration.png" 
                 alt="Multi-Tool Orchestration" 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
               />
            </div>
            <p className="text-[10px] text-[#71717a] font-medium leading-relaxed group-hover:text-white/60 transition-colors">
              Handling high-complexity digital labor through parallel tool execution. 
              The engine manages file I/O, web recon, and terminal commands in a unified loop.
            </p>
          </Link>
        </div>
      </section>

      {/* ─── ENGINEERING EXCELLENCE CARDS ─── */}
      <section className="py-60 grid-container border-b border-[#27272a]">
        <div className="mb-40">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] mb-6 text-[#3f3f46]">Engineering Excellence</h2>
          <h3 className="text-4xl md:text-7xl font-bold tracking-tight mb-8 uppercase">Beyond The Interface.</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#27272a] border border-[#27272a]">
          <Link href="/features#sovereignty" className="bg-black p-20 hover:bg-white hover:text-black transition-all group relative overflow-hidden flex flex-col justify-between min-h-[500px]">
             <img src="/screenshots/vnmx_auth_neural_login.png" className="absolute right-0 top-0 w-80 grayscale opacity-5 group-hover:opacity-10 transition-all duration-1000 group-hover:scale-110" />
             <div className="relative z-10">
                <div className="w-16 h-16 border border-[#27272a] group-hover:border-black flex items-center justify-center mb-16">
                   <Shield className="w-6 h-6" />
                </div>
                <h4 className="text-4xl font-bold mb-8 uppercase tracking-tighter">Sovereign Autonomy</h4>
                <p className="text-sm text-[#71717a] group-hover:text-black font-medium leading-relaxed max-w-sm">Local-first engine. Every reasoning loop happens within your secure infrastructure, ensuring absolute data ownership via neural-encrypted credentials.</p>
             </div>
             <div className="relative z-10 mt-12 flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                Explore Sovereignty <ArrowRight className="w-3 h-3" />
             </div>
          </Link>
          
          <Link href="/features#agency" className="bg-black p-20 hover:bg-white hover:text-black transition-all group relative overflow-hidden flex flex-col justify-between min-h-[500px]">
             <img src="/screenshots/vnmx_dashboard_neural_interface.png" className="absolute right-0 top-0 w-80 grayscale opacity-5 group-hover:opacity-10 transition-all duration-1000 group-hover:scale-110" />
             <div className="relative z-10">
                <div className="w-16 h-16 border border-[#27272a] group-hover:border-black flex items-center justify-center mb-16">
                   <CpuIcon className="w-6 h-6" />
                </div>
                <h4 className="text-4xl font-bold mb-8 uppercase tracking-tighter">System-Level Agency</h4>
                <p className="text-sm text-[#71717a] group-hover:text-black font-medium leading-relaxed max-w-sm">Direct interaction with OS-level primitives. VenomX operates your terminal, file systems, and networks with administrative authority.</p>
             </div>
             <div className="relative z-10 mt-12 flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                Explore Agency <ArrowRight className="w-3 h-3" />
             </div>
          </Link>

          <Link href="/features#self-healing" className="bg-black p-20 hover:bg-white hover:text-black transition-all group flex flex-col justify-between min-h-[400px]">
             <div>
                <div className="w-16 h-16 border border-[#27272a] group-hover:border-black flex items-center justify-center mb-16">
                   <RefreshCcw className="w-6 h-6" />
                </div>
                <h4 className="text-4xl font-bold mb-8 uppercase tracking-tighter">Recursive Self-Healing</h4>
                <p className="text-sm text-[#71717a] group-hover:text-black font-medium leading-relaxed max-w-md">Advanced error-correction loops. If a logical path fails, the engine autonomously identifies the bottleneck and re-executes with refined parameters.</p>
             </div>
             <div className="mt-12 flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                View Protocol <ArrowRight className="w-3 h-3" />
             </div>
          </Link>

          <Link href="/features#swarms" className="bg-black p-20 hover:bg-white hover:text-black transition-all group flex flex-col justify-between min-h-[400px]">
             <div>
                <div className="w-16 h-16 border border-[#27272a] group-hover:border-black flex items-center justify-center mb-16">
                   <Layers className="w-6 h-6" />
                </div>
                <h4 className="text-4xl font-bold mb-8 uppercase tracking-tighter">High-Concurrency Swarms</h4>
                <p className="text-sm text-[#71717a] group-hover:text-black font-medium leading-relaxed max-w-md">A master orchestrator. Deploy hundreds of specialized sub-agents into a coordinated swarm, sharing collective memory and processing power.</p>
             </div>
             <div className="mt-12 flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                Examine Nodes <ArrowRight className="w-3 h-3" />
             </div>
          </Link>
        </div>
      </section>

      {/* ─── INFRASTRUCTURE & ORCHESTRATION ─── */}
      <section className="py-60 bg-[#050505] border-b border-[#27272a]">
        <div className="grid-container mb-40 text-center">
           <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] mb-6 text-[#3f3f46]">The Engine Room</h2>
           <h3 className="text-4xl md:text-7xl font-bold tracking-tight mb-12 uppercase">Infrastructure.</h3>
        </div>

        <div className="grid-container grid grid-cols-1 md:grid-cols-3 gap-px bg-[#27272a] border border-[#27272a]">
           <Link href="/features#telemetry" className="bg-black p-12 group hover:bg-zinc-900 transition-all flex flex-col justify-between min-h-[500px]">
              <div>
                <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-[#3f3f46] mb-8 block group-hover:text-white transition-colors">Hardware Agency</span>
                <div className="aspect-square mb-12 overflow-hidden border border-white/5 bg-zinc-950">
                   <img 
                     src="/screenshots/vnmx_system_telemetry_live_monitoring.png" 
                     alt="System Telemetry" 
                     className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                   />
                </div>
                <h4 className="text-xl font-bold uppercase tracking-tighter mb-4">Telemetry Stream</h4>
                <p className="text-[10px] text-[#71717a] leading-relaxed group-hover:text-white/40">Direct monitoring of local hardware primitives including CPU load and RAM allocation.</p>
              </div>
           </Link>
           
           <Link href="/features#routing" className="bg-black p-12 group hover:bg-zinc-900 transition-all flex flex-col justify-between min-h-[500px]">
              <div>
                <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-[#3f3f46] mb-8 block group-hover:text-white transition-colors">Model Routing</span>
                <div className="aspect-square mb-12 overflow-hidden border border-white/5 bg-zinc-950">
                   <img 
                     src="/screenshots/vnmx_performance_routing_engine.png" 
                     alt="Performance Routing" 
                     className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                   />
                </div>
                <h4 className="text-xl font-bold uppercase tracking-tighter mb-4">Thread Orchestration</h4>
                <p className="text-[10px] text-[#71717a] leading-relaxed group-hover:text-white/40">Dynamic task distribution across local vision cores and logic threads for maximum efficiency.</p>
              </div>
           </Link>

           <Link href="/features#failover" className="bg-black p-12 group hover:bg-zinc-900 transition-all flex flex-col justify-between min-h-[500px]">
              <div>
                <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-[#3f3f46] mb-8 block group-hover:text-white transition-colors">Multi-Model Failover</span>
                <div className="aspect-square mb-12 overflow-hidden border border-white/5 bg-zinc-950">
                   <img 
                     src="/screenshots/vnmx_settings_model_orchestration.png" 
                     alt="Model Orchestration" 
                     className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                   />
                </div>
                <h4 className="text-xl font-bold uppercase tracking-tighter mb-4">Failover Protocol</h4>
                <p className="text-[10px] text-[#71717a] leading-relaxed group-hover:text-white/40">Seamlessly route between 10+ cloud and local LLM nodes based on task complexity.</p>
              </div>
           </Link>
        </div>
      </section>

      {/* ─── COGNITIVE MEMORY ─── */}
      <section className="py-60 grid-container border-b border-[#27272a]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-40 items-center">
           <Link href="/framework#vault" className="order-2 lg:order-1 relative group block overflow-hidden">
              <img 
                src="/screenshots/vnmx_knowledge_vault_execution_history.png" 
                alt="Knowledge Vault" 
                className="w-full grayscale group-hover:grayscale-0 transition-all duration-1000 border border-white/5 group-hover:scale-105"
              />
              <div className="absolute top-8 left-8 text-[10px] font-mono text-emerald-500 bg-emerald-500/10 px-4 py-2 uppercase tracking-widest">Audit-Grade Recall</div>
           </Link>
           <div className="order-1 lg:order-2">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] mb-6 text-[#3f3f46]">Cognitive Pipeline</h2>
              <h3 className="text-4xl md:text-7xl font-bold tracking-tight mb-8 uppercase leading-none">The Knowledge <br /> Vault.</h3>
              <p className="text-[#71717a] text-lg font-medium leading-relaxed mb-12">
                 VenomX utilizes a 9-tier memory architecture. The Knowledge Vault stores 
                 every mission loop and execution history, providing perfect episodic 
                 recall for audit and optimization.
              </p>
              <Link href="/framework" className="text-[10px] font-bold uppercase tracking-[0.5em] text-white flex items-center gap-4 group">
                 Explore Memory Tiers <ArrowRight className="w-3 h-3 group-hover:translate-x-2 transition-transform" />
              </Link>
           </div>
        </div>
      </section>

      {/* ─── SURVIVAL & SKILL LOGIC ─── */}
      <section className="py-60 bg-black border-b border-[#27272a]">
        <div className="grid-container grid grid-cols-1 lg:grid-cols-2 gap-40 items-center">
           <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] mb-6 text-[#3f3f46]">Operational Logic</h2>
              <h3 className="text-4xl md:text-7xl font-bold tracking-tight mb-8 uppercase leading-none">The Claws <br /> Framework.</h3>
              <p className="text-[#71717a] text-lg font-medium leading-relaxed mb-16">
                 Built with axiomatic safety. The Claws framework manages the agent's 
                 survival metrics and multi-sensory skill matrix.
              </p>
              <div className="grid grid-cols-2 gap-12">
                 <Link href="/features#skills" className="group">
                    <div className="aspect-video mb-6 overflow-hidden border border-white/5">
                       <img 
                         src="/screenshots/vnmx_skill_matrix_ecosystem.png" 
                         alt="Skill Matrix" 
                         className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                       />
                    </div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#3f3f46] group-hover:text-white transition-colors">Skill Matrix Ecosystem</h4>
                 </Link>
                 <Link href="/features#multimodal" className="group">
                    <div className="aspect-video mb-6 overflow-hidden border border-white/5">
                       <img 
                         src="/screenshots/vnmx_voice_integrations_config.png" 
                         alt="Voice Config" 
                         className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                       />
                    </div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#3f3f46] group-hover:text-white transition-colors">Multi-Sensory Input</h4>
                 </Link>
              </div>
           </div>

           <Link href="/features#survival" className="relative border border-[#27272a] aspect-square flex flex-col font-mono text-[11px] text-[#3f3f46] overflow-hidden group bg-zinc-950 p-16 hover:border-white/20 transition-all">
              <div className="bg-noir-grid absolute inset-0 opacity-5" />
              <img 
                src="/screenshots/vnmx_survival_dashboard_agi_health.png" 
                alt="AGI Health" 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 group-hover:opacity-60 transition-all duration-1000 z-0"
              />
              <div className="relative z-10 flex-1 flex flex-col justify-between">
                 <div className="space-y-8 relative">
                    <img src="/screenshots/vnmx_neural_dashboard_status_overlay.png" className="absolute -right-20 -top-20 w-64 border border-white/10 shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-1000 z-20" />
                    <span className="text-white"># Protocol: Axiomatic Survival</span><br />
                    <span>{"[OK] AGI Health: Peak Performance"}</span><br />
                    <span className="text-white">{"$ claws --execute-labor --sovereign"}</span><br />
                    <span>{"[SUCCESS] Mission parameters verified."}</span>
                 </div>
                 <div className="mt-auto border-t border-white/5 pt-12 flex items-center justify-between uppercase tracking-widest text-[9px] font-bold">
                    <span>AGI Core | Claws v2.0</span>
                    <span className="flex items-center gap-2 group-hover:text-white transition-colors"><div className="w-2 h-2 bg-emerald-500 rounded-full" /> View Status</span>
                 </div>
              </div>
           </Link>
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
      {/* ─── Page Navigation ─── */}
      <PageNavigation />
    </div>
  );
}
