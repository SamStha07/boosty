import styled from 'styled-components';

export const HeaderModelWrapper = styled.div`
  background-color: #edeef1;
  width: 100%;
  height: 100vh;
  position: fixed;
  overflow: hidden;
  z-index: 100;
  padding-top: 2rem;
`;

export const HeaderModelContainer = styled.div`
  max-width: 124rem;
  margin: auto;
  @media screen and (max-width: 1270px) {
    padding: 0 3%;
  }
  @media screen and (max-width: 990px) {
    padding: 0 10%;
  }
  @media screen and (max-width: 575px) {
    padding: 0 1.8rem;
  }
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2.8rem;
`;

export const MenuOpenData = styled.div`
  display: flex;
  column-gap: 15rem;

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;
export const Left = styled.div`
  a {
    text-decoration: none !important;
  }
  a.active {
    background-color: #0d6efd !important;
    border: rebeccapurple;
  }
`;

export const Title = styled.h4`
  font-size: 1.2rem;
  color: #3a3b3b;
  opacity: 0.4;
  margin-bottom: 2.5rem;
`;

export const MenuList = styled.div`
  font-size: 3rem;
  font-weight: 600;
  color: #000;
  line-height: 4.6rem;
  text-decoration: none;
  margin-bottom: 2rem;
  cursor: pointer;
  transition: 0.3s all ease-in-out;

  &.active {
    color: #1a5dff !important;
  }

  &:hover {
    color: #1743d0;
  }
`;

export const Right = styled.div`
  h4 {
    font-size: 12px;
    color: #4d4d4d;
    line-height: 20px;
  }
  p {
    font-size: 12px;
    color: #4d4d4d;
    line-height: 15px;
  }
`;
