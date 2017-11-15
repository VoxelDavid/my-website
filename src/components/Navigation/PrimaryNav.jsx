/**
 * This is the navigation we use at the top of the page.
 *
 * It's the user's primary source of navigating between pages.
 */

import React, { Component } from 'react';

import styles from './PrimaryNav.scss';
import NavLink from './NavLink';
import NavGroup from './NavGroup';

export default class PrimaryNav extends Component {
  render() {
    return (
      <nav className={styles.primaryNav}>
        <NavGroup className={styles.group}>
          <NavLink onlyActiveOnIndex={true} to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </NavGroup>
      </nav>
    );
  }
}
