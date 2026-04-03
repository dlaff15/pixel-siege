import { CAREER_TRACKS } from '../data/careerTracks.js'

/**
 * Maps a free-text goal string to a career track ID.
 * Checks each track's keyword list (case-insensitive substring match).
 * Returns 'general' if no match found.
 */
export function parseGoalToTrack(goalText) {
  if (!goalText || typeof goalText !== 'string') return 'general'
  const lower = goalText.toLowerCase()
  for (const track of CAREER_TRACKS) {
    if (track.id === 'general') continue
    for (const keyword of track.keywords) {
      if (lower.includes(keyword.toLowerCase())) {
        return track.id
      }
    }
  }
  return 'general'
}
