import { PDC_RESOURCES } from '../pdcResources.js'

export const FRESHMAN_FALL = [
  // ── ACADEMIC ──────────────────────────────────────────────────────────────
  {
    id: 'ff-acad-001',
    semester: 'freshman-fall',
    category: 'academic',
    title: 'Meet with your Neeley academic advisor',
    description:
      'Schedule a meeting this semester to map your full degree plan and identify elective space for future certifications and recruiting-relevant coursework. Knowing your path early lets you sequence courses strategically.',
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
    id: 'ff-acad-002',
    semester: 'freshman-fall',
    category: 'academic',
    title: 'Target a 3.5+ GPA from day one',
    description:
      'Finance and consulting firms screen applications at 3.5 GPA. It is far harder to recover a GPA than to maintain one. Establish strong study habits this semester — they will carry you through recruiting season.',
    trackRelevance: {
      'investment-banking': 'critical',
      'consulting': 'critical',
      'supply-chain': 'important',
      'marketing': 'normal',
      'general': 'normal',
    },
    pdcResource: null,
    contentSlot: null,
    order: 2,
  },
  {
    id: 'ff-acad-003',
    semester: 'freshman-fall',
    category: 'academic',
    title: 'Visit office hours for 1-2 professors',
    description:
      'Faculty connections lead to research opportunities, recommendation letters, and insider recruiting intelligence. Introduce yourself early — before you need anything — and ask about their research or industry experience.',
    trackRelevance: {
      'investment-banking': 'important',
      'consulting': 'important',
      'supply-chain': 'important',
      'marketing': 'important',
      'general': 'normal',
    },
    pdcResource: null,
    contentSlot: null,
    order: 3,
  },
  {
    id: 'ff-acad-004',
    semester: 'freshman-fall',
    category: 'academic',
    title: 'Understand Neeley\'s core curriculum sequence',
    description:
      'Review the Neeley undergraduate catalog and identify which semesters are locked with required courses vs. open for electives. Plan now to have elective slots available in junior year for high-value courses like financial modeling or brand strategy.',
    trackRelevance: {
      'investment-banking': 'normal',
      'consulting': 'normal',
      'supply-chain': 'normal',
      'marketing': 'normal',
      'general': 'normal',
    },
    pdcResource: PDC_RESOURCES.neeleyComplete,
    contentSlot: null,
    order: 4,
  },

  // ── EXTRACURRICULARS ──────────────────────────────────────────────────────
  {
    id: 'ff-ec-001',
    semester: 'freshman-fall',
    category: 'extracurriculars',
    title: 'Attend the Neeley Fall Activities Fair',
    description:
      'Survey all Neeley student organizations — Finance Club, Consulting Club, Supply Chain Association, AMA, Net Impact. You don\'t need to join everything yet; observe and identify the one or two that align most with your career interests.',
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
    id: 'ff-ec-002',
    semester: 'freshman-fall',
    category: 'extracurriculars',
    title: 'Join one Neeley professional organization',
    description:
      'Choose the organization most aligned with your career interest and commit to showing up consistently. Consistent involvement in one organization outweighs passive membership in five. Active members get early access to alumni speakers and recruiting events.',
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
  {
    id: 'ff-ec-003',
    semester: 'freshman-fall',
    category: 'extracurriculars',
    title: 'Attend 2+ professional speaker events or panels',
    description:
      'Every speaker event is a networking opportunity. Take one specific, memorable note from each speaker you can reference in a future networking email or conversation. "I attended your talk on supply chain resilience last fall and wanted to follow up..."',
    trackRelevance: {
      'investment-banking': 'important',
      'consulting': 'important',
      'supply-chain': 'normal',
      'marketing': 'normal',
      'general': 'normal',
    },
    pdcResource: null,
    contentSlot: null,
    order: 3,
  },

  // ── RESUME ────────────────────────────────────────────────────────────────
  {
    id: 'ff-res-001',
    semester: 'freshman-fall',
    category: 'resume',
    title: 'Create your first one-page resume draft',
    description:
      'Use the Neeley/Alcon Career Center template. Include education, any work or volunteer experience, current club memberships, and relevant skills. A rough draft now is far better than starting from scratch sophomore year when recruiting intensifies.',
    trackRelevance: {
      'investment-banking': 'critical',
      'consulting': 'critical',
      'supply-chain': 'important',
      'marketing': 'important',
      'general': 'important',
    },
    pdcResource: PDC_RESOURCES.alconResume,
    contentSlot: { type: 'file', placeholder: true, label: 'Neeley Resume Template (Word)' },
    order: 1,
  },
  {
    id: 'ff-res-002',
    semester: 'freshman-fall',
    category: 'resume',
    title: 'Get your first Alcon Career Center resume review',
    description:
      'Even a rough resume benefits from professional feedback. Schedule an appointment at the Alcon Career Center and take specific, actionable notes. Treat each review as a benchmark: how much did your resume improve from the last session?',
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
    id: 'ff-net-001',
    semester: 'freshman-fall',
    category: 'networking',
    title: 'Connect with 10 classmates and 2 professors on LinkedIn',
    description:
      'Personalize every connection request with a one-sentence note. "Hi [Name], I\'m a fellow Neeley freshman and we met in Dr. Smith\'s class — would love to stay connected." The habit of personalizing connections now will serve you when reaching out to recruiters.',
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
    id: 'ff-net-002',
    semester: 'freshman-fall',
    category: 'networking',
    title: 'Have a 15-minute coffee chat with an upperclassman',
    description:
      'Find someone in your target field through your club or class and ask: "Would you be open to a quick coffee chat? I\'d love to hear what you wish you\'d done freshman year." This is not a job ask — it\'s a learning conversation, and upperclassmen generally love to help.',
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

  // ── PROFESSIONAL PRESENTATION ─────────────────────────────────────────────
  {
    id: 'ff-pp-001',
    semester: 'freshman-fall',
    category: 'professional-presentation',
    title: 'Create your LinkedIn profile',
    description:
      'Set up your LinkedIn with a professional photo (or clean phone photo against a plain wall), your TCU Neeley education, and any current memberships or positions. A complete LinkedIn presence by freshman year is table stakes for competitive internship recruiting.',
    trackRelevance: {
      'investment-banking': 'critical',
      'consulting': 'critical',
      'supply-chain': 'important',
      'marketing': 'critical',
      'general': 'important',
    },
    pdcResource: PDC_RESOURCES.neeleyComplete,
    contentSlot: { type: 'lesson', placeholder: true, label: 'LinkedIn Profile Optimization Guide' },
    order: 1,
  },
  {
    id: 'ff-pp-002',
    semester: 'freshman-fall',
    category: 'professional-presentation',
    title: 'Audit your social media presence',
    description:
      'Google your own name. Set all personal social accounts to private or ensure their content is professional. Recruiters regularly search candidates before interviews. One inappropriate photo can end a process before it starts.',
    trackRelevance: {
      'investment-banking': 'important',
      'consulting': 'important',
      'supply-chain': 'normal',
      'marketing': 'important',
      'general': 'normal',
    },
    pdcResource: null,
    contentSlot: null,
    order: 2,
  },
  {
    id: 'ff-pp-003',
    semester: 'freshman-fall',
    category: 'professional-presentation',
    title: 'Practice your 30-second professional introduction',
    description:
      'Develop a concise intro: your name, school, major, career interest, and one relevant fact. "Hi, I\'m Sarah — I\'m a Neeley freshman majoring in Finance. I\'m interested in investment banking and I just joined the Neeley Finance Club." Deliver it without hesitation at any professional event.',
    trackRelevance: {
      'investment-banking': 'important',
      'consulting': 'important',
      'supply-chain': 'normal',
      'marketing': 'normal',
      'general': 'normal',
    },
    pdcResource: PDC_RESOURCES.neeleyComplete,
    contentSlot: null,
    order: 3,
  },
]
