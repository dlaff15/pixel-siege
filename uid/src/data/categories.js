export const CATEGORIES = [
  {
    id: 'academic',
    label: 'Academic Foundation',
    icon: '📚',
    description: 'GPA, coursework, certifications, and academic strategy.',
    color: '#4D1979',
    active: true,
  },
  {
    id: 'extracurriculars',
    label: 'Extracurriculars',
    icon: '🏛️',
    description: 'Student organizations, leadership roles, and competitions.',
    color: '#6B2D9E',
    active: true,
  },
  {
    id: 'resume',
    label: 'Resume & Application Materials',
    icon: '📄',
    description: 'Resume, cover letter, and all written application materials.',
    color: '#7B3FAE',
    active: true,
  },
  {
    id: 'networking',
    label: 'Networking',
    icon: '🤝',
    description: 'Alumni connections, coffee chats, recruiter relationships, and referrals.',
    color: '#2D6A9E',
    active: true,
  },
  {
    id: 'interviewing',
    label: 'Interviewing',
    icon: '💬',
    description: 'Behavioral, technical, and case interview preparation.',
    color: '#2D7A6A',
    active: true,
  },
  {
    id: 'job-alerts',
    label: 'Job Alerts & Search Strategy',
    icon: '🔔',
    description: 'Tracking deadlines, monitoring postings, and managing your pipeline.',
    color: '#9E6B2D',
    active: true,
  },
  {
    id: 'professional-presentation',
    label: 'Professional Presentation',
    icon: '👔',
    description: 'LinkedIn, attire, personal brand, and digital presence.',
    color: '#9E2D5B',
    active: true,
  },
  {
    id: 'performing-at-internship',
    label: 'Performing at the Internship',
    icon: '⭐',
    description: 'Excelling during your internship and converting to a full-time offer.',
    color: '#6B7280',
    active: false, // Enable this category in a future release
  },
]

export const ACTIVE_CATEGORIES = CATEGORIES.filter(c => c.active)

export const getCategoryById = (id) => CATEGORIES.find(c => c.id === id)
