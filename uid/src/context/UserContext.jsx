import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { getUserData, saveUserData, getDefaultUserData, updateCompletions } from '../utils/storage.js'
import { parseGoalToTrack } from '../utils/goalParser.js'
import { useAuth } from './AuthContext.jsx'

const UserContext = createContext(null)

export function UserProvider({ children }) {
  const { currentUser } = useAuth()
  const [userData, setUserData] = useState(null)

  // Load user data whenever the logged-in user changes
  useEffect(() => {
    if (!currentUser) {
      setUserData(null)
      return
    }
    const data = getUserData(currentUser) ?? getDefaultUserData()
    setUserData(data)
  }, [currentUser])

  const save = useCallback((updated) => {
    if (!currentUser) return
    saveUserData(currentUser, updated)
    setUserData({ ...updated })
  }, [currentUser])

  function completeOnboarding(profile, goal) {
    const trackId = goal.isKnown
      ? parseGoalToTrack(goal.text)
      : goal.careerTrackId  // already resolved by quiz
    const updated = {
      ...(userData ?? getDefaultUserData()),
      profile: { ...profile, onboardingComplete: true },
      goal: { ...goal, careerTrackId: trackId },
    }
    save(updated)
  }

  function updateGoal(goalText, isKnown = true, quizAnswers = null, resolvedTrackId = null) {
    const trackId = resolvedTrackId ?? parseGoalToTrack(goalText)
    const updated = {
      ...userData,
      goal: { text: goalText, careerTrackId: trackId, isKnown, quizAnswers },
    }
    save(updated)
  }

  function updateProfile(profileFields) {
    const updated = {
      ...userData,
      profile: { ...userData.profile, ...profileFields },
    }
    save(updated)
  }

  function toggleMilestone(milestoneId) {
    if (!currentUser || !userData) return
    const current = !!userData.completions[milestoneId]
    const updated = {
      ...userData,
      completions: { ...userData.completions, [milestoneId]: !current },
    }
    setUserData(updated)
    updateCompletions(currentUser, milestoneId, !current)
  }

  function resetOnboarding() {
    const updated = {
      ...userData,
      profile: { ...userData.profile, onboardingComplete: false },
    }
    save(updated)
  }

  return (
    <UserContext.Provider value={{
      userData,
      profile: userData?.profile ?? null,
      goal: userData?.goal ?? null,
      completions: userData?.completions ?? {},
      completeOnboarding,
      updateGoal,
      updateProfile,
      toggleMilestone,
      resetOnboarding,
    }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  return useContext(UserContext)
}
