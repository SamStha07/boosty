import styled from 'styled-components';

export const LetTalk = styled.div`
  background: green;
  background-color: #f0f2f7;
  a {
    text-decoration: none;
  }

  h1 {
    text-align: center;
    align-items: center;
    padding: 15rem 0;
    cursor: pointer;
    font-size: 72px;
    color: #323c53;
    text-decoration: none;
  }
  & :hover {
    color: #2044a6;
    text-decoration: underline;
    background-color: #e3edf8;
  }
  @media screen and (max-width: 500px) {
    h1 {
      padding: 10rem 0;
      font-size: 40px;
    }
  }
`;
