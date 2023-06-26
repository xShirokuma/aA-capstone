import { useCallback, useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateCommentThunk, deleteCommentThunk } from "../../store/pins"

const Comment = ({ comment }) => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)
  const user = state.session.user

  const userId = user.id
  const commentOwnerId = comment.user.id
  const userComment = userId == commentOwnerId ? true : false

  const [editable, setEditable] = useState(false)
  const [text, setText] = useState(comment?.text)
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

  const handleDelete = async () => {
    await dispatch(deleteCommentThunk(comment))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setAttemptSubmitted(true)

    if (!validateErrors()) {
      return
    }

    const edittedComment = {
      ...comment,
      text: text,
    }

    await dispatch(updateCommentThunk(edittedComment))
    setEditable(false)
  }

  return (
    <>
      {userComment && (
        <>
          {!editable && (
            <div>
              <div className="comment">
                <h4>{comment?.user.username}</h4>
                <p>{comment?.text}</p>
              </div>
              <button
                className="edit-comment"
                type="submit"
                onClick={() => setEditable(true)}>
                Edit
              </button>
              <button
                className="delete-comment"
                onClick={() => handleDelete(comment)}>
                Delete
              </button>
            </div>
          )}
          {editable && (
            <form className="edit-comment-form" onSubmit={handleSubmit}>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}></textarea>
              <div className="errors"> {errors.text}</div>
              <div className="edit-comment-form-buttons">
                <button
                  className="cancel-edit"
                  value={editable}
                  onClick={() => setEditable(false)}>
                  Cancel
                </button>
                <button className="save-edit" type="submit">
                  Save
                </button>
              </div>
            </form>
          )}
        </>
      )}
      {!userComment && (
        <div className="comment">
          <h4>{comment?.user.username}</h4>
          <p>{comment?.text}</p>
        </div>
      )}
    </>
  )
}

export default Comment
