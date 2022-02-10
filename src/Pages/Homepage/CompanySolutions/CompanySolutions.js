import React from 'react';

import { data } from './Data';
import {
  Body,
  CardComponent,
  Description,
  HaveAProjectInMind,
  Title,
  Wrapper,
} from './CompanySolutionsStyled';
import CompanySolutionsCard from '../../../Components/CompanySolutionsCard/CompanySolutionsCard';
import { Container } from '../../../styles/globalStyles';

const CompanySolutions = () => {
  return (
    <Wrapper>
      <Container>
        <Body>
          <Title>What sets us apart</Title>
          <Description>
            In collaborations with our much loved customers, we have created
            ground-breaking solutions for their unique business needs.
          </Description>
          {/* Cards with features expained */}
          <CardComponent>
            {data.map((item, index) => (
              <div key={index}>
                <CompanySolutionsCard data={item} />
              </div>
            ))}
            <HaveAProjectInMind>
              <h1>Have a project in mind?</h1>
              <button>Coorporate</button>
            </HaveAProjectInMind>
          </CardComponent>
        </Body>
      </Container>
    </Wrapper>
  );
};

export default CompanySolutions;
