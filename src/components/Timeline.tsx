"use client";

import { motion } from "framer-motion";
import { ERAS } from "@/content/data";
import { COPY } from "@/content/copy";
import { useLang, T } from "./LanguageProvider";
import SectionHead from "./SectionHead";

export default function Timeline() {
  const { lang } = useLang();
  return (
    <section id="timeline" className="relative py-28 px-5">
      <div className="mx-auto max-w-[1400px]">
        <SectionHead
          tone="cold"
          eyebrow={T(COPY.timelineEyebrow, lang)}
          title={T(COPY.timelineTitle, lang)}
          sub={T(COPY.timelineSub, lang)}
        />

        <div className="panel p-6 mb-8">
          {/* horizontal era strip */}
          <div className="relative h-2 mb-8 bg-line">
            {ERAS.map((e, i) => {
              const pct = (i / (ERAS.length - 1)) * 100;
              return (
                <motion.div
                  key={e.id}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.05 * i }}
                  className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
                  style={{ left: `${pct}%`, background: e.color, boxShadow: `0 0 12px ${e.color}` }}
                />
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {ERAS.map((e, i) => (
              <motion.div
                key={e.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="panel-tight p-4 border-l-2"
                style={{ borderLeftColor: e.color }}
              >
                <div className="font-mono text-[10px] text-line">{T(e.year, lang)}</div>
                <div className="font-display text-lg leading-tight mt-1" style={{ color: e.color }}>{T(e.era, lang)}</div>
                <div className="font-mono text-[10px] text-ash/40 mt-0.5" style={{ fontFamily: "var(--font-han)" }}>{e.han}</div>
                <div className="text-xs text-ash/80 mt-2 leading-snug">{T(e.body, lang)}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
