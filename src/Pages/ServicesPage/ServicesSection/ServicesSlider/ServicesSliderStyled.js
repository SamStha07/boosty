import styled from 'styled-components';

export const Item = styled.div`
  width: 100%;
  height: 360px;
  position: relative;
  box-sizing: border-box;
  border-radius: 6px;
  border: 1px solid #ccc;
  padding: 40px;
  margin: 0 15px;

  h4 {
    font-size: 24px;
    color: #0e162c;
    margin-top: 30px;
    margin-bottom: 20px;
  }
  p {
    font-size: 14px;
    color: #404040;
  }

  button {
    cursor: pointer;
    position: absolute;
    bottom: 40px;
    border: none;
    background-color: transparent;
    color: var(--primaryBlueColor);
  }

  @media screen and (max-width: 500px) {
    padding: 30px 20px;
    height: 400px;
  }
`;
