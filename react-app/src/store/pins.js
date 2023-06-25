const GET_PINS = "pins/getPins"
const GET_PIN = "pins/getPin"
const DELETE_PIN = "pins/deletePin"
const POST_COMMENT = "pins/postComment"
const PUT_COMMENT = "pins/putComment"
const DELETE_COMMENT = "pins/deleteComment"

//action creators
const getPins = (pins) => ({
  type: GET_PINS,
  pins,
})

const getPin = (pin) => ({
  type: GET_PIN,
  pin,
})

const deletePin = (pinId) => ({
  type: DELETE_PIN,
  pinId,
})

const postComment = (comment) => ({
  type: POST_COMMENT,
  comment,
})

const putComment = (comment) => ({
  type: PUT_COMMENT,
  comment,
})

const deleteComment = (comment) => ({
  type: DELETE_COMMENT,
  comment,
})

//thunk dispatchers
export const getPinsThunk = () => async (dispatch) => {
  const res = await fetch("/api/pins/")

  if (res.ok) {
    const { pins } = await res.json()
    dispatch(getPins(pins))
  }
  return res.errors
}

export const getUserPinsThunk = (username) => async (dispatch) => {
  const res = await fetch(`/api/pins/${username}`)

  if (res.ok) {
    const { pins } = await res.json()
    dispatch(getPins(pins))
  }
  return res.errors
}

export const getPinThunk = (pinId) => async (dispatch) => {
  const res = await fetch(`/api/pins/${pinId}`)

  if (res.ok) {
    const { pin } = await res.json()
    dispatch(getPin(pin))
  }
  return res.errors
}

export const createPinThunk = (pin) => async (dispatch) => {
  const { title, description, link, image } = pin

  const formData = new FormData()
  formData.append("title", title)
  formData.append("description", description)
  formData.append("link", link)
  formData.append("image", image)

  const options = {
    method: "POST",
    body: formData,
  }

  const res = await fetch("/api/pins/", options)

  if (res.ok) {
    const { pin } = await res.json()
    return pin
  }
}

export const updatePinThunk = (pin) => async (dispatch) => {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pin),
  }

  const res = await fetch(`/api/pins/${pin.id}`, options)

  if (res.ok) {
    dispatch(getPin(pin))
  }
}

export const deletePinThunk = (pinId) => async (dispatch) => {
  const options = {
    method: "DELETE",
  }

  const res = await fetch(`/api/pins/${pinId}`, options)

  if (res.ok) {
    dispatch(deletePin(pinId))
  }
}

export const createCommentThunk = (newComment) => async (dispatch) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newComment),
  }

  const res = await fetch("/api/comments/", options)

  if (res.ok) {
    const { comment } = await res.json()
    dispatch(postComment(comment))
  }
}

export const updateCommentThunk = (comment) => async (dispatch) => {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comment),
  }

  const res = await fetch(`/api/comments/${comment.id}`, options)

  if (res.ok) {
    const { comment } = await res.json()
    dispatch(putComment(comment))
  }
}

export const deleteCommentThunk = (comment) => async (dispatch) => {
  const options = {
    method: "DELETE",
  }

  const res = await fetch(`/api/comments/${comment.id}`, options)

  if (res.ok) {
    dispatch(deleteComment(comment))
  }
}

const initialState = {}

const pinsReducer = (state = initialState, action) => {
  let newState = {}
  let pinId
  let index

  switch (action.type) {
    case GET_PINS:
      action.pins.forEach((pin) => {
        newState[pin.id] = pin
      })
      return newState
    case GET_PIN:
      newState = { ...state }
      newState[action.pin.id] = { ...action.pin }
      return newState
    case DELETE_PIN:
      pinId = action.pinId
      newState = { ...state }
      newState[pinId] = { ...state[pinId] }
      delete newState[action.pinId]
      return newState
    case POST_COMMENT:
      pinId = action.comment.pinId
      newState = { ...state }
      newState[pinId] = { ...state[pinId] }
      newState[pinId].comments = [...state[pinId].comments, action.comment]
      return newState
    case PUT_COMMENT:
      pinId = action.comment.pinId
      newState = { ...state }
      newState[pinId].comments = [...state[pinId].comments]
      index = newState[pinId].comments.findIndex(
        (comment) => comment.id === action.comment.id
      )
      console.log(index)
      newState[pinId].comments[index] = action.comment
      return newState
    case DELETE_COMMENT:
      pinId = action.comment.pinId
      newState = { ...state }
      newState[pinId] = { ...state[pinId] }
      newState[pinId].comments = [...state[pinId].comments]
      index = newState[pinId].comments.findIndex(
        (comment) => comment.id === action.comment.id
      )
      newState[pinId].comments.splice(index, 1)
      return newState
    default:
      return state
  }
}

export default pinsReducer
