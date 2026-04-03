import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth.js'
import { useUser } from '../hooks/useUser.js'
import { useProgress } from '../hooks/useProgress.js'
import { getTrackById } from '../data/careerTracks.js'
import AppShell from '../components/layout/AppShell.jsx'
import GoalEditForm from '../components/onboarding/GoalEditForm.jsx'
import ProgressRing from '../components/ui/ProgressRing.jsx'
import Button from '../components/ui/Button.jsx'
import Input from '../components/ui/Input.jsx'
import Modal from '../components/ui/Modal.jsx'

export default function ProfilePage() {
  const { currentUser, logout } = useAuth()
  const { profile, goal, updateProfile, resetOnboarding } = useUser()
  const { overall } = useProgress()
  const navigate = useNavigate()
  const track = goal ? getTrackById(goal.careerTrackId) : null

  const [editingName, setEditingName] = useState(false)
  const [nameValue, setNameValue] = useState(profile?.name ?? '')
  const [editingGoal, setEditingGoal] = useState(false)
  const [confirmReset, setConfirmReset] = useState(false)

  function handleNameSave() {
    if (!nameValue.trim()) return
    updateProfile({ name: nameValue.trim() })
    setEditingName(false)
  }

  function handleResetOnboarding() {
    resetOnboarding()
    setConfirmReset(false)
    navigate('/onboarding')
  }

  function handleLogout() {
    logout()
    navigate('/')
  }

  return (
    <AppShell>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        {/* Header card */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <div className="flex items-start gap-5">
            <div className="w-16 h-16 rounded-2xl bg-tcu-purple-pale flex items-center justify-center text-2xl font-black text-tcu-purple flex-shrink-0">
              {profile?.name?.charAt(0)?.toUpperCase() || '?'}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h1 className="text-xl font-black text-gray-900">{profile?.name || 'Your Name'}</h1>
                  <p className="text-sm text-gray-500 capitalize">{profile?.classYear} · {currentUser}</p>
                </div>
                <Button variant="secondary" size="sm" onClick={() => { setNameValue(profile?.name ?? ''); setEditingName(true) }}>
                  Edit
                </Button>
              </div>
              <div className="mt-3 flex items-center gap-4">
                <ProgressRing percent={overall.percent} size={52} strokeWidth={5} />
                <div>
                  <p className="text-sm font-bold text-gray-900">{overall.percent}% complete</p>
                  <p className="text-xs text-gray-500">{overall.completed} of {overall.total} milestones</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Goal card */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <div className="flex items-start justify-between gap-3 mb-4">
            <h2 className="text-base font-black text-gray-900">🎯 Internship Goal</h2>
            <Button variant="secondary" size="sm" onClick={() => setEditingGoal(true)}>
              Edit Goal
            </Button>
          </div>
          <div className="bg-tcu-purple-pale rounded-xl p-4">
            <p className="text-sm font-semibold text-tcu-purple">{goal?.text || 'No goal set yet'}</p>
            {track && (
              <p className="text-xs text-tcu-purple/70 mt-1">
                Track: <strong>{track.label}</strong> — milestones are tailored to this path
              </p>
            )}
          </div>
          {track && track.id !== 'general' && (
            <p className="text-xs text-gray-500 mt-3 leading-relaxed">{track.recruitingPressureMessage}</p>
          )}
        </div>

        {/* Settings card */}
        <div className="bg-white rounded-2xl border border-gray-200 divide-y divide-gray-100">
          <div className="p-5 flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-gray-900">Re-take Onboarding Survey</p>
              <p className="text-xs text-gray-500 mt-0.5">Update your name, class year, and career direction.</p>
            </div>
            <Button variant="secondary" size="sm" onClick={() => setConfirmReset(true)}>
              Re-take
            </Button>
          </div>
          <div className="p-5 flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-gray-900">Account</p>
              <p className="text-xs text-gray-500 mt-0.5">Signed in as <strong>{currentUser}</strong>. Data stored locally in this browser.</p>
            </div>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              Sign Out
            </Button>
          </div>
        </div>

        {/* PDC Note */}
        <div className="bg-tcu-purple-pale rounded-2xl p-5 text-sm text-tcu-purple/80 leading-relaxed">
          <p className="font-bold text-tcu-purple mb-1">About Neeley UID</p>
          This dashboard was built to help TCU Neeley undergraduates navigate the full recruiting journey from freshman orientation through junior year. Content is provided by the Neeley Professional Development Center. For questions or feedback, visit the PDC in Neeley Hall.
        </div>
      </div>

      {/* Edit name modal */}
      <Modal open={editingName} onClose={() => setEditingName(false)} title="Edit Your Name">
        <div className="space-y-4">
          <Input label="First Name" value={nameValue} onChange={e => setNameValue(e.target.value)} autoFocus />
          <div className="flex gap-3 justify-end">
            <Button variant="ghost" onClick={() => setEditingName(false)}>Cancel</Button>
            <Button variant="primary" onClick={handleNameSave}>Save</Button>
          </div>
        </div>
      </Modal>

      {/* Edit goal modal */}
      <Modal open={editingGoal} onClose={() => setEditingGoal(false)} title="Update Your Internship Goal" maxWidth="max-w-xl">
        <GoalEditForm onDone={() => setEditingGoal(false)} />
      </Modal>

      {/* Confirm reset modal */}
      <Modal open={confirmReset} onClose={() => setConfirmReset(false)} title="Re-take Onboarding?">
        <div className="space-y-4">
          <p className="text-sm text-gray-600">This will take you back through the onboarding survey. Your milestone progress will be preserved.</p>
          <div className="flex gap-3 justify-end">
            <Button variant="ghost" onClick={() => setConfirmReset(false)}>Cancel</Button>
            <Button variant="primary" onClick={handleResetOnboarding}>Continue to Survey</Button>
          </div>
        </div>
      </Modal>
    </AppShell>
  )
}
