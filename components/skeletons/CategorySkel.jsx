import React from "react";
import Skeleton from "./skeleton";

function CategorySkel() {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton skeleton-category">
        <Skeleton type="name" width="80%" />
      </div>
    </div>
  );
}
export default CategorySkel;
