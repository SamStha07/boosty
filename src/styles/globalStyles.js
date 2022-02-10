import styled from 'styled-components';

export const Container = styled.div`
  max-width: 124rem;
  margin: auto;

  @media screen and (max-width: 1270px) {
    padding: 0 3%;
  }

  @media screen and (max-width: 575px) {
    padding: 0 1.8rem;
  }
`;
