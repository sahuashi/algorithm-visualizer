import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import ElementBar from "./ElementBar";

export default class Canvas extends Component {
  constructor(props) {
    super(props);
    this.props.array.forEach((el) => console.log("Canvas: " + el));
  }
  render() {
    return (
      <Box p={5} mx='auto' width={1/3}>
        <Paper elevation={0} >
          {this.props.array.map((number, index) => (
            <ElementBar key={number+(Math.random() * 5)} height={number}/>
          ))}
        </Paper>
      </Box>
    );
  }
}
