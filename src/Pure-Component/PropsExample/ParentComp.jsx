import React, { Component, PureComponent } from "react";
import PureCompProps from "./PureCompProps";

export default class ParentComp extends PureComponent {
    // Use PureComponent instead of React.component or Component to prevent unnecessary re-rendering if state is not updating.
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }
  render() {
    console.log("Component re-rendering issue on prop changes.")
    return (
      <>
        <div className="flex justify-center items-center h-screen">
          <div>
            <PureCompProps count={this.state.count} />
            <button onClick={() => this.setState({count: this.state.count+2})} className="p-3 rounded-lg bg-blue-600 text-slate-50 font-semibold">
                Update Props
            </button>
          </div>
        </div>
      </>
    );
  }
}
