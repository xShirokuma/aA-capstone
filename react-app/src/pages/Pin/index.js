import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPinThunk } from "../../store/pins";
import Comment from "./comment"

const Pin = () => {
  const dispatch = useDispatch()
  const { pinId } = useParams();
  const state = useSelector((state) => state)
  const pin = state.pins[pinId]

  useEffect(() => {
    dispatch(getPinThunk(pinId))
  }, [dispatch, pinId])

  return (
    <div>
      <img src={pin?.image} alt={null}></img>
      <div>
        <div>{pin?.link}</div>
        <div>{pin?.title}</div>
        <div>{pin?.description}</div>
        <div>{pin?.user.username}</div>
        {pin?.comments?.map((comment) => (
          <Comment comment={comment}/>
        ))}
      </div>
    </div>
  )
}

export default Pin