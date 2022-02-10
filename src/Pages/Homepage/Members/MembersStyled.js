import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: var(--whiteColor);
  padding: 16.5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    padding: 10rem 0;
  }
  @media screen and (max-width: 768px) {
    padding: 8rem 0;
  }
`;
export const Header = styled.div`
  font-size: 4.2rem;
  text-align: center;
  font-weight: 600;
  margin-bottom: 6rem;
`;
