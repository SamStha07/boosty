import styled from 'styled-components';

export const Button = styled.div`
  border: none;
  width: 5.2rem;
  height: 5.2rem;
  border-radius: 50%;
  background-color: ${(props) =>
    props.herosection
      ? 'var(--whiteColor)'
      : props.memberLeftArrow
      ? 'var(--whiteColor)'
      : props.memberRightArrow
      ? 'var(--blueHoverColor)'
      : props.contact && 'var(--primaryBlueColor)'};

  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.herosection && 'var(--blueHoverColor)'};
    transition: all 0.2s ease-in-out;
  }

  svg {
    height: 5.2rem;
    width: 5.2rem;
    padding: 1rem;
    color: ${(props) =>
      props.herosection
        ? 'var(--primaryBlueColor)'
        : props.memberLeftArrow
        ? 'var(--primaryBlueColor)'
        : props.memberRightArrow | props.contact && 'var(--whiteColor)'};
    &:hover {
      color: ${(props) =>
        props.herosection ? '#fff' : props.memberLeftArrow && 'none'};
      transition: all 0.2s ease-in-out;
    }
  }
`;
