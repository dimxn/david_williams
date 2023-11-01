import React from 'react'
import "../../../../media.css"
import "../Buttons/Buttons.css"

export const Buttons = ({title, active=""}) => {
  return (
    <button className={`services__button ${active}`}>{title}</button>
  )
}
