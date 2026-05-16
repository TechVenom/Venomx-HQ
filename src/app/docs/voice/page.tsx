"use client";

import React from "react";
import { Mic, Volume2, Headphones, Radio, Zap } from "lucide-react";
import { PageNavigation } from "@/components/PageNavigation";
import { InfoBox, DocsTable } from "@/components/docs/DocsComponents";

export default function VoicePage() {
  return (
    <div className="space-y-16">
      <header className="space-y-4">
        <h1 className="text-5xl font-extrabold tracking-tighter text-white uppercase">Voice Workflows</h1>
        <p className="text-xl text-slate-400 leading-relaxed max-w-3xl">
          Enable low-latency voice interaction. VenomX integrates with STT and TTS 
          engines to provide a seamless hands-free autonomous experience.
        </p>
      </header>

      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Audio Stack</h2>
        <DocsTable 
          headers={["Layer", "Technology", "Role"]}
          rows={[
            ["STT (Listen)", "OpenAI Whisper / Deepgram", "Converting audio stream to text tokens."],
            ["TTS (Speak)", "ElevenLabs / Cartesia", "Generating high-fidelity neural speech."],
            ["VAD", "WebRTC VAD", "Intelligent silence and interruption detection."],
            ["Streaming", "WebSockets", "Low-latency bidirectional audio pipeline."]
          ]}
        />
      </section>

      <InfoBox type="tip" title="Sovereign Voice">
        For a completely local voice experience, use <strong>Faster-Whisper</strong> and 
        <strong>Coqui-TTS</strong>. These can be run on-device without any external API calls.
      </InfoBox>

      <section className="space-y-12 py-12 border-t border-white/5">
        <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Initialization</h2>
        <div className="bg-slate-900 p-8 border border-white/5 rounded-sm">
          <pre className="text-xs text-[#facc15] font-mono leading-relaxed">
{`# Engage voice mode via CLI
venomx voice --enable-interruption --engine=elevenlabs`}
          </pre>
        </div>
      </section>

      <PageNavigation />
    </div>
  );
}
