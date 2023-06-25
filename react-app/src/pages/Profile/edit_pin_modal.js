import { useState } from "react"
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
  const [errors, setErrors] = useState({})

  const updatePin = () => {
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
          <label>
            Description
            <textarea
              className="description-edit"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <label>
            Website
            <input
              className="link-edit"
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </label>
        </div>
        <div className="edit-pin-contents-right">
          <img src={`${pin.image}`}></img>
        </div>
      </div>
      <div className="modal-buttons">
        <OpenModalButton
          buttonText="Delete"
          modalComponent={<DeletePinModal id={pin.id} />}
        />
        <div>
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
