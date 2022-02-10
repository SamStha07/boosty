import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: var(--whiteColor);
  padding: 12rem 0;
  color: #212529;
`;
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.h1`
  text-align: center;
  font-size: 4.2rem;
  margin-bottom: 1rem;
  font-weight: 600;

  @media screen and (max-width: 500px) {
    font-size: 3.2rem;
  }
`;
export const Description = styled.p`
  font-size: 2rem;
  max-width: 60rem;
  text-align: center;
  margin-bottom: 6rem;
  @media screen and (max-width: 500px) {
    font-size: 1.4rem;
  }
`;

export const CardComponent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  column-gap: 4rem;
  row-gap: 4rem;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(1, auto);
  }
`;

export const HaveAProjectInMind = styled.div`
  padding: 6rem;
  h1 {
    font-size: 4.8rem;
    max-width: 36rem;
  }
  button {
    height: 6.5rem;
    width: 16rem;
    align-items: center;
    background: #1a5dff;
    border-radius: 0.8rem;
    margin-top: 6rem;
    cursor: pointer;
    border: none;
    color: var(--whiteColor);
    font-size: 2rem;

    &:hover {
      background-color: var(--blueHoverColor);
    }
  }
  @media screen and (max-width: 1000px) {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 3%;
    padding-left: 3%;
    padding-right: 3%;

    h1 {
      font-size: 3.6rem;
    }

    button {
      margin-top: 0px;
      font-size: 2rem;
    }
  }

  @media screen and (max-width: 530px) {
    display: flex;
    flex-direction: column;

    h1 {
      text-align: center;
    }

    button {
      width: 100%;
      margin-top: 3rem;
    }
  }
`;
