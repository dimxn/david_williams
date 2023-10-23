import React from 'react'
import "../HeroText/HeroText.css"
import LOCATION from "../../../assets/Hero/location.svg";

export const HeroText = () => {
  return (
    <div className="hero__text">
        <div className="hero__header">
            <h1 className="hero__title">PHOTOGRAPHER</h1>
            <div className="hero__location">
                <img src={LOCATION} alt="location" />
                <p className="location__text">London</p>
            </div>
        </div>
        <div className="hero__desc">
            <div className="hero__desc-title">The clear vision</div>
            <p className="hero__desc-info">I have been working as a photographer for more than 5 years, constantly updating my equipment and improving my abilities.</p>
        </div>
        <div className="contact">
            <a href="/" className="hero__btn">Contact me</a>
        </div>
    </div>
  )
}
