import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import CancelIcon from "@material-ui/icons/Close";

import Link from "next/link";
function SearchBar(props) {
  const [blurred, setBlurred] = React.useState(false);
  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <span className="search-icon">
          <SearchIcon />
        </span>
        <input
          autoComplete="off"
          spellCheck="false"
          onChange={props.searching}
          type="text"
          name="search"
          id="search"
          placeholder="Search Something"
          onBlur={() => {
            setTimeout(() => {
              setBlurred(true);
            }, 100);
          }}
          onFocus={() => {
            setBlurred(false);
          }}
        />
        <span className="cancel-icon-mobile">
          <CancelIcon
            onClick={() => {
              document.querySelector("body").classList.remove("clicked-search");
              document.querySelector(".search-bar input").blur();
              document.querySelector(".search-bar input").value = "";
            }}
          />
        </span>
      </div>

      <div
        style={{
          display:
            props.data.length !== 0 && blurred === false ? "block" : "none",
        }}
        className="result-holder"
      >
        <ul>
          {props.data.map((elem, index) => {
            var titleUrl = elem.title;
            if (titleUrl.includes("%")) {
              titleUrl = titleUrl.replace("%", "percentageSign");
            }
            var megaCategory = "udemy";

            if (
              elem.category === "Digital Marketing" ||
              elem.category === "Career Development" ||
              elem.category === "Data and Tech"
            ) {
              megaCategory = "google";
            }

            return (
              <Link
                // href={`/details/${megaCategory}/${titleUrl}`}
                href={`/${megaCategory}/course/${titleUrl}`}
                style={{ textDecoration: "none", color: "inherit" }}
                key={index}
              >
                <li key={index}>
                  <div className="flex">
                    <img alt="" src={elem.image}></img>
                    <span>
                      <p className="search-title">{elem.title}</p>
                      <p className="search-category">{elem.category}</p>
                    </span>
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SearchBar;
