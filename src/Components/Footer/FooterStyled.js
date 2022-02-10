import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${(props) =>
    props.homepage ? '#111111' : 'var(--whiteColor)'};

  .footer__main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 20px;
    padding: 40px 0;

    img {
      width: 160px;
    }
    .footer__copyright {
      width: 300px;
      font-size: 10px;
      color: hsla(0, 0%, 100%, 0.5);
      text-align: center;
    }
    .footer__phoneNumber {
      font-size: 16px;
      color: var(--whiteColor);
    }

    .footer__logos {
      display: flex;
      column-gap: 10px;
      img {
        width: 40px;
        height: 40px;
      }
    }
  }
`;

export const Links = styled.div`
  display: flex;
  column-gap: 20px;

  a {
    text-decoration: none !important;
    color: #ffffff;
  }

  a:hover {
    color: var(--primaryBlueColor);
  }

  h4 {
    font-size: 17px;
    text-transform: capitalize;
  }
`;

export const CopyRight = styled.div`
  color: hsla(0, 0%, 100%, 0.5);
  font-size: 13px;
`;
