import React, { Component, useState } from "react";
import TreeView from "react-jstree-table";

export class Tree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        core: {
          data: [
            {
              text: props?.data,
              children: props?.data,
            },
          ],
        },
      },
      selected: [],
    };
  }

  handleClick() {
    this.setState({
      data: {
        core: {
          data: [
            {
              text: "Root node",
              children: "newData",
            },
          ],
        },
      },
    });
  }

  handleChange(e, data) {
    this.setState({
      selected: data.selected,
    });
  }

  render() {
    const data = this.state.data.core.data;
    console.log(this.props);

    return <TreeView onChange={(e, data) => this.handleChange(e, data)} />;
  }
}
