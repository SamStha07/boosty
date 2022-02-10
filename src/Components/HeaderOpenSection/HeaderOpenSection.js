import React from 'react';
import {
  HeaderModelWrapper,
  MenuList,
  MenuOpenData,
  Nav,
  HeaderModelContainer,
  Left,
  Right,
  Title,
} from './HeaderOpenSectionStyled';

import LogoImg from '../../assests/images/logo-black.png';
import { CloseButton } from '../Header/HeaderStyled';
import { Link, useLocation } from 'react-router-dom';

const ModelOpenSection = ({ open, closeBtnHandler }) => {
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split('/');
  return (
    <HeaderModelWrapper>
      <HeaderModelContainer>
        <Nav>
          <img className='logo-img' src={LogoImg} alt='logo' />
          <div
            style={{ cursor: 'pointer' }}
            onClick={() => closeBtnHandler(false)}
          >
            {open && <CloseButton className='close' />}
          </div>
        </Nav>

        <MenuOpenData>
          <Left>
            <Title>Content</Title>
            <Link to='/services'>
              <MenuList
                className={splitLocation[1] === 'services' ? 'active' : ''}
                onClick={() => closeBtnHandler(false)}
              >
                Services
              </MenuList>
            </Link>
            <Link to='/projects'>
              <MenuList
                className={splitLocation[1] === 'projects' ? 'active' : ''}
                onClick={() => closeBtnHandler(false)}
              >
                Projects
              </MenuList>
            </Link>
            <Link to='/contacts'>
              <MenuList
                className={splitLocation[1] === 'contacts' ? 'active' : ''}
                onClick={() => closeBtnHandler(false)}
              >
                Contacts
              </MenuList>
            </Link>
          </Left>
          <Right>
            <Title>Our Location</Title>
            <h4>Kathmandu, Nepal</h4>
            <p>Gongabu</p>
          </Right>
        </MenuOpenData>
      </HeaderModelContainer>
    </HeaderModelWrapper>
  );
};

export default ModelOpenSection;
