import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 3rem;
  width: 100%;
  padding-bottom: 100px;
  margin-top: 10rem;

  @media screen and (max-width: 550px) {
    gap: 1rem;
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const Content = styled.div`
  width: 100%;

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #626263;
    padding-bottom: 15px;
    margin: 0;
  }
`;
