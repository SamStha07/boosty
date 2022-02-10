import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { Button } from './RoundButtonArrowInsideStyled';

const RoundButtonArrowInside = ({ herosection, memberRightArrow, contact }) => {
  if (herosection)
    return (
      <Button herosection>
        <BsArrowRightShort />
      </Button>
    );

  if (memberRightArrow)
    return (
      <Button memberRightArrow>
        <BsArrowRightShort />
      </Button>
    );
  if (contact) {
    return (
      <Button contact>
        <BsArrowRightShort />
      </Button>
    );
  }
  return;
};

export default RoundButtonArrowInside;
