import { useHistory } from "react-router-dom"
import { PinTile, OpenModalButton } from "../../components"
import "./Profile.css"

const SaveTiles = ({ pins }) => {
  pins = Object.values(pins)

  return (
    <div className="profile-created-container">
      {pins?.map((pin) => (
        <div className="created-pin">
          <PinTile pin={pin} />
        </div>
      ))}
    </div>
  )
}

export default SaveTiles
