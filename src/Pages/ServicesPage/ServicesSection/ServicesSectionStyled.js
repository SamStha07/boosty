import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 110px 0;

  .serviceSection__container {
    max-width: 1200px;
    margin: auto;
  }
`;
export const Title = styled.div`
  font-size: 48px;
  line-height: 40px;
  color: #17213e;
  margin-bottom: 100px;
  font-weight: 600;
`;

export const NextProject = styled.div`
  width: 575px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #c4c4c4;
  margin: 30px 0;
  padding-top: 20px;

  p {
    font-size: 18px;
  }

  button {
    padding: 12px 26px;
    background: #0042eb;
    border-radius: 8px;
    width: max-content;
    cursor: pointer;
    transition: all 0.2s ease;
    border: none;
    color: var(--whiteColor);
    font-size: 16px;
    font-weight: 600;

    &:hover {
      background-color: var(--blueHoverColor);
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;

    button {
      margin-top: 20px;
    }
  }
`;
