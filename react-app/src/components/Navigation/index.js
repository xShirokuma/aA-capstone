import React from "react"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import ProfileButton from "./ProfileButton"
import "./Navigation.css"

function Navigation({ isLoaded }) {
  const user = useSelector((state) => state.session.user)

  return (
    <nav className="nav-bar">
      <NavLink exact to="/">
        Home
      </NavLink>
      {user && <NavLink to="/pin-builder">Create</NavLink>}
      <form>
        <input className="search-bar" type="search" placeholder="Search" />
      </form>
      {user && <NavLink to={`/${user.username}`}>Profile</NavLink>}
      {isLoaded && <ProfileButton user={user} />}
    </nav>
  )
}

export default Navigation
