import styled from 'styled-components';

export const Body = styled.div`
  display: flex;
  .designSection__left {
    display: flex;
    width: 720px;

    .designSection__areas {
      padding-left: 40px;

      .designSection__areaTitle {
        font-size: 24px;
        color: #000;
        margin-bottom: 15px;
      }

      .designSection__areaList {
        font-size: 20px;
        color: #313b5a;
        line-height: 165%;
        margin-bottom: 6px;
      }
    }
  }

  .designSection__right {
    width: 690px;
    padding-left: 50px;
    h4 {
      font-size: 24px;
      color: #000;
      margin-bottom: 15px;
      margin-top: 60px;
    }
    button {
      padding: 12px 26px;
      background: #0042eb;
      border-radius: 8px;
      width: max-content;
      cursor: pointer;
      transition: all 0.2s ease;
      font-size: 20px;
      font-weight: 600;
      color: #fff;
      border: none;

      &:hover {
        background-color: var(--blueHoverColor);
      }
    }
  }
  @media screen and (max-width: 1500px) {
    .designSection__left,
    .designSection__right {
      width: 50%;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    .designSection__left,
    .designSection__right {
      width: 100%;
      padding-left: 0;
    }

    .designSection__left {
      margin-top: 30px;
      .designSection__areas {
        padding-left: 40px;
      }
    }

    .designSection__right {
      display: flex;
      flex-direction: column;
      align-items: center;
      h4 {
        text-align: center;
      }
    }
  }

  @media screen and (max-width: 500px) {
    .designSection__left {
      img {
        display: none;
      }
      .designSection__areas {
        padding-left: 0;
      }
    }
  }
`;
