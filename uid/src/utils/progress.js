import { ALL_MILESTONES, SEMESTERS } from '../data/milestones/index.js'

/**
 * Returns completion stats for a single semester.
 * @param {string} semesterId
 * @param {Object} completions — { [milestoneId]: boolean }
 * @param {string|null} categoryFilter — filter to one category, or null for all
 */
export function semesterProgress(semesterId, completions, categoryFilter = null) {
  let milestones = ALL_MILESTONES.filter(m => m.semester === semesterId)
  if (categoryFilter) {
    milestones = milestones.filter(m => m.category === categoryFilter)
  }
  const total = milestones.length
  const completed = milestones.filter(m => completions[m.id]).length
  return { completed, total, percent: total === 0 ? 0 : Math.round((completed / total) * 100) }
}

/**
 * Returns overall completion stats across all semesters.
 */
export function overallProgress(completions, categoryFilter = null) {
  let milestones = ALL_MILESTONES
  if (categoryFilter) {
    milestones = milestones.filter(m => m.category === categoryFilter)
  }
  const total = milestones.length
  const completed = milestones.filter(m => completions[m.id]).length
  return { completed, total, percent: total === 0 ? 0 : Math.round((completed / total) * 100) }
}

/**
 * Returns stats for all semesters at once.
 */
export function allSemesterProgress(completions, categoryFilter = null) {
  return SEMESTERS.map(s => ({
    ...s,
    ...semesterProgress(s.id, completions, categoryFilter),
  }))
}
