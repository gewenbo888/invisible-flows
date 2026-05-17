"use client";

import { LanguageProvider } from "@/components/LanguageProvider";
import Background from "@/components/Background";
import Nav from "@/components/Nav";
import Ticker from "@/components/Ticker";
import Hero from "@/components/Hero";
import PatternsIntro from "@/components/PatternsIntro";
import PatternSection from "@/components/PatternSection";
import Timeline from "@/components/Timeline";
import Infrastructure from "@/components/Infrastructure";
import Governance from "@/components/Governance";
import Sources from "@/components/Sources";
import Closing from "@/components/Closing";
import { PATTERNS } from "@/content/data";

export default function Page() {
  return (
    <LanguageProvider>
      <Background />
      <Nav />
      <main className="relative">
        <Hero />
        <Ticker />
        <PatternsIntro />
        {PATTERNS.map((p) => (
          <PatternSection key={p.id} p={p} />
        ))}
        <Timeline />
        <Infrastructure />
        <Governance />
        <Sources />
        <Closing />
      </main>
    </LanguageProvider>
  );
}
