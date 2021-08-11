import React, { Component } from "react";
import { Drawer, List, ListItem, ListItemText, ListSubheader, Typography } from "@material-ui/core";

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
              <ListItemText disableTypography primary={<Typography variant="body2">{algo}</Typography>}/>
              {this.props.algorithms[algo][1]}
            </ListItem>
          ))}
        </List>
      </Drawer>
    );
  }
}
