import React from 'react';
import {
  DescContainer,
  RecommendedFor,
  Wrapper,
} from './TabPanelContentStyled';

const TabPanelContent = ({ title, desc, icon, recommendedFor }) => {
  return (
    <Wrapper>
      <DescContainer>
        <div className='content__backgroundImage'>
          <div className='content__left'>
            <h4>{title}</h4>
            <p>{desc}</p>
          </div>
          <img className='content__right' src={icon} alt='icon' />
        </div>
      </DescContainer>
      <RecommendedFor>
        <h4>Recommended for:</h4>
        <p>{recommendedFor}</p>
      </RecommendedFor>
    </Wrapper>
  );
};

export default TabPanelContent;
