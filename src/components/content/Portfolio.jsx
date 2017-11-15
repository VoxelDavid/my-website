import React, { Component } from 'react';

import Container from '../layout/Container';
import ProjectTile from '../project/ProjectTile';

function isOdd(n) {
  return n % 2;
}

const selectedWork = [
  // These are displayed in order.
  require('projects/apartment').default,
  require('projects/echo-ridge').default,
  require('projects/mirage-isle').default
];

export default class Portfolio extends Component {
  getProjectTiles() {
    return selectedWork.map((project, index) =>
      <ProjectTile key={index} title={project.name} slug={project.slug}
        shortBio={project.description} image={project.images[0]}
        inverted={isOdd(index)} />
    );
  }

  render() {
    return (
      <Container>
        {this.getProjectTiles()}
      </Container>
    );
  }
}
