import React, { Component } from 'react'

export default class ElementBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: this.generateRandomColor()
        }
    }

    generateRandomColor = () => {
        return '#' + Math.round(Math.random() * 0xffffff).toString(16);
    }

    render() {
        let color = this.props.isSorted? "green" : this.state.color;
        return (
            <div className="bar" style={{height: `${this.props.height}px`, borderLeftColor: `${color}`}}/>
        )
    }
}
