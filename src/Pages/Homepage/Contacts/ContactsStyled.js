import styled from 'styled-components';
import bg from '../../../assests/images/contactBG.jpg';

export const Wrapper = styled.div`
  padding-bottom: 35px;
  padding-top: 100px;
  color: #fff;
  background-color: #111;
  z-index: 8;
  background-image: url(${bg});
  background-size: contain;
  background-position-y: 100px;
  background-repeat: no-repeat;
`;
export const Flex = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;
export const Left = styled.div`
  h1 {
    font-size: 42px;
    line-height: 54px;
  }
  h4 {
    font-size: 20px;
    margin-top: 70px;
  }
  p {
    font-size: 20px;
  }

  @media screen and (max-width: 500px) {
    h1 {
      font-size: 34px;
    }
    h4 {
      font-size: 14pxpx;
      margin-top: 10px;
    }
    p {
      font-size: 14px;
    }
  }
`;
export const Right = styled.div`
  padding-top: 50px;
`;
