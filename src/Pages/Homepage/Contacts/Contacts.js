import React from 'react';
import { Wrapper, Left, Right, Flex } from './ContactsStyled';
import Contact from '../../../Components/Contact/Contact';
import { Container } from '../../../styles/globalStyles';

const Contacts = () => {
  return (
    <Wrapper id='contact'>
      <Container>
        <Flex>
          <Left>
            <h1>Contacts</h1>
            <h4>Intrested in partnership?</h4>
            <p>growthlab@gmail.com</p>
          </Left>
          <Right>
            <Contact contactSection />
          </Right>
        </Flex>
      </Container>
    </Wrapper>
  );
};

export default Contacts;
