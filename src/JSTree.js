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
              text: localStorage.getItem("name"),
              children: localStorage.getItem("item").split(","),
            },
          ],
        },
      },
      selected: [],
    };
  }

  handleClick() {
    const newData = localStorage.getItem("item").slice(",");
    newData.push({ text: "New child node" });
    this.setState({
      data: {
        core: {
          data: [
            {
              text: "Root node",
              children: newData,
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
    const data = this.state.data;
    console.log(data.core.data);

    return (
      <div>
        <TreeView
          treeData={data}
          onChange={(e, data) => this.handleChange(e, data)}
        />
      </div>
    );
  }
}
