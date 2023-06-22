import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getUserPinsThunk } from "../../store/pins"
import PinTiles from "./pin_tiles"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min"

const Profile = () => {
  const dispatch = useDispatch()
  const { username } = useParams()
  const state = useSelector((state) => state)
  const pins = state.pins

  useEffect(() => {
    dispatch(getUserPinsThunk(username))
  }, [dispatch])

  return (
    <div>
      <div className="user-container">
        <h1>{username}</h1>
        <h4>@{username}</h4>
      </div>
      <nav className="profile-navbar">
        <NavLink to={`/${username}/_created`}>Created</NavLink>
        <NavLink to={`/${username}/_saved`}>Saved</NavLink>
      </nav>
      <PinTiles pins={pins} />
    </div>
  )
}

export default Profile
