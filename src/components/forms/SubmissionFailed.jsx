import React, { Component } from 'react';

import style from './SubmissionFailed.scss';

export default class SubmissionFailed extends Component {
  render() {
    if (this.props.visible) {
      return (
        <div>
          <p className={style.error}>Failed to communicate with the server, please try again later.</p>

          <p>If the issue persists, please message me on <a href="https://twitter.com/voxeldavid">Twitter</a> and I'll get to the bottom of it.</p>
        </div>
      );
    } else {
      return null;
    }
  }
}
