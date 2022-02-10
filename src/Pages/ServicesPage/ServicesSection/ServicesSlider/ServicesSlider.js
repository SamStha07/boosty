import React from 'react';
import Carousel from 'react-elastic-carousel';
import { Link as LinkScroll } from 'react-scroll';

import { servicesList } from './Data';
import { Item } from './ServicesSliderStyled';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 850, itemsToShow: 2 },
  { width: 1150, itemsToShow: 2 },
  { width: 1450, itemsToShow: 2 },
];

const ServicesSlider = () => {
  return (
    <Carousel showArrows={false} breakPoints={breakPoints}>
      {servicesList.map((item, index) => (
        <Item key={index}>
          <img src={item.icon} alt={item.name} />
          <h4>{item.name}</h4>
          <p>{item.description}</p>
          <button>
            <LinkScroll to={item.to}>Learn more</LinkScroll>
          </button>
        </Item>
      ))}
    </Carousel>
  );
};

export default ServicesSlider;
