import React, { Component } from 'react';

import {
  Drawer, List, ListItem, ListItemText, ListSubheader, withStyles,
} from '@material-ui/core';

const styles = () => ({
  root: {
    position: 'relative',
    width: '200px',
    whiteSpace: 'nowrap',
  },
  item: {
    fontFamily: 'Work Sans',
  },
});

class Sidebar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Drawer
        anchor="left"
        variant="permanent"
        className={classes.root}
      >
        <List>
          <ListItem>
            <ListSubheader classes={{ root: classes.item }}>Algorithm Visualizer</ListSubheader>
          </ListItem>
          <ListItem>
            <ListItemText
              align="center"
              primary="Sorting Algorithms"
              classes={{ primary: classes.item }}
            />
          </ListItem>
          {Object.keys(this.props.algorithms).map((algo) => (
            <ListItem
              button
              key={algo}
              selected={this.props.selectedAlgorithm === algo}
              onClick={() => this.props.setSelectedAlgorithm(algo)}
            >
              <ListItemText
                align="center"
                primary={algo}
                classes={{ primary: classes.item }}
              />
              {this.props.algorithms[algo][1]}
            </ListItem>
          ))}
        </List>
      </Drawer>
    );
  }
}

export default withStyles(styles)(Sidebar);
