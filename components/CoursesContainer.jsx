import React from "react";
import CourseCards from "./CourseCards";
function CoursesContainer(props) {
  return (
    <div className="card-container">
      <CourseCards image={props.exampleCardData.image} />
    </div>
  );
}
export default CoursesContainer;
