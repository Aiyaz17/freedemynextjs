import React from "react";

function TeacherName(props) {
  return (
    <p className="teacher-name" title={props.title}>
      <span style={{ fontSize: "19px" }}>Instructor : </span>{" "}
      {props.teacherName}
    </p>
  );
}
export default TeacherName;
