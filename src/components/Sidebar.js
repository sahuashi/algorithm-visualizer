import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

export default class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <Drawer variant="permanent" anchor="left">
          <List>
            <ListItem>
              <ListSubheader>Algorithm Visualizer</ListSubheader>
            </ListItem>
            <ListItem>
              <ListItemText secondary align="center">Sorting Algorithms</ListItemText>
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
      </div>
    );
  }
}
