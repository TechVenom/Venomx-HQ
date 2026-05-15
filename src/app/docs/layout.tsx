"use client";

import React from "react";
import Link from "next/link";
import { Search, ChevronRight, Menu, Book, Code, Cpu, Shield, Zap } from "lucide-react";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sidebarItems = [
    {
      category: "Getting Started",
      items: [
        { name: "Introduction", href: "/docs" },
        { name: "Installation", href: "/docs/install" },
        { name: "Quick Start", href: "/docs/quickstart" },
        { name: "First Mission", href: "/docs/first-mission" },
      ]
    },
    {
      category: "Core Concepts",
      items: [
        { name: "Memory Stack", href: "/docs/memory" },
        { name: "Tool System", href: "/docs/tools" },
        { name: "Autonomous Loops", href: "/docs/autonomy" },
        { name: "Survival Axioms", href: "/docs/safety" },
      ]
    },
    {
      category: "Advanced",
      items: [
        { name: "Custom Skills", href: "/docs/custom-skills" },
        { name: "Swarm Orchestration", href: "/docs/swarms" },
        { name: "Multi-Channel Setup", href: "/docs/channels" },
        { name: "API Reference", href: "/docs/api" },
      ]
    }
  ];

  return (
    <div className="flex min-h-screen bg-black text-slate-200">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-80 flex-col border-r border-white/5 fixed inset-y-0 left-0 pt-20 bg-slate-950/30 backdrop-blur-sm">
        <div className="p-6">
          <div className="relative group">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-white transition-colors" />
            <input 
              type="text" 
              placeholder="Search docs..." 
              className="w-full bg-white/5 border border-white/10 py-2 pl-10 pr-4 text-xs focus:outline-none focus:border-white transition-all"
            />
          </div>
        </div>
        
        <nav className="flex-1 overflow-y-auto px-6 py-4 space-y-10">
          {sidebarItems.map((cat, i) => (
            <div key={i}>
              <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4 px-2">{cat.category}</h4>
              <ul className="space-y-1">
                {cat.items.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-white hover:text-black transition-all"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="p-6 border-t border-white/5">
          <div className="flex items-center gap-3 p-4 border border-white/10">
            <Zap className="w-4 h-4 text-white" />
            <div>
              <p className="text-[10px] font-bold text-white uppercase tracking-tight">Need help?</p>
              <a href="#" className="text-[10px] text-[#a1a1aa] font-bold hover:underline">Join Discord</a>
            </div>
          </div>
        </div>
      </aside>

      {/* Content */}
      <div className="lg:pl-80 flex-1 flex flex-col pt-20">
        <main className="p-8 md:p-16 max-w-4xl">
          {children}
        </main>
      </div>
    </div>
  );
}
