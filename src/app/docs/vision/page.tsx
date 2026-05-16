"use client";

import React from "react";
import { Eye, Monitor, Camera, Image, Scan } from "lucide-react";
import { PageNavigation } from "@/components/PageNavigation";
import { InfoBox, DocsTable } from "@/components/docs/DocsComponents";

export default function VisionPage() {
  return (
    <div className="space-y-16">
      <header className="space-y-4">
        <h1 className="text-5xl font-extrabold tracking-tighter text-white uppercase">Vision & Cortex</h1>
        <p className="text-xl text-slate-400 leading-relaxed max-w-3xl">
          Empower your agent to see. VenomX Vision enables real-time screen analysis, 
          image recognition, and visual multi-modal reasoning.
        </p>
      </header>

      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Capabilities</h2>
        <DocsTable 
          headers={["Feature", "Operational Capability"]}
          rows={[
            ["Screen Perception", "Periodic screenshots of the local system for contextual awareness."],
            ["Image Analysis", "High-fidelity reasoning on uploaded images or web captures."],
            ["UI Element Mapping", "Automatic identification of buttons, inputs, and layout structures."],
            ["Vision Loops", "Continuous visual monitoring for specific triggers or changes."]
          ]}
        />
      </section>

      <InfoBox type="warning" title="Privacy Axiom">
        Vision features are disabled by default. When enabled, all screen captures are 
        processed locally or through your encrypted sovereign tunnel. No visual data 
        is stored in persistent cloud logs without explicit permission.
      </InfoBox>

      <section className="space-y-12 py-12 border-t border-white/5">
        <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Visual Reasoning Example</h2>
        <div className="bg-slate-900 p-8 border border-white/5 rounded-sm">
          <p className="text-xs text-slate-500 font-mono mb-4"># Command: "Look at my VS Code and tell me why the build is failing"</p>
          <div className="bg-black/40 p-4 border border-white/10 text-emerald-400 font-mono text-xs">
            [Vision] Capture initiated... <br />
            [Vision] Analysis: Error on line 42 of utils.py (Missing semicolon). <br />
            [Cortex] Suggesting fix: add ';' at the end of line 42.
          </div>
        </div>
      </section>

      <PageNavigation />
    </div>
  );
}
