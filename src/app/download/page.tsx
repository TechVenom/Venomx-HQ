"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Download, 
  Monitor, 
  Terminal, 
  Box, 
  Check, 
  Cpu,
  Shield
} from "lucide-react";

export default function DownloadPage() {
  const platforms = [
    { name: "Windows", ext: ".exe", status: "Stable", primary: true },
    { name: "macOS", ext: ".dmg", status: "Waitlist", primary: false },
    { name: "Linux", ext: ".AppImage", status: "Waitlist", primary: false },
  ];

  return (
    <div className="pt-48 pb-40 bg-black min-h-screen selection:bg-white selection:text-black">
      <div className="grid-container mb-40">
        <h1 className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#71717a] mb-12">Distribution</h1>
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-12 uppercase">Deploy Core.</h2>
        <p className="text-xl text-[#71717a] max-w-2xl leading-relaxed font-medium">
          The foundational stack for autonomous labor. Available for enterprise 
          infrastructure and personal compute nodes.
        </p>
      </div>

      <div className="grid-container grid grid-cols-1 lg:grid-cols-3 gap-px bg-[#27272a] border border-[#27272a] mb-60">
        {/* Desktop Client (Spans 2 columns) */}
        <div className="lg:col-span-2 bg-black p-12 md:p-20 flex flex-col md:flex-row gap-20">
          <div className="md:w-1/2">
            <div className="flex items-center gap-6 mb-12">
              <div className="w-10 h-10 border border-[#27272a] flex items-center justify-center">
                <Monitor className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-3xl font-bold tracking-tighter uppercase">Desktop Client</h3>
            </div>
            <p className="text-[#71717a] mb-12 leading-relaxed font-medium text-sm">
              The visual dashboard for managing swarms, monitoring execution traces, 
              and configuring system-level protocols.
            </p>
            <ul className="space-y-6">
              {['Swarm visualization', 'Local encrypted vault', 'Tool sandbox'].map(f => (
                <li key={f} className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-white">
                  <Check className="w-3 h-3 opacity-30" /> {f}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:w-1/2 relative overflow-hidden group border border-[#27272a]">
            {/* Desktop Client Screenshot Placeholder */}
            <img 
              src="/images/desktop-client.png" 
              alt="Desktop Client" 
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 group-hover:opacity-80 transition-all z-0"
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />

            <div className="relative z-10 flex flex-col gap-px bg-[#27272a]">
              {platforms.map((p, i) => (
                <div key={i} className={`bg-black p-8 ${p.primary ? "" : "opacity-20"}`}>
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-bold text-sm tracking-tight uppercase">{p.name}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#71717a]">{p.status}</span>
                  </div>
                  <button 
                    disabled={!p.primary}
                    className={`w-full py-4 border border-[#27272a] text-[10px] font-bold uppercase tracking-[0.3em] transition-all ${
                      p.primary ? "bg-white text-black hover:bg-zinc-200 border-white" : "text-[#71717a] cursor-not-allowed"
                    }`}
                  >
                    Download {p.ext}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CLI & Docker (Spans 1 column) */}
        <div className="bg-[#27272a] flex flex-col gap-px">
          <div className="bg-black p-12 flex-1 flex flex-col">
            <div className="flex items-center gap-4 mb-8">
              <Box className="w-4 h-4 text-white" />
              <h4 className="font-bold text-lg uppercase tracking-widest">Docker</h4>
            </div>
            <p className="text-xs text-[#71717a] mb-12 font-medium leading-relaxed">Headless distribution for high-concurrency server environments.</p>
            <div className="mt-auto bg-zinc-950 p-6 border border-[#27272a] font-mono text-[10px] text-white">
              $ docker pull techvenom/vnmx
            </div>
          </div>
          <div className="bg-black p-12 flex-1 flex flex-col">
            <div className="flex items-center gap-4 mb-8">
              <Terminal className="w-4 h-4 text-white" />
              <h4 className="font-bold text-lg uppercase tracking-widest">CLI</h4>
            </div>
            <p className="text-xs text-[#71717a] mb-12 font-medium leading-relaxed">Native Python installation for developers and researchers.</p>
            <div className="mt-auto bg-zinc-950 p-6 border border-[#27272a] font-mono text-[10px] text-white">
              $ pip install venomx-core
            </div>
          </div>
        </div>
      </div>

      {/* Infrastructure Specs */}
      <section className="grid-container border-t border-[#27272a] pt-40">
        <div className="flex items-center gap-6 mb-24">
          <Cpu className="text-white w-8 h-8" />
          <h3 className="text-4xl font-bold tracking-tight uppercase tracking-widest">Infrastructure</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#27272a] border border-[#27272a]">
          <div className="bg-black p-16">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#71717a] mb-12">Personal Node</h4>
            <ul className="space-y-8 text-xs font-medium">
              <li className="flex justify-between border-b border-[#27272a] pb-4"><span>CPU</span> <span className="text-white">4 Cores (x64/ARM)</span></li>
              <li className="flex justify-between border-b border-[#27272a] pb-4"><span>RAM</span> <span className="text-white">8 GB</span></li>
              <li className="flex justify-between border-b border-[#27272a] pb-4"><span>Storage</span> <span className="text-white">500 MB (Core)</span></li>
            </ul>
          </div>
          <div className="bg-black p-16">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white mb-12">Production Swarm</h4>
            <ul className="space-y-8 text-xs font-medium">
              <li className="flex justify-between border-b border-[#27272a] pb-4"><span>CPU</span> <span className="text-white">16+ Cores</span></li>
              <li className="flex justify-between border-b border-[#27272a] pb-4"><span>RAM</span> <span className="text-white">32+ GB ECC</span></li>
              <li className="flex justify-between border-b border-[#27272a] pb-4"><span>GPU</span> <span className="text-white">NVIDIA H100 (Optional)</span></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
