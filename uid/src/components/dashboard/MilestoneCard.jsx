import { useState } from 'react'
import { useUser } from '../../hooks/useUser.js'
import TrackBadge from './TrackBadge.jsx'
import PDCResourceCard from './PDCResourceCard.jsx'

export default function MilestoneCard({ milestone }) {
  const { completions, toggleMilestone, goal } = useUser()
  const [expanded, setExpanded] = useState(false)
  const completed = !!completions[milestone.id]
  const trackId = goal?.careerTrackId ?? 'general'
  const relevance = milestone.trackRelevance?.[trackId] ?? 'normal'
  const dimmed = relevance === 'not-applicable'

  return (
    <div
      className={`rounded-xl border transition-all duration-150 ${
        completed
          ? 'bg-gray-50 border-gray-100'
          : dimmed
            ? 'bg-white border-gray-100 opacity-50'
            : 'bg-white border-gray-200 shadow-sm hover:border-tcu-purple/30 hover:shadow-md'
      }`}
    >
      {/* Main row */}
      <div className="flex items-start gap-3 p-4">
        {/* Checkbox */}
        <button
          onClick={() => toggleMilestone(milestone.id)}
          className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${
            completed
              ? 'bg-tcu-purple border-tcu-purple'
              : 'border-gray-300 hover:border-tcu-purple'
          }`}
          aria-label={completed ? 'Mark incomplete' : 'Mark complete'}
        >
          {completed && (
            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </button>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-start gap-2">
            <p className={`text-sm font-semibold leading-snug flex-1 min-w-0 ${completed ? 'line-through text-gray-400' : 'text-gray-900'}`}>
              {milestone.title}
            </p>
            {!dimmed && (relevance === 'critical' || relevance === 'important') && (
              <TrackBadge relevance={relevance} trackId={trackId} />
            )}
          </div>

          {/* Expand / collapse description */}
          <button
            onClick={() => setExpanded(e => !e)}
            className="mt-1 text-xs text-tcu-purple hover:underline font-medium"
          >
            {expanded ? 'Hide details ↑' : 'View details ↓'}
          </button>

          {expanded && (
            <div className="mt-2 space-y-2">
              <p className="text-sm text-gray-600 leading-relaxed">{milestone.description}</p>

              {milestone.contentSlot && (
                <div className="inline-flex items-center gap-1.5 text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full">
                  {milestone.contentSlot.type === 'file' && '📎'}
                  {milestone.contentSlot.type === 'lesson' && '📖'}
                  {milestone.contentSlot.type === 'link' && '🔗'}
                  <span>{milestone.contentSlot.label}</span>
                  <span className="text-gray-400 italic">(coming soon)</span>
                </div>
              )}

              {milestone.pdcResource && (
                <PDCResourceCard resource={milestone.pdcResource} />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
