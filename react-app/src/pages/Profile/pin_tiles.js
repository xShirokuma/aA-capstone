import { useHistory } from "react-router-dom"
import { PinTile, OpenModalButton } from "../../components"
import EditPinModal from "./edit_pin_modal"
import "./Profile.css"

const PinTiles = ({ pins }) => {
  pins = Object.values(pins)

  return (
    <div className="profile-created-container">
      {pins?.map((pin) => (
        <div className="created-pin">
          <PinTile pin={pin} />
          <OpenModalButton
            className="edit-pin-button"
            buttonText="Edit"
            modalComponent={<EditPinModal pin={pin} />}></OpenModalButton>
        </div>
      ))}
    </div>
  )
}

export default PinTiles
