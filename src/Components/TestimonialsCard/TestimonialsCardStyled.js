import styled from 'styled-components';
// import backgroundImage from '../../assests/icons/testimonials/backgroundImage.svg';
import bgImage from '../../assests/icons/testimonials/bgimage.svg';

export const Wrapper = styled.div`
  background-color: #f4f5f8;
  color: #0e162c;
  padding: 100px 0;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: 100%, 100%, cover;
`;
export const Comment = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 38px;
  width: 80%;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    font-size: 22px;
    text-align: center;
  }
  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
`;
export const Name = styled.h5`
  margin: 0;
  margin-top: 40px;
  font-size: 18px;
  font-weight: 400;
`;
export const Position = styled.p`
  margin-bottom: 20px;
  font-size: 14px;
  color: #4b525d;
`;
