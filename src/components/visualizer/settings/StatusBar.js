import React, { Component } from 'react';
import { Box, Chip, Typography } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';

export default class StatusBar extends Component {
  render() {
    const status = (
      <Typography variant="subtitle1">
        Status:
        {this.props.isSorted ? ' Sorted' : ' Not sorted'}
      </Typography>
    );
    const icon = this.props.isSorted ? <CheckCircleOutlineIcon style={{ color: 'white' }} /> : <ClearOutlinedIcon />;
    const style = this.props.isSorted ? { backgroundColor: 'cadetblue', color: 'white' } : null;
    return (
      <Box p={0} mx="auto">
        <Chip icon={icon} style={style} label={status} />
      </Box>
    );
  }
}
