import { PDC_RESOURCES } from '../pdcResources.js'

// Sophomore Fall is the most critical semester for IB and Consulting students.
// Sophomore leadership programs open in August–October.

export const SOPHOMORE_FALL = [
  // ── ACADEMIC ──────────────────────────────────────────────────────────────
  {
    id: 'sf-acad-001',
    semester: 'sophomore-fall',
    category: 'academic',
    title: 'GPA checkpoint — this is your last chance before IB/Consulting recruiting',
    description:
      'If your GPA is below 3.5 (for IB/consulting targets) or 3.3 (for other tracks), make a concrete plan this semester to raise it. Firms begin screening applications this semester — GPA is reported on applications due in October.',
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
    id: 'sf-acad-002',
    semester: 'sophomore-fall',
    category: 'academic',
    title: 'Enroll in or complete Corporate Finance',
    description:
      'Corporate finance is prerequisite knowledge for IB technical interviews, consulting case financials, and supply chain cost analysis. Do not defer this course. If you haven\'t started it, this is the semester.',
    trackRelevance: {
      'investment-banking': 'critical',
      'consulting': 'important',
      'supply-chain': 'important',
      'marketing': 'normal',
      'general': 'normal',
    },
    pdcResource: null,
    contentSlot: null,
    order: 2,
  },
  {
    id: 'sf-acad-003',
    semester: 'sophomore-fall',
    category: 'academic',
    title: 'Begin Excel financial modeling self-study',
    description:
      'Wall Street Prep, Corporate Finance Institute (CFI), and Breaking Into Wall Street all offer free or low-cost resources. IB interviews test your ability to build models under pressure. Document your Excel proficiency on your resume and LinkedIn.',
    trackRelevance: {
      'investment-banking': 'critical',
      'consulting': 'important',
      'supply-chain': 'important',
      'marketing': 'not-applicable',
      'general': 'normal',
    },
    pdcResource: PDC_RESOURCES.neeleyPremiumCredentials,
    contentSlot: { type: 'lesson', placeholder: true, label: 'Excel Modeling Starter Guide' },
    order: 3,
  },
  {
    id: 'sf-acad-004',
    semester: 'sophomore-fall',
    category: 'academic',
    title: 'Research sophomore leadership programs at target firms',
    description:
      'Goldman Sachs Possibilities Summit, JP Morgan Sophomore Edge, BCG Bridge to Consulting, McKinsey Sophomore Diversity programs — many of these are application-eligible NOW, with deadlines in October–November. These programs often lead directly to junior year internship offers.',
    trackRelevance: {
      'investment-banking': 'critical',
      'consulting': 'critical',
      'supply-chain': 'normal',
      'marketing': 'normal',
      'general': 'normal',
    },
    pdcResource: PDC_RESOURCES.pdcAppointment,
    contentSlot: null,
    order: 4,
  },

  // ── EXTRACURRICULARS ──────────────────────────────────────────────────────
  {
    id: 'sf-ec-001',
    semester: 'sophomore-fall',
    category: 'extracurriculars',
    title: 'Hold a formal leadership position in your primary org',
    description:
      'VP, Director, Chair — any titled leadership role. Recruiters want to see progression, not just membership. "Active Member" tells them nothing. "Vice President of Events, Finance Club" tells them you led a team and owned outcomes.',
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
    id: 'sf-ec-002',
    semester: 'sophomore-fall',
    category: 'extracurriculars',
    title: 'Compete in a case competition or investment challenge',
    description:
      'A stock pitch competition, consulting case competition, supply chain challenge, or brand marketing case — participate in at least one this semester. The outcome (win or lose) is less important than demonstrating analytical depth and the ability to perform under pressure.',
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
  {
    id: 'sf-ec-003',
    semester: 'sophomore-fall',
    category: 'extracurriculars',
    title: 'Attend every firm presentation for your target companies',
    description:
      'When Goldman, BCG, or P&G presents on campus, be there — even if applications aren\'t open yet. Sign in. Meet the recruiter. "I attended your info session in the fall" is the opening line of a differentiated thank-you note.',
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

  // ── RESUME ────────────────────────────────────────────────────────────────
  {
    id: 'sf-res-001',
    semester: 'sophomore-fall',
    category: 'resume',
    title: 'Complete a full CAR/STAR resume overhaul',
    description:
      'Every bullet must follow Context → Action → Result format with quantified outcomes wherever possible. "Managed club budget of $4,000, achieving 15% cost savings" beats "helped with finances." This is the version recruiters will see in applications opening this semester.',
    trackRelevance: {
      'investment-banking': 'critical',
      'consulting': 'critical',
      'supply-chain': 'important',
      'marketing': 'important',
      'general': 'important',
    },
    pdcResource: PDC_RESOURCES.alconResume,
    contentSlot: { type: 'lesson', placeholder: true, label: 'CAR/STAR Bullet Point Guide' },
    order: 1,
  },
  {
    id: 'sf-res-002',
    semester: 'sophomore-fall',
    category: 'resume',
    title: 'Get a peer review from someone who landed your target internship',
    description:
      'Ask an upperclassman who landed a Goldman, McKinsey, or P&G internship to review your resume. They know exactly what the screeners are looking for in ways a career advisor may not. Peer review catches things advisors miss.',
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
  {
    id: 'sf-res-003',
    semester: 'sophomore-fall',
    category: 'resume',
    title: 'Draft a customizable cover letter template',
    description:
      'Write a 3-paragraph cover letter template: (1) why this firm specifically, (2) your most relevant experience, (3) why you\'re ready. Many IB boutiques and consulting firms still require cover letters. Have it ready to customize per firm, not written from scratch under deadline pressure.',
    trackRelevance: {
      'investment-banking': 'important',
      'consulting': 'critical',
      'supply-chain': 'normal',
      'marketing': 'important',
      'general': 'normal',
    },
    pdcResource: PDC_RESOURCES.alconResume,
    contentSlot: { type: 'file', placeholder: true, label: 'Cover Letter Template (Word)' },
    order: 3,
  },

  // ── NETWORKING ────────────────────────────────────────────────────────────
  {
    id: 'sf-net-001',
    semester: 'sophomore-fall',
    category: 'networking',
    title: 'Conduct 3-5 alumni informational interviews',
    description:
      'Target alumni in your exact target role at your target firms. Ask: "What prepared you most?" and "What would you do differently?" These conversations inform your preparation and create internal advocates who may refer your application.',
    trackRelevance: {
      'investment-banking': 'critical',
      'consulting': 'critical',
      'supply-chain': 'important',
      'marketing': 'important',
      'general': 'important',
    },
    pdcResource: PDC_RESOURCES.neeleyNextStep,
    contentSlot: null,
    order: 1,
  },
  {
    id: 'sf-net-002',
    semester: 'sophomore-fall',
    category: 'networking',
    title: 'Follow up with every contact within 24 hours',
    description:
      'After every networking interaction — info session, coffee chat, career fair — send a LinkedIn message or email within 24 hours. Reference something specific from the conversation. "Loved your point about M&A deal flow in tech — it confirmed my interest in this area."',
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
  {
    id: 'sf-net-003',
    semester: 'sophomore-fall',
    category: 'networking',
    title: 'Enroll in the PDC Neeley Next Step Mentorship program',
    description:
      'The Neeley Next Step program matches you with a TCU alumni mentor in your target industry. Applications open each fall. A direct industry mentor is one of the highest-leverage resources available to you — they know the process from the inside.',
    trackRelevance: {
      'investment-banking': 'critical',
      'consulting': 'critical',
      'supply-chain': 'important',
      'marketing': 'important',
      'general': 'important',
    },
    pdcResource: PDC_RESOURCES.neeleyNextStep,
    contentSlot: null,
    order: 3,
  },

  // ── INTERVIEWING ─────────────────────────────────────────────────────────
  {
    id: 'sf-int-001',
    semester: 'sophomore-fall',
    category: 'interviewing',
    title: 'Build your 5-7 core behavioral interview stories',
    description:
      'Identify the strongest stories from your experience that can flex to answer the most common behavioral questions (leadership, failure, teamwork, initiative, conflict). Structure each in STAR format. These stories are your interview arsenal for every firm you apply to.',
    trackRelevance: {
      'investment-banking': 'critical',
      'consulting': 'critical',
      'supply-chain': 'important',
      'marketing': 'important',
      'general': 'important',
    },
    pdcResource: PDC_RESOURCES.alconMockInterview,
    contentSlot: { type: 'lesson', placeholder: true, label: 'STAR Method Story Framework' },
    order: 1,
  },
  {
    id: 'sf-int-002',
    semester: 'sophomore-fall',
    category: 'interviewing',
    title: 'Complete 5+ mock behavioral interviews',
    description:
      'Book 2 mock interviews through the Alcon Career Center and do 2-3 peer mocks with fellow students in your org. Record yourself. Watch the playback. The gap between how you think you sound and how you actually sound in interviews is almost always surprising.',
    trackRelevance: {
      'investment-banking': 'critical',
      'consulting': 'critical',
      'supply-chain': 'important',
      'marketing': 'important',
      'general': 'important',
    },
    pdcResource: PDC_RESOURCES.alconMockInterview,
    contentSlot: null,
    order: 2,
  },
  {
    id: 'sf-int-003',
    semester: 'sophomore-fall',
    category: 'interviewing',
    title: 'Begin structured case interview prep (Consulting track)',
    description:
      'If targeting consulting: start working through cases now. Case in Point by Marc Cosentino and Victor Cheng\'s LOMS recordings are the canonical starting points. Find a case partner and aim for 10 practice cases this semester. 50+ cases are needed before OCR.',
    trackRelevance: {
      'investment-banking': 'not-applicable',
      'consulting': 'critical',
      'supply-chain': 'not-applicable',
      'marketing': 'not-applicable',
      'general': 'normal',
    },
    pdcResource: PDC_RESOURCES.pdcAppointment,
    contentSlot: { type: 'lesson', placeholder: true, label: 'Case Interview Prep Resources' },
    order: 3,
  },
  {
    id: 'sf-int-004',
    semester: 'sophomore-fall',
    category: 'interviewing',
    title: 'Study IB technical interview questions (IB/Finance track)',
    description:
      'IB technical interviews test accounting, valuation (DCF, comps, precedents), and sometimes basic LBO modeling. Know your three financial statements cold, be able to walk through a DCF, and understand enterprise vs. equity value. These questions appear in sophomore program applications.',
    trackRelevance: {
      'investment-banking': 'critical',
      'consulting': 'not-applicable',
      'supply-chain': 'not-applicable',
      'marketing': 'not-applicable',
      'general': 'not-applicable',
    },
    pdcResource: PDC_RESOURCES.neeleyPremiumCredentials,
    contentSlot: { type: 'lesson', placeholder: true, label: 'IB Technical Interview Guide' },
    order: 4,
  },

  // ── JOB ALERTS ────────────────────────────────────────────────────────────
  {
    id: 'sf-ja-001',
    semester: 'sophomore-fall',
    category: 'job-alerts',
    title: 'Complete Handshake profile to 100%',
    description:
      'Handshake is TCU\'s primary recruiting platform. A complete profile makes you more visible to recruiters and enables smart job matching. Activate job alerts for your target roles and check for TCU-specific on-campus recruiting sessions.',
    trackRelevance: {
      'investment-banking': 'important',
      'consulting': 'important',
      'supply-chain': 'critical',
      'marketing': 'important',
      'general': 'important',
    },
    pdcResource: null,
    contentSlot: null,
    order: 1,
  },
  {
    id: 'sf-ja-002',
    semester: 'sophomore-fall',
    category: 'job-alerts',
    title: 'Apply to sophomore diversity and leadership programs',
    description:
      'Goldman Sachs Possibilities Summit, JPMorgan Sophomore Edge, BCG Bridge to Consulting, McKinsey Sophomore Diversity, Deloitte Discovery Scholars — apply to every one you\'re eligible for. Deadlines are typically October–November. These are the most direct paths to junior year internship offers.',
    trackRelevance: {
      'investment-banking': 'critical',
      'consulting': 'critical',
      'supply-chain': 'normal',
      'marketing': 'normal',
      'general': 'normal',
    },
    pdcResource: PDC_RESOURCES.pdcAppointment,
    contentSlot: null,
    order: 2,
  },
  {
    id: 'sf-ja-003',
    semester: 'sophomore-fall',
    category: 'job-alerts',
    title: 'Build your target firm list with recruiting channels',
    description:
      'Create a list of 15-20 target firms. For each firm, document: Do they recruit at TCU via OCR (on-campus recruiting)? Or do you need to apply directly? OCR deadlines are typically earlier than public application windows.',
    trackRelevance: {
      'investment-banking': 'critical',
      'consulting': 'critical',
      'supply-chain': 'important',
      'marketing': 'important',
      'general': 'normal',
    },
    pdcResource: null,
    contentSlot: { type: 'file', placeholder: true, label: 'Target Firm Tracking Template' },
    order: 3,
  },

  // ── PROFESSIONAL PRESENTATION ─────────────────────────────────────────────
  {
    id: 'sf-pp-001',
    semester: 'sophomore-fall',
    category: 'professional-presentation',
    title: 'Purchase or finalize professional interview attire',
    description:
      'Budget for interview attire this semester — not the night before your first interview. For IB/consulting: dark suit (navy or charcoal), conservative tie (men), conservative blazer/suit (women). Research firm-specific norms. Some firms note "business casual" for first rounds, which still means polished.',
    trackRelevance: {
      'investment-banking': 'critical',
      'consulting': 'critical',
      'supply-chain': 'important',
      'marketing': 'important',
      'general': 'important',
    },
    pdcResource: PDC_RESOURCES.neeleyComplete,
    contentSlot: null,
    order: 1,
  },
  {
    id: 'sf-pp-002',
    semester: 'sophomore-fall',
    category: 'professional-presentation',
    title: 'Upgrade your LinkedIn headshot',
    description:
      'If your current photo isn\'t genuinely professional, fix it now. Check whether Neeley offers a headshot session — if not, a well-lit phone photo against a plain wall with business casual clothing works. Blurry, cropped, or casual photos send a signal before you say a word.',
    trackRelevance: {
      'investment-banking': 'important',
      'consulting': 'important',
      'supply-chain': 'normal',
      'marketing': 'important',
      'general': 'normal',
    },
    pdcResource: PDC_RESOURCES.neeleyComplete,
    contentSlot: null,
    order: 2,
  },
]
