import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    console.log("sidebar");
  }
  
  render() {
    return (
      <Drawer variant="permanent" anchor="left" className="drawer">
        <List>
          <ListItem>
            <ListSubheader>Algorithm Visualizer</ListSubheader>
          </ListItem>
          <ListItem>
            <ListItemText secondary align="center">
              Sorting Algorithms
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText>Bubble Sort</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText>Insertion Sort</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText>Merge Sort</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText>Quick Sort</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText>Selection Sort</ListItemText>
          </ListItem>
        </List>
      </Drawer>
    );
  }
}
