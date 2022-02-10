import styled from 'styled-components';
import Select from 'react-select';

export const StyledSelect = styled(Select)`
  .Select__control {
    height: 60px;
    width: 100%;
    border: 1px solid #d1d1d1;
    border-radius: 0;
    cursor: pointer;
    border-radius: 50px;
  }

  .Select__control:hover,
  .Select__control:active {
    border: 1px solid #1a5dff;
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__dropdown-indicator {
    padding-right: 20px;
  }

  .Select__menu {
    color: #3c3d3e;
  }
  .Select__menu-list {
    font-size: 16px;
  }
  .Select__option {
    cursor: pointer;
  }
  .Select__single-value {
    padding-left: 20px;
    font-size: 20px;
  }
  .Select__input {
    color: transparent;
  }
`;
