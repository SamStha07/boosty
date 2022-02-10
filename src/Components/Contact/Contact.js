import { useState } from 'react';
import { Wrapper, FormDiv, SendFlex, SendButton } from './ContactStyled';
import RoundButtonArrowInside from '../RoundButtonArrowInside/RoundButtonArrowInside';
import attachWhite from '../../assests/icons/contact/attachWhite.svg';
import attachBlack from '../../assests/icons/contact/scratcher.jpg';
import ContactSelect from '../ContactSelect/ContactSelect';
import { selectOptions } from '../ContactSelect/Data';

const Contact = ({ contactSection, contactPage }) => {
  const [input, setInput] = useState({
    value: selectOptions[0]?.value || '',
    label: selectOptions[0]?.label || '',
  });

  const placeholderName = () =>
    input.value === 'phone'
      ? 'Enter your phone number'
      : input.value === 'telegram'
      ? 'Enter your telegram'
      : input.value === 'whatsapp' && 'Enter your Whatsapp';

  const form = () => (
    <form action=''>
      <label htmlFor='email'>Your E-mail</label>
      <br />
      <input type='email' name='email' required />
      <br />
      <label htmlFor='fullname'>Your full name</label>
      <br />
      <input type='text' name='fullname' required />
      <br />
      <label htmlFor='company'>Company/Organization</label>
      <br />
      <input type='text' name='company' required />
      <br />
      <label htmlFor='message'>How can we help you?</label>
      <br />
      <input type='text' name='message' required />
      <br />
      <label htmlFor='contact'>How would you like us to contact you?</label>
      <br />

      {/* FOR SELECT FIELD */}
      {contactPage && (
        <ContactSelect input={input} setInput={setInput} contactPage />
      )}
      {contactSection && (
        <ContactSelect input={input} setInput={setInput} contactSection />
      )}

      {input.value !== 'email' && (
        <input
          placeholder={placeholderName()}
          type='text'
          id='message'
          name='message'
          required
        />
      )}
      {/* END SELECT FIELD */}
      <br />
      {/* <p>Capcha</p>
          <hr /> */}
      <SendFlex>
        <div>
          <input type='file' id='file' />
          <label htmlFor='file'>
            {contactSection ? (
              <img src={attachWhite} alt='attach-icon' />
            ) : (
              <img src={attachBlack} alt='attach-icon' />
            )}
          </label>
        </div>

        {contactSection ? (
          <SendButton contactSection>
            <h4>send</h4>
            <RoundButtonArrowInside contact />
          </SendButton>
        ) : (
          <SendButton>
            <h4>send</h4>
            <RoundButtonArrowInside contact />
          </SendButton>
        )}
      </SendFlex>
    </form>
  );
  return (
    <Wrapper>
      {contactSection ? (
        <FormDiv contactSection>{form()}</FormDiv>
      ) : (
        <FormDiv>{form()}</FormDiv>
      )}
    </Wrapper>
  );
};

export default Contact;
