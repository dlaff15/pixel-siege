import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth.js'
import { getUserData } from '../utils/storage.js'
import LoginForm from '../components/auth/LoginForm.jsx'
import CreateAccountForm from '../components/auth/CreateAccountForm.jsx'

export default function AuthPage() {
  const { currentUser } = useAuth()
  const navigate = useNavigate()
  const [mode, setMode] = useState('login')

  useEffect(() => {
    if (!currentUser) return
    const data = getUserData(currentUser)
    if (data?.profile?.onboardingComplete) {
      navigate('/dashboard', { replace: true })
    } else {
      navigate('/onboarding', { replace: true })
    }
  }, [currentUser, navigate])

  return (
    <div className="min-h-screen bg-gradient-to-br from-tcu-purple via-tcu-purple-light to-purple-800 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
        {/* Header */}
        <div className="bg-tcu-purple px-8 py-7 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center font-black text-white text-lg">N</div>
            <div className="text-left">
              <p className="text-white/60 text-xs font-semibold uppercase tracking-widest">Neeley School of Business</p>
              <p className="text-white font-black text-base leading-tight">Undergraduate Internship Dashboard</p>
            </div>
          </div>
          <p className="text-white/60 text-sm">Your personalized career roadmap from freshman year to your first internship.</p>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setMode('login')}
            className={`flex-1 py-3 text-sm font-bold transition-colors ${
              mode === 'login' ? 'text-tcu-purple border-b-2 border-tcu-purple' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setMode('create')}
            className={`flex-1 py-3 text-sm font-bold transition-colors ${
              mode === 'create' ? 'text-tcu-purple border-b-2 border-tcu-purple' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Create Account
          </button>
        </div>

        {/* Form */}
        <div className="px-8 py-7">
          {mode === 'login'
            ? <LoginForm onSwitch={() => setMode('create')} />
            : <CreateAccountForm onSwitch={() => setMode('login')} />
          }
        </div>

        <p className="text-center text-xs text-gray-400 pb-5 px-8">
          TCU Neeley PDC — Career planning tool for Neeley undergraduates.
          All data is stored locally in your browser.
        </p>
      </div>
    </div>
  )
}
