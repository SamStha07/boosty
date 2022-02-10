import styled from 'styled-components';

export const Nav = styled.div`
  width: 100%;
  /* height: 9rem; */
  padding: 0.8rem;
  padding: 2rem 0;
  position: fixed;
  background-color: white;
  z-index: 100;
  animation: moveFromTop 0.5s ease-in-out;

  @keyframes moveFromTop {
    0% {
      opacity: 0;
      transform: translateY(-10rem);
    }
    100% {
      opacity: 1;
      transform: translate(0);
    }
  }

  @media screen and (max-width: 990px) {
    background-color: ${({ open }) => (open ? '#edeef1' : 'white')};
  }
`;
export const NavContainer = styled.div`
  position: relative;
  max-width: 124rem;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.6rem;

  @media screen and (max-width: 990px) {
    padding: 0 10%;
  }

  @media screen and (max-width: 575px) {
    padding: 0 1.8rem;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  column-gap: 4rem;
  color: rgba(0, 0, 0, 0.55);
  align-items: center;

  a {
    text-decoration: none !important;
    color: rgba(0, 0, 0, 0.55);

    &.active {
      color: #0d6efd;
    }
  }

  @media screen and (max-width: 990px) {
    display: none;
  }
`;
export const List = styled.p`
  font-size: 1.6rem;
  cursor: pointer;
  transition: 0.3s all ease-in-out;

  &:hover {
    color: #0d6efd;
  }
`;
export const Button = styled.button`
  width: 15rem;
  height: 5rem;
  display: flex;
  border-radius: 4.2rem;
  padding: 0 2.5rem;
  border: none;
  align-items: center;
  background-color: ${(props) =>
    props.header ? '#1a5dff' : 'var(--whiteColor)'};
  font-size: 1.8rem;
  color: ${(props) => (props.header ? 'var(--whiteColor)' : '#111111')};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.header && 'var(--blueHoverColor)'};
    opacity: ${(props) => props.footer && '0.8'};
    transition: all 0.3s ease-in-out;
  }
`;

export const Menu = styled.div`
  display: none;
  position: relative;

  @media screen and (max-width: 990px) {
    display: block;
    cursor: pointer;
  }
`;

export const HamburgerLine = styled.div`
  display: block;
  position: relative;
  background-color: ${(props) => (props.home ? '#fff' : 'black')};
  width: 2rem;
  height: 0.2rem;
  margin: 1rem 0;
`;
export const CloseButton = styled.div`
  /* display: block; */
  margin-right: 1.2rem;
  margin-top: 0.2rem;
  height: 3.2rem;
  opacity: 1;
  background-color: transparent;
  cursor: pointer;

  &:before,
  &:after {
    position: absolute;
    content: ' ';
    height: 2.5rem;
    width: 0.2rem;
    background-color: #333;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;
