import { PDC_RESOURCES } from '../pdcResources.js'

export const JUNIOR_SPRING = [
  // ── ACADEMIC ──────────────────────────────────────────────────────────────
  {
    id: 'jsp-acad-001',
    semester: 'junior-spring',
    category: 'academic',
    title: 'Maintain strong final semester GPA',
    description:
      'Your junior spring GPA will appear on your senior year applications and be reported at offer stage. A strong finish confirms consistency — a weak finish after strong prior performance raises questions. Stay disciplined through the finish line.',
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
    id: 'jsp-acad-002',
    semester: 'junior-spring',
    category: 'academic',
    title: 'Ask your strongest professor for a recommendation letter',
    description:
      'Request a recommendation letter from the professor who knows your work best — ideally in a field related to your internship. Provide them with your resume, the internship description, and 2-3 bullet points on what you\'d like highlighted. Give them at least 3 weeks\' notice.',
    trackRelevance: {
      'investment-banking': 'important',
      'consulting': 'important',
      'supply-chain': 'important',
      'marketing': 'important',
      'general': 'important',
    },
    pdcResource: null,
    contentSlot: null,
    order: 2,
  },

  // ── EXTRACURRICULARS ──────────────────────────────────────────────────────
  {
    id: 'jsp-ec-001',
    semester: 'junior-spring',
    category: 'extracurriculars',
    title: 'Transition leadership and document your org legacy',
    description:
      'Properly transition your leadership role to an incoming junior or sophomore. Document the processes, contacts, and institutional knowledge you built. The ability to build systems that outlast you is a leadership competency that impresses recruiters more than the title itself.',
    trackRelevance: {
      'investment-banking': 'normal',
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
    id: 'jsp-ec-002',
    semester: 'junior-spring',
    category: 'extracurriculars',
    title: 'Deepen involvement in alumni or industry networks',
    description:
      'Join a TCU alumni chapter, a professional association in your field (CFA Society for finance, AMA professional chapter for marketing, CSCMP for supply chain), or an industry LinkedIn group. These networks become increasingly valuable once you\'re in the workforce.',
    trackRelevance: {
      'investment-banking': 'important',
      'consulting': 'normal',
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
    id: 'jsp-res-001',
    semester: 'junior-spring',
    category: 'resume',
    title: 'Finalize resume reflecting full junior-year experience',
    description:
      'Your resume for post-internship full-time applications should be completely current: internship experience with quantified results, senior leadership roles, completed certifications, capstone projects. Have the Alcon Career Center do a final review framed specifically around full-time recruiting.',
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
    id: 'jsp-res-002',
    semester: 'junior-spring',
    category: 'resume',
    title: 'Prepare for return offer or full-time application updates',
    description:
      'If you receive a return offer from your summer internship, update your resume to reflect the internship completion and confirmed return offer status. Some firms ask for updated resumes even after extending return offers as part of the formal onboarding process.',
    trackRelevance: {
      'investment-banking': 'important',
      'consulting': 'important',
      'supply-chain': 'normal',
      'marketing': 'normal',
      'general': 'normal',
    },
    pdcResource: null,
    contentSlot: null,
    order: 2,
  },

  // ── NETWORKING ────────────────────────────────────────────────────────────
  {
    id: 'jsp-net-001',
    semester: 'junior-spring',
    category: 'networking',
    title: 'Maintain and celebrate your mentor relationships',
    description:
      'Send your mentors an update on your internship results and career progress. Thank them for their guidance. Great mentors invest in students who show genuine growth and keep them informed — these relationships will matter for years after graduation.',
    trackRelevance: {
      'investment-banking': 'important',
      'consulting': 'important',
      'supply-chain': 'normal',
      'marketing': 'normal',
      'general': 'important',
    },
    pdcResource: PDC_RESOURCES.neeleyNextStep,
    contentSlot: null,
    order: 1,
  },
  {
    id: 'jsp-net-002',
    semester: 'junior-spring',
    category: 'networking',
    title: 'Begin connecting with future colleagues',
    description:
      'If you accepted an offer, look up your future manager, team members, and colleagues on LinkedIn. Connect with a thoughtful note. Ask if there are any books, resources, or skills they\'d recommend before you start. Getting to know your team before Day 1 accelerates your onboarding.',
    trackRelevance: {
      'investment-banking': 'important',
      'consulting': 'important',
      'supply-chain': 'normal',
      'marketing': 'normal',
      'general': 'normal',
    },
    pdcResource: null,
    contentSlot: null,
    order: 2,
  },

  // ── INTERVIEWING ─────────────────────────────────────────────────────────
  {
    id: 'jsp-int-001',
    semester: 'junior-spring',
    category: 'interviewing',
    title: 'Complete any remaining spring-deadline interviews',
    description:
      'Some firms have rolling application cycles with final interview rounds in January–March. Stay sharp on your behavioral stories and technical preparation even as you manage spring coursework and a possible return-offer decision.',
    trackRelevance: {
      'investment-banking': 'critical',
      'consulting': 'important',
      'supply-chain': 'important',
      'marketing': 'important',
      'general': 'important',
    },
    pdcResource: PDC_RESOURCES.alconMockInterview,
    contentSlot: null,
    order: 1,
  },
  {
    id: 'jsp-int-002',
    semester: 'junior-spring',
    category: 'interviewing',
    title: 'Prepare for offer negotiation conversations',
    description:
      'If you receive an offer, understand your leverage before negotiating. Know the market rate for your role/level/city. Most firms have limited flexibility on base salary for entry-level roles but may have flexibility on start date, signing bonus, or relocation. Book a PDC appointment to discuss your specific offer.',
    trackRelevance: {
      'investment-banking': 'critical',
      'consulting': 'critical',
      'supply-chain': 'important',
      'marketing': 'important',
      'general': 'important',
    },
    pdcResource: PDC_RESOURCES.pdcAppointment,
    contentSlot: { type: 'lesson', placeholder: true, label: 'Offer Negotiation Guide' },
    order: 2,
  },

  // ── JOB ALERTS ────────────────────────────────────────────────────────────
  {
    id: 'jsp-ja-001',
    semester: 'junior-spring',
    category: 'job-alerts',
    title: 'Hit final application deadlines (January–February)',
    description:
      'Many firms have rolling deadlines through February and some into March. Keep your tracking spreadsheet current. Even if you have an offer in hand, stay disciplined about any outstanding applications — it\'s appropriate to withdraw when you accept an offer, but don\'t ghost firms.',
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
    id: 'jsp-ja-002',
    semester: 'junior-spring',
    category: 'job-alerts',
    title: 'Evaluate and compare offers deliberately',
    description:
      'If you receive multiple offers, evaluate on compensation, learning opportunity, culture, growth path, and long-term career relevance — not just prestige. The best offer for your classmate is not necessarily the best offer for you. Book a PDC appointment if you need help thinking it through.',
    trackRelevance: {
      'investment-banking': 'important',
      'consulting': 'important',
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
    id: 'jsp-pp-001',
    semester: 'junior-spring',
    category: 'professional-presentation',
    title: 'Finalize and optimize your LinkedIn for post-internship positioning',
    description:
      'Update LinkedIn with your internship experience, any certifications or awards earned during junior year, and a refreshed headline that reflects your upcoming role. If you accepted an offer, you may update your "Open to Work" status accordingly.',
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
    id: 'jsp-pp-002',
    semester: 'junior-spring',
    category: 'professional-presentation',
    title: 'Reflect on your professional brand — what story does your profile tell?',
    description:
      'Read your resume and LinkedIn profile as if you\'re a recruiter seeing them for the first time. Is there a clear, coherent narrative? Does every line support your target role? Remove anything irrelevant or that weakens your story. Clarity and coherence matter as much as the raw content.',
    trackRelevance: {
      'investment-banking': 'important',
      'consulting': 'important',
      'supply-chain': 'normal',
      'marketing': 'important',
      'general': 'important',
    },
    pdcResource: PDC_RESOURCES.neeleyComplete,
    contentSlot: null,
    order: 2,
  },
]
