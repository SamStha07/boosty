import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #fff;
  padding: 50px 0;
`;

export const Title = styled.h1`
  font-size: 42px;
  color: #17213e;
  margin-bottom: 40px;
  padding: 0 3%;
`;
export const Item = styled.div`
  position: relative;
  width: 400px;
  height: 500px;
  background-color: #f4f5f8;
  margin: 0 10px;
  border-radius: 16px;
  background-repeat: no-repeat;
  background-size: contain;
  padding: 50px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .products__container {
    position: absolute;
    bottom: 0;
    img {
      width: 100%;
    }
  }
  .products__platform {
    font-size: 16px;
    color: #7289a3;
    margin-bottom: 10px;
  }

  .products__projectName {
    font-size: 28px;
    color: #17213e;
  }
`;
