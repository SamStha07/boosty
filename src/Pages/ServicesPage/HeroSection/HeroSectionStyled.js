import styled from 'styled-components';
import backgroundImage from '../../../assests/images/servicesPage/background_image.png';

export const Wrapper = styled.div`
  height: 700px;
  background-color: #f4f5f8;
  position: relative;

  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-position: right 0 top 125px;
  @media screen and (max-width: 1024px) {
    background-image: none;
  }

  @media screen and (max-width: 500px) {
    height: 100vh;
  }
`;

export const Title = styled.h1`
  font-size: clamp(4.2rem, 5vw, 6.4rem);
  line-height: 85px;
  line-height: clamp(125%, 5vw, 8.5rem);
  color: #364350;
  max-width: 850px;
  margin-bottom: 30px;
  font-weight: 800;
  margin-top: 50px;
`;
export const Intro = styled.p`
  font-size: clamp(1.4rem, 1.25vw, 1.8rem);
  line-height: 2.8rem;
  color: #364350;
  max-width: 580px;
`;

export const MouseIcon = styled.div`
  position: absolute;
  bottom: 30px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 50px;
`;
