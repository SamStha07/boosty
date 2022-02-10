import React from 'react';
import Carousel from 'react-elastic-carousel';
import { Item } from './AwardSliderStyled';

import { list } from './Data';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 850, itemsToShow: 3 },
  { width: 1150, itemsToShow: 3 },
  { width: 1450, itemsToShow: 5 },
];

const AwardsSlider = () => {
  return (
    <Carousel showArrows={false} breakPoints={breakPoints}>
      {list.map((item, index) => (
        <Item key={index}>
          <img src={item.image} alt={item.name} />
          <p>{item.name}</p>
        </Item>
      ))}
    </Carousel>
  );
};

export default AwardsSlider;
