import React from 'react';
import "../../../media.css";
import "../Bio/Bio.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

export const Bio = () => {
  return (
    <div className="bio">
        <AnimationOnScroll animateIn='animate__fadeInDown' delay={1} animateOnce={true}>
          <h3 className="bio__title">Hey there!</h3>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn='animate__fadeInUp' delay={2} animateOnce={true}>
          <p className="bio__text">I started my career as a photographer in 2015. I studied photography at the London Lyceum. I have more than 5 years of experience and 1000 satisfied clients. I hope for good cooperation.</p>
        </AnimationOnScroll>
    </div>
  )
}
