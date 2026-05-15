"use client";

import React from "react";
import { MessageSquare, Send, Hash, Globe } from "lucide-react";
import { PageNavigation } from "@/components/PageNavigation";

export default function ChannelsPage() {
  const channels = [
    { name: "Telegram", status: "Native", icon: Send },
    { name: "Discord", status: "Native", icon: Hash },
    { name: "WhatsApp", status: "Bridge", icon: MessageSquare },
    { name: "X (Twitter)", status: "API-Link", icon: Globe }
  ];

  return (
    <div className="space-y-16">
      <header>
        <h1 className="text-5xl font-extrabold tracking-tighter mb-6 uppercase">Multi-Channel Setup</h1>
        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
          Connect VenomX to your preferred communication platforms for remote orchestration 
          and status reporting.
        </p>
      </header>

      <section className="space-y-12">
        <div className="prose prose-invert max-w-none text-slate-400">
          <p>
            VenomX is not confined to a single dashboard. You can interact with the agent 
            through multiple messaging and social channels, allowing you to trigger missions 
            and receive high-fidelity reports from anywhere.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#27272a] border border-[#27272a]">
           {channels.map((chan, i) => (
             <div key={i} className="bg-black p-8 hover:bg-white hover:text-black transition-all group text-center">
                <chan.icon className="w-10 h-10 mx-auto mb-6 text-[#3f3f46] group-hover:text-black" />
                <h3 className="font-bold uppercase tracking-widest text-sm mb-2">{chan.name}</h3>
                <span className="text-[10px] font-mono opacity-40">{chan.status}</span>
             </div>
           ))}
        </div>
      </section>

      <section className="py-12 border-t border-white/5 space-y-8">
        <h2 className="text-2xl font-bold uppercase tracking-tight">Channel Authorization</h2>
        <p className="text-sm text-slate-400 leading-relaxed">
           Each channel requires a unique authorization token. Securely register your 
           tokens using the encrypted secret vault.
        </p>
        <div className="bg-slate-900 p-6 border border-white/5">
           <div className="bg-black p-4 font-mono text-xs text-slate-300">
             venomx secrets set TELEGRAM_BOT_TOKEN="xxxx-xxxx-xxxx"
           </div>
        </div>
      </section>

      <PageNavigation />
    </div>
  );
}
