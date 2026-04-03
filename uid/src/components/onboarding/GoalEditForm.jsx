import { useState } from 'react'
import { useUser } from '../../hooks/useUser.js'
import { INTEREST_QUIZ, scoreQuiz } from '../../data/interestQuiz.js'
import { CAREER_TRACKS, getTrackById } from '../../data/careerTracks.js'
import { parseGoalToTrack } from '../../utils/goalParser.js'
import Button from '../ui/Button.jsx'
import Input from '../ui/Input.jsx'

export default function GoalEditForm({ onDone }) {
  const { goal, updateGoal } = useUser()
  const [mode, setMode] = useState(goal?.isKnown !== false ? 'known' : 'quiz')
  const [goalText, setGoalText] = useState(goal?.text ?? '')
  const [quizAnswers, setQuizAnswers] = useState({})
  const [quizPage, setQuizPage] = useState('quiz') // 'quiz' | 'results'
  const [quizResults, setQuizResults] = useState([])
  const [selectedTrack, setSelectedTrack] = useState(null)

  function handleKnownSave() {
    if (!goalText.trim()) return
    updateGoal(goalText.trim(), true)
    onDone?.()
  }

  function handleQuizSubmit() {
    const scores = scoreQuiz(quizAnswers)
    const topTracks = scores
      .slice(0, INTEREST_QUIZ.topN)
      .map(({ trackId, score }) => ({ track: getTrackById(trackId), score }))
      .filter(r => r.track)
    setQuizResults(topTracks)
    setSelectedTrack(topTracks[0]?.track?.id ?? 'general')
    setQuizPage('results')
  }

  function handleQuizConfirm() {
    const track = getTrackById(selectedTrack)
    const text = track?.id !== 'general'
      ? `Exploring ${track?.label} — goal TBD`
      : 'Exploring options — goal TBD'
    updateGoal(text, false, quizAnswers, selectedTrack)
    onDone?.()
  }

  const allAnswered = INTEREST_QUIZ.questions.every(q => quizAnswers[q.id])

  return (
    <div className="space-y-5">
      {/* Mode Toggle */}
      <div className="flex rounded-lg border border-gray-200 overflow-hidden">
        <button
          className={`flex-1 py-2.5 text-sm font-semibold transition-colors ${mode === 'known' ? 'bg-tcu-purple text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
          onClick={() => setMode('known')}
        >
          I know my goal
        </button>
        <button
          className={`flex-1 py-2.5 text-sm font-semibold transition-colors ${mode === 'quiz' ? 'bg-tcu-purple text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
          onClick={() => { setMode('quiz'); setQuizPage('quiz') }}
        >
          Help me explore
        </button>
      </div>

      {mode === 'known' && (
        <div className="space-y-4">
          <p className="text-sm text-gray-600">Enter your internship target. Be as specific as you like.</p>
          <Input
            label="Internship Goal"
            placeholder="e.g. Investment Banking at Goldman Sachs, Summer 2028"
            value={goalText}
            onChange={e => setGoalText(e.target.value)}
          />
          {goalText.trim() && (
            <div className="text-xs bg-tcu-purple-pale text-tcu-purple px-3 py-2 rounded-lg">
              Detected track: <strong>{getTrackById(parseGoalToTrack(goalText))?.label}</strong>
            </div>
          )}
          <div className="flex gap-3 justify-end">
            <Button variant="ghost" onClick={onDone}>Cancel</Button>
            <Button variant="primary" onClick={handleKnownSave} disabled={!goalText.trim()}>Save Goal</Button>
          </div>
        </div>
      )}

      {mode === 'quiz' && quizPage === 'quiz' && (
        <div className="space-y-5">
          <p className="text-sm text-gray-600">Answer 4 quick questions and we'll suggest career paths to explore.</p>
          {INTEREST_QUIZ.questions.map(q => (
            <div key={q.id} className="space-y-2">
              <p className="text-sm font-semibold text-gray-800">{q.text}</p>
              <div className="space-y-1.5">
                {q.options.map(opt => (
                  <label
                    key={opt.value}
                    className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                      quizAnswers[q.id] === opt.value
                        ? 'border-tcu-purple bg-tcu-purple-pale'
                        : 'border-gray-200 hover:border-tcu-purple/40 hover:bg-gray-50'
                    }`}
                  >
                    <input
                      type="radio"
                      name={q.id}
                      value={opt.value}
                      checked={quizAnswers[q.id] === opt.value}
                      onChange={() => setQuizAnswers(a => ({ ...a, [q.id]: opt.value }))}
                      className="mt-0.5 accent-tcu-purple"
                    />
                    <span className="text-sm text-gray-700">{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
          <div className="flex gap-3 justify-end">
            <Button variant="ghost" onClick={onDone}>Cancel</Button>
            <Button variant="primary" onClick={handleQuizSubmit} disabled={!allAnswered}>See My Paths</Button>
          </div>
        </div>
      )}

      {mode === 'quiz' && quizPage === 'results' && (
        <div className="space-y-4">
          <p className="text-sm text-gray-600 font-medium">Based on your answers, here are your best-fit career paths:</p>
          <div className="space-y-2">
            {quizResults.map(({ track }) => (
              <label
                key={track.id}
                className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  selectedTrack === track.id ? 'border-tcu-purple bg-tcu-purple-pale' : 'border-gray-200 hover:border-tcu-purple/40'
                }`}
              >
                <input
                  type="radio"
                  name="track"
                  value={track.id}
                  checked={selectedTrack === track.id}
                  onChange={() => setSelectedTrack(track.id)}
                  className="mt-1 accent-tcu-purple"
                />
                <div>
                  <p className="font-bold text-sm text-gray-900">{track.label}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{track.description}</p>
                </div>
              </label>
            ))}
          </div>
          <p className="text-xs text-gray-400">You can always change this later from your profile.</p>
          <div className="flex gap-3 justify-end">
            <Button variant="ghost" onClick={() => setQuizPage('quiz')}>← Back</Button>
            <Button variant="primary" onClick={handleQuizConfirm}>Start Exploring →</Button>
          </div>
        </div>
      )}
    </div>
  )
}
