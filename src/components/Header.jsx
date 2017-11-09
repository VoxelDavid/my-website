import React, { Component } from 'react';
import { Link } from 'react-router';

import nav from './navigation/NavLink.scss';
import styles from './Header.scss';
import Container from './layout/Container';
import PrimaryNav from './navigation/PrimaryNav';

export default class Header extends Component {
  render() {
    return (
      <Container className={styles.base}>
        <div className={styles.name}>
          <Link to="/" className={nav.link}>David Minnerly</Link>
        </div>

        <div className={styles.nav}>
          <PrimaryNav />
        </div>
      </Container>
    );
  }
}
