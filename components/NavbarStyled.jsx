import styled from 'styled-components';
import { maxdevice, mindevice } from '../theme/mediaQueries';

export const Container = styled.div`
  display: flex;
`;

export const Container2 = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Sidebar = styled.div`
  position: fixed;
  height: 100vh;
  width: 2.1875rem;

  background-color: #91684a;

  @media ${maxdevice.tablet} {
    width: 1.5rem;
  }
  @media ${maxdevice.mobileL} {
    width: 1.2rem;
  }
  @media ${maxdevice.mobileS} {
    width: 1rem;
  }
`;

// Nav Containers

export const NavDiv = styled.div`
  z-index: 100;
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;

  top: 0;

  padding: 2rem 5rem;
`;

export const NavItemDiv = styled.div`
  display: none;
  @media ${mindevice.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const NavHamburgerDiv = styled.a`
  display: none;
  @media ${maxdevice.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;

    cursor: pointer;
  }
`;

// Nav Logo

export const NavLogo = styled.a`
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

// Nav Items

export const NavItem = styled.a`
  font-size: 1.375rem;
  font-weight: 500;

  color: #fff;

  cursor: pointer;

  transition: all 200ms ease-in-out;

  &:hover {
    color: #ffdf91;
  }

  &:not(:last-child) {
    margin-bottom: 3.125rem;
  }

  @media ${maxdevice.laptopL} {
    font-size: 1.2rem;
  }
  @media ${maxdevice.tablet} {
    display: none;
  }
`;

// Nav Menu

export const NavHamburger = styled.span`
  @media ${maxdevice.tablet} {
    height: 0;
    width: 1.7rem;

    border: 1px solid #fff;

    &:not(:last-child) {
      margin-bottom: 0.3rem;
    }
  }
  @media ${maxdevice.mobileL} {
    &:not(:last-child) {
      margin-bottom: 0.25rem;
    }
  }
  @media ${maxdevice.mobileS} {
    width: 1.5rem;
    &:not(:last-child) {
      margin-bottom: 0.25rem;
    }
  }
`;

export const NavMenu = styled.div`
  display: none;
  background-color: #91684a;
  border-radius: 20px;

  @media ${maxdevice.tablet} {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    width: 100%;

    margin-top: 1.5rem;

    transition: all 300ms ease-in-out;

    max-height: ${({ open }) => (open ? '11rem' : '0')};
  }

  @media ${maxdevice.tablet} {
    margin-bottom: 4rem;
  }
  @media ${maxdevice.between} {
    margin-bottom: 0;
  }
`;

export const NavMenuItem = styled.a`
  @media ${maxdevice.tablet} {
    font-size: 1.2rem;
    font-weight: 500;

    color: #fff;

    cursor: pointer;

    &:not(:last-child) {
      margin-bottom: 1rem;
    }

    &:not(:first-child, :nth-child(2), :nth-child(3)) {
      padding-bottom: 1.5rem;
    }

    &:not(:last-child, :nth-child(2), :nth-child(3)) {
      padding-top: 1.5rem;
    }
  }
  @media ${maxdevice.mobileS} {
    font-size: 1rem;
  }
`;
