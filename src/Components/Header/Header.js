import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import LogoImg from '../../assests/images/logo-black.png';
import HeaderOpenSection from '../HeaderOpenSection/HeaderOpenSection';
import {
  Button,
  CloseButton,
  HamburgerLine,
  List,
  ListContainer,
  Menu,
  Nav,
  NavContainer,
} from './HeaderStyled';

export const Header = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  const closeBtnHandler = (data) => setOpen(data);
  const location = useLocation();
  console.log(location);
  return (
    <>
      {open ? (
        <HeaderOpenSection open={open} closeBtnHandler={closeBtnHandler} />
      ) : (
        <Nav open={open}>
          <NavContainer>
            <Link to='/'>
              <img className='logo-img' src={LogoImg} alt='logo' />
            </Link>

            <ListContainer>
              <NavLink activeClassName='active' to='/services'>
                <List>Services</List>
              </NavLink>
              <NavLink activeClassName='active' to='/projects'>
                <List>Projects</List>
              </NavLink>
              <NavLink activeClassName='active' to='contacts'>
                <List>Contacts</List>
              </NavLink>
              <Button header>Book a call</Button>
            </ListContainer>

            <Menu onClick={handleOpen}>
              {open ? (
                <CloseButton />
              ) : (
                <div style={{ cursor: 'pointer' }}>
                  <HamburgerLine />
                  <HamburgerLine />
                </div>
              )}
            </Menu>
          </NavContainer>
        </Nav>
      )}
    </>
  );
};
