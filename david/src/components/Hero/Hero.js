import React from 'react'
import "../Hero/Hero.css"
import { HeroText } from './HeroText/HeroText'
import { HeroImages } from './HeroImages/HeroImages'
export const Hero = () => {
  return (
    <section id='hero' className="hero">
        <div className="container">
            <div className="hero__container">
                <HeroText/>
                <HeroImages/>
            </div>
        </div>
    </section>
  )
}
