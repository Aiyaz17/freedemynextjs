import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";

function LeadScreen() {
  const [showAnimations, setShowAnimations] = useState(false);
  useEffect(() => {
    setShowAnimations(true);
  }, []);
  return (
    <div className="leadScreen-container">
      <div className="leadScreen leadScreen-container ">
        <Fade when={showAnimations}>
          <div className="leadScreen-side">
            <h1 className="leadScreen-top">
              Get <span className="blue">Free</span> Udemy Courses!
            </h1>
            <h2 className="leadScreen-text">
              Search Among more than <span className="blue">5000+</span> free
              Udemy courses.
            </h2>
          </div>
        </Fade>
        <Fade when={showAnimations}>
          <img
            src={"photos/landingNoBg.svg"}
            className="leadScreen-svg"
            alt="Lead SVG"
          />
        </Fade>
      </div>
      <Fade bottom when={showAnimations}>
        <p className="leadScreen-bottom">
          Learn Upgrade <span className="blue">Achieve!</span>
        </p>
      </Fade>
    </div>
  );
}
export default LeadScreen;
