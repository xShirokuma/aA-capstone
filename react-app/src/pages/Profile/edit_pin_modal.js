import { useState, useEffect, useCallback } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

import { useModal } from "../../context/Modal"
import { OpenModalButton } from "../../components"
import { updatePinThunk } from "../../store/pins"
import DeletePinModal from "./delete_pin_modal"

const UpdatePinModal = ({ pin }) => {
  const dispatch = useDispatch()
  const history = useHistory
  const { closeModal } = useModal()

  const [title, setTitle] = useState(pin.title)
  const [description, setDescription] = useState(pin.description)
  const [link, setLink] = useState(pin.link)
  const [attemptSubmitted, setAttemptSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validateErrors = useCallback(() => {
    const errorHandler = {}
    if (title.length > 255) {
      errorHandler.title = "Title must be less than 255 characters."
    }
    if (description.length > 255) {
      errorHandler.description = "Description must be less than 255 characters."
    }
    if (link.length > 255) {
      errorHandler.link = "Link must be less than 255 characters."
    }
    if (link.indexOf(".") === -1 && link.length > 0)
      errorHandler.link = "Link must be a valid url."

    if (attemptSubmitted) setErrors(errorHandler)
    if (Object.keys(errorHandler).length !== 0) {
      return false
    } else return true
  }, [attemptSubmitted, title, description, link])

  useEffect(() => {
    validateErrors()
  }, [validateErrors])

  const updatePin = () => {
    setAttemptSubmitted(true)

    if (!validateErrors()) {
      return
    }

    pin = {
      ...pin,
      title,
      description,
      link,
    }
    dispatch(updatePinThunk(pin)).then(closeModal)
  }

  return (
    <div className="edit-pin-modal">
      <h2>Edit This Pin</h2>
      <div className="edit-pin-contents">
        <div className="edit-pin-contents-left">
          <label>
            Title
            <input
              className="title-edit"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <div className="errors"> {errors.title}</div>
          <label>
            Description
            <textarea
              className="description-edit"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <div className="errors"> {errors.description}</div>
          <label>
            Website
            <input
              className="link-edit"
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </label>
          <div className="errors"> {errors.link}</div>
        </div>
        <div className="edit-pin-contents-right">
          <img src={`${pin.image}`}></img>
        </div>
      </div>
      <div className="modal-buttons">
        <OpenModalButton
          className="delete-pin-button"
          buttonText="Delete"
          modalComponent={<DeletePinModal id={pin.id} />}
        />
        <div className="edit-pin-modal-buttons">
          <button className="cancel-edit-pin" onClick={() => closeModal()}>
            Cancel
          </button>
          <button className="save-edit-pin" onClick={() => updatePin(pin)}>
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default UpdatePinModal
