import React, { useEffect, useState } from "react";
import LeadScreen from "./LeadScreen";
import CategoryCards from "./CategoryCards";
import Slider from "./Slider";
import axios from "axios";
import Link from "next/link";
import Skeleton from "./skeletons/skeleton";
import CategorySkel from "./skeletons/CategorySkel";

function Home() {
  const [freedemyCategory, setFreedemyCategory] = React.useState([]);
  const [googleCategory, setGoogleCategory] = useState([]);
  const [freedemyTotal, setFreedemyTotal] = useState(0);
  const [googleTotal, setGoogleTotal] = useState(0);

  useEffect(() => {
    axios
      .get("https://freedemyclient.herokuapp.com/api/all-details") // heroku
      .then((data) => {
        setFreedemyCategory(data.data.freedemy);
        setGoogleCategory(data.data.google);
        setFreedemyTotal(data.data.total.freedemy);
        setGoogleTotal(data.data.total.google);
      });
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", scrolledTrigged);
    }
    // if (document.querySelector(".search-bar input") != undefined) {
    //   document.querySelector(".search-bar input").value = ``;
    // }
  }, []);

  function scrolledTrigged(e) {
    var compare = window.innerWidth <= 768 ? 5 : window.innerHeight - 100;
    if (window.pageYOffset + 2 >= compare) {
      if (!document.querySelector("body").classList.contains("header-scrolled"))
        document.querySelector("body").classList.add("header-scrolled");
    } else if (window.pageYOffset < compare) {
      if (document.querySelector("body").classList.contains("header-scrolled"))
        document.querySelector("body").classList.remove("header-scrolled");
    }
  }

  function renderCategories(which) {
    var whichCategoryArray;
    which === "google"
      ? (whichCategoryArray = googleCategory)
      : (whichCategoryArray = freedemyCategory);
    return whichCategoryArray.map((element, index) => {
      return (
        <Link
          // = /google/Digital Marketing
          href={`/${which}/${element.category}`}
          style={{ textDecoration: "none", color: "inherit" }}
          key={index}
          passHref
        >
          <a>
            <CategoryCards
              title={element.category}
              total={element.count}
              image={element.image}
            />
          </a>
        </Link>
      );
    });
  }
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <div>
      {typeof window !== "undefined" &&
        window.scrollTo({ top: 0, behavior: "smooth" })}

      <div className="container">
        <div className="section s1">
          <LeadScreen />
        </div>

        <div className="section s2">
          <div>
            {googleTotal === 0 ? (
              <h1 className="choose-category">
                <Skeleton type="category-title" />
              </h1>
            ) : (
              <h1 className="choose-category">
                Google Courses{" "}
                <span className="choose-category-light">
                  ({numberWithCommas(googleTotal)} Courses)
                </span>
              </h1>
            )}
            <div className="card-container" name="google">
              {googleCategory.length < 1
                ? [1, 2, 3].map((e, index) => <CategorySkel key={index} />)
                : renderCategories("google")}
            </div>
            {freedemyTotal === 0 ? (
              <h1 className="choose-category">
                <Skeleton type="category-title" />
              </h1>
            ) : (
              <h1 className="choose-category ">
                Udemy Courses{" "}
                <span className="choose-category-light">
                  ({numberWithCommas(freedemyTotal)} Courses)
                </span>
              </h1>
            )}
            <div className="card-container " name="freedemy">
              {googleCategory.length < 1
                ? [1, 2, 3, 4, 5, 6].map((e, index) => (
                    <CategorySkel key={index} />
                  ))
                : renderCategories("udemy")}
            </div>
          </div>
          <Slider />
          <div className="app-promo">
            <img
              className="app-promo-img"
              src={"photos/app.JPG"}
              alt="Mobile with Freedemy App"
            />
            <Link
              href="https://play.google.com/store/apps/details?id=com.binarybite.freedemy.freedemy"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="app-promo-ps"
                src={"photos/google-play-badge.png"}
                alt="Mobile with Freedemy App"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
