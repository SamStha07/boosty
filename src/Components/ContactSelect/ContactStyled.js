import styled from 'styled-components';
import Select from 'react-select';

export const StyledSelect = styled(Select)`
  .Select__control {
    height: 40px;
    width: 100%;
    border: none;
    border-radius: 0;
    cursor: pointer;
    border-radius: 50px;
    color: ${(props) =>
      props.contactSection ? '#fff' : props.contactPage && '#000'};
    background-color: transparent;
  }

  .Select__control:hover,
  .Select__control:active {
    border: none;
    box-shadow: none;
  }

  .Select__control--is-focused,
  .Select__control--menu-is-open,
  .css-yk16xz-control {
    border: none;
    box-shadow: none;
  }

  .Select__indicator-separator {
    display: none;
  }
  .Select__value-container {
    height: inherit;
  }

  .Select__menu {
    color: #3c3d3e;
  }
  .Select__menu-list {
    font-size: 16px;
    text-transform: uppercase;
  }
  .Select__option {
    cursor: pointer;
  }
  .Select__single-value {
    font-size: 20px;
    padding-left: 5px;
    color: ${(props) =>
      props.contactSection ? '#fff' : props.contactPage && '#000'};
  }
  .Select__input {
    color: transparent;
  }
`;
