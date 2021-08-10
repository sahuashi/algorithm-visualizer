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
        var red = (this.props.height % 50) ;
        var green = (this.props.height % 150) ;
        var blue = (this.props.height % 250) ;
        var color = `rgb(${red}, ${green}, ${blue})`;
        return color;
    }

    render() {
        return (
            <Tooltip title={this.props.height}>
                <div className="bar" style={{height: `${this.props.height}px`, background: `${this.state.color}`}}/>
            </Tooltip>
        )
    }
}
