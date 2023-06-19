import { Link } from "react-router-dom";

const PinTiles = ({pin}) => {

  return (
    <Link
      to={`pin/${pin.id}`} 
      className="pin-tile"
      key={pin.id}>
        <img src={pin.image}></img>
    </Link>
  )
}

export default PinTiles