import React, { Component } from "react";
import { Drawer, List, ListItem, ListItemText, ListSubheader } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    position: 'relative',
    width: '200px',
    whiteSpace: 'nowrap'
  },
  item: {
    fontFamily: 'Work Sans',
  }
    });

class Sidebar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Drawer variant="permanent" anchor="left" className={classes.root}>
        <List>
          <ListItem>
            <ListSubheader classes={{root:classes.item}}>Algorithm Visualizer</ListSubheader>
          </ListItem>
          <ListItem>
          <ListItemText classes={{primary:classes.item}} align="center" primary="Sorting Algorithms"/>
          </ListItem>
          {Object.keys(this.props.algorithms).map((algo, index) => (
            <ListItem key={index} button selected={this.props.selectedAlgorithm === algo} onClick={() => this.props.setSelectedAlgorithm(algo)}>
              <ListItemText style={{textAlign:'center'}}classes={{primary:classes.item}} primary={algo}/>
              {this.props.algorithms[algo][1]}
            </ListItem>
          ))}
        </List>
      </Drawer>
    );
  }
}

export default withStyles(styles)(Sidebar);