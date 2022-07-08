import React from "react";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarHalfIcon from "@material-ui/icons/StarHalf";
function Rating(props) {
  var starsArray = [];

  var rating = props.rating;
  var halfStar = rating % 1;
  var halfStarAdded = false;
  for (var i = 0; i < 5.0; i++) {
    if (i < Math.floor(rating)) {
      starsArray.push(<StarIcon key={i} fontSize="small" />);
    } else if (halfStar > 0 && halfStarAdded === false) {
      starsArray.push(<StarHalfIcon key={i} fontSize="small" />);
      halfStarAdded = true;
    } else {
      starsArray.push(<StarBorderIcon key={i} fontSize="small" />);
    }
  }

  return (
    <p className="card-rating" title={props.title}>
      {props.rating}
      <span className="stars">{starsArray.map((elem) => elem)}</span>
    </p>
  );
}
export default Rating;
