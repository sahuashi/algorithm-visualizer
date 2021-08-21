import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";
import Canvas from "./Array/Canvas";
import SettingsBar from "./SettingsBar";
import StatusBar from "./StatusBar";
import randomizeArray from '../../helpers/randomizer.js'

export default class Visualizer extends Component {
  iterations = [];
  counter = 0;

  randomize = () => {
    let arr = randomizeArray(this.props.selectedSize);
    this.props.setIsSorted(false);
    this.props.setArray(arr);
  }

  sort = () => {
    if(this.props.isSorted) return;
    this.props.setIsSorting(true);
    let sorting = this.props.algorithms[this.props.selectedAlgorithm][0](this.props.array, 0, this.props.array.length-1);
    let iteration = sorting.next();
    while(iteration.value){
      this.iterations.push([...iteration.value]);
      iteration = sorting.next();
    }
    requestAnimationFrame(this.animateIterations);
  }
  
  animateIterations = () => {
    let arr = [...this.iterations[this.counter]];
    this.props.setArray(arr);
    this.counter++;
    if (this.counter !== this.iterations.length) {
      setTimeout(() => {
        requestAnimationFrame(this.animateIterations);
      }, 1000 / (this.props.selectedSpeed*7));
    }
    else {
      this.props.setIsSorting(false);
      this.props.setIsSorted(true);
    }
  }

  render() {
    return (
      <Grid className="main-panel">
        <Typography variant="h5">{this.props.selectedAlgorithm}</Typography>
        <Canvas array={this.props.array}/>
        <StatusBar isSorted={this.props.isSorted}/>
        <SettingsBar randomize={this.randomize} sort={this.sort} isSorting={this.props.isSorting} 
        selectedSize={this.props.selectedSize} setSelectedSize={this.props.setSelectedSize} 
        selectedSpeed={this.props.selectedSpeed} setSelectedSpeed={this.props.setSelectedSpeed}/>
      </Grid>
    );
  }
}
