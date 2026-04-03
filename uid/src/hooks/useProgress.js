import { useMemo } from 'react'
import { useUser } from './useUser.js'
import { semesterProgress, overallProgress, allSemesterProgress } from '../utils/progress.js'

export function useProgress(categoryFilter = null) {
  const { completions } = useUser()

  const overall = useMemo(
    () => overallProgress(completions, categoryFilter),
    [completions, categoryFilter]
  )

  const bySemester = useMemo(
    () => allSemesterProgress(completions, categoryFilter),
    [completions, categoryFilter]
  )

  const getSemester = (semesterId) => semesterProgress(semesterId, completions, categoryFilter)

  return { overall, bySemester, getSemester }
}
