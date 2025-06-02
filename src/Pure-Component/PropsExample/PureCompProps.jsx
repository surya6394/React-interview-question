import React, { Component } from "react";

export default class PureCompProps extends Component {
  render() {
    return (
      <>
        <div className="flex justify-center items-center">
          <div>
            <h1 className="text-[40px]">
              Value of count is: {this.props.count}
            </h1>
          </div>
        </div>
      </>
    );
  }
}
