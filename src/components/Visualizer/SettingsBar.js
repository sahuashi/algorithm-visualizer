import React, { Component } from "react";
import { Paper, Box, Button, Slider, Typography } from "@material-ui/core";

export default class SettingsBar extends Component {

  handleSizeChange = (event, value) => {
    this.props.setSelectedSize(value);
    this.props.randomize();
  }

  handleSpeedChange = (e) => {
    let val = parseInt(e.currentTarget.value);
    this.props.setSelectedSpeed(val);
  }

  render() {
    let sortButton = this.props.isSorting? 
    <Button className="button" variant="contained" disabled>Sorting...</Button> 
    : <Button className="button" variant="contained" onClick={this.props.sort}>Sort</Button>
    return (
      <Box p={5} mx="auto" width={1/2}>
        <Paper elevation={3}>
        <Typography variant="overline" display="block">Options</Typography>
        {sortButton}
        <Button className="button blue" variant="contained" color="primary" onClick={this.props.randomize} disabled={this.props.isSorting}>
          Randomize Array
        </Button>
        <Button value="1" color="secondary" onClick={this.handleSpeedChange} disabled={this.props.isSorting}>1x</Button>
        <Button value="2" color="primary" onClick={this.handleSpeedChange} disabled={this.props.isSorting}>2x</Button>
        <Button value="4" onClick={this.handleSpeedChange} disabled={this.props.isSorting}>4x</Button>
        <Typography variant="overline" display="block">Number of Elements</Typography>
        <Slider 
        key={this.props.selectedSize}
        style={{width: '70%'}}
        defaultValue={this.props.selectedSize}
        valueLabelDisplay="auto"
        min={5}
        max={25}
        onChangeCommitted={this.handleSizeChange}
        disabled={this.props.isSorting}
      />
        </Paper>
      </Box>
    );
  }
}
