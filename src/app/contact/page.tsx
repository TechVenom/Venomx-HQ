"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Globe, 
  MapPin, 
  ArrowRight,
  Send,
  Zap,
  Shield
} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-48 pb-40 bg-black min-h-screen">
      <div className="grid-container mb-40">
        <h1 className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#71717a] mb-12">Contact</h1>
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-12">Connect with <br /> Engineering.</h2>
        <p className="text-xl text-[#71717a] max-w-2xl leading-relaxed font-medium">
          Inquire about enterprise deployments, contribute to the open-source core, 
          or join our developer community.
        </p>
      </div>

      <div className="grid-container grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#27272a] border border-[#27272a]">
        {/* Contact Form */}
        <div className="bg-black p-20">
          <h3 className="text-2xl font-bold tracking-tight mb-12">Direct Inquiry</h3>
          <form className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#71717a] ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-black border-b border-[#27272a] py-4 text-sm focus:outline-none focus:border-white transition-colors text-white rounded-none"
                />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#71717a] ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-black border-b border-[#27272a] py-4 text-sm focus:outline-none focus:border-white transition-colors text-white rounded-none"
                />
              </div>
            </div>
            <div className="space-y-4">
              <label className="text-[10px] font-bold uppercase tracking-widest text-[#71717a] ml-1">Topic</label>
              <select className="w-full bg-black border-b border-[#27272a] py-4 text-sm focus:outline-none focus:border-white transition-colors appearance-none text-white rounded-none">
                <option>Enterprise Implementation</option>
                <option>Open Source Contribution</option>
                <option>Other</option>
              </select>
            </div>
            <div className="space-y-4">
              <label className="text-[10px] font-bold uppercase tracking-widest text-[#71717a] ml-1">Message</label>
              <textarea 
                rows={6}
                placeholder="Describe your infrastructure needs..."
                className="w-full bg-black border-b border-[#27272a] py-4 text-sm focus:outline-none focus:border-white transition-colors resize-none text-white rounded-none"
              />
            </div>
            <button className="btn-noir btn-noir-primary w-full py-6 text-[10px] font-bold uppercase tracking-[0.4em]">
              Send Briefing <Send className="w-4 h-4 ml-4" />
            </button>
          </form>
        </div>

        {/* Info & Channels */}
        <div className="bg-black p-px flex flex-col gap-px bg-[#27272a]">
          <div className="bg-black p-16 flex-1">
            <h3 className="text-2xl font-bold tracking-tight mb-12">Channels</h3>
            <div className="space-y-8">
              <a href="mailto:venomx.agent.future@proton.me" className="flex items-center gap-8 group">
                <div className="w-12 h-12 border border-[#27272a] group-hover:border-white flex items-center justify-center transition-all">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest mb-1">Email</h4>
                  <p className="text-xs text-[#71717a]">venomx.agent.future@proton.me</p>
                </div>
                <ArrowRight className="w-4 h-4 ml-auto opacity-10 group-hover:opacity-100 transition-all" />
              </a>
              
              <div className="flex items-center gap-8">
                <div className="w-12 h-12 border border-[#27272a] flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest mb-1">Operations</h4>
                  <p className="text-xs text-[#71717a]">Nairobi, Kenya | Remote First</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black p-16 flex-1">
            <h3 className="text-2xl font-bold tracking-tight mb-12">Ecosystem</h3>
            <div className="grid grid-cols-2 gap-px bg-[#27272a] border border-[#27272a]">
              {[
                { name: "GitHub", href: "https://github.com/TechVenom" },
                { name: "LinkedIn", href: "https://ke.linkedin.com/in/hezron-paipai-92013a264" },
                { name: "X (Twitter)", href: "#" },
                { name: "Discord", href: "#" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href}
                  target="_blank"
                  className="bg-black p-8 flex items-center justify-center text-[10px] font-bold uppercase tracking-[0.3em] text-[#71717a] hover:bg-white hover:text-black transition-all"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          <div className="bg-black p-16 flex flex-col justify-center border-t border-[#27272a]">
            <div className="flex items-center gap-4 mb-6">
              <Zap className="w-4 h-4 text-white" />
              <h4 className="font-bold text-xs uppercase tracking-[0.3em]">Support Protocol</h4>
            </div>
            <p className="text-xs text-[#71717a] leading-relaxed font-medium">
              For large-scale infrastructure and private node clusters, our 
              engineering team provides direct architectural support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
