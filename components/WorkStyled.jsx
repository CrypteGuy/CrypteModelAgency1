import styled from 'styled-components';
import { maxdevice } from '../theme/mediaQueries';

// Work Containers

export const WorkDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 30.3125rem;

  @media ${maxdevice.tablet} {
    margin-bottom: 15.3125rem;
  }
`;

export const WorkImageDiv = styled.div`
  display: flex;
  align-items: center;
`;

// Work Title

export const WorkTitle = styled.a`
  text-align: center;
  font-size: 4.375rem;
  cursor: default;

  margin-bottom: 10.3125rem;

  @media ${maxdevice.laptopL} {
    font-size: 4rem;
  }
  @media ${maxdevice.laptop} {
    font-size: 3.9rem;
  }
  @media ${maxdevice.tablet} {
    font-size: 3.2rem;
  }
  @media ${maxdevice.between} {
    font-size: 2.2rem;
  }
  @media ${maxdevice.mobileL} {
    font-size: 2rem;
  }
`;

// Work Images

export const ImageType1 = styled.img`
  object-fit: contain;
  height: 54.5rem;
  width: auto;

  opacity: 0;

  flex: 0.45;

  @media ${maxdevice.laptopL} {
    height: 40rem;
  }
  @media ${maxdevice.laptop} {
    height: 28rem;
  }
  @media ${maxdevice.tablet} {
    height: 21.5rem;
  }
  @media ${maxdevice.between} {
    height: 16.5rem;
  }
  @media ${maxdevice.mobileL} {
    height: 14.4rem;
  }
  @media ${maxdevice.mobileM} {
    height: 12.15rem;
  }
  @media ${maxdevice.mobileS} {
    height: 10rem;
  }
`;

export const ImageType2 = styled.img`
  object-fit: contain;
  height: 54.5rem;
  width: auto;

  opacity: 0;

  flex: 0.55;

  @media ${maxdevice.laptopL} {
    height: 40rem;
  }
  @media ${maxdevice.laptop} {
    height: 28rem;
  }
  @media ${maxdevice.tablet} {
    height: 21.5rem;
  }
  @media ${maxdevice.between} {
    height: 16.5rem;
  }
  @media ${maxdevice.mobileL} {
    height: 14.4rem;
  }
  @media ${maxdevice.mobileM} {
    height: 12.15rem;
  }
  @media ${maxdevice.mobileS} {
    height: 10rem;
  }
`;
