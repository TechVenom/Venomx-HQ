"use client";

import React from "react";
import { Link2, Puzzle, Share2, Globe, Box } from "lucide-react";
import { PageNavigation } from "@/components/PageNavigation";
import { InfoBox, DocsTable } from "@/components/docs/DocsComponents";

export default function MCPPage() {
  return (
    <div className="space-y-16">
      <header className="space-y-4">
        <h1 className="text-5xl font-extrabold tracking-tighter text-white uppercase">MCP Integration</h1>
        <p className="text-xl text-slate-400 leading-relaxed max-w-3xl">
          Extend VenomX with the Model Context Protocol. Connect to any MCP-compliant 
          server to provide your agent with external data and tools.
        </p>
      </header>

      <InfoBox type="info" title="What is MCP?">
        The <strong>Model Context Protocol (MCP)</strong> is an open standard that enables 
        AI models to securely access data sources and tools from external servers. 
        VenomX acts as an MCP client, allowing it to "plug into" existing ecosystems like 
        Google Drive, GitHub, or Postgres.
      </InfoBox>

      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Configuration</h2>
        <p className="text-sm text-slate-400">Add MCP servers to your <code>config.yaml</code> to enable them in the reasoning loop.</p>
        <div className="bg-slate-900 p-8 border border-white/5 rounded-sm overflow-x-auto">
          <pre className="text-xs text-emerald-500 font-mono leading-relaxed">
{`# config.yaml
mcp:
  servers:
    - name: "github-search"
      url: "http://localhost:3001/mcp"
    - name: "local-files"
      path: "/usr/bin/mcp-fs-server"`}
          </pre>
        </div>
      </section>

      <section className="space-y-12 py-12 border-t border-white/5">
        <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Standard Servers</h2>
        <DocsTable 
          headers={["Server Type", "Capability"]}
          rows={[
            ["File System", "Read, write, and index local directories with permissions."],
            ["Database", "Execute SQL queries and retrieve schema metadata."],
            ["Search", "Real-time web search and documentation indexing."],
            ["External APIs", "Connect to GitHub, Slack, Linear, or Notion directly."]
          ]}
        />
      </section>

      <PageNavigation />
    </div>
  );
}
