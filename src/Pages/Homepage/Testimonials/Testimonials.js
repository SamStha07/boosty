import React from 'react';

import Carousel from 'react-material-ui-carousel';
import { Wrapper } from './TestimonialsStyled';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

import { testimonialsList } from './Data';
import TestimonialsCard from '../../../Components/TestimonialsCard/TestimonialsCard';

const Testimonials = () => {
  return (
    <Wrapper>
      <div className='testimonials__container'>
        <Carousel
          className='testimonials__carousel'
          fullHeightHover={false}
          navButtonsAlwaysVisible={true}
          indicators={false}
          animation='slide'
          autoPlay={false}
          swipe={true}
          PrevIcon={<IoIosArrowBack />}
          NextIcon={<IoIosArrowForward />}
          navButtonsWrapperProps={{
            style: {
              bottom: '0',
              top: 'unset',
              marginTop: '0px',
              marginRight: '88%',
            },
          }}
        >
          {testimonialsList.map((item, i) => (
            <TestimonialsCard key={i} item={item} />
          ))}
        </Carousel>
      </div>
    </Wrapper>
  );
};

export default Testimonials;
