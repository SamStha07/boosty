import React from 'react';

import { Container } from '../../styles/globalStyles';
import { CopyRight, Links, Wrapper } from './FooterStyled';
import LogoImg from '../../assests/images/logo-white.png';
import twitter from '../../assests/icons/footer/twitter.svg';
import facebook from '../../assests/icons/footer/facebook.svg';
import linkdin from '../../assests/icons/footer/linkdin.svg';
import { Button } from '../Header/HeaderStyled';
import { Link } from 'react-router-dom';

const pagesList = [
  { name: 'services', link: '/services' },
  { name: 'projects', link: '/projects' },
  { name: 'contacts', link: '/contacts' },
];

const Footer = () => {
  const getCurrentDate = new Date();
  const getCurrentYear = getCurrentDate.getFullYear();
  return (
    <Wrapper homepage>
      <Container>
        <div className='footer__main'>
          <img src={LogoImg} alt='logo' />
          <p className='footer__copyright'>
            Copyrights are reserved. All works are protected by copyright of the
            corresponding authors.
          </p>
          <h4 className='footer__phoneNumber'>+977-9846789012</h4>
          <div className='footer__logos'>
            <img src={facebook} alt='facebook-icon' />
            <img src={twitter} alt='twitter-icon' />
            <img src={linkdin} alt='linkdin-icon' />
          </div>
          <Button footer>Book a call</Button>
          <Links>
            {pagesList.map((item) => (
              <Link key={item.name} to={item.link}>
                <h4>{item.name}</h4>
              </Link>
            ))}
          </Links>
          <CopyRight>&copy; {getCurrentYear} Growthlab</CopyRight>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Footer;
