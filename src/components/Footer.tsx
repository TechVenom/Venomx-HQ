"use client";

import React from "react";
import Link from "next/link";
import { Globe, MessageSquare, Mail, ArrowUpRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-24 px-6 md:px-12 bg-black border-t border-[#27272a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-10">
              <div className="w-8 h-8 border-2 border-white flex items-center justify-center">
                <div className="w-3 h-3 bg-white" />
              </div>
              <span className="font-bold text-lg tracking-[0.2em] uppercase">VenomX</span>
            </Link>
            <p className="text-[#71717a] text-sm max-w-sm leading-relaxed mb-12 font-medium">
              Full-stack framework building scalable autonomous solutions. 
              Engineered for precision and sovereign control.
            </p>
            <div className="text-[10px] uppercase tracking-[0.5em] text-[#3f3f46] font-bold">
              Built by Hezron Paipai | Nairobi, Kenya
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase text-[10px] tracking-[0.4em]">Platform</h4>
            <ul className="space-y-4 text-xs text-[#71717a] font-medium">
              <li><Link href="/features" className="hover:text-white transition-colors flex items-center gap-2">Capabilities <ArrowUpRight size={12} /></Link></li>
              <li><Link href="/skills" className="hover:text-white transition-colors flex items-center gap-2">Skills Library <ArrowUpRight size={12} /></Link></li>
              <li><Link href="/docs" className="hover:text-white transition-colors flex items-center gap-2">Documentation <ArrowUpRight size={12} /></Link></li>
              <li><Link href="/download" className="hover:text-white transition-colors flex items-center gap-2">Distribution <ArrowUpRight size={12} /></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase text-[10px] tracking-[0.4em]">Connect</h4>
            <div className="flex flex-col gap-4 text-xs text-[#71717a] font-medium">
              <a href="https://github.com/TechVenom" className="flex items-center gap-2 hover:text-white transition-colors">
                <Globe className="w-4 h-4" /> GitHub
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                <MessageSquare className="w-4 h-4" /> Discord
              </a>
              <a href="mailto:venomx.agent.future@proton.me" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" /> Email
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-[#27272a] flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-[#3f3f46] font-bold uppercase tracking-[0.5em]">
          <span>© 2026 VENOMX. Precision Framework.</span>
          <div className="flex gap-12">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
