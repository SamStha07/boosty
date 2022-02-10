import styled from 'styled-components';
import image from '../../../../assests/images/servicesPage/verticalImage.png';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 3%;
  padding-bottom: 110px;
  background-color: #fff;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  @media screen and (max-width: 500px) {
    padding: 0 1.8rem;
  }
`;

export const Left = styled.div`
  width: 720px;

  h1 {
    font-size: 48px;
    color: #313b5a;
    margin-bottom: 60px;
  }

  .body__main {
    background-image: url(${image});
    background-repeat: no-repeat;
    padding-top: 30px;
    padding-left: 50px;
    padding-bottom: 30px;

    div {
      margin-bottom: 30px;
      h4 {
        font-size: 24px;
        color: #17213e;
        margin-bottom: 20px;
      }
      p {
        margin-bottom: 0;
        color: #4d5775;
        font-size: 23px;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    h1 {
      font-size: 38px;
    }
  }

  @media screen and (max-width: 1500px) {
    width: 50%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (max-width: 530px) {
    .body__main {
      background-image: none;
      padding: 0;

      div {
        h4 {
          font-size: 20px;
        }
        p {
          font-size: 19px;
        }
      }
    }
  }
`;
export const Right = styled.div`
  width: 690px;
  padding: 60px 40px;

  .right__top {
    font-size: 23px;
    color: #313b5a;
    line-height: 165%;
  }

  .right__bottom {
    font-size: 20px;
    color: #313b5a;
    line-height: 165%;
    margin-bottom: 25px;
    margin-top: 100px;
  }
  .right__btn {
    padding: 16px 26px;
    background: #1a5dff;
    border-radius: 8px;
    width: max-content;
    cursor: pointer;
    transition: all 0.2s ease;
    border: none;
    font-size: 20px;
    color: #fff;
    font-weight: 600;

    &:hover {
      background: var(--blueHoverColor);
    }
  }
  @media screen and (max-width: 1500px) {
    width: 50%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .right__top,
    .right__bottom {
      text-align: center;
    }
  }
  @media screen and (max-width: 530px) {
    padding-left: 0;
    padding-right: 0;

    .right__bottom {
      margin-top: 50px;
    }
    .right__top {
      font-size: 20px;
    }
  }
`;
