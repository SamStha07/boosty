import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 3%;
  overflow-y: hidden;
  @media screen and (max-width: 575px) {
    padding: 50px 1.8rem;
  }
  background-color: ${(props) => (props.design ? '#f4f5f8' : '#fff')};
`;
export const HeaderWrapper = styled.div`
  display: flex;
  align-items: flex-start;

  .servicesDesc__title {
    display: flex;
    align-items: center;
    width: 720px;

    .servicesDesc__titleNumber {
      font-size: 17px;
      color: #788ab6;
    }

    h1 {
      padding-left: 44px;
      font-size: 48px;
      color: #17213e;
    }
  }
  .servicesDesc__titleIntro {
    font-size: 23px;
    color: #313b5a;
    line-height: 165%;
    padding-left: 50px;
    width: 690px;
  }

  @media screen and (max-width: 1500px) {
    .servicesDesc__title {
      width: 50%;
    }
    .servicesDesc__titleIntro {
      width: 50%;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    .servicesDesc__title,
    .servicesDesc__titleIntro {
      width: 100%;
    }

    .servicesDesc__titleIntro {
      padding-left: 0;
      margin-top: 20px;
    }
  }

  @media screen and (max-width: 500px) {
    .servicesDesc__title {
      h1 {
        padding-left: 40px;
        font-size: 42px;
        color: #17213e;
      }
    }
  }
`;

export const Body = styled.div`
  display: flex;

  .servicesDesc__body-left {
    display: flex;
    width: 720px;

    .servicesDesc__body-imageNull{
      width: 150px;
    }

    .servicesDesc__body {
      padding-left: 40px;
      h4 {
        font-size: 24px;
        color: #17213e;
        margin-bottom: 25px;
      }
      p {
        font-size: 20px;
        color: #313b5a;
        line-height: 165%;
        margin-bottom: 25px;
      }
    }
  }

  .servicesDesc__body-right {
    width: 690px;
    display: flex;
    justify-content: center;

    img {
      width: 400px;
      height: 400px;
    }
  }
  @media screen and (max-width: 1500px) {
    .servicesDesc__body-left,
    .servicesDesc__body-right {
      width: 50%;
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;

    .servicesDesc__body-left {
      width: 100%;
      margin-top: 20px;
      .servicesDesc__body-imageNull{
      width: 0;
    }
    .servicesDesc__body.null{
      padding-left: 0;
    }
    }
    .servicesDesc__body-right {
      img {
        display: none;
      }
    }
  }
  @media screen and (max-width: 500px) {
    .servicesDesc__body-left {
      img {
        display: none;
      }
      .servicesDesc__body {
      padding-left: 0;
    }
  }
`;
