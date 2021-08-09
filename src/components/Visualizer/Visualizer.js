import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Canvas from "./Array/Canvas";
import SettingsBar from "./SettingsBar";
import Typography from "@material-ui/core/Typography";

export default class Visualizer extends Component {
  constructor(props) {
    super(props);
    this.props.array.forEach((el) => console.log("Visualizer: " + el));
  }

  render() {
    return (
      <Grid className="main-panel">
        <Typography variant="h4">{this.props.selectedAlgorithm}</Typography>
        <Canvas array={this.props.array} isSorted={this.props.isSorted}/>
        <SettingsBar randomize={this.props.randomize} sort={this.props.sort} isSorting={this.props.isSorting} stop={this.props.stop}/>
      </Grid>
    );
  }
}
