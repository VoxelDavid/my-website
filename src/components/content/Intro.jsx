import React, { Component } from 'react';
import { Link } from 'react-router';

import Container from '../layout/Container';
import styles from './Intro.scss';

export default class Intro extends Component {
  render() {
    return (
      <div className={styles.base}>
        <Container>
          <div className={styles.intro}>
            <p className={styles.bio}>I'm David Minnerly, a freelance 3D modeler and programmer living in New York. Currently working on <Link to="/projects/wild-revolvers">Wild Revolvers</Link> and the unreleased <Link to="/projects/super-gun-fight">Super Gun Fight</Link>.</p>
          </div>
        </Container>
      </div>
    );
  }
}
