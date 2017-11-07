import React, { Component } from 'react';
import { Link } from 'react-router';

import { Section, Content } from '../layout';
import ActionButton from '../ActionButton';
import MyPicture from '../MyPicture';

export default class Intro extends Component {
  render() {
    return (
      <Section>
        <Content reduced>
          <h2>I’m David Minnerly, a freelance 3D modeler and programmer. Currently working on <Link to="/projects/wild-revolvers">Wild Revolvers</Link> and the unreleased <Link to="/projects/super-gun-fight">Super Gun Fight</Link>.</h2>

          <Link to="/work"><ActionButton>View my work</ActionButton></Link>
        </Content>

        <Content aside><MyPicture /></Content>
      </Section>
    );
  }
}
