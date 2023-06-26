import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useModal } from "../../context/Modal"
import { signUp } from "../../store/session"
import skinner_box from "../../assets/skinner_box.png"
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
      <img className="logo-img-signup" alt="logo" src={skinner_box} />
      <h1>Pinstant Gratification</h1>
      <h4>Find new ways to waste time</h4>
      <form className="signup-form" onSubmit={handleSubmit}>
        <ul className="errors">
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label>
          Email
          <input
            className="signup-email-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Username
          <input
            className="signup-username-input"
            type="text"
            placeholder="Choose a username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            className="signup-password-input"
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label>
          Confirm Password
          <input
            className="signup-password-input"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <button className="signup-submit-button" type="submit">
          Continue
        </button>
      </form>
    </div>
  )
}

export default SignupFormModal
