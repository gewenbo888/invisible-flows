"use client";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(255,61,87,0.07) 0%, rgba(6,7,10,0) 50%), radial-gradient(ellipse at 80% 80%, rgba(62,180,255,0.06) 0%, rgba(6,7,10,0) 55%)",
        }}
      />
      <div className="absolute inset-0 grid-fine opacity-70" />
      <div className="absolute inset-0 scanline opacity-90" />
    </div>
  );
}
