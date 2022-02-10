import React from 'react';
import { Comment, Name, Position, Wrapper } from './TestimonialsCardStyled';

const TestimonialsCard = ({ item }) => {
  return (
    <Wrapper>
      <Comment>"{item.comment}"</Comment>
      <Name>{item.name}</Name>
      <Position>{item.position}</Position>
    </Wrapper>
  );
};

export default TestimonialsCard;
