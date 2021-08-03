import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

export default class SettingsBar extends Component {
  render() {
    return (
      <Box p={5}>
        <Paper elevation={3} variant="outlined">
        <Button variant="contained" color="primary" onClick={this.props.randomize}>
          Randomize Array
        </Button>
        <Button variant="outlined" color="primary" onClick={this.props.sort}>
          Start Sorting
        </Button>
        </Paper>
      </Box>
    );
  }
}
