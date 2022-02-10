import React from 'react';
import ServicesSlider from './ServicesSlider/ServicesSlider';
import { Wrapper, Title, NextProject } from './ServicesSectionStyled';
import { Link } from 'react-router-dom';
import EngineeringSection from './EngineeringSection/EngineeringSection';
import ServicesDescription from '../../../Components/ServicesDescription/ServicesDescription';

import { engineeringData, consultingData, designData } from './Data';
import DesignSection from './ServicesSlider/DesignSection/DesignSection';

const ServicesSection = () => {
  return (
    <>
      <Wrapper>
        <Title>Services</Title>
        <ServicesSlider />
        <NextProject>
          <p>Ready to discuss your next project?</p>
          <Link to='/contacts'>
            <button>Coorporate</button>
          </Link>
        </NextProject>
      </Wrapper>

      {/* For Engineering section */}
      <EngineeringSection data={engineeringData} />

      {/* Design section */}
      <DesignSection data={designData} />

      {/* For COnsulting section */}
      <div id='own-products'>
        <ServicesDescription data={consultingData} />
      </div>
    </>
  );
};

export default ServicesSection;
