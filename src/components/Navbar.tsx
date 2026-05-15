"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Menu, 
  X, 
  Globe, 
  Mail, 
  MessageSquare, 
  ArrowRight,
  LayoutGrid,
  Zap,
  Terminal,
  Cpu,
  Shield,
  Activity,
  Box,
  Settings,
  ChevronLeft,
  User,
  ExternalLink
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const coreLinks = [
    { name: "Sovereign Framework", href: "/", icon: LayoutGrid },
    { name: "Capability Matrix", href: "/features", icon: Zap },
    { name: "Skills Marketplace", href: "/skills", icon: Terminal },
  ];

  const operationalLinks = [
    { name: "Engine Distribution", href: "/download", icon: Box },
    { name: "Technical Docs", href: "/docs", icon: Cpu },
    { name: "Security Axioms", href: "/docs/safety", icon: Shield },
  ];

  const systemLinks = [
    { name: "Telemetry Dashboard", href: "#", icon: Activity },
    { name: "System Settings", href: "#", icon: Settings },
    { name: "Contact HQ", href: "/contact", icon: Mail },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? "bg-black/90 backdrop-blur-2xl py-4" : "bg-transparent py-10"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-10 flex justify-between items-center">
          {/* Brand Identity */}
          <Link href="/" className="flex items-center gap-6 group">
            <div className="w-12 h-12 border border-white flex items-center justify-center overflow-hidden bg-black group-hover:bg-white group-hover:text-black transition-all duration-500">
               <img src="/favicon.png" alt="VX" className="w-8 h-8 grayscale brightness-200 group-hover:invert" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white uppercase leading-none mb-1">VENOMX</span>
              <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-[#3f3f46]">Autonomous Intelligence</span>
            </div>
          </Link>

          {/* Trigger */}
          <button 
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-4 group"
          >
            <span className="hidden md:block text-[10px] font-bold uppercase tracking-[0.4em] text-[#71717a] group-hover:text-white transition-colors">Launch Console</span>
            <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-white transition-colors bg-black/40">
              <Menu className="w-5 h-5 text-white" />
            </div>
          </button>
        </div>
      </nav>

      {/* Professional System Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 35, stiffness: 300 }}
              className="fixed top-0 left-0 bottom-0 w-full max-w-sm bg-[#0a0a0a] border-r border-white/5 z-[70] flex flex-col shadow-2xl"
            >
              {/* Sidebar Header */}
              <div className="p-8 border-b border-white/5 bg-black">
                <div className="flex justify-between items-center mb-10">
                  <div className="flex items-center gap-4">
                     <div className="w-8 h-8 bg-amber-500 rounded flex items-center justify-center text-black font-bold text-xs">V</div>
                     <span className="text-sm font-bold tracking-widest text-white uppercase">VenomX Console</span>
                  </div>
                  <button onClick={() => setIsOpen(false)} className="w-8 h-8 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                    <ChevronLeft className="w-4 h-4 text-[#71717a]" />
                  </button>
                </div>
                
                <button className="w-full bg-[#111] border border-white/5 py-4 rounded-md flex items-center justify-center gap-3 group hover:bg-[#1a1a1a] transition-all">
                   <ChevronLeft className="w-3 h-3 text-[#3f3f46] group-hover:text-white" />
                   <span className="text-[10px] font-bold uppercase tracking-widest text-white">Back to Framework</span>
                </button>
              </div>

              {/* Sidebar Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-12">
                
                {/* Core Framework Section */}
                <div className="space-y-4">
                  <div className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#3f3f46] px-4">Core Framework</div>
                  <div className="space-y-1">
                    {coreLinks.map((link) => (
                      <Link 
                        key={link.name} 
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-5 p-4 rounded-md text-[#71717a] hover:text-white hover:bg-white/5 transition-all group"
                      >
                        <link.icon className="w-4 h-4 group-hover:text-amber-500 transition-colors" />
                        <span className="text-xs font-bold uppercase tracking-widest">{link.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Operational Tools Section */}
                <div className="space-y-4">
                  <div className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#3f3f46] px-4">Operational Tools</div>
                  <div className="space-y-1">
                    {operationalLinks.map((link) => (
                      <Link 
                        key={link.name} 
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-5 p-4 rounded-md text-[#71717a] hover:text-white hover:bg-white/5 transition-all group"
                      >
                        <link.icon className="w-4 h-4 group-hover:text-white transition-colors" />
                        <span className="text-xs font-bold uppercase tracking-widest">{link.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* System Oversight Section */}
                <div className="space-y-4">
                  <div className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#3f3f46] px-4">System Oversight</div>
                  <div className="space-y-1">
                    {systemLinks.map((link) => (
                      <Link 
                        key={link.name} 
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-5 p-4 rounded-md text-[#71717a] hover:text-white hover:bg-white/5 transition-all group"
                      >
                        <link.icon className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase tracking-widest">{link.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

              </div>

              {/* Sidebar Footer (Profile) */}
              <div className="p-6 border-t border-white/5 space-y-4 bg-black">
                <div className="bg-[#111] p-4 border border-white/5 rounded-md flex items-center justify-center gap-3">
                   <Activity className="w-3 h-3 text-amber-500" />
                   <span className="text-[9px] font-bold uppercase tracking-widest text-amber-500">System Monitoring Active</span>
                </div>
                <div className="flex items-center gap-4 p-2">
                  <div className="w-10 h-10 bg-amber-500 rounded-md flex items-center justify-center text-black font-bold">
                    RA
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-white uppercase tracking-tight">Root Administrator</span>
                    <span className="text-[8px] font-bold uppercase tracking-widest text-amber-500">Nexus Elite Access</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
