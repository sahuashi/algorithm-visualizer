import React, { Component } from "react";
import { Paper, Box, Button } from "@material-ui/core";

export default class SettingsBar extends Component {
  render() {
    let sortButton = this.props.isSorting? 
    <Button className="button" variant="contained" onClick={this.props.stop}>Stop</Button> 
    : <Button className="button" variant="contained" onClick={this.props.sort}>Sort</Button>
    return (
      <Box p={5} mx="auto" width={1/3}>
        <Paper elevation={3}>
        <Button className="button blue" variant="contained" color="primary" onClick={this.props.randomize}>
          Randomize Array
        </Button>
        {sortButton}
        </Paper>
      </Box>
    );
  }
}
