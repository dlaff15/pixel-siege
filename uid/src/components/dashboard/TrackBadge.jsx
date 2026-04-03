import { getTrackById } from '../../data/careerTracks.js'

const RELEVANCE_CONFIG = {
  critical: { label: 'Critical', bg: '#4D1979', text: '#fff' },
  important: { label: 'Important', bg: '#EDE9FE', text: '#4D1979' },
}

export default function TrackBadge({ relevance, trackId }) {
  const config = RELEVANCE_CONFIG[relevance]
  if (!config) return null
  const track = getTrackById(trackId)
  if (!track) return null

  return (
    <span
      className="inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0"
      style={{ backgroundColor: config.bg, color: config.text }}
    >
      {relevance === 'critical' && '⚡'}
      {relevance === 'important' && '★'}
      {config.label} for {track.shortLabel}
    </span>
  )
}
