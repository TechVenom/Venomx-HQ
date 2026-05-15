"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Globe, Mail, MessageSquare, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Framework", href: "/" },
    { name: "Capabilities", href: "/features" },
    { name: "Skills", href: "/skills" },
    { name: "Distribution", href: "/download" },
    { name: "Engineering Docs", href: "/docs" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: Globe, name: "GitHub", href: "https://github.com/TechVenom" },
    { icon: MessageSquare, name: "WhatsApp", href: "https://wa.me/254712345678" },
    { icon: Mail, name: "Email", href: "mailto:venomx.agent.future@proton.me" },
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
            <div className="w-12 h-12 border border-white flex items-center justify-center font-bold text-sm group-hover:bg-white group-hover:text-black transition-all duration-500">
              HP
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-white uppercase leading-none mb-1">Hezron <span className="text-[#3f3f46]">Paipai</span></span>
              <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-[#3f3f46]">VenomX Technologies</span>
            </div>
          </Link>

          {/* Sidebar Trigger (Clean Sidebar Navigation) */}
          <div className="flex items-center gap-12">
            <Link href="/download" className="hidden md:block text-[10px] font-bold uppercase tracking-[0.3em] text-white hover:opacity-50 transition-opacity">
              Resume
            </Link>
            <button 
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-4 group"
            >
              <span className="hidden md:block text-[10px] font-bold uppercase tracking-[0.4em] text-[#71717a] group-hover:text-white transition-colors">Menu</span>
              <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-white transition-colors">
                <Menu className="w-5 h-5 text-white" />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Sidebar Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[60]"
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-xl bg-black border-l border-white/5 z-[70] p-16 md:p-24 flex flex-col"
            >
              <div className="flex justify-between items-center mb-24">
                <div className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#3f3f46]">Sector Navigation</div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-16 h-16 border border-white/5 flex items-center justify-center hover:border-white transition-all duration-500"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              <div className="flex flex-col gap-10">
                {navLinks.map((link, i) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-end gap-6"
                  >
                    <span className="text-[10px] font-bold text-[#3f3f46] mb-4">0{i+1}</span>
                    <span className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-900 group-hover:text-white group-hover:pl-8 transition-all duration-500 uppercase">
                      {link.name}
                    </span>
                  </Link>
                ))}
              </div>

              <div className="mt-auto grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-white/5">
                <div>
                   <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#3f3f46] mb-8">Contact Node</div>
                   <p className="text-sm text-[#71717a] font-medium leading-relaxed">
                     venomx.agent.future@proton.me<br />
                     Nairobi, Kenya [HQ]
                   </p>
                </div>
                <div className="flex flex-col gap-4">
                  {socialLinks.map((s, i) => (
                    <a 
                      key={i} 
                      href={s.href} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#3f3f46] hover:text-white transition-colors flex items-center gap-4"
                    >
                      <s.icon className="w-3 h-3" /> {s.name}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
