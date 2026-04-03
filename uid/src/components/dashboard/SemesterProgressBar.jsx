import { useProgress } from '../../hooks/useProgress.js'
import ProgressBar from '../ui/ProgressBar.jsx'

export default function SemesterProgressBar({ semesterId, categoryFilter }) {
  const { getSemester } = useProgress(categoryFilter)
  const stats = getSemester(semesterId)
  return (
    <div className="flex items-center gap-3">
      <ProgressBar percent={stats.percent} className="flex-1" height={5} />
      <span className="text-xs font-bold text-gray-500 w-20 text-right flex-shrink-0">
        {stats.completed}/{stats.total} · {stats.percent}%
      </span>
    </div>
  )
}
