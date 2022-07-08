import React from "react";
function CourseCards(props) {
  var duration;
  if (
    typeof props.data.duration != "number" &&
    props.data.duration.includes("Hours")
  ) {
    duration = props.data.duration.replace("Hours: ", "");
  } else {
    duration = Math.ceil(props.data.duration);
  }

  return (
    <div className="course-card">
      <img
        className="card-image"
        title={props.data.title}
        src={props.data.image}
        alt={props.data.title}
      />
      <div className="card-data">
        <h1 className="card-title">{props.data.title}</h1>
        <h2 className="sub-title">{props.data.subtitle}</h2>
        <p className="sub-title card-duration">
          Duration : <span className="card-duration-span">{duration}hr</span>
        </p>
      </div>
    </div>
  );
}
export default CourseCards;
