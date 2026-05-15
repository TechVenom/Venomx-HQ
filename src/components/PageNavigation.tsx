"use client";

import React from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";

const pages = [
  { name: "Sovereign Framework", href: "/" },
  { name: "Capabilities", href: "/features" },
  { name: "Skills Marketplace", href: "/skills" },
  { name: "Engine Distribution", href: "/download" },
  { name: "Engineering Docs", href: "/docs" },
  { name: "Safety Protocols", href: "/docs/safety" },
  { name: "Contact HQ", href: "/contact" },
];

export const PageNavigation = () => {
  const pathname = usePathname();
  const currentIndex = pages.findIndex((page) => page.href === pathname);

  if (currentIndex === -1) return null;

  const prevPage = pages[currentIndex - 1];
  const nextPage = pages[currentIndex + 1];

  return (
    <div className="grid-container py-20 border-t border-white/5 mt-40">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Previous Page */}
        {prevPage ? (
          <Link 
            href={prevPage.href}
            className="group flex flex-col items-start gap-4 p-8 border border-white/5 hover:border-white transition-all w-full md:w-auto min-w-[300px]"
          >
            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.4em] text-[#3f3f46] group-hover:text-white transition-colors">
              <ChevronLeft className="w-3 h-3" /> Previous Sector
            </div>
            <div className="text-xl font-bold uppercase tracking-tighter text-white">
              {prevPage.name}
            </div>
          </Link>
        ) : (
          <div className="hidden md:block w-full md:w-auto min-w-[300px]" />
        )}

        {/* Next Page */}
        {nextPage ? (
          <Link 
            href={nextPage.href}
            className="group flex flex-col items-end gap-4 p-8 border border-white/5 hover:border-white transition-all w-full md:w-auto min-w-[300px] text-right"
          >
            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.4em] text-[#3f3f46] group-hover:text-white transition-colors">
              Next Sector <ChevronRight className="w-3 h-3" />
            </div>
            <div className="text-xl font-bold uppercase tracking-tighter text-white">
              {nextPage.name}
            </div>
          </Link>
        ) : (
          <div className="hidden md:block w-full md:w-auto min-w-[300px]" />
        )}
      </div>
    </div>
  );
};
