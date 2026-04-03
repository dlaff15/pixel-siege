import { useState, useEffect } from 'react'
import { getMilestonesForSemester } from '../../data/milestones/index.js'
import { ACTIVE_CATEGORIES } from '../../data/categories.js'
import { useProgress } from '../../hooks/useProgress.js'
import CategoryGroup from './CategoryGroup.jsx'
import SemesterProgressBar from './SemesterProgressBar.jsx'
import RecruitingAlert from './RecruitingAlert.jsx'

export default function SemesterSection({ semester, categoryFilter, defaultOpen = false, scrollRef }) {
  const [open, setOpen] = useState(defaultOpen)
  const { getSemester } = useProgress(categoryFilter)
  const stats = getSemester(semester.id)

  // Re-open if a scroll is triggered from the sidebar
  useEffect(() => {
    if (scrollRef) setOpen(true)
  }, [scrollRef])

  const allMilestones = getMilestonesForSemester(semester.id)
  const filteredMilestones = categoryFilter
    ? allMilestones.filter(m => m.category === categoryFilter)
    : allMilestones

  // Group by category
  const grouped = ACTIVE_CATEGORIES.reduce((acc, cat) => {
    const items = filteredMilestones.filter(m => m.category === cat.id)
    if (items.length > 0) acc[cat.id] = items
    return acc
  }, {})

  if (filteredMilestones.length === 0) return null

  const isComplete = stats.percent === 100

  return (
    <div
      id={`semester-${semester.id}`}
      className={`border rounded-2xl overflow-hidden transition-all ${
        isComplete ? 'border-green-200 bg-green-50/30' : 'border-gray-200 bg-white'
      }`}
    >
      {/* Header */}
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-gray-50/50 transition-colors"
      >
        <div className={`w-3 h-3 rounded-full flex-shrink-0 ${isComplete ? 'bg-green-400' : 'bg-tcu-purple-light/40'}`} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 flex-wrap">
            <h2 className="text-base font-black text-gray-900">{semester.label}</h2>
            {isComplete && (
              <span className="text-xs bg-green-100 text-green-700 font-semibold px-2 py-0.5 rounded-full">
                ✓ Complete
              </span>
            )}
          </div>
          <div className="mt-1.5">
            <SemesterProgressBar semesterId={semester.id} categoryFilter={categoryFilter} />
          </div>
        </div>
        <svg
          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Content */}
      {open && (
        <div className="border-t border-gray-100">
          <RecruitingAlert semesterId={semester.id} />
          <div className="p-5 pt-4 space-y-6">
            {Object.entries(grouped).map(([catId, milestones]) => (
              <CategoryGroup key={catId} categoryId={catId} milestones={milestones} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
