import React, { Component } from 'react';
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

export default class StatusBar extends Component {
    render() {
        var status = this.props.isSorted? "Sorted" : "Not sorted";
        return (
            <Box p={1} mx="auto" width={1/4}>
            <Paper elevation={3}>
            <Typography variant="subtitle1">Status: {status}</Typography>
            </Paper>
          </Box>
        )
    }
}
