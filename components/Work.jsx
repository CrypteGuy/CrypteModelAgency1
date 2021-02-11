import React, { useEffect, useRef } from 'react';
import {
  ImageType1,
  ImageType2,
  WorkDiv,
  WorkImageDiv,
  WorkTitle,
} from './WorkStyled';
import { gsap, Power2, Power3, Power4 } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
gsap.registerPlugin(ScrollTrigger);

function Work() {
  let workTitle = useRef(null);
  let image1 = useRef(null);
  let image2 = useRef(null);
  let image3 = useRef(null);
  let image4 = useRef(null);
  let image5 = useRef(null);
  let image6 = useRef(null);
  let image7 = useRef(null);
  let image8 = useRef(null);

  useEffect(() => {
    gsap.from(workTitle, 1.5, {
      opacity: 0,
      y: 70,
      ease: Power3.easeOut,
      scrollTrigger: workTitle,
    });
    gsap.to(image1, 1, {
      opacity: 1,
      ease: Power2.easeIn,
      scrollTrigger: image2,
    });
    gsap.to(image2, 2, {
      opacity: 1,
      ease: Power4.easeIn,
      scrollTrigger: image2,
    });
    gsap.to(image4, 1, {
      opacity: 1,
      ease: Power2.easeIn,
      scrollTrigger: image4,
    });
    gsap.to(image3, 2, {
      opacity: 1,
      ease: Power4.easeIn,
      scrollTrigger: image4,
    });
    gsap.to(image5, 1, {
      opacity: 1,
      ease: Power2.easeIn,
      scrollTrigger: image6,
    });
    gsap.to(image6, 2, {
      opacity: 1,
      ease: Power4.easeIn,
      scrollTrigger: image6,
    });
    gsap.to(image7, 1, {
      opacity: 1,
      ease: Power2.easeIn,
      scrollTrigger: image8,
    });
    gsap.to(image8, 2, {
      opacity: 1,
      ease: Power4.easeIn,
      scrollTrigger: image8,
    });
  });

  return (
    <WorkDiv>
      <WorkTitle
        ref={(el) => {
          workTitle = el;
        }}
      >
        WORK
      </WorkTitle>
      <WorkImageDiv>
        <ImageType1
          ref={(el) => {
            image1 = el;
          }}
          src="1.jpg"
        />
        <ImageType2
          ref={(el) => {
            image2 = el;
          }}
          src="2.jpg"
        />
      </WorkImageDiv>
      <WorkImageDiv>
        <ImageType1
          ref={(el) => {
            image3 = el;
          }}
          src="3.jpg"
        />
        <ImageType2
          ref={(el) => {
            image4 = el;
          }}
          src="4.jpg"
        />
      </WorkImageDiv>
      <WorkImageDiv>
        <ImageType1
          ref={(el) => {
            image5 = el;
          }}
          src="1.jpg"
        />
        <ImageType2
          ref={(el) => {
            image6 = el;
          }}
          src="2.jpg"
        />
      </WorkImageDiv>
      <WorkImageDiv>
        <ImageType1
          ref={(el) => {
            image7 = el;
          }}
          src="3.jpg"
        />
        <ImageType2
          ref={(el) => {
            image8 = el;
          }}
          src="4.jpg"
        />
      </WorkImageDiv>
    </WorkDiv>
  );
}

export default Work;
