import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 5rem;
  width: 100%;
  /* min-height: 450px; */
  min-height: 34rem;
  border: 1px solid #e4e5e8;
  border-radius: 0.6rem;
  @media screen and (max-width: 600px) {
    padding: 12% 6%;
  }
`;
export const Icon = styled.div`
  margin-bottom: 4rem;
`;
export const Title = styled.div`
  font-size: 2.4rem;
  line-height: 2.8rem;
  font-weight: 600;
  margin-bottom: 3rem;
`;
export const Description = styled.div`
  font-size: 1.4rem;
  line-height: 2.6rem;
  display: block;
`;
