import React, { useState, useEffect } from "react";
import axios from "axios";
import CourseSkel from "./skeletons/CourseSkel";
import CourseCards from "./CourseCards";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination } from "swiper";
import config from "../config";
SwiperCore.use(Pagination);
function Slider() {
  const [trendingCourses, setTrendingCourses] = useState([]);
  const baseUrl = config();
  useEffect(() => {
    // axios.get("https://freedemyclient.herokuapp.com/trending-courses").then(
    // axios.get("https://freedemyclientapi.onrender.com/trending-courses").then(
    axios.get(`${baseUrl}/trending-courses`).then((data) => {
      setTrendingCourses(data.data);
    });
  }, []);

  return (
    <div className="trending-course-slider">
      <h2 className="choose-category">Trending Courses</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        pagination={true}
        breakpoints={{
          1400: { slidesPerView: 3 },
          900: { slidesPerView: 2 },
          500: { slidesPerView: 1 },
          0: { slidesPerView: 1 },
        }}
        centeredSlides={true}
      >
        {trendingCourses.length < 1
          ? [1, 2, 3].map((e, index) => (
              <SwiperSlide key={index}>
                <CourseSkel trending={true} />
              </SwiperSlide>
            ))
          : trendingCourses.map((e, index) => (
              <SwiperSlide key={index}>
                <Link
                  href={`/udemy/course/${e.title}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <a>
                    <CourseCards data={e} trending={true} />
                  </a>
                </Link>
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
}
export default Slider;
