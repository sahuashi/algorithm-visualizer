import React, { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';

export default class ElementBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.generateRandomColor(),
    };
  }

    generateRandomColor = () => {
      const red = (this.props.height % 50);
      const green = (this.props.height % 150);
      const blue = (this.props.height % 250);
      const color = `rgb(${red}, ${green}, ${blue})`;
      return color;
    }

    render() {
      return (
        <Tooltip title={this.props.height}>
          <div className="bar" style={{ height: `${this.props.height}px`, background: `${this.state.color}` }} />
        </Tooltip>
      );
    }
}
