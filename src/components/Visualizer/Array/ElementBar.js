import React, { Component } from 'react'

export default class ElementBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSorted: false,
            color: this.generateRandomColor()
        }
    }

    generateRandomColor = () => {
        return '#' + Math.round(Math.random() * 0xffffff).toString(16);
    }

    render() {
        return (
            <div className="bar" style={{height: `${this.props.height}px`, borderLeftColor: `${this.state.color}`}}/>
        )
    }
}
