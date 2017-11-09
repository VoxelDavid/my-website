import React from 'react';
import classNames from 'classnames';

import styles from './Container.scss';

export default function Container(props) {
  return (
    <div className={classNames(styles.base, props.className)}>
      {props.children}
    </div>
  );
}
