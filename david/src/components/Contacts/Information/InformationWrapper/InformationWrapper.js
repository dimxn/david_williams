import React from 'react'
import "../InformationWrapper/InformationWrapper.css"

export const InformationWrapper = ({title="", type="", text="", opt}) => {
  return (
    <div className="information__wrapper">
        <p className="information__text">{title}</p>
        <div className="links">
            <a href={type}>{text}</a>
            {opt}
        </div>
    </div>
  )
}
