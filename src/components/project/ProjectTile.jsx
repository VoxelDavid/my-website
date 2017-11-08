import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import styles from './ProjectTile.scss';
import ProjectPreview from './ProjectPreview';
import ActionButton from '../ActionButton';
import { Content } from '../layout';

export default class ProjectTile extends Component {
  // For right now we're just grabbing the first paragraph from the project's
  // description. Later we'll have a dedicated bio to display on the homepage
  // for selected work.
  getShortBio() {
    return this.props.shortBio.props.children[0];
  }

  render() {
    return (
      <Content>
        <div className={styles.base}>
          <div className={styles.bio}>
            <h2>{this.props.title}</h2>

            {this.getShortBio()}

            <Link to={`/projects/${this.props.slug}`}>
              <ActionButton>View Project</ActionButton>
            </Link>
          </div>

          <Link to={`/projects/${this.props.slug}`} className={styles.preview}>
            <ProjectPreview image={this.props.image} />
          </Link>
        </div>
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
