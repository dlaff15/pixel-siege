import { createContext, useContext, useState, useEffect } from 'react'
import { hashPassword, verifyPassword } from '../utils/auth.js'
import {
  getAccounts, saveAccount, accountExists,
  saveSession, getSession, clearSession,
} from '../utils/storage.js'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Restore session on mount
  useEffect(() => {
    const saved = getSession()
    if (saved && accountExists(saved)) {
      setCurrentUser(saved)
    }
    setLoading(false)
  }, [])

  async function login(username, password) {
    const accounts = getAccounts()
    const account = accounts[username.toLowerCase()]
    if (!account) return { ok: false, error: 'No account found with that username.' }
    const valid = await verifyPassword(password, account.passwordHash)
    if (!valid) return { ok: false, error: 'Incorrect password.' }
    const user = username.toLowerCase()
    saveSession(user)
    setCurrentUser(user)
    return { ok: true }
  }

  async function createAccount(username, password) {
    const user = username.toLowerCase().trim()
    if (!user) return { ok: false, error: 'Username is required.' }
    if (user.length < 3) return { ok: false, error: 'Username must be at least 3 characters.' }
    if (password.length < 6) return { ok: false, error: 'Password must be at least 6 characters.' }
    if (accountExists(user)) return { ok: false, error: 'That username is already taken.' }
    const passwordHash = await hashPassword(password)
    saveAccount(user, { passwordHash, createdAt: new Date().toISOString() })
    saveSession(user)
    setCurrentUser(user)
    return { ok: true }
  }

  function logout() {
    clearSession()
    setCurrentUser(null)
  }

  return (
    <AuthContext.Provider value={{ currentUser, loading, login, createAccount, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
