import React, { Component, PureComponent } from "react";

export default class StateExample extends PureComponent {
  // Use PureComponent instead of React.component or Component to prevent unnecessary re-rendering if state is not updating.
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }

  render() {
    console.log("Component re-render ho rha hai.");
    return (
      <>
        <div className="flex justify-center items-center h-screen">
          <div>
            <h1 className="text-[40px]">
              Value of count is: {this.state.count}
            </h1>
            <button
              onClick={() => this.setState({ count: this.state.count + 1 })}
              className="p-3 mt-4 bg-orange-500 text-slate-50 font-semibold"
            >
              Update count
            </button>
          </div>
        </div>
      </>
    );
  }
}
