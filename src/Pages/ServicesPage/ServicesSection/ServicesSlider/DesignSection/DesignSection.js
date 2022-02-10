import React from 'react';
import {
  HeaderWrapper,
  Wrapper,
} from '../../../../../Components/ServicesDescription/ServicesDescriptionStyled';
import { Body } from './DesignSectionStyled';

const DesignSection = ({ data }) => {
  return (
    <div style={{ backgroundColor: '#f4f5f8' }}>
      <Wrapper id='design' design>
        <HeaderWrapper>
          <div className='servicesDesc__title'>
            <p className='servicesDesc__titleNumber'>{data?.id}</p>
            <h1>{data?.title}</h1>
          </div>
          <p className='servicesDesc__titleIntro'>{data?.titleIntro}</p>
        </HeaderWrapper>

        <Body>
          <div className='designSection__left'>
            <img src={data?.body_imageLeft} alt={data?.body_imageLeft} />
            <div className='designSection__areas'>
              <h4 className='designSection__areaTitle'>{data?.body_title}</h4>
              {data?.body_desc.map((name, index) => (
                <p className='designSection__areaList' key={index}>
                  {name}
                </p>
              ))}
            </div>
          </div>
          <div className='designSection__right'>
            <h4>{data?.body_right}</h4>
            <button>Contact Us</button>
          </div>
        </Body>
      </Wrapper>
    </div>
  );
};

export default DesignSection;
