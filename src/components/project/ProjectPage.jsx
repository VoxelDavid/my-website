import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Content, Title } from 'components/layout';
import Container from 'components/layout/Container';
import ProjectGallery from './ProjectGallery';

export default class ProjectPage extends Component {
  render() {
    return (
      <div>
        <Container>
          <Content>
            <Title>{this.props.name}</Title>

            <ProjectGallery images={this.props.images} />
          </Content>
        </Container>

        <Container>
          <Content reduced>
            <Title>Description</Title>

            {this.props.children}
          </Content>

          <Content aside>
            <Title>Details</Title>

            <ul>
              <li><i className="fa fa-clock-o" /> {this.props.released}</li>
              <li><i className="fa fa-tags" /> {this.props.tags.join(', ')}</li>
              { this.props.link  && <li><i className="fa fa-link" /> {this.props.link}</li> }
            </ul>
          </Content>
        </Container>
      </div>
    );
  }
}

ProjectPage.propTypes = {
  name: PropTypes.string.isRequired,
  released: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.string
  ]).isRequired,
  tags: PropTypes.array
};
