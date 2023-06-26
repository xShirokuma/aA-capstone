import { PinTile } from "../../components"

const PinTiles = ({ pins }) => {
  pins = Object.values(pins)

  return (
    <div className="feed-container">
      {pins?.map((pin) => (
        <div className="feed-pin">
          <PinTile pin={pin} key={pin.id} />
        </div>
      ))}
    </div>
  )
}

export default PinTiles
