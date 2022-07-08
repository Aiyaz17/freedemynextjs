import React from "react";
import Courses from "../../components/Courses";
import Meta from "../../components/Meta";

const Udemy = () => {
  return (
    <>
      <Meta
        title={"Udemy free courses with certification | Freedemy"}
        keywords={
          "discudemy,udemy for business,udemy coupon,udemy free courses, udemy sale, coursera free courses, free online courses with certificates, online english speaking course, online course for digital marketing"
        }
        description="More than 2000 FREE courses of Udemy all up to date and classified by categories."
      />
      <Courses />
    </>
  );
};

export default Udemy;
