import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom"
import PinTiles from "./pin_tiles"
import { getPinsThunk } from "../../store/pins"

const Home = () => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)
  const user = state.session.user
  const pins = state.pins

  useEffect(() => {
    dispatch(getPinsThunk())
  }, [dispatch]);

  return (
    <>
      <PinTiles pins={pins} />
    </>
  )
}

export default Home