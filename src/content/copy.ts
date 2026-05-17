import type { Bi } from "@/components/LanguageProvider";

export const COPY = {
  navLinks: [
    { id: "hero",       label: { en: "00 / INTRO",       zh: "00 / 引言" } },
    { id: "xinjiang",   label: { en: "02 / XINJIANG",    zh: "02 / 新疆" } },
    { id: "yunnan",     label: { en: "03 / YUNNAN",      zh: "03 / 云南" } },
    { id: "clan",       label: { en: "04 / CLAN",        zh: "04 / 宗族" } },
    { id: "labor",      label: { en: "05 / LABOR",       zh: "05 / 劳务" } },
    { id: "border",     label: { en: "06 / BORDER",      zh: "06 / 边贸" } },
    { id: "religious",  label: { en: "07 / RELIGIOUS",   zh: "07 / 宗教" } },
    { id: "timeline",   label: { en: "08 / HISTORY",     zh: "08 / 历史" } },
    { id: "infra",      label: { en: "09 / INFRA",       zh: "09 / 基础设施" } },
    { id: "governance", label: { en: "10 / GOVERNANCE",  zh: "10 / 治理" } },
    { id: "closing",    label: { en: "11 / FRONTIER",    zh: "11 / 边界" } },
  ] as { id: string; label: Bi }[],

  brand: { en: "INVISIBLE FLOWS", zh: "无形之流" },
  brandSub: { en: "A FIELD GUIDE", zh: "田野指南" },

  banner: {
    en: "EDITORIAL POSITION · Analytical, victim-forward, drawn from public sources. The site does not endorse, instruct, or romanticize any of the activities it describes.",
    zh: "编辑立场 · 以分析为本,以受害者为先,材料取自公开来源。本站不为所述任何行为背书、教学或美化。",
  },

  hero: {
    eyebrow: { en: "01 / INTRODUCTION", zh: "01 / 引言" },
    titleA:  { en: "Invisible",     zh: "无形的" },
    titleB:  { en: "Population",    zh: "人口" },
    titleC:  { en: "Flows.",        zh: "流。" },
    sub: {
      en: "Beneath every formal nation-state lies a second geography — of underground labor, family networks, criminal logistics, and the people who are moved by force. This field guide traces six patterns inside and across the borders of modern China, the historical river they flow from, and the governance machinery rising to meet them.",
      zh: "在每一个正式的民族国家之下,叠着第二张地理图——地下劳动、家族网络、犯罪物流,以及被迫被迁移的人。本指南梳理六种穿越现代中国边界的模式、它们所自的历史长河,以及为应对它们而生长的治理机器。",
    },
    note: {
      en: "Editorial frame · We name patterns, harms, and governance. We do not give routes, methods, contacts, or any operational detail.",
      zh: "编辑框架 · 我们指认模式、伤害与治理。我们不提供路线、方法、联系方式或任何操作细节。",
    },
    scrollCue: { en: "READ AS A SYSTEM", zh: "把它当系统来读" },
  },

  heroStatsTag:   { en: "BASELINE · GLOBAL & REGIONAL", zh: "基线 · 全球与区域" },
  patternsTag:    { en: "SIX REGIONAL PATTERNS", zh: "六种区域模式" },
  patternsTitle:  { en: "Each border is a separate logic.", zh: "每一条边界,自有其逻辑。" },
  patternsSub: {
    en: "The PRC's 22,000-km land frontier and its long coastline do not produce one migration system; they produce six, each with its own push factors, intermediaries, harms, and modes of governance. Read them one by one.",
    zh: "中国 2.2 万公里陆地边境与漫长的海岸线,并不产生一种迁徙体系,而是六种;各有其推力、中介、伤害与治理方式。请逐一阅读。",
  },

  patternFields: {
    region:     { en: "REGION",            zh: "区域" },
    status:     { en: "STATUS",            zh: "状态" },
    theme:      { en: "THEME",             zh: "主题" },
    push:       { en: "PUSH FACTORS",      zh: "推力" },
    pull:       { en: "PULL FACTORS",      zh: "拉力" },
    actors:     { en: "ACTORS",            zh: "参与方" },
    harm:       { en: "HARM DIMENSION",    zh: "伤害维度" },
    governance: { en: "GOVERNANCE",        zh: "治理" },
    route:      { en: "INDICATIVE ROUTE",  zh: "示意路径" },
  },

  // Timeline
  timelineEyebrow: { en: "08 / HISTORICAL EVOLUTION", zh: "08 / 历史演化" },
  timelineTitle:   { en: "Eight eras, one river.",   zh: "八个时代,一条长河。" },
  timelineSub: {
    en: "Migration is older than the borders it crosses. The same coastal valleys that send people now sent people in 1850. The same passes that closed in 2008 had been open since the Silk Road. The form changes; the river does not.",
    zh: "迁徙比它穿越的边境更古老。今天送出人的沿海河谷,1850 年也送出过人。2008 年关闭的那些山口,自丝路以来一直在那里。形式在变,河流不变。",
  },

  // Infrastructure
  infraEyebrow: { en: "09 / UNDERGROUND INFRASTRUCTURE · TAXONOMY", zh: "09 / 地下基础设施 · 类型学" },
  infraTitle: {
    en: "The same six layers, every time.",
    zh: "永远是同样的六层。",
  },
  infraSub: {
    en: "Every irregular-migration system, from the 19th-century Pacific coolie trade to today's compound economy, reuses the same architecture: identity, communications, money, logistics, recruitment, destination capture. We describe the layers analytically. We do not describe how to operate them.",
    zh: "每一个不规则迁徙系统,从 19 世纪太平洋苦力贸易到今日的园区经济,都重复使用同一架构:身份、通讯、资金、物流、招募、目的地控制。我们以分析方式描述这些层。我们不描述如何运作它们。",
  },
  infraFields: {
    layer:      { en: "LAYER",             zh: "层" },
    desc:       { en: "DESCRIPTION",       zh: "描述" },
    harm:       { en: "WHY IT MATTERS",    zh: "为何重要" },
  },

  // Governance
  govEyebrow: { en: "10 / GOVERNANCE & FUTURE", zh: "10 / 治理与未来" },
  govTitle: {
    en: "From discrete checkpoints to a continuous perimeter.",
    zh: "从离散的关口,变成连续的周界。" ,
  },
  govSub: {
    en: "Border control has shifted from physical gates to data flows. Every tool that catches a trafficker can also catch a dissident, a journalist, or a citizen owed privacy. The future of migration governance is a balancing problem — not a technical one.",
    zh: "边境管控,已经从物理关口转向数据流。每一件能抓获人贩的工具,也同样能抓住异见者、记者,或一个享有隐私权的普通公民。迁徙治理的未来,是一个平衡问题——而非一个技术问题。",
  },
  govFields: {
    area:        { en: "AREA",         zh: "领域" },
    description: { en: "DESCRIPTION",  zh: "描述" },
    risk:        { en: "RISK",         zh: "风险" },
    example:     { en: "EXAMPLE",      zh: "例" },
  },

  // Closing
  closeEyebrow: { en: "11 / THE FRONTIER", zh: "11 / 边界" },
  closeTitleA:  { en: "Borders are recent.", zh: "边界是新近的发明。" },
  closeTitleB:  { en: "Movement is ancient.", zh: "迁徙却是远古的。" },
  closeLines: [
    { a: { en: "Civilization is what migration built",    zh: "文明是迁徙所建造的" },        b: { en: "when it stopped.", zh: "在它停下的时候。" } },
    { a: { en: "Identity is what migration tested",        zh: "身份是迁徙所考验的" },        b: { en: "when it moved.",   zh: "在它移动的时候。" } },
    { a: { en: "Labor is what migration redistributed",    zh: "劳动是迁徙所再分配的" },      b: { en: "when it priced.",  zh: "在它定价的时候。" } },
    { a: { en: "Technology is what governance learned",    zh: "技术是治理所学到的" },        b: { en: "when it watched.", zh: "在它注视的时候。" } },
  ] as { a: Bi; b: Bi }[],
  closeBody: {
    en: "A field guide does not solve a problem. It marks where the problem is, names who carries the cost, and trusts the reader with the rest. Behind every dot on these maps is a person who decided that the risk of moving was lower than the risk of staying. That calculation is the oldest one humans make.",
    zh: "田野指南并不解决问题。它指出问题所在,指认承担代价的人,余下的部分,交给读者。每一张地图上的每一个点,都是一个人作出的判断——迁徙的风险,小于停留的风险。这,是人类做过最古老的一笔计算。",
  },
  closeQuote: {
    en: "Borders are human constructs. Migration is an ancient force.",
    zh: "边界,是人为的构造;迁徙,是远古的力量。",
  },
  closeFoot: { en: "Drawn from public sources · IOM · UNODC · GI-TOC · academic & investigative journalism", zh: "取自公开来源 · IOM · UNODC · GI-TOC · 学术与调查报道" },

  // Sources strip
  sourcesEyebrow: { en: "SOURCES & FURTHER READING", zh: "来源与延伸阅读" },
  sourcesSub: {
    en: "Pointers to the kinds of public sources this field guide draws on. Specific articles and dates are intentionally generic — chase the names, not the URLs.",
    zh: "本指南所借助的公开来源类别。具体文章与日期刻意从略——追作者,而非链接。",
  },
};
