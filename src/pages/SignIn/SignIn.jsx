import { useState } from 'react'
import { Link } from 'react-router-dom'
import './SignIn.css'

function SignIn() {
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
        <h1 className="auth-title">Sign In</h1>
        <p className="auth-subtitle">
          Welcome back to Alberto Watch Company.
        </p>

        {submitted ? (
          <div className="auth-success">
            <i className="bi bi-check-circle"></i>
            <p>You're signed in as <strong>{email}</strong>.</p>
          </div>
        ) : (
          <form className="auth-form" onSubmit={handleSubmit}>
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
              Sign In
            </button>
          </form>
        )}

        {!submitted && (
          <p className="auth-switch">
            New to Alberto? <Link to="/signup">Create an account</Link>
          </p>
        )}
      </div>
    </div>
  )
}

export default SignIn