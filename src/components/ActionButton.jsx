
// Turn the contact button into an ActionButton

import React, { Component } from 'react';
import classNames from 'classnames';

import style from './ActionButton.scss';

export default class ActionButton extends Component {
  render() {
    return (
      <span className={style.base}>
        {this.props.children} <i className={classNames(style.icon, 'fa fa-chevron-right')} aria-hidden='true'></i>
      </span>
    );
  }
}
