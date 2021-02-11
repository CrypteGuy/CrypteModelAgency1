import React, { useEffect, useRef } from 'react';
import { TweenMax, Power3 } from 'gsap';
import { HeroDiv, HeroImage, HeroSubtitle, HeroTitle } from './HeroStyled';

export default function Hero() {
  let heroTitle = useRef(null);
  let heroSubtitle = useRef(null);

  useEffect(() => {
    TweenMax.staggerFrom([heroTitle, heroSubtitle], 1.5, {
      opacity: 0,
      y: 70,
      ease: Power3.easeOut,
    });
  });

  return (
    <>
      <HeroDiv>
        <HeroTitle ref={(el) => (heroTitle = el)}>BELLEFAIR</HeroTitle>
        <HeroSubtitle ref={(el) => (heroSubtitle = el)}>
          MODEL AGENCY
        </HeroSubtitle>
        <HeroImage src="modelagency.jpg" />
      </HeroDiv>
    </>
  );
}
