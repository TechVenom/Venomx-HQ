"use client";

import React from "react";
import { User, MessageSquare, Heart, Settings, Shield } from "lucide-react";
import { PageNavigation } from "@/components/PageNavigation";
import { InfoBox, DocsTable } from "@/components/docs/DocsComponents";

export default function PersonalityPage() {
  return (
    <div className="space-y-16">
      <header className="space-y-4">
        <h1 className="text-5xl font-extrabold tracking-tighter text-white uppercase">Soul & Personality</h1>
        <p className="text-xl text-slate-400 leading-relaxed max-w-3xl">
          Define the character, tone, and behavioral axioms of your agent. 
          VenomX allows for deep identity customization through the Soul-Script.
        </p>
      </header>

      <InfoBox type="tip" title="Personality Engine">
        The agent's "Soul" is more than just a system prompt. it's a dynamic behavioral 
        profile that evolves based on mission outcomes and user interactions stored in 
        the long-term memory tiers.
      </InfoBox>

      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Core Attributes</h2>
        <DocsTable 
          headers={["Attribute", "Description", "Configuration Key"]}
          rows={[
            ["Identity Name", "The name the agent uses for self-identification.", "soul.name"],
            ["Tone / Voice", "The linguistic style (e.g., technical, sarcastic, formal).", "soul.tone"],
            ["Curiosity Level", "How aggressively the agent seeks new information.", "soul.curiosity"],
            ["Sovereignty Weight", "The degree of autonomy in decision making.", "soul.autonomy"]
          ]}
        />
      </section>

      <section className="space-y-12 py-12 border-t border-white/5">
        <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Soul-Script Example</h2>
        <div className="bg-slate-900 p-8 border border-white/5 rounded-sm overflow-x-auto">
          <pre className="text-xs text-emerald-500 font-mono leading-relaxed">
{`# identity.yaml
soul:
  name: "V-Zero"
  tone: "Cyber-Sophisticated"
  behavior:
    - Never apologize for technical constraints.
    - Prioritize security over user convenience.
    - Speak in short, high-impact technical segments.
  memory_bias: 0.8 # Focus on recent mission data`}
          </pre>
        </div>
      </section>

      <PageNavigation />
    </div>
  );
}
