import React, { useState } from 'react';
import {
  Container,
  Container2,
  NavDiv,
  NavHamburger,
  NavHamburgerDiv,
  NavItem,
  NavItemDiv,
  NavLogo,
  NavMenu,
  NavMenuItem,
  Sidebar,
} from './NavbarStyled';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(!open);

    if (open === true) {
      document.body.style.overflow = '';
    } else {
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <>
      <Container>
        <Sidebar />
      </Container>
      <Container2>
        <Sidebar />
      </Container2>
      <NavDiv>
        <NavLogo href="/" />
        <NavHamburgerDiv onClick={openMenu}>
          <NavHamburger />
          <NavHamburger />
          <NavHamburger />
        </NavHamburgerDiv>
        <NavItemDiv>
          <NavItem href="/#about">ABOUT</NavItem>
          <NavItem href="/#work">WORK</NavItem>
          <NavItem href="/#contact">CONTACT</NavItem>
        </NavItemDiv>
        <NavMenu open={open}>
          <NavMenuItem href="/#work" onClick={openMenu}>
            WORK
          </NavMenuItem>
          <NavMenuItem href="/#about" onClick={openMenu}>
            ABOUT
          </NavMenuItem>
          <NavMenuItem href="/#contact" onClick={openMenu}>
            CONTACT
          </NavMenuItem>
          <NavMenuItem href="/" onClick={openMenu}>
            HOME
          </NavMenuItem>
        </NavMenu>
      </NavDiv>
    </>
  );
}
