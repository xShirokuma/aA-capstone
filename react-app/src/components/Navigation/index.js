import { useState, useRef, useEffect } from "react"
import { Link, NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import ProfileButton from "./ProfileButton"
import OpenModalButton from "../OpenModalButton"
import SignupFormModal from "../SignupFormModal"
import LoginFormModal from "../LoginFormModal"
import skinner_box from "../../assets/skinner_box.png"
import "./Navigation.css"

function Navigation({ isLoaded }) {
  const user = useSelector((state) => state.session.user)

  const [showMenu, setShowMenu] = useState(false)
  const ulRef = useRef()

  useEffect(() => {
    if (!showMenu) return

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false)
      }
    }

    document.addEventListener("click", closeMenu)

    return () => document.removeEventListener("click", closeMenu)
  }, [showMenu])

  const closeMenu = () => setShowMenu(false)

  const handleSearch = () => {
    window.alert("Search feature coming soon!")
  }

  // className={({ isActive, isPending }) =>
  // isPending ? "pending" : isActive ? "active" : ""}

  // className={({ isActive }) => (isActive ? "active logo" : "logo")}

  return (
    <nav className="nav-bar">
      <div className="nav-bar-left">
        {user && (
          <>
            <Link exact to="/">
              <img className="logo-img" alt="logo" src={skinner_box} />
            </Link>
            <NavLink className="home nav-button" exact to="/">
              Home
            </NavLink>
            <NavLink className="nav-button" to="/pin-builder">
              Create
            </NavLink>
          </>
        )}
        {!user && (
          <Link className="logo" exact to="/">
            <img className="logo-img" alt="logo" src={skinner_box} />
            Pinstant Gratification
          </Link>
        )}
      </div>
      {user && (
        <form onSubmit={handleSearch}>
          <input className="search-bar" type="search" placeholder="Search" />
        </form>
      )}
      <div className="nav-bar-right">
        {user && (
          <>
            <NavLink className="nav-button" to={`/${user.username}`}>
              Profile
            </NavLink>
            <ProfileButton className="profile-dropdown-button" user={user} />
          </>
        )}
        {!user && (
          <>
            <OpenModalButton
              className="login-button"
              buttonText="Log In"
              onItemClick={closeMenu}
              modalComponent={<LoginFormModal />}
            />
            <OpenModalButton
              className="signup-button"
              buttonText="Sign Up"
              onItemClick={closeMenu}
              modalComponent={<SignupFormModal />}
            />
          </>
        )}
      </div>
    </nav>
  )
}

export default Navigation
