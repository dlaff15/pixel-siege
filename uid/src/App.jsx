import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext.jsx'
import { UserProvider } from './context/UserContext.jsx'
import { useUser } from './hooks/useUser.js'
import AuthPage from './pages/AuthPage.jsx'
import OnboardingPage from './pages/OnboardingPage.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'

// Route guard: must be logged in
function RequireAuth({ children }) {
  const { currentUser, loading } = useAuth()
  if (loading) return <LoadingScreen />
  if (!currentUser) return <Navigate to="/" replace />
  return children
}

// Route guard: must have completed onboarding
function RequireOnboarding({ children }) {
  const { profile } = useUser()
  if (profile === null) return <LoadingScreen /> // still loading
  if (!profile?.onboardingComplete) return <Navigate to="/onboarding" replace />
  return children
}

function LoadingScreen() {
  return (
    <div className="min-h-screen bg-tcu-purple flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center font-black text-white text-xl mx-auto mb-3">N</div>
        <p className="text-white/60 text-sm">Loading…</p>
      </div>
    </div>
  )
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route
        path="/onboarding"
        element={
          <RequireAuth>
            <OnboardingPage />
          </RequireAuth>
        }
      />
      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <RequireOnboarding>
              <DashboardPage />
            </RequireOnboarding>
          </RequireAuth>
        }
      />
      <Route
        path="/profile"
        element={
          <RequireAuth>
            <RequireOnboarding>
              <ProfilePage />
            </RequireOnboarding>
          </RequireAuth>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <UserProvider>
          <AppRoutes />
        </UserProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}
