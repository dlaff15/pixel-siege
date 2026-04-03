import { useState, useRef, useCallback } from 'react'
import { SEMESTERS } from '../data/milestones/index.js'
import { ACTIVE_CATEGORIES } from '../data/categories.js'
import AppShell from '../components/layout/AppShell.jsx'
import WelcomeHeader from '../components/dashboard/WelcomeHeader.jsx'
import SemesterSection from '../components/dashboard/SemesterSection.jsx'

export default function DashboardPage() {
  const [activeCategory, setActiveCategory] = useState(null)
  const [scrollTarget, setScrollTarget] = useState(null)
  const semesterRefs = useRef({})

  const handleSemesterClick = useCallback((semesterId) => {
    setScrollTarget(semesterId)
    // Give SemesterSection time to open, then scroll
    setTimeout(() => {
      const el = document.getElementById(`semester-${semesterId}`)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 80)
  }, [])

  return (
    <AppShell
      activeCategory={activeCategory}
      onCategoryChange={setActiveCategory}
      onSemesterClick={handleSemesterClick}
    >
      <WelcomeHeader />

      {/* Category filter pill bar (mobile + desktop supplemental) */}
      {activeCategory && (
        <div className="bg-tcu-purple-pale border-b border-tcu-purple/10 px-4 sm:px-6 py-2.5 flex items-center gap-2">
          <span className="text-xs font-semibold text-tcu-purple">Filtering:</span>
          <span className="text-xs bg-tcu-purple text-white px-2.5 py-1 rounded-full font-semibold flex items-center gap-1.5">
            {ACTIVE_CATEGORIES.find(c => c.id === activeCategory)?.icon}{' '}
            {ACTIVE_CATEGORIES.find(c => c.id === activeCategory)?.label}
            <button onClick={() => setActiveCategory(null)} className="hover:opacity-70 ml-1" aria-label="Remove filter">×</button>
          </span>
        </div>
      )}

      {/* Timeline */}
      <div className="px-4 sm:px-6 py-6 space-y-4 max-w-4xl mx-auto w-full">
        {SEMESTERS.map((s, i) => (
          <SemesterSection
            key={s.id}
            semester={s}
            categoryFilter={activeCategory}
            defaultOpen={i === 0}
            scrollRef={scrollTarget === s.id ? scrollTarget : null}
          />
        ))}
      </div>
    </AppShell>
  )
}
