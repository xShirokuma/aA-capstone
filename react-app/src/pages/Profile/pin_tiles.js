import { useHistory } from "react-router-dom"
import { PinTile, OpenModalButton } from "../../components"
import EditPinModal from "./edit_pin_modal"
import "./Profile.css"

const PinTiles = ({ pins }) => {
  pins = Object.values(pins)

  return (
    <div className="feed-container">
      {pins?.map((pin) => (
        <div>
          <PinTile pin={pin} />
          <OpenModalButton
            buttonText="Edit"
            modalComponent={<EditPinModal pin={pin} />}
          />
        </div>
      ))}
    </div>
  )
}

export default PinTiles
