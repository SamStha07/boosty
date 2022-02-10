import React from 'react';
import Carousel from 'react-elastic-carousel';
import { productsList } from './Data';
import { Wrapper, Item, Title } from './OurProductsSectionStyled';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 850, itemsToShow: 2 },
  { width: 1150, itemsToShow: 3 },
  { width: 1450, itemsToShow: 3 },
];

const OurProductsSection = () => {
  return (
    <Wrapper>
      <Title>Our Products</Title>
      <Carousel showArrows={false} breakPoints={breakPoints}>
        {productsList?.map((item, index) => (
          <Item key={index}>
            <p className='products__platform'>{item?.platform}</p>
            <h4 className='products__projectName'>{item?.project_name}</h4>
            <div className='products__container'>
              <img src={item.image} alt={item.image} />
            </div>
          </Item>
        ))}
      </Carousel>
    </Wrapper>
  );
};

export default OurProductsSection;
