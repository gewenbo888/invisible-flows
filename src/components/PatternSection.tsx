"use client";

import { motion } from "framer-motion";
import type { Pattern } from "@/content/data";
import { useLang, T } from "./LanguageProvider";
import { COPY } from "@/content/copy";
import SectionHead from "./SectionHead";
import RouteMap from "./RouteMap";

const dot = (a: Pattern["accent"]) =>
  a === "ember" ? "text-ember-glow" : a === "cold" ? "text-cold-glow" : "text-amber-400";

export default function PatternSection({ p }: { p: Pattern }) {
  const { lang } = useLang();
  const fields = COPY.patternFields;

  return (
    <section id={p.id} className="relative py-24 px-5">
      <div className="mx-auto max-w-[1400px]">
        <SectionHead
          tone={p.accent}
          eyebrow={`${p.idx} / ${T(p.region, lang).toUpperCase()}`}
          title={
            <>
              <span className="text-bone">{T(p.title, lang)}</span>
              <span className="block mt-2 text-2xl md:text-3xl font-display text-ash/60" style={{ fontFamily: "var(--font-han)" }}>
                {p.han}
              </span>
            </>
          }
          sub={T(p.theme, lang)}
        />

        <div className="grid lg:grid-cols-12 gap-5 mb-8">
          {/* left — narrative */}
          <div className="lg:col-span-7">
            <div className="panel p-6">
              <div className="flex items-center gap-3 mb-4 font-mono text-[10px] tracking-widerer">
                <span className={dot(p.accent)}>● {T(p.status, lang)}</span>
                <span className="flex-1 hairline-h" />
              </div>
              <p
                className="text-base md:text-[17px] text-ash leading-[1.75] font-display"
                style={lang === "zh" ? { fontFamily: "var(--font-han)", letterSpacing: "0.02em" } : undefined}
              >
                {T(p.body, lang)}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <FactorBlock title={T(fields.push, lang)} items={p.push} accent={p.accent} />
              <FactorBlock title={T(fields.pull, lang)} items={p.pull} accent={p.accent} />
            </div>

            <div className="mt-4 panel p-5">
              <div className="font-mono text-[10px] tracking-widerer text-line mb-2">{T(fields.actors, lang)}</div>
              <div className="flex flex-wrap gap-2">
                {p.actors.map((a, i) => (
                  <span key={i} className="font-mono text-[11px] px-2.5 py-1 border border-line text-ash/80">{T(a, lang)}</span>
                ))}
              </div>
            </div>
          </div>

          {/* right — map + harm + governance */}
          <div className="lg:col-span-5 space-y-4">
            <RouteMap p={p} label={T(fields.route, lang)} />

            <div className="panel-ember p-5 stripe-warn">
              <div className="font-mono text-[10px] tracking-widerer text-ember-glow mb-2 flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 bg-ember-400 blip" />
                {T(fields.harm, lang)}
              </div>
              <div className="text-sm text-ash/90 leading-snug">{T(p.harm, lang)}</div>
            </div>

            <div className="panel-tight p-5">
              <div className="font-mono text-[10px] tracking-widerer text-cold-glow mb-2">{T(fields.governance, lang)}</div>
              <div className="text-sm text-ash/80 leading-snug">{T(p.governance, lang)}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FactorBlock({ title, items, accent }: { title: string; items: { en: string; zh: string }[]; accent: Pattern["accent"] }) {
  const { lang } = useLang();
  const c = accent === "ember" ? "#ff3d57" : accent === "cold" ? "#3eb4ff" : "#ffb13b";
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="panel p-4"
    >
      <div className="font-mono text-[10px] tracking-widerer text-line mb-3">{title}</div>
      <div className="space-y-2">
        {items.map((x, i) => (
          <div key={i} className="flex items-start gap-2 text-sm text-ash/85 leading-snug">
            <span className="mt-1.5 inline-block w-1.5 h-1.5 shrink-0" style={{ background: c }} />
            <span>{T(x, lang)}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
