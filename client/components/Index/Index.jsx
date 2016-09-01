import React, { Component } from 'react';
import Multicheckbox from "../Multicheckbox/Multicheckbox"

class IndexComponent extends Component {
  render() {
    if (this.props.items.length === 0) {
      return (
        <p ref="empty">Array is empty.</p>
      );
    }

    return (
      <Multicheckbox items={this.props.items}/>
    );
  }
}

IndexComponent.defaultProps = {
  items: []
};

export default IndexComponent;
