import { PDC_RESOURCES } from '../pdcResources.js'

export const JUNIOR_FALL = [
  // ── ACADEMIC ──────────────────────────────────────────────────────────────
  {
    id: 'jf-acad-001',
    semester: 'junior-fall',
    category: 'academic',
    title: 'Maintain GPA — full recruiting season begins',
    description:
      'Junior fall is when the most competitive full-time offers are extended for IB/consulting, and when supply chain/marketing internship applications open. Firms still verify transcripts. A strong junior-year GPA is the final proof of consistent academic performance.',
    trackRelevance: {
      'investment-banking': 'critical',
      'consulting': 'critical',
      'supply-chain': 'important',
      'marketing': 'important',
      'general': 'normal',
    },
    pdcResource: null,
    contentSlot: null,
    order: 1,
  },
  {
    id: 'jf-acad-002',
    semester: 'junior-fall',
    category: 'academic',
    title: 'Enroll in your highest-value advanced elective',
    description:
      'IB: Advanced Financial Modeling, Investment Banking Seminar if offered. Consulting: Strategy Capstone, Management Science. Supply chain: Advanced Operations, Global Logistics. Marketing: Brand Management, Digital Marketing Analytics. These courses directly strengthen your technical interview performance.',
    trackRelevance: {
      'investment-banking': 'critical',
      'consulting': 'important',
      'supply-chain': 'critical',
      'marketing': 'critical',
      'general': 'normal',
    },
    pdcResource: null,
    contentSlot: null,
    order: 2,
  },
  {
    id: 'jf-acad-003',
    semester: 'junior-fall',
    category: 'academic',
    title: 'Complete or pursue an industry certification',
    description:
      'CFA Level 1 registration (IB/finance), Google Analytics certification (marketing), AWS Cloud Foundations or Tableau (supply chain/operations), Six Sigma White Belt (operations). Certifications signal self-directed professional development beyond the classroom.',
    trackRelevance: {
      'investment-banking': 'important',
      'consulting': 'normal',
      'supply-chain': 'important',
      'marketing': 'important',
      'general': 'normal',
    },
    pdcResource: PDC_RESOURCES.neeleyPremiumCredentials,
    contentSlot: null,
    order: 3,
  },

  // ── EXTRACURRICULARS ──────────────────────────────────────────────────────
  {
    id: 'jf-ec-001',
    semester: 'junior-fall',
    category: 'extracurriculars',
    title: 'Continue senior leadership role and begin mentoring underclassmen',
    description:
      'Recruiters value candidates who invest in others, not just themselves. Actively mentor freshman and sophomore members of your organization. This signals maturity, leadership depth, and that you\'ve built something that lasts beyond your own tenure.',
    trackRelevance: {
      'investment-banking': 'important',
      'consulting': 'important',
      'supply-chain': 'normal',
      'marketing': 'normal',
      'general': 'important',
    },
    pdcResource: null,
    contentSlot: null,
    order: 1,
  },
  {
    id: 'jf-ec-002',
    semester: 'junior-fall',
    category: 'extracurriculars',
    title: 'Compete in a senior-level case or pitch competition',
    description:
      'Lead a team in the most advanced competition available to juniors — a stock pitch competition, national consulting case, supply chain challenge, or AMA marketing competition. Place or win and you have an elite interview story with quantified outcomes.',
    trackRelevance: {
      'investment-banking': 'critical',
      'consulting': 'critical',
      'supply-chain': 'important',
      'marketing': 'important',
      'general': 'normal',
    },
    pdcResource: null,
    contentSlot: null,
    order: 2,
  },

  // ── RESUME ────────────────────────────────────────────────────────────────
  {
    id: 'jf-res-001',
    semester: 'junior-fall',
    category: 'resume',
    title: 'Integrate internship experience into your resume',
    description:
      'If you completed a sophomore summer internship, add it now with 2-3 quantified bullet points. "Supported 3 live M&A transactions totaling $850M in deal value" is the kind of line that resets the conversation. Make it specific, not generic.',
    trackRelevance: {
      'investment-banking': 'critical',
      'consulting': 'critical',
      'supply-chain': 'important',
      'marketing': 'important',
      'general': 'important',
    },
    pdcResource: PDC_RESOURCES.alconResume,
    contentSlot: null,
    order: 1,
  },
  {
    id: 'jf-res-002',
    semester: 'junior-fall',
    category: 'resume',
    title: 'Create industry-specific resume variations',
    description:
      'Maintain a "master resume" with everything, and tailor shorter versions for specific applications — emphasizing finance skills for IB applications, strategic thinking for consulting, operational metrics for supply chain. Different firms look for different things even in the same candidate.',
    trackRelevance: {
      'investment-banking': 'important',
      'consulting': 'important',
      'supply-chain': 'normal',
      'marketing': 'normal',
      'general': 'normal',
    },
    pdcResource: PDC_RESOURCES.alconResume,
    contentSlot: null,
    order: 2,
  },

  // ── NETWORKING ────────────────────────────────────────────────────────────
  {
    id: 'jf-net-001',
    semester: 'junior-fall',
    category: 'networking',
    title: 'Maintain monthly check-ins with your mentor network',
    description:
      'Your alumni network is most valuable when it\'s warm — not activated only when you need something. Schedule a brief monthly touchpoint with your 3-5 closest contacts: share a relevant article, update them on your progress, ask a genuine question. Stay present.',
    trackRelevance: {
      'investment-banking': 'critical',
      'consulting': 'critical',
      'supply-chain': 'important',
      'marketing': 'important',
      'general': 'important',
    },
    pdcResource: null,
    contentSlot: null,
    order: 1,
  },
  {
    id: 'jf-net-002',
    semester: 'junior-fall',
    category: 'networking',
    title: 'Leverage internship contacts for full-time referrals',
    description:
      'If you interned somewhere, your manager and team members are your strongest advocates. Keep in touch, update them on your fall semester, and when the time is right, ask directly: "I\'m targeting full-time roles in [function] — would you be open to being a reference or submitting an internal referral?"',
    trackRelevance: {
      'investment-banking': 'critical',
      'consulting': 'critical',
      'supply-chain': 'important',
      'marketing': 'important',
      'general': 'normal',
    },
    pdcResource: PDC_RESOURCES.pdcAppointment,
    contentSlot: null,
    order: 2,
  },

  // ── INTERVIEWING ─────────────────────────────────────────────────────────
  {
    id: 'jf-int-001',
    semester: 'junior-fall',
    category: 'interviewing',
    title: 'Reach 50+ total mock interviews',
    description:
      'By junior fall recruiting, your mock interview count should be at or approaching 50. Supplement Alcon sessions with peer mocks, LinkedIn connections in your field, and PDC coaching. The goal is not just practice — it\'s reaching a level of calm confidence that interviewers notice.',
    trackRelevance: {
      'investment-banking': 'critical',
      'consulting': 'critical',
      'supply-chain': 'important',
      'marketing': 'important',
      'general': 'important',
    },
    pdcResource: PDC_RESOURCES.alconMockInterview,
    contentSlot: null,
    order: 1,
  },
  {
    id: 'jf-int-002',
    semester: 'junior-fall',
    category: 'interviewing',
    title: 'Reach 50+ practice cases (Consulting track)',
    description:
      'If targeting MBB or tier-2 consulting: you need 50+ cases before first-round interviews. This is not an exaggeration. Cases are a learned skill that requires repetition and feedback. Work with multiple case partners, attend consulting club case sessions, and consider a case coaching session through the PDC.',
    trackRelevance: {
      'investment-banking': 'not-applicable',
      'consulting': 'critical',
      'supply-chain': 'not-applicable',
      'marketing': 'not-applicable',
      'general': 'not-applicable',
    },
    pdcResource: PDC_RESOURCES.pdcAppointment,
    contentSlot: null,
    order: 2,
  },

  // ── JOB ALERTS ────────────────────────────────────────────────────────────
  {
    id: 'jf-ja-001',
    semester: 'junior-fall',
    category: 'job-alerts',
    title: 'Monitor and hit all August–October application deadlines',
    description:
      'CPG marketing (P&G, Unilever) opens as early as August. Major IB and consulting applications are typically due September–October. Supply chain applications open October–November. Set calendar alerts. Missing a deadline is permanent — firms do not typically accept late applications.',
    trackRelevance: {
      'investment-banking': 'critical',
      'consulting': 'critical',
      'supply-chain': 'critical',
      'marketing': 'critical',
      'general': 'important',
    },
    pdcResource: null,
    contentSlot: null,
    order: 1,
  },
  {
    id: 'jf-ja-002',
    semester: 'junior-fall',
    category: 'job-alerts',
    title: 'Apply to 20-30 internship programs total',
    description:
      'Cast a deliberate, wide net. Include stretch firms (dream jobs), target firms (realistic and well-prepared), and safety firms (strong fits with lower competition). A well-managed pipeline of 25-30 applications typically yields 5-10 first-round interviews.',
    trackRelevance: {
      'investment-banking': 'critical',
      'consulting': 'critical',
      'supply-chain': 'important',
      'marketing': 'important',
      'general': 'important',
    },
    pdcResource: PDC_RESOURCES.pdcAppointment,
    contentSlot: null,
    order: 2,
  },

  // ── PROFESSIONAL PRESENTATION ─────────────────────────────────────────────
  {
    id: 'jf-pp-001',
    semester: 'junior-fall',
    category: 'professional-presentation',
    title: 'Build out LinkedIn with endorsements and recommendations',
    description:
      'Your LinkedIn should now reflect a complete, polished professional story: experience, skills with endorsements from peers and professors, 2-3 recommendations from supervisors or advisors, and an About section that sounds like a person, not a resume.',
    trackRelevance: {
      'investment-banking': 'important',
      'consulting': 'important',
      'supply-chain': 'normal',
      'marketing': 'critical',
      'general': 'normal',
    },
    pdcResource: PDC_RESOURCES.neeleyComplete,
    contentSlot: null,
    order: 1,
  },
  {
    id: 'jf-pp-002',
    semester: 'junior-fall',
    category: 'professional-presentation',
    title: 'Articulate your professional brand narrative',
    description:
      'You should be able to answer "Tell me about yourself" in under 90 seconds in a way that connects your background to the specific role. Not a career chronology — a story with a thread. "I\'ve always been drawn to [X], which led me to [Y], and that\'s why I want to do [Z] at [firm]."',
    trackRelevance: {
      'investment-banking': 'critical',
      'consulting': 'critical',
      'supply-chain': 'important',
      'marketing': 'important',
      'general': 'important',
    },
    pdcResource: PDC_RESOURCES.pdcAppointment,
    contentSlot: null,
    order: 2,
  },
]
