"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Brain, 
  Database, 
  Command, 
  Search, 
  Activity, 
  Shield,
  Zap,
  Check,
  Cpu,
  Layers,
  Globe,
  RefreshCcw,
  CpuIcon,
  Lock,
  Workflow
} from "lucide-react";

export default function FeaturesPage() {
  const agiFeatures = [
    {
      title: "Sovereign Autonomy",
      icon: Lock,
      features: [
        { name: "Local Reasoning", desc: "No reliance on third-party cloud APIs. All inference and logic stay within your VPC/Local node." },
        { name: "Absolute Privacy", desc: "User-owned data vaults ensure that sensitive project information never leaves your environment." },
        { name: "Offline Agency", desc: "The engine maintains goal-oriented execution even in isolated, air-gapped environments." },
        { name: "Zero Latency", desc: "Bypass the lag of external cloud processing with immediate system-level execution." }
      ]
    },
    {
      title: "Recursive Self-Healing",
      icon: RefreshCcw,
      features: [
        { name: "Autonomous Debugging", desc: "If an execution path fails, the engine analyzes the stack trace and refines its approach." },
        { name: "Logic Optimization", desc: "Automatically optimizes its internal reasoning chains to reduce token usage and speed." },
        { name: "Adaptive Tooling", desc: "Agents generate and fix their own 'Claws' (tools) to fit changing environment requirements." },
        { name: "Error Recovery", desc: "Built-in resilience allows the system to pivot mission strategies without human help." }
      ]
    },
    {
      title: "9-Tier Memory Architecture",
      icon: Database,
      features: [
        { name: "Sensory & Working", desc: "Real-time stream processing of environment data and transient task-specific buffers." },
        { name: "Episodic Recall", desc: "Comprehensive chronological record of past mission cycles for historical analysis." },
        { name: "Procedural Mastery", desc: "Skill-based execution logic stored and refined through every successful mission." },
        { name: "Meta-memory", desc: "Reflective understanding of the engine's own cognitive state and learning progress." }
      ]
    },
    {
      title: "Multi-Agent Swarms",
      icon: Layers,
      features: [
        { name: "Collective Intelligence", desc: "Synchronized knowledge sharing across distributed autonomous nodes." },
        { name: "Parallel Tasking", desc: "Decompose massive problems into smaller tasks handled by specialized agents." },
        { name: "Decentralized Nodes", desc: "Deploy nodes globally while maintaining a unified goal-oriented strategy." },
        { name: "Swarm Orchestration", desc: "Sophisticated management of node resources for maximum throughput." }
      ]
    }
  ];

  return (
    <div className="pt-48 pb-40 bg-black min-h-screen selection:bg-white selection:text-black">
      <section className="grid-container mb-40">
        <div className="max-w-3xl">
          <h1 className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#3f3f46] mb-12">AGI Core Framework</h1>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-12 uppercase leading-none">The Sovereign <br /> Engine.</h2>
          <p className="text-xl text-[#71717a] leading-relaxed font-medium">
            VenomX is a goal-oriented autonomous intelligence engine. Unlike chat-based assistants, 
            it is engineered for system-level agency and production-grade digital labor.
          </p>
        </div>
      </section>

      <section className="grid-container space-y-40">
        {agiFeatures.map((section, idx) => (
          <div key={idx}>
            <div className="flex items-center gap-6 mb-20 border-b border-[#27272a] pb-12">
              <div className="w-12 h-12 border border-[#27272a] flex items-center justify-center">
                <section.icon className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-3xl font-bold tracking-tighter uppercase tracking-widest">{section.title}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#27272a]">
              {section.features.map((feature, fIdx) => (
                <div key={fIdx} className="bg-black p-10 hover:bg-white hover:text-black transition-all group">
                  <h4 className="font-bold text-white mb-6 flex items-center gap-3 group-hover:text-black uppercase tracking-tight">
                    <Check className="w-3 h-3 opacity-30" />
                    {feature.name}
                  </h4>
                  <p className="text-xs text-[#71717a] group-hover:text-black leading-relaxed font-medium">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Swarm Section */}
      <section className="grid-container mt-60">
        <div className="border border-[#27272a] p-24 relative overflow-hidden group">
          <div className="bg-noir-grid absolute inset-0 opacity-10" />
          
          {/* Swarm Screenshot */}
          <img 
            src="/images/swarm-nodes.png" 
            alt="Swarm Nodes" 
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-10 group-hover:opacity-30 transition-all z-0"
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />

          <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
             <div className="w-16 h-16 border border-[#27272a] flex items-center justify-center mb-12 bg-black">
               <Globe className="w-6 h-6 text-white" />
             </div>
             <h3 className="text-4xl font-bold mb-8 uppercase tracking-tight">Collective Swarms.</h3>
             <p className="text-[#71717a] text-sm leading-relaxed mb-12 font-medium">
               Deploy multi-agent nodes across private infrastructure. VenomX orchestrates 
               synchronized intelligence, allowing nodes to share collective memory and 
               procedural knowledge in real-time.
             </p>
             <div className="flex gap-12 text-[10px] font-bold uppercase tracking-[0.4em] text-white">
                <span className="flex items-center gap-3"><div className="w-2 h-2 bg-white" /> Decentralized Nodes</span>
                <span className="flex items-center gap-3"><div className="w-2 h-2 bg-white" /> Shared Epidsodic Recall</span>
             </div>
          </div>
        </div>
      </section>

      {/* System Agency Block */}
      <section className="grid-container mt-60">
        <div className="border border-[#27272a] p-24 relative overflow-hidden">
          <div className="bg-noir-grid absolute inset-0 opacity-10" />
          <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
             <div className="w-16 h-16 border border-[#27272a] flex items-center justify-center mb-12">
               <Workflow className="w-6 h-6 text-white" />
             </div>
             <h3 className="text-4xl font-bold mb-8 uppercase tracking-tight">Outcome-Driven Agency.</h3>
             <p className="text-[#71717a] text-sm leading-relaxed mb-12 font-medium">
               VenomX does not just generate text; it solves for outcomes. By utilizing "Claws"—a 
               sophisticated library of system-level tools—the engine interacts directly with the 
               OS, the web, and private networks to complete complex, multi-stage missions autonomously.
             </p>
             <div className="flex gap-12 text-[10px] font-bold uppercase tracking-[0.4em] text-white">
                <span className="flex items-center gap-3"><div className="w-2 h-2 bg-white" /> OS Primitives</span>
                <span className="flex items-center gap-3"><div className="w-2 h-2 bg-white" /> Browser Autonomy</span>
                <span className="flex items-center gap-3"><div className="w-2 h-2 bg-white" /> Financial Protocols</span>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
