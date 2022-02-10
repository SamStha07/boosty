import React from 'react';
import { HeroMenu, Nav } from './NavbarStyled';
import LogoWhite from '../../assests/images/logo-white.png';
import LogoBlack from '../../assests/images/logo-black.png';
import { CloseButton, HamburgerLine } from '../Header/HeaderStyled';
import { Link } from 'react-router-dom';

const Navbar = ({ handleOpen, open, homepage }) => {
  return (
    <Nav>
      <div>
        {homepage ? (
          <Link to='/'>
            <img src={LogoWhite} alt='logo' />
          </Link>
        ) : (
          <Link to='/'>
            <img src={LogoBlack} alt='logo' />
          </Link>
        )}
      </div>

      <HeroMenu onClick={handleOpen}>
        {open ? (
          <CloseButton />
        ) : (
          <>
            {homepage ? (
              <div style={{ cursor: 'pointer' }}>
                <HamburgerLine home />
                <HamburgerLine home />
              </div>
            ) : (
              <div style={{ cursor: 'pointer' }}>
                <HamburgerLine />
                <HamburgerLine />
              </div>
            )}
          </>
        )}
      </HeroMenu>
    </Nav>
  );
};

export default Navbar;
