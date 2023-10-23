import React from 'react'
import "../Fields/Fields.css"
import { Buttons } from './Buttons/Buttons'
import { Workflow } from './Workflow/Workflow'
import DONE from "../../../assets/Services/done.svg"
import { AnimationOnScroll } from 'react-animation-on-scroll';
export const Fields = () => {
  return (
    <div className="services__fields">
        <div className="services__btns">
            <AnimationOnScroll animateIn="animate__bounceInLeft" animateOnce={true}>
                <Buttons title="Parties" active='active' />
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__bounceInLeft"  animateOnce={true}>
                <Buttons title="Weddings"/>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__bounceInLeft"  animateOnce={true}>
                <Buttons title="Business meetings"/>
            </AnimationOnScroll>
        </div>
        <div className="services__workflow">
            <AnimationOnScroll animateIn='animate__fadeInDown' delay={2} animateOnce={true}>
                <h4 className="workflow__title">Workflow</h4>
            </AnimationOnScroll>
            <div className="stages">
                <AnimationOnScroll animateIn='animate__fadeInDown' delay={3} animateOnce={true}>
                    <Workflow number={1} title="Briefing" desc="At this point I discover what you need and how you need it to be done"/>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__fadeInDown' delay={4} animateOnce={true}>
                    <Workflow number={2} title="Photography" desc="I photograph every participant and every detail of your holiday"/>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__fadeInDown' delay={5} animateOnce={true}>
                    <Workflow number={3} title="Sending results" desc="1-2 weeks after the shooting, I send the results of the photography to the clients"/>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__bounceInDown' delay={6} animateOnce={true}>
                    <div className="stage__done">
                        <AnimationOnScroll animateIn='animate__flip' delay={7} animateOnce={true}>
                            <img src={DONE} alt="done" />
                        </AnimationOnScroll>
                    </div>
                </AnimationOnScroll>
            </div>
        </div>
    </div>
  )
}
