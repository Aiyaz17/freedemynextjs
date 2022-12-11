import React, { useEffect, useState } from "react";
import Rating from "./Rating";
import TeacherName from "./TeacherName";
import ReorderIcon from "@material-ui/icons/Reorder";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import BarChartIcon from "@material-ui/icons/BarChart";
import Axios from "axios";
import Skeleton from "./skeletons/skeleton";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import { useRouter } from "next/router";
function CourseDetails() {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [onTabletOrLess, setOnTabletOrLess] = useState(false);
  const [megaCategory, setMegaCategory] = useState("google");
  var DetailPagePaddingGoogle;
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    if (router.asPath !== router.route) {
      // /details/google/Land your next job
      var url = router.asPath.split("/");
      setMegaCategory(url[1]);
      Axios.get(
        // "https://freedemyclient.herokuapp.com" + `/details/${url[1]}/${url[3]}`
        "https://freedemyclientapi.onrender.com" + `/details/${url[1]}/${url[3]}`
      ) // heroku
        .then((data) => {
          setDetails(data.data);
          setLoading(false);
        });
      if (window.innerWidth <= 768) {
        setOnTabletOrLess(true);
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
      document.querySelector(".search-bar input").value = ``;
      changeDetailScreenPadding();
    }
  }, [router]);

  var categoryColor = {
    backgroundColor: "#324FF0",
    opacity: "0.9",
  };
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function changeDetailScreenPadding() {
    DetailPagePaddingGoogle = { padding: "30px 0px 130px 20px" };
    if (window.innerWidth <= 425 && window.innerWidth >= 0) {
      DetailPagePaddingGoogle = { padding: "30px 0px 30px 20px" };
    }
  }
  return (
    <div className="section s3">
      <div className="course-details-container">
        <div className="course-details">
          <div className="details-image-container">
            <div className="details-image-mini-container">
              {loading ? (
                <Skeleton type="image" />
              ) : (
                <img className="details-image" src={details.image} alt="" />
              )}
              {megaCategory === "google" ? (
                <div className="basic-details ">
                  <div className="basic-details-child">
                    <span
                      className="basic-details-icons"
                      style={{ color: "#324FF0" }}
                    >
                      <ReorderIcon />
                    </span>
                    {loading ? (
                      <Skeleton type="small-text" width="40%" />
                    ) : (
                      details.numberOfModules
                    )}
                  </div>
                  <div className="basic-details-child">
                    <span
                      className="basic-details-icons"
                      style={{ color: "#324FF0" }}
                    >
                      <QueryBuilderIcon />
                    </span>

                    {loading ? (
                      <Skeleton type="small-text" width="40%" />
                    ) : (
                      details.duration
                    )}
                  </div>
                  <div className="basic-details-child">
                    <span
                      className="basic-details-icons"
                      style={{ color: "#324FF0" }}
                    >
                      <BarChartIcon />
                    </span>
                    {loading ? (
                      <Skeleton type="small-text" width="40%" />
                    ) : (
                      details.difficulty
                    )}
                  </div>
                </div>
              ) : (
                <div className="basic-details ">
                  <div className="basic-details-child">
                    <span
                      className="basic-details-icons"
                      style={{ color: "#324FF0" }}
                    >
                      <QueryBuilderIcon />
                    </span>
                    {loading ? (
                      <Skeleton type="small-text" width="40%" />
                    ) : (
                      <p>Duration : {Math.ceil(details.duration)} Hours</p>
                    )}
                  </div>
                  <div className="basic-details-child">
                    <span
                      className="basic-details-icons"
                      style={{ color: "#324FF0" }}
                    >
                      <SupervisorAccountIcon />
                    </span>
                    {loading ? (
                      <Skeleton type="small-text" width="40%" />
                    ) : (
                      <p>
                        {" "}
                        Students : {numberWithCommas(details.numberOfStudents)}
                      </p>
                    )}
                  </div>
                </div>
              )}
              {loading ? (
                <Skeleton type="buttons" />
              ) : (
                <a
                  href={details.courseLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <p className="enroll-button" style={categoryColor}>
                    Go to the Course
                  </p>
                </a>
              )}
            </div>
          </div>
          <div
            className="main-details"
            style={
              onTabletOrLess && megaCategory === "google"
                ? DetailPagePaddingGoogle
                : null
            }
          >
            {loading ? (
              <Skeleton type="small-text" width="20%" />
            ) : (
              <p className="details-category" style={categoryColor}>
                {details.category}
              </p>
            )}
            <div className="details-title">
              {loading ? <Skeleton type="title" width="80%" /> : details.title}
            </div>

            {loading ? (
              <div>
                <Skeleton type="text" width="30%" />
                <Skeleton type="text" width="30%" />
              </div>
            ) : (
              megaCategory === "udemy" && (
                <div>
                  <TeacherName
                    title={details.title}
                    teacherName={details.teacherName}
                  />
                  <span className="details-rating">
                    <Rating rating={details.rating} title={details.title} />
                  </span>
                </div>
              )
            )}
          </div>

          <div className="overview-bg">
            <div className="overview"></div>
            <p className="overview-heading details-title">Overview</p>
            <div className="details-subtitle">
              {loading ? (
                <div>
                  <Skeleton type="text" width="90%" />
                  <Skeleton type="text" width="90%" />
                </div>
              ) : (
                details.subtitle
              )}
            </div>
            {megaCategory === "udemy" ? (
              <div>
                <p className="what-heading">What you&apos;ll learn :</p>
                {loading ? (
                  [1, 2, 3, 4].map((e, i) => <Skeleton key={i} type="text" />)
                ) : (
                  <ul className="what">
                    {details.whatYouLearn.map((elem, index) => (
                      <li key={index} className="what-list">
                        {elem}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <div>
                <p
                  style={{ marginTop: "50px" }}
                  className="overview-heading details-title"
                >
                  About
                </p>

                <div
                  style={{ textAlign: "justify" }}
                  className="details-subtitle"
                >
                  {loading ? (
                    <div>
                      <Skeleton type="text" />
                      <Skeleton type="text" />
                      <Skeleton type="text" />
                      <Skeleton type="text" />
                    </div>
                  ) : (
                    details.about
                  )}
                </div>
              </div>
            )}
            {megaCategory === "udemy" && (
              <div>
                <p className="what-heading">Requirements</p>
                {loading ? (
                  [1, 2].map((e, i) => <Skeleton key={i} type="text" />)
                ) : (
                  <ul className="requirements">
                    {details.requirements.map((elem, index) => (
                      <li key={index} className="what-list">
                        {elem}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
          <p
            className="enroll-button back "
            style={categoryColor}
            onClick={() => {
              window.history.go(-1);
            }}
          >
            Back
          </p>
        </div>
      </div>
    </div>
  );
}
export default CourseDetails;
