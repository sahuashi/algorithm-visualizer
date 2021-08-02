import React from "react";
import Drawer from "@material-ui/core/Drawer";

export default class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <Drawer variant="permanent" anchor="left"></Drawer>
      </div>
    );
  }
}
