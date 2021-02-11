import styled from 'styled-components';
import { maxdevice } from '../theme/mediaQueries';

// Footer Container

export const FooterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 3rem;
`;

// Footer Item

export const FooterLogo = styled.a`
  height: 35px;
  width: 40px;

  background-image: url('logo.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  cursor: pointer;

  @media ${maxdevice.tablet} {
    height: 28px;
    width: 33px;
  }
`;
