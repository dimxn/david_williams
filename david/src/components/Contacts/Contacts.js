import React from 'react';
import "../Contacts/Contacts.css";
import { Information } from './Information/Information';
import { Bio } from './Bio/Bio';
import DAVID from "../../assets/Contacts/david.png"
import { AnimationOnScroll } from 'react-animation-on-scroll';

export const Contacts = () => {
  return (
    <section id='contacts' className="contacts">
        <div className="container">
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
    </section>
  )
}
