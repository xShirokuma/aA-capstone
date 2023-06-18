import React from "react";
import PinForm from "./pin_form"

const PinBuilder = () => {

  const pin = {
    title: "",
    description: "",
    link: "",
    image: ""
  }

  return (
    <div>
      <PinForm pin={pin} formType="create"/>
    </div>
  )
}

export default PinBuilder