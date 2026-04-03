import { useState } from 'react'
import Sidebar from './Sidebar.jsx'

export default function AppShell({ children, activeCategory, onCategoryChange, onSemesterClick }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Desktop sidebar */}
      <div className="hidden lg:flex flex-col w-64 xl:w-72 flex-shrink-0 h-full overflow-hidden">
        <Sidebar
          activeCategory={activeCategory}
          onCategoryChange={onCategoryChange}
          onSemesterClick={onSemesterClick}
        />
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-40 flex">
          <div className="absolute inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
          <div className="relative w-72 flex flex-col h-full shadow-2xl">
            <Sidebar
              activeCategory={activeCategory}
              onCategoryChange={onCategoryChange}
              onSemesterClick={onSemesterClick}
              onClose={() => setSidebarOpen(false)}
            />
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile top bar */}
        <div className="lg:hidden flex items-center gap-3 px-4 py-3 bg-tcu-purple shadow-md flex-shrink-0">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-white/15 flex items-center justify-center text-xs font-black text-white">N</div>
            <span className="text-white font-bold text-sm">Neeley UID</span>
          </div>
        </div>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
