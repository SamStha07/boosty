import React from 'react';

import Carousel from 'react-material-ui-carousel';
import { IntroWrapper, Wrapper } from './SliderStyled';
import RoundButtonArrowInside from '../../../../Components/RoundButtonArrowInside/RoundButtonArrowInside';
import RoundButtonLeftArrow from '../../../../Components/RoundButtonArrowInside/RoundButtonLeftArrow/RoundButtonLeftArrow';

import { leaders } from './Data';

function Slider(props) {
  return (
    <Carousel
      className='member__slider'
      fullHeightHover={false}
      navButtonsAlwaysVisible={true}
      indicators={false}
      animation='slide'
      autoPlay={false}
      swipe={true}
      PrevIcon={<RoundButtonLeftArrow memberLeftArrow />}
      NextIcon={<RoundButtonArrowInside memberRightArrow />}
      navButtonsWrapperProps={{
        style: {
          bottom: '0',
          top: 'unset',
          marginBottom: '50px',
          marginTop: '50px',
        },
      }}
    >
      {leaders.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item({ item }) {
  return (
    <Wrapper>
      <IntroWrapper>
        <p>{item.description}</p>
        <div className='member__intro'>
          <h2>{item.name}</h2>
          <p>{item.role}</p>
        </div>
      </IntroWrapper>

      <img src={item.image} alt='user-img' />
    </Wrapper>
  );
}

export default Slider;
