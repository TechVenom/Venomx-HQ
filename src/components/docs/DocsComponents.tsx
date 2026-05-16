"use client";

import React from "react";
import { Info, AlertTriangle, CheckCircle2, Lightbulb } from "lucide-react";

interface InfoBoxProps {
  type?: "info" | "warning" | "success" | "tip";
  title?: string;
  children: React.ReactNode;
}

export const InfoBox = ({ type = "info", title, children }: InfoBoxProps) => {
  const styles = {
    info: "bg-blue-500/5 border-blue-500/20 text-blue-400",
    warning: "bg-yellow-500/5 border-yellow-500/20 text-yellow-400",
    success: "bg-emerald-500/5 border-emerald-500/20 text-emerald-400",
    tip: "bg-purple-500/5 border-purple-500/20 text-purple-400",
  };

  const icons = {
    info: <Info className="w-5 h-5" />,
    warning: <AlertTriangle className="w-5 h-5" />,
    success: <CheckCircle2 className="w-5 h-5" />,
    tip: <Lightbulb className="w-5 h-5" />,
  };

  return (
    <div className={`p-6 border rounded-sm my-8 ${styles[type]}`}>
      <div className="flex gap-4">
        <div className="mt-1">{icons[type]}</div>
        <div className="space-y-2">
          {title && <h5 className="font-bold uppercase tracking-tight text-white">{title}</h5>}
          <div className="text-sm leading-relaxed opacity-90">{children}</div>
        </div>
      </div>
    </div>
  );
};

interface DocsTableProps {
  headers: string[];
  rows: (string | React.ReactNode)[][];
}

export const DocsTable = ({ headers, rows }: DocsTableProps) => {
  return (
    <div className="my-8 overflow-x-auto border border-white/5 rounded-sm">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-white/5 border-b border-white/10">
            {headers.map((header, i) => (
              <th key={i} className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-slate-400">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {rows.map((row, i) => (
            <tr key={i} className="hover:bg-white/[0.02] transition-colors">
              {row.map((cell, j) => (
                <td key={j} className="px-6 py-4 text-sm text-slate-300">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
