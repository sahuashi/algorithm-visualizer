import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';

export default class StatusBar extends Component {
    render() {
        var status = <Typography variant="subtitle1">Status: {this.props.isSorted ? "Sorted" : "Not sorted"}</Typography>;
        var icon = this.props.isSorted ? <CheckCircleOutlineIcon style={{color: 'white'}}/> : <ClearOutlinedIcon/>;
        var style = this.props.isSorted? {backgroundColor:'cadetblue', color:'white'} : null;
        return (
            <Box p={0} mx="auto">
                <Chip icon={icon} style={style} label={status}></Chip>
            </Box>
        )
    }
}
