import React from "react";

function CategoryCards(props) {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className="new-category-card">
      <h2 className="new-title">
        {props.title} ({numberWithCommas(props.total)})
      </h2>
      <div
        className="category-img"
        style={{
          background: `url(${props.image}) no-repeat`,
          backgroundPosition: "bottom",
          backgroundSize: "contain",
        }}
      ></div>
    </div>
  );
}
export default CategoryCards;
