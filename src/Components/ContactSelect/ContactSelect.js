import React from 'react';
import { StyledSelect } from './ContactStyled';
import { selectOptions } from './Data';

const ContactSelect = ({ setInput, contactSection, input, contactPage }) => {
  const handleChange = (e) => setInput({ value: e.value, label: e.label });

  return (
    <>
      {contactSection && (
        <StyledSelect
          classNamePrefix='Select'
          value={input}
          options={selectOptions}
          onChange={handleChange}
          contactSection
        />
      )}
      {contactPage && (
        <StyledSelect
          classNamePrefix='Select'
          value={input}
          options={selectOptions}
          onChange={handleChange}
          contactPage
        />
      )}
    </>
  );
};

export default ContactSelect;
