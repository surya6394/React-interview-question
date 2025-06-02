import React from "react";
import StateExample from "./StateExample";
import ParentComp from "./PropsExample/ParentComp";

const PureComponent = () => {
  // Use PureComponent instead of React.component or Component to prevent unnecessary re-rendering if state is not updating.
  return (
    <>
    <div className="m-20 text-[24px]">Use PureComponent instead of React.component or Component to prevent unnecessary re-rendering if state is not updating.</div>
      <div className="flex gap-20">
        <StateExample />
        <ParentComp />
      </div>
    </>
  );
};

export default PureComponent;
