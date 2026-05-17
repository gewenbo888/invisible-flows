"use client";

import { motion } from "framer-motion";
import { useLang, T } from "./LanguageProvider";
import { COPY } from "@/content/copy";
import { PATTERNS } from "@/content/data";

export default function PatternsIntro() {
  const { lang } = useLang();
  return (
    <section className="py-24 px-5">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-center gap-3 font-mono text-[10px] tracking-widestest text-line mb-5">
          <span className="text-ember-glow">●</span>
          <span>{T(COPY.patternsTag, lang)}</span>
          <span className="flex-1 hairline-h max-w-[260px]" />
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-3xl md:text-5xl lg:text-6xl leading-tight text-bone max-w-4xl"
        >
          {T(COPY.patternsTitle, lang)}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-5 max-w-3xl text-lg text-ash/80 leading-relaxed"
        >
          {T(COPY.patternsSub, lang)}
        </motion.p>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {PATTERNS.map((p, i) => (
            <motion.a
              key={p.id}
              href={`#${p.id}`}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="panel p-5 group hover:border-ember-300 transition-colors"
            >
              <div className="flex items-center justify-between font-mono text-[10px] tracking-widerer text-line mb-2">
                <span className={p.accent === "ember" ? "text-ember-glow" : p.accent === "cold" ? "text-cold-glow" : "text-amber-400"}>{p.idx}</span>
                <span>{T(p.region, lang)}</span>
              </div>
              <div className="font-display text-xl text-bone group-hover:text-ember-glow transition-colors">{T(p.title, lang)}</div>
              <div className="font-mono text-[10px] text-ash/55 mt-1" style={{ fontFamily: "var(--font-han)" }}>{p.han}</div>
              <div className="mt-3 text-sm text-ash/70 leading-snug">{T(p.theme, lang)}</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
