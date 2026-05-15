"use client";

import React from "react";
import { Terminal, Copy, Check } from "lucide-react";
import { PageNavigation } from "@/components/PageNavigation";

export default function InstallPage() {
  const [copied, setCopied] = React.useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const steps = [
    {
      title: "Prerequisites",
      content: (
        <div className="space-y-4 text-slate-400">
          <p>Before installing VenomX, ensure your system meets the following requirements:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Node.js 18.x or higher</li>
            <li>Python 3.10+ (for local LLM execution)</li>
            <li>Git</li>
            <li>Docker (optional, for containerized deployment)</li>
          </ul>
        </div>
      )
    },
    {
      title: "Automatic Installation",
      content: (
        <div className="space-y-4">
          <p className="text-slate-400">The fastest way to get started is using our installation script:</p>
          <div className="relative group">
            <div className="bg-slate-900 p-4 font-mono text-sm text-emerald-400 border border-white/5 overflow-x-auto">
              curl -sSL https://get.venomx.ai | bash
            </div>
            <button 
              onClick={() => copyToClipboard("curl -sSL https://get.venomx.ai | bash", "curl")}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/5 hover:bg-white/10 opacity-0 group-hover:opacity-100 transition-all"
            >
              {copied === "curl" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>
      )
    },
    {
      title: "Manual Setup",
      content: (
        <div className="space-y-4">
          <p className="text-slate-400">If you prefer manual control, clone the repository and install dependencies:</p>
          <div className="space-y-2">
            <div className="relative group">
              <div className="bg-slate-900 p-4 font-mono text-sm text-slate-300 border border-white/5 overflow-x-auto">
                git clone https://github.com/venomx-agi/venomx-core.git<br />
                cd venomx-core<br />
                npm install
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-16">
      <header>
        <h1 className="text-5xl font-extrabold tracking-tighter mb-6 uppercase">Installation</h1>
        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
          Deploy the VenomX engine to your local environment or secure cloud infrastructure.
        </p>
      </header>

      <div className="space-y-20">
        {steps.map((step, i) => (
          <section key={i} className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-4">
              <span className="text-xs font-mono text-slate-600 border border-slate-800 px-2 py-1">0{i+1}</span>
              {step.title}
            </h2>
            <div className="pl-12">
              {step.content}
            </div>
          </section>
        ))}
      </div>

      <section className="p-8 bg-emerald-500/5 border border-emerald-500/10 space-y-4">
        <h3 className="text-lg font-bold text-emerald-400 flex items-center gap-2">
          <Terminal className="w-5 h-5" /> Verification
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed">
          Once installed, verify the installation by running the following command in your terminal:
        </p>
        <div className="bg-black/40 p-4 font-mono text-xs text-white border border-white/5">
          venomx --version
        </div>
      </section>

      <PageNavigation />
    </div>
  );
}
