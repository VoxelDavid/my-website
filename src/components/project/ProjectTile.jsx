import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import styles from './ProjectTile.scss';
import { Content } from '../layout';

export default class ProjectTile extends Component {
  render() {
    return (
      <Content className={styles.base}>
        <Link to={`/projects/${this.props.slug}`}>
          <div className={styles.image} style={{ backgroundImage: `url(${this.props.image})` }} />
        </Link>
      </Content>
    );
  }
}

ProjectTile.propTypes = {
  title: PropTypes.string.isRequired,
  shortBio: PropTypes.element.isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
