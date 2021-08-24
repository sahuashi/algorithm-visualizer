import React, { Component } from 'react';

import { Paper, Box } from '@material-ui/core';

import ElementBar from './ElementBar';

export default class Canvas extends Component {
  render() {
    return (
      <Box p={5} mx="auto" width={1 / 3}>
        <Paper elevation={0}>
          {this.props.array.map((number, index) => (
            <ElementBar key={`${number}_${index}`} height={number} />
          ))}
        </Paper>
      </Box>
    );
  }
}
