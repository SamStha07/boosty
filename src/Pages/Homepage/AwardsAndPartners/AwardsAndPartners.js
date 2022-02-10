import React from 'react';

import { Wrapper, Title } from './AwardsAndPartnersStyled';
import AwardsSlider from './AwardsSlider/AwardsSlider';

const AwardsAndPartners = () => {
  return (
    <Wrapper>
      <div className='awards__container'>
        <Title>Awards and partners</Title>

        <AwardsSlider />
      </div>
    </Wrapper>
  );
};

export default AwardsAndPartners;
