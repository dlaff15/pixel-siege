// Central aggregator for all milestone data.
// To add a new semester: import its array here and spread it into ALL_MILESTONES.
// To add a new category to an existing semester: edit the relevant semester file.

import { FRESHMAN_FALL } from './freshman-fall.js'
import { FRESHMAN_SPRING } from './freshman-spring.js'
import { SOPHOMORE_FALL } from './sophomore-fall.js'
import { SOPHOMORE_SPRING } from './sophomore-spring.js'
import { JUNIOR_FALL } from './junior-fall.js'
import { JUNIOR_SPRING } from './junior-spring.js'

export const ALL_MILESTONES = [
  ...FRESHMAN_FALL,
  ...FRESHMAN_SPRING,
  ...SOPHOMORE_FALL,
  ...SOPHOMORE_SPRING,
  ...JUNIOR_FALL,
  ...JUNIOR_SPRING,
]

export const SEMESTERS = [
  { id: 'freshman-fall',   label: 'Freshman Fall',   shortLabel: 'Fr. Fall',   year: 1 },
  { id: 'freshman-spring', label: 'Freshman Spring', shortLabel: 'Fr. Spring', year: 1 },
  { id: 'sophomore-fall',  label: 'Sophomore Fall',  shortLabel: 'So. Fall',   year: 2 },
  { id: 'sophomore-spring',label: 'Sophomore Spring',shortLabel: 'So. Spring', year: 2 },
  { id: 'junior-fall',     label: 'Junior Fall',     shortLabel: 'Jr. Fall',   year: 3 },
  { id: 'junior-spring',   label: 'Junior Spring',   shortLabel: 'Jr. Spring', year: 3 },
]

export const getMilestonesForSemester = (semesterId) =>
  ALL_MILESTONES.filter(m => m.semester === semesterId)

export const getMilestonesForCategory = (categoryId) =>
  ALL_MILESTONES.filter(m => m.category === categoryId)

export {
  FRESHMAN_FALL,
  FRESHMAN_SPRING,
  SOPHOMORE_FALL,
  SOPHOMORE_SPRING,
  JUNIOR_FALL,
  JUNIOR_SPRING,
}
