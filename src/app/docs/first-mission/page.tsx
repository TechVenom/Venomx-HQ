"use client";

import React from "react";
import { Flag, Terminal, CheckCircle2 } from "lucide-react";
import { PageNavigation } from "@/components/PageNavigation";

export default function FirstMissionPage() {
  return (
    <div className="space-y-16">
      <header>
        <h1 className="text-5xl font-extrabold tracking-tighter mb-6 uppercase">First Mission</h1>
        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
          Learn how to define, deploy, and monitor your first autonomous objective.
        </p>
      </header>

      <section className="space-y-12">
        <div className="prose prose-invert max-w-none text-slate-400 space-y-6">
          <p>
            In VenomX, everything is a **Mission**. A mission is a high-level goal that the 
            agent decomposes into executable sub-tasks.
          </p>
          <h2 className="text-2xl font-bold text-white uppercase mt-12">1. Defining the Objective</h2>
          <p>
            A clear mission statement is key. Avoid vague requests; instead, provide specific 
            criteria for success.
          </p>
          <div className="bg-slate-900 p-8 border border-white/5 font-mono text-sm">
             Mission: "Research the latest security vulnerabilities in Next.js 15, 
             summarize them in a markdown file, and suggest refactors for our current 
             authentication middleware."
          </div>

          <h2 className="text-2xl font-bold text-white uppercase mt-12">2. Deployment</h2>
          <p>Execute the mission through the CLI or the Neural Interface.</p>
          <div className="bg-black p-4 border border-white/5 font-mono text-xs text-emerald-400">
             venomx mission create "Next.js Security Audit" --priority=high
          </div>

          <h2 className="text-2xl font-bold text-white uppercase mt-12">3. Monitoring</h2>
          <p>Watch the agent reasoning and executing tool calls in the live log stream.</p>
        </div>
      </section>

      <div className="p-12 border border-emerald-500/10 bg-emerald-500/5 rounded-sm space-y-6">
         <div className="flex items-center gap-4 text-emerald-400">
            <CheckCircle2 className="w-6 h-6" />
            <h3 className="font-bold uppercase tracking-widest text-sm">Mission Success Criteria</h3>
         </div>
         <p className="text-xs text-slate-400 leading-relaxed">
            The mission is considered "Complete" only when all sub-tasks reach a terminal 
            state and the agent confirms the final output against your original criteria.
         </p>
      </div>

      <PageNavigation />
    </div>
  );
}
