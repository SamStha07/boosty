import styled from 'styled-components';

export const ProjectRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 70px;
  margin-bottom: 100px;

  @media screen and (max-width: 750px) {
    grid-template-columns: repeat(1, auto);
  }
`;
