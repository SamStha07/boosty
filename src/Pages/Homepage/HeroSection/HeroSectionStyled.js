import styled from 'styled-components';
import backgroundImage from '../../../assests/images/background_image.png';

export const Section = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: 35%, 1%;
  background-position: right 0 top 140px, right 130px top 60px;
  background-attachment: fixed;

  @media screen and (max-width: 1024px) {
    background-size: 45%, auto;
    height: 100%;
  }

  @media screen and (max-width: 915px) {
    background-position: right 0 top 150px, right 30px top 50px;
  }

  @media screen and (max-width: 800px) {
    background-size: 50%, auto;
  }

  @media screen and (max-width: 720px) {
    background-size: 55%, auto;
  }
  @media screen and (max-width: 650px) {
    background-size: 65%, auto;
  }

  @media screen and (max-width: 560px) {
    background-size: 75%, auto;
  }

  @media screen and (max-width: 500px) {
    background-image: none;
  }
`;

export const HeroBody = styled.div`
  margin-top: 2rem;
  h1 {
    font-size: 4.8rem;
    font-weight: 800;
    letter-spacing: 0.1rem;
    color: #ebedf0;
  }
  p {
    margin-top: 6rem;
    margin-bottom: 1rem;
    width: 41%;
    font-size: 1.6rem;
    line-height: 2.6rem;
    color: #ebedf0;
    animation: moveToTop 1s ease-out;
  }

  @keyframes moveToTop {
    0% {
      opacity: 0;
      transform: translateY(3rem);
    }
    100% {
      opacity: 1;
      transform: translate(0);
    }
  }

  @media screen and (max-width: 1100px) {
    p {
      width: 70%;
    }
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 4.5rem;
    }
  }

  @media screen and (max-width: 680px) {
    p {
      width: 90%;
    }
  }

  @media screen and (max-width: 500px) {
    h1 {
      font-size: 4.4rem;
    }
    p {
      margin-top: 1rem;
      width: 100%;
      font-size: 1.4rem;
    }
  }
`;

export const HeroButton = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2.4rem;
  margin-top: 8rem;
  h4 {
    font-size: 1.4rem;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: #f9fafb;
  }

  @media screen and (max-width: 500px) {
    justify-content: center;
    margin-top: 2rem;
  }
`;

export const HeroIntro = styled.p`
  margin-top: 4rem;
  margin-bottom: 2.5rem;
  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;
  color: var(--whiteColor);
  text-align: center;
`;

export const LogoSection = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  img {
    opacity: 0.5;
    height: ${(props) => (props.introsection ? 'inherit' : '40px')};
    margin: ${(props) => (props.introsection ? '20px' : '15px 10px')};
  }
`;
