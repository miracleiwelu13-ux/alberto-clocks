import { useState } from 'react'
import { Link } from 'react-router-dom'
import './SignUp.css'

function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Create Account</h1>
        <p className="auth-subtitle">
          Join Alberto Privilege and start collecting rewards.
        </p>

        {submitted ? (
          <div className="auth-success">
            <i className="bi bi-check-circle"></i>
            <p>Welcome, <strong>{name}</strong>!</p>
            <p className="auth-note">(Demo only — no real account created.)</p>
          </div>
        ) : (
          <form className="auth-form" onSubmit={handleSubmit}>
            <label>
              Full Name
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
              />
            </label>

            <label>
              Email
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
            </label>

            <label>
              Password
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
              />
            </label>

            <button type="submit" className="auth-submit">
              Create Account
            </button>
          </form>
        )}

        {!submitted && (
          <p className="auth-switch">
            Already have an account? <Link to="/signin">Sign In</Link>
          </p>
        )}
      </div>
    </div>
  )
}

export default SignUp