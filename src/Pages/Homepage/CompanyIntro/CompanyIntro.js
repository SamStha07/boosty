import React from 'react';
import { LogoSection } from '../HeroSection/HeroSectionStyled';
import { Container } from '../../../styles/globalStyles';
import { IntroFlex, TitleIntro, Wrapper } from './CompanyIntroStyled';

const CompanyIntro = () => {
  return (
    <Wrapper>
      <Container>
        <IntroFlex>
          <h1>Who we are</h1>
          <p>
            Five years ago, Viktor Ihnatiuk’s peer to peer lending company was
            acquired. He was 21 years old. Later, the young fintech veteran
            built a product development outsourcing team of industry experts to
            tackle a number of projects including ones in
            <br />
            Attracted by our ability to create products, several market leading
            companies became our clients. Together we developed cutting-edge
            digital solutions which addressed customers' dilemmas and helped to
            improve their business
          </p>
        </IntroFlex>
        <TitleIntro>Trusted by global brands</TitleIntro>
        <LogoSection introsection>
          <img src={`https://boostylabs.com/img/McKinsey&Company.svg`} alt='' />
          <img src={`https://boostylabs.com/img/samsung.svg`} alt='' />
          <img src={`https://boostylabs.com/img/parity.svg`} alt='' />
        </LogoSection>
      </Container>
    </Wrapper>
  );
};

export default CompanyIntro;
