import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

export default class Canvas extends Component {
  constructor(props) {
    super(props);
    this.props.array.forEach((el) => console.log("Canvas: " + el));
  }
  render() {
    return (
      <Box p={5}>
        <Paper elevation={3} variant="outlined">
          {this.props.array.map((number, index) => (
            <div key={index} className="bar" style={{height: `${number}px`}}/>
          ))}
        </Paper>
      </Box>
    );
  }
}
