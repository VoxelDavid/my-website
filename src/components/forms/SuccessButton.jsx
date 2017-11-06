import React, { Component } from 'react';

import style from './SuccessButton.scss';

export default class SuccessButton extends Component {
  render() {
    if (this.props.visible) {
      return (
        <button disabled className={style.success}>
          Success! Your message has been sent, thank you! <i className="fa fa-heart" />
        </button>
      );
    } else {
      return null;
    }
  }
}
