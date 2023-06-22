import React, { useState } from "react"
import { login } from "../../store/session"
import { useDispatch } from "react-redux"
import { useModal } from "../../context/Modal"
import "./LoginForm.css"

function LoginFormModal() {
  const dispatch = useDispatch()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState([])
  const { closeModal } = useModal()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = await dispatch(login(email, password))
    if (data) {
      setErrors(data)
    } else {
      closeModal()
    }
  }

  return (
    <div className="login-modal">
      <h1>Welcome to Pinterest</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label>
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <button type="submit">Log In</button>
      </form>
      <h2
        id="demo-user-button"
        onClick={() => {
          dispatch(login("demo@aa.io", "password"))
            .then(closeModal)
            .catch(async (res) => {
              const data = await res.json()
              if (data && data.errors) {
                setErrors(data.errors)
              }
            })
        }}>
        Demo User
      </h2>
    </div>
  )
}

export default LoginFormModal
