import React, { Component } from 'react';
import { Link } from 'react-router';

import MyPicture from '../MyPicture';
import Container from '../layout/Container';

export default class Intro extends Component {
  render() {
    return (
      <Container>
        <p className={styles.bio}>I’m David Minnerly, a freelance 3D modeler and programmer. Currently working on <Link to="/projects/wild-revolvers">Wild Revolvers</Link> and the unreleased <Link to="/projects/super-gun-fight">Super Gun Fight</Link>.</p>
        <MyPicture />
      </Container>
    );
  }
}
