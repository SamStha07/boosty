import React from 'react';
import { LetTalk } from './LetsTalkStyled';
import { Link } from 'react-router-dom';

const LetsTalk = () => {
  return (
    <>
      <LetTalk>
        <Link to='/contacts'>
          <h1>Lets talk!</h1>
        </Link>
      </LetTalk>
    </>
  );
};

export default LetsTalk;
