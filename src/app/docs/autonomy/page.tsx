"use client";

import React from "react";
import { RefreshCcw, Command, Zap, Activity } from "lucide-react";
import { PageNavigation } from "@/components/PageNavigation";

export default function AutonomyDocsPage() {
  const features = [
    { title: "Self-Healing", desc: "Automatic identification and correction of execution errors.", icon: RefreshCcw },
    { title: "Goal Persistence", desc: "The agent remains focused on the long-term objective through sub-task failures.", icon: Activity },
    { title: "Dynamic Scaling", desc: "Allocates more processing power to complex reasoning nodes as needed.", icon: Zap },
    { title: "State Recovery", desc: "Full state snapshots allow the engine to resume from power loss instantly.", icon: Command }
  ];

  return (
    <div className="space-y-16">
      <header>
        <h1 className="text-5xl font-extrabold tracking-tighter mb-6 uppercase">Autonomous Loops</h1>
        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
          Deep dive into the recursive execution engine that allows VenomX to solve 
          complex problems without constant human intervention.
        </p>
      </header>

      <section className="space-y-12">
        <div className="prose prose-invert max-w-none text-slate-400">
          <p>
            At the heart of VenomX is the **Neural Loop**. This is not a linear script, but a 
            recursive cycle of Perception, Reasoning, and Action. The loop continues until 
            the "Goal Metric" is met or an unrecoverable safety axiom is triggered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-8 border border-white/5 bg-zinc-950 hover:border-white/20 transition-all">
               <div className="w-10 h-10 border border-[#27272a] flex items-center justify-center mb-6">
                  <f.icon className="w-5 h-5 text-white" />
               </div>
               <h3 className="font-bold uppercase tracking-widest text-white mb-4">{f.title}</h3>
               <p className="text-xs text-[#71717a] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 border-t border-white/5 space-y-8">
        <h2 className="text-2xl font-bold uppercase tracking-tight">Loop Configuration</h2>
        <p className="text-slate-400 text-sm leading-relaxed">
           You can tune the intensity of the autonomous loop based on the risk profile of 
           the mission. Higher levels allow for more aggressive parallelization and 
           self-correction attempts.
        </p>
        <div className="bg-slate-900 p-4 font-mono text-xs text-white border border-white/5 inline-block">
          venomx run --autonomy-level=max --max-iterations=25
        </div>
      </section>

      <PageNavigation />
    </div>
  );
}
