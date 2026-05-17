"use client";

import { useEffect, useRef, useState } from "react";

export default function Counter({ to, suffix = "", duration = 1800 }: {
  to: number; suffix?: string; duration?: number;
}) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting || fired.current) return;
      fired.current = true;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setV(to * eased);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.35 });
    obs.observe(node);
    return () => obs.disconnect();
  }, [to, duration]);

  // preserve commas in display
  const display = Math.round(v).toLocaleString("en-US");
  return <span ref={ref} className="num">{display}{suffix}</span>;
}
