import React, { useEffect, useRef } from 'react';
import { AboutDiv, AboutText, AboutTitle } from './AboutStyled';
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
gsap.registerPlugin(ScrollTrigger);

function About() {
  let aboutTitle = useRef(null);
  let aboutText = useRef(null);
  let aboutText2 = useRef(null);

  useEffect(() => {
    gsap.from(aboutTitle, 1.5, {
      opacity: 0,
      y: 70,
      ease: Power3.easeOut,
      scrollTrigger: aboutTitle,
    });
    gsap.from([aboutText, aboutText2], 1.5, {
      opacity: 0,
      y: 70,
      ease: Power3.easeOut,
      scrollTrigger: aboutText2,
    });
  });

  return (
    <AboutDiv>
      <AboutTitle
        id="about"
        ref={(el) => {
          aboutTitle = el;
        }}
      >
        BELLEFAIR
      </AboutTitle>
      <AboutText
        ref={(el) => {
          aboutText = el;
        }}
      >
        BELLEFAIR was founded in 2017. <br /> We are a model agency based in
        Berlin, Germany.
      </AboutText>
      <AboutText
        ref={(el) => {
          aboutText2 = el;
        }}
      >
        Our models come from all across the world & we attach great importance
        to gender equality.
      </AboutText>
    </AboutDiv>
  );
}

export default About;
