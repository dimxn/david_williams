import React from 'react'
import "../Services/Services.css"
import { Fields } from './Fields/Fields'

export const Services = () => {
  return (
    <section id='services' className="services">
        <div className="container">
            <h3 className="service__title">Fields I work for</h3>
            <Fields/>
        </div>
    </section>
  )
}
