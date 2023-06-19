import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import './PinBuilder.css'
import { createPinThunk } from "../../store/pins";
// import { thunkNewProduct, thunkEditProduct } from "../../store/products"

const PinForm = ({ pin, formType }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.session.user)

  const [title, setTitle] = useState(pin?.title)
  const [description, setDescription] = useState(pin?.description)
  const [link, setLink] = useState(pin?.link)
  const [image, setImage] = useState(pin?.image)

  const [errors, setErrors] = useState({})

  let formTitle
  let buttonText
  if (formType)
    if (formType === 'create') {
      formTitle = "Create a Pin"
      buttonText = "Create your Pin!"
    }

  useEffect(() => {
    
  }, [title, description, link, image])

  const handleSubmit = async(e) => {
    e.preventDefault()
    pin = {
      ...pin,
      userId: user.id,
      title: title,
      description: description,
      link: link,
      image: image
    }

    if (formType === 'create') {
      const newPin = await dispatch(createPinThunk(pin))
      if (newPin) {
        history.push(`/pin/${newPin.id}`)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="pinForm">
      <h1>{formTitle}</h1>
      <label>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
      />
      </label>
      <textarea 
        className="title"
        placeholder="Add your title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}/>
      <h4>{user.username}</h4>
      <textarea 
        className="description"
        placeholder="Tell everyone what your Pin is about"
        value={description}
        onChange={(e) => setDescription(e.target.value)}/>
      <textarea 
        className="link"
        placeholder="Add a destination link"
        value={link}
        onChange={(e) => setLink(e.target.value)}/>
      <button 
        className="create-button" 
        type="submit" 
        disabled={!!Object.values(errors).length}>
        {buttonText}
      </button>
    </form>
  )
}

export default PinForm