import React, { Component } from 'react';

import { Grid, Typography } from '@material-ui/core';

import randomizeArray from '../../helpers/randomizer';
import Canvas from './canvas/Canvas';
import SettingsBar from './settings/SettingsBar';
import StatusBar from './settings/StatusBar';

export default class Visualizer extends Component {
  counter = 0;

  iterations = [];

  constructor(props) {
    super(props);
    this.state = {
      isSorted: false,
      isSorting: false,
      selectedSize: 15,
      selectedSpeed: 1,
      array: randomizeArray(15),
    };
  }

  randomize = () => {
    const arr = randomizeArray(this.state.selectedSize);
    this.setState({
      isSorted: false,
      array: arr,
    });
  }

  sort = () => {
    if (this.state.isSorted) return;
    this.setState({
      isSorting: true,
    });
    const sorting = this.props.algorithms[this.props.selectedAlgorithm][0](this.state.array, 0, this.state.array.length - 1);
    let iteration = sorting.next();
    while (iteration.value) {
      this.iterations.push([...iteration.value]);
      iteration = sorting.next();
    }
    requestAnimationFrame(this.animateIterations);
  }

  animateIterations = () => {
    const arr = [...this.iterations[this.counter]];
    this.setState({
      array: arr,
    });
    this.counter++;
    if (this.counter !== this.iterations.length) {
      setTimeout(() => {
        requestAnimationFrame(this.animateIterations);
      }, 1000 / (this.state.selectedSpeed * 8));
    } else {
      this.setState({
        isSorting: false,
        isSorted: true,
      });
    }
  }

  handleSpeedChange = (speed) => {
    this.setState({
      selectedSpeed: speed,
    });
  }

  handleSizeChange = (size) => {
    this.setState({
      selectedSize: size,
    });
  }

  render() {
    return (
      <Grid className="main-panel">
        <Typography variant="h5">{this.props.selectedAlgorithm}</Typography>
        <Canvas array={this.state.array} />
        <StatusBar isSorted={this.state.isSorted} />
        <SettingsBar
          {...this.state}
          sort={this.sort}
          randomize={this.randomize}
          handleSizeChange={this.handleSizeChange}
          handleSpeedChange={this.handleSpeedChange}
        />
      </Grid>
    );
  }
}
