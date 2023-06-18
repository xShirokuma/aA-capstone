const GET_PINS = "pins/getPins"
const GET_PIN = "pins/getPin"
const DELETE_PIN = "pins/deletePin"

//action creators
const getPins = (pins) => ({
  type: GET_PINS,
  pins
})

const getPin = (pin) => ({
  type: GET_PIN,
  pin
})

const deletePin = (pinId) => ({
  type: DELETE_PIN,
  pinId
})

//thunk dispatchers
export const getPinsThunk = () => async (dispatch) => {
  const res = await fetch("/api/pins/")

  if (res.ok) {
    const {pins} = await res.json()
    dispatch(getPins(pins))
  }
  return res.errors
}

export const getUserPinsThunk = (username) => async (dispatch) => {
  const res = await fetch(`/api/pins/${username}`)

  if (res.ok) {
    const {pins} = await res.json()
    dispatch(getPins(pins))
  }
  return res.errors
}

export const getPinThunk = (pinId) => async (dispatch) => {
  const res = await fetch(`/api/pins/${pinId}`)

  if (res.ok) {
    const {pin} = await res.json()
    dispatch(getPin(pin))
  }
  return res.errors
}

export const createPinThunk = (pin) => async (dispatch) => {
  const {title, description, link, image} = pin

  const formData = new FormData()
  formData.append("title", title)
  formData.append("description", description)
  formData.append("link", link)
  formData.append("image", image)

  const options = {
    method: "POST",
    body: formData
  }

  const res = await fetch('/api/pins/', options)

  if (res.ok) {
    const {pin} = await res.json();
    return pin
  }
}

export const updatePinThunk = (pin) => async (dispatch) => {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(pin)
  }

  console.log(JSON.stringify(pin));

  const res = await fetch(`/api/pins/${pin.id}`, options)

  if (res.ok) {
    dispatch(getPin(pin))
  }
}

export const deletePinThunk = (pinId) => async (dispatch) => {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const res = await fetch(`/api/pins/${pinId}`, options);

  if (res.ok) {
    dispatch(deletePin(pinId));
  }
};

const initialState = {}

const pinsReducer = (state=initialState, action) => {
  let newState = {}
  switch (action.type) {
    case GET_PINS:
      action.pins.forEach(pin => {
        newState[pin.id] = pin
      })
      return newState
    case GET_PIN:
      newState = { ...state }
      newState[action.pin.id] = action.pin
      return newState
    case DELETE_PIN:
      newState = { ...state }
      delete newState[action.pinId]
      return newState
    default: 
      return state
  }
}

export default pinsReducer