import React, { Component } from 'react';

import { Content, Title } from 'components/layout';
import Container from 'components/layout/Container';
import ContactForm from 'components/ContactForm';

export default class About extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Title>Contact</Title>

          <p>Let's talk! Feel free to message me with anything on your mind, be it a project, a question, or just to say hi. Your message will be sent straight to my inbox, and I'll get back to you at the Email address specified as soon as I get the chance.</p>

          <ContactForm />
        </Content>
      </Container>
    );
  }
}
