import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const TITLE_EN = "Invisible Flows · A Field Guide to Underground Migration";
const TITLE_ZH = "无形之流 · 地下迁徙田野指南";
const DESC =
  "A bilingual analytical field guide to six regional patterns of irregular migration and cross-border movement around modern China — drawn from public sources, victim-forward, never operational.";

export const metadata: Metadata = {
  metadataBase: new URL("https://invisible-flows.psyverse.fun"),
  title: `${TITLE_EN} | ${TITLE_ZH}`,
  description: DESC,
  keywords: [
    "migration", "irregular migration", "trafficking", "snakehead",
    "Mekong scam compounds", "border governance", "diaspora",
    "labor export", "Fujian migration", "Tibet exile", "Himalayan border",
    "Central Asia", "Myanmar border", "investigative",
    "无形之流", "地下迁徙", "蛇头", "缅北", "电信诈骗", "劳务输出",
    "边境治理", "西藏流亡", "中亚走廊", "侨民",
  ],
  authors: [{ name: "Gewenbo", url: "https://psyverse.fun" }],
  alternates: {
    canonical: "/",
    languages: { en: "/", "zh-CN": "/", "x-default": "/" },
  },
  openGraph: {
    title: TITLE_EN,
    description:
      "Six patterns. One frontier. A bilingual field guide drawn from public sources — analytical, victim-forward, never operational.",
    url: "https://invisible-flows.psyverse.fun/",
    siteName: "Psyverse",
    type: "website",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE_EN,
    description: "Borders are recent. Movement is ancient.",
  },
  robots: { index: true, follow: true },
  other: { "theme-color": "#06070a" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Spectral:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@300;400;500&family=Noto+Serif+SC:wght@400;500;600;700&family=Noto+Sans+SC:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: TITLE_EN,
              alternateName: TITLE_ZH,
              description: DESC,
              url: "https://invisible-flows.psyverse.fun/",
              inLanguage: ["en", "zh-CN"],
              author: { "@type": "Person", name: "Gewenbo", url: "https://psyverse.fun/" },
              publisher: { "@type": "Organization", name: "Psyverse", url: "https://psyverse.fun/" },
            }),
          }}
        />
      </head>
      <body className="bg-void text-ash">
        {children}
        <Script
          src="https://analytics-dashboard-two-blue.vercel.app/tracker.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
