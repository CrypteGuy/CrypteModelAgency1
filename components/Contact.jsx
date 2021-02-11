import React, { useEffect, useRef } from 'react';
import { ContactDiv, ContactInfo, ContactTitle } from './ContactStyled';
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
gsap.registerPlugin(ScrollTrigger);

function Contact() {
  let contactTitle = useRef(null);
  let contactInfo = useRef(null);
  let contactInfo2 = useRef(null);
  let contactInfo3 = useRef(null);

  useEffect(() => {
    gsap.from(contactTitle, 1.5, {
      opacity: 0,
      y: 70,
      ease: Power3.easeOut,
      scrollTrigger: contactTitle,
    });
    gsap.from([contactInfo, contactInfo2, contactInfo3], 1.5, {
      opacity: 0,
      y: 70,
      ease: Power3.easeOut,
      scrollTrigger: contactInfo3,
    });
  });

  return (
    <ContactDiv>
      <ContactTitle
        ref={(el) => {
          contactTitle = el;
        }}
      >
        CONTACT
      </ContactTitle>
      <ContactInfo
        ref={(el) => {
          contactInfo = el;
        }}
      >
        Musterstraße 00 <br /> 12345 Berlin
      </ContactInfo>
      <ContactInfo
        ref={(el) => {
          contactInfo2 = el;
        }}
      >
        maxmustermann@gmail.com
      </ContactInfo>
      <ContactInfo
        ref={(el) => {
          contactInfo3 = el;
        }}
      >
        +49 123 456789
      </ContactInfo>
    </ContactDiv>
  );
}

export default Contact;
