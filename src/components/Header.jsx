import React, { Component } from 'react';

import Container from './layout/Container';
import PrimaryNav from './navigation/PrimaryNav';

export default class Header extends Component {
  render() {
    return (
      <Container>
        <PrimaryNav />
      </Container>
    );
  }
}
