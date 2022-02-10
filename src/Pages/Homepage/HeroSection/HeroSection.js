import React from 'react';
import { Link as LinkScroll } from 'react-scroll';
import {
  Section,
  HeroBody,
  HeroButton,
  HeroIntro,
  LogoSection,
} from './HeroSectionStyled';
import { Container } from '../../../styles/globalStyles';
import RoundButtonArrowInside from '../../../Components/RoundButtonArrowInside/RoundButtonArrowInside';
import Navbar from '../../../Components/Navbar/Navbar';

const HeroSection = ({ open, handleOpen }) => {
  return (
    <Section>
      <Container>
        <Navbar open={open} handleOpen={handleOpen} homepage />

        <HeroBody>
          <h1>Build. Grow. Pivot.</h1>
          <p>
            Unlock your company or startup`s hidden growth potential with us,
            using Blockchain, Fintech or the Cloud. IT outsourcing company
            Boosty Labs helps you create an innovative end to end product or
            augment your team with the right experts.
          </p>
        </HeroBody>
        <HeroButton>
          <h4>free consultation</h4>
          <LinkScroll to='contact' duration={5000}>
            <RoundButtonArrowInside herosection />
          </LinkScroll>
        </HeroButton>
        <HeroIntro>
          We built engineering teams for world leading crypto &amp; SSI
          companies
        </HeroIntro>

        <LogoSection>
          <img
            src={`https://boostylabs.com/uploads/home-logos/1610629587767.svg`}
            alt=''
          />
          <img
            src={`https://boostylabs.com/uploads/home-logos/1627727465988.svg`}
            alt=''
          />
          <img
            src={`https://boostylabs.com/uploads/home-logos/16106295628.svg`}
            alt=''
          />
        </LogoSection>
      </Container>
    </Section>
  );
};

export default HeroSection;
