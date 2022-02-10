import React from 'react';
import { BsArrowLeftShort } from 'react-icons/bs';
import { Button } from '../RoundButtonArrowInsideStyled';

const RoundButtonLeftArrow = ({ memberLeftArrow }) => {
  return (
    <Button memberLeftArrow>
      <BsArrowLeftShort />
    </Button>
  );
};

export default RoundButtonLeftArrow;
