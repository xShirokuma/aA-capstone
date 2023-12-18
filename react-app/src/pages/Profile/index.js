import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useParams, useLocation } from "react-router-dom"
import { getUserPinsThunk } from "../../store/pins"
import PinTiles from "./pin_tiles"
import SaveTiles from "./save_tiles"
import { OpenModalButton } from "../../components"
import CreateBoardModal from "./create_board_modal"

const Profile = () => {
  const dispatch = useDispatch()
  const { username } = useParams()
  const location = useLocation()
  const pathname = location.pathname
  const state = useSelector((state) => state)
  const user = state.session.user
  const pins = state.pins
  const savedPins = Object.assign({}, user?.savedPins)

  console.log(pathname)

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
        <NavLink class="active" to={`/${username}/_saved`}>
          Saved
        </NavLink>
      </nav>
      {/* <OpenModalButton
        className="create-board-button"
        buttonText="Create Board"
        modalComponent={<CreateBoardModal user={username} />}
      /> */}
      {pathname.includes("_created") && (
        <>
          <PinTiles pins={pins} />
        </>
      )}
      {(pathname === `/${username}` || pathname.includes("_saved")) && (
        <>{<SaveTiles pins={savedPins} />}</>
      )}
    </div>
  )
}

export default Profile
