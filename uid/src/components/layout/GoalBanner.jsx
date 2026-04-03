import { useState } from 'react'
import { useUser } from '../../hooks/useUser.js'
import { getTrackById } from '../../data/careerTracks.js'
import Modal from '../ui/Modal.jsx'
import GoalEditForm from '../onboarding/GoalEditForm.jsx'

export default function GoalBanner() {
  const { goal } = useUser()
  const [editing, setEditing] = useState(false)

  const track = goal ? getTrackById(goal.careerTrackId) : null
  const hasGoal = goal?.text

  return (
    <>
      <button
        onClick={() => setEditing(true)}
        className="w-full text-left flex items-center gap-3 px-4 py-3 border-b border-tcu-purple-dark/30 bg-tcu-purple-dark/20 hover:bg-tcu-purple-dark/30 transition-colors group"
        aria-label="Edit your internship goal"
      >
        <span className="text-yellow-300 text-base flex-shrink-0">🎯</span>
        <div className="flex-1 min-w-0">
          <span className="text-tcu-purple-pale text-xs font-semibold uppercase tracking-wider mr-2">Your Goal</span>
          <span className="text-white text-sm font-medium truncate">
            {hasGoal ? goal.text : 'Set your internship goal →'}
          </span>
        </div>
        {track && hasGoal && (
          <span className="flex-shrink-0 text-xs bg-white/10 text-white/80 px-2 py-0.5 rounded-full hidden sm:inline">
            {track.shortLabel}
          </span>
        )}
        <svg className="w-4 h-4 text-white/50 group-hover:text-white/80 flex-shrink-0 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      </button>

      <Modal open={editing} onClose={() => setEditing(false)} title="Update Your Internship Goal" maxWidth="max-w-xl">
        <GoalEditForm onDone={() => setEditing(false)} />
      </Modal>
    </>
  )
}
