import React from 'react'
import "../HeroImages/HeroImages.css"
import IMAGE1 from "../../../assets/Hero/image1.png"
import IMAGE2 from "../../../assets/Hero/image2.png"

export const HeroImages = () => {
  return (
    <div className="hero__images">
        <div className="images">
            <img className="image1" src={IMAGE1} alt="image1" />
            <img className="image2" src={IMAGE2} alt="image2" />
        </div>
        <div className="ellipses">
            <div className="ellipse">
                <div className="ellipse__child"></div>
            </div>
        </div>
    </div>
  )
}
