import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth.js'
import Button from '../ui/Button.jsx'
import Input from '../ui/Input.jsx'

export default function CreateAccountForm({ onSwitch }) {
  const { createAccount } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ username: '', password: '', confirm: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    if (form.password !== form.confirm) { setError('Passwords do not match.'); return }
    setLoading(true)
    const result = await createAccount(form.username, form.password)
    setLoading(false)
    if (!result.ok) { setError(result.error); return }
    navigate('/onboarding')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Username"
        type="text"
        placeholder="e.g. jsmith2026"
        autoComplete="username"
        value={form.username}
        onChange={e => setForm(f => ({ ...f, username: e.target.value }))}
        required
      />
      <Input
        label="Password"
        type="password"
        placeholder="At least 6 characters"
        autoComplete="new-password"
        value={form.password}
        onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
        required
      />
      <Input
        label="Confirm Password"
        type="password"
        placeholder="Re-enter password"
        autoComplete="new-password"
        value={form.confirm}
        onChange={e => setForm(f => ({ ...f, confirm: e.target.value }))}
        required
      />
      {error && <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg">{error}</p>}
      <Button type="submit" variant="primary" size="lg" className="w-full" disabled={loading}>
        {loading ? 'Creating account…' : 'Create Account'}
      </Button>
      <p className="text-center text-sm text-gray-500">
        Already have an account?{' '}
        <button type="button" onClick={onSwitch} className="text-tcu-purple font-semibold hover:underline">
          Sign in
        </button>
      </p>
    </form>
  )
}
