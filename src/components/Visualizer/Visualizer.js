import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";
import Canvas from "./Array/Canvas";
import SettingsBar from "./Options/SettingsBar";
import StatusBar from "./Options/StatusBar";
import randomizeArray from '../../helpers/randomizer.js'

export default class Visualizer extends Component {
  constructor(props){
    super(props);
    this.state = {
      isSorted: false,
      isSorting: false,
      selectedSize: 15,
      selectedSpeed: 1,
      array: randomizeArray(15),
    }
  }

  randomize = () => {
    let arr = randomizeArray(this.state.selectedSize);
    this.setState({
      isSorted: false,
      array: arr
    });
  }

  sort = () => {
    let iterations = [];
    if(this.state.isSorted) return;
    this.setState({
      isSorting: true
    })
    let sorting = this.props.algorithms[this.props.selectedAlgorithm][0](this.state.array, 0, this.state.array.length-1);
    let iteration = sorting.next();
    while(iteration.value){
      iterations.push([...iteration.value]);
      iteration = sorting.next();
    }
    requestAnimationFrame(this.animateIterations.bind(this, iterations));
  }
  
  counter = 0;
  animateIterations = (iterations) => {
    let arr = [...iterations[this.counter]];
    this.setState({
      array: arr
    })
    this.counter++;
    if (this.counter !== iterations.length) {
      setTimeout(() => {
        requestAnimationFrame(this.animateIterations.bind(this, iterations));
      }, 1000 / (this.state.selectedSpeed*8));
    }
    else {
      this.setState({
        isSorting: false,
        isSorted: true
      })
    }
  }

  handleSpeedChange = (speed) => {
    this.setState({
      selectedSpeed: speed
    })
  }

  handleSizeChange = (size) => {
    this.setState({
      selectedSize: size
    })
  }

  render() {
    return (
      <Grid className="main-panel">
        <Typography variant="h5">{this.props.selectedAlgorithm}</Typography>
        <Canvas array={this.state.array}/>
        <StatusBar isSorted={this.state.isSorted}/>
        <SettingsBar 
          randomize={this.randomize} 
          sort={this.sort} 
          {...this.state} 
          handleSizeChange={this.handleSizeChange}
          handleSpeedChange={this.handleSpeedChange}
        />
      </Grid>
    );
  }
}
