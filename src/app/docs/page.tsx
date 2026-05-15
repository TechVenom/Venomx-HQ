"use client";

import React from "react";
import { ArrowRight, Book, Terminal, Cpu, Shield, Zap } from "lucide-react";
import Link from "next/link";

export default function DocsPage() {
  const cards = [
    { title: "Installation", desc: "Set up the VENOMX runtime and environment.", icon: Terminal, href: "/docs/install" },
    { title: "Core Concepts", desc: "Learn about memory, tools, and autonomy.", icon: Book, href: "/docs/concepts" },
    { title: "Custom Skills", desc: "How to build and register new capabilities.", icon: Cpu, href: "/docs/custom-skills" },
    { title: "Security", desc: "Understanding survival axioms and safety.", icon: Shield, href: "/docs/safety" }
  ];

  return (
    <div className="space-y-16">
      <header>
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest mb-6">
          Documentation
        </div>
        <h1 className="text-5xl font-extrabold tracking-tighter mb-6">Welcome to the <br /> VENOMX Ecosystem.</h1>
        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
          Everything you need to build, deploy, and scale autonomous 
          sovereign intelligence swarms.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, i) => (
          <Link key={i} href={card.href} className="border border-[#27272a] p-8 group hover:border-white transition-all">
            <card.icon className="w-8 h-8 text-[#52525b] group-hover:text-white transition-colors mb-6" />
            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
            <p className="text-sm text-[#71717a] leading-relaxed mb-6">{card.desc}</p>
            <div className="text-xs font-bold uppercase tracking-widest text-white flex items-center gap-2 group-hover:gap-4 transition-all">
              Learn More <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        ))}
      </div>

      <section className="py-12 border-t border-white/5 space-y-8">
        <h2 className="text-3xl font-bold tracking-tight">Our Philosophy</h2>
        <div className="prose prose-invert max-w-none text-slate-400 leading-relaxed space-y-6">
          <p>
            VENOMX is built on the principle of **Sovereign Intelligence**. We believe that as AI 
            becomes more autonomous, it should remain under the absolute control and ownership 
            of the user.
          </p>
          <p>
            Unlike traditional cloud-based assistants, VENOMX is **Local-First**, **Modular**, 
            and **Self-Healing**. It doesn't just process text; it interacts with the physical 
            and digital world through its "Claws"—a specialized library of tools designed for 
            high-fidelity system execution.
          </p>
        </div>
        <div className="p-8 border border-white/10 flex items-center gap-6">
          <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-white">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold">Ready to start?</h4>
            <p className="text-sm text-slate-500">Go from zero to autonomous in less than 5 minutes.</p>
          </div>
          <Link href="/docs/install" className="ml-auto btn-noir btn-noir-primary px-6 py-2 text-xs uppercase tracking-widest">
            Quick Start
          </Link>
        </div>
      </section>
    </div>
  );
}
