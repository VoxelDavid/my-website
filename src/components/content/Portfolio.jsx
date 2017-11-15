import React, { Component } from 'react';

import { Content, Title } from '../layout';
import Container from '../layout/Container';
import ProjectTile from '../project/ProjectTile';
import projects from 'projects';

function isOdd(n) {
  return n % 2;
}

export default class Portfolio extends Component {
  getProjectTiles() {
    return projects.map((project, index) =>
      <ProjectTile key={index} title={project.name} slug={project.slug}
        shortBio={project.description} image={project.images[0]}
        inverted={isOdd(index)} />
    );
  }

  render() {
    return (
      <Container>
        <Content>
          <Title>Selected work</Title>
        </Content>

        {this.getProjectTiles()}
      </Container>
    );
  }
}
