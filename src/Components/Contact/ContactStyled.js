import styled from 'styled-components';

export const Wrapper = styled.div`
  @media screen and (max-width: 500px) {
    border-top-right-radius: 2.5rem;
    border-top-left-radius: 2.5rem;
  }
`;

export const FormDiv = styled.div`
  padding-top: 2rem;
  width: 50rem;
  label {
    color: ${(props) => (props.contactSection ? '#fff' : '#000')};
    font-size: 1.4rem;
    margin: 0 0 0 1.6rem;
    user-select: none;
  }
  input {
    width: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    border-bottom: ${(props) =>
      props.contactSection ? '1px solid #fff' : '1px solid #838e9d'};
    font-size: 1.6rem;
    line-height: 2.8rem;
    color: ${(props) => (props.contactSection ? '#fff' : '#000')};
    padding: 0.5rem 0 0.5rem 1.8rem;
    transition: all 0.2s ease;
    margin-bottom: 2.5rem;
  }
  input:focus {
    outline: none;
    border-bottom: ${(props) =>
      props.contactSection ? '0.2rem solid #fff' : '0.2rem solid black'};
  }

  .react-select-container {
    width: 100%;
    font-size: 1.8rem;
    color: ${(props) => (props.contactSection ? '#fff' : '#212529')};
    border: none;
    outline: none;
    box-shadow: none;
    /* padding-left: 2rem !important; */
    margin-top: 1.5rem;
    text-transform: capitalize;
    cursor: pointer;
    background-color: transparent;

    .react-select__control {
      background-color: transparent !important;

      .react-select__indicators {
        display: none;
      }
    }
  }

  hr {
    margin-top: 2.5rem;
  }

  input[type='file'] {
    display: none;
  }
  img {
    width: 3.5rem;
  }
  label {
    padding-left: 0;
  }
  @media screen and (max-width: 540px) {
    width: 100%;
  }
`;

export const SendFlex = styled.div`
  display: flex;
  margin-top: 4rem;
  width: 100%;
  justify-content: space-between;
`;
export const SendButton = styled.div`
  display: flex;
  column-gap: 2rem;
  align-items: center;
  h4 {
    font-size: 1.4rem;
    text-transform: uppercase;
    letter-spacing: 0.08rem;
    color: ${(props) => (props.contactSection ? '#fff' : '#000')};
    margin-bottom: 0;
    font-weight: 800;
  }
`;
