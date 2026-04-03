import { PDC_RESOURCES } from '../pdcResources.js'

export const FRESHMAN_SPRING = [
  // ── ACADEMIC ──────────────────────────────────────────────────────────────
  {
    id: 'fsp-acad-001',
    semester: 'freshman-spring',
    category: 'academic',
    title: 'GPA checkpoint — take action if below 3.3',
    description:
      'Review your fall GPA. If below 3.3, meet with your advisor immediately to build a recovery plan. This is your last low-pressure semester to address a GPA problem before sophomore recruiting begins.',
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
    id: 'fsp-acad-002',
    semester: 'freshman-spring',
    category: 'academic',
    title: 'Identify the 2-3 most valuable electives for your target track',
    description:
      'Research which upper-division electives matter most for your career path and map them to future semesters. IB/Consulting: financial modeling, corporate finance, strategy. Supply chain: operations management, logistics. Marketing: consumer behavior, digital marketing.',
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
  {
    id: 'fsp-acad-003',
    semester: 'freshman-spring',
    category: 'academic',
    title: 'Start Bloomberg Market Concepts (BMC) certification',
    description:
      'Bloomberg BMC is free through TCU Neeley and takes ~8 hours to complete. It signals financial literacy to recruiters and is expected for anyone targeting IB, asset management, or corporate finance. Start now to complete it before sophomore fall recruiting.',
    trackRelevance: {
      'investment-banking': 'critical',
      'consulting': 'important',
      'supply-chain': 'normal',
      'marketing': 'not-applicable',
      'general': 'normal',
    },
    pdcResource: PDC_RESOURCES.neeleyPremiumCredentials,
    contentSlot: { type: 'lesson', placeholder: true, label: 'Bloomberg BMC Access Instructions' },
    order: 3,
  },
  {
    id: 'fsp-acad-004',
    semester: 'freshman-spring',
    category: 'academic',
    title: 'Explore sophomore summer opportunities',
    description:
      'Research freshman/sophomore leadership and diversity programs at firms in your target industry. Many open applications in summer/fall of sophomore year. Knowing what\'s out there now helps you prepare when deadlines arrive.',
    trackRelevance: {
      'investment-banking': 'critical',
      'consulting': 'critical',
      'supply-chain': 'normal',
      'marketing': 'normal',
      'general': 'normal',
    },
    pdcResource: null,
    contentSlot: null,
    order: 4,
  },

  // ── EXTRACURRICULARS ──────────────────────────────────────────────────────
  {
    id: 'fsp-ec-001',
    semester: 'freshman-spring',
    category: 'extracurriculars',
    title: 'Take on a committee role or project in your organization',
    description:
      'Leadership progression is the narrative recruiters want. Run for a committee chair, event coordinator, or project lead role. Even a small leadership responsibility before sophomore year gives you a concrete resume line and a story to tell.',
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
    id: 'fsp-ec-002',
    semester: 'freshman-spring',
    category: 'extracurriculars',
    title: 'Start a "brag document"',
    description:
      'Open a private notes file and log every project, outcome, and accomplishment as it happens. Leadership decisions made, events organized, dollars raised, members recruited, presentations given. This document becomes the raw material for every resume bullet and interview story.',
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
  {
    id: 'fsp-ec-003',
    semester: 'freshman-spring',
    category: 'extracurriculars',
    title: 'Explore your first case or business competition',
    description:
      'Look into Neeley\'s internal business competitions, the AMA Collegiate Case Competition, national supply chain case competitions, or investment case challenges. Even placing in the middle of a freshman team is strong resume content and a real confidence builder.',
    trackRelevance: {
      'investment-banking': 'important',
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
    id: 'fsp-res-001',
    semester: 'freshman-spring',
    category: 'resume',
    title: 'Update resume with fall semester achievements',
    description:
      'Add your new club role, any academic accomplishments, skills developed, and relevant coursework. Treat the end of every semester as a mandatory resume update checkpoint — building this habit ensures you never forget what you accomplished.',
    trackRelevance: {
      'investment-banking': 'important',
      'consulting': 'important',
      'supply-chain': 'normal',
      'marketing': 'normal',
      'general': 'normal',
    },
    pdcResource: PDC_RESOURCES.alconResume,
    contentSlot: null,
    order: 1,
  },
  {
    id: 'fsp-res-002',
    semester: 'freshman-spring',
    category: 'resume',
    title: 'Add a Skills section with relevant tools',
    description:
      'List Excel (and proficiency level), any business software, programming languages if applicable, and certifications in progress (Bloomberg BMC). For IB/Finance, mentioning Excel proficiency early signals technical readiness.',
    trackRelevance: {
      'investment-banking': 'important',
      'consulting': 'important',
      'supply-chain': 'important',
      'marketing': 'normal',
      'general': 'normal',
    },
    pdcResource: null,
    contentSlot: null,
    order: 2,
  },

  // ── NETWORKING ────────────────────────────────────────────────────────────
  {
    id: 'fsp-net-001',
    semester: 'freshman-spring',
    category: 'networking',
    title: 'Reach 50 LinkedIn connections',
    description:
      'Expand your network to classmates, professors, and upperclassmen. Each new connection is a potential future referral, introduction, or intelligence source about your target industry. Continue personalizing every request.',
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
    id: 'fsp-net-002',
    semester: 'freshman-spring',
    category: 'networking',
    title: 'Conduct your first alumni coffee chat',
    description:
      'Find a Neeley alumni in your target field via the TCU alumni directory or LinkedIn. Send a short message: "I\'m a Neeley freshman interested in [field] and would love 20 minutes to hear about your path." Research them before the call. Send a thank-you email the same day.',
    trackRelevance: {
      'investment-banking': 'critical',
      'consulting': 'critical',
      'supply-chain': 'important',
      'marketing': 'important',
      'general': 'normal',
    },
    pdcResource: PDC_RESOURCES.neeleyNextStep,
    contentSlot: { type: 'lesson', placeholder: true, label: 'Coffee Chat Request Template' },
    order: 2,
  },
  {
    id: 'fsp-net-003',
    semester: 'freshman-spring',
    category: 'networking',
    title: 'Follow 5-10 target companies on LinkedIn',
    description:
      'Following companies keeps their news, job postings, and employee updates in your feed. Engage meaningfully — comment on relevant posts or share interesting company news. Recruiters can see if candidates engage with their content.',
    trackRelevance: {
      'investment-banking': 'normal',
      'consulting': 'normal',
      'supply-chain': 'normal',
      'marketing': 'important',
      'general': 'normal',
    },
    pdcResource: null,
    contentSlot: null,
    order: 3,
  },

  // ── JOB ALERTS ────────────────────────────────────────────────────────────
  {
    id: 'fsp-ja-001',
    semester: 'freshman-spring',
    category: 'job-alerts',
    title: 'Set up LinkedIn Job Alerts for your target function',
    description:
      'Set alerts for "internship" + your target function (investment banking, marketing, operations) in your target cities. This is market intelligence, not application pressure yet. Understanding what firms ask for helps you build the right profile.',
    trackRelevance: {
      'investment-banking': 'important',
      'consulting': 'normal',
      'supply-chain': 'normal',
      'marketing': 'normal',
      'general': 'normal',
    },
    pdcResource: null,
    contentSlot: null,
    order: 1,
  },
  {
    id: 'fsp-ja-002',
    semester: 'freshman-spring',
    category: 'job-alerts',
    title: 'Create a job tracking spreadsheet',
    description:
      'Build a simple tracker now: company, role, deadline, status, contact, notes. The habit of tracking applications pays dividends when you\'re managing 15-20 simultaneous applications junior year. Google Sheets or Notion both work well.',
    trackRelevance: {
      'investment-banking': 'important',
      'consulting': 'important',
      'supply-chain': 'normal',
      'marketing': 'normal',
      'general': 'normal',
    },
    pdcResource: null,
    contentSlot: { type: 'file', placeholder: true, label: 'Job Tracking Spreadsheet Template' },
    order: 2,
  },

  // ── PROFESSIONAL PRESENTATION ─────────────────────────────────────────────
  {
    id: 'fsp-pp-001',
    semester: 'freshman-spring',
    category: 'professional-presentation',
    title: 'Write your LinkedIn "About" section',
    description:
      'Write a 3-5 sentence professional bio in first person: your major, career interest, what you\'re working toward, and one line about what drives you. This is the first thing recruiters read — make it specific, not generic.',
    trackRelevance: {
      'investment-banking': 'important',
      'consulting': 'important',
      'supply-chain': 'normal',
      'marketing': 'important',
      'general': 'normal',
    },
    pdcResource: PDC_RESOURCES.neeleyComplete,
    contentSlot: null,
    order: 1,
  },
  {
    id: 'fsp-pp-002',
    semester: 'freshman-spring',
    category: 'professional-presentation',
    title: 'Research interview attire standards for your target industry',
    description:
      'Investment banking expects full business professional (dark suit). Consulting is typically business professional to business casual depending on the firm. Supply chain and marketing vary more widely. Know the standard for your target before you need an outfit — not the night before.',
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
]
