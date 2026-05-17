"use client";

import { motion } from "framer-motion";
import type { Pattern } from "@/content/data";
import { useLang, T } from "./LanguageProvider";

const accent = (a: Pattern["accent"]) =>
  a === "ember" ? "#ff3d57" : a === "cold" ? "#3eb4ff" : "#ffb13b";

export default function RouteMap({ p, label }: { p: Pattern; label: string }) {
  const { lang } = useLang();
  const c = accent(p.accent);

  const points = [p.routeFrom, ...p.routeVia, p.routeTo];
  // build a simple bezier-like path through points
  let d = `M ${p.routeFrom.x} ${p.routeFrom.y / 1.4}`;
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const cur = points[i];
    const mx = (prev.x + cur.x) / 2;
    const my = Math.min(prev.y, cur.y) / 1.4 - 4;
    d += ` Q ${mx} ${my} ${cur.x} ${cur.y / 1.4}`;
  }

  return (
    <div className="panel-tight corner p-4 relative">
      <div className="flex items-center justify-between font-mono text-[10px] tracking-widerer text-line mb-3">
        <span style={{ color: c }}>● {label}</span>
        <span>{p.idx} · {T(p.region, lang)}</span>
      </div>
      <div className="relative aspect-[2/1] bg-void/60 border border-line overflow-hidden grid-fine">
        {/* longitude/latitude lines */}
        {[20, 40, 60, 80].map((y) => (
          <div key={y} className="absolute left-0 right-0 h-px bg-line/50" style={{ top: `${y}%` }} />
        ))}
        {[25, 50, 75].map((x) => (
          <div key={x} className="absolute top-0 bottom-0 w-px bg-line/50" style={{ left: `${x}%` }} />
        ))}

        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
          {/* faint base path */}
          <path d={d} fill="none" stroke={c} strokeOpacity="0.25" strokeWidth="0.18" vectorEffect="non-scaling-stroke" />
          {/* animated dashed pulse */}
          <path
            d={d} fill="none" stroke={c} strokeOpacity="0.85" strokeWidth="0.22"
            strokeDasharray="2 6" className="pulse-arc" vectorEffect="non-scaling-stroke"
          />
        </svg>

        {points.map((pt, i) => {
          const isFrom = i === 0;
          const isTo = i === points.length - 1;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${pt.x}%`, top: `${pt.y / 1.4}%` }}
            >
              <div
                className={`rounded-full blip`}
                style={{
                  width: isFrom || isTo ? 10 : 6,
                  height: isFrom || isTo ? 10 : 6,
                  background: c,
                  boxShadow: `0 0 14px ${c}, 0 0 4px ${c}`,
                }}
              />
              <div
                className="absolute left-4 top-[-4px] whitespace-nowrap font-mono text-[10px] tracking-widerer"
                style={{ color: isFrom || isTo ? c : "#bcc2cf" }}
              >
                {T(pt.label, lang)}
              </div>
            </motion.div>
          );
        })}

        {/* corner brackets */}
        <span className="absolute top-2 left-2 w-3 h-3 border-t border-l" style={{ borderColor: c }} />
        <span className="absolute top-2 right-2 w-3 h-3 border-t border-r" style={{ borderColor: c }} />
        <span className="absolute bottom-2 left-2 w-3 h-3 border-b border-l" style={{ borderColor: c }} />
        <span className="absolute bottom-2 right-2 w-3 h-3 border-b border-r" style={{ borderColor: c }} />
      </div>
    </div>
  );
}
