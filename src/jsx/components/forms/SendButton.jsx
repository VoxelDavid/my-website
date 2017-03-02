import React, { Component } from 'react';

export default class SendButton extends Component {
  constructor(props) {
    super(props);

    this.getIconClasses = this.getIconClasses.bind(this);
  }

  getIconClasses() {
    if (this.props.processing) {
      return 'fa fa-cog fa-spin';
    } else {
      return 'fa fa-paper-plane-o';
    }
  }

  render() {
    if (this.props.visible) {
      return (
        <button disabled={this.props.processing} type="submit">
          Send <i className={this.getIconClasses()} />
        </button>
      );
    } else {
      return null;
    }
  }
}
