import styled from 'styled-components';

export const Card = styled.div`
  max-width: 560px;

  img {
    width: 100%;
    max-height: 480px;
    border-radius: 18px;
  }

  h4 {
    font-size: clamp(1.6rem, 1vw + 1rem, 2rem);
    color: #364350;
    margin-top: 20px;
  }

  p {
    font-size: clamp(2rem, 2vw + 1rem, 2.6rem);
    color: #364350;
    margin-top: 10px;
  }
`;
