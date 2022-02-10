import React from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import { Container } from '../../../styles/globalStyles';
import { Wrapper, Intro, Title, MouseIcon } from './HeroSectionStyled';
import mouseImage from '../../../assests/icons/mouseIcon.svg';

const HeroSection = ({ open, handleOpen }) => {
  return (
    <Wrapper>
      <Container>
        <Navbar open={open} handleOpen={handleOpen} />
        <Title>
          We are a world-class fintech, blockchain and cloud engineering team
        </Title>
        <Intro>
          With a solid 10 year background in a practice that combines
          consulting, development and design at scale.
        </Intro>
        <MouseIcon>
          <img src={mouseImage} alt='mouse-icon' />
        </MouseIcon>
      </Container>
    </Wrapper>
  );
};

export default HeroSection;
