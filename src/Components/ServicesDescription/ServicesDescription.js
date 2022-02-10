import React from 'react';
import { Body, HeaderWrapper, Wrapper } from './ServicesDescriptionStyled';

const ServicesDescription = ({ data }) => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <div className='servicesDesc__title'>
          <p className='servicesDesc__titleNumber'>{data?.id}</p>
          <h1>{data?.title}</h1>
        </div>
        <p className='servicesDesc__titleIntro'>{data?.titleIntro}</p>
      </HeaderWrapper>
      <Body>
        <div className='servicesDesc__body-left'>
          {data?.body_imageLeft === null ? (
            <div className='servicesDesc__body-imageNull' />
          ) : (
            <img src={data?.body_imageLeft} alt={data?.body_imageLeft} />
          )}

          <div
            className={
              data.body_imageLeft === null
                ? 'servicesDesc__body null'
                : 'servicesDesc__body'
            }
          >
            <h4>{data?.body_title}</h4>
            <p>{data?.body_desc}</p>
          </div>
        </div>
        <div className='servicesDesc__body-right'>
          <img src={data?.body_imageRight} alt={data?.body_imageRight} />
        </div>
      </Body>
    </Wrapper>
  );
};

export default ServicesDescription;
