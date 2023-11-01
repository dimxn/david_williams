import React from 'react';
import "../../../media.css";
import "../Information/Information.css";
import { InformationWrapper } from './InformationWrapper/InformationWrapper';
import INSTAGRAM from "../../../assets/Contacts/instagram.svg"
import YOUTUBE from "../../../assets/Contacts/youtube.svg"
import { AnimationOnScroll } from 'react-animation-on-scroll';


export const Information = () => {
  return (
    <div className="information">
        <AnimationOnScroll animateIn='animate__fadeInDown' delay={2} animateOnce={true}>
          <InformationWrapper title='Phone' type="tel: +1 354 958-23-51" text="+1 354 958-23-51"/>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn='animate__fadeInDown' delay={3} animateOnce={true}>
          <InformationWrapper title='Email' type="mailto: davidwill@gmail.com" text="davidwill@gmail.com"/>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn='animate__fadeInDown' delay={4} animateOnce={true}>
          <InformationWrapper title='Social' type="https://instagram.com" text={<img src={INSTAGRAM} alt='instagram'/>} opt={<a href="https://youtube.com"><img src={YOUTUBE} alt='youtube' /></a>}/>
        </AnimationOnScroll>
    </div>
  )
}
