import styled from 'styled-components';
import { maxdevice } from '../theme/mediaQueries';

// About Container

export const AboutDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 60rem 5rem 30.3125rem 5rem;

  @media ${maxdevice.tablet} {
    margin: 30rem 5rem 15.3125rem 5rem;
  }
`;

// About Title

export const AboutTitle = styled.a`
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

// About Text

export const AboutText = styled.a`
  font-size: 1.875rem;
  text-align: center;

  max-width: 40rem;
  cursor: default;

  &:not(:last-child) {
    margin-bottom: 2.75rem;
  }

  @media ${maxdevice.laptopL} {
    font-size: 1.5rem;
    max-width: 40rem;
  }
  @media ${maxdevice.laptop} {
    font-size: 1.4rem;
    max-width: 20rem;
  }
  @media ${maxdevice.tablet} {
    font-size: 1.2rem;
    max-width: 17rem;
  }
  @media ${maxdevice.between} {
    font-size: 1.1rem;
    max-width: 15rem;
  }
  @media ${maxdevice.mobileL} {
    font-size: 1rem;
  }
`;
