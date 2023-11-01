import React from 'react';
import "../../media.css"
import "../Contacts/Contacts.css";
import { Information } from './Information/Information';
import { Bio } from './Bio/Bio';
import DAVID from "../../assets/Contacts/david.png"
import { AnimationOnScroll } from 'react-animation-on-scroll';

export const Contacts = () => {
  return (
    <section id='contacts' className="contacts">
        <div className="container">
          <div className="contacts__wrapper1">
            <AnimationOnScroll animateIn='animate__bounceInLeft' delay={1} animateOnce={true}>
              <h2 className="information__title">
                  Let`s make it
              </h2>
            </AnimationOnScroll>
            <div className="contacts__wrapper">
                <Information/>
                <Bio/>
                <AnimationOnScroll animateIn='animate__bounceIn' delay={4} animateOnce={true}>
                  <div className="contacts__img">
                      <img src={DAVID} alt="david" />
                  </div>
                </AnimationOnScroll>
            </div>
          </div>
        </div>
    </section>
  )
}
