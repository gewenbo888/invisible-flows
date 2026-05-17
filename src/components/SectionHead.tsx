"use client";

import { motion } from "framer-motion";

export default function SectionHead({
  eyebrow, title, sub, tone = "ember",
}: {
  eyebrow: string;
  title: string | React.ReactNode;
  sub?: string;
  tone?: "ember" | "cold" | "amber";
}) {
  return (
    <div className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="flex items-center gap-3 font-mono text-[10px] tracking-widestest text-line mb-5"
      >
        <span className={tone === "cold" ? "text-cold-glow" : tone === "amber" ? "text-amber-400" : "text-ember-glow"}>●</span>
        <span>{eyebrow}</span>
        <span className="flex-1 hairline-h max-w-[200px]" />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-bone"
      >
        {title}
      </motion.h2>
      {sub && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-5 max-w-3xl text-lg text-ash/80 leading-relaxed"
        >
          {sub}
        </motion.p>
      )}
    </div>
  );
}
