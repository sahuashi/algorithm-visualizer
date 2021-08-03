import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

export default class Canvas extends Component {
  render() {
    return (
      <Box p={5}>
        <Paper elevation={3} variant="outlined">
          <h2>Canvas</h2>
        </Paper>
      </Box>
    );
  }
}
