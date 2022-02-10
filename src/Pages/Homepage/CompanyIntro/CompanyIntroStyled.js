import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #f4f5f8;
  padding: 10% 0;

  @media screen and (max-width: 500px) {
    border-top-right-radius: 2.5rem;
    border-top-left-radius: 2.5rem;
  }
`;

export const IntroFlex = styled.div`
  display: flex;
  column-gap: 5rem;

  h1 {
    width: 40%;
    font-size: 5.8rem;
    display: block;
    line-height: 7rem;
    color: #212529;
  }

  p {
    width: 60%;
    font-size: 1.6rem;
    line-height: 2.8rem;
    color: #4d4d4d;
  }

  @media screen and (max-width: 1000px) {
    h1 {
      font-size: 4.6rem;
    }
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    h1,
    p {
      width: 100%;
    }
    h1 {
      margin: 2rem 0;
    }
  }
`;

export const TitleIntro = styled.h4`
  text-align: center;
  margin: 4rem 0;
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 2.9rem;
  color: #17213e;
`;
