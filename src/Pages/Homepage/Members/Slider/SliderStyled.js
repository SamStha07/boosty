import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 12%;

  img {
    width: 54rem;
    height: 65rem;
    object-fit: cover;
    border-radius: 1.5rem;
  }

  @media screen and (max-width: 1165px) {
    padding: 0 3%;
    img {
      width: 50%;
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
    height: auto;

    img {
      width: 100%;
    }
  }
`;

export const IntroWrapper = styled.div`
  width: 57.5rem;
  padding-left: 2rem;
  p {
    font-size: 1.6rem;
    line-height: 2%.6rem;
    margin-top: 15rem;
    margin-bottom: 6rem;
  }

  .member__intro {
    h2 {
      font-size: 2.1rem;
    }
    p {
      font-size: 1.4rem;
      max-width: 62rem;
      width: 100%;
      color: #8d94ae;
      margin: 0;
    }
  }
  @media screen and (max-width: 1165px) {
    width: 50%;
  }
  @media screen and (max-width: 1100px) {
    p {
      margin-top: 6rem;
      margin-bottom: 3rem;
    }
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    text-align: center;
    padding: 0;

    p {
      margin-top: 2rem;
    }

    .member__intro {
      margin-top: 4rem;
    }
  }
`;
