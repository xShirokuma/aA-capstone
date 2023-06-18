import { useHistory } from "react-router-dom";
import { PinTile, OpenModalButton } from "../../components"
import EditPinModal from "./edit_pin_modal"

const PinTiles = ({pins}) => {
  pins = Object.values(pins)

  return (
    <>
      {pins?.map((pin) => (
        <div>
          <PinTile pin={pin} />
          <OpenModalButton
            buttonText="Edit"
            modalComponent={<EditPinModal pin={pin} />}
          />
        </div>
      ))}
    </>
  )
}

export default PinTiles