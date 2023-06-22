import { PinTile } from "../../components"

const PinTiles = ({ pins }) => {
  pins = Object.values(pins)

  return (
    <div className="feed-container">
      {pins?.map((pin) => (
        <PinTile pin={pin} key={pin.id} />
      ))}
    </div>
  )
}

export default PinTiles
