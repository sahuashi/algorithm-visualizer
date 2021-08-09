import React, { Component } from 'react'
import Tooltip from '@material-ui/core/Tooltip';

export default class ElementBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: this.generateRandomColor()
        }
    }

    generateRandomColor = () => {
        return '#' + Math.round(this.props.height * 20).toString(16);
    }

    render() {
        let color = this.props.isSorted? "green" : this.state.color;
        return (
            <Tooltip title={this.props.height}>
                <div className="bar" style={{height: `${this.props.height}px`, background: `${color}`}}/>
            </Tooltip>
        )
    }
}
