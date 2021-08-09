import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Canvas from "./Array/Canvas";
import SettingsBar from "./SettingsBar";
import Typography from "@material-ui/core/Typography";

export default class Visualizer extends Component {
  updateAnimation = null;
  constructor(props) {
    super(props);
    this.props.array.forEach((el) => console.log("Visualizer: " + el));
  }

  sort = () => {
    this.props.setIsSorting(true);
    let sorting = this.props.algorithms[this.props.selectedAlgorithm](this.props.array);
    let iteration = sorting.next();
    this.updateAnimation = setInterval(() => {
      let arr = [...iteration.value];
      //console.log(iteration.value);
      this.props.setArray(arr);
      iteration = sorting.next();
      if (iteration.done === "true" || !iteration.value) {
        clearInterval(this.updateAnimation);
        this.props.setIsSorting(false);
        this.props.setIsSorted(true);
      }
    }, 200);
  }

  stop = () => {
    //console.log("ID: " + this.updateAnimation);
    clearInterval(this.updateAnimation);
    this.props.setIsSorting(false);
  }

  render() {
    return (
      <Grid className="main-panel">
        <Typography variant="h4">{this.props.selectedAlgorithm}</Typography>
        <Canvas array={this.props.array} isSorted={this.props.isSorted}/>
        <SettingsBar randomize={this.props.randomize} sort={this.sort} isSorting={this.props.isSorting} stop={this.stop}/>
      </Grid>
    );
  }
}
