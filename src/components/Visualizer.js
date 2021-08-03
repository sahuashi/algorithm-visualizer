import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Canvas from "./Canvas";
import SettingsBar from "./SettingsBar";

export default class Visualizer extends Component {
  render() {
    return (
      <Grid className="main-panel">
        <Canvas />
        <SettingsBar />
      </Grid>
    );
  }
}
