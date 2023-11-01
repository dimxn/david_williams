import React from 'react'
import "../../../../media.css"
import "../Workflow/Workflow.css"

export const Workflow = ({number, title, desc}) => {
  return (
    <div className="stage">
        <div className="stage__number">
            {number}
        </div>
        <div className="stage__info">
            <h5 className="stage__title">{title}</h5>
            <p className="stage__desc">{desc}</p>
        </div>
    </div>
  )
}
