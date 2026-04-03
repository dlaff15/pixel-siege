import { PDC_RESOURCES } from '../pdcResources.js'

export const SOPHOMORE_SPRING = [
  // ── ACADEMIC ──────────────────────────────────────────────────────────────
  {
    id: 'ssp-acad-001',
    semester: 'sophomore-spring',
    category: 'academic',
    title: 'Maintain GPA through active recruiting season',
    description:
      'Grades don\'t stop mattering because you have interviews. Firms verify transcripts after extending offers. Do not let your GPA slip while chasing internships — manage your course load intentionally this semester.',
    trackRelevance: {
      'investment-banking': 'critical',
      'consulting': 'critical',
      'supply-chain': 'important',
      'marketing': 'normal',
      'general': 'normal',
    },
    pdcResource: null,
    contentSlot: null,
    order: 1,
  },
  {
    id: 'ssp-acad-002',
    semester: 'sophomore-spring',
    category: 'academic',
    title: 'Complete the highest-value elective for your track',
    description:
      'IB: financial statement analysis or advanced corporate finance. Consulting: strategy course or operations management. Supply chain: logistics and supply chain management. Marketing: consumer behavior or digital marketing. These courses directly support your interviews.',
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
    id: 'ssp-acad-003',
    semester: 'sophomore-spring',
    category: 'academic',
    title: 'Pre-read your internship firm before you arrive',
    description:
      'If you accepted a summer internship: read your firm\'s recent earnings calls, press releases, and industry news before Day 1. Ask your recruiter what technical skills to brush up on. Showing up informed is the easiest way to make a strong first impression.',
    trackRelevance: {
      'investment-banking': 'critical',
      'consulting': 'critical',
      'supply-chain': 'important',
      'marketing': 'important',
      'general': 'normal',
    },
    pdcResource: null,
    contentSlot: null,
    order: 3,
  },
  {
    id: 'ssp-acad-004',
    semester: 'sophomore-spring',
    category: 'academic',
    title: 'Plan a productive sophomore summer (if no internship)',
    description:
      'If you didn\'t land a summer internship: build a concrete plan. Options include relevant part-time work, Bloomberg BMC or Google Analytics certification, a research project with a Neeley professor, or an unpaid-but-substantive role at a local business. Any of these can be framed positively in junior year applications.',
    trackRelevance: {
      'investment-banking': 'important',
      'consulting': 'important',
      'supply-chain': 'normal',
      'marketing': 'normal',
      'general': 'important',
    },
    pdcResource: PDC_RESOURCES.pdcAppointment,
    contentSlot: null,
    order: 4,
  },

  // ── EXTRACURRICULARS ──────────────────────────────────────────────────────
  {
    id: 'ssp-ec-001',
    semester: 'sophomore-spring',
    category: 'extracurriculars',
    title: 'Continue and document your leadership role',
    description:
      'Keep updating your brag document with measurable outcomes. "Led 12-member recruiting committee" and "increased event attendance by 30%" are the details that make resume bullets credible. Don\'t let a busy semester push this off — 5 minutes of documentation per week is enough.',
    trackRelevance: {
      'investment-banking': 'important',
      'consulting': 'important',
      'supply-chain': 'normal',
      'marketing': 'normal',
      'general': 'normal',
    },
    pdcResource: null,
    contentSlot: null,
    order: 1,
  },
  {
    id: 'ssp-ec-002',
    semester: 'sophomore-spring',
    category: 'extracurriculars',
    title: 'Compete in or lead a second case competition',
    description:
      'Aim to place higher than your freshman-year entry, or take on a leadership role (team captain, faculty liaison). Quantify the result for your resume: "led team of 5, placed 2nd of 18 teams in national AMA case competition."',
    trackRelevance: {
      'investment-banking': 'important',
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
    id: 'ssp-res-001',
    semester: 'sophomore-spring',
    category: 'resume',
    title: 'Update resume for active applications',
    description:
      'If you are applying to internships this spring, your resume must reflect your most current achievements and leadership positions. Run it through one more Alcon review specifically benchmarked against your target industry. This is a real application document, not a draft.',
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
    id: 'ssp-res-002',
    semester: 'sophomore-spring',
    category: 'resume',
    title: 'Prepare tailored cover letter variations per firm',
    description:
      'Have 2-3 cover letter variations ready: one for large financial institutions, one for boutiques/consulting firms, one for corporates. The "why this firm" paragraph should be genuinely specific — not a template with the firm name swapped in.',
    trackRelevance: {
      'investment-banking': 'important',
      'consulting': 'critical',
      'supply-chain': 'normal',
      'marketing': 'important',
      'general': 'normal',
    },
    pdcResource: PDC_RESOURCES.alconResume,
    contentSlot: null,
    order: 2,
  },

  // ── NETWORKING ────────────────────────────────────────────────────────────
  {
    id: 'ssp-net-001',
    semester: 'sophomore-spring',
    category: 'networking',
    title: 'Deepen relationships with 3-5 key alumni contacts',
    description:
      'Choose 3-5 alumni you\'ve connected with and invest in those relationships. Monthly check-ins (sharing a relevant article, updating them on your progress) keep you top of mind when they hear about openings. Breadth is less valuable than depth.',
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
    id: 'ssp-net-002',
    semester: 'sophomore-spring',
    category: 'networking',
    title: 'Ask for internal referrals from strong contacts',
    description:
      'If you\'ve built a genuine relationship with someone at a target firm, ask directly: "Would you be comfortable submitting an internal referral when my application goes in?" Only ask people who know your work well. A cold referral ask damages the relationship.',
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

  // ── INTERVIEWING ─────────────────────────────────────────────────────────
  {
    id: 'ssp-int-001',
    semester: 'sophomore-spring',
    category: 'interviewing',
    title: 'Complete 20+ mock behavioral interviews total',
    description:
      'By the end of sophomore spring, you should have completed at least 20 mock behavioral interviews across all formats (30 minutes, 60 minutes, phone screens). Record several and review them yourself. The goal is effortless delivery — your stories should feel natural, not rehearsed.',
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
    id: 'ssp-int-002',
    semester: 'sophomore-spring',
    category: 'interviewing',
    title: 'Complete 15 practice cases (Consulting track)',
    description:
      'If targeting consulting: reach 15+ practice cases this semester. Mix market sizing, profitability, market entry, and M&A cases. Work with at least 2-3 different case partners — different case styles expose blind spots you won\'t find with a single partner.',
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
    id: 'ssp-ja-001',
    semester: 'sophomore-spring',
    category: 'job-alerts',
    title: 'Actively manage your application pipeline',
    description:
      'Update your tracking spreadsheet weekly. Know the status of every application, who your contact is at each firm, and what your next action is. This is a numbers game with tight deadlines — a missed application window is a missed cycle.',
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
    id: 'ssp-ja-002',
    semester: 'sophomore-spring',
    category: 'job-alerts',
    title: 'Submit 15-20 total internship applications',
    description:
      'Cast a wide net this semester. Apply to your top targets plus realistic backups plus learning opportunities. Most students underestimate how many applications it takes to land a first offer. Track every submission in your spreadsheet.',
    trackRelevance: {
      'investment-banking': 'critical',
      'consulting': 'critical',
      'supply-chain': 'important',
      'marketing': 'important',
      'general': 'important',
    },
    pdcResource: null,
    contentSlot: null,
    order: 2,
  },

  // ── PROFESSIONAL PRESENTATION ─────────────────────────────────────────────
  {
    id: 'ssp-pp-001',
    semester: 'sophomore-spring',
    category: 'professional-presentation',
    title: 'Request 1-2 LinkedIn recommendations',
    description:
      'Ask a professor, a club advisor, or an internship supervisor who knows your work to write a LinkedIn recommendation. Provide them with a 2-3 bullet point summary of what you\'d like them to highlight. Recommendations make your profile substantially stronger.',
    trackRelevance: {
      'investment-banking': 'important',
      'consulting': 'important',
      'supply-chain': 'normal',
      'marketing': 'important',
      'general': 'normal',
    },
    pdcResource: null,
    contentSlot: null,
    order: 1,
  },
  {
    id: 'ssp-pp-002',
    semester: 'sophomore-spring',
    category: 'professional-presentation',
    title: 'Practice confident professional small talk',
    description:
      'Recruiting is not only about qualifications — it\'s about whether someone wants to work with you. Practice holding a relaxed 5-minute conversation with a stranger on current events, industry news, or a genuine personal interest. Recruiters notice candidates who are effortlessly engaging.',
    trackRelevance: {
      'investment-banking': 'important',
      'consulting': 'critical',
      'supply-chain': 'normal',
      'marketing': 'important',
      'general': 'normal',
    },
    pdcResource: PDC_RESOURCES.neeleyComplete,
    contentSlot: null,
    order: 2,
  },
]
