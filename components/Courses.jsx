import React, { useEffect, useState } from "react";
import CourseCards from "./CourseCards";
import Loading from "./Loading";
import Link from "next/link";
import CourseSkel from "./skeletons/CourseSkel";
import { useRouter } from "next/router";
function Courses({ match }) {
  const [resultArray, setResultArray] = useState([]);
  const [onPage, setOnPage] = useState(1);
  const [loadMoreAnimation, setLoadMoreAnimation] = React.useState(false);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [megaCategory, setMegaCategory] = useState("");
  const [miniCategory, setMiniCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.asPath !== router.route) {
      setOnPage(1);
      setShowLoadMore(true);
      setLoading(true);
      // var [trash, megaCategory, clickedOn] = match.url.split("/");
      var megaCategory = router.pathname.split("/")[1];
      var clickedOn = router.query.category;
      setMegaCategory(megaCategory);
      setMiniCategory(clickedOn);
      if (clickedOn.includes("&")) clickedOn = clickedOn.replace("&", "%26");
      clickedOn = clickedOn.replaceAll(" ", "%20");
      // var url = `https://freedemyclient.herokuapp.com/api/${megaCategory}?page=${1}&category=${clickedOn}`; // heroku
      var url = `https://freedemyclientapi.onrender.com/api/${megaCategory}?page=${1}&category=${clickedOn}`; // heroku
      // var url = `https://free-demy.netlify.app/.netlify/functions/${megaCategory}?page=${1}&category=${clickedOn}`; // netlify
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setResultArray(data);
          setLoading(false);

          if (data.length !== 10) setShowLoadMore(false);
        });
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [router]);

  function loadMore() {
    setOnPage(onPage + 1);
    setLoadMoreAnimation(true);
    var clickedOn = miniCategory;
    clickedOn = clickedOn.replace(" ", "%20");
    if (clickedOn.includes("&")) clickedOn = clickedOn.replace("&", "%26");
    // var url = `https://freedemyclient.herokuapp.com/api/${megaCategory}?page=${
      var url = `https://freedemyclientapi.onrender.com/api/${megaCategory}?page=${
      onPage + 1
    }&category=${clickedOn}`; // heroku
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.length !== 10) setShowLoadMore(false);
        setLoadMoreAnimation(false);
        setResultArray((old) => {
          return old.concat(data);
        });
      });
  }

  return (
    <div className="section s2">
      <div>
        <h1
          className="choose-category"
          style={{ textAlign: "center", margin: "auto" }}
        >
          {miniCategory}
        </h1>
        <div className="courses-card-container">
          {loading
            ? [1, 2, 3, 4, 5, 6, 7, 8, 9].map((e, index) => {
                return <CourseSkel key={index} />;
              })
            : resultArray.map((elem, index) => {
                var titleUrl = elem.title;
                if (titleUrl.includes("%")) {
                  titleUrl = titleUrl.replace("%", "percentageSign");
                }
                return (
                  <Link
                    href={`/${megaCategory}/course/${titleUrl}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                    key={index}
                  >
                    <a>
                      <CourseCards id={index} key={index} data={elem} />
                    </a>
                  </Link>
                );
              })}
        </div>
        {loadMoreAnimation && <Loading maxWidth="250px" />}

        {showLoadMore ? (
          <p className="load-more" onClick={loadMore}>
            load more..
          </p>
        ) : null}
      </div>
    </div>
  );
}
export default Courses;
