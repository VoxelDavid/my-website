import React, { Component } from 'react';

import style from './RoundImage.scss';

export default class RoundedImage extends Component {
  render() {
    return (
      <img src={this.props.src} className={style.base} />
    );
  }
}
