"use client";

import { motion } from "framer-motion";
import { GOVERNANCE } from "@/content/data";
import { COPY } from "@/content/copy";
import { useLang, T } from "./LanguageProvider";
import SectionHead from "./SectionHead";

export default function Governance() {
  const { lang } = useLang();
  return (
    <section id="governance" className="relative py-28 px-5">
      <div className="mx-auto max-w-[1400px]">
        <SectionHead
          tone="cold"
          eyebrow={T(COPY.govEyebrow, lang)}
          title={T(COPY.govTitle, lang)}
          sub={T(COPY.govSub, lang)}
        />

        <div className="grid lg:grid-cols-2 gap-4">
          {GOVERNANCE.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="panel corner-cold corner p-5"
            >
              <div className="font-mono text-[10px] tracking-widerer text-cold-glow mb-2">
                {T(COPY.govFields.area, lang)}
              </div>
              <div className="font-display text-2xl text-bone leading-tight">{T(g.area, lang)}</div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <div className="font-mono text-[10px] tracking-widerer text-line mb-1">{T(COPY.govFields.description, lang)}</div>
                  <div className="text-sm text-ash/85 leading-snug">{T(g.description, lang)}</div>
                </div>
                <div>
                  <div className="font-mono text-[10px] tracking-widerer text-line mb-1">{T(COPY.govFields.risk, lang)}</div>
                  <div className="text-sm text-ember-glow/90 leading-snug">{T(g.risk, lang)}</div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-line">
                <div className="font-mono text-[10px] tracking-widerer text-line mb-1">{T(COPY.govFields.example, lang)}</div>
                <div className="font-mono text-xs text-ash/70">{T(g.example, lang)}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
