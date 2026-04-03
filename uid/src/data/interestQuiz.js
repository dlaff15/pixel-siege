// Interest quiz for students who select "I don't know yet" during onboarding.
// Each answer adds points to one or more career track IDs.
// After all questions, top 2-3 scoring tracks are surfaced as suggestions.

export const INTEREST_QUIZ = {
  questions: [
    {
      id: 'q1',
      text: 'When you imagine yourself at work, you\'re most energized by...',
      options: [
        {
          value: 'numbers',
          label: 'Analyzing financial models, data, or complex quantitative problems',
          scores: { 'investment-banking': 3, 'consulting': 1 },
        },
        {
          value: 'people',
          label: 'Building relationships, advising clients, and communicating ideas',
          scores: { 'consulting': 2, 'marketing': 2 },
        },
        {
          value: 'systems',
          label: 'Optimizing processes, solving logistics puzzles, and improving efficiency',
          scores: { 'supply-chain': 3, 'consulting': 1 },
        },
        {
          value: 'ideas',
          label: 'Creating brands, developing campaigns, and understanding consumers',
          scores: { 'marketing': 3, 'general': 1 },
        },
      ],
    },
    {
      id: 'q2',
      text: 'The type of organization that most excites you is...',
      options: [
        {
          value: 'wall-street',
          label: 'A major financial institution, bank, or investment firm',
          scores: { 'investment-banking': 3 },
        },
        {
          value: 'consulting-firm',
          label: 'A management consulting firm that solves problems across industries',
          scores: { 'consulting': 3 },
        },
        {
          value: 'large-corp',
          label: 'A large corporation — manufacturing, retail, or consumer goods',
          scores: { 'supply-chain': 2, 'marketing': 2 },
        },
        {
          value: 'tech-startup',
          label: 'A fast-growing tech company or startup',
          scores: { 'marketing': 2, 'general': 2 },
        },
      ],
    },
    {
      id: 'q3',
      text: 'Which business school course sounds most exciting to you?',
      options: [
        {
          value: 'fin-modeling',
          label: 'Financial Modeling & Valuation — DCF, LBO, M&A analysis',
          scores: { 'investment-banking': 3 },
        },
        {
          value: 'strategy',
          label: 'Business Strategy — competitive analysis, market entry, growth frameworks',
          scores: { 'consulting': 3 },
        },
        {
          value: 'ops',
          label: 'Operations Management — supply chain design, process improvement',
          scores: { 'supply-chain': 3 },
        },
        {
          value: 'consumer',
          label: 'Consumer Behavior & Brand Strategy — why people buy what they buy',
          scores: { 'marketing': 3 },
        },
      ],
    },
    {
      id: 'q4',
      text: 'Your ideal internship project would be...',
      options: [
        {
          value: 'deal',
          label: 'Working on a live M&A deal or financial analysis for a transaction',
          scores: { 'investment-banking': 3 },
        },
        {
          value: 'case',
          label: 'Solving a complex business problem and presenting recommendations to a C-suite',
          scores: { 'consulting': 3 },
        },
        {
          value: 'supply',
          label: 'Redesigning a supply chain to reduce cost or improve delivery speed',
          scores: { 'supply-chain': 3 },
        },
        {
          value: 'campaign',
          label: 'Launching a new product or brand campaign and measuring its performance',
          scores: { 'marketing': 3 },
        },
      ],
    },
  ],

  // How many top tracks to suggest (2-3)
  topN: 3,
}

/**
 * Score quiz answers and return sorted track results.
 * @param {Object} answers — { q1: 'numbers', q2: 'consulting-firm', ... }
 * @returns {Array} — [{ trackId, score }, ...] sorted descending
 */
export function scoreQuiz(answers) {
  const totals = {}
  for (const q of INTEREST_QUIZ.questions) {
    const selected = answers[q.id]
    if (!selected) continue
    const option = q.options.find(o => o.value === selected)
    if (!option) continue
    for (const [trackId, pts] of Object.entries(option.scores)) {
      totals[trackId] = (totals[trackId] ?? 0) + pts
    }
  }
  return Object.entries(totals)
    .map(([trackId, score]) => ({ trackId, score }))
    .sort((a, b) => b.score - a.score)
}
