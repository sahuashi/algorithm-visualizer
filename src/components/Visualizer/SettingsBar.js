import React, { Component } from "react";
import { Paper, Box, Button, Slider, Typography} from "@material-ui/core";
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

export default class SettingsBar extends Component {

  handleSizeChange = (event, value) => {
    this.props.setSelectedSize(value);
    this.props.randomize();
  }

  handleSpeedChange = (event, speed) => {
    //let val = parseInt(speed);
    //console.log(this.props);
    //console.log(this.props.selectedSpeed);
    //alert(val);
    this.props.setSelectedSpeed(speed);
    console.log(this.props.selectedSpeed);
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
        <ToggleButtonGroup
      value={this.props.selectedSpeed}
      exclusive
      onChange={this.handleSpeedChange}
    >
      <ToggleButton value="1" disabled={this.props.isSorting}>1x</ToggleButton>
        <ToggleButton value="2" disabled={this.props.isSorting}>2x</ToggleButton>
        <ToggleButton value="4" disabled={this.props.isSorting}>4x</ToggleButton>
    </ToggleButtonGroup>
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
