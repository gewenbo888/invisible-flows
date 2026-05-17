"use client";

import { motion } from "framer-motion";
import { INFRA } from "@/content/data";
import { COPY } from "@/content/copy";
import { useLang, T } from "./LanguageProvider";
import SectionHead from "./SectionHead";

export default function Infrastructure() {
  const { lang } = useLang();
  return (
    <section id="infra" className="relative py-28 px-5">
      <div className="mx-auto max-w-[1400px]">
        <SectionHead
          tone="ember"
          eyebrow={T(COPY.infraEyebrow, lang)}
          title={T(COPY.infraTitle, lang)}
          sub={T(COPY.infraSub, lang)}
        />

        <div className="panel-ember stripe-warn p-4 mb-6 flex items-center gap-3">
          <span className="font-mono text-[10px] tracking-widerer text-ember-glow flex items-center gap-2 shrink-0">
            <span className="inline-block w-2 h-2 bg-ember-400 blip" />
            ANALYTICAL TAXONOMY
          </span>
          <span className="text-xs text-ash/80 leading-snug">
            {lang === "zh"
              ? "下文描述这些层是什么、为何重要——不解释如何运作它们。"
              : "Below describes what these layers are and why they matter — not how to operate them."}
          </span>
        </div>

        <div className="panel overflow-hidden">
          <div className="grid grid-cols-12 gap-3 px-4 py-2.5 border-b border-line font-mono text-[10px] tracking-widerer text-line">
            <div className="col-span-2">{T(COPY.infraFields.layer, lang)}</div>
            <div className="col-span-6">{T(COPY.infraFields.desc, lang)}</div>
            <div className="col-span-4">{T(COPY.infraFields.harm, lang)}</div>
          </div>
          {INFRA.map((n, i) => (
            <motion.div
              key={n.id}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="grid grid-cols-12 gap-3 px-4 py-4 border-b border-line/60 last:border-0 hover:bg-line/20 transition-colors"
            >
              <div className="col-span-2">
                <div className="font-mono text-[10px] text-line">[{String(i).padStart(2, "0")}]</div>
                <div className="font-display text-lg text-ember-glow mt-0.5">{T(n.label, lang)}</div>
              </div>
              <div className="col-span-6 text-sm text-ash/90 leading-snug">{T(n.desc, lang)}</div>
              <div className="col-span-4 text-sm text-cold-glow/90 leading-snug border-l border-line pl-3">{T(n.harm, lang)}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
