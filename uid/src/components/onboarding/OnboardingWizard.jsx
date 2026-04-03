import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../hooks/useUser.js'
import { INTEREST_QUIZ, scoreQuiz } from '../../data/interestQuiz.js'
import { getTrackById } from '../../data/careerTracks.js'
import { parseGoalToTrack } from '../../utils/goalParser.js'
import Button from '../ui/Button.jsx'
import Input from '../ui/Input.jsx'

const STEPS = ['basics', 'goal-mode', 'goal-known', 'goal-quiz', 'goal-results', 'done']

export default function OnboardingWizard() {
  const { completeOnboarding } = useUser()
  const navigate = useNavigate()

  const [step, setStep] = useState('basics')
  const [name, setName] = useState('')
  const [classYear, setClassYear] = useState('freshman')
  const [goalMode, setGoalMode] = useState('known')
  const [goalText, setGoalText] = useState('')
  const [quizAnswers, setQuizAnswers] = useState({})
  const [quizResults, setQuizResults] = useState([])
  const [selectedTrack, setSelectedTrack] = useState(null)

  const stepIndex = {
    basics: 0, 'goal-mode': 1, 'goal-known': 2, 'goal-quiz': 2, 'goal-results': 3, done: 4,
  }
  const totalSteps = 4
  const currentIdx = stepIndex[step] ?? 0

  function finishOnboarding(goal) {
    completeOnboarding(
      { name: name.trim(), classYear },
      goal
    )
    navigate('/dashboard')
  }

  function handleQuizSubmit() {
    const scores = scoreQuiz(quizAnswers)
    const topTracks = scores
      .slice(0, INTEREST_QUIZ.topN)
      .map(({ trackId }) => getTrackById(trackId))
      .filter(Boolean)
    setQuizResults(topTracks)
    setSelectedTrack(topTracks[0]?.id ?? 'general')
    setStep('goal-results')
  }

  const allQuizAnswered = INTEREST_QUIZ.questions.every(q => quizAnswers[q.id])

  return (
    <div className="min-h-screen bg-gradient-to-br from-tcu-purple via-tcu-purple-light to-purple-800 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden">
        {/* Header */}
        <div className="bg-tcu-purple px-8 pt-8 pb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center font-black text-white text-sm">N</div>
            <div>
              <p className="text-white/60 text-xs font-semibold uppercase tracking-widest">Neeley UID</p>
              <p className="text-white font-bold text-base leading-tight">Undergraduate Internship Dashboard</p>
            </div>
          </div>
          {/* Progress dots */}
          <div className="flex gap-2 items-center">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i < currentIdx ? 'bg-white w-6' : i === currentIdx ? 'bg-white w-6' : 'bg-white/30 w-3'
                }`}
              />
            ))}
            <span className="text-white/50 text-xs ml-2">{Math.min(currentIdx + 1, totalSteps)} of {totalSteps}</span>
          </div>
        </div>

        {/* Body */}
        <div className="p-8">
          {/* Step: Basics */}
          {step === 'basics' && (
            <div className="space-y-5">
              <div>
                <h2 className="text-xl font-black text-gray-900">Welcome to Neeley UID</h2>
                <p className="text-sm text-gray-500 mt-1">Let's get your dashboard set up. This takes about 2 minutes.</p>
              </div>
              <Input
                label="Your First Name"
                placeholder="e.g. Jordan"
                value={name}
                onChange={e => setName(e.target.value)}
                autoFocus
              />
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-700">Class Year</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { value: 'freshman', label: 'Freshman' },
                    { value: 'sophomore', label: 'Sophomore' },
                    { value: 'junior', label: 'Junior' },
                  ].map(opt => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setClassYear(opt.value)}
                      className={`py-2.5 rounded-lg border-2 text-sm font-semibold transition-all ${
                        classYear === opt.value
                          ? 'border-tcu-purple bg-tcu-purple-pale text-tcu-purple'
                          : 'border-gray-200 text-gray-600 hover:border-tcu-purple/40'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
              <Button
                variant="primary" size="lg" className="w-full"
                disabled={!name.trim()}
                onClick={() => setStep('goal-mode')}
              >
                Continue →
              </Button>
            </div>
          )}

          {/* Step: Goal mode */}
          {step === 'goal-mode' && (
            <div className="space-y-5">
              <div>
                <h2 className="text-xl font-black text-gray-900">What's your internship goal?</h2>
                <p className="text-sm text-gray-500 mt-1">This helps us personalize your timeline and highlight the most important milestones.</p>
              </div>
              <div className="space-y-3">
                <button
                  onClick={() => { setGoalMode('known'); setStep('goal-known') }}
                  className="w-full text-left p-4 rounded-xl border-2 border-gray-200 hover:border-tcu-purple hover:bg-tcu-purple-pale transition-all group"
                >
                  <p className="font-bold text-gray-900 group-hover:text-tcu-purple">🎯 I know my target</p>
                  <p className="text-sm text-gray-500 mt-0.5">I have a specific firm, function, or industry in mind.</p>
                </button>
                <button
                  onClick={() => { setGoalMode('quiz'); setStep('goal-quiz') }}
                  className="w-full text-left p-4 rounded-xl border-2 border-gray-200 hover:border-tcu-purple hover:bg-tcu-purple-pale transition-all group"
                >
                  <p className="font-bold text-gray-900 group-hover:text-tcu-purple">🧭 I'm still exploring</p>
                  <p className="text-sm text-gray-500 mt-0.5">Answer 4 questions and we'll suggest career paths that fit you.</p>
                </button>
              </div>
              <button onClick={() => setStep('basics')} className="text-sm text-gray-400 hover:text-gray-600">← Back</button>
            </div>
          )}

          {/* Step: Known goal */}
          {step === 'goal-known' && (
            <div className="space-y-5">
              <div>
                <h2 className="text-xl font-black text-gray-900">What's your target?</h2>
                <p className="text-sm text-gray-500 mt-1">Be as specific as you like. You can update this at any time.</p>
              </div>
              <Input
                label="Internship Goal"
                placeholder="e.g. Investment Banking at Goldman Sachs, Summer 2028"
                value={goalText}
                onChange={e => setGoalText(e.target.value)}
                autoFocus
              />
              {goalText.trim() && (
                <div className="text-xs bg-tcu-purple-pale text-tcu-purple px-3 py-2 rounded-lg font-medium">
                  🗺️ Detected track: <strong>{getTrackById(parseGoalToTrack(goalText))?.label}</strong>
                  <span className="text-tcu-purple/60 ml-1">— your timeline will be tailored to this path</span>
                </div>
              )}
              <div className="flex gap-3">
                <Button variant="ghost" onClick={() => setStep('goal-mode')}>← Back</Button>
                <Button
                  variant="primary" size="lg" className="flex-1"
                  disabled={!goalText.trim()}
                  onClick={() => finishOnboarding({ text: goalText.trim(), isKnown: true, quizAnswers: null, careerTrackId: parseGoalToTrack(goalText) })}
                >
                  Build My Dashboard →
                </Button>
              </div>
            </div>
          )}

          {/* Step: Quiz */}
          {step === 'goal-quiz' && (
            <div className="space-y-5">
              <div>
                <h2 className="text-xl font-black text-gray-900">Quick career quiz</h2>
                <p className="text-sm text-gray-500 mt-1">4 questions to find your best-fit career paths.</p>
              </div>
              <div className="space-y-5 max-h-80 overflow-y-auto pr-1">
                {INTEREST_QUIZ.questions.map((q, qi) => (
                  <div key={q.id} className="space-y-2">
                    <p className="text-sm font-bold text-gray-800">{qi + 1}. {q.text}</p>
                    <div className="space-y-1.5">
                      {q.options.map(opt => (
                        <label
                          key={opt.value}
                          className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                            quizAnswers[q.id] === opt.value ? 'border-tcu-purple bg-tcu-purple-pale' : 'border-gray-200 hover:border-tcu-purple/40'
                          }`}
                        >
                          <input
                            type="radio" name={q.id} value={opt.value}
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
              </div>
              <div className="flex gap-3">
                <Button variant="ghost" onClick={() => setStep('goal-mode')}>← Back</Button>
                <Button variant="primary" className="flex-1" disabled={!allQuizAnswered} onClick={handleQuizSubmit}>
                  See My Paths →
                </Button>
              </div>
            </div>
          )}

          {/* Step: Quiz Results */}
          {step === 'goal-results' && (
            <div className="space-y-5">
              <div>
                <h2 className="text-xl font-black text-gray-900">Your best-fit paths</h2>
                <p className="text-sm text-gray-500 mt-1">Select one to start — you can always change it later.</p>
              </div>
              <div className="space-y-2">
                {quizResults.map(track => (
                  <label
                    key={track.id}
                    className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      selectedTrack === track.id ? 'border-tcu-purple bg-tcu-purple-pale' : 'border-gray-200 hover:border-tcu-purple/40'
                    }`}
                  >
                    <input
                      type="radio" name="track" value={track.id}
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
              <div className="flex gap-3">
                <Button variant="ghost" onClick={() => setStep('goal-quiz')}>← Back</Button>
                <Button
                  variant="primary" className="flex-1"
                  onClick={() => {
                    const track = getTrackById(selectedTrack)
                    const text = track.id !== 'general'
                      ? `Exploring ${track.label} — goal TBD`
                      : 'Exploring options — goal TBD'
                    finishOnboarding({ text, isKnown: false, quizAnswers, careerTrackId: selectedTrack })
                  }}
                >
                  Build My Dashboard →
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
