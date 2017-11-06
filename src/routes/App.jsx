import React, { Component } from 'react';

import Footer from 'components/Footer';
import Header from 'components/Header';
import Wrapper from 'components/Wrapper';

export default class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />

        {this.props.children}

        <Footer />
      </Wrapper>
    );
  }
}
