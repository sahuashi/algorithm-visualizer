import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";
import Canvas from "./Array/Canvas";
import SettingsBar from "./SettingsBar";
import StatusBar from "./StatusBar";

export default class Visualizer extends Component {
  render() {
    return (
      <Grid className="main-panel">
        <Typography variant="h5">{this.props.selectedAlgorithm}</Typography>
        <Canvas array={this.props.array}/>
        <StatusBar isSorted={this.props.isSorted}/>
        <SettingsBar randomize={this.props.randomize} sort={this.props.sort} isSorting={this.props.isSorting} 
        selectedSize={this.props.selectedSize} setSelectedSize={this.props.setSelectedSize} setSelectedSpeed={this.props.setSelectedSpeed}/>
      </Grid>
    );
  }
}
