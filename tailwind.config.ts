import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#06070a",
        carbon: "#0a0d12",
        steel: "#11151c",
        wire: "#1a2030",
        line: "#252e3f",
        ash: "#bcc2cf",
        bone: "#e7eaf2",
        ember: {
          50:  "#ffe4e9",
          100: "#ffb8c4",
          200: "#ff7a8e",
          300: "#ff3d57",
          400: "#ff1f3a",
          500: "#e0142c",
          600: "#b40d22",
        },
        cold: {
          50:  "#e6f5ff",
          100: "#b2e1ff",
          200: "#7ccdff",
          300: "#3eb4ff",
          400: "#1898e3",
          500: "#0072b3",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Spectral", "Georgia", "serif"],
        body:    ["var(--font-body)",    "Inter", "system-ui", "sans-serif"],
        mono:    ["var(--font-mono)",    "JetBrains Mono", "monospace"],
        han:     ["var(--font-han)",     "Noto Serif SC", "Songti SC", "serif"],
      },
      letterSpacing: {
        widerer:   "0.18em",
        widestest: "0.32em",
      },
    },
  },
  plugins: [],
};
export default config;
