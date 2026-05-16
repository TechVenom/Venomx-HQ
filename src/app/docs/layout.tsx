"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ChevronRight, Menu, Book, Code, Cpu, Shield, Zap, Terminal, MessageSquare, Layers, Globe, History, Activity } from "lucide-react";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  const sidebarItems = [
    {
      category: "User Stories & Use Cases",
      items: [
        { name: "Learning Path", href: "/docs/learning-path" },
        { name: "Case Studies", href: "/docs/cases" },
      ]
    },
    {
      category: "Getting Started",
      items: [
        { name: "Introduction", href: "/docs" },
        { name: "Quickstart", href: "/docs/quickstart" },
        { name: "Installation", href: "/docs/install" },
        { name: "Android / Termux", href: "/docs/install#android" },
        { name: "Nix & NixOS Setup", href: "/docs/install#nix" },
        { name: "Updating & Uninstalling", href: "/docs/install#maintenance" },
      ]
    },
    {
      category: "Core Features",
      items: [
        { name: "Memory Stack", href: "/docs/memory" },
        { name: "Tool System (Claws)", href: "/docs/tools" },
        { name: "Autonomous Loops", href: "/docs/autonomy" },
        { name: "Survival Axioms", href: "/docs/safety" },
      ]
    },
    {
      category: "Messaging Platforms",
      items: [
        { name: "Telegram Bot", href: "/docs/channels#telegram" },
        { name: "Discord Integration", href: "/docs/channels#discord" },
        { name: "WhatsApp Bridge", href: "/docs/channels#whatsapp" },
      ]
    },
    {
      category: "Developer Hub",
      items: [
        { name: "Custom Skills", href: "/docs/custom-skills" },
        { name: "Swarm Orchestration", href: "/docs/swarms" },
        { name: "Multi-Channel Setup", href: "/docs/channels" },
        { name: "API Reference", href: "/docs/api" },
        { name: "Architecture", href: "/docs/architecture" },
      ]
    },
    {
      category: "Guides & Tutorials",
      items: [
        { name: "Soul & Personality", href: "/docs/personality" },
        { name: "Vision & Cortex", href: "/docs/vision" },
        { name: "Voice Workflows", href: "/docs/voice" },
        { name: "MCP Integration", href: "/docs/mcp" },
      ]
    }
  ];

  return (
    <div className="flex min-h-screen bg-black text-slate-200">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-80 flex-col border-r border-white/5 fixed inset-y-0 left-0 pt-20 bg-slate-950/20 backdrop-blur-md">
        <div className="p-6">
          <div className="relative group">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-[#facc15] transition-colors" />
            <input 
              type="text" 
              placeholder="Search docs... (Ctrl+K)" 
              className="w-full bg-white/5 border border-white/10 py-2 pl-10 pr-4 text-xs focus:outline-none focus:border-[#facc15]/50 transition-all rounded-sm"
            />
          </div>
        </div>
        
        <nav className="flex-1 overflow-y-auto px-6 py-4 space-y-10 custom-scrollbar">
          {sidebarItems.map((cat, i) => (
            <div key={i}>
              <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4 px-2">{cat.category}</h4>
              <ul className="space-y-1">
                {cat.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.name}>
                      <Link 
                        href={item.href}
                        className={`flex items-center gap-2 px-3 py-2 text-sm transition-all border-l-2 ${
                          isActive 
                            ? "bg-[#facc15]/10 text-[#facc15] border-[#facc15] font-medium" 
                            : "text-slate-400 border-transparent hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        <div className="p-6 border-t border-white/5 bg-black/40">
          <div className="flex items-center gap-3 p-4 border border-white/10 rounded-sm group hover:border-[#facc15]/30 transition-colors">
            <Zap className="w-4 h-4 text-[#facc15]" />
            <div>
              <p className="text-[10px] font-bold text-white uppercase tracking-tight">System Status</p>
              <span className="text-[10px] text-emerald-500 font-bold flex items-center gap-1">
                <span className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse" />
                Sovereign Core Online
              </span>
            </div>
          </div>
        </div>
      </aside>

      {/* Content */}
      <div className="lg:pl-80 flex-1 flex flex-col pt-20">
        <main className="p-8 md:p-16 max-w-5xl mx-auto w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
