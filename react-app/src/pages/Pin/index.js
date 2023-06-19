import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createCommentThunk, getPinThunk } from "../../store/pins";
import Comment from "./comment"

const Pin = () => {
  const dispatch = useDispatch()
  const { pinId } = useParams();
  const state = useSelector((state) => state)
  const user = state.session.user
  const pin = state.pins[pinId]

  const [text, setText] = useState('')
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getPinThunk(pinId))
  }, [dispatch, pinId])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const comment = {
      userId: user.id,
      pinId: pinId,
      text: text
    }
    if (text) {
      await dispatch(createCommentThunk(comment)).then(setText(''))
    }
    console.log('test');
    setText('')
  }

  return (
    <div>
      <img src={pin?.image} alt={null}></img>
      <div>
        <div>{pin?.link}</div>
        <div>{pin?.title}</div>
        <div>{pin?.description}</div>
        <div>{pin?.user.username}</div>
        <h2>Comments</h2>
        {pin?.comments?.map((comment) => (
          <Comment comment={comment}/>
        ))}
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Add a comment"
            value={text}
            onChange={(e) => setText(e.target.value)}>
          </textarea>
          <button
            className="post-comment">
            Post your comment!
          </button>
        </form>
      </div>
    </div>
  )
}

export default Pin