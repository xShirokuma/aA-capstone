import { useDispatch } from "react-redux"
import { useModal } from "../../context/Modal"
import { useState } from "react"

const CreateBoardModal = ({ user }) => {
  const dispatch = useDispatch()
  const { closeModal } = useModal()
  const [name, setName] = useState("")

  const createBoard = () => {
    // return dispatch(createBoardThunk(name, user)).then(closeModal)
    return
  }

  return (
    <div className="create-board-modal">
      <h3>Create board</h3>
      <label>
        Name
        <input
          className="create-board-input"
          type="text"
          placeholder='Like "Places to Go" or "Recipes to Make"'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <div className="create-board-modal-buttons">
        <button className="create-board" onClick={() => createBoard()}>
          Create
        </button>
      </div>
    </div>
  )
}

export default CreateBoardModal
