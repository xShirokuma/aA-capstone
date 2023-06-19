import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { deletePinThunk } from "../../store/pins";

const DeletePinModal = ({ id }) => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const deletePin = (id) => {
    return dispatch(deletePinThunk(id)).then(closeModal);
  };

  return (
    <div className="delete-pin-modal">
      <h2>Confirm Delete</h2>
      <h3>Are you sure?</h3>
      <h4>Once you delete a Pin, you can't undo it!</h4>
      <button className="cancel-delete-pin" onClick={() => closeModal()}>
        Cancel
      </button>
      <button className="delete-pin" onClick={() => deletePin(id)}>
        Delete
      </button>
    </div>
  );
};

export default DeletePinModal;
