import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #f4f5f8;
  padding-top: 10rem;
  color: #212529;

  @media screen and (max-width: 768px) {
    padding-top: 5rem;
  }
`;
export const DescContainer = styled.div`
  display: flex;
  height: 42rem;
  margin: 0 10%;
  z-index: 0;

  @media screen and (max-width: 1205px) {
    margin: 0 5%;
  }

  @media screen and (max-width: 768px) {
    margin: 0;
  }

  .content__backgroundImage {
    background-image: url('https://boostylabs.com/img/partnership_bg.png');
    background-repeat: no-repeat;
    background-position: fit;
    background-size: 100% 100%;
    height: 100%;
    width: 100%;
    padding: 7rem 5rem;
    display: flex;
    position: relative;

    @media screen and (max-width: 1024px) {
      background-size: auto;
      border-radius: 2.5rem;
      padding: 7rem 3rem;
    }

    .content__left {
      display: flex;
      flex-direction: column;
      h4,
      p {
        width: 95%;
      }
      h4 {
        font-size: 2.8rem;
        font-weight: 400;
        color: #42465d;
        margin-bottom: 2rem;
        span {
          color: var(--primaryBlueColor);
        }
      }
      p {
        font-size: 1.7rem;
        color: #57677e;
        max-width: 47rem;
        margin-bottom: 2rem;
      }
      @media screen and (max-width: 550px) {
        h4 {
          span {
            display: block;
            margin-bottom: 1rem;
          }
        }
      }
      @media screen and (max-width: 800px) {
        h4,
        p {
          width: 100%;
        }
      }
    }
    .content__right {
      position: absolute;
      height: 45rem;
      width: 45rem;
      right: 0;
      top: 0;

      @media screen and (max-width: 1100px) {
        display: none;
      }
    }
  }
`;
export const RecommendedFor = styled.div`
  position: relative;
  background-color: red;
  margin-top: -10rem;
  width: 67rem;
  background-color: var(--primaryBlueColor);
  padding: 2rem 4rem;
  border-radius: 2.5rem;

  h4,
  p {
    margin-bottom: 2rem;
  }

  h4 {
    color: var(--whiteColor);
    font-size: 2.2rem;
    font-weight: 400;
  }
  p {
    display: inline-block;
    font-weight: 300;
    font-size: 1.7rem;
    color: var(--whiteColor);
  }

  @media screen and (max-width: 1024px) {
    padding: 2rem 3rem;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
