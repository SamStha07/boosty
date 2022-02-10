import React from 'react';
import {
  Icon,
  Description,
  Title,
  Wrapper,
} from './CompanySolutionsCardStyled';

const CompanySolutionsCard = ({ data }) => {
  return (
    <Wrapper>
      <Icon>
        <img src={data.icon} alt='icons' />
      </Icon>
      <Title>{data.title}</Title>
      <Description>{data.description}</Description>
    </Wrapper>
  );
};

export default CompanySolutionsCard;
