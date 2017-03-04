import React, { Component } from 'react';

import Portfolio from 'jsx/components/content/Portfolio';
import Intro from 'jsx/components/content/Intro';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Intro />
        <Portfolio />
      </div>
    );
  }
}
