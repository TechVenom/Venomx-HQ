"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, Globe, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Framework", href: "/#framework", category: "Core" },
    { name: "Capabilities", href: "/features", category: "Intelligence" },
    { name: "Skills Library", href: "/skills", category: "Modules" },
    { name: "Technical Docs", href: "/docs", category: "Resources" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 h-24 z-[100] transition-all duration-500 px-6 md:px-12 flex items-center justify-between ${
        scrolled ? "bg-black/90 backdrop-blur-xl border-b border-[#27272a]" : "bg-transparent"
      }`}
    >
      <Link href="/" className="flex items-center gap-4 group">
        <div className="w-10 h-10 border border-white flex items-center justify-center group-hover:bg-white transition-all">
          <div className="w-4 h-4 bg-white group-hover:bg-black" />
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-sm tracking-[0.4em] uppercase leading-none mb-1">VenomX</span>
          <span className="text-[8px] font-bold text-[#71717a] uppercase tracking-[0.2em]">Autonomous Engine</span>
        </div>
      </Link>

      {/* Desktop Links */}
      <div className="hidden lg:flex items-center gap-16">
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            href={link.href}
            className="group flex flex-col"
          >
            <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#3f3f46] mb-1">{link.category}</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#71717a] group-hover:text-white transition-colors">{link.name}</span>
          </Link>
        ))}
        <Link 
          href="/download" 
          className="btn-noir btn-noir-primary px-8 py-2.5 text-[9px]"
        >
          Deploy Core
        </Link>
      </div>

      {/* Mobile Toggle */}
      <button 
        className="lg:hidden flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-[#71717a]"
        onClick={() => setMobileMenuOpen(true)}
      >
        Menu <Menu size={20} className="text-white" />
      </button>

      {/* Professional Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-[110]"
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-black border-l border-[#27272a] z-[120] p-12 flex flex-col"
            >
              <div className="flex justify-between items-center mb-24">
                 <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#3f3f46]">System Navigation</div>
                 <button onClick={() => setMobileMenuOpen(false)} className="text-white hover:rotate-90 transition-transform">
                   <X size={24} />
                 </button>
              </div>

              <div className="flex-1 space-y-12">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link 
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="group flex flex-col"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#3f3f46] mb-2">{link.category}</span>
                      <span className="text-3xl font-bold uppercase tracking-tighter group-hover:pl-4 transition-all">
                        {link.name}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="pt-12 border-t border-[#27272a]">
                <Link 
                  href="/download" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-noir btn-noir-primary w-full py-5 mb-12"
                >
                  Deploy Engine
                </Link>
                
                <div className="grid grid-cols-3 gap-4">
                   {[
                     { icon: Globe, href: "https://github.com/TechVenom" },
                     { icon: Globe, href: "#" },
                     { icon: Mail, href: "mailto:venomx.agent.future@proton.me" }
                   ].map((s, i) => (
                     <a key={i} href={s.href} className="h-12 border border-[#27272a] flex items-center justify-center text-[#71717a] hover:text-white hover:border-white transition-all">
                       <s.icon size={16} />
                     </a>
                   ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};
