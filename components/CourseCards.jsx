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
        <h2 className="card-title">{props.data.title}</h2>
        <h3 className="sub-title">{props.data.subtitle}</h3>
        <p className="sub-title card-duration">
          Duration : <span className="card-duration-span">{duration}hr</span>
        </p>
      </div>
    </div>
  );
}
export default CourseCards;
