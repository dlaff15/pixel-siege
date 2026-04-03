import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth.js'
import { getUserData } from '../../utils/storage.js'
import Button from '../ui/Button.jsx'
import Input from '../ui/Input.jsx'

export default function LoginForm({ onSwitch }) {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ username: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    const result = await login(form.username, form.password)
    setLoading(false)
    if (!result.ok) { setError(result.error); return }
    const data = getUserData(form.username.toLowerCase())
    if (!data?.profile?.onboardingComplete) {
      navigate('/onboarding')
    } else {
      navigate('/dashboard')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Username"
        type="text"
        placeholder="your.username"
        autoComplete="username"
        value={form.username}
        onChange={e => setForm(f => ({ ...f, username: e.target.value }))}
        required
      />
      <Input
        label="Password"
        type="password"
        placeholder="••••••••"
        autoComplete="current-password"
        value={form.password}
        onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
        required
      />
      {error && <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg">{error}</p>}
      <Button type="submit" variant="primary" size="lg" className="w-full" disabled={loading}>
        {loading ? 'Signing in…' : 'Sign In'}
      </Button>
      <p className="text-center text-sm text-gray-500">
        Don't have an account?{' '}
        <button type="button" onClick={onSwitch} className="text-tcu-purple font-semibold hover:underline">
          Create one
        </button>
      </p>
    </form>
  )
}
