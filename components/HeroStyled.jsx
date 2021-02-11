import styled from 'styled-components';
import { maxdevice } from '../theme/mediaQueries';

// Hero Containers

export const HeroDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

// Hero Image

export const HeroImage = styled.img`
  z-index: -1;
  position: absolute;
  object-fit: contain;

  height: 64.125rem;
  width: auto;

  margin-top: 1.5rem;

  @media ${maxdevice.laptopL} {
    height: 55rem;
    margin-top: 0rem;
  }
  @media ${maxdevice.laptop} {
    margin-top: 2.5rem;
    height: 38rem;
  }
  @media ${maxdevice.tablet} {
    height: 27rem;
  }
  @media ${maxdevice.between} {
    margin-top: 4.5rem;
  }
  @media ${maxdevice.mobileM} {
    height: 25rem;
    margin-top: 4rem;
  }
  @media ${maxdevice.mobileS} {
    height: 22rem;
  }
`;

// Hero Title

export const HeroTitle = styled.a`
  font-size: 12.5rem;
  cursor: default;

  margin-bottom: 1.5rem;

  @media ${maxdevice.laptopL} {
    font-size: 9.5rem;
  }
  @media ${maxdevice.laptop} {
    margin-top: 3rem;
    font-size: 7.5rem;
  }
  @media ${maxdevice.tablet} {
    font-size: 5rem;
  }
  @media ${maxdevice.between} {
    margin-top: 8rem;
    font-size: 4.5rem;
  }
  @media ${maxdevice.mobileL} {
    font-size: 4.2rem;
  }
  @media ${maxdevice.mobileM} {
    font-size: 3.5rem;
  }
  @media ${maxdevice.mobileS} {
    font-size: 3rem;
  }
`;

// Hero Subtitle

export const HeroSubtitle = styled.a`
  font-size: 3.75rem;
  color: #ffdf91;
  cursor: default;

  @media ${maxdevice.laptopL} {
    font-size: 3.5rem;
  }
  @media ${maxdevice.laptop} {
    font-size: 3rem;
  }
  @media ${maxdevice.tablet} {
    font-size: 2rem;
  }
  @media ${maxdevice.between} {
    font-size: 1.8rem;
  }
  @media ${maxdevice.mobileL} {
    font-size: 1.6rem;
  }
  @media ${maxdevice.mobileM} {
    font-size: 1.5rem;
  }
  @media ${maxdevice.mobileS} {
    font-size: 1.3rem;
  }
`;
