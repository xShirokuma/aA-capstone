import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { savePin, unsavePin } from "../../store/session"

import "./SaveButton.css"

const SaveButton = ({ pin }) => {
  const state = useSelector((state) => state)
  const user = state.session.user
  const dispatch = useDispatch()

  let [isSaved, setIsSaved] = useState(false)
  let [text, setText] = useState("Save")

  const checkSave = () => {
    if (user.savedPins.length) {
      for (let savedPin of user.savedPins) {
        if (savedPin.id === pin?.id) {
          setIsSaved(true)
          setText("Unsave")
        }
      }
    }
  }

  useEffect(() => {
    checkSave()
  }, [checkSave])

  const handleSave = async () => {
    if (isSaved) {
      await dispatch(unsavePin(user.id, pin.id))
      setIsSaved(false)
      setText("Save")
    } else {
      await dispatch(savePin(user.id, pin.id))
      setIsSaved(true)
      setText("Unsave")
    }
  }

  return <button onClick={() => handleSave()}>{text}</button>
}

export default SaveButton
