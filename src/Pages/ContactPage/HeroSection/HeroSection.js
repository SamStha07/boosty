import React from 'react';

import Navbar from '../../../Components/Navbar/Navbar';
import { Container } from '../../../styles/globalStyles';
import { Section } from '../ContactPageStyled';
import RocketIcon from '../../../assests/images/rocket.svg';
import Contact from '../../../Components/Contact/Contact';
import { IntroFlex, IntroFlexLeft, IntroFlexRight } from './HeroSectionStyled';

const HeroSection = ({ open, handleOpen }) => {
  return (
    <Section>
      <Container>
        <Navbar open={open} handleOpen={handleOpen} />

        <IntroFlex>
          <IntroFlexRight>
            <h1>Have a project or a partnership in mind?</h1>
            <p>We’d love to hear from you.</p>
            <p>Send us a message, visit our offices or book a meeting</p>

            <div className='contactPage__contactform'>
              <Contact contactPage />
            </div>
          </IntroFlexRight>

          <IntroFlexLeft>
            <img src={RocketIcon} alt='rocket_icon' />
          </IntroFlexLeft>
        </IntroFlex>
      </Container>
    </Section>
  );
};

export default HeroSection;
