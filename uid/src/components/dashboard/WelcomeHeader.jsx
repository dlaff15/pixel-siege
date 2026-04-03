import { useUser } from '../../hooks/useUser.js'
import { useProgress } from '../../hooks/useProgress.js'
import { getTrackById } from '../../data/careerTracks.js'
import { SEMESTERS } from '../../data/milestones/index.js'
import ProgressRing from '../ui/ProgressRing.jsx'
import ProgressBar from '../ui/ProgressBar.jsx'

export default function WelcomeHeader() {
  const { profile, goal } = useUser()
  const { overall, bySemester } = useProgress()
  const track = goal ? getTrackById(goal.careerTrackId) : null

  const firstName = profile?.name?.split(' ')[0] || 'there'

  const greeting = (() => {
    const h = new Date().getHours()
    if (h < 12) return 'Good morning'
    if (h < 17) return 'Good afternoon'
    return 'Good evening'
  })()

  return (
    <div className="bg-white border-b border-gray-100 px-6 py-6">
      {/* Top row */}
      <div className="flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-6">
        <ProgressRing percent={overall.percent} size={80} strokeWidth={7} />
        <div className="flex-1 min-w-0">
          <p className="text-sm text-gray-400 font-medium">{greeting},</p>
          <h1 className="text-2xl font-black text-gray-900 leading-tight">{firstName} 👋</h1>
          <p className="text-sm text-gray-500 mt-1">
            You've completed <span className="font-bold text-tcu-purple">{overall.completed}</span> of{' '}
            <span className="font-bold">{overall.total}</span> milestones overall.
            {overall.percent >= 80 && ' Excellent momentum!'}
            {overall.percent >= 40 && overall.percent < 80 && ' Keep going!'}
            {overall.percent < 40 && overall.percent > 0 && ' Great start — every milestone counts.'}
            {overall.percent === 0 && ' Start by checking off your first milestone.'}
          </p>
          {track && goal?.text && (
            <div className="mt-2 inline-flex items-center gap-1.5 bg-tcu-purple-pale text-tcu-purple text-xs font-semibold px-3 py-1 rounded-full">
              <span>🎯</span>
              <span className="truncate max-w-xs">{goal.text}</span>
            </div>
          )}
        </div>
      </div>

      {/* Semester mini-bars */}
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {bySemester.map(s => (
          <div key={s.id} className="bg-gray-50 rounded-xl p-3 text-center">
            <p className="text-xs font-bold text-gray-700 leading-tight mb-1.5">{s.shortLabel}</p>
            <ProgressBar percent={s.percent} height={4} />
            <p className="text-xs text-gray-400 mt-1">{s.percent}%</p>
          </div>
        ))}
      </div>
    </div>
  )
}
