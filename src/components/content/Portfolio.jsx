import React, { Component } from 'react';

import { Section, Content, Title } from '../layout';
import ProjectTile from '../project/ProjectTile';
import projects from 'projects';

export default class Portfolio extends Component {
  getProjectTiles() {
    return projects.map((project, index) =>
      <ProjectTile key={index} title={project.name} slug={project.slug}
        shortBio={project.description} image={project.images[0]} />
    );
  }

  render() {
    const tiles = this.getProjectTiles();

    return (
      <Section>
        <Content>
          <Title>Selected work</Title>
        </Content>

        {tiles}
      </Section>
    );
  }
}
