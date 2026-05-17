"use client";

import { motion } from "framer-motion";
import { COPY } from "@/content/copy";
import { useLang, T } from "./LanguageProvider";

export default function Closing() {
  const { lang } = useLang();
  return (
    <section id="closing" className="relative min-h-screen flex items-center justify-center py-32 px-5 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[0, 1, 2, 3, 4].map((r) => (
          <motion.div
            key={r}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: [0, 1.5 + r * 0.6], opacity: [0.5, 0] }}
            transition={{ duration: 8, delay: r * 0.8, repeat: Infinity, ease: "easeOut" }}
            viewport={{ once: false }}
            className="absolute rounded-full border"
            style={{
              width: `${280 + r * 100}px`,
              height: `${280 + r * 100}px`,
              borderColor: "rgba(255, 61, 87, 0.18)",
            }}
          />
        ))}
        <div
          className="absolute w-80 h-80 rounded-full blur-3xl opacity-40"
          style={{ background: "radial-gradient(circle, #ff3d57 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-mono text-[10px] tracking-widestest text-line mb-8"
        >
          {T(COPY.closeEyebrow, lang)}
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-bone"
        >
          <div>{T(COPY.closeTitleA, lang)}</div>
          <div className="text-ember-glow mt-3">{T(COPY.closeTitleB, lang)}</div>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-14 space-y-2 font-display text-lg md:text-xl text-ash"
        >
          {COPY.closeLines.map((l, i) => (
            <div key={i}>
              {T(l.a, lang)} <span className="text-line">·</span> {T(l.b, lang)}
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-14 max-w-2xl mx-auto text-base text-ash/75 leading-relaxed"
        >
          {T(COPY.closeBody, lang)}
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 1.2 }}
          className="mt-14 panel p-8 max-w-2xl mx-auto"
        >
          <div className="font-display text-xl md:text-2xl text-ember-glow leading-snug">
            “{COPY.closeQuote.en}”
          </div>
          <div className="text-base text-ash/85 mt-3" style={{ fontFamily: "var(--font-han)" }}>
            “{COPY.closeQuote.zh}”
          </div>
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-12 font-mono text-[10px] tracking-widestest text-line"
        >
          {T(COPY.closeFoot, lang)}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-6 flex items-center justify-center gap-4 font-mono text-[10px] tracking-widerer text-line"
        >
          <a href="https://psyverse.fun" className="hover:text-bone transition-colors">psyverse.fun</a>
          <span>·</span>
          <a href="https://psyverse.fun/atlas.html" className="hover:text-bone transition-colors">atlas</a>
        </motion.div>
      </div>
    </section>
  );
}
