import React from "react";
import ErrorBoundaries from "./ErrorBoundaries";
import Counter from "./Counter";
import DetailsPage from "./DetailsPage";

const ErrorBoundaryHome = () => {
  return (
    <>
      <ErrorBoundaries>
        <DetailsPage />
      </ErrorBoundaries>
      <ErrorBoundaries>
        <Counter />
      </ErrorBoundaries>
    </>
  );
};

export default ErrorBoundaryHome;
