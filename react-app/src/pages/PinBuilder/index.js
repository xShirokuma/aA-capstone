import React from "react"
import PinForm from "./pin_form"

const PinBuilder = () => {
  const pin = {
    title: "",
    description: "",
    link: "",
    image: "",
  }

  return (
    <div className="pin-builder">
      <PinForm pin={pin} formType="create" />
    </div>
  )
}

export default PinBuilder
