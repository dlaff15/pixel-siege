// All localStorage access is centralized here.
// Keys are namespaced to avoid collisions with other apps.

const ACCOUNTS_KEY = 'uid_accounts'
const userKey = (username) => `uid_user_${username}`

// ── Accounts ──────────────────────────────────────────────────────────────

export function getAccounts() {
  try {
    return JSON.parse(localStorage.getItem(ACCOUNTS_KEY) ?? '{}')
  } catch {
    return {}
  }
}

export function saveAccount(username, data) {
  const accounts = getAccounts()
  accounts[username] = data
  localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts))
}

export function accountExists(username) {
  return username in getAccounts()
}

// ── User data ──────────────────────────────────────────────────────────────

export function getUserData(username) {
  try {
    const raw = localStorage.getItem(userKey(username))
    if (!raw) return null
    return JSON.parse(raw)
  } catch {
    return null
  }
}

export function saveUserData(username, data) {
  localStorage.setItem(userKey(username), JSON.stringify({
    ...data,
    lastUpdated: new Date().toISOString(),
  }))
}

export function getDefaultUserData() {
  return {
    profile: {
      name: '',
      classYear: 'freshman',
      onboardingComplete: false,
    },
    goal: {
      text: '',
      careerTrackId: 'general',
      isKnown: true,
      quizAnswers: null,
    },
    completions: {},
    lastUpdated: null,
  }
}

export function updateCompletions(username, milestoneId, completed) {
  const data = getUserData(username) ?? getDefaultUserData()
  data.completions[milestoneId] = completed
  saveUserData(username, data)
}

// ── Session ────────────────────────────────────────────────────────────────

const SESSION_KEY = 'uid_session'

export function saveSession(username) {
  localStorage.setItem(SESSION_KEY, username)
}

export function getSession() {
  return localStorage.getItem(SESSION_KEY)
}

export function clearSession() {
  localStorage.removeItem(SESSION_KEY)
}
