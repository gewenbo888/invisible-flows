import type { Bi } from "@/components/LanguageProvider";

// All material is drawn from public reporting and academic literature:
// IOM / UNODC, GI-TOC, USIP, Sheldon Zhang, Frank Pieke, Adrian Zenz,
// AP, Reuters, NYT, Sixth Tone, ProPublica, BBC, RFA, Initium, Caixin.
// This is analytical, not operational. No routes, methods, contacts.

export type Pattern = {
  id: string;
  idx: string;
  region: Bi;
  title: Bi;
  han: string;
  theme: Bi;
  body: Bi;
  push: Bi[];
  pull: Bi[];
  actors: Bi[];
  harm: Bi;
  governance: Bi;
  status: Bi;
  accent: "ember" | "cold" | "amber";
  routeFrom: { x: number; y: number; label: Bi };
  routeTo:   { x: number; y: number; label: Bi };
  routeVia:  { x: number; y: number; label: Bi }[];
};

export const HERO_STATS: { label: Bi; value: string; unit: Bi; note: Bi }[] = [
  {
    label: { en: "International migrants worldwide", zh: "全球国际移民" },
    value: "281",
    unit:  { en: "M (2020, IOM)", zh: "百万 (IOM 2020)" },
    note:  { en: "~3.6% of humanity lives outside its country of birth",
              zh: "约 3.6% 的人,不住在自己出生的国家" },
  },
  {
    label: { en: "Est. global irregular migration", zh: "全球不规则移民估算" },
    value: "~50",
    unit:  { en: "M (analyst ranges)", zh: "百万 (分析机构区间)" },
    note:  { en: "By definition uncountable — wide confidence intervals",
              zh: "本质上不可数——置信区间很宽" },
  },
  {
    label: { en: "Identified trafficking victims (2022)", zh: "已识别贩运受害人 (2022)" },
    value: "115K",
    unit:  { en: "(UNODC, lower bound)", zh: "(UNODC,下限)" },
    note:  { en: "Actual number likely several multiples higher",
              zh: "实际数量很可能是其数倍" },
  },
  {
    label: { en: "Reported Myanmar scam-compound victims", zh: "缅北诈骗园区已报告受害" },
    value: "200K+",
    unit:  { en: "(UN OHCHR 2023 estimate)", zh: "(联合国人权高专办 2023)" },
    note:  { en: "Coerced labor across Cambodia, Myanmar, Laos",
              zh: "柬埔寨、缅甸、老挝多国胁迫劳动" },
  },
  {
    label: { en: "China's land border length", zh: "中国陆地边界长度" },
    value: "22,000",
    unit:  { en: "km / 14 neighbors", zh: "公里 / 14 邻国" },
    note:  { en: "Second longest in the world after Russia",
              zh: "仅次于俄罗斯,世界第二长" },
  },
  {
    label: { en: "Remittances received (China, 2023)", zh: "中国汇入侨汇 (2023)" },
    value: "$50",
    unit:  { en: "B (World Bank, gross)", zh: "十亿美元 (世界银行)" },
    note:  { en: "Diaspora capital flow — legal channel comparison",
              zh: "侨民资本流——合法渠道作参照" },
  },
];

export const TICKER: Bi[] = [
  { en: "INVISIBLE FLOWS · A FIELD GUIDE",  zh: "无形之流 · 田野指南" },
  { en: "ANALYTICAL · NOT OPERATIONAL",     zh: "分析向 · 非操作向" },
  { en: "VICTIM-FORWARD",                   zh: "以受害者为先" },
  { en: "DRAWN FROM PUBLIC SOURCES",        zh: "取自公开来源" },
  { en: "IOM · UNODC · GI-TOC · USIP",      zh: "IOM · UNODC · GI-TOC · USIP" },
  { en: "READ EACH PATTERN AS A SYSTEM",    zh: "把每个模式当作一个系统来读" },
];

export const PATTERNS: Pattern[] = [
  {
    id: "xinjiang",
    idx: "02",
    region: { en: "Xinjiang · Central Asian frontier", zh: "新疆 · 中亚边境" },
    title:  { en: "The securitized frontier",          zh: "被安全化的边境" },
    han:    "西北型 · 边境与安全",
    theme:  { en: "Cross-border movement reframed as security",
              zh: "跨境移动被重新框定为安全问题" },
    body: {
      en: "For centuries, the corridor connecting Xinjiang to Central Asia was a Silk Road of traders, herders, and pilgrims. After the 2009 Ürümqi unrest and a series of violent incidents in the early 2010s, Beijing's framing shifted decisively toward counter-terrorism. From 2017 onward an unprecedented surveillance and detention apparatus was built — documented in the Xinjiang Police Files, by AP, BuzzFeed, the Australian Strategic Policy Institute, and researchers such as Adrian Zenz — and cross-border travel for Uyghurs collapsed in volume and freedom. Outside observers have raised serious human-rights concerns about the system itself; Beijing presents it as anti-extremism. Both framings are part of how the border now functions.",
      zh: "在数百年里,连接新疆与中亚的这条走廊是丝绸之路上的商旅、牧人与朝圣者的通道。2009 年乌鲁木齐事件,以及 2010 年代初期一系列暴力事件之后,北京的话语决定性地转向反恐。2017 年以后,一套前所未有的监控与拘押体系被建立——《新疆警察文件》、AP、BuzzFeed、澳大利亚战略政策研究所与 Adrian Zenz 等记者与研究者均有记录——维吾尔人的跨境流动在体量与自由度上都大幅萎缩。境外观察者对该体系本身提出严重的人权关切,北京则以反极端主义来定义它。两种框定,都是今天这条边境运作的一部分。",
    },
    push: [
      { en: "Economic disparity with the coast",                   zh: "与沿海的经济差距" },
      { en: "Cultural and religious restrictions",                  zh: "文化与宗教限制" },
      { en: "Family ties to Central Asian diaspora",                zh: "中亚侨民的亲缘联系" },
      { en: "Post-2014 sense of unsafety in either direction",      zh: "2014 年后双向的不安全感" },
    ],
    pull: [
      { en: "Pre-2017 Turkish & Saudi religious-study tracks",      zh: "2017 年前的土耳其与沙特宗教研学通道" },
      { en: "Trade & herding economies that predate the border",    zh: "比边境更久远的贸易与游牧经济" },
      { en: "Diaspora communities in Kazakhstan, Turkey, Europe",   zh: "在哈萨克、土耳其、欧洲的散居社区" },
    ],
    actors: [
      { en: "Bingtuan & Public Security border units",              zh: "兵团与公安边境部门" },
      { en: "Local kinship and trade networks",                     zh: "当地亲缘与贸易网络" },
      { en: "Transit-country brokers (Kazakhstan, Türkiye)",        zh: "中转国掮客(哈萨克、土耳其)" },
      { en: "Diaspora rights organizations abroad",                 zh: "海外散居人权组织" },
    ],
    harm: {
      en: "Families separated across borders, in some cases for years. Documented cases of returnees detained on arrival. The harm runs both ways: communities inside, and relatives outside who lose contact entirely.",
      zh: "家庭被边境隔开,有时一隔数年。已记录的案例中,归国者抵境即被拘。伤害是双向的:境内的社区,以及彻底失联的境外亲属。",
    },
    governance: {
      en: "Integrated grid policing, biometric collection at scale, mandatory app installation programs, exit-permit regimes, ID-checkpoint density unmatched elsewhere in China.",
      zh: "网格化警务、规模化的生物特征采集、强制安装应用、出境审批、密度全国最高的身份核验卡点。",
    },
    status: { en: "HIGHLY RESTRICTED · post-2017", zh: "高度受限 · 2017 后" },
    accent: "ember",
    routeFrom: { x: 22, y: 36, label: { en: "Xinjiang", zh: "新疆" } },
    routeTo:   { x: 64, y: 28, label: { en: "Türkiye / Europe", zh: "土耳其 / 欧洲" } },
    routeVia: [
      { x: 30, y: 30, label: { en: "Kazakhstan", zh: "哈萨克" } },
      { x: 46, y: 24, label: { en: "Caucasus / Iran", zh: "高加索 / 伊朗" } },
    ],
  },
  {
    id: "yunnan",
    idx: "03",
    region: { en: "Yunnan · Myanmar border", zh: "云南 · 中缅边境" },
    title:  { en: "The Mekong gray zone",     zh: "湄公河灰色地带" },
    han:    "西南型 · 缅北与电诈",
    theme:  { en: "Porous mountains, armed enclaves, scam compounds",
              zh: "渗漏的山区、武装飞地、电诈园区" },
    body: {
      en: "The PRC–Myanmar boundary runs 2,200 km through some of Asia's most rugged terrain, with the Wa, Kokang, Mong La and other autonomous zones operating as de facto polities outside Naypyidaw's control. Since roughly 2020, these zones — together with Sihanoukville in Cambodia and parts of Laos — have hosted the world's largest concentration of telecom-fraud compounds. UN OHCHR estimates 'hundreds of thousands' of trafficked workers, lured under fake job offers, are coerced into running romance and investment scams aimed largely at Chinese-speakers and increasingly globally. This is not migration in the romantic sense. It is enslavement at industrial scale, documented by Reuters, AP, ProPublica, GI-TOC, Al Jazeera, and survivor testimony.",
      zh: "中缅边境绵延 2,200 公里,穿过亚洲最崎岖的地形之一;佤、果敢、勐拉及若干自治区,在内比都的实际控制之外,几乎是事实上的政治体。约从 2020 年起,这些地带——连同柬埔寨西哈努克城和老挝部分地区——成了全球电信诈骗园区最集中的地方。联合国人权高专办估算被贩运至此的工人达数十万,他们被虚假招聘骗入,在胁迫下实施面向华语世界、并日益面向全球的杀猪盘与投资诈骗。这不是浪漫意义上的迁徙,而是工业规模的奴役——路透、AP、ProPublica、GI-TOC、半岛电视台以及幸存者证词均有记录。",
    },
    push: [
      { en: "Job-market stress in young-male cohorts",              zh: "青年男性就业市场压力" },
      { en: "Translation of online job ads into off-platform offers",zh: "线上招聘广告引向平台外报价" },
      { en: "Cross-border family/clan ties in Yunnan",              zh: "云南地区跨境的亲缘联系" },
    ],
    pull: [
      { en: "Wage premiums advertised by recruiters (false)",        zh: "招募者宣传的工资溢价(虚假)" },
      { en: "Visa-free or low-friction entry to neighboring states", zh: "邻国免签或低门槛入境" },
      { en: "Compound operators' extraction economics",              zh: "园区运营方的榨取经济学" },
    ],
    actors: [
      { en: "Compound operators, often ethnic-Chinese-led",          zh: "园区运营方,多为华裔" },
      { en: "Local armed groups (Wa, Kokang, others)",               zh: "当地武装(佤、果敢等)" },
      { en: "Recruiter networks across SE Asia and PRC",             zh: "东南亚与中国的招募网络" },
      { en: "Police anti-fraud bureaus, joint operations",           zh: "公安反诈中心,跨境联合行动" },
    ],
    harm: {
      en: "Trafficked workers held by debt-bondage, physical abuse, and confiscated passports. Compound revenue is generated by harming a separate global pool of fraud victims. Both groups are victims of the same machine.",
      zh: "被贩运的工人,以债务奴役、肢体虐待、扣押护照之名被囚禁。园区收入由伤害另一群全球诈骗受害者所产生。两群人,是同一台机器的受害者。",
    },
    governance: {
      en: "2023–24 mass deportations from northern Myanmar to PRC custody; Mekong joint patrols; OHCHR pressure on host states; financial-tracing cooperation that is slowly closing the on-ramp.",
      zh: "2023–24 年从缅北向中国大规模遣返;湄公河联合巡逻;人权高专办对收容国施压;金融追踪合作正缓慢收紧入口。",
    },
    status: { en: "ACTIVE · partial dismantlement underway", zh: "活跃中 · 部分被拆除" },
    accent: "ember",
    routeFrom: { x: 58, y: 56, label: { en: "Yunnan", zh: "云南" } },
    routeTo:   { x: 46, y: 64, label: { en: "Myanmar / Cambodia compounds", zh: "缅 / 柬园区" } },
    routeVia: [
      { x: 54, y: 60, label: { en: "Border crossings", zh: "边境口岸" } },
    ],
  },
  {
    id: "clan",
    idx: "04",
    region: { en: "Fujian · Zhejiang · Guangdong", zh: "福建 · 浙江 · 广东" },
    title:  { en: "Chain migration & the snakehead economy", zh: "链式移民与蛇头经济" },
    han:    "宗族型 · 福建、浙江、广东",
    theme:  { en: "Coastal kinship as a transnational business model",
              zh: "沿海宗族,作为一种跨国生意" },
    body: {
      en: "Few migration systems have been studied more carefully than the Fuzhou-to-New York chain that began in the 1980s. Sheldon Zhang's Smuggled Chinese, Patrick Radden Keefe's The Snakehead, and Frank Pieke's decades of fieldwork describe a kinship-financed, village-validated, family-repaid pattern: a household pools savings, contracts with a snakehead, and the migrant pays back over years through restaurant or garment work. Zhejiang's Wenzhou diaspora built much of Europe's wholesale-textile geography. Guangdong's earlier 19th-century chain seeded Chinatowns from San Francisco to Vancouver. The system has horrors — the 2000 Dover container deaths, the 1993 Golden Venture grounding — and also a vast legal diaspora it gradually became.",
      zh: "极少有移民体系比 1980 年代开启的福州–纽约链条被研究得更细。Sheldon Zhang《被偷运的中国人》、Patrick Radden Keefe《蛇头》、以及 Frank Pieke 数十年的田野,描述的是一个由宗族出资、村庄背书、家庭偿付的模式:家户凑钱,与蛇头签约,移民通过餐馆或制衣工作,数年偿还。浙江温州侨民,几乎构建了今日欧洲的批发纺织地理。广东更早的 19 世纪链条,从旧金山到温哥华播下唐人街的种子。这个体系有它的恐怖——2000 年多佛集装箱惨案、1993 年金色冒险号搁浅——也有它逐步演化出的庞大合法侨群。",
    },
    push: [
      { en: "Local labor markets saturated by 1990s",                zh: "1990 年代起本地劳动力市场饱和" },
      { en: "Status economy of remittance-funded houses",            zh: "侨汇造屋形成的地位经济" },
      { en: "Network effects: each migrant lowers cost for the next", zh: "网络效应:每位移民降低下一位的成本" },
    ],
    pull: [
      { en: "Restaurant/garment labor demand in US & EU",            zh: "美欧的餐馆/制衣业用工" },
      { en: "Family-reunification legal pathways",                    zh: "家庭团聚的合法路径" },
      { en: "Diaspora associations & dialect-group capital",          zh: "侨乡社团与同乡资本" },
    ],
    actors: [
      { en: "Snakehead organizations (small, kinship-tied)",          zh: "蛇头组织(规模小,亲缘紧密)" },
      { en: "Diaspora restaurant chains & wholesalers",               zh: "侨民餐馆连锁与批发商" },
      { en: "Village-bank-style informal credit",                     zh: "村寨钱庄式的非正式信贷" },
      { en: "Receiving-country asylum & immigration systems",         zh: "接收国的庇护与移民系统" },
    ],
    harm: {
      en: "Deaths in transit (Dover 2000, English Channel crossings, container & cargo-hold fatalities). Years of debt servitude in receiving countries. Vulnerability to wage theft and exploitation precisely because of irregular status.",
      zh: "途中死亡(2000 年多佛、英吉利海峡偷渡、集装箱与货舱窒息)。在接收国数年的债务奴役。正因身份非常规,易遭克扣工资与剥削。",
    },
    governance: {
      en: "US–PRC cooperation has waxed and waned with the broader relationship. EU FRONTEX and US ICE prosecution of snakehead rings. Asylum-system stress in NYC and Paris in the 2020s. A long-term migration that became, for most families, a long-term legal diaspora.",
      zh: "中美在此领域的合作,与整体关系共起伏。欧盟 FRONTEX、美国 ICE 对蛇头团伙的起诉。2020 年代纽约与巴黎庇护体系承压。一场长周期的迁徙,最终对大多数家庭而言成为一场长周期的合法侨居。",
    },
    status: { en: "ACTIVE · multi-decade pattern", zh: "活跃中 · 跨数十年模式" },
    accent: "cold",
    routeFrom: { x: 70, y: 56, label: { en: "Fuzhou / Wenzhou", zh: "福州 / 温州" } },
    routeTo:   { x: 18, y: 36, label: { en: "NYC / EU cities", zh: "纽约 / 欧洲城市" } },
    routeVia: [
      { x: 50, y: 50, label: { en: "Maritime / air transit", zh: "海路 / 空中中转" } },
      { x: 30, y: 40, label: { en: "C. America land route (some)", zh: "中美洲陆路(部分)" } },
    ],
  },
  {
    id: "labor",
    idx: "05",
    region: { en: "Northeast · Hebei · Shandong · Jiangsu", zh: "东北 · 河北 · 山东 · 江苏" },
    title:  { en: "Labor export at the edge of legality", zh: "处在合法边缘的劳务输出" },
    han:    "劳务型 · 华北与东北",
    theme:  { en: "Formal labor-export systems that gray-zone at the edges",
              zh: "在边缘灰色化的正式劳务输出" },
    body: {
      en: "China runs one of the world's largest formal labor-export programs — hundreds of thousands of workers per year placed by licensed agencies in construction, fishing, agriculture, and care across Africa, the Gulf, Russia, and Southeast Asia. The gray zone sits at the edges of this system: workers contracted under tourist visas, passports retained 'for safekeeping,' wages paid through opaque intermediaries, and bait-and-switch placements documented by China Labour Bulletin and academic researchers. In the Northeast, decades of state-sector decline have built an enduring out-migration pressure; in coastal labor markets, intermediaries match domestic shortages with informal supply.",
      zh: "中国运营着世界上最大的正式劳务输出体系之一——每年由持牌中介派出数十万劳工,赴非洲、海湾、俄罗斯与东南亚从事建筑、远洋捕捞、农业与护理。灰色地带位于这个体系的边缘:以旅游签证签约、护照\"代为保管\"、工资通过不透明中介发放、招聘与到岗不符——这些情况在《中国劳工通讯》与学界研究中有记录。东北地区数十年的国企衰退,造成持续的外迁压力;在沿海劳动力市场,中介将国内短缺与非正式供给对接。",
    },
    push: [
      { en: "State-sector decline; thin local job markets",           zh: "国企衰退;本地就业稀薄" },
      { en: "Aging-population stress on rural households",            zh: "老龄化对农村家户的压力" },
      { en: "Wage premium for overseas dispatch",                     zh: "外派工作的工资溢价" },
    ],
    pull: [
      { en: "Demand for construction/agri/fisheries labor",           zh: "建筑/农渔的用工缺口" },
      { en: "Russia & Belt-and-Road project sites",                   zh: "俄罗斯与一带一路项目工地" },
      { en: "Gulf service-sector recruitment",                        zh: "海湾服务业招募" },
    ],
    actors: [
      { en: "Licensed dispatch companies (zhongjie)",                  zh: "持牌劳务派遣公司(中介)" },
      { en: "Unlicensed intermediaries operating in margins",          zh: "在边缘运作的无证中介" },
      { en: "Host-country employers, large and small",                 zh: "派驻国雇主,规模不一" },
      { en: "MoFCOM, MoFA consular protection desks",                  zh: "商务部、外交部领事保护司" },
    ],
    harm: {
      en: "Wage theft, document confiscation, isolation from local language and legal recourse. Industrial accidents on overseas project sites. Cases of stranded workers requiring consular evacuation.",
      zh: "克扣工资、扣留证件、与当地语言及司法救济隔绝。境外项目工地工伤。被困工人需领事撤离的案例时有发生。",
    },
    governance: {
      en: "Periodic crackdowns on unlicensed brokers. Bilateral labor agreements with major destinations. Consular emergency hotlines. Whistleblower platforms run by China Labour Bulletin and similar outlets.",
      zh: "对无证中介的周期性整治。与主要目的国的双边劳务协议。领事应急热线。《中国劳工通讯》等机构运营的举报平台。",
    },
    status: { en: "ACTIVE · mixed legal/gray-zone", zh: "活跃中 · 合法/灰色混合" },
    accent: "cold",
    routeFrom: { x: 70, y: 38, label: { en: "Bohai rim / NE provinces", zh: "环渤海 / 东北" } },
    routeTo:   { x: 34, y: 50, label: { en: "Africa / Gulf / Russia", zh: "非洲 / 海湾 / 俄罗斯" } },
    routeVia: [
      { x: 50, y: 44, label: { en: "Air-charter routes", zh: "包机航线" } },
    ],
  },
  {
    id: "border",
    idx: "06",
    region: { en: "Guangxi · Hainan",   zh: "广西 · 海南" },
    title:  { en: "Border trade & maritime gray flows", zh: "边境贸易与海上灰色流" },
    han:    "边贸型 · 广西、海南",
    theme:  { en: "Smuggling as the lubricant of a 2,000-km border economy",
              zh: "走私,是这条 2,000 公里边贸经济的润滑剂" },
    body: {
      en: "The PRC–Vietnam land border and the Beibu Gulf form one of the world's densest small-scale cross-border economies — rice, cigarettes, fuel, consumer electronics, electronic waste, rare-earth concentrates, and (regrettably) wildlife products move in both directions, in legal, semi-legal, and outright illegal channels. Hainan's coastline and the Spratly-bordering fisheries add a maritime layer where ship-to-ship transfers, gray-market fuel, and unreported catches are documented by Hong Kong customs reports, the South China Sea NGO press, and Vietnamese coast-guard releases. The harm here is less about people moving and more about ecosystems, public health, and the displacement of formal taxable trade.",
      zh: "中越陆地边境与北部湾,构成全球最密集的小规模跨境经济之一——稻米、香烟、燃油、消费电子、电子废料、稀土精矿,以及(遗憾的是)野生动物制品,沿合法、半合法与彻底非法的渠道双向流动。海南的海岸线与靠近南沙的渔区,叠加一层海上维度:船到船过驳、灰色市场燃油、未报告渔获——香港海关报告、南海议题 NGO 媒体与越南海警通报均有记录。此处的伤害更多落在生态系统、公共健康,以及对正规可征税贸易的挤出。",
    },
    push: [
      { en: "Cross-border price arbitrage on basic goods",            zh: "基本商品的跨境价差套利" },
      { en: "Tariff & VAT differentials",                              zh: "关税与增值税的差异" },
      { en: "Border-county dependence on small trade",                 zh: "边境县对边贸的依赖" },
    ],
    pull: [
      { en: "Mainland demand for ASEAN consumer goods",                zh: "内地对东盟消费品的需求" },
      { en: "ASEAN demand for PRC electronics & e-waste recyclables",  zh: "东盟对中国电子产品与可回收电子废料的需求" },
      { en: "Maritime fuel-grade arbitrage (red diesel etc.)",         zh: "海上燃油等级套利(红柴等)" },
    ],
    actors: [
      { en: "Border-county trading households",                        zh: "边境县的边贸家庭" },
      { en: "Customs & coast-guard agencies",                          zh: "海关与海警" },
      { en: "Cross-strait fishing fleets",                             zh: "两岸渔船队" },
      { en: "ASEAN counterparts (Vietnam, Philippines)",               zh: "东盟方面(越南、菲律宾)" },
    ],
    harm: {
      en: "Wildlife trafficking entering global black markets; e-waste poisoning local watersheds; tax-base erosion in border counties; fishery overdraw.",
      zh: "野生动物制品进入全球黑市;电子废料毒害本地流域;边境县税基受蚀;渔业过度捕捞。",
    },
    governance: {
      en: "Customs reform, AIS-based ship monitoring, joint patrols, e-waste import bans (2018 onward), wildlife-trade enforcement under the Wildlife Protection Law revisions.",
      zh: "海关改革、基于 AIS 的船舶监管、联合巡逻、2018 年起电子废料进口禁令、《野生动物保护法》修订下的执法。",
    },
    status: { en: "ENDEMIC · co-evolves with enforcement", zh: "顽固存在 · 与执法共演化" },
    accent: "amber",
    routeFrom: { x: 64, y: 60, label: { en: "Guangxi / Hainan", zh: "广西 / 海南" } },
    routeTo:   { x: 56, y: 68, label: { en: "Vietnam / ASEAN", zh: "越南 / 东盟" } },
    routeVia: [
      { x: 60, y: 64, label: { en: "Beibu Gulf", zh: "北部湾" } },
    ],
  },
  {
    id: "religious",
    idx: "07",
    region: { en: "Tibet · Himalayan frontier", zh: "西藏 · 喜马拉雅边境" },
    title:  { en: "Religious migration & the high passes", zh: "宗教迁徙与高山口岸" },
    han:    "宗教型 · 西藏与喜马拉雅",
    theme:  { en: "Pilgrimage, exile, and a high-altitude border",
              zh: "朝圣、流亡,与一条高海拔的边境" },
    body: {
      en: "After 1959, tens of thousands of Tibetans crossed into Nepal and on to Dharamsala, India, forming the world's largest Tibetan diaspora. From the 1980s through the early 2000s, an annual flow of pilgrims, students, and political refugees moved across the high Himalayan passes — Nangpa La, Kongma La — sometimes guided by smugglers, sometimes alone. A 2006 incident in which Chinese border guards shot at a group near Nangpa La, killing a 17-year-old nun, was filmed by climbers on Cho Oyu and became internationally visible. Since 2008, and with Nepal's tightening cooperation, the crossing has dropped to a trickle. The diaspora remains, the passes remain; what has changed is the politics on both sides.",
      zh: "1959 年后,数万藏人越境进入尼泊尔、转至印度达兰萨拉,构成了世界最大的藏人散居群体。从 1980 年代到 2000 年代初,朝圣者、求学者与政治难民,每年穿越喜马拉雅的高山口——囊帕拉、贡马拉——有时由偷渡者引路,有时独行。2006 年中国边防在囊帕拉附近向人群开火、打死一名 17 岁尼姑的事件,被卓奥友峰登山者摄下,引起国际关注。2008 年之后,加上尼泊尔合作收紧,跨境流动降到涓涓细流。散居仍在,山口仍在;变的是两边的政治。",
    },
    push: [
      { en: "Restrictions on monastic life and religious study",       zh: "对寺院生活与宗教研学的限制" },
      { en: "Family reunification with diaspora in India",             zh: "与印度散居家人团聚" },
      { en: "Educational aspirations not available locally",           zh: "本地无法满足的求学诉求" },
    ],
    pull: [
      { en: "Diaspora institutions in Dharamsala",                     zh: "达兰萨拉的散居机构" },
      { en: "Pilgrimage sites in India & Nepal",                       zh: "印度与尼泊尔的朝圣地" },
      { en: "International monastic education systems",                zh: "国际化的寺院教育体系" },
    ],
    actors: [
      { en: "Local guides familiar with the high passes",              zh: "熟悉高山口的当地向导" },
      { en: "Tibetan Government in Exile (CTA), Dharamsala",           zh: "西藏流亡政府 (CTA),达兰萨拉" },
      { en: "Nepalese police & UNHCR border operations",               zh: "尼泊尔警察与联合国难民署边境业务" },
      { en: "PRC border defense forces",                               zh: "中国边防部队" },
    ],
    harm: {
      en: "Altitude, frostbite, and exposure deaths on the high passes — and the Nangpa La incident as a documented case of lethal force at the border.",
      zh: "高海拔、冻伤与暴露致死,常见于高山口;囊帕拉事件,是边境致命武力的一桩已记录案例。",
    },
    governance: {
      en: "Tightened PRC border defense post-2008; reduced UNHCR access in Nepal; visa & passport regime governing pilgrimage; ongoing diplomatic dialogue around exile politics.",
      zh: "2008 年后中国边防收紧;尼泊尔境内 UNHCR 准入收窄;管控朝圣的签证与护照制度;围绕流亡政治的外交对话持续。",
    },
    status: { en: "DIMINISHED · post-2008", zh: "大幅减少 · 2008 后" },
    accent: "cold",
    routeFrom: { x: 38, y: 50, label: { en: "Lhasa region", zh: "拉萨地区" } },
    routeTo:   { x: 28, y: 60, label: { en: "Nepal → Dharamsala", zh: "尼泊尔 → 达兰萨拉" } },
    routeVia: [
      { x: 33, y: 55, label: { en: "Himalayan passes", zh: "喜马拉雅山口" } },
    ],
  },
];

// Section 8 — historical evolution
export type EraT = { id: string; year: Bi; era: Bi; han: string; body: Bi; color: string };

export const ERAS: EraT[] = [
  { id: "silk",     year: { en: "BCE–1450",  zh: "公元前–1450" }, era: { en: "Silk Road era",            zh: "丝路时代" }, han: "丝路", body: { en: "Caravans, monks, envoys. Borders existed but were membranes, not walls. People moved with goods.",                       zh: "商队、僧侣、使者。边界存在,但是是膜,而非墙。人随货流动。" }, color: "#cb944a" },
  { id: "sea",      year: { en: "1840–1949",  zh: "1840–1949" },   era: { en: "Coolie + diaspora",        zh: "苦力与早期侨民" }, han: "下南洋", body: { en: "South-China coastal villages export to Southeast Asia, the Americas, Australia. The Chinatown system forms.",                     zh: "华南沿海村庄向东南亚、美洲、澳洲输出人口。唐人街体系形成。" }, color: "#a78b6c" },
  { id: "cold",     year: { en: "1949–1978",  zh: "1949–1978" },   era: { en: "Cold-war defections",      zh: "冷战出走" }, han: "冷战", body: { en: "Wave swimming to Hong Kong from Guangdong (大逃港 1962/1972/1979). Defections through 3rd countries.",                              zh: "广东向香港的偷渡潮(大逃港 1962/1972/1979)。经第三国的政治流亡。" }, color: "#7a9bb8" },
  { id: "reform",   year: { en: "1978–2001",  zh: "1978–2001" },   era: { en: "Reform-era exit",          zh: "改革开放出走" }, han: "改革", body: { en: "Fujian–NY chain begins; Zhejiang–EU wholesale corridors form; first wave of student & investor migration.",                          zh: "福州–纽约链条开启;浙江–欧洲批发走廊形成;留学与投资移民首批。" }, color: "#5cc0e8" },
  { id: "wto",      year: { en: "2001–2013",  zh: "2001–2013" },   era: { en: "Globalization peak",        zh: "全球化顶点" }, han: "全球化", body: { en: "WTO entry, container shipping, mass tourist visas. Labor export industrializes. Snakehead networks mature.",                            zh: "入世、集装箱化、规模化的旅游签证。劳务输出工业化。蛇头网络成熟。" }, color: "#3eb4ff" },
  { id: "digital",  year: { en: "2013–2019",  zh: "2013–2019" },   era: { en: "Digital migration",         zh: "数字化迁徙" }, han: "数字", body: { en: "WeChat-organized recruitment; live-stream remittance; platform-mediated job-matching legal and gray.",                                  zh: "微信组织的招募;直播侨汇;平台撮合的合法与灰色就业。" }, color: "#7ccdff" },
  { id: "scam",     year: { en: "2019–2024",  zh: "2019–2024" },   era: { en: "Compound era",              zh: "园区时代" }, han: "园区", body: { en: "Myanmar / Cambodia scam compounds emerge as industrial trafficking sites; PRC-Myanmar joint operations begin.",                              zh: "缅、柬诈骗园区作为产业化贩运现场出现;中缅联合行动启动。" }, color: "#ff3d57" },
  { id: "future",   year: { en: "2025–",      zh: "2025–" },       era: { en: "Biometric perimeter",       zh: "生物边境" }, han: "未来", body: { en: "Facial recognition, passport biometrics, satellite ISR, financial chokepoints. Borders become continuous, not discrete.",                       zh: "人脸识别、护照生物特征、卫星 ISR、金融堵点。边境从离散点,变为连续面。" }, color: "#ffb13b" },
];

// Section 9 — Underground Infrastructure (analytical taxonomy, not operational)
export type InfraNode = { id: string; label: Bi; desc: Bi; harm: Bi };

export const INFRA: InfraNode[] = [
  { id: "ident",   label: { en: "Identity layer",       zh: "身份层" },     desc: { en: "Forged or recycled documents; multiple-passport households; alias-stacking.",         zh: "伪造或重复使用的证件;多护照家户;堆叠化名。" },                          harm: { en: "Enables both trafficking and the masking of victim identities for rescue.", zh: "既助长贩运,又妨碍救援时对受害人身份的核对。" } },
  { id: "comms",   label: { en: "Communications",        zh: "通讯层" },     desc: { en: "Encrypted chat for coordination — the same platforms used by everyone.",              zh: "用于协调的加密通讯——与所有人使用的同一类平台。" },                       harm: { en: "End-to-end encryption is a public good; misuse is a small fraction of total use.", zh: "端到端加密是公共品;被滥用的只是其总使用的一小部分。" } },
  { id: "money",   label: { en: "Money movement",         zh: "资金层" },     desc: { en: "Hawala-style informal value transfer; crypto on/off ramps; underground banks.",        zh: "Hawala 式非正式价值转移;加密货币出入金;地下钱庄。" },                       harm: { en: "Bypasses AML controls — central choke point for law enforcement.",         zh: "绕过反洗钱合规——是执法部门的核心堵点。" } },
  { id: "log",     label: { en: "Logistics",              zh: "物流层" },     desc: { en: "Cargo containers, tourism intermediaries, charter aircraft, fishing vessels.",        zh: "集装箱、旅游中介、包机、渔船。" },                                          harm: { en: "Container deaths (Dover 2000, Essex 2019) and maritime drownings.",         zh: "集装箱致死案(2000 多佛、2019 埃塞克斯)与海上溺亡。" } },
  { id: "recruit", label: { en: "Recruitment",            zh: "招募层" },     desc: { en: "Online job ads, dialect-group networks, family referrals, deceptive 'overseas dream' content.", zh: "线上招聘、同乡网络、亲友介绍、有欺骗性的\"海外梦\"内容。" },                  harm: { en: "First mile of trafficking; the moment consent is manufactured.",            zh: "贩运的第一公里;同意被制造的瞬间。" } },
  { id: "places",  label: { en: "Destination capture",    zh: "目的地控制" }, desc: { en: "Compound dormitories, single-employer arrangements, passport surrender.",              zh: "园区宿舍、单一雇主安排、护照上交。" },                                        harm: { en: "Where most ongoing harm happens — and where most rescues become possible.", zh: "持续伤害多发生在此——也是最多救援得以发生之处。" } },
];

// Section 10 — Governance
export type GovItem = { area: Bi; description: Bi; risk: Bi; example: Bi };

export const GOVERNANCE: GovItem[] = [
  { area: { en: "AI border surveillance",       zh: "AI 边境监控" }, description: { en: "Face + gait + license-plate recognition on integrated grids.",                          zh: "人脸 + 步态 + 车牌的网格化集成识别。" },                  risk: { en: "Dual-use: stops trafficking and tracks dissent equally well.", zh: "双重用途:既阻拦贩运,也同样追踪异见。" },              example: { en: "Skynet, Sharp Eyes, smart-city integrations",     zh: "天网、雪亮工程、智慧城市集成" } },
  { area: { en: "Biometric identity",            zh: "生物特征身份" }, description: { en: "DNA, iris, voiceprint and facial templates collected at scale.",                       zh: "DNA、虹膜、声纹、人脸模板的大规模采集。" },               risk: { en: "Concentrates identity power in single registries vulnerable to misuse.", zh: "把身份权力集中到容易被滥用的单一登记。" }, example: { en: "Resident ID 2nd-gen; e-passport rollout",          zh: "二代身份证;电子护照" } },
  { area: { en: "Financial chokepoints",         zh: "金融堵点" },     description: { en: "Cross-border RMB controls, AML screening, blockchain analytics on ramps.",            zh: "跨境人民币管制、反洗钱筛查、链上分析。" },                 risk: { en: "Most leveraged single tool; legitimate flows caught in the same net.", zh: "杠杆最大的单一工具;合法资金也被同一张网捕到。" }, example: { en: "SAFE quotas, hawala raids, USDT trace operations",  zh: "外管局额度、地下钱庄整治、USDT 链上追踪" } },
  { area: { en: "International cooperation",     zh: "国际合作" },     description: { en: "INTERPOL Red Notices, bilateral readmission, Mekong-zone joint operations.",          zh: "国际刑警红色通缉、双边遣返、湄公河联合行动。" },           risk: { en: "Cooperation lapses with geopolitical tension; victims pay the price.",   zh: "地缘紧张时合作中断;代价由受害人承担。" }, example: { en: "Operation Wolf Hunt; Sino-Cambodian extraditions",  zh: "猎狼行动;中柬遣返" } },
  { area: { en: "Future pressure",               zh: "未来压力" },     description: { en: "Climate displacement, demographic decline, and AI-induced labor shifts will reshape flows.", zh: "气候迁徙、人口结构衰退、AI 引发的劳动力变化,将重塑流动。" }, risk: { en: "Pressure is structural; governance is procedural. Mismatch is the long-term challenge.", zh: "压力是结构性的;治理是程序性的。错配是长期挑战。" }, example: { en: "IOM projections; Mekong Delta salinization",        zh: "IOM 预测;湄公河三角洲盐渍化" } },
];

// Sources strip — public references the site draws on
export const SOURCES: { who: Bi; what: Bi }[] = [
  { who: { en: "IOM World Migration Report",            zh: "IOM 世界移民报告" },                  what: { en: "Global migrant population baseline",                                          zh: "全球移民总数基线" } },
  { who: { en: "UNODC Global Report on TIP",            zh: "UNODC 全球贩运人口报告" },             what: { en: "Identified victims, trafficking typologies",                                  zh: "已识别受害人、贩运类型" } },
  { who: { en: "UN OHCHR (Aug 2023)",                    zh: "联合国人权高专办(2023.8)" },        what: { en: "Scam-compound coercion scale",                                                zh: "诈骗园区胁迫规模" } },
  { who: { en: "Global Initiative Against TOC",          zh: "全球反跨国有组织犯罪倡议(GI-TOC)" }, what: { en: "Compound-economy and recruitment-network reporting",                          zh: "园区经济与招募网络报告" } },
  { who: { en: "Sheldon Zhang — Smuggled Chinese",       zh: "Sheldon Zhang《被偷运的中国人》" },    what: { en: "Snakehead organizational structure & economics",                              zh: "蛇头组织结构与经济学" } },
  { who: { en: "Patrick Radden Keefe — The Snakehead",   zh: "Patrick Radden Keefe《蛇头》" },        what: { en: "Sister Ping case, NYC Fujianese narrative arc",                                zh: "萍姐案、纽约福建人叙事" } },
  { who: { en: "Frank Pieke — Recruiting Workers",        zh: "Frank Pieke《招募工人》" },             what: { en: "Decade-spanning Fujian fieldwork",                                            zh: "数十年的福建田野" } },
  { who: { en: "Adrian Zenz / Xinjiang Police Files",    zh: "Adrian Zenz / 新疆警察文件" },           what: { en: "Surveillance & detention architecture (Xinjiang)",                            zh: "新疆的监控与拘押架构" } },
  { who: { en: "China Labour Bulletin",                  zh: "中国劳工通讯" },                       what: { en: "Labor-dispatch abuses and worker testimony",                                   zh: "劳务派遣中的侵权与工人证词" } },
  { who: { en: "Reuters, AP, NYT, ProPublica, Al Jazeera", zh: "路透、AP、纽约时报、ProPublica、半岛" }, what: { en: "Investigative coverage of Mekong compounds & rescues",                        zh: "对湄公河园区与解救的调查报道" } },
];
