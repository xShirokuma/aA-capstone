import { PinTile } from "../../components"

const PinTiles = ({pins}) => {

  pins = Object.values(pins)

  return (
    <>
      {pins?.map((pin) => (
        <PinTile pin={pin} key={pin.id}/>
      ))}
    </>
  )
}

export default PinTiles