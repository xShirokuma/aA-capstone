import { useState, useEffect, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import {
  createCommentThunk,
  getPinThunk,
  deleteCommentThunk,
} from "../../store/pins"
import Comment from "./comment"

import "./Pin.css"

const Pin = () => {
  const dispatch = useDispatch()
  const { pinId } = useParams()
  const state = useSelector((state) => state)
  const user = state.session.user
  const pin = state.pins[pinId]

  const [text, setText] = useState("")
  const [attemptSubmitted, setAttemptSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validateErrors = useCallback(() => {
    const errorHandler = {}
    if (text.length > 255) {
      errorHandler.text = "Comment must be 255 characters or less."
    }
    if (attemptSubmitted) setErrors(errorHandler)
    if (Object.keys(errorHandler).length !== 0) {
      return false
    } else return true
  }, [attemptSubmitted, text])

  useEffect(() => {
    validateErrors()
  }, [validateErrors])

  useEffect(() => {
    dispatch(getPinThunk(pinId))
  }, [dispatch, pinId])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setAttemptSubmitted(true)

    if (!validateErrors()) {
      return
    }

    const comment = {
      userId: user.id,
      pinId: pinId,
      text: text,
    }
    if (text) {
      await dispatch(createCommentThunk(comment)).then(setText(""))
    }
    console.log("test")
    setText("")
  }

  let numComments
  if (pin?.comments) numComments = pin.comments.length
  else numComments = 0

  return (
    <div className="pin-container">
      <div className="pin-half pin-image">
        <img src={pin?.image} alt={null} />
      </div>
      <div className="pin-half pin-text">
        <div className="about-container">
          <a className="link" href={`https://${pin?.link}`}>
            {pin?.link}
          </a>
          <h2 className="title">{pin?.title}</h2>
          <div className="description">{pin?.description}</div>
          <h3 className="poster">{pin?.user.username}</h3>
        </div>
        <h3>
          {numComments === 0 && "Comments"}
          {numComments === 1 && `${numComments} Comment`}
          {numComments > 1 && `${numComments} Comments`}
        </h3>
        <div className="comments-container">
          <div className="comments">
            {numComments === 0 && (
              <p>No comments yet! Add one to start the conversation.</p>
            )}
            {pin?.comments?.map((comment) => (
              <Comment comment={comment} />
            ))}
          </div>
        </div>
        <div className="new-comment-container">
          <form onSubmit={handleSubmit}>
            <textarea
              placeholder="Add a comment"
              value={text}
              onChange={(e) => setText(e.target.value)}></textarea>
            <button className="post-comment">Post!</button>
          </form>
          <div className="errors"> {errors.text}</div>
        </div>
      </div>
    </div>
  )
}

export default Pin
