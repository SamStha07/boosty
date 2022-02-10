import React from 'react';
import { StyledSelect } from './ProjectSelectStyled';

const ProjectSelect = ({ selectOptions, setValue, value }) => {
  const handleChange = (e) => setValue({ value: e.value, label: e.label });

  return (
    <StyledSelect
      classNamePrefix='Select'
      options={selectOptions}
      value={value}
      onChange={handleChange}
    />
  );
};

export default ProjectSelect;
