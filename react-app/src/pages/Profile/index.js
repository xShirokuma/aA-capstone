import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserPinsThunk } from "../../store/pins";
import PinTiles from "./pin_tiles";

const Profile = () => {
  const dispatch = useDispatch()
  const { username } = useParams();
  const state = useSelector((state) => state)
  const pins = state.pins

  useEffect(() => {
    dispatch(getUserPinsThunk(username))
  }, [dispatch])

  return (
    <>
      <PinTiles pins={pins} />
    </>
  )
}

export default Profile