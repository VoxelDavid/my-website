import React, { Component } from 'react';

import Portfolio from 'components/content/Portfolio';
import Intro from 'components/content/Intro';

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
