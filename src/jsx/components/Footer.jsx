import React, { Component } from 'react';

import styles from './Footer.scss';
import Copyright from './content/Copyright';

export default class Footer extends Component {
  render() {
    return (
      <footer className={styles.base}>
        <ul className={styles.nav}>
          <li><Copyright /></li>
        </ul>
      </footer>
    );
  }
}
