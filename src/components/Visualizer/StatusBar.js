import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';

export default class StatusBar extends Component {
    render() {
        var status = <Typography variant="subtitle1">Status: {this.props.isSorted ? "Sorted" : "Not sorted"}</Typography>;
        var icon = this.props.isSorted ? <CheckCircleOutlinedIcon /> : <ClearOutlinedIcon/>;
        return (
            <Box p={0} mx="auto">
                <Chip icon={icon} label={status}></Chip>
            </Box>
        )
    }
}
