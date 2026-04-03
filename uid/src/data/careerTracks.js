export const CAREER_TRACKS = [
  {
    id: 'investment-banking',
    label: 'Investment Banking / Finance',
    shortLabel: 'IB/Finance',
    description:
      'Highly competitive, earliest recruiting cycle of any track. Requires strong GPA, technical finance skills, and sophomore program applications as early as fall of sophomore year.',
    keywords: [
      'investment banking', 'investment bank', 'ib ', ' ib,', 'goldman', 'morgan stanley',
      'jp morgan', 'jpmorgan', 'bank of america', 'bofa', 'citi', 'wells fargo',
      'bulge bracket', 'boutique bank', 'private equity', ' pe ', 'pe,', 'hedge fund',
      'financial analyst', 'corporate finance', 'mergers', 'acquisitions', 'm&a',
      'capital markets', 'debt capital', 'equity capital', 'investment management',
      'asset management', 'wealth management', 'raymond james', 'jefferies', 'lazard',
      'evercore', 'moelis', 'piper sandler', 'baird', 'stifel', 'houlihan lokey',
    ],
    recruitingPressureMessage:
      '⚡ Investment Banking recruits earlier than any other track. Sophomore leadership programs open in August–October of Sophomore Fall. Start preparing NOW — GPA, technicals, and networking are all evaluated this semester.',
    recruitingOnsetSemester: 'sophomore-fall',
    criticalSemesters: ['sophomore-fall', 'sophomore-spring'],
    color: '#1e3a5f',
  },
  {
    id: 'consulting',
    label: 'Consulting',
    shortLabel: 'Consulting',
    description:
      'Case interview prep is the defining challenge of consulting recruiting — plan for 50–80 practice cases. On-campus recruiting happens earlier than most students expect, often starting sophomore fall.',
    keywords: [
      'consulting', 'consultant', 'mckinsey', 'mck', 'bain', 'bcg', 'boston consulting',
      'deloitte', 'accenture', 'kpmg', 'pwc', 'ey', 'ernst & young', 'kearney',
      'oliver wyman', 'roland berger', 'booz allen', 'strategy&', 'l.e.k.',
      'management consulting', 'strategy consulting', 'advisory',
    ],
    recruitingPressureMessage:
      '📊 Consulting recruiting demands 50–80 practice case interviews. OCR (on-campus recruiting) for sophomore programs opens in Sophomore Fall. Register for case workshops immediately and find a case partner this semester.',
    recruitingOnsetSemester: 'sophomore-fall',
    criticalSemesters: ['sophomore-fall', 'sophomore-spring'],
    color: '#1a4731',
  },
  {
    id: 'supply-chain',
    label: 'Supply Chain & Operations',
    shortLabel: 'Supply Chain',
    description:
      'Operations and supply chain recruiting is moderately competitive with a slightly later timeline than finance/consulting. Excel, data analysis, and applied project experience differentiate candidates.',
    keywords: [
      'supply chain', 'operations', 'logistics', 'procurement', 'sourcing',
      'amazon', 'lockheed', 'lockheed martin', 'boeing', 'caterpillar',
      'general motors', 'ford', 'toyota', 'john deere', 'ups', 'fedex',
      'walmart', 'target', 'h-e-b', 'heb', 'deloitte supply', 'p&g operations',
      'manufacturing', 'distribution', 'inventory', 'demand planning',
    ],
    recruitingPressureMessage:
      '🔧 Supply chain recruiting typically opens August–November of Junior Fall for summer internships. Build Excel/data skills and seek an applied project with a Neeley professor to stand out.',
    recruitingOnsetSemester: 'junior-fall',
    criticalSemesters: ['junior-fall', 'junior-spring'],
    color: '#7c3d0e',
  },
  {
    id: 'marketing',
    label: 'Marketing & Brand Management',
    shortLabel: 'Marketing',
    description:
      'CPG companies (P&G, Unilever, L\'Oréal) recruit earliest in the marketing track — starting in August/September of Junior Fall. Tech marketing (Google, Meta, Amazon) follows in September–October.',
    keywords: [
      'marketing', 'brand management', 'brand manager', 'brand strategy',
      'advertising', 'consumer goods', 'cpg', 'p&g', 'procter', 'unilever',
      'l\'oreal', 'loreal', 'colgate', 'kimberly-clark', 'general mills',
      'pepsico', 'coca-cola', 'mondelez', 'nestle', 'kraft',
      'google marketing', 'meta', 'amazon marketing', 'digital marketing',
      'product marketing', 'media', 'agency', 'advertising agency',
    ],
    recruitingPressureMessage:
      '🎯 CPG marketing (P&G, Unilever) recruits in August–September of Junior Fall — the earliest of any marketing segment. Miss fall recruiting and you miss the top brands. Apply in the first week of Junior Fall.',
    recruitingOnsetSemester: 'junior-fall',
    criticalSemesters: ['junior-fall', 'junior-spring'],
    color: '#7c1a3d',
  },
  {
    id: 'general',
    label: 'General Business / Exploring',
    shortLabel: 'General',
    description:
      'Still exploring your path? That\'s completely normal, especially early on. This track keeps all options open while you build the universal skills every recruiter values.',
    keywords: [],
    recruitingPressureMessage:
      '🧭 You\'re in exploration mode — that\'s great at this stage. Use this semester to attend different firm panels, talk to upperclassmen in various fields, and narrow your target before Sophomore Fall when recruiting starts heating up.',
    recruitingOnsetSemester: 'junior-fall',
    criticalSemesters: ['junior-fall'],
    color: '#374151',
  },
]

export const getTrackById = (id) =>
  CAREER_TRACKS.find(t => t.id === id) ?? CAREER_TRACKS.find(t => t.id === 'general')
