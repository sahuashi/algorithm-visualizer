import React, { Component } from "react";
import { Paper, Box, Button, Slider, Typography} from "@material-ui/core";
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

export default class SettingsBar extends Component {

  handleSizeChange = (event, value) => {
    this.props.handleSizeChange(value);
    this.props.randomize();
  }

  handleSpeedChange = (event, speed) => {
    this.props.handleSpeedChange(speed);
  }

  render() {
    let sortButton = this.props.isSorting? 
    <Button className="button" variant="contained" disabled>Sorting...</Button> 
    : <Button className="button" variant="contained" disableElevation onClick={this.props.sort}>Sort</Button>
    return (
      <Box p={5} mx="auto" width={1/2}>
        <Paper elevation={3}>
        <Typography variant="overline" display="block">Options</Typography>
        {sortButton}
        <ToggleButtonGroup
      value={this.props.selectedSpeed}
      exclusive
      onChange={this.handleSpeedChange}
      size='small'
    >
      <ToggleButton value={0.5} disabled={this.props.isSorting}>0.5x</ToggleButton>
        <ToggleButton value={1} disabled={this.props.isSorting}>1x</ToggleButton>
        <ToggleButton value={2} disabled={this.props.isSorting}>2x</ToggleButton>
    </ToggleButtonGroup>
    <Button className="button blue" disableElevation variant="contained" color="primary" onClick={this.props.randomize} disabled={this.props.isSorting}>
          Randomize Array
        </Button>
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
