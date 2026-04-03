// SHA-256 password hashing via the browser's native SubtleCrypto API.
// No external crypto library needed.

export async function hashPassword(password) {
  const encoder = new TextEncoder()
  const data = encoder.encode(password)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
}

export async function verifyPassword(password, storedHash) {
  const hash = await hashPassword(password)
  return hash === storedHash
}
