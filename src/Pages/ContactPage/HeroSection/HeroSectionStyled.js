import styled from 'styled-components';

export const IntroFlex = styled.div`
  display: flex;
  column-gap: 5rem;
`;

export const IntroFlexRight = styled.div`
  width: 60%;
  h1 {
    font-size: 6.4rem;
    display: block;
    line-height: 9rem;
    color: black;
    margin-bottom: 5rem;
  }

  p {
    margin-top: 2rem;
    font-size: 1.8rem;
    line-height: 2.4rem;
    color: #364350;
  }

  .contactPage__contactform {
    padding: 50px 0 100px 0;
  }
  @media screen and (max-width: 1000px) {
    width: 100%;
    h1 {
      font-size: 4.6rem;
      line-height: 6rem;
    }
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    h1 {
      font-size: 40px;
    }
    p {
      font-size: 16px;
    }
  }
`;

export const IntroFlexLeft = styled.div`
  width: 40%;
  margin-top: 5rem;

  @media screen and (max-width: 1000px) {
    display: none;
    img {
      display: none;
    }
  }
`;
