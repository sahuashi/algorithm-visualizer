import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Typography from "@material-ui/core/Typography";

export default class Sidebar extends Component {
  render() {
    return (
      <Drawer variant="permanent" anchor="left" className="drawer">
        <List>
          <ListItem>
            <ListSubheader>Algorithm Visualizer</ListSubheader>
          </ListItem>
          <ListItem>
            <ListItemText align="center" disableTypography primary={<Typography variant="body2">Sorting Algorithms</Typography>}/>
          </ListItem>
          {Object.keys(this.props.algorithms).map((algo, index) => (
            <ListItem key={index} button onClick={() => this.props.setSelectedAlgorithm(algo)}>
              {this.props.icons[Object.keys(this.props.icons)[index]]}
              <ListItemText style={{padding: '5px'}} disableTypography primary={<Typography variant="body2">{algo}</Typography>}/>
            </ListItem>
          ))}
        </List>
      </Drawer>
    );
  }
}
