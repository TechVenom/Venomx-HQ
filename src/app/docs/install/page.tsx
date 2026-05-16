"use client";

import React from "react";
import { Terminal, Copy, Check, Info, AlertTriangle } from "lucide-react";
import { PageNavigation } from "@/components/PageNavigation";
import { InfoBox, DocsTable } from "@/components/docs/DocsComponents";

export default function InstallPage() {
  const [copied, setCopied] = React.useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="space-y-16">
      <header className="space-y-4">
        <h1 className="text-5xl font-extrabold tracking-tighter text-white uppercase">Installation</h1>
        <p className="text-xl text-slate-400 leading-relaxed max-w-3xl">
          Deploy the VenomX engine across your infrastructure. Supports native execution 
          on all major platforms with optimized backends for local AI orchestration.
        </p>
      </header>

      <section id="quick-install" className="space-y-8">
        <h2 className="text-2xl font-bold text-white uppercase tracking-tight flex items-center gap-3">
          Quick Install
        </h2>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Linux / macOS / WSL2</label>
            <div className="relative group">
              <div className="bg-slate-900 p-4 font-mono text-sm text-[#facc15] border border-white/5 overflow-x-auto rounded-sm">
                curl -sSL https://get.venomx.ai | bash
              </div>
              <button 
                onClick={() => copyToClipboard("curl -sSL https://get.venomx.ai | bash", "curl-unix")}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/5 hover:bg-white/10 text-white rounded-sm opacity-0 group-hover:opacity-100 transition-all"
              >
                {copied === "curl-unix" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Windows (PowerShell)</label>
            <div className="relative group">
              <div className="bg-slate-900 p-4 font-mono text-sm text-slate-300 border border-white/5 overflow-x-auto rounded-sm">
                iwr https://get.venomx.ai/windows.ps1 -useb | iex
              </div>
              <button 
                onClick={() => copyToClipboard("iwr https://get.venomx.ai/windows.ps1 -useb | iex", "curl-win")}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/5 hover:bg-white/10 text-white rounded-sm opacity-0 group-hover:opacity-100 transition-all"
              >
                {copied === "curl-win" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </section>

      <InfoBox type="warning" title="Sovereign Notice">
        VenomX runs locally. For maximum performance and privacy, ensure you have <strong>Node.js 18+</strong> 
        and <strong>Python 3.10+</strong> installed. Using a local LLM backend like Ollama is highly recommended.
      </InfoBox>

      <section id="android" className="space-y-6 pt-12 border-t border-white/5">
        <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Android / Termux</h2>
        <p className="text-sm text-slate-400">Run VenomX directly on your mobile device for on-the-go orchestration.</p>
        <div className="bg-black border border-white/10 p-6 space-y-4">
          <p className="text-xs font-mono text-slate-400"># Install via Termux packages</p>
          <div className="bg-slate-950 p-4 font-mono text-xs text-emerald-500">
            pkg update && pkg install nodejs-lts python git -y <br />
            npm install -g @venomx/core
          </div>
        </div>
      </section>

      <section id="prerequisites" className="space-y-8 pt-12 border-t border-white/5">
        <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Prerequisites</h2>
        <DocsTable 
          headers={["Dependency", "Requirement", "Role"]}
          rows={[
            ["Node.js", "v18.0.0+", "Main engine runtime"],
            ["Python", "v3.10.0+", "Local AI & Tool execution"],
            ["Git", "LTS", "Core updates and skill cloning"],
            ["Memory", "8GB+ RAM", "Recommended for local LLM usage"]
          ]}
        />
      </section>

      <section id="troubleshooting" className="space-y-8 pt-12 border-t border-white/5">
        <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Troubleshooting</h2>
        <DocsTable 
          headers={["Problem", "Solution"]}
          rows={[
            [
              <span className="font-bold text-white">Permission Denied</span>,
              "Ensure you have write access to the installation directory or use sudo (not recommended)."
            ],
            [
              <span className="font-bold text-white">Model Connection Failed</span>,
              "Check if your provider URL (Ollama/LM-Studio) is accessible and correctly set in the config."
            ],
            [
              <span className="font-bold text-white">Missing Python Modules</span>,
              "Run 'venomx doctor' to identify and automatically install missing dependencies."
            ]
          ]}
        />
      </section>

      <PageNavigation />
    </div>
  );
}
