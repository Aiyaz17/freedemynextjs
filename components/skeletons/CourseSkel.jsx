import React from "react";
import Skeleton from "./skeleton";
function CourseSkel(props) {
  var margin = {
    marginRight: "40px",
  };
  return (
    <div className="skeleton-wrapper">
      <div
        className="skeleton-course"
        style={props.trending === true ? margin : null}
      >
        <Skeleton type="image" width="100%" />
        <Skeleton />
        <Skeleton type="text" />
        <Skeleton type="text" />
      </div>
    </div>
  );
}

export default CourseSkel;
