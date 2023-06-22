import { useState } from "react"
import { useDispatch } from "react-redux"
import { updateCommentThunk, deleteCommentThunk } from "../../store/pins"

const Comment = ({ comment }) => {
  const dispatch = useDispatch()

  const [editable, setEditable] = useState(false)
  const [text, setText] = useState(comment?.text)

  const handleDelete = async () => {
    await dispatch(deleteCommentThunk(comment))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const edittedComment = {
      ...comment,
      text: text,
    }

    await dispatch(updateCommentThunk(edittedComment))
    setEditable(false)
  }

  return (
    <>
      {!editable && (
        <div>
          <p>{comment?.text}</p>
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
        <form onSubmit={handleSubmit}>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}></textarea>
          <button
            className="cancel-edit"
            value={editable}
            onClick={() => setEditable(false)}>
            Cancel
          </button>
          <button className="save-edit" type="submit">
            Save
          </button>
        </form>
      )}
    </>
  )
}

export default Comment
