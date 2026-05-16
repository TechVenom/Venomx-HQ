"use client";

import React from "react";
import Link from "next/link";
import { PageNavigation } from "@/components/PageNavigation";
import { InfoBox, DocsTable } from "@/components/docs/DocsComponents";
import { ExternalLink, CheckCircle2 } from "lucide-react";

export default function LearningPathPage() {
  return (
    <div className="space-y-16">
      <header className="space-y-4">
        <h1 className="text-5xl font-extrabold tracking-tighter text-white uppercase">Learning Path</h1>
        <p className="text-xl text-slate-400 leading-relaxed max-w-3xl">
          New to VenomX? Follow the path that best matches your goals and experience level. 
          Each path is designed to take you from a curious observer to a sovereign operator.
        </p>
      </header>

      <InfoBox type="info" title="How to Use This Page">
        <ul className="list-disc pl-4 space-y-1">
          <li>Find your experience level in the table below and follow the reading order.</li>
          <li>Have a specific goal? Skip to the <strong>By Use Case</strong> section.</li>
          <li>Just browsing? Check the <strong>Key Features</strong> table for a quick overview.</li>
        </ul>
      </InfoBox>

      <section>
        <h2 className="text-2xl font-bold text-white mb-8 uppercase tracking-tight">By Experience Level</h2>
        <DocsTable 
          headers={["Level", "Goal", "Recommended Reading", "Time Estimate"]}
          rows={[
            [
              <span className="font-bold text-white">Beginner</span>,
              "Get up and running, have basic conversations, use built-in tools.",
              <div className="flex flex-col gap-1">
                <Link href="/docs/install" className="text-[#facc15] hover:underline">Installation</Link>
                <Link href="/docs/quickstart" className="text-[#facc15] hover:underline">Quickstart</Link>
                <Link href="/docs/first-mission" className="text-[#facc15] hover:underline">First Mission</Link>
              </div>,
              "~30 mins"
            ],
            [
              <span className="font-bold text-white">Intermediate</span>,
              "Set up messaging bots, use advanced features like memory and swarms.",
              <div className="flex flex-col gap-1">
                <Link href="/docs/channels" className="text-[#facc15] hover:underline">Channels</Link>
                <Link href="/docs/memory" className="text-[#facc15] hover:underline">Memory Stack</Link>
                <Link href="/docs/swarms" className="text-[#facc15] hover:underline">Swarm Orchestration</Link>
              </div>,
              "1–2 hours"
            ],
            [
              <span className="font-bold text-white">Advanced</span>,
              "Build custom skills, create complex swarms, contribute to the core.",
              <div className="flex flex-col gap-1">
                <Link href="/docs/custom-skills" className="text-[#facc15] hover:underline">Custom Skills</Link>
                <Link href="/docs/api" className="text-[#facc15] hover:underline">API Reference</Link>
                <Link href="/docs/architecture" className="text-[#facc15] hover:underline">Architecture</Link>
              </div>,
              "4–6 hours"
            ]
          ]}
        />
      </section>

      <section className="space-y-12">
        <h2 className="text-2xl font-bold text-white uppercase tracking-tight border-b border-white/5 pb-4">By Use Case</h2>
        
        <div className="space-y-10">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#facc15]">"I want a CLI coding assistant"</h3>
            <p className="text-sm text-slate-400">The fastest way to use VenomX on your local machine for coding and automation.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["Installation", "Quickstart", "Tool System", "First Mission", "Custom Skills"].map(item => (
                <div key={item} className="flex items-center gap-2 text-xs text-white bg-white/5 px-4 py-2 border border-white/10 rounded-sm">
                  <CheckCircle2 className="w-3 h-3 text-[#facc15]" /> {item}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#facc15]">"I want a Telegram/Discord bot"</h3>
            <p className="text-sm text-slate-400">Deploy VenomX as a persistent assistant you can talk to from anywhere.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["Installation", "Channel Setup", "Memory Stack", "Survival Axioms", "Mission Reports"].map(item => (
                <div key={item} className="flex items-center gap-2 text-xs text-white bg-white/5 px-4 py-2 border border-white/10 rounded-sm">
                  <CheckCircle2 className="w-3 h-3 text-[#facc15]" /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-white/5 space-y-8">
        <h2 className="text-2xl font-bold text-white uppercase tracking-tight">What to Read Next</h2>
        <div className="space-y-2">
          {[
            { label: "Lost? Jump to the", target: "Learning Path", href: "/docs/learning-path" },
            { label: "Want to contribute?", target: "Developer Guide", href: "/docs/api" },
            { label: "Curious about the engine?", target: "Core Architecture", href: "/docs/architecture" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-slate-400">
              <span className="w-1 h-1 bg-white/20 rounded-full" />
              {item.label} <Link href={item.href} className="text-[#facc15] font-bold hover:underline">{item.target}</Link>
            </div>
          ))}
        </div>
      </section>

      <PageNavigation />
    </div>
  );
}
