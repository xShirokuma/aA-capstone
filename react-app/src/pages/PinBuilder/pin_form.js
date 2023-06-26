import React, { useState, useEffect, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

import "./PinBuilder.css"
import { createPinThunk } from "../../store/pins"
// import { thunkNewProduct, thunkEditProduct } from "../../store/products"

const ALLOWED_EXTENSIONS = [".pdf", ".png", ".jpg", ".jpeg", ".gif"]

const PinForm = ({ pin, formType }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector((state) => state.session.user)

  const [title, setTitle] = useState(pin?.title)
  const [description, setDescription] = useState(pin?.description)
  const [link, setLink] = useState(pin?.link)
  const [image, setImage] = useState(pin?.image)
  const [preview, setPreview] = useState(null)
  const [attemptSubmitted, setAttemptSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  let buttonText
  if (formType) if (formType === "create") buttonText = "Save"

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

    console.log(image instanceof File)
    if (!(image instanceof File))
      errorHandler.image = "Please select a file to upload."
    else {
      const extensionIndex = image.name.indexOf(".")
      const fileExtension = image.name.substring(extensionIndex)
      console.log(fileExtension)
      if (!ALLOWED_EXTENSIONS.includes(fileExtension))
        errorHandler.image =
          "Image must be of the following type: .pdf, .png, .jpg, .jpeg, .gif"
    }

    if (attemptSubmitted) setErrors(errorHandler)
    if (Object.keys(errorHandler).length !== 0) {
      return false
    } else return true
  }, [attemptSubmitted, title, description, link, image])

  useEffect(() => {
    validateErrors()
  }, [validateErrors])

  //change preview image when image file is chosen
  useEffect(() => {
    let objectUrl

    if (image) {
      objectUrl = URL.createObjectURL(image)
      setPreview(objectUrl)
    } else {
      setPreview(null)
    }

    return () => URL.revokeObjectURL(objectUrl)
  }, [image])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setAttemptSubmitted(true)
    if (!validateErrors()) {
      return
    }

    pin = {
      ...pin,
      userId: user.id,
      title: title,
      description: description,
      link: link,
      image: image,
    }

    if (formType === "create") {
      const newPin = await dispatch(createPinThunk(pin))
      if (newPin) {
        history.push(`/pin/${newPin.id}`)
      }
    }
  }

  return (
    <div className="pin-builder-panel">
      <form onSubmit={handleSubmit} className="pin-form">
        <div className="file-upload-container">
          <div className="errors"> {errors.image}</div>
          <label>
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          </label>
          {image && <img className="image-preview" src={preview} />}
        </div>
        <div className="text-upload-container">
          <input
            className="title-create"
            placeholder="Add your title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="errors"> {errors.title} </div>
          <h4>{user.username}</h4>
          <textarea
            className="description-create"
            placeholder="Tell everyone what your Pin is about"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="errors"> {errors.description} </div>
          <input
            className="link-create"
            placeholder="Add a destination link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <div className="errors"> {errors.link} </div>
          <div className="save-button-wrapper">
            <button className="create-button" type="submit">
              {buttonText}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default PinForm
