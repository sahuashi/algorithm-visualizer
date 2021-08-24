import React, { Component } from 'react';

import {
  Paper, Box, Button, Slider, Typography,
} from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';

export default class SettingsBar extends Component {
  handleSizeChange = (event, size) => {
    this.props.handleSizeChange(size);
    this.props.randomize();
  }

  handleSpeedChange = (event, speed) => {
    this.props.handleSpeedChange(speed);
  }

  render() {
    const sortButton = this.props.isSorting
      ? <Button className="button" variant="contained" disabled>Sorting...</Button>
      : <Button className="button" variant="contained" disableElevation onClick={this.props.sort}>Sort</Button>;
    return (
      <Box p={5} mx="auto" width={1 / 2}>
        <Paper elevation={3}>
          <Typography variant="overline" display="block">Options</Typography>
          {sortButton}
          <ToggleButtonGroup
            size="small"
            exclusive
            value={this.props.selectedSpeed}
            onChange={this.handleSpeedChange}
          >
            <ToggleButton value={0.5} disabled={this.props.isSorting}>0.5x</ToggleButton>
            <ToggleButton value={1} disabled={this.props.isSorting}>1x</ToggleButton>
            <ToggleButton value={2} disabled={this.props.isSorting}>2x</ToggleButton>
          </ToggleButtonGroup>
          <Button
            color="primary"
            disableElevation
            variant="contained"
            className="button blue"
            onClick={this.props.randomize}
            disabled={this.props.isSorting}
          >
            Randomize Array
          </Button>
          <Typography variant="overline" display="block">Number of Elements</Typography>
          <Slider
            min={5}
            max={25}
            style={{ width: '70%' }}
            valueLabelDisplay="auto"
            key={this.props.selectedSize}
            disabled={this.props.isSorting}
            defaultValue={this.props.selectedSize}
            onChangeCommitted={this.handleSizeChange}
          />
        </Paper>
      </Box>
    );
  }
}
