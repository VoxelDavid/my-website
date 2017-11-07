import React, { Component } from 'react';
import RoundImage from './RoundImage';

import style from './MyPicture.scss';

export default class MyPicture extends Component {
  render() {
    return (
      <div className={style.base}>
        <RoundImage src={require('img/me.jpg')} />
      </div>
    );
  }
}
