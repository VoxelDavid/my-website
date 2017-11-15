import React, { Component } from 'react';

import Container from 'components/layout/Container';
import ProjectTile from 'components/project/ProjectTile';

import projects from '../projects';

export default class Projects extends Component {
  getProjects() {
    return projects.map((project, index) =>
      <ProjectTile key={index} title={project.name} slug={project.slug}
        shortBio={project.description} image={project.images[0]} />
    );
  }
  render() {
    return (
      <Container>
        {this.getProjects()}
      </Container>
    );
  }
}
