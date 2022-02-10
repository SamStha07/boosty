import React from 'react';
import { Link } from 'react-router-dom';
import ServicesDescription from '../../../../Components/ServicesDescription/ServicesDescription';
import { Left, Right, Wrapper } from './EngineeringSectionStyled';

const EngineeringSection = ({ data }) => {
  return (
    <div id='engineering'>
      <ServicesDescription data={data} />

      <Wrapper>
        <Left>
          <h1>Our stacks include but not limited to:</h1>
          <div className='body__main'>
            <div>
              <h4 className='body__Title'>Front-end Development</h4>
              <p>Web: JS, React</p>
              <p>Mobile: Flutter, Android, iOs</p>
            </div>
            <div>
              <h4 className='body__Title'>Back-end Development</h4>
              <p>Using technologies: Python, Postgresql, Javascript</p>
            </div>
          </div>
        </Left>
        <Right>
          <p className='right__top'>
            We offer developers a specific technology stack to complete tasks on
            a given client’s project.
          </p>
          <p className='right__bottom'>
            If you are interested in other stacks not mentioned above, we can
            hire a team or individual developer according to your requirements
            (outstaffing).
          </p>
          <Link to='/'>
            <button className='right__btn'>
              {/* <LinkScroll to='services'>Scale my team</LinkScroll> */}
              Scale my team
            </button>
          </Link>
        </Right>
      </Wrapper>
    </div>
  );
};

export default EngineeringSection;
