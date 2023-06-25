import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useModal } from "../../context/Modal"
import { signUp } from "../../store/session"
import "./SignupForm.css"

function SignupFormModal() {
  const dispatch = useDispatch()
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [errors, setErrors] = useState([])
  const { closeModal } = useModal()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password === confirmPassword) {
      const data = await dispatch(signUp(username, email, password))
      if (data) {
        setErrors(data)
      } else {
        closeModal()
      }
    } else {
      setErrors([
        "Confirm Password field must be the same as the Password field",
      ])
    }
  }

  return (
    <div className="signup-modal">
      <h1>Welcome to Pinterest</h1>
      <h4>Find new ideas to try</h4>
      <form onSubmit={handleSubmit}>
        <ul className="errors">
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label>
          Confirm Password
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default SignupFormModal
