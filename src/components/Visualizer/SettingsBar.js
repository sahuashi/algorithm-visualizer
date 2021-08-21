import React, { Component } from "react";
import { Paper, Box, Button, Slider } from "@material-ui/core";

export default class SettingsBar extends Component {

  handleChange = (event, value) => {
    this.props.setSelectedSize(value);
    this.props.randomize();
  }

  render() {
    let sortButton = this.props.isSorting? 
    <Button className="button" variant="contained" disabled>Sorting...</Button> 
    : <Button className="button" variant="contained" onClick={this.props.sort}>Sort</Button>
    return (
      <Box p={5} mx="auto" width={1/3}>
        <Paper elevation={3}>
        <Button className="button blue" variant="contained" color="primary" onClick={this.props.randomize}>
          Randomize Array
        </Button>
        {sortButton}
        <Slider 
        key={this.props.selectedSize}
        style={{width: '70%'}}
        defaultValue={this.props.selectedSize}
        valueLabelDisplay="auto"
        min={5}
        max={25}
        onChangeCommitted={this.handleChange}
        disabled={this.props.isSorting}
      />
        </Paper>
      </Box>
    );
  }
}
