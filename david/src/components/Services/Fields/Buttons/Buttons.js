import React from 'react'
import "../Buttons/Buttons.css"
export const Buttons = ({title, active=""}) => {
  return (
    <button className={`services__button ${active}`}>{title}</button>
  )
}
