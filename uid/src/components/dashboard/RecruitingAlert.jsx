import { useUser } from '../../hooks/useUser.js'
import { getTrackById } from '../../data/careerTracks.js'

export default function RecruitingAlert({ semesterId }) {
  const { goal } = useUser()
  if (!goal?.careerTrackId) return null
  const track = getTrackById(goal.careerTrackId)
  if (!track || track.id === 'general') return null
  if (track.recruitingOnsetSemester !== semesterId) return null

  return (
    <div className="mx-4 mt-0 mb-4 bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3">
      <span className="text-amber-500 text-xl flex-shrink-0">⚠️</span>
      <div>
        <p className="text-sm font-bold text-amber-800">{track.label} Recruiting Alert</p>
        <p className="text-sm text-amber-700 mt-0.5 leading-relaxed">{track.recruitingPressureMessage}</p>
      </div>
    </div>
  )
}
