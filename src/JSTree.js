import React, { Component } from "react";
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
              children: props?.children,
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

    return (
      <TreeView
        treeData={data[0]}
        treeSearchData={data[0]}
        onChange={(e, data) => this.handleChange(e, data)}
      />
    );
  }
}
