import React from 'react';
import SimpleTabs from '../../../Components/Tabs/Tabs';
import { Container } from '../../../styles/globalStyles';
import { Body } from '../CompanySolutions/CompanySolutionsStyled';

import { Wrapper, Title, Desc } from './ServicesStyled';

const Services = () => {
  return (
    <Wrapper id='services'>
      <Container>
        <Body>
          <Title>How we cooperate with you</Title>
          <Desc>
            We offer many different levels of services to meet the operational
            and financial goals of our clients.
          </Desc>

          {/* tabs for different services */}
          <SimpleTabs />
        </Body>
      </Container>
    </Wrapper>
  );
};

export default Services;
