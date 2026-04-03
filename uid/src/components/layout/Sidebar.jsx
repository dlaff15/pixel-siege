import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth.js'
import { useUser } from '../../hooks/useUser.js'
import { useProgress } from '../../hooks/useProgress.js'
import { SEMESTERS } from '../../data/milestones/index.js'
import { ACTIVE_CATEGORIES } from '../../data/categories.js'
import GoalBanner from './GoalBanner.jsx'
import ProgressBar from '../ui/ProgressBar.jsx'

export default function Sidebar({ activeCategory, onCategoryChange, onSemesterClick, onClose }) {
  const { logout } = useAuth()
  const { profile } = useUser()
  const { overall, getSemester } = useProgress()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/')
  }

  return (
    <aside className="flex flex-col h-full bg-tcu-purple text-white">
      {/* Brand */}
      <div className="px-5 pt-5 pb-2 flex-shrink-0">
        <div className="flex items-center gap-2.5 mb-1">
          <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center font-black text-sm">N</div>
          <div>
            <p className="text-xs text-white/60 font-medium uppercase tracking-widest leading-none">Neeley</p>
            <p className="text-base font-black leading-tight">Internship Dashboard</p>
          </div>
        </div>
      </div>

      {/* Goal Banner */}
      <div className="flex-shrink-0">
        <GoalBanner />
      </div>

      {/* Overall progress */}
      <div className="px-5 py-3 flex-shrink-0">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs font-semibold text-white/70 uppercase tracking-wide">Overall Progress</span>
          <span className="text-xs font-bold text-white">{overall.percent}%</span>
        </div>
        <ProgressBar percent={overall.percent} color="#ffffff" height={4} />
        <p className="text-xs text-white/50 mt-1">{overall.completed} of {overall.total} milestones</p>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide px-3 pb-4 space-y-4">
        {/* Dashboard link */}
        <div>
          <NavLink
            to="/dashboard"
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                isActive ? 'bg-white/15 text-white' : 'text-white/70 hover:text-white hover:bg-white/10'
              }`
            }
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Dashboard
          </NavLink>
        </div>

        {/* Semesters */}
        <div>
          <p className="text-xs font-bold text-white/40 uppercase tracking-widest px-3 mb-1.5">Semesters</p>
          <div className="space-y-0.5">
            {SEMESTERS.map(s => {
              const prog = getSemester(s.id)
              return (
                <button
                  key={s.id}
                  onClick={() => { onSemesterClick?.(s.id); onClose?.() }}
                  className="w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-sm text-white/75 hover:text-white hover:bg-white/10 transition-colors group"
                >
                  <span className="font-medium">{s.shortLabel}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-14 hidden sm:block">
                      <ProgressBar percent={prog.percent} color="rgba(255,255,255,0.7)" height={3} />
                    </div>
                    <span className="text-xs text-white/40 group-hover:text-white/60 w-7 text-right">{prog.percent}%</span>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Category Filter */}
        <div>
          <p className="text-xs font-bold text-white/40 uppercase tracking-widest px-3 mb-1.5">Filter by Category</p>
          <div className="space-y-0.5">
            <button
              onClick={() => onCategoryChange?.(null)}
              className={`w-full flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                !activeCategory ? 'bg-white/15 text-white' : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <span>🗂️</span> All Categories
            </button>
            {ACTIVE_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => onCategoryChange?.(cat.id)}
                className={`w-full flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  activeCategory === cat.id ? 'bg-white/15 text-white' : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>{cat.icon}</span>
                <span className="truncate">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex-shrink-0 border-t border-white/10 p-3 space-y-0.5">
        <NavLink
          to="/profile"
          onClick={onClose}
          className={({ isActive }) =>
            `flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              isActive ? 'bg-white/15 text-white' : 'text-white/70 hover:text-white hover:bg-white/10'
            }`
          }
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          Profile & Settings
        </NavLink>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium text-white/50 hover:text-white hover:bg-white/10 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Sign Out
        </button>
      </div>
    </aside>
  )
}
